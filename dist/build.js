"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// private/build.ts
var import_tsup = require("tsup");
var import_fs = __toESM(require("fs"));
var import_path = __toESM(require("path"));
var IGNORE_DIRS = ["node_modules"];
var PNP_LOADER = import_path.default.resolve(__dirname, "..", ".pnp.cjs");
void (async () => {
  const directory = process.argv[2] ?? process.cwd();
  const promises = import_fs.default.readdirSync(directory).filter((file) => import_fs.default.statSync(import_path.default.resolve(directory, file)).isDirectory()).filter((dir) => !dir.startsWith(".") || IGNORE_DIRS.includes(dir)).filter((action) => import_fs.default.existsSync(import_path.default.resolve(directory, action, "index.ts"))).map(async (action) => {
    const actionDir = import_path.default.resolve(directory, action);
    const distDir = import_path.default.resolve(actionDir, "dist");
    console.log(`Compiling JS action: ${action}`);
    const pnpLoaderPath = import_path.default.relative(distDir, PNP_LOADER);
    await (0, import_tsup.build)({
      entry: [import_path.default.resolve(actionDir, "index.ts")],
      outDir: distDir,
      target: "node16",
      minify: true,
      banner: {
        js: `require('${pnpLoaderPath}').setup();`
      }
    });
  });
  if (!promises.length) {
    console.log("No actions to compile found.");
    return;
  }
  await Promise.all(promises);
})();
