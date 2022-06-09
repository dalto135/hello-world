// Javascript program to find k-th child of a
// given node using typical representation that
// uses an array of pointers.Maximum number of children
var N = 10;
class Node {
    constructor(P) {
        this.val = P;
        this.child = Array(N).fill(null);
    }
};

// Traverses given n-ary tree to
// find K-th child of P.
function printKthChild(root, P, k) {

    // If P is current root
    if (root.val == P) {
        if (root.child[k - 1] == null) {
            console.log("Error : Does not exist");
        }
        else {
            console.log(root.child[k - 1].val);
        }
    }

    // If P lies in a subtree
    for (var i = 0; i < N; i++) {
        if (root.child[i] != null) {
            printKthChild(root.child[i], P, k);
        }
    }
}

// Driver code
var root = new Node('A');
root.child[0] = new Node('B');
root.child[1] = new Node('C');
root.child[2] = new Node('D');
root.child[3] = new Node('E');
root.child[0].child[0] = new Node('F');
root.child[0].child[1] = new Node('G');
root.child[2].child[0] = new Node('H');
root.child[0].child[0].child[0] = new Node('I');
root.child[0].child[0].child[1] = new Node('J');
root.child[0].child[0].child[2] = new Node('K');
root.child[2].child[0].child[0] = new Node('L');
root.child[2].child[0].child[1] = new Node('M');

// Print F's 2nd child
var P = 'F';
console.log("F's second child is : ");
printKthChild(root, P, 2);
P = 'A';
console.log("A's seventh child is : ");
printKthChild(root, P, 7);

console.log("root");
console.log(root);

// This code is contributed by noob2000