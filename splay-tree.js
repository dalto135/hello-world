import {Queue} from "./queue.js";

// Javascript implementation for above approach

// An AVL tree node
class Node {
    /* Helper function that allocates
a new node with the given key and
    null left and right pointers. */
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

// A utility function to right
// rotate subtree rooted with y
// See the diagram given above.
function rightRotate(x) {
    let y = x.left;
    x.left = y.right;
    y.right = x;
    return y;
}

// A utility function to left
// rotate subtree rooted with x
// See the diagram given above.
function leftRotate(x) {
    let y = x.right;
    x.right = y.left;
    y.left = x;
    return y;
}

// This function brings the key at
// root if key is present in tree.
// If key is not present, then it
// brings the last accessed item at
// root. This function modifies the
// tree and returns the new root
function splay(root,key) {

    // Base cases: root is null or
    // key is present at root
    if (root == null || root.key == key) {
        return root;
    }
    // Key lies in left subtree
    if (root.key > key) {
        // Key is not in tree, we are done
        if (root.left == null) {
            return root;
        }

        // Zig-Zig (Left Left)
        if (root.left.key > key) {
            // First recursively bring the
            // key as root of left-left
            root.left.left = splay(root.left.left, key);

            // Do first rotation for root,
            // second rotation is done after else
            root = rightRotate(root);
        }
        else if (root.left.key < key) { // Zig-Zag (Left Right)
            // First recursively bring
            // the key as root of left-right
            root.left.right = splay(root.left.right, key);

            // Do first rotation for root.left
            if (root.left.right != null) {
                root.left = leftRotate(root.left);
            }
        }

        // Do second rotation for root
        return (root.left == null) ? root : rightRotate(root);
    }
    else { // Key lies in right subtree
        // Key is not in tree, we are done
        if (root.right == null) {
            return root;
        }

        // Zag-Zig (Right Left)
        if (root.right.key > key) {
            // Bring the key as root of right-left
            root.right.left = splay(root.right.left, key);

            // Do first rotation for root.right
            if (root.right.left != null) {
                root.right = rightRotate(root.right);
            }
        }
        else if (root.right.key < key) { // Zag-Zag (Right Right)
            // Bring the key as root of
            // right-right and do first rotation
            root.right.right = splay(root.right.right, key);
            root = leftRotate(root);
        }

        // Do second rotation for root
        return (root.right == null) ? root : leftRotate(root);
    }
}

 // Function to insert a new key k
// in splay tree with given root
function insert(root, k) {
    // Simple Case: If tree is empty
    if (root == null){
        return new Node(k);
    }
    // Bring the closest leaf node to root
    root = splay(root, k);

    // If key is already present, then return
    if (root.key == k) {
        return root;
    }

    // Otherwise allocate memory for new node
    var newnode = new Node(k);

    // If root's key is greater, make
    // root as right child of newnode
    // and copy the left child of root to newnode
    if (root.key > k) {
        newnode.right = root;
        newnode.left = root.left;
        root.left = null;
    }

    // If root's key is smaller, make
    // root as left child of newnode
    // and copy the right child of root to newnode
    else {
        newnode.left = root;
        newnode.right = root.right;
        root.right = null;
    }

    return newnode; // newnode becomes new root
}

// The search function for Splay tree.
// Note that this function returns the
// new root of Splay Tree. If key is
// present in tree then, it is moved to root.
// function search(root,key) {
//     return splay(root, key);
// }

// A utility function to print
// preorder traversal of the tree.
// The function also prints height of every node
function inOrder(node) {
    if (node != null) {
        inOrder(node.left);
        console.log(node.key);
        inOrder(node.right);
    }
}

function preOrder(node) {
    if (node != null) {
        console.log(node.key);
        preOrder(node.left);
        preOrder(node.right);
    }
}

function postOrder(node) {
    if (node != null) {
        postOrder(node.left);
        postOrder(node.right);
        console.log(node.key);
    }
}

function breadthFirstSearch(root) {
    let queue = new Queue();
    queue.enqueue(root);

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
let root = new Node(100);
    root.left = new Node(50);
    root.right = new Node(200);
    root.left.left = new Node(40);
    root.left.left.left = new Node(30);
    root.left.left.left.left = new Node(20);

console.log("inorder")
inOrder(root);

console.log("pre order")
preOrder(root);

console.log("post order")
postOrder(root);

console.log("BFS")
breadthFirstSearch(root);

root = splay(root, 20);
console.log("splay pre order");
preOrder(root);

root = insert(root, 123);
console.log("insert");
console.log(root);
preOrder(root);
