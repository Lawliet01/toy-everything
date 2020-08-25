const path = require("path");
const fs = require("fs");
const { parse } = require("@babel/parser");
const { default: traverse } = require("@babel/traverse");
const { transformFromAst } = require("@babel/core");

module.exports = class Webpack {
  constructor(options) {
    this.entry = options.entry;
    this.output = path.join(options.output.path, options.output.filename);
    this.modules = {};
  }
  async run() {
    this.parse(this.entry).then(() => {
      console.log(this.modules);
      this.emit();
    });
  }
  /**
   * 解析JS
   */
  parse(entry, relativePath) {
    return new Promise(async (resolve, reject) => {
      // 读取文件
      const code = fs.readFileSync(entry, "utf-8");

      // 构建ast
      const ast = parse(code, {
        sourceType: "module",
      });

      // 处理dependencies
      const waiting = [];

      for (let node of ast.program.body) {
        if (node.type === "ImportDeclaration") {
          const dependencyPath =
            "./" + path.join(path.dirname(entry), node.source.value);
          waiting.push(this.parse(dependencyPath, node.source.value));
        }
      }

      const dependencies = {};
      const res = await Promise.all(waiting);

      for (let each of res) {
        dependencies[each.relativePath] = each.entry;
      }

      // 从ast构建代码
      transformFromAst(
        ast,
        null,
        { presets: ["@babel/preset-env"] },
        (err, res) => {
          this.modules[entry] = {
            code: res.code,
            dependencies,
          };
          resolve({ entry, relativePath });
        }
      );
    });
  }
  /**
   * 输出文件
   */
  emit() {
    const code = `
        (function(graph){
            function require(module){
                function localRequire(relativeName){
                    return require(graph[module].dependencies[relativeName])
                }
                var exports = {};
                (function(require, exports, code){
                    eval(code)
                })(localRequire, exports, graph[module].code)
                return exports;
            }
            require('${this.entry}')
        })(${JSON.stringify(this.modules)})
      `;
    fs.writeFileSync(this.output, code, "utf-8");
  }
};
