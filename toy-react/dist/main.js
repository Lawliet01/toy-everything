/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toy_react_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toy-react.js */ "./src/toy-react.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Square = /*#__PURE__*/function (_Component) {
  _inherits(Square, _Component);

  var _super = _createSuper(Square);

  function Square() {
    _classCallCheck(this, Square);

    return _super.apply(this, arguments);
  }

  _createClass(Square, [{
    key: "render",
    value: function render() {
      return Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
        className: "square",
        onClick: this.props.onClick
      }, this.props.value);
    }
  }]);

  return Square;
}(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var Board = /*#__PURE__*/function (_Component2) {
  _inherits(Board, _Component2);

  var _super2 = _createSuper(Board);

  function Board() {
    _classCallCheck(this, Board);

    return _super2.apply(this, arguments);
  }

  _createClass(Board, [{
    key: "renderSquare",
    value: function renderSquare(i) {
      var _this = this;

      return Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Square, {
        value: this.props.squares[i],
        onClick: function onClick() {
          return _this.props.onClick(i);
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        className: "board-row"
      }, this.renderSquare(0), this.renderSquare(1), this.renderSquare(2)), Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        className: "board-row"
      }, this.renderSquare(3), this.renderSquare(4), this.renderSquare(5)), Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        className: "board-row"
      }, this.renderSquare(6), this.renderSquare(7), this.renderSquare(8)));
    }
  }]);

  return Board;
}(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var Game = /*#__PURE__*/function (_Component3) {
  _inherits(Game, _Component3);

  var _super3 = _createSuper(Game);

  function Game(props) {
    var _this2;

    _classCallCheck(this, Game);

    _this2 = _super3.call(this, props);
    _this2.state = {
      history: [{
        squares: Array(9).fill(null)
      }],
      stepNumber: 0,
      xIsNext: true
    };
    return _this2;
  }

  _createClass(Game, [{
    key: "handleClick",
    value: function handleClick(i) {
      var history = this.state.history.slice(0, this.state.stepNumber + 1);
      var current = history[history.length - 1];
      var squares = current.squares.slice();

      if (calculateWinner(squares) || squares[i]) {
        return;
      }

      squares[i] = this.state.xIsNext ? "X" : "O";
      this.setState({
        history: history.concat([{
          squares: squares
        }]),
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext
      });
    }
  }, {
    key: "jumpTo",
    value: function jumpTo(step) {
      this.setState({
        stepNumber: step,
        xIsNext: step % 2 === 0
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var history = this.state.history;
      var current = history[this.state.stepNumber];
      var winner = calculateWinner(current.squares);
      var moves = history.map(function (step, move) {
        var desc = move ? "Go to move #" + move : "Go to game start";
        return Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", {
          key: move
        }, Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
          onClick: function onClick() {
            return _this3.jumpTo(move);
          }
        }, desc));
      });
      var status;

      if (winner) {
        status = "Winner: " + winner;
      } else {
        status = "Next player: " + (this.state.xIsNext ? "X" : "O");
      }

      return Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        className: "game"
      }, Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        className: "game-board"
      }, Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Board, {
        squares: current.squares,
        onClick: function onClick(i) {
          return _this3.handleClick(i);
        }
      })), Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        className: "game-info"
      }, Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, status), Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("ol", null, moves)));
    }
  }]);

  return Game;
}(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__["Component"]); // ========================================


Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__["render"])(Object(_toy_react_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Game, null), document.getElementById("root")); // let game = <Game />;
// console.log(game.vdom);

function calculateWinner(squares) {
  var lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

  for (var i = 0; i < lines.length; i++) {
    var _lines$i = _slicedToArray(lines[i], 3),
        a = _lines$i[0],
        b = _lines$i[1],
        c = _lines$i[2];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
} // class MyComponent extends Component {
//   constructor(){
//     super()
//     this.state = {
//         a: 1,
//         b: 2
//     }
//   }
//   render() {
//     return (
//       <div>
//         <p>my component</p>
//         <button
//           onclick={() => {
//             this.setState({ a: this.state.a + 1 });
//           }}
//         >
//           add
//         </button>
//         <span>{this.state.a.toString()}</span>
//         <span>{this.state.b.toString()}</span>
//       </div>
//     );
//   }
// }
// render(
//   <MyComponent id="a" class="c">
//     <div>abc</div>
//     <div></div>
//     <div></div>
//   </MyComponent>,
//   document.body
// );

/*
逻辑： 
1. babel 会把jsx语法翻译成createElement(tagName/ClassName, attribute, ...children)的形式
2. 自己写一个createElement，配合这个函数签名来处理这些传入的参数，生成一个DOM
*/

/***/ }),

/***/ "./src/toy-react.js":
/*!**************************!*\
  !*** ./src/toy-react.js ***!
  \**************************/
