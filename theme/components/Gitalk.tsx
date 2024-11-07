// @ts-ignore
import GenGitalk from "gitalk";
import "gitalk/dist/gitalk.css";
import { useEffect, useRef } from "react";
import usePageId from "@/hooks/usePageId";

/** 评论功能 */
const Gitalk = () => {
    const box = useRef<HTMLDivElement>(null);
    const pageId = usePageId();
    const refresh = () => {
        if (!box.current || !Gitalk) return;
        box.current.innerHTML = "";
        console.log(pageId);
        // @ts-ignore
        new GenGitalk({
            proxy: "https://strong-caramel-969805.netlify.app/github_access_token",
            clientID: "Ov23li9XioccTdmxMIQ2",
            clientSecret: "231e66efccf53da64987491e7a248eb83ca1098a",
            repo: "Explorers-Notes-Gitalk",
            owner: "hzihhuang",
            admin: ["hzihhuang"],
            id: pageId, // 页面的唯一标识
            distractionFreeMode: false, // 弹幕模式
            language: "zh-CN", // 语言
            createIssueManually: true, // 如果当前页面没有对应的 issue 且开启了 issue 代理，会在首次评论时自动创建对应的 issue
        }).render("gitalk-container");
    };
    useEffect(refresh, [pageId]);

    return (
        <div id="gitalk-container" ref={box} />
    )
};

export default Gitalk;