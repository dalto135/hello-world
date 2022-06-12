import {Queue} from "./queue.js";

class Node {
    constructor(value) {
        this.value = value;
        this.visited = false;
        this.adjacent = [];
    }
}

function insert(root, value) {
    if (root == null || root.value == null) {
        root = value;
    }
    else {
        if (value.adjacent) {
            value.adjacent.push(root);
            root.adjacent.push(value);
        }
        else {
            let newNode = new Node(value);
            newNode.adjacent.push(root);
            root.adjacent.push(newNode);
        }
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

// let graph = {
//     value: 10,
//     visited: false,
//     adjacent: [
//         {
//             value: 20,
//             visited: false,
//             adjacent: [
//                 {
//                     value: 50,
//                     visited: false,
//                     adjacent: [
//
//                     ]
//                 },
//                 {
//                     value: 60,
//                     visited: false,
//                     adjacent: [
// 
//                     ]
//                 }
//             ]
//         },
//         {
//             value: 30,
//             visited: false,
//             adjacent: [
//                 {
//                     value: 80,
//                     visited: false,
//                     adjacent: [
// 
//                     ]
//                 },
//                 {
//                     value: 90,
//                     visited: false,
//                     adjacent: [
// 
//                     ]
//                 }
//             ]
//         }
//     ]
// };

let rootGraph = new Node(10);
let twenty = new Node(20);
let thirty = new Node(30);
let forty = new Node(40);
let fifty = new Node(50);
let sixty = new Node(60);
let seventy = new Node(70);

insert(rootGraph, twenty)
insert(rootGraph, thirty);

insert(twenty, forty);
insert(twenty, fifty);

insert(thirty, sixty)
insert(thirty, seventy);

insert(forty, 80);

// console.log("breadth first search");
// breadthFirstSearch(rootGraph);

console.log("depth first search");
depthFirstSearch(rootGraph);
