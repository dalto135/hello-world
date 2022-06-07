// A utility function that returns
// maximum of two integers
function max(a, b) {
    return (a > b) ? a : b;
}

// Returns the maximum value that
// can be put in a knapsack of
// capacity W
function unboundedKnapsack(W, wt, val, idx) {
    // Base Case
    // if we are at idx 0.
    if (idx == 0) {
        return (W / wt[0]) * val[0];
    }
    // There are two cases either take element or not
    // take. If not take then
    let notTake = 0 + unboundedKnapsack(W, wt, val, idx - 1);
    // if take then weight = W-wt[idx] and index will
    // remain same.
    let take = Number.MIN_VALUE;
    if (wt[idx] <= W) {
        take = val[idx] + unboundedKnapsack(W - wt[idx], wt, val, idx);
    }
    return max(take, notTake);
}

let W = 100;
let val = [10, 30, 20];
let wt = [5, 10, 15];
let n = val.length;
console.log(unboundedKnapsack(W, wt, val, n - 1));

// This code is contributed by Sanskar.