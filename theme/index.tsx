import Theme from "rspress/theme";
import Gitalk from "./components/Gitalk";
import Visitor from "./components/Visitor";

const Layout = () => (
  <Theme.Layout
    afterDocContent={<Gitalk />}
    afterNavTitle={<Visitor />}
    //  bottom={<AI />}
  />
);

export default {
  ...Theme,
  Layout,
};

export * from "rspress/theme";
