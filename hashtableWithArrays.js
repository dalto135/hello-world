// sha3_256 = require('js-sha3').sha3_256;

class HashTable {
    constructor() {
        this.table = new Array(4);
        // this.length = 0;
        // this.size = 0;
    }


    calculateHash(key) {
        return String(key).length;
    }

    set(key, value) {
        const hash = this.calculateHash(key);
        const index = hash % this.table.length;
        // const index = hash;

        if (index > this.table.length - 1) {
            console.log("This needs to be resized");
            let array2 = new Array(this.table.length * 2);
            
            for (let i = 0; i < this.table.length; ++i) {
                // Comment out if-statement if not recomputing indices from hash.
                if (this.table[i] != undefined && this.table[i].length > 0) {
                    for (let j = 0; j < this.table[i].length; ++j) {
                        let index2 = this.calculateHash(this.table[i][j][0]) % array2.length;
                        // let index2 = this.calculateHash(this.table[i][j][0]);
                        if (array2[index2] == undefined) {
                            array2[index2] = [];
                        }
                        array2[index2].push(this.table[i][j]);
                    }
                }
                // array2[i] = this.table[i];
            }
            console.log("array2");
            console.log(array2);
            this.table = array2
        }

        if (this.table[index] == undefined) {
            this.table[index] = [];
            // ++this.size;
        }
        else {
            for (let i = 0; i < this.table[index].length; ++i) {
                if (this.table[index][i][0] == key) {
                    this.table[index][i][1] = value;
                    return;
                }
            }
        }
        this.table[index].push([key, value]);
        // ++this.length;
    }

    remove(key) {
        const hash = this.calculateHash(key);
        const index = hash % this.table.length;

        if (this.table[index] == undefined) {
            return null;
        }
        for (let i = 0; i < this.table[index].length; ++i) {
            if (this.table[index][i][0] == key) {
                // --this.length;
                // if (this.table[hash].length == 1) {
                //     --this.size;
                // }
                return this.table[index].splice(i, 1);
            }
        }
    }

    get(key) {
        const hash = this.calculateHash(key);
        const index = hash % this.table.length;
        if (this.table[index]) {
            for (let i = 0; i < this.table[index].length; ++i) {
                if (this.table[index][i][0] == key) {
                    return this.table[index][i][1];
                }
            }
        }
        return null;
    }

    // Returns the Number of Key/Value pairs in the HashTable.
    getLength() {
        let length = 0;
        for (let i = 0; i < this.table.length; ++i) {
            if (this.table[i] != undefined) {
                length = length + this.table[i].length;
            }
        }
        return length;
        // return this.length;
    }

    // Returns the number of buckets in the HashTable.
    getSize() {
        let size = 0;
        for (let i = 0; i < this.table.length; ++i) {
            if (this.table[i] != undefined && this.table[i].length > 0) {
                ++size;
            }
        }
        return size;
        // return this.size;
        // return this.table.length;
    }
}

const ht = new HashTable();

ht.set(1, "one");
console.log();
console.log("HASHTABLE");
console.log(ht.table);

ht.set(22, "two");
console.log();
console.log("HASHTABLE");
console.log(ht.table);

ht.set(333, "three");
console.log();
console.log("HASHTABLE");
console.log(ht.table);

ht.set(4444, "four");
console.log();
console.log("HASHTABLE");
console.log(ht.table);

ht.set(55555, "five");
console.log();
console.log("HASHTABLE");
console.log(ht.table);

ht.set(55555, "fivefive");
console.log();
console.log("HASHTABLE");
console.log(ht.table);

ht.set("also5", "also5")
console.log();
console.log("HASHTABLE");
console.log(ht.table);

// console.log(sha3_256("hello"));
// console.log(ht.get("55555"));
// sha3_256("hello");

//search
// console.log("Italy");
// console.log(ht.get("Italy"));

console.log();
console.log("HASHTABLE");
console.log(ht.table);

console.log();
console.log("GET 333");
console.log(ht.get("333"));

console.log();
console.log("HASHTABLE LENGTH");
console.log(ht.getLength());

console.log();
console.log("HASHTABLE SIZE");
console.log(ht.getSize());

console.log();
console.log("REMOVE 22");
console.log(ht.remove("22"));

console.log();
console.log("HASHTABLE");
console.log(ht.table);

console.log();
console.log("HASHTABLE LENGTH");
console.log(ht.getLength());

console.log();
console.log("HASHTABLE SIZE");
console.log(ht.getSize());
