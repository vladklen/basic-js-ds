const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.mainRoot = null;
  }

  root() {
    if (this.mainRoot !== null) {
      return this.mainRoot;
    } else {
      return null;
    }
  }

  add(data) {
    this.mainRoot = addData(this.mainRoot, data);

    function addData(node, value) {
      if (!node) {
        return new Node(value);
      }

      if (node.data === value) {
        return node;
      }

      if (value < node.data) {
        node.left = addData(node.left, value);
      } else {
        node.right = addData(node.right, value);
      }
      return node;
    }
  }

  has(data) {
    console.log(this.mainRoot);
    return searchData(this.mainRoot, data);

    function searchData(node, value) {
      if (!node) {
        return false;
      }

      if (node.data === value) {
        return true;
      }

      if (value < node.data) {
        return searchData(node.left, value);
      } else {
        return searchData(node.right, value);
      }
    }
  }

  find(data) {
    return searchNode(this.mainRoot, data);

    function searchNode(node, value) {
      console.log(node, value);
      if (!node) {
        return null;
      }

      if (node.data === value) {
        return node;
      }

      if (value < node.data) {
        return searchNode(node.left, value);
      } else {
        return searchNode(node.right, value);
      }
    }
  }

  remove(data) {
    this.mainRoot = removeData(this.mainRoot, data);

    function removeData(node, value) {
      if (!node) {
        return null;
      }

      if (value < node.data) {
        node.left = removeData(node.left, value);
        return node;
      } else if (value > node.data) {
        node.right = removeData(node.right, value);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        let minRight = node.right;
        while (minRight.left) {
          minRight = minRight.left;
        }

        node.data = minRight.data;

        node.right = removeData(node.right, minRight.data);

        return node;
      }
    }
  }

  min() {
    if (!this.mainRoot) {
      return;
    }
    let node = this.mainRoot;
    while (node.left) {
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.mainRoot) {
      return;
    }
    let node = this.mainRoot;
    while (node.right) {
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree,
};

const tree = new BinarySearchTree();
tree.add(9);
tree.add(14);
tree.add(2);
tree.add(6);
tree.add(128);
tree.add(8);
tree.add(31);
tree.add(54);
tree.add(1);
tree.remove(14);
tree.remove(8);
tree.remove(9);
// console.log(tree.find(8).data);
// console.log(tree.find(2).data);
// console.log(tree.find(32).data);
console.log(tree.has(2));
