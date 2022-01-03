class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if (!this.root) {
      this.root = new Node(val);
      return this;
    }
    let current = this.root;

    while (current) {
      if (val < current.val) {
        if (current.left) {
          current = current.left;
        } else {
          current.left = new Node(val);
          return this;
        }
      } else if (val > current.val) {
        if (current.right) {
          current = current.right;
        } else {
          current.right = new Node(val);
          return this;
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, node = this.root) {
    if (!this.root) {
      this.root = new Node(val);
      return this;
    }
    if (val < node.val) {
      if (node.left) {
        this.insertRecursively(val, node.left);
      } else {
        node.left = new Node(val);
        return this;
      }
    }
    if (val > node.val) {
      if (node.right) {
        this.insertRecursively(val, node.right);
      } else {
        node.right = new Node(val);
        return this;
      }
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;
    while (current) {
      if (current.val === val) {
        return current;
      } else if (current.val > val) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, node = this.root) {
    if (!node) return;
    if (node.val === val) {
      return node;
    }
    if (val < node.val) {
      return this.findRecursively(val, node.left);
    }
    if (val > node.val) {
      return this.findRecursively(val, node.right);
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(node = this.root, arr = []) {
    if (!node) return arr;
    arr.push(node.val);
    if (node.left) this.dfsPreOrder(node.left, arr);
    if (node.right) this.dfsPreOrder(node.right, arr);
    console.log(arr);
    return arr;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {}

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {}

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {}

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {}

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {}

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {}
}

module.exports = BinarySearchTree;

let binarySearchTree = new BinarySearchTree();
binarySearchTree
  .insert(15)
  .insert(20)
  .insert(10)
  .insert(12)
  .insert(1)
  .insert(5)
  .insert(50);
binarySearchTree.dfsPreOrder();
