import Theme from "rspress/theme";
import Gitalk from "./components/Gitalk";
import Visitor from "./components/Visitor";
import AI from "./pages/AI";

const Layout = () => (
  <Theme.Layout afterDocFooter={<Gitalk />} afterNavTitle={<Visitor />} bottom={<AI />} />
);

export default {
  ...Theme,
  Layout,
};

export * from "rspress/theme";
