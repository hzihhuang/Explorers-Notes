import { Sender, Suggestion } from "@ant-design/x";
import React from "react";

interface Props {
  value: string;
  onChange: (value: string) => void;
  onSubmit: (value: string) => void;
}

const AiInput: React.FC<Props> = ({ value, onChange, onSubmit }) => {
  return (
    <Suggestion style={{ marginTop: "auto" }} items={[]}>
      {({ onTrigger, onKeyDown }) => {
        return (
          <Sender
            value={value}
            onChange={onChange}
            onSubmit={onSubmit}
            placeholder="请输入您的问题"
          />
        );
      }}
    </Suggestion>
  );
};
export default AiInput;
