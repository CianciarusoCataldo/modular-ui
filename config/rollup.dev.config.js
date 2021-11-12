import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import { terser } from "rollup-plugin-terser";
import svg from "rollup-plugin-svg";

import pkg from "../package.json";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "playground/src/modular-ui-preview/index.cjs",
        format: "cjs",
        banner: "import './styles.css'",
        plugins: [terser()],
      },
      {
        file: "playground/src/modular-ui-preview/index.mjs",
        format: "esm",
        banner: "/* eslint-disable */ import './styles.css';",
      },
      {
        file: pkg.main,
        format: "cjs",
        plugins: [terser()],
        banner: "import './styles.css'",
      },
      {
        file: pkg.module,
        format: "esm",
        banner: "/* eslint-disable */ import './styles.css';",
      },
    ],
    plugins: [
      svg(),
      postcss({
        plugins: [],
        minimize: true,
        extract: "styles.css",
      }),
      typescript(),
    ],
    external: Object.keys(pkg.peerDependencies || {}),
  },
];
