class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function add(node, item) {
    let currentNode = node;
    while(currentNode.next) {
        currentNode = currentNode.next;
    }

    if (item.value) {
        currentNode.next = item;
    }
    else {
        let newNode = new Node(item);
        currentNode.next = newNode;
    }
}

function remove(node, item) {
    let currentNode = node;

    if (currentNode == item || currentNode.value == item) {
        return currentNode.next;
    }
    while(currentNode.next) {
        if (currentNode.next == item || currentNode.next.value == item) {
            currentNode.next = currentNode.next.next;
            return node;
        }
        currentNode = currentNode.next;
    }
    return node;
}

// Creating linked list and adding values
let node = new Node(10);
add(node, 20);
let thirty = new Node(30);
add(node, thirty);
add(node, 40);

// Printing values
let currentNode = node;
while(currentNode) {
    console.log(currentNode.value);
    currentNode = currentNode.next;
}
console.log(node);

// Removing item and printing values
node = remove(node, thirty);
currentNode = node;
while(currentNode) {
    console.log(currentNode.value);
    currentNode = currentNode.next;
}
console.log(node);