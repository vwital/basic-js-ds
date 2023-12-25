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

  has(data) {
    function searchElem(treeNode, val) {
      if (!treeNode) {
        return false;
      } else if (treeNode.data == val) {
        return true;
      } else if (val < treeNode.data) {
        return searchElem(treeNode.left, data);
      } else {
        return searchElem(treeNode.right, data);
      }
    }
    return searchElem(this.treeRoot, data);
  }

  find(data) {
    function findValue(treeNode, data) {
      if (!treeNode) {
        return null;
      } else if (treeNode.data === data) {
        return treeNode;
      } else if (data < treeNode.data) {
        return findValue(treeNode.left, data);
      } else {
        return findValue(treeNode.right, data);
      }
    }
    return findValue(this.treeRoot, data);
  }

  remove(data) {
    function removeTreeNode(treeNode, data) {
      if (!treeNode) return null;

      if (data < treeNode.data) {
        treeNode.left = removeTreeNode(treeNode.left, data);
        return treeNode;
      } else if (data > treeNode.data) {
        treeNode.right = removeTreeNode(treeNode.right, data);
        return treeNode;
      } else {
        if (!treeNode.left && !treeNode.right) {
          return null;
        } else if (!treeNode.left) {
          treeNode = treeNode.right;
          return treeNode;
        } else if (!treeNode.right) {
          treeNode = treeNode.left;
          return treeNode;
        } else {
          let minElFromRight = treeNode.right;
          while (minElFromRight.left) {
            minElFromRight = minElFromRight.left;
          }
          console.log("mib", minElFromRight);
          treeNode.data = minElFromRight.data;
          treeNode.right = removeTreeNode(treeNode.right, minElFromRight.data);

          return treeNode;
        }
      }
    }
    return removeTreeNode(this.treeRoot, data);
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
tree.add(9);
tree.add(14);
tree.add(54);
tree.add(2);
tree.add(6);
tree.add(8);
tree.add(31);
tree.add(1);
console.log("remove", tree.remove(9));
tree.remove(2);
console.log(tree);
console.log(tree.has(9));

module.exports = {
  BinarySearchTree,
};
