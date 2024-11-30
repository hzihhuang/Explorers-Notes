import { OpenAIOutlined } from "@ant-design/icons";
import { FloatButton, Flex, Divider } from "antd";
import { useState } from "react";
import useChat from "./hooks/useChat";
import Dialog from "./components/Dialog";
import History from "./components/History";
import Chat from "./components/Chat";
import AiInput from "./components/AiInput";

const AI = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  // 对话
  const { bubbleData, requestDialogue } = useChat();

  return (
    <>
      <FloatButton
        type="primary"
        icon={<OpenAIOutlined />}
        onClick={() => setOpen(true)}
      />
      <Dialog open={open} onCancel={() => setOpen(false)}>
        {/* 历史对话 */}
        <History />
        <Divider type="vertical" style={{ height: "100%" }} />
        <Flex vertical style={{ flex: 1 }} gap={8}>
          {/* 聊天框 */}
          <Chat bubbleData={bubbleData} />
          {/* 输入框 */}
          <AiInput
            value={value}
            onChange={setValue}
            onSubmit={(content) => {
              setValue("");
              requestDialogue(content);
            }}
          />
        </Flex>
      </Dialog>
    </>
  );
};
export default AI;
