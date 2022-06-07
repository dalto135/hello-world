//---------------------------------------Binary Search----------------------------------------------
function binarySearch(array, i) {
    let low = 0;
    let high = array.length - 1;
    let mid;

    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        if (array[mid] < i) {
            low = mid + 1;
        }
        else if (array[mid] > i) {
            high = mid - 1;
        }
        else {
            return mid;
        }
    }
    // Error
    return -1;
}

//----------------------------------Binary Search Recursive----------------------------------------------
function binarySearchRecursive(array, i, low, high) {
    if (low > high) {
        //Error
        return -1;
    }

    let mid = Math.floor((low + high) / 2);
    if (array[mid] < i) {
        return binarySearchRecursive(array, i, mid + 1, high);
    }
    else if (array[mid] > i) {
        return binarySearchRecursive(array, i, low, mid - 1);
    }
    else {
        return mid;
    }
}

//-------------------------------------Log Statements----------------------------------------------
let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Binary Search:")
console.log(binarySearch(array, 4));

let array2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Binary Search Recursive:")
console.log(binarySearchRecursive(array2, 4, 0, array2.length - 1));