import { OpenAIOutlined, UserOutlined } from "@ant-design/icons";
import { Bubble, BubbleProps, Welcome } from "@ant-design/x";
import { BubbleDataType } from "@ant-design/x/es/bubble/BubbleList";
import { Typography } from "antd";
import markdownit from "markdown-it";
import React from "react";
import styled from "styled-components";

const md = markdownit({ html: true, breaks: true });
const renderMarkdown: BubbleProps["messageRender"] = (content) => (
  <Typography>
    <Box
      className="box"
      dangerouslySetInnerHTML={{ __html: md.render(content.trim()) }}
    />
  </Typography>
);
const Box = styled.div`
  > p:last-child {
    margin-bottom: 0px;
  }
`;

interface Props {
  bubbleData: BubbleDataType[];
}

const Chat: React.FC<Props> = ({ bubbleData }) => {
  return bubbleData.length > 0 ? (
    <NewBubbleList
      style={{ flex: 1 }}
      items={bubbleData}
      roles={{
        user: {
          placement: "end",
          avatar: <UserOutlined />,
        },
        assistant: {
          placement: "start",
          messageRender: renderMarkdown,
          avatar: <OpenAIOutlined />,
        },
      }}
    />
  ) : (
    <Welcome
      icon="https://mdn.alipayobjects.com/huamei_iwk9zp/afts/img/A*s5sNRo5LjfQAAAAAAAAAAAAADgCCAQ/fmt.webp"
      title="您好，有什么需要帮忙吗？"
      description="我是站点小助手"
    />
  );
};
export default Chat;

const NewBubbleList = styled(Bubble.List)`
  .ant-bubble .ant-bubble-avatar {
    margin-top: 8px;
    font-size: 24px;
  }
`;
