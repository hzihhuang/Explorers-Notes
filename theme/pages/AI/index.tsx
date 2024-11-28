import {
  AlipayCircleOutlined,
  BulbOutlined,
  GithubOutlined,
  OpenAIOutlined,
  SmileOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { FloatButton, Flex, Modal, Divider } from "antd";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Bubble,
  Conversations,
  Prompts,
  Sender,
  Suggestion,
  Welcome,
  XProvider,
  useXAgent,
} from "@ant-design/x";
import { BubbleDataType } from "@ant-design/x/es/bubble/BubbleList";
import { Conversation } from "@ant-design/x/es/conversations";

const AI = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [agent] = useXAgent<BubbleDataType>({
    baseURL: "https://open.bigmodel.cn/api/paas/v4/chat/completions",
    model: "glm-4-flash",
    dangerouslyApiKey: "447dc00d0b5ff3cd3eaeecadb2a25101.Yp2lbQgE1Am5lH7j",
  });

  const request = (bubbleData: BubbleDataType[]) => {
    const newBubbleData = JSON.parse(
      JSON.stringify(bubbleData)
    ) as BubbleDataType[];
    agent.request(
      {
        messages: bubbleData,
        stream: true,
      },
      {
        // 成功回调
        onSuccess: (sseChunks) => {},
        onError: (error) => {},
        onUpdate: (sse: any) => {
          try {
            const data = JSON.parse(sse.data);
            const message = data.choices[0].delta.content;
            newBubbleData[newBubbleData.length - 1].loading = false;
            newBubbleData[newBubbleData.length - 1].content += message;

            setBubbleData(JSON.parse(JSON.stringify(newBubbleData)));
          } catch (error) {}
        },
      }
    );
  };
  // 对话内容
  const [bubbleData, setBubbleData] = useState<BubbleDataType[]>([]);

  return (
    <>
      <FloatButton
        type="primary"
        icon={<OpenAIOutlined />}
        onClick={() => setOpen(true)}
      />
      <Modal
        title="AI 助手"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width="80%"
      >
        <XProvider>
          <Flex style={{ height: 500 }} gap={12}>
            <Conversations
              style={{ width: 200 }}
              defaultActiveKey="1"
              items={[
                {
                  key: "1",
                  label: "历史一",
                  icon: <GithubOutlined />,
                },
                {
                  key: "2",
                  label: "历史二",
                  icon: <AlipayCircleOutlined />,
                },
              ]}
            />
            <Divider type="vertical" style={{ height: "100%" }} />
            <Flex vertical style={{ flex: 1 }} gap={8}>
              {bubbleData.length > 0 ? (
                <Bubble.List style={{ flex: 1 }} items={bubbleData} />
              ) : (
                <Welcome
                  icon="https://mdn.alipayobjects.com/huamei_iwk9zp/afts/img/A*s5sNRo5LjfQAAAAAAAAAAAAADgCCAQ/fmt.webp"
                  title="您好，有什么需要帮忙吗？"
                  description="我是站点小助手"
                />
              )}
              {/* 提示词 */}
              <Prompts
                style={{ marginTop: "auto" }}
                items={[
                  {
                    key: "1",
                    icon: <BulbOutlined style={{ color: "#FFD700" }} />,
                    label: "提示1",
                  },
                  {
                    key: "2",
                    icon: <SmileOutlined style={{ color: "#52C41A" }} />,
                    label: "提示2",
                  },
                ]}
              />
              <Suggestion items={[]}>
                {({ onTrigger, onKeyDown }) => {
                  return (
                    <Sender
                      value={value}
                      onChange={setValue}
                      onSubmit={(v) => {
                        setValue("");
                        const newBubbleData: BubbleDataType[] = [
                          ...bubbleData,
                          {
                            role: "user",
                            content: v,
                            placement: "end",
                          },
                          {
                            role: "assistant",
                            loading: true,
                            content: "",
                          },
                        ];
                        setBubbleData(newBubbleData);
                        request(newBubbleData);
                      }}
                      placeholder="请输入您的问题"
                    />
                  );
                }}
              </Suggestion>
            </Flex>
          </Flex>
        </XProvider>
      </Modal>
    </>
  );
};
export default AI;
