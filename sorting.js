// Algostructures and Datarithms

export class Sorting {

    //---------------------------------------Merge Sort----------------------------------------------
    merge(left, right) {
        let arr = [];
        // Break out of loop if any one of the array gets empty
        while (left.length && right.length) {
            // Pick the smaller among the smallest element of left and right sub arrays 
            if (left[0] < right[0]) {
                arr.push(left.shift());
            }
            else {
                arr.push(right.shift());
            }
        }
        // Concatenating the leftover elements
        // (in case we didn't go through the entire left or right array)
        return [ ...arr, ...left, ...right ];
    }

    mergeSort(array) {
        const half = array.length / 2;
        
        // Base case or terminating case
        if(array.length < 2) {
            return array;
        }
        
        const left = array.splice(0, half);
        return this.merge(this.mergeSort(left), this.mergeSort(array));
    }

    //---------------------------------------Bubble Sort----------------------------------------------
    bubbleSort(arr) {
        for(var i = 0; i < arr.length; i++){
            // Last i elements are already in place  
            for(var j = 0; j < ( arr.length - i -1 ); j++){
                // Checking if the item at present iteration 
                // is greater than the next iteration
                if(arr[j] > arr[j+1]){
                    // If the condition is true then swap them
                    var temp = arr[j]
                    arr[j] = arr[j + 1]
                    arr[j+1] = temp
                }
            }
        }
        // Print the sorted array
        console.log(arr);
    }

    //-------------------------------------Selection Sort----------------------------------------------
    selectionSort(array) {
        let n = array.length;
            
        for(let i = 0; i < n; i++) {
            // Finding the smallest number in the subarray
            let min = i;
            for(let j = i + 1; j < n; j++){
                if(array[j] < array[min]) {
                    min = j; 
                }
            }
            if (min != i) {
                // Swapping the elements
                let tmp = array[i]; 
                array[i] = array[min];
                array[min] = tmp;      
            }
        }
        return array;
    }

    //---------------------------------------Quick Sort------------------------------------------------
    swap(items, left, right){
        var temp = items[left];
        items[left] = items[right];
        items[right] = temp;
    }
    partition(items, left, right) {
        var pivot   = items[Math.floor((right + left) / 2)], //middle element
            i       = left, //left pointer
            j       = right; //right pointer
        while (i <= j) {
            while (items[i] < pivot) {
                i++;
            }
            while (items[j] > pivot) {
                j--;
            }
            if (i <= j) {
                this.swap(items, i, j); //sawpping two elements
                i++;
                j--;
            }
        }
        return i;
    }

    quickSort(items, left, right) {
        var index;
        if (items.length > 1) {
            index = this.partition(items, left, right); //index returned from partition
            if (left < index - 1) { //more elements on the left side of the pivot
                this.quickSort(items, left, index - 1);
            }
            if (index < right) { //more elements on the right side of the pivot
                this.quickSort(items, index, right);
            }
        }
        return items;
    }
}
//-------------------------------------Log Statements----------------------------------------------

// let sorting = new Sorting();

// // Runtime: 0 ( n log(n)) average and worst case. Memory: Depends.
// let array = [5, 6, 7, 4, 3, 2, 6, 7, 9, 6, 4];
// console.log("Merge Sort:");
// console.log(sorting.mergeSort(array));

// // Bubble Sort Runtime: 0( n2 ) average and worst case. Memory: 0( 1)
// let array2 = [5, 6, 7, 4, 3, 2, 6, 7, 9, 6, 4];
// console.log("Bubble Sort:");
// console.log(sorting.bubbleSort(array2));

// // SelectionSortIRuntime: 0(n2) average and worst case. Memory:0(1)
// let array3 = [5, 6, 7, 4, 3, 2, 6, 7, 9, 6, 4];
// console.log("Selection Sort:");
// console.log(sorting.selectionSort(array3));

// // Quick Sort Runtime: O(n log(n)) average, O(n2 ) worst case. Memory: 0( log(n)).
// let array4 = [5, 6, 7, 4, 3, 2, 6, 7, 9, 6, 4];
// console.log("Quick Sort:")
// console.log(sorting.quickSort(array4, 0, array4.length - 1));