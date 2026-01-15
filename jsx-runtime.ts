import type * as hast from "hast";
import type * as html from "./html.ts";
import type * as svg from "./svg.ts";

export type Element = hast.Element;

export type JSXChild =
  | string
  | number
  | boolean
  | undefined
  | null
  | JSXElement;

export type JSXChildren = JSXChild | JSXChildren[];

export type JSXElement = hast.Element | hast.Root | hast.Text;

export type JSXElementProps = Record<string, string> & {
  children?: JSXChildren;
};
export type JSXComponentProps = Record<string, unknown> & {
  key?: string;
};

export interface JSXComponent {
  (props: JSXComponentProps): JSXElement;
}

export interface JSXElementConstructor {
  //deno-lint-ignore no-explicit-any
  (...args: any[]): JSXElement;
}

declare global {
  export namespace JSX {
    type Element = JSXElement;
    type ElementType =
      | keyof html.HTMLElements
      | keyof svg.SVGElements
      | JSXElementConstructor;

    interface IntrinsicElements extends html.HTMLElements, svg.SVGElements {}
    interface ElementChildrenAttribute {
      //deno-lint-ignore ban-types
      children: {};
    }
  }
}

export function jsx(
  component: JSXComponent,
  props: JSXComponentProps,
): JSXElement;
export function jsx(element: string, props: JSXElementProps): JSXElement;
export function jsx(
  type: string | JSXComponent,
  props: JSXElementProps | JSXComponentProps,
  key?: string,
): JSXElement {
  if (typeof type === "string") {
    let tagName = type;
    let { children, ...properties } = props as JSXElementProps;
    let className = properties.class ? { className: properties.class } : null;

    return {
      type: "element",
      tagName,
      properties: { ...properties, ...className },
      children: read(children).filter((child) => child.type !== "doctype"),
    };
  } else {
    return type({ ...props, ...(key ? { key } : {}) });
  }
}

export const jsxs = jsx;
export const jsxDEV = jsx;

export function Fragment(props: { children?: JSXChildren }): hast.Root {
  let { children = [] } = props;
  return {
    type: "root",
    children: read(children),
  };
}

function read(children?: JSXChildren): hast.RootContent[] {
  switch (typeof children) {
    case "undefined":
    case "boolean":
      return [];
    case "number":
    case "string":
      return [{
        type: "text",
        value: String(children),
      }];
    default:
      if (children === null) {
        return [];
      } else if (Array.isArray(children)) {
        return children.flatMap(read);
      } else if (children.type === "root") {
        return children.children;
      } else {
        return [children];
      }
  }
}
