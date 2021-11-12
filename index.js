const Tree = require('./modules/binary-tree').tree
const binaryTree = new Tree();
const data = [12,2,7,1,18,15];

let i = data.length;
let j = 0;

while (j < i) {
  binaryTree.insert(data[j]);
  j++;
}
console.log('Binary Tree')
console.log('\nEntries')
console.log(data);
console.log('\nOrder')
console.log('Preorder')
console.log(binaryTree.getArray().preOrder);
console.log('Inorder')
console.log(binaryTree.getArray().inOrder);
console.log('Postorder')
console.log(binaryTree.getArray().postOrder);
