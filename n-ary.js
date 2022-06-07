import {Queue} from "./queue.js";

class Node {
    constructor(value, N) {
        this.value = value;
        this.adjacent = new Array(N)
    }
}

function depthFirstSearch(root) {
    if (root == null) {
        return;
    }
    console.log(root.value);
    root.adjacent.forEach(i => {
        depthFirstSearch(i);
    });
}

function breadthFirstSearch(root) {
    let queue = new Queue();
    queue.enqueue(root);

    while(!queue.isEmpty()) {
        let node = queue.dequeue();
        if (node) {
            console.log(node.value);
        
            node.adjacent.forEach(i => {
                queue.enqueue(i);
            })
        }
    }
}

function insert(root, node) {
    if (!root) {
        
    }
    else if (!root.value) {
        let newNode = new Node(node, root.adjacent.length);
        root = newNode;
    }
    else {
        for (let i = 0; i < root.adjacent.length; ++i) {
            if (!root.adjacent[i]) {
                let newNode = new Node(node, root.adjacent.length);
                root.adjacent[i] = newNode;
                return;
            }
        }
        insert(root.adjacent[0], node);
    }
}

let root = new Node(10, 4);

insert(root, 20);
insert(root, 15);
insert(root, 30);
insert(root, 40);
insert(root, 50);
insert(root, 60);

console.log("root");
console.log(root);

console.log("breadth first search");
breadthFirstSearch(root);

console.log("depth first search");
depthFirstSearch(root);

console.log("root.adjacent[0]");
console.log(root.adjacent[0]);
