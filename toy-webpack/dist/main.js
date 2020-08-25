
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
            require('./src/index.js')
        })({"./src/num.js":{"code":"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\nvar _default = 1000;\nexports[\"default\"] = _default;","dependencies":{}},"./src/expo.js":{"code":"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = _default;\n\nvar _num = _interopRequireDefault(require(\"./num.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nfunction _default(a, b) {\n  return a + b + _num[\"default\"];\n}","dependencies":{"./num.js":"./src/num.js"}},"./src/index.js":{"code":"\"use strict\";\n\nvar _expo = _interopRequireDefault(require(\"./expo.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nconsole.log((0, _expo[\"default\"])(1, 2));","dependencies":{"./expo.js":"./src/expo.js"}}})
      