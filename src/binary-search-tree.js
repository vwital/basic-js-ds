const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.treeRoot = null;
    this.res = [];
  }

  root() {
    return this.treeRoot;
  }

  add(data) {
    if (!this.treeRoot) this.treeRoot = new Node(data);
    let current = this.treeRoot;
    let newEl = new Node(data);
    function insertElem(treeNode) {
      if (newEl.data < treeNode.data) {
        if (!treeNode.left) {
          treeNode.left = newEl;
        } else {
          insertElem(treeNode.left);
        }
      }
      if (newEl.data > treeNode.data) {
        if (!treeNode.right) {
          treeNode.right = newEl;
        } else {
          insertElem(treeNode.right);
        }
      }
    }
    insertElem(this.treeRoot);
  }

  has(data) {
    function searchElem(treeNode) {
      if (!treeNode) {
        return false;
      }
      if (treeNode.data === data) {
        return true;
      }
      if (treeNode.data < data) {
        searchElem(treeNode.left);
      } else {
        searchElem(treeNode.right);
      }
    }
    searchElem(this.treeRoot);
  }

  find() {
    //
  }

  remove(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  min() {
    if (!this.treeRoot) return null;
    let currentNode = this.treeRoot;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.data;
  }

  max() {
    if (!this.treeRoot) return null;
    let currentNode = this.treeRoot;
    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.data;
  }
}

const tree = new BinarySearchTree();
tree.add(4);
tree.add(5);
tree.add(2);
tree.add(1);
console.log(tree.root());
// console.log(tree.has(5));

module.exports = {
  BinarySearchTree,
};
