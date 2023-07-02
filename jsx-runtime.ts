import type * as hast from "./deps.ts";

export type JSXChild = string | number | boolean | JSXElement;

export type JSXElement = hast.Element | hast.Root | hast.Text;

export type JSXElementProps = Record<string, string> & {
  children?: JSXChild | JSXChild[];
};
export type JSXComponentProps = Record<string, unknown> & {
  key?: string;
};

export interface JSXComponent {
  (props: JSXComponentProps): JSXElement;
}

declare global {
  namespace JSX {
    type Element = JSXElement;
    type ElementType = JSXElement;
    interface IntrinsicElements {
      [name: string]: unknown;
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
      children: read(children),
    };
  } else {
    return type({ ...props, key });
  }
}

export const jsxs = jsx;
export const jsxDEV = jsx;

export function Fragment(
  props: { children?: JSXChild | JSXChild[] },
): hast.Root {
  let { children = [] } = props;
  return {
    type: "root",
    children: read(children),
  };
}

function read(children?: JSXChild | JSXChild[]): (hast.Element | hast.Text)[] {
  let nodes = Array.isArray(children) ? children : (children ? [children] : []);
  return nodes.flatMap((child) => {
    switch (typeof child) {
      case "number":
      case "boolean":
      case "string":
        return [{
          type: "text",
          value: String(child),
        }];
      default:
        if (child.type === "root") {
          return child.children as Array<hast.Element | hast.Text>;
        } else {
          return [child];
        }
    }
  });
}
