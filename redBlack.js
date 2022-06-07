import {Queue} from "./queue.js";

const CONSTANTS = {
    RED: 'RED',
    BLACK: 'BLACK',
}

class Node {
    constructor(param) {
        this.key = param.key || 0;
        this.color = param.color || CONSTANTS.RED;
        this.left = param.left || undefined;
        this.right = param.right || undefined;
        this.parent = param.parent || undefined;
    }
}

class Tree {
    constructor() {
        this.leaf = new Node({ key: 0, color: CONSTANTS.BLACK });
        this.root = this.leaf;
    }
}

function printTree(tree) {
    const stack = [
        { node: tree.root, str: '' },
    ];

    while (stack.length) {
        // Take last item from stack
        const item = stack.pop();
        // Don't print empty leaf
        if (item.node == tree.leaf) {
            continue;
        }
        // Get position of node - left or right
        let position = '';
        if (item.node.parent) {
            position = item.node === item.node.parent.left ? 'L----' : 'R----';
        } else {
            position = 'ROOT-';
        }
        // Print info about node
        console.log(`${item.str}${position} ${item.node.key} (${item.node.color})`);

        // Add node children into stack
        stack.push({ node: item.node.right, str: item.str + '     ' });
        stack.push({ node: item.node.left, str: item.str + ' |   ' });
    }
}

/**
* @param {Node} node - vertex for rotation
*/
function rotateLeft(tree, node) {
    const vertex = node.right;

    // set new right child for node
    node.right = vertex.left;
    if (vertex.left != tree.leaf) {
        vertex.left.parent = node;
    }

    // replace node by new vertex
    vertex.parent = node.parent;
    // if node is root, set new root
    if (! node.parent) {
        tree.root = vertex;
    }
    // replace node for parent
    else if (node === node.parent.left) {
        node.parent.left = vertex;
    }
    else {
        node.parent.right = vertex;
    }

    // set left child for vertex - node
    vertex.left = node;
    node.parent = vertex;
}

/**
* @param {Node} node - vertex for rotation
*/
function rotateRight(tree, node) {
    // left child is new vertex
    const vertex = node.left;

    // node lose left child, we replace it with right child from new vertex
    node.left = vertex.right;
    if (vertex.right != tree.leaf) {
        vertex.right.parent = node;
    }

    // new vertex replaces old node
    vertex.parent = node.parent;
    if (! node.parent) {
        tree.root = vertex;
    } else if (node == node.parent.right) {
        node.parent.right = vertex;
    } else {
        node.parent.left = vertex;
    }

    // attach right child for new vertex - it is old node
    vertex.right = node;
    node.parent = vertex;
}

/**
* @param {number} key - key for new node
*/
function insert(tree, { key }) {
    const node = new Node({
        key,
        left: tree.leaf,
        right: tree.leaf,
    });

    let parent;
    let tmp = tree.root;

    // Search of parent for new node
    // we check all nodes while not get an empty leaf
    while (tmp !== tree.leaf) {
        parent = tmp;
        // key less that key of current node, we should search in left subtree
        if (node.key < tmp.key) {
            tmp = tmp.left;
        }
        // key bigger that key of current node, we should search in right subtree
        else {
            tmp = tmp.right;
        }
    }

    node.parent = parent;

    // insert node in left or right subtree
    if (! parent) {
        tree.root = node;
    } else if (node.key < parent.key) {
        parent.left = node;
    } else {
        parent.right = node;
    }

    // tree has no vertex, node will be root
    if (! node.parent) {
        node.color = CONSTANTS.BLACK;
        return;
    }
    // node has no grandparent, so we have no to balance the tree
    if (! node.parent.parent) {
        return;
    }

    // balancing of tree
    balanceInsert(tree, node);
}

/**
* @param {Node} node - node for balancing
*/
function balanceInsert(tree, node) {
    // while parent is red
    while (node.parent.color === CONSTANTS.RED) {
        // node parent is left child of grandparent
        if (node.parent === node.parent.parent.left) {
            const uncle = node.parent.parent.right;
            // if uncle and parent are red, need make these black and grandparent red
            if (uncle.color === CONSTANTS.RED) {
                uncle.color = CONSTANTS.BLACK;
                node.parent.color = CONSTANTS.BLACK;
                node.parent.parent.color = CONSTANTS.RED;
                node = node.parent.parent;
            }
            // if parent is red and uncle is black
            else {
                // if node is right child
                if (node === node.parent.right) {
                    node = node.parent;
                    rotateLeft(tree, node);
                }
                node.parent.color = CONSTANTS.BLACK;
                node.parent.parent.color = CONSTANTS.RED;
                rotateRight(tree, node.parent.parent);
            }
        } else {
            const uncle = node.parent.parent.left;
            if (uncle.color === CONSTANTS.RED) {
                uncle.color = CONSTANTS.BLACK;
                node.parent.color = CONSTANTS.BLACK;
                node.parent.parent.color = CONSTANTS.RED;
                node = node.parent.parent;
            } else {
                if (node == node.parent.left) {
                    node = node.parent;
                    rotateRight(tree, node);
                }
                node.parent.color = CONSTANTS.BLACK;
                node.parent.parent.color = CONSTANTS.RED;
                rotateLeft(tree, node.parent.parent);
            }
        }

        if (node == tree.root) {
            break;
        }
    }

    tree.root.color = CONSTANTS.BLACK;
}

