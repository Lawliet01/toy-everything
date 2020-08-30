const RENDER_TO_DOM = Symbol("render to dom");

export class Component {
  constructor() {
    this.props = Object.create(null);
    this.children = [];
    this._root = null;
    this._range = null;
  }
  setAttribute(name, value) {
    this.props[name] = value;
  }
  appendChild(component) {
    this.children.push(component);
  }
  get vdom() {
    return this.render().vdom;
  }
  
  [RENDER_TO_DOM](range) {
    /**
    * 渲染成dom
    */
    this._range = range;
    this._vdom = this.vdom;
    // 递归调用
    this._vdom[RENDER_TO_DOM](range);
  }

  update(){
    let isSameNode = (oldNode, newNode) => {

      // 比较类型
      if (oldNode.type !== newNode.type )
        return false

      // 比较prop (遍历新node)
      for (let name in newNode.props) {
        if (newNode.props[name] !== oldNode.props[name]) {
          return false
        }
      }

      // 比较prop （比较的是完整性）
      if (Object.keys(oldNode.props).length > Object.keys(newNode.props).length) {
        return false
      }

      // textNode的处理
      if (newNode.type === "#text") {
        if (newNode.content !== oldNode.content) {
          return false
        }
      }
      return true
    }
    let update = (oldNode, newNode) => {
        // type, props,完全一致才不更新，然后再看children
        // #text 使用content
        if (!isSameNode(oldNode, newNode)) {
          newNode[RENDER_TO_DOM](oldNode._range)
          return 
        }
        
        newNode._range = oldNode._range

        let newChildren = newNode.vchildren
        let oldChildren = oldNode.vchildren

        if (!newChildren || !newChildren.length) {
          return;
        }

        // 处理children的diff
        let tailRange = oldChildren[oldChildren.length - 1]._range;

        for (let i = 0; i<newChildren.length; i++){
          let newChild = newChildren[i];
          let oldChild = oldChildren[i];

          if (i < oldChildren.length) {
            update(oldChild, newChild)
          } else {
            // 生成新的range
            let range = document.createRange();
            range.setStart(tailRange.endContainer, tailRange.endOffset)
            range.setEnd(tailRange.endContainer, tailRange.endOffset)
            newChild[RENDER_TO_DOM](range);
            tailRange = range
          }
        }
    }

    // 获取新的vdom
    let vdom = this.vdom
    update(this._vdom, vdom);

    // 存储新的vdom为旧的vdom
    this._vdom = vdom;
  }

  setState(newState) {
    // debugger
    if (this.state === null || typeof this.state !== "object") {
      this.state = newState;
      this.update();
      return;
    }

    let merge = (oldState, newState) => {
      for (let p in newState) {
        if (oldState[p] === null || typeof oldState[p] !== "object") {
          oldState[p] = newState[p];
        } else {
          merge(oldState[p], newState[p]);
        }
      }
    };

    // 更新数据
    merge(this.state, newState);

    // 更新DOM
    this.update();
  }
}

class ElementWrapper extends Component {
  constructor(type) {
    super();
    this.type = type;
  }

  get vdom() {
    this.vchildren = this.children.map(child => child.vdom)
    return this;
  }

  [RENDER_TO_DOM](range) {
    // 插入root
    this._range = range;

    let root = document.createElement(this.type);

    for (let name in this.props) {
      let value = this.props[name];
      if (name.match(/^on([\s\S]+)$/)) {
        root.addEventListener(
          RegExp.$1.replace(/^[\s\S]/, (c) => c.toLowerCase()),
          value
        );
      } else {
        if (name === "className") name = "class";
        root.setAttribute(name, value);
      }
    }

    if (!this.vchildren)
      this.vchildren = this.children.map(child => child.vdom)

    for (let child of this.vchildren) {
      let childRange = document.createRange();
      // 由于是appendChild，所以是放在最后
      childRange.setStart(root, root.childNodes.length);
      childRange.setEnd(root, root.childNodes.length);
      child[RENDER_TO_DOM](childRange);
    }

    replaceContent(range, root)
  }
}

class TextWrapper extends Component {
  constructor(content) {
    super(content);
    this.type = "#text";
    this.content = content;
  }

  get vdom() {
    return this;
  }
  [RENDER_TO_DOM](range) {
    this._range = range;
    let root = document.createTextNode(this.content);
    replaceContent(range, root)
  }
}

function replaceContent(range, node) {
  // 插入节点
  range.insertNode(node);

  // 调整位置，删除节点
  range.setStartAfter(node);
  range.deleteContents();

  // 调整位置
  range.setStartBefore(node);
  range.setEndAfter(node);
}

export function createElement(type, attributes, ...children) {
  // 处理type
  let e;
  if (typeof type === "string") {
    e = new ElementWrapper(type);
  } else {
    e = new type();
  }

  // let e = document.createElement(type)
  // 处理attribute
  for (let p in attributes) {
    e.setAttribute(p, attributes[p]);
  }

  // 处理children
  let insertChildren = (children) => {
    for (let child of children) {
      if (typeof child === "string") {
        child = new TextWrapper(child);
      }

      if (child === null) {
        continue;
      }
      // 使用{}语法item会以数组的形式传入
      if (child instanceof Array) {
        insertChildren(child);
      } else {
        e.appendChild(child);
      }
    }
  };
  insertChildren(children);

  return e;
}

export function render(component, parentElement) {
  let range = document.createRange();
  range.setStart(parentElement, 0);
  range.setEnd(parentElement, parentElement.childNodes.length);
  range.deleteContents();
  component[RENDER_TO_DOM](range);
}
