const Node = require('./new-node').node

class Tree {
  constructor() {
    this.root = null;
    this.wasFound = false;
    this.preOrderArray = [];
    this.inOrderArray = [];
    this.postOrderArray = [];
  }

  insert(data) {
    if(this.root === null) {
      this.root = new Node(data);
    } else {
      this.root.insert(data);
    }
  }

  initPreorder() {
    this.preorder(this.root);
  }

  preorder(node) {
    if (node === null) {
      return;
    } else {
      this.preOrderArray.push(node.root);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }

  initInOrder() {
    this.inorder(this.root);
  }

  inorder(node) {
    if (node === null) {
      return;
    } else {
      this.inorder(node.left);
      this.inOrderArray.push(node.root);
      this.inorder(node.right);
    }
  }

  initPostOrder() {
    this.postorder(this.root);
  }

  postorder(node) {
    if (node === null) {
      return;
    } else {
      this.postorder(node.left);
      this.postorder(node.right);
      this.postOrderArray.push(node.root);
    }
  }

  getArray() {
    this.preOrderArray =[];
    this.inOrderArray = [];
    this.postOrderArray = [];
    this.initPreorder();
    this.initInOrder();
    this.initPostOrder();
    return {
      preOrder: this.preOrderArray,
      inOrder:this.inOrderArray,
      postOrder: this.postOrderArray
    }
  }

  search(node, data) {
    if (node === null) {
      return;
    } else {
      if (node.root === data) {
        this.wasFound = true;
      } else {
        this.search(node.left, data);
        this.search(node.right, data);
      }
    }
  }

  exists(data) {
    this.search(this.root, data);
    return this.wasFound;
  }

}

module.exports.tree = Tree;