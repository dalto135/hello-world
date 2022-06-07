class Graph {

    constructor(length) {
        this.adjMatrix = new Array(length);
        for (let i = 0; i < length; ++i) {
            this.adjMatrix[i] = new Array(length);
            for (let j = 0; j < length; ++j) {
                this.adjMatrix[i][j] = 0;
            }
        }
        this.numVertices = length;
    }

    // Add edges
    //i and j are coordinates, k is weight of connection
    addEdge(i, j, k) {
        this.adjMatrix[i][j] = k;
        this.adjMatrix[j][i] = k;
    }

    // Remove edges
    removeEdge(i, j) {
        this.adjMatrix[i][j] = 0;
        this.adjMatrix[j][i] = 0;
    }

    toString() {
        // let s = "";
        for (let i = 0; i < this.numVertices; ++i) {
            console.log(this.adjMatrix[i]);
            // s += i + ": ";

            // this.adjMatrix[i].forEach(j => {
            //     if (j) {
            //         s += "1 "
            //     }
            //     else {
            //         s += "0 "
            //     }
            // });

            // s += "\n";
        }
        // return s;
    }
}

let g = new Graph(4);

g.addEdge(0, 1, 1);
g.addEdge(0, 2, 1);
g.addEdge(1, 2, 10);
g.addEdge(2, 0, 11);
g.addEdge(2, 3, 100);

console.log("graph");
// g.toString();
console.log(g);

g.removeEdge(0, 2);
console.log("remove graph");
console.log(g);
