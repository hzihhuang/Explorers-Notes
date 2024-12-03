import { useCallback, useRef, useState } from "react";
import { useXAgent } from "@ant-design/x";
import { BubbleDataType } from "@ant-design/x/es/bubble/BubbleList";

const useChat = () => {
  const [bubbleData, setBubbleData] = useState<BubbleDataType[]>([]);
  const [agent] = useXAgent<BubbleDataType>({
    baseURL: "https://open.bigmodel.cn/api/paas/v4/chat/completions",
    model: "glm-4-flash",
    dangerouslyApiKey: "447dc00d0b5ff3cd3eaeecadb2a25101.Yp2lbQgE1Am5lH7j",
  });

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
        messages: [
          {
            role: "system",
            content:
              "你是「https://hzihhuang-site.github.io/Explorers-Notes/」这个博客站点的小助手，这个站点主要是用于记录前后端技术探险学习等，你的任务是提供专业、准确、有洞察力的帮助。",
          },
          ...newBubbleData.current,
        ],
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
