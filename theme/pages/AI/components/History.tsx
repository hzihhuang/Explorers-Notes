import { AlipayCircleOutlined, GithubOutlined } from "@ant-design/icons";
import { Conversations } from "@ant-design/x";
import React from "react";

interface Props {}

const History: React.FC<Props> = ({}) => {
  return (
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
  );
};
export default History;
