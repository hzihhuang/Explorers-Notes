import {
  AlipayCircleOutlined,
  BulbOutlined,
  GithubOutlined,
  OpenAIOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { FloatButton, Flex, Modal, Divider, Typography } from "antd";
import { useState } from "react";
import {
  Bubble,
  BubbleProps,
  Conversations,
  Prompts,
  Sender,
  Suggestion,
  Welcome,
  XProvider,
} from "@ant-design/x";
import markdownit from "markdown-it";
import useDialogue from "./useDialogue";

const md = markdownit({ html: true, breaks: true });
const renderMarkdown: BubbleProps["messageRender"] = (content) => (
  <Typography>
    <div dangerouslySetInnerHTML={{ __html: md.render(content.trim()) }} />
  </Typography>
);

const AI = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  // 对话
  const { bubbleData, requestDialogue } = useDialogue();

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
                <Flex flex={1} gap="middle" vertical>
                  {bubbleData.map((i, idx) => (
                    <Bubble
                      content={i.content}
                      placement={i.role === "user" ? "end" : "start"}
                      messageRender={renderMarkdown}
                      key={idx}
                    />
                  ))}
                </Flex>
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
                      onSubmit={(content) => {
                        setValue("");
                        requestDialogue(content);
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
