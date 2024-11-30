import { XProvider } from "@ant-design/x";
import { Flex, Modal } from "antd";
import React from "react";

interface Props {
  open: boolean;
  onCancel: () => void;

  children: React.ReactNode;
}

const Dialog: React.FC<Props> = ({ open, onCancel, children }) => {
  return (
    <Modal
      title="AI 助手"
      centered
      closable={false}
      open={open}
      footer={null}
      onCancel={onCancel}
      width="80%"
    >
      <XProvider>
        <Flex style={{ height: 500 }} gap={12}>
          {children}
        </Flex>
      </XProvider>
    </Modal>
  );
};
export default Dialog;