/*! exports provided: Component, createElement, render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var RENDER_TO_DOM = Symbol("render to dom");
var Component = /*#__PURE__*/function () {
  function Component() {
    _classCallCheck(this, Component);

    this.props = Object.create(null);
    this.children = [];
    this._root = null;
    this._range = null;
  }

  _createClass(Component, [{
    key: "setAttribute",
    value: function setAttribute(name, value) {
      this.props[name] = value;
    }
  }, {
    key: "appendChild",
    value: function appendChild(component) {
      this.children.push(component);
    }
  }, {
    key: RENDER_TO_DOM,
    value: function value(range) {
      /**
      * 渲染成dom
      */
      this._range = range;
      this._vdom = this.vdom; // 递归调用

      this._vdom[RENDER_TO_DOM](range);
    }
  }, {
    key: "update",
    value: function update() {
      var isSameNode = function isSameNode(oldNode, newNode) {
        if (oldNode.type !== newNode.type) return false;

        for (var name in newNode.props) {
          if (newNode.props[name] !== oldNode.props[name]) {
            return false;
          }
        }

        if (Object.keys(oldNode.props).length > Object.keys(newNode.props).length) {
          return false;
        }

        if (newNode.type === "#text") {
          if (newNode.content !== oldNode.content) {
            return false;
          }
        }

        return true;
      };

      var update = function update(oldNode, newNode) {
        // type, props,完全一致才不更新，然后再看children
        // #text 使用content
        if (!isSameNode(oldNode, newNode)) {
          newNode[RENDER_TO_DOM](oldNode._range);
          return;
        }

        newNode._range = oldNode._range;
        var newChildren = newNode.vchildren;
        var oldChildren = oldNode.vchildren;

        if (!newChildren || !newChildren.length) {
          return;
        } // 处理children的diff


        var tailRange = oldChildren[oldChildren.length - 1]._range;

        for (var i = 0; i < newChildren.length; i++) {
          var newChild = newChildren[i];
          var oldChild = oldChildren[i];

          if (i < oldChildren.length) {
            update(oldChild, newChild);
          } else {
            var range = document.createRange();
            range.setStart(tailRange.endContainer, tailRange.endOffset);
            range.setEnd(tailRange.endContainer, tailRange.endOffset);
            newChild[RENDER_TO_DOM](range);
            tailRange = range;
          }
        }
      }; // 获取新的vdom


      var vdom = this.vdom;
      update(this._vdom, vdom); // 存储新的vdom为旧的vdom

      this._vdom = vdom;
    }
  }, {
    key: "setState",
    value: function setState(newState) {
      // debugger
      if (this.state === null || _typeof(this.state) !== "object") {
        this.state = newState;
        this.update();
        return;
      }

      var merge = function merge(oldState, newState) {
        for (var p in newState) {
          if (oldState[p] === null || _typeof(oldState[p]) !== "object") {
            oldState[p] = newState[p];
          } else {
            merge(oldState[p], newState[p]);
          }
        }
      }; // 更新数据


      merge(this.state, newState); // 更新DOM

      this.update();
    }
  }, {
    key: "vdom",
    get: function get() {
      return this.render().vdom;
    }
  }]);

  return Component;
}();

var ElementWrapper = /*#__PURE__*/function (_Component) {
  _inherits(ElementWrapper, _Component);

  var _super = _createSuper(ElementWrapper);

  function ElementWrapper(type) {
    var _this;

    _classCallCheck(this, ElementWrapper);

    _this = _super.call(this);
    _this.type = type;
    return _this;
  }

  _createClass(ElementWrapper, [{
    key: RENDER_TO_DOM,
    value: function value(range) {
      // 插入root
      this._range = range;
      var root = document.createElement(this.type);

      for (var name in this.props) {
        var value = this.props[name];

        if (name.match(/^on([\s\S]+)$/)) {
          root.addEventListener(RegExp.$1.replace(/^[\s\S]/, function (c) {
            return c.toLowerCase();
          }), value);
        } else {
          if (name === "className") name = "class";
          root.setAttribute(name, value);
        }
      }

      if (!this.vchildren) this.vchildren = this.children.map(function (child) {
        return child.vdom;
      });

      var _iterator = _createForOfIteratorHelper(this.vchildren),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var child = _step.value;
          var childRange = document.createRange(); // 由于是appendChild，所以是放在最后

          childRange.setStart(root, root.childNodes.length);
          childRange.setEnd(root, root.childNodes.length);
          child[RENDER_TO_DOM](childRange);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      replaceContent(range, root);
    }
  }, {
    key: "vdom",
    get: function get() {
      this.vchildren = this.children.map(function (child) {
        return child.vdom;
      });
      return this;
    }
  }]);

  return ElementWrapper;
}(Component);

