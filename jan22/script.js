// Create a simply binary tree data structure using Node(n)
class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }

  insert(key) {
    if (key < this.key && this.left) {
      this.left.insert(key);
    } else if (key < this.key) {
      this.left = new Node(key);
    } else if (key > this.key && this.right) {
      this.right.insert(key);
    } else if (key > this.key) {
      this.right = new Node(key);
    }
  }

  remove(key) {
    if(key === this.key) {
      this.key = null;
    }
  }

  toString(key){
    return "Node return:\n" + this.key;
  }
}

// printTree(root) prints out the tree in a readable format with each level on the same line.
printTree = (root) => {
  if (!root) return;
  if (root.key != null) (console.log(root.key));
  if (root.left && root.right) {
    console.log("/" + " " + "\\")
    console.log(root.left.key + " " + root.right.key);
    root.left.remove(root.left.key);
    root.right.remove(root.right.key);
  }
  else if (root.left) {
    console.log("/")
    console.log(root.left.key);
    root.left.remove(root.left.key);
  }
  else if (root.right) {
    console.log("\\")
    console.log(root.right.key);
    root.right.remove(root.right.key);
  }
  root.remove(root.key);
  
  
  printTree(root.left);
  printTree(root.right);
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
printTree(root);



/*
-----------------------------------------------------------------------
*/

const testArray = [[1,2,3],[4,5,6],[7,8,9]];

let testArrayFormat = "[[" + testArray.join("], [") + "]]";

let outputArrayFormat1 = "**check console log**";


//document.getElementById("input").innerHTML += testArrayFormat;
document.getElementById("output1").innerHTML += outputArrayFormat1;
//document.getElementById("output2").innerHTML += outputArrayFormat2;

const solution = `
class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }

  insert(key) {
    if (key < this.key && this.left) {
      this.left.insert(key);
    } else if (key < this.key) {
      this.left = new Node(key);
    } else if (key > this.key && this.right) {
      this.right.insert(key);
    } else if (key > this.key) {
      this.right = new Node(key);
    }
  }

  remove(key) {
    if(key === this.key) {
      this.key = null;
    }
  }

  toString(key){
    return "Node return:\n" + this.key;
  }
}

printTree = (root) => {
  if (!root) return;
  if (root.key != null) (console.log(root.key));
  if (root.left && root.right) {
    console.log("/" + " " + "\\")
    console.log(root.left.key + " " + root.right.key);
    root.left.remove(root.left.key);
    root.right.remove(root.right.key);
  }
  else if (root.left) {
    console.log("/")
    console.log(root.left.key);
    root.left.remove(root.left.key);
  }
  else if (root.right) {
    console.log("\\")
    console.log(root.right.key);
    root.right.remove(root.right.key);
  }
  root.remove(root.key);
  
  
  printTree(root.left);
  printTree(root.right);
}`;

document.getElementById("solution").innerHTML += solution;
