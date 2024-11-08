import { ReactNode } from "react";
import TOOL from "./TOOL";
import VueST from "./Vue";
import ReactST from "./react";
import CSS from "./CSS";
import CrossPlatform from "./CrossPlatform";
import buildTools from "./buildTools";
import Node from "./Node";
import Visualization from "./Visualization";

export type ItemsType = {
  icon?: ReactNode;
  title: string;
  desc: string;
  link: string;
};

export default {
  TOOL,
  ReactST,
  VueST,
  CSS,
  Node,
  CrossPlatform,
  buildTools,
  Visualization,
};
