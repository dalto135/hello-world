import {Queue} from "./queue.js";

import {Sorting} from "./sorting.js";
const sorting = new Sorting();

// javascript program to demonstrate
// insert operation in binary
// search tree
/*
    * Class containing left and right child of current node and node value
    */
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

/*
    * A recursive function to insert a new value in BST
    */
function insert(root, value) {

    // If the tree is empty, return a new node
        
    if (root == null) {
        root = new Node(value);
    }
    if (root.value == null) {
        root.value = value;
        return root;
    }

    /* Otherwise, recur down the tree */
    if (value < root.value)
        root.left = insert(root.left, value);
    else if (value > root.value)
        root.right = insert(root.right, value);

    /* return the (unchanged) node pointer */
    return root;
}

function inOrder(node) {
    if (node != null) {
        inOrder(node.left);
        console.log(node.value);
        inOrder(node.right);
    }
}

// DFS
function preOrder(node) {
    if (node != null) {
        console.log(node.value);
        preOrder(node.left);
        preOrder(node.right);
    }
}

function postOrder(node) {
    if (node != null) {
        postOrder(node.left);
        postOrder(node.right);
        console.log(node.value);
    }
}

function breadthFirstSearch(root) {
    let queue = new Queue();
    queue.enqueue(root);

    while(!queue.isEmpty()) {
        let node = queue.dequeue();
        if (node) {
            console.log(node.value);
    
            queue.enqueue(node.left);
            queue.enqueue(node.right);
        }
    }
}

// Balance binary tree
/* This function traverse the skewed binary tree and
stores its nodes pointers in vector nodes[] */
function storeBSTNodes(root, nodes) {

    // console.log("incoming tree");
    // console.log(root);
    // Base case
    if (root == null) {
        return;
    }
    // Store nodes in Inorder (which is sorted
    // order for BST)
    storeBSTNodes(root.left, nodes);
    nodes.push(root.value);
    storeBSTNodes(root.right, nodes);
}

/* Recursive function to construct binary tree */
function buildTreeUtil(nodes, start, end) {
    // base case
    if (start > end)
        return null;

    /* Get the middle element and make it root */
    let mid = Math.floor(parseInt((start + end) / 2));
    let node = new Node(nodes[mid]);

    /* Using index in Inorder traversal, construct
        left and right subtress */
    node.left = buildTreeUtil(nodes, start, mid - 1);
    node.right = buildTreeUtil(nodes, mid + 1, end);

    // console.log("node?");
    // console.log(node);

    return node;
}

// This functions converts an unbalanced BST to
// a balanced BST
function orderAndBalanceTree(root) {
    // Store nodes of given BST in sorted order
    let nodes = [];
    storeBSTNodes(root, nodes);

    console.log("array");
    console.log(nodes);

    // Sort array
    // nodes.sort();
    let sortedNodes = sorting.mergeSort(nodes);
    console.log("sorted array");
    console.log(sortedNodes);

    // Constructs BST from nodes[]
    let n = sortedNodes.length;
    return buildTreeUtil(sortedNodes, 0, n - 1);
}

var root = new Node(null);

//           50
//        /      \
//       30      70
//      /  \    /  \
//     20  40  60  80

// Tree in order
// insert(50);
// insert(30);
// insert(20);
// insert(40);
// insert(70);
// insert(60);
// insert(80);

//           40
//        /      \
//       30      70
//      /  \    /  \
//     20 null 60  80
//            /
//           50

//           80
//        /      \
//       40     null
//      /  \
//     30  70
//    /   /
//   20  60
//      /
//     50

// Tree out of order
root = insert(root, 80);
root = insert(root, 40);
root = insert(root, 70);
root = insert(root, 60);
root = insert(root, 50);
root = insert(root, 30);
root = insert(root, 20);

// insert(40);
// insert(70);
// insert(60);
// insert(80);
// insert(50);
// insert(30);
// insert(20);

// let array = [];
// inOrderArray(root, array);
// console.log("array");
// console.log(array);
// let root2 = arrayToBST(array);
// console.log("root2");
// inOrder(root2);
// console.log("root2 pre order");
// preOrder(root2);
// console.log("root2 post order");
// postOrder(root2);




// print inorder traversal of the BST
// inorder();

// console.log("mani");
// inOrderManipulation(root);

// console.log("in order");
// inOrder(root);

// console.log("pre order");
// preOrder(root);

// console.log("post order");
// postOrder(root);

console.log("tree");
console.log(root);

console.log("BREADTH FIRST SEARCH");
breadthFirstSearch(root);

let newRoot = orderAndBalanceTree(root);

console.log("ordered and balanced tree");
console.log(newRoot);



let ten = new Node(10);

let twenty = new Node(20);
twenty.right = ten;

let thirty = new Node(30);
thirty.right = twenty;

let root40 = new Node(40);
root40.right = thirty;

console.log("root40");
console.log(root40);

let newRoot40 = orderAndBalanceTree(root40);
console.log("ordered root40");
console.log(newRoot40);