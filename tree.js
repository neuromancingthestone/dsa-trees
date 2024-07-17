/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }

  sumBFS() {
    let toVisitQueue = [this];
    let sum = 0;

    while (toVisitQueue.length) {
      let current = toVisitQueue.shift();

      sum += current.val;

      for (let child of current.children) 
        toVisitQueue.push(child)
    }
    return sum;
  }
  
  countEvenBFS(val) {
    let toVisitQueue = [this];
    let evens = 0;

    while (toVisitQueue.length) {
      let current = toVisitQueue.shift();

      if ((current.val % 2) === 0) 
        evens += 1;

      for (let child of current.children) 
        toVisitQueue.push(child)
    }    
    return evens;
  }

  greaterThanBFS(val) {
    let toVisitQueue = [this];
    let c = 0;

    while (toVisitQueue.length) {
      let current = toVisitQueue.shift();

      if (current.val > val) 
        c += 1;

      for (let child of current.children) 
        toVisitQueue.push(child)
    }    
    return c;    
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if(this.root === null) return 0;
    return this.root.sumBFS();
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if(this.root === null) return 0;    
    return this.root.countEvenBFS();
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if(this.root === null) return 0;    
    return this.root.greaterThanBFS(lowerBound);
  }
}

module.exports = { Tree, TreeNode };