import { ItemsType } from "./list";
import { ReactNode } from "react";
import styled from "styled-components";

const Links = ({ list }: { list: ItemsType[] }) => {
  const getIcon = (icon: ReactNode) => {
    // 检查是否为图片 url 或者 base64
    if (
      typeof icon === "string" &&
      (icon.startsWith("http") || icon.startsWith("data:image"))
    ) {
      return (
        <div
          className="w-12 h-12 p-2 rounded-md shrink-0"
          style={{ backgroundColor: "var(--rp-c-bg-mute" }}
        >
          <img className="w-full h-full" src={icon} style={{ objectFit: 'scale-down' }} />
        </div>
      );
    }
    return icon;
  };
  return (
    <div
      className="grid gap-4 compass-links"
      style={{ gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr)) " }}
    >
      {list.map((i, idx) => (
        <Link href={i.link} key={i.title + idx}>
          <div className="flex items-center gap-4 h-12">
            {i.icon && getIcon(i.icon)}
            <div className="text-lg font-bold">{i.title}</div>
          </div>
          <div className="text-sm">{i.desc}</div>
        </Link>
      ))}
    </div>
  );
};

const Link = styled.a`
  padding: 8px 16px;
  border-radius: 8px;
  background-color: var(--rp-c-bg-soft);
  border: 1px solid transparent;
  transition: all 0.2s;

  .text-sm {
    margin-top: 4px;
    color: var(--rp-c-text-2);
  }

  &:hover {
    border-color: var(--rp-c-brand);
  }
`;

export default Links;
