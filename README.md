## hastx

Create [hast][hast] syntax trees using JSX

[Hast][hast] is an abstract syntax tree format for hypertext, and it is used by
the [Rehype][Rehype] ecosystem as a universal representation for HTML documents.

This module provides a way to create hast trees using JSX which are suitable as
inputs to any Rehype pipeline.

For example, the following code uses JSX to create a section of HTML and then
pipes it through the [rehype-slug][rehype-slug] and
[rehype-autolink-headings][rehype-autolink-headings] to automatically add
internal ids and links to each `h1` element

```jsx
import rehypeSlug from "rehype-slug";
import rehypeAutoLinkHeadings from "rehype-autolink-headings";

import { pipe } from "lodash/fp";

let enhanced = pipe(rehypeSlug(), rehypeAutoLinkHeandings())(
  <section>
    <h1>Chapter 1</h1>
    <p>It was the best of times. It was the worst of times...</p>
  </section>,
);
```

This package only supports the modern "automatic" JSX Transform. How to
configure this is highly dependent on your compiler, but generally involve
setting the `jsxImportSource` attribute to "hastx" either via a settings file or
a compiler pragma. The following list is non-exhaustive.

### Deno

Add the following to your `deno.json`:

```json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "hastx"
  },
  "imports": {
    "hastx/jsx-runtime": "npm:hastx@latest"
  }
}
```

### TypeScript

Install the "hastx" package from npm, and configure your jsxImportSource

```json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "hastx"
  }
}
```

[hast]: https://github.com/syntax-tree/hast
[Rehype]: https://github.com/rehypejs/rehype
[rehype-slug]: https://github.com/rehypejs/rehype-slug
[rehype-autolink-headings]: https://github.com/rehypejs/rehype-autolink-headings
