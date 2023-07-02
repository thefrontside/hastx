import { build, emptyDir } from "https://deno.land/x/dnt@0.37.0/mod.ts";

const outDir = "./build/npm";

await emptyDir(outDir);

let [version] = Deno.args;
if (!version) {
  throw new Error("a version argument is required to build the npm package");
}

await build({
  entryPoints: [{
    name: "./jsx-runtime",
    path: "./jsx-runtime.ts",
  }],
  outDir,
  shims: {
    deno: false,
  },
  test: false,
  typeCheck: false,
  compilerOptions: {
    lib: ["esnext"],
    target: "ES2020",
    sourceMap: true,
  },
  package: {
    // package.json properties
    name: "hastx",
    version,
    description: "JSX Transform emitting Rehype syntax trees (HAST)",
    license: "ISC",
    repository: {
      author: "engineering@frontside.com",
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
});

await Deno.copyFile("README.md", `${outDir}/README.md`);
