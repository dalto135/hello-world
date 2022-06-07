export class Queue {
    constructor() {
        // this.elements = {};
        // this.head = 0;
        // this.tail = 0;
        this.elements = [];
    }
    enqueue(element) {
        // this.elements[this.tail] = element;
        // this.tail++;
        this.elements.push(element);
    }
    dequeue() {
        // const item = this.elements[this.head];
        // delete this.elements[this.head];
        // this.head++;
        // return item;
        return this.elements.shift();
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

// let q = new Queue();
// for (let i = 1; i <= 7; i++) {
//     q.enqueue(i);
// }
//   // get the current item at the front of the queue
//   console.log(q.peek()); // 1

//   // get the current length of queue
//   console.log(q.length); // 7

//   // dequeue all elements
// while (!q.isEmpty) {
//     console.log(q.dequeue());
// }