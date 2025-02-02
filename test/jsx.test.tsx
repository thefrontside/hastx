import { describe, it } from "jsr:@std/testing@^1/bdd";
import { expect } from "jsr:@std/expect@^1";
import { h } from "npm:hastscript@9.0.0";

describe("JSX runtime", () => {
  it("generates simple tags", () => {
    expect(<p>Hello</p>).toEqual(h("p", "Hello"));
  });
  it("can generate simple fragments", () => {
    expect(<>Hello</>).toEqual(h(null, "Hello"));
  });
  it("can generate fragments with multiple elements", () => {
    expect(
      <>
        Hello, <em>World</em>
      </>,
    ).toEqual(h(null, "Hello, ", h("em", "World")));
  });

  it("flattens fragments within mixed elements and fragments", () => {
    expect(
      <>
        Hello<>
          World<b>!</b>
        </>
      </>,
    ).toEqual(h(null, "Hello", "World", h("b", "!")));
  });

  it("flattens fragments within fragments even if that is all there is", () => {
    expect(
      <>
        Hello<>World</>
      </>,
    ).toEqual(h(null, "Hello", "World"));
  });

  it("deeply flattens fragments within fragments", () => {
    expect(
      <>
        Hello
        <>
          to <em>the</em>
          <>
            world <>!</>
          </>
        </>
      </>,
    ).toEqual(h(null, "Hello", "to ", h("em", "the"), "world ", "!"));
  });

  it("can embed numeric expressions inside", () => {
    expect(<title>A tale of {1 + 1} cities</title>)
      .toEqual(h("title", "A tale of ", "2", " cities"));
  });

  it("can embed numeric expressions inside a fragment", () => {
    expect(<>A tale of {1 + 1} cities</>).toEqual(
      h(null, "A tale of ", 2, " cities"),
    );
  });

  it("can embed boolean expressions inside", () => {
    expect(<title>{false} witness</title>).toEqual(
      h("title", "false", " witness"),
    );
  });

  it("allows embedded exmpressions that return elements", () => {
    expect(<ul>{[1, 2, 3].map((i) => <li>{i}</li>)}</ul>).toEqual(
      h("ul", h("li", "1"), h("li", "2"), h("li", "3")),
    );
  });

  it("allows embedded fragments", () => {
    const numbers = (
      <>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </>
    );
    expect(<ul>{numbers}</ul>).toEqual(
      h("ul", h("li", "1"), h("li", "2"), h("li", "3")),
    );
  });

  it("allows spreading of embedded arrays", () => {
    expect(<ul>{...[1, 2, 3].map((i) => <li>{i}</li>)}</ul>).toEqual(
      h("ul", h("li", "1"), h("li", "2"), h("li", "3")),
    );
  });

  it("passes the key attribute", () => {
    function DLEntry(props: { key: string; value: string }): JSX.Element {
      return (
        <>
          <dt>{props.key}</dt>
          <dd>{props.value}</dd>
        </>
      );
    }
    expect(
      <dl>
        <DLEntry key="The Hobbit" value="There and Back Again" />
      </dl>,
    ).toEqual(
      h("dl", h("dt", "The Hobbit"), h("dd", "There and Back Again")),
    );
  });

  it("aliases class -> className", () => {
    let el = <div class="button" />;
    //@ts-expect-error yo.
    expect(el.properties.className).toEqual("button");
  });
});
