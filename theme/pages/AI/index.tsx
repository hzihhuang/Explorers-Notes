import {
  AlipayCircleOutlined,
  BulbOutlined,
  GithubOutlined,
  OpenAIOutlined,
  SmileOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { FloatButton, Flex, Modal, Divider } from "antd";
import { useState } from "react";
import {
  Bubble,
  Conversations,
  Prompts,
  Sender,
  Suggestion,
  Welcome,
  XProvider,
} from "@ant-design/x";
import HistoricalDialogue from "./HistoricalDialogue";
import { BubbleDataType } from "@ant-design/x/es/bubble/BubbleList";
import { Conversation } from "@ant-design/x/es/conversations";

const AI = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  // 对话内容
  const bubbleData: BubbleDataType[] = [
    {
      key: "1",
      placement: "end",
      content: "你好 Ant Design X",
      avatar: { icon: <UserOutlined /> },
    },
    {
      key: "2",
      content: "hi～",
    },
    {
      key: "2",
      content: "",
      loading: true,
    },
  ];

  // 历史对话
  const conversation: Conversation[] = [
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
  ];
  const [conversationKey, setConversationKey] = useState(conversation[0].key);
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
              items={conversation}
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
              <Suggestion
                items={[{ label: "Write a report", value: "report" }]}
              >
                {({ onTrigger, onKeyDown }) => {
                  return (
                    <Sender
                      value={value}
                      onChange={(nextVal) => {
                        if (nextVal === "/") {
                          onTrigger();
                        } else if (!nextVal) {
                          onTrigger(false);
                        }
                        setValue(nextVal);
                      }}
                      onKeyDown={onKeyDown}
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
