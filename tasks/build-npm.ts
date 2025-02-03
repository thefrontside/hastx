import { build, emptyDir } from "jsr:@deno/dnt@0.41.3";

const outDir = "./build/npm";

await emptyDir(outDir);

let [version] = Deno.args;
if (!version) {
  throw new Error("a version argument is required to build the npm package");
}

await build({
  entryPoints: [
    {
      "name": ".",
      "path": "./mod.ts",
    },
    {
      name: "./jsx-runtime",
      path: "./jsx-runtime.ts",
    },
    {
      name: "./html",
      path: "./html.ts",
    },
    {
      name: "./svg",
      path: "./svg.ts",
    },
  ],
  outDir,
  shims: {
    deno: false,
  },
  test: false,
  typeCheck: false,
  compilerOptions: {
    lib: ["ESNext"],
    target: "ES2020",
    sourceMap: true,
  },
  package: {
    // package.json properties
    name: "hastx",
    version,
    description: "JSX Transform emitting Rehype syntax trees (HAST)",
    license: "ISC",
    author: "engineering@frontside.com",
    repository: {
      type: "git",
      url: "git+https://github.com/thefrontside/hastx.git",
    },
    bugs: {
      url: "https://github.com/thefrontside/hastx/issues",
    },
    engines: {
      node: ">= 16",
    },
    sideEffects: false,
  },
  mappings: {
    "npm:@types/hast@^3.0.0": {
      name: "@types/hast",
      version: "^3.0.0",
    },
  },
});

await Deno.copyFile("README.md", `${outDir}/README.md`);
