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
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// private/build.ts
var import_tsup = require("tsup");
var import_node_fs = __toESM(require("fs"));
var import_node_path = __toESM(require("path"));
var IGNORE_DIRS = ["node_modules"];
void (async () => {
  const directory = process.argv[2] ?? process.cwd();
  const promises = import_node_fs.default.readdirSync(directory).filter((file) => import_node_fs.default.statSync(import_node_path.default.resolve(directory, file)).isDirectory()).filter((dir) => !dir.startsWith(".") || IGNORE_DIRS.includes(dir)).filter((action) => import_node_fs.default.existsSync(import_node_path.default.resolve(directory, action, "index.ts"))).map(async (action) => {
    const actionDir = import_node_path.default.resolve(directory, action);
    const distDir = import_node_path.default.resolve(actionDir, "dist");
    console.log(`Compiling JS action: ${action}`);
    await (0, import_tsup.build)({
      entry: [import_node_path.default.resolve(actionDir, "index.ts")],
      outDir: distDir,
      target: "node20",
      format: "esm",
      minify: true,
      outExtension() {
        return { js: ".mjs" };
      }
    });
  });
  if (!promises.length) {
    console.log("No actions to compile found.");
    return;
  }
  await Promise.all(promises);
})();
