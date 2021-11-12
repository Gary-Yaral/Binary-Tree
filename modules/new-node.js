class Node {
  constructor(data) {
    this.root = data;
    this.left = null;
    this.right = null;
  }

  insert(_data) {
    if (_data < this.root) {
      if (this.left === null) {
        this.left = new Node(_data);
      } else {
        this.left.insert(_data);
      }
    } else {
      if (this.right === null) {
        this.right = new Node(_data);
      } else {
        this.right.insert(_data);
      }
    }
  }
}

module.exports.node = Node;