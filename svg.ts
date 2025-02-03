import type * as hast from "npm:@types/hast@^3.0.0";

export type SVGChild =
  | string
  | number
  | boolean
  | hast.Element
  | hast.Root
  | hast.Text;

export type SVGChildren = SVGChild | Iterable<SVGChild>;

export interface SVGElement extends SVGAttributes, SVGPresentationAttributes {
  children?: SVGChildren;
}

export interface SVGAttributes {
  // accesskey?: string;
  // autocapitalize?: "off" | "none" | "on" | "setences" | "words" | "characters";
  class?: string;
  // contenteditable?: "true" | "false" | "plaintext-only";
  // dir?: "ltr" | "rtl" | "auto";
  // draggable?: "true" | "false";
  // enterkeyhint?:
  //   | "enter"
  //   | "done"
  //   | "go"
  //   | "next"
  //   | "previous"
  //   | "search"
  //   | "send";
  // hidden?: "hidden" | "until-found";
  id?: string;
  // inert?: boolean;
  // inputmode?:
  //   | "none"
  //   | "text"
  //   | "decimal"
  //   | "numeric"
  //   | "tel"
  //   | "search"
  //   | "email"
  //   | "url";
  // is?: string;
  // itemid?: string;
  // itemprop?: string;
  // itemref?: string;
  // itemscope?: string;
  // itemtype?: string;
  // lang?: string;
  // nonce?: string;
  // spellcheck?: "true" | "false" | "default";
  style?: string;
  tabindex?: number;
  // title?: string;
  // translate?: "yes" | "no";
}

export interface SVGPresentationAttributes extends SVGAttributes {
  "clip-path"?: string;
  "lip-rule"?: string;
  color?: string;
  "color-interpolation"?: string;
  "color-rendering"?: string;
  cursor?:
    | "auto"
    | "crosshair"
    | "default"
    | "pointer"
    | "move"
    | "e-resize"
    | "ne-resize"
    | "nw-resize"
    | "n-resize"
    | "se-resize"
    | "sw-resize"
    | "s-resize"
    | "w-resize"
    | "text"
    | "wait"
    | "help"
    | "inherit"
    | string;
  display?: string;
  fill?: string;
  "fill-rule"?: string;
  filter?: string;
  mask?: string;
  opacity?: string;
  "pointer-events"?:
    | "bounding-box"
    | "visiblePainted"
    | "visibleFill"
    | "visibleStroke"
    | "visible"
    | "painted"
    | "fill"
    | "stroke"
    | "all"
    | "none";
  "shape-rendering"?:
    | "auto"
    | "optimizeSpeed"
    | "crispEdges"
    | "geometricPrecision";
  stroke?: string;
  "stroke-dasharray"?: string;
  "stroke-dashoffset"?: string;
  "stroke-linecap"?: "butt" | "round" | "square";
  "stroke-linejoin"?: "arcs" | "bevel" | "miter" | "miter-clip" | "round";
  "stroke-miterlimit"?: string | number;
  "stroke-opacity"?: string | number;
  "stroke-width"?: string | number;
  transform?: string;
  "vector-effect"?:
    | "none"
    | "non-scaling-stroke"
    | "non-scaling-size"
    | "non-rotation"
    | "fixed-position";
  visibility?: "visible" | "hidden" | "collapse";
}

export interface SVGSVG extends SVGElement {
  xmlns?: "http://www.w3.org/2000/svg";
  height?: string;
  preserveAspectRation?: string;
  viewBox?: string;
  width?: string;
  x?: string;
  y?: string;
}

export interface SVGAnimate extends SVGElement {
  begin?: string;
}

export interface SVGPath extends SVGElement {
  d: string;
  pathLength?: number;
}

export interface SVGRect extends SVGElement {
  height?: string | number;
  width?: string | number;
  x?: string | number;
  y?: string | number;
  rx?: string | number;
  ry?: string | number;
  pathLength?: string | number;
}

export interface SVGElements {
  svg: SVGSVG;
  animate: SVGAnimate;
  path: SVGPath;
  g: SVGElement;
  defs: SVGElement;
  clipPath: SVGElement;
  rect: SVGRect;
}
