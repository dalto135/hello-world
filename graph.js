import {Queue} from "./queue.js";

class Node {
    constructor(value) {
        this.value = value;
        this.visited = false;
        this.adjacent = [];
    }
}

// class OandPGraph {
//     constructor() {

//     }
// }

function insert(root, value) {
    let newNode = new Node(value, root.limit);
    if (root == null || root.value == null) {
        root = newNode;
    }
    else {
        // if (root.adjacent.length == root.limit) {
        //     console.log("Exceeded number of branches for root");
        //     for (let i = 0; i < root.adjacent.length; ++i) {
        //         // let branch = root.adjacent[i];
        //         if (root.adjacent[i].adjacent.length < root.adjacent[i].limit) {
        //             root.adjacent[i].adjacent.push(newNode);
        //             i = root.adjacent.length;
        //         }
        //     }
        // }
        // else {
        newNode.adjacent.push(root);
        root.adjacent.push(newNode);
        // }
    }
}

function depthFirstSearch(root) {
    if (root == null) {
        return;
    }
    console.log(root.value);
    root.visited = true;
    
    root.adjacent.forEach(i => {
        if (i.visited == false) {
            depthFirstSearch(i);
        }
    });
}

function breadthFirstSearch(root) {
    let queue = new Queue();
    queue.enqueue(root);

    while(!queue.isEmpty()) {
        let node = queue.dequeue();
        console.log(node.value);
        node.visited = true;

        node.adjacent.forEach(i => {
            if (i.visited == false) {
                // i.visited = true;
                queue.enqueue(i);
            }
        })
    }
}

let root = new Node(50);
insert(root, 60)

console.log("graph");
console.log(root);

console.log("depth first search");
depthFirstSearch(root);

let root2 = new Node(50);
insert(root2, 60)

console.log("graph2");
console.log(root2.adjacent);

console.log("breadth first search");
breadthFirstSearch(root2);