var TextWrapper = /*#__PURE__*/function (_Component2) {
  _inherits(TextWrapper, _Component2);

  var _super2 = _createSuper(TextWrapper);

  function TextWrapper(content) {
    var _this2;

    _classCallCheck(this, TextWrapper);

    _this2 = _super2.call(this, content);
    _this2.type = "#text";
    _this2.content = content;
    return _this2;
  }

  _createClass(TextWrapper, [{
    key: RENDER_TO_DOM,
    value: function value(range) {
      this._range = range;
      var root = document.createTextNode(this.content);
      replaceContent(range, root);
    }
  }, {
    key: "vdom",
    get: function get() {
      return this;
    }
  }]);

  return TextWrapper;
}(Component);

function replaceContent(range, node) {
  range.insertNode(node);
  range.setStartAfter(node);
  range.deleteContents();
  range.setStartBefore(node);
  range.setEndAfter(node);
}

function createElement(type, attributes) {
  var e;

  if (typeof type === "string") {
    e = new ElementWrapper(type);
  } else {
    e = new type();
  } // let e = document.createElement(type)


  for (var p in attributes) {
    e.setAttribute(p, attributes[p]);
  }

  var insertChildren = function insertChildren(children) {
    var _iterator2 = _createForOfIteratorHelper(children),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var child = _step2.value;

        if (typeof child === "string") {
          child = new TextWrapper(child);
        }

        if (child === null) {
          continue;
        } // 使用{}语法item会以数组的形式传入


        if (child instanceof Array) {
          insertChildren(child);
        } else {
          e.appendChild(child);
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  };

  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  insertChildren(children);
  return e;
}
function render(component, parentElement) {
  var range = document.createRange();
  range.setStart(parentElement, 0);
  range.setEnd(parentElement, parentElement.childNodes.length);
  range.deleteContents();
  component[RENDER_TO_DOM](range);
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy90b3ktcmVhY3QuanMiXSwibmFtZXMiOlsiU3F1YXJlIiwicHJvcHMiLCJvbkNsaWNrIiwidmFsdWUiLCJDb21wb25lbnQiLCJCb2FyZCIsImkiLCJzcXVhcmVzIiwicmVuZGVyU3F1YXJlIiwiR2FtZSIsInN0YXRlIiwiaGlzdG9yeSIsIkFycmF5IiwiZmlsbCIsInN0ZXBOdW1iZXIiLCJ4SXNOZXh0Iiwic2xpY2UiLCJjdXJyZW50IiwibGVuZ3RoIiwiY2FsY3VsYXRlV2lubmVyIiwic2V0U3RhdGUiLCJjb25jYXQiLCJzdGVwIiwid2lubmVyIiwibW92ZXMiLCJtYXAiLCJtb3ZlIiwiZGVzYyIsImp1bXBUbyIsInN0YXR1cyIsImhhbmRsZUNsaWNrIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImxpbmVzIiwiYSIsImIiLCJjIiwiUkVOREVSX1RPX0RPTSIsIlN5bWJvbCIsIk9iamVjdCIsImNyZWF0ZSIsImNoaWxkcmVuIiwiX3Jvb3QiLCJfcmFuZ2UiLCJuYW1lIiwiY29tcG9uZW50IiwicHVzaCIsInJhbmdlIiwiX3Zkb20iLCJ2ZG9tIiwiaXNTYW1lTm9kZSIsIm9sZE5vZGUiLCJuZXdOb2RlIiwidHlwZSIsImtleXMiLCJjb250ZW50IiwidXBkYXRlIiwibmV3Q2hpbGRyZW4iLCJ2Y2hpbGRyZW4iLCJvbGRDaGlsZHJlbiIsInRhaWxSYW5nZSIsIm5ld0NoaWxkIiwib2xkQ2hpbGQiLCJjcmVhdGVSYW5nZSIsInNldFN0YXJ0IiwiZW5kQ29udGFpbmVyIiwiZW5kT2Zmc2V0Iiwic2V0RW5kIiwibmV3U3RhdGUiLCJtZXJnZSIsIm9sZFN0YXRlIiwicCIsIkVsZW1lbnRXcmFwcGVyIiwicm9vdCIsImNyZWF0ZUVsZW1lbnQiLCJtYXRjaCIsImFkZEV2ZW50TGlzdGVuZXIiLCJSZWdFeHAiLCIkMSIsInJlcGxhY2UiLCJ0b0xvd2VyQ2FzZSIsInNldEF0dHJpYnV0ZSIsImNoaWxkIiwiY2hpbGRSYW5nZSIsImNoaWxkTm9kZXMiLCJyZXBsYWNlQ29udGVudCIsIlRleHRXcmFwcGVyIiwiY3JlYXRlVGV4dE5vZGUiLCJub2RlIiwiaW5zZXJ0Tm9kZSIsInNldFN0YXJ0QWZ0ZXIiLCJkZWxldGVDb250ZW50cyIsInNldFN0YXJ0QmVmb3JlIiwic2V0RW5kQWZ0ZXIiLCJhdHRyaWJ1dGVzIiwiZSIsImluc2VydENoaWxkcmVuIiwiYXBwZW5kQ2hpbGQiLCJwYXJlbnRFbGVtZW50Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBOztJQUVNQSxNOzs7Ozs7Ozs7Ozs7OzZCQUNLO0FBQ1AsYUFDRTtBQUFRLGlCQUFTLEVBQUMsUUFBbEI7QUFBMkIsZUFBTyxFQUFFLEtBQUtD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dHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgQ29tcG9uZW50LCByZW5kZXIgfSBmcm9tIFwiLi90b3ktcmVhY3QuanNcIjtcblxuY2xhc3MgU3F1YXJlIGV4dGVuZHMgQ29tcG9uZW50e1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic3F1YXJlXCIgb25DbGljaz17dGhpcy5wcm9wcy5vbkNsaWNrfT5cbiAgICAgICAge3RoaXMucHJvcHMudmFsdWV9XG4gICAgICA8L2J1dHRvbj5cbiAgICApO1xuICB9XG59XG5cbmNsYXNzIEJvYXJkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyU3F1YXJlKGkpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFNxdWFyZVxuICAgICAgICB2YWx1ZT17dGhpcy5wcm9wcy5zcXVhcmVzW2ldfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLm9uQ2xpY2soaSl9XG4gICAgICAvPlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9hcmQtcm93XCI+XG4gICAgICAgICAge3RoaXMucmVuZGVyU3F1YXJlKDApfVxuICAgICAgICAgIHt0aGlzLnJlbmRlclNxdWFyZSgxKX1cbiAgICAgICAgICB7dGhpcy5yZW5kZXJTcXVhcmUoMil9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvYXJkLXJvd1wiPlxuICAgICAgICAgIHt0aGlzLnJlbmRlclNxdWFyZSgzKX1cbiAgICAgICAgICB7dGhpcy5yZW5kZXJTcXVhcmUoNCl9XG4gICAgICAgICAge3RoaXMucmVuZGVyU3F1YXJlKDUpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2FyZC1yb3dcIj5cbiAgICAgICAgICB7dGhpcy5yZW5kZXJTcXVhcmUoNil9XG4gICAgICAgICAge3RoaXMucmVuZGVyU3F1YXJlKDcpfVxuICAgICAgICAgIHt0aGlzLnJlbmRlclNxdWFyZSg4KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmNsYXNzIEdhbWUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgaGlzdG9yeTogW1xuICAgICAgICB7XG4gICAgICAgICAgc3F1YXJlczogQXJyYXkoOSkuZmlsbChudWxsKSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBzdGVwTnVtYmVyOiAwLFxuICAgICAgeElzTmV4dDogdHJ1ZSxcbiAgICB9O1xuICB9XG5cbiAgaGFuZGxlQ2xpY2soaSkge1xuICAgIGNvbnN0IGhpc3RvcnkgPSB0aGlzLnN0YXRlLmhpc3Rvcnkuc2xpY2UoMCwgdGhpcy5zdGF0ZS5zdGVwTnVtYmVyICsgMSk7XG4gICAgY29uc3QgY3VycmVudCA9IGhpc3RvcnlbaGlzdG9yeS5sZW5ndGggLSAxXTtcbiAgICBjb25zdCBzcXVhcmVzID0gY3VycmVudC5zcXVhcmVzLnNsaWNlKCk7XG4gICAgaWYgKGNhbGN1bGF0ZVdpbm5lcihzcXVhcmVzKSB8fCBzcXVhcmVzW2ldKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNxdWFyZXNbaV0gPSB0aGlzLnN0YXRlLnhJc05leHQgPyBcIlhcIiA6IFwiT1wiO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgaGlzdG9yeTogaGlzdG9yeS5jb25jYXQoW1xuICAgICAgICB7XG4gICAgICAgICAgc3F1YXJlczogc3F1YXJlcyxcbiAgICAgICAgfSxcbiAgICAgIF0pLFxuICAgICAgc3RlcE51bWJlcjogaGlzdG9yeS5sZW5ndGgsXG4gICAgICB4SXNOZXh0OiAhdGhpcy5zdGF0ZS54SXNOZXh0LFxuICAgIH0pO1xuICB9XG5cbiAganVtcFRvKHN0ZXApIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHN0ZXBOdW1iZXI6IHN0ZXAsXG4gICAgICB4SXNOZXh0OiBzdGVwICUgMiA9PT0gMCxcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBoaXN0b3J5ID0gdGhpcy5zdGF0ZS5oaXN0b3J5O1xuICAgIGNvbnN0IGN1cnJlbnQgPSBoaXN0b3J5W3RoaXMuc3RhdGUuc3RlcE51bWJlcl07XG4gICAgY29uc3Qgd2lubmVyID0gY2FsY3VsYXRlV2lubmVyKGN1cnJlbnQuc3F1YXJlcyk7XG5cbiAgICBjb25zdCBtb3ZlcyA9IGhpc3RvcnkubWFwKChzdGVwLCBtb3ZlKSA9PiB7XG4gICAgICBjb25zdCBkZXNjID0gbW92ZSA/IFwiR28gdG8gbW92ZSAjXCIgKyBtb3ZlIDogXCJHbyB0byBnYW1lIHN0YXJ0XCI7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8bGkga2V5PXttb3ZlfT5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuanVtcFRvKG1vdmUpfT57ZGVzY308L2J1dHRvbj5cbiAgICAgICAgPC9saT5cbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICBsZXQgc3RhdHVzO1xuICAgIGlmICh3aW5uZXIpIHtcbiAgICAgIHN0YXR1cyA9IFwiV2lubmVyOiBcIiArIHdpbm5lcjtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdHVzID0gXCJOZXh0IHBsYXllcjogXCIgKyAodGhpcy5zdGF0ZS54SXNOZXh0ID8gXCJYXCIgOiBcIk9cIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2FtZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbWUtYm9hcmRcIj5cbiAgICAgICAgICA8Qm9hcmRcbiAgICAgICAgICAgIHNxdWFyZXM9e2N1cnJlbnQuc3F1YXJlc31cbiAgICAgICAgICAgIG9uQ2xpY2s9eyhpKSA9PiB0aGlzLmhhbmRsZUNsaWNrKGkpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdhbWUtaW5mb1wiPlxuICAgICAgICAgIDxkaXY+e3N0YXR1c308L2Rpdj5cbiAgICAgICAgICA8b2w+e21vdmVzfTwvb2w+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbnJlbmRlcig8R2FtZSAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpKTtcblxuLy8gbGV0IGdhbWUgPSA8R2FtZSAvPjtcblxuLy8gY29uc29sZS5sb2coZ2FtZS52ZG9tKTtcblxuXG5mdW5jdGlvbiBjYWxjdWxhdGVXaW5uZXIoc3F1YXJlcykge1xuICBjb25zdCBsaW5lcyA9IFtcbiAgICBbMCwgMSwgMl0sXG4gICAgWzMsIDQsIDVdLFxuICAgIFs2LCA3LCA4XSxcbiAgICBbMCwgMywgNl0sXG4gICAgWzEsIDQsIDddLFxuICAgIFsyLCA1LCA4XSxcbiAgICBbMCwgNCwgOF0sXG4gICAgWzIsIDQsIDZdLFxuICBdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgW2EsIGIsIGNdID0gbGluZXNbaV07XG4gICAgaWYgKHNxdWFyZXNbYV0gJiYgc3F1YXJlc1thXSA9PT0gc3F1YXJlc1tiXSAmJiBzcXVhcmVzW2FdID09PSBzcXVhcmVzW2NdKSB7XG4gICAgICByZXR1cm4gc3F1YXJlc1thXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8vIGNsYXNzIE15Q29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbi8vICAgY29uc3RydWN0b3IoKXtcbi8vICAgICBzdXBlcigpXG4vLyAgICAgdGhpcy5zdGF0ZSA9IHtcbi8vICAgICAgICAgYTogMSxcbi8vICAgICAgICAgYjogMlxuLy8gICAgIH1cbi8vICAgfVxuLy8gICByZW5kZXIoKSB7XG4vLyAgICAgcmV0dXJuIChcbi8vICAgICAgIDxkaXY+XG4vLyAgICAgICAgIDxwPm15IGNvbXBvbmVudDwvcD5cbi8vICAgICAgICAgPGJ1dHRvblxuLy8gICAgICAgICAgIG9uY2xpY2s9eygpID0+IHtcbi8vICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhOiB0aGlzLnN0YXRlLmEgKyAxIH0pO1xuLy8gICAgICAgICAgIH19XG4vLyAgICAgICAgID5cbi8vICAgICAgICAgICBhZGRcbi8vICAgICAgICAgPC9idXR0b24+XG4vLyAgICAgICAgIDxzcGFuPnt0aGlzLnN0YXRlLmEudG9TdHJpbmcoKX08L3NwYW4+XG4vLyAgICAgICAgIDxzcGFuPnt0aGlzLnN0YXRlLmIudG9TdHJpbmcoKX08L3NwYW4+XG4vLyAgICAgICA8L2Rpdj5cbi8vICAgICApO1xuLy8gICB9XG4vLyB9XG5cbi8vIHJlbmRlcihcbi8vICAgPE15Q29tcG9uZW50IGlkPVwiYVwiIGNsYXNzPVwiY1wiPlxuLy8gICAgIDxkaXY+YWJjPC9kaXY+XG4vLyAgICAgPGRpdj48L2Rpdj5cbi8vICAgICA8ZGl2PjwvZGl2PlxuLy8gICA8L015Q29tcG9uZW50Pixcbi8vICAgZG9jdW1lbnQuYm9keVxuLy8gKTtcblxuLypcbumAu+i+ke+8miBcbjEuIGJhYmVsIOS8muaKimpzeOivreazlee/u+ivkeaIkGNyZWF0ZUVsZW1lbnQodGFnTmFtZS9DbGFzc05hbWUsIGF0dHJpYnV0ZSwgLi4uY2hpbGRyZW4p55qE5b2i5byPXG4yLiDoh6rlt7HlhpnkuIDkuKpjcmVhdGVFbGVtZW5077yM6YWN5ZCI6L+Z5Liq5Ye95pWw562+5ZCN5p2l5aSE55CG6L+Z5Lqb5Lyg5YWl55qE5Y+C5pWw77yM55Sf5oiQ5LiA5LiqRE9NXG4qL1xuIiwiY29uc3QgUkVOREVSX1RPX0RPTSA9IFN5bWJvbChcInJlbmRlciB0byBkb21cIik7XG5cbmV4cG9ydCBjbGFzcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnByb3BzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gICAgdGhpcy5fcm9vdCA9IG51bGw7XG4gICAgdGhpcy5fcmFuZ2UgPSBudWxsO1xuICB9XG4gIHNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSkge1xuICAgIHRoaXMucHJvcHNbbmFtZV0gPSB2YWx1ZTtcbiAgfVxuICBhcHBlbmRDaGlsZChjb21wb25lbnQpIHtcbiAgICB0aGlzLmNoaWxkcmVuLnB1c2goY29tcG9uZW50KTtcbiAgfVxuICBnZXQgdmRvbSgpIHtcbiAgICByZXR1cm4gdGhpcy5yZW5kZXIoKS52ZG9tO1xuICB9XG4gIFxuICBbUkVOREVSX1RPX0RPTV0ocmFuZ2UpIHtcbiAgICAvKipcbiAgICAqIOa4suafk+aIkGRvbVxuICAgICovXG4gICAgdGhpcy5fcmFuZ2UgPSByYW5nZTtcbiAgICB0aGlzLl92ZG9tID0gdGhpcy52ZG9tO1xuICAgIC8vIOmAkuW9kuiwg+eUqFxuICAgIHRoaXMuX3Zkb21bUkVOREVSX1RPX0RPTV0ocmFuZ2UpO1xuICB9XG5cbiAgdXBkYXRlKCl7XG4gICAgbGV0IGlzU2FtZU5vZGUgPSAob2xkTm9kZSwgbmV3Tm9kZSkgPT4ge1xuICAgICAgaWYgKG9sZE5vZGUudHlwZSAhPT0gbmV3Tm9kZS50eXBlIClcbiAgICAgICAgcmV0dXJuIGZhbHNlXG5cbiAgICAgIGZvciAobGV0IG5hbWUgaW4gbmV3Tm9kZS5wcm9wcykge1xuICAgICAgICBpZiAobmV3Tm9kZS5wcm9wc1tuYW1lXSAhPT0gb2xkTm9kZS5wcm9wc1tuYW1lXSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoT2JqZWN0LmtleXMob2xkTm9kZS5wcm9wcykubGVuZ3RoID4gT2JqZWN0LmtleXMobmV3Tm9kZS5wcm9wcykubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICBpZiAobmV3Tm9kZS50eXBlID09PSBcIiN0ZXh0XCIpIHtcbiAgICAgICAgaWYgKG5ld05vZGUuY29udGVudCAhPT0gb2xkTm9kZS5jb250ZW50KSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIGxldCB1cGRhdGUgPSAob2xkTm9kZSwgbmV3Tm9kZSkgPT4ge1xuICAgICAgICAvLyB0eXBlLCBwcm9wcyzlrozlhajkuIDoh7TmiY3kuI3mm7TmlrDvvIznhLblkI7lho3nnItjaGlsZHJlblxuICAgICAgICAvLyAjdGV4dCDkvb/nlKhjb250ZW50XG4gICAgICAgIGlmICghaXNTYW1lTm9kZShvbGROb2RlLCBuZXdOb2RlKSkge1xuICAgICAgICAgIG5ld05vZGVbUkVOREVSX1RPX0RPTV0ob2xkTm9kZS5fcmFuZ2UpXG4gICAgICAgICAgcmV0dXJuIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBuZXdOb2RlLl9yYW5nZSA9IG9sZE5vZGUuX3JhbmdlXG5cbiAgICAgICAgbGV0IG5ld0NoaWxkcmVuID0gbmV3Tm9kZS52Y2hpbGRyZW5cbiAgICAgICAgbGV0IG9sZENoaWxkcmVuID0gb2xkTm9kZS52Y2hpbGRyZW5cblxuICAgICAgICBpZiAoIW5ld0NoaWxkcmVuIHx8ICFuZXdDaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyDlpITnkIZjaGlsZHJlbueahGRpZmZcbiAgICAgICAgbGV0IHRhaWxSYW5nZSA9IG9sZENoaWxkcmVuW29sZENoaWxkcmVuLmxlbmd0aCAtIDFdLl9yYW5nZTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaTxuZXdDaGlsZHJlbi5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgbGV0IG5ld0NoaWxkID0gbmV3Q2hpbGRyZW5baV07XG4gICAgICAgICAgbGV0IG9sZENoaWxkID0gb2xkQ2hpbGRyZW5baV07XG5cbiAgICAgICAgICBpZiAoaSA8IG9sZENoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgdXBkYXRlKG9sZENoaWxkLCBuZXdDaGlsZClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHJhbmdlID0gZG9jdW1lbnQuY3JlYXRlUmFuZ2UoKTtcbiAgICAgICAgICAgIHJhbmdlLnNldFN0YXJ0KHRhaWxSYW5nZS5lbmRDb250YWluZXIsIHRhaWxSYW5nZS5lbmRPZmZzZXQpXG4gICAgICAgICAgICByYW5nZS5zZXRFbmQodGFpbFJhbmdlLmVuZENvbnRhaW5lciwgdGFpbFJhbmdlLmVuZE9mZnNldClcbiAgICAgICAgICAgIG5ld0NoaWxkW1JFTkRFUl9UT19ET01dKHJhbmdlKTtcbiAgICAgICAgICAgIHRhaWxSYW5nZSA9IHJhbmdlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8g6I635Y+W5paw55qEdmRvbVxuICAgIGxldCB2ZG9tID0gdGhpcy52ZG9tXG4gICAgdXBkYXRlKHRoaXMuX3Zkb20sIHZkb20pO1xuXG4gICAgLy8g5a2Y5YKo5paw55qEdmRvbeS4uuaXp+eahHZkb21cbiAgICB0aGlzLl92ZG9tID0gdmRvbTtcbiAgfVxuXG4gIHNldFN0YXRlKG5ld1N0YXRlKSB7XG4gICAgLy8gZGVidWdnZXJcbiAgICBpZiAodGhpcy5zdGF0ZSA9PT0gbnVsbCB8fCB0eXBlb2YgdGhpcy5zdGF0ZSAhPT0gXCJvYmplY3RcIikge1xuICAgICAgdGhpcy5zdGF0ZSA9IG5ld1N0YXRlO1xuICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgbWVyZ2UgPSAob2xkU3RhdGUsIG5ld1N0YXRlKSA9PiB7XG4gICAgICBmb3IgKGxldCBwIGluIG5ld1N0YXRlKSB7XG4gICAgICAgIGlmIChvbGRTdGF0ZVtwXSA9PT0gbnVsbCB8fCB0eXBlb2Ygb2xkU3RhdGVbcF0gIT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICBvbGRTdGF0ZVtwXSA9IG5ld1N0YXRlW3BdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1lcmdlKG9sZFN0YXRlW3BdLCBuZXdTdGF0ZVtwXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8g5pu05paw5pWw5o2uXG4gICAgbWVyZ2UodGhpcy5zdGF0ZSwgbmV3U3RhdGUpO1xuXG4gICAgLy8g5pu05pawRE9NXG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxufVxuXG5jbGFzcyBFbGVtZW50V3JhcHBlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHR5cGUpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gIH1cblxuICBnZXQgdmRvbSgpIHtcbiAgICB0aGlzLnZjaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW4ubWFwKGNoaWxkID0+IGNoaWxkLnZkb20pXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBbUkVOREVSX1RPX0RPTV0ocmFuZ2UpIHtcbiAgICAvLyDmj5LlhaVyb290XG4gICAgdGhpcy5fcmFuZ2UgPSByYW5nZTtcblxuICAgIGxldCByb290ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0aGlzLnR5cGUpO1xuXG4gICAgZm9yIChsZXQgbmFtZSBpbiB0aGlzLnByb3BzKSB7XG4gICAgICBsZXQgdmFsdWUgPSB0aGlzLnByb3BzW25hbWVdO1xuICAgICAgaWYgKG5hbWUubWF0Y2goL15vbihbXFxzXFxTXSspJC8pKSB7XG4gICAgICAgIHJvb3QuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICBSZWdFeHAuJDEucmVwbGFjZSgvXltcXHNcXFNdLywgKGMpID0+IGMudG9Mb3dlckNhc2UoKSksXG4gICAgICAgICAgdmFsdWVcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChuYW1lID09PSBcImNsYXNzTmFtZVwiKSBuYW1lID0gXCJjbGFzc1wiO1xuICAgICAgICByb290LnNldEF0dHJpYnV0ZShuYW1lLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLnZjaGlsZHJlbilcbiAgICAgIHRoaXMudmNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbi5tYXAoY2hpbGQgPT4gY2hpbGQudmRvbSlcblxuICAgIGZvciAobGV0IGNoaWxkIG9mIHRoaXMudmNoaWxkcmVuKSB7XG4gICAgICBsZXQgY2hpbGRSYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG4gICAgICAvLyDnlLHkuo7mmK9hcHBlbmRDaGlsZO+8jOaJgOS7peaYr+aUvuWcqOacgOWQjlxuICAgICAgY2hpbGRSYW5nZS5zZXRTdGFydChyb290LCByb290LmNoaWxkTm9kZXMubGVuZ3RoKTtcbiAgICAgIGNoaWxkUmFuZ2Uuc2V0RW5kKHJvb3QsIHJvb3QuY2hpbGROb2Rlcy5sZW5ndGgpO1xuICAgICAgY2hpbGRbUkVOREVSX1RPX0RPTV0oY2hpbGRSYW5nZSk7XG4gICAgfVxuXG4gICAgcmVwbGFjZUNvbnRlbnQocmFuZ2UsIHJvb3QpXG4gIH1cbn1cblxuY2xhc3MgVGV4dFdyYXBwZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihjb250ZW50KSB7XG4gICAgc3VwZXIoY29udGVudCk7XG4gICAgdGhpcy50eXBlID0gXCIjdGV4dFwiO1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gIH1cblxuICBnZXQgdmRvbSgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBbUkVOREVSX1RPX0RPTV0ocmFuZ2UpIHtcbiAgICB0aGlzLl9yYW5nZSA9IHJhbmdlO1xuICAgIGxldCByb290ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGhpcy5jb250ZW50KTtcbiAgICByZXBsYWNlQ29udGVudChyYW5nZSwgcm9vdClcbiAgfVxufVxuXG5mdW5jdGlvbiByZXBsYWNlQ29udGVudChyYW5nZSwgbm9kZSkge1xuICByYW5nZS5pbnNlcnROb2RlKG5vZGUpO1xuICByYW5nZS5zZXRTdGFydEFmdGVyKG5vZGUpO1xuICByYW5nZS5kZWxldGVDb250ZW50cygpO1xuXG4gIHJhbmdlLnNldFN0YXJ0QmVmb3JlKG5vZGUpO1xuICByYW5nZS5zZXRFbmRBZnRlcihub2RlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZSwgYXR0cmlidXRlcywgLi4uY2hpbGRyZW4pIHtcbiAgbGV0IGU7XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gXCJzdHJpbmdcIikge1xuICAgIGUgPSBuZXcgRWxlbWVudFdyYXBwZXIodHlwZSk7XG4gIH0gZWxzZSB7XG4gICAgZSA9IG5ldyB0eXBlKCk7XG4gIH1cblxuICAvLyBsZXQgZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSlcbiAgZm9yIChsZXQgcCBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgZS5zZXRBdHRyaWJ1dGUocCwgYXR0cmlidXRlc1twXSk7XG4gIH1cblxuICBsZXQgaW5zZXJ0Q2hpbGRyZW4gPSAoY2hpbGRyZW4pID0+IHtcbiAgICBmb3IgKGxldCBjaGlsZCBvZiBjaGlsZHJlbikge1xuICAgICAgaWYgKHR5cGVvZiBjaGlsZCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBjaGlsZCA9IG5ldyBUZXh0V3JhcHBlcihjaGlsZCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChjaGlsZCA9PT0gbnVsbCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIC8vIOS9v+eUqHt96K+t5rOVaXRlbeS8muS7peaVsOe7hOeahOW9ouW8j+S8oOWFpVxuICAgICAgaWYgKGNoaWxkIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgaW5zZXJ0Q2hpbGRyZW4oY2hpbGQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZS5hcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBpbnNlcnRDaGlsZHJlbihjaGlsZHJlbik7XG5cbiAgcmV0dXJuIGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoY29tcG9uZW50LCBwYXJlbnRFbGVtZW50KSB7XG4gIGxldCByYW5nZSA9IGRvY3VtZW50LmNyZWF0ZVJhbmdlKCk7XG4gIHJhbmdlLnNldFN0YXJ0KHBhcmVudEVsZW1lbnQsIDApO1xuICByYW5nZS5zZXRFbmQocGFyZW50RWxlbWVudCwgcGFyZW50RWxlbWVudC5jaGlsZE5vZGVzLmxlbmd0aCk7XG4gIHJhbmdlLmRlbGV0ZUNvbnRlbnRzKCk7XG4gIGNvbXBvbmVudFtSRU5ERVJfVE9fRE9NXShyYW5nZSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9