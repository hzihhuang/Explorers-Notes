import { useCallback, useMemo, useRef, useState } from "react";
import { usePageData } from "rspress/runtime";
import { useXAgent } from "@ant-design/x";
import { BubbleDataType } from "@ant-design/x/es/bubble/BubbleList";

const useChat = () => {
  const { siteData } = usePageData();

  // ai 接口
  const [agent] = useXAgent<BubbleDataType>({
    baseURL: "https://open.bigmodel.cn/api/paas/v4/chat/completions",
    model: "glm-4-flash",
    dangerouslyApiKey: "447dc00d0b5ff3cd3eaeecadb2a25101.Yp2lbQgE1Am5lH7j",
  });

  // 当前对话列表
  const [bubbleData, setBubbleData] = useState<BubbleDataType[]>([]);
  const system = useMemo(() => {
    return [
      {
        role: "system",
        content: `你现在是博客站点的小助手，这个博客是${
          siteData.description
        },地址是「https://hzihhuang-site.github.io/Explorers-Notes/」，站点主要的文章内容如下：${siteData.pages
          .filter((page) => page.toc.length > 0)
          .map((page) => {
            const catalogue = page.toc.map((item) => item.text).join("、");
            const content = `文章「${page.title}」,他的路径是${page.routePath}，他的目录是「${catalogue}」`;
            return content;
          })
          .join(";\n")},请你根据这些内容提供专业、准确、有洞察力的帮助`,
      },
    ];
  }, [siteData]);
  const newBubbleData = useRef<BubbleDataType[]>(bubbleData);
  const requestDialogue = useCallback((content: string) => {
    newBubbleData.current = JSON.parse(
      JSON.stringify([
        ...newBubbleData.current,
        {
          role: "user",
          content,
        },
        {
          role: "assistant",
          loading: true,
          content: "",
        },
      ])
    ) as BubbleDataType[];
    setBubbleData(newBubbleData.current);
    agent.request(
      {
        messages: [...system, ...newBubbleData.current],
        stream: true,
      },
      {
        // 成功回调
        onSuccess: (sseChunks) => {},
        onError: (error) => {},
        onUpdate: (sse: any) => {
          try {
            const data = JSON.parse(sse.data).choices[0];
            if (data.finish_reason === "stop") return;
            const message = data.delta.content;
            newBubbleData.current[newBubbleData.current.length - 1].loading =
              false;
            newBubbleData.current[newBubbleData.current.length - 1].content +=
              message;
            setBubbleData(JSON.parse(JSON.stringify(newBubbleData.current)));
          } catch (error) {}
        },
      }
    );
  }, []);

  return {
    bubbleData,
    requestDialogue,
  };
};

export default useChat;