/**
* @param {Node} node - node of the tree where we should search the minimum value
*/
function minimum(tree, node) {
    while (node.left != tree.leaf) {
        node = node.left;
    }
    return node;
}

/**
* @param {Node} oldNode - node that should be replaced
* @param {Node} newNode - node that value will be used instead the old node
*/
function replace(tree, oldNode, newNode) {
    if (! oldNode.parent) {
        tree.root = newNode;
    } else if (oldNode == oldNode.parent.left) {
        oldNode.parent.left = newNode;
    } else {
        oldNode.parent.right = newNode;
    }
    newNode.parent = oldNode.parent;
}

/**
* @param {number} key - key for node that should be removed
*/
function deleteNode(tree, key) {
    let forRemove = tree.leaf;
    let tmp = tree.root;

    // searching the node for removing
    while (tmp != tree.leaf) {
        if (tmp.key === key) {
            forRemove = tmp;
            break;
        }

        if (tmp.key > key) {
            tmp = tmp.left;
        } else {
            tmp = tmp.right;
        }
    }

    // node is not found
    if (forRemove == tree.leaf) {
        console.log('node not found');
        return;
    }

    let minRight = forRemove;
    let minRightColor = minRight.color;
    let newMinRight;

    /*
    if the node for removing has no left child,
    we replace this by its right child
    */
    if (forRemove.left == tree.leaf) {
        newMinRight = forRemove.right;
        replace(tree, forRemove, forRemove.right);
    }
    /*
    if the node for removing has no right child,
    we replace this by its left child
    */
    else if (forRemove.right == tree.leaf) {
        newMinRight = forRemove.left;
        replace(tree, forRemove, forRemove.left);
    }
    // if the node for removing have both children
    else {
        minRight = minimum(tree, forRemove.right);
        minRightColor = minRight.color;
        newMinRight = minRight.right;

        if (minRight.parent === forRemove) {
            newMinRight.parent = minRight;
        }
        /*
        replace minimum of the right subtree by its right child,
        attach right children from node for removing into the minimum of right subtree
        */
        else {
            replace(tree, minRight, minRight.right);
            minRight.right = forRemove.right;
            minRight.right.parent = minRight;
        }

        // attach left children from node for removing into the minimum of right subtree
        replace(tree, forRemove, minRight);
        minRight.left = forRemove.left;
        minRight.left.parent = minRight;
        minRight.color = forRemove.color;
    }

    if (minRightColor === CONSTANTS.BLACK) {
        balanceDelete(tree, newMinRight);
    }
}

/**
* @param {Node} node - node for balancing
*/
function balanceDelete(tree, node) {
    while (node != tree.root && node.color == CONSTANTS.BLACK) {
        if (node == node.parent.left) {
            let brother = node.parent.right;

            if (brother.color == CONSTANTS.RED) {
                brother.color = CONSTANTS.BLACK;
                node.parent.color = CONSTANTS.RED;
                rotateLeft(tree, node.parent);
                brother = node.parent.right;
            }

            if (
                brother.left.color == CONSTANTS.BLACK &&
                brother.right.color == CONSTANTS.BLACK
            ) {
                brother.color = CONSTANTS.RED;
                node = node.parent;
            } else {
                if (brother.right.color == CONSTANTS.BLACK) {
                    brother.left.color = CONSTANTS.BLACK;
                    brother.color = CONSTANTS.RED;
                    rotateRight(tree, brother);
                    brother = node.parent.right;
                }

                brother.color = node.parent.color;
                node.parent.color = CONSTANTS.BLACK;
                brother.right.color = CONSTANTS.BLACK;
                rotateLeft(tree, node.parent);
                node = tree.root;
            }
        } else {
            let brother = node.parent.left
            if (brother.color == CONSTANTS.RED) {
                brother.color = CONSTANTS.BLACK;
                node.parent.color = CONSTANTS.RED;
                rotateRight(tree, node.parent);
                brother = node.parent.left;
            }

            if (
                brother.left.color == CONSTANTS.BLACK &&
                brother.right.color == CONSTANTS.BLACK
            ) {
                brother.color = CONSTANTS.RED;
                node = node.parent;
            } else {
                if (brother.left.color == CONSTANTS.BLACK) {
                    brother.right.color = CONSTANTS.BLACK;
                    brother.color = CONSTANTS.RED;
                    rotateLeft(tree, brother);
                    brother = node.parent.left;
                }

                brother.color = node.parent.color;
                node.parent.color = CONSTANTS.BLACK;
                brother.left.color = CONSTANTS.BLACK;
                rotateRight(tree, node.parent);
                node = tree.root;
            }
        }
    }

    node.color = CONSTANTS.BLACK;
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

function breadthFirstSearch(node) {
    let queue = new Queue();
    queue.enqueue(node.root);

    while(!queue.isEmpty()) {
        let node = queue.dequeue();
        if (node) {
            console.log(node.key);

            queue.enqueue(node.left);
            queue.enqueue(node.right);
        }
    }
}

const RBTree = new Tree();

for (let i = 1; i < 20; i++) {
    insert(RBTree, { key: i });
}

printTree(RBTree);

for (let i = 1; i < 20; i++) {
    if (i % 3 === 0) {
        deleteNode(RBTree, i);
    }
}

printTree(RBTree);

console.log("BREADTH FIRST SEARCH");
breadthFirstSearch(RBTree);

console.log("IN ORDER");
inOrder(RBTree);

console.log("PRE ORDER (DFS)");
preOrder(RBTree);

console.log("POST ORDER");
postOrder(RBTree);
