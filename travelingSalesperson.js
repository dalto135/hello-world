// Java program to implement
// traveling salesman problem
// using naive approach.
class GFG {
    constructor() {
        this.array = [];
    }
}

// implementation of traveling
// Salesman Problem
function travllingSalesmanProblem(graph, s) {
// store all vertex apart
// from source vertex
    let vertex = [];

    for (let i = 0; i < graph.array.length; i++) {
        if (i != s) {
            vertex.push(i);
        }
    }

// store minimum weight
// Hamiltonian Cycle.
    let min_path = Number.MAX_SAFE_INTEGER;
    do {
        // store current Path weight(cost)
        let current_pathweight = 0;
    
        // compute current path weight
        let k = s;
        
        for (let i = 0; i < vertex.length; i++) {
            current_pathweight += graph.array[k][vertex[i]];
            k = vertex[i];
        }
        current_pathweight += graph.array[k][s];
    
        // update minimum
        min_path = Math.min(min_path, current_pathweight);

    } while (findNextPermutation(vertex));

    return min_path;
}

// Function to swap the data
// present in the left and right indices
function swap(data, left, right) {
    // Swap the data
    let temp = data[left];
    // data.set(left, data[right]);
    data[left] = data[right];
    // data.set(right, temp);
    data[right] = temp;
    
    // Return the updated array
    return data;
}

// Function to reverse the sub-array
// starting from left to the right
// both inclusive
function reverse(data, left, right) {
    // Reverse the sub-array
    while (left < right) {
        let temp = data[left];
        // data.set(left++, data[right]);
        data[++left] = data[right];
        // data.set(right--, temp);
        data[--right] = temp;
    }
    
    // Return the updated array
    return data;
}

// Function to find the next permutation
// of the given integer array
function findNextPermutation(data) {
    // If the given dataset is empty
    // or contains only one element
    // next_permutation is not possible
    if (data.length <= 1) {
        return false;
    }
    
    let last = data.length - 2;
    
    // find the longest non-increasing
    // suffix and find the pivot
    while (last >= 0) {
        if (data[last] < data[last + 1]) {
            break;
        }
        last--;
    }
    
    // If there is no increasing pair
    // there is no higher order permutation
    if (last < 0) {
        return false;
    }
    
    let nextGreater = data.length - 1;
    
    // Find the rightmost successor
    // to the pivot
    for (let i = data.length - 1; i > last; i--) {
        if (data[i] > data[last]) {
            nextGreater = i;
            break;
        }
    }
    
    // Swap the successor and
    // the pivot
    data = swap(data, nextGreater, last);
    
    // Reverse the suffix
    data = reverse(data, last + 1, data.length - 1);
    
    // Return true as the
    // next_permutation is done
    return true;
}


// matrix representation of graph
// int graph[][] = {{0, 10, 15, 20},
// {10, 0, 35, 25},
// {15, 35, 0, 30},
// {20, 25, 30, 0}};

let graph = new GFG();
graph.array = [[0, 10, 15, 20], [10, 0, 35, 25], [15, 35, 0, 30], [20, 25, 30, 0]];
console.log(graph);

let s = 0;

console.log("shortest path");
console.log(travllingSalesmanProblem(graph, s));

// This code is contributed by adityapande88