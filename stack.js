export class Stack {
    constructor() {
        // this.elements = {};
        // this.head = 0;
        // this.tail = 0;
        this.elements = [];
    }
    push(element) {
        // this.elements[this.tail] = element;
        // this.tail++;
        this.elements.push(element);
    }
    pop() {
        // const item = this.elements[this.head];
        // delete this.elements[this.head];
        // this.head++;
        // return item;
        return this.elements.pop();
    }
    peek() {
        // return this.elements[this.head];
        return this.elements[0];
    }
    length() {
        // return this.tail - this.head;
        return this.elements.length;
    }
    isEmpty() {
        // return this.length() === 0;
        if (this.elements.length == 0) {
            return true;
        }
        return false;
    }
}

// let stack = new Stack();

// console.log("push");
// for (let i = 1; i <= 7; i++) {
//     console.log(i);
//     stack.push(i);
// }

// console.log("pop");
// while (!stack.isEmpty()) {
//     console.log(stack.pop());
// }
