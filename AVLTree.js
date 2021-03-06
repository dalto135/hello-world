import {Queue} from "./queue.js";

// JavaScript program for insertion in AVL Tree
class Node {
    constructor(key) {
        this.key = key;
        this.height = 1;
        this.left = null;
        this.right = null;
    }
}

class AVLTree {
    constructor() {
        this.root = null;
    }
}

// A utility function to right
// rotate subtree rooted with y
// See the diagram given above.
function rightRotate(y) {
    var x = y.left;
    var T2 = x.right;

    // Perform rotation
    x.right = y;
    y.left = T2;

    // Update heights
    y.height = max(height(y.left), height(y.right)) + 1;
    x.height = max(height(x.left), height(x.right)) + 1;

    // Return new root
    return x;
}

// A utility function to left
// rotate subtree rooted with x
// See the diagram given above.
function leftRotate(x) {
    var y = x.right;
    var T2 = y.left;

    // Perform rotation
    y.left = x;
    x.right = T2;

    // Update heights
    x.height = max(height(x.left), height(x.right)) + 1;
    y.height = max(height(y.left), height(y.right)) + 1;

    // Return new root
    return y;
}

// Get Balance factor of node N
function getBalance(N) {
    if (N == null) {
        return 0;
    }
    return height(N.left) - height(N.right);
}

function insert(node, key) {
    /* 1. Perform the normal BST insertion */
    if (node == null) {
        return new Node(key);
    }

    if (key < node.key) {
        node.left = insert(node.left, key);
    }
    else if (key > node.key) {
        node.right = insert(node.right, key);
    }
    // Duplicate keys not allowed
    else {
        return node;
    }

    /* 2. Update height of this ancestor node */
    node.height = 1 + max(height(node.left), height(node.right));

    /* 3. Get the balance factor of this ancestor
    node to check whether this node became
    unbalanced */
    var balance = getBalance(node);

    // If this node becomes unbalanced, then there
    // are 4 cases Left Left Case
    if (balance > 1 && key < node.left.key) {
        return rightRotate(node);
    }

    // Right Right Case
    if (balance < -1 && key > node.right.key) {
        return leftRotate(node);
    }

    // Left Right Case
    if (balance > 1 && key > node.left.key) {
        node.left = leftRotate(node.left);
        return rightRotate(node);
    }

    // Right Left Case
    if (balance < -1 && key < node.right.key) {
        node.right = rightRotate(node.right);
        return leftRotate(node);
    }

    /* return the (unchanged) node pointer */
    return node;
}

// A utility function to get
// the height of the tree
function height(node) {
    if (node == null) {
        return 0;
    }

    return node.height;
}

// A utility function to get
// maximum of two integers
function max(a, b) {
    return a > b ? a : b;
}

/* Given a non-empty binary search tree, return the
node with minimum key value found in that tree.
Note that the entire tree does not need to be
searched. */
function minValueNode(node) {
    let current = node;

    /* loop down to find the leftmost leaf */
    while (current.left != null) {
        current = current.left;
    }

    return current;
}

function deleteNode(tree, key) {
    let root;
    if (tree.root) {
        root = tree.root;
    }
    else {
        root = tree;
    }

    // STEP 1: PERFORM STANDARD BST DELETE
    if (root == null) {
        return root;
    }

    // If the key to be deleted is smaller than
    // the root's key, then it lies in left subtree
    if (key < root.key) {
        root.left = deleteNode(root.left, key);
    }

    // If the key to be deleted is greater than the
    // root's key, then it lies in right subtree
    else if (key > root.key) {
        root.right = deleteNode(root.right, key);
    }

    // if key is same as root's key, then this is the node
    // to be deleted
    else {
        // node with only one child or no child
        if ((root.left == null) || (root.right == null)) {
            let temp = null;
            if (temp == root.left) {
                temp = root.right;
            }
            else {
                temp = root.left;
            }

            // No child case
            if (temp == null) {
                temp = root;
                root = null;
            }
            // One child case
            else {
                // Copy the contents of the non-empty child
                root = temp;
            }
        }
        else {

            // node with two children: Get the inorder
            // successor (smallest in the right subtree)
            let temp = minValueNode(root.right);

            // Copy the inorder successor's data to this node
            root.key = temp.key;

            // Delete the inorder successor
            root.right = deleteNode(root.right, temp.key);
        }
    }

    // If the tree had only one node then return
    if (root == null) {
        return root;
    }

    // STEP 2: UPDATE HEIGHT OF THE CURRENT NODE
    root.height = max(height(root.left), height(root.right)) + 1;

    // STEP 3: GET THE BALANCE FACTOR OF THIS NODE (to check whether
    // this node became unbalanced)
    let balance = getBalance(root);

    // If this node becomes unbalanced, then there are 4 cases
    // Left Left Case
    if (balance > 1 && getBalance(root.left) >= 0) {
        return rightRotate(root);
    }

    // Left Right Case
    if (balance > 1 && getBalance(root.left) < 0) {
        root.left = leftRotate(root.left);
        return rightRotate(root);
    }

    // Right Right Case
    if (balance < -1 && getBalance(root.right) <= 0) {
        return leftRotate(root);
    }

    // Right Left Case
    if (balance < -1 && getBalance(root.right) > 0) {
        root.right = rightRotate(root.right);
        return leftRotate(root);
    }

    return root;
}

function inOrder(node) {
    if (node != null) {
        let root;
        if (node.root) {
            root = node.root;
        }
        else {
            root = node;
        }

        inOrder(root.left);
        console.log(root.key);
        inOrder(root.right);
    }
}

// DFS
function preOrder(node) {
    if (node != null) {
        let root;
        if (node.root) {
            root = node.root;
        }
        else {
            root = node;
        }

        console.log(root.key);
        preOrder(root.left);
        preOrder(root.right);
    }
}

function postOrder(node) {
    if (node != null) {
        let root;
        if (node.root) {
            root = node.root;
        }
        else {
            root = node;
        }

        postOrder(root.left);
        postOrder(root.right);
        console.log(root.key);
    }
}

function breadthFirstSearch(tree) {
    let queue = new Queue();
    queue.enqueue(tree.root);

    while(!queue.isEmpty()) {
        let node = queue.dequeue();
        if (node) {
            console.log(node.key);
    
            queue.enqueue(node.left);
            queue.enqueue(node.right);
        }
    }
}

// Driver code
var tree = new AVLTree();

/* Constructing tree given in the above figure */
tree.root = insert(tree.root, 10);
tree.root = insert(tree.root, 20);
tree.root = insert(tree.root, 30);
tree.root = insert(tree.root, 40);
tree.root = insert(tree.root, 50);
tree.root = insert(tree.root, 25);

/* The constructed AVL Tree would be
    30
    / \
    20 40
    / \   \
    10 25  50
*/

console.log("tree.root")
console.log(tree.root);

// rightRotate(tree.root);
// console.log("right rotate");
// console.log(tree.root);

console.log("in order");
inOrder(tree);

console.log("pre order");
preOrder(tree);

console.log("post order");
postOrder(tree);

console.log("breadth first search");
breadthFirstSearch(tree);

deleteNode(tree, 25);

console.log("deleted 25 BFS");
breadthFirstSearch(tree);