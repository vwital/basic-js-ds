const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.treeRoot = null;
  }

  root() {
    return this.treeRoot;
  }

  add(data) {
    if (!this.treeRoot) this.treeRoot = new Node(data);
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

  has(value) {
    function searchElem(treeNode, val) {
      if (!treeNode) {
        return false;
      } else if (treeNode.data == val) {
        return true;
      } else if (val < treeNode.data) {
        return searchElem(treeNode.left, value);
      } else {
        return searchElem(treeNode.right, value);
      }
    }
    return searchElem(this.treeRoot, value);
  }

  find(value) {
    function findValue(treeNode, value) {
      if (!treeNode) {
        return null;
      } else if (treeNode.data === value) {
        return treeNode;
      } else if (value < treeNode.data) {
        return findValue(treeNode.left, value);
      } else {
        return findValue(treeNode.right, value);
      }
    }
    return findValue(this.treeRoot, value);
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
tree.add(2);
tree.add(7);
tree.add(1);
tree.add(8);
tree.add(4);
tree.add(32);
tree.add(12);
tree.add(14);
console.log(tree.find(8));

module.exports = {
  BinarySearchTree,
};
