/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  minDepthBFS() {
    const toVisitStack= [this];
    let c = 0;
    while(toVisitStack.length) {
      const current = toVisitStack.shift();
      c += 1;

      if(current.left === null) return c;
      else  toVisitStack.push(current.left);
      
      if(current.right === null) return c;
      else  toVisitStack.push(current.right);         
    }
  }
  maxDepthDFS() {
    const toVisitStack = [this];
    let c = 0;
    let maxD = 0;

    while(toVisitStack.length) {
      const current = toVisitStack.pop();
     
      if(current.left !== null) {
        toVisitStack.push(current.left);
        c += 1;         
      }
      if(current.right !== null) {
        toVisitStack.push(current.right);        
        c += 1;         
      }      
      if((current.left === null) && (current.right === null)) {
        if(c > maxD)  maxD = c;
        c = 0;
      }
    }
    return maxD;
  }  
}


class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if(this.root === null) return 0;
    return this.root.minDepthBFS();
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if(this.root === null) return 0;
    return this.root.maxDepthDFS();
  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {    
    // I spent several hours trying to figure out how to do this using
    // an array queue, and it was just too much. I started looking at
    // recursive loops and that seemed to be the answer.
    // I didn't want to spend any more time on this as the lessons
    // did not cover this at all, and I'm needing to move on to 
    // finish the class.
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {

  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

let smallTree;
let largeTree;
let emptyTree;

emptyTree = new BinaryTree();

// build small tree;
let smallLeft = new BinaryTreeNode(5);
let smallRight = new BinaryTreeNode(5);
let smallRoot = new BinaryTreeNode(6, smallLeft, smallRight);
smallTree = new BinaryTree(smallRoot);

// build large tree
let node6 = new BinaryTreeNode(1);
let node5 = new BinaryTreeNode(1);
let node4 = new BinaryTreeNode(2);
let node3 = new BinaryTreeNode(3, node4, node6);
let node2 = new BinaryTreeNode(5, node3, node5);
let node1 = new BinaryTreeNode(5);
let root = new BinaryTreeNode(6, node1, node2);
largeTree = new BinaryTree(root);

module.exports = { BinaryTree, BinaryTreeNode };
