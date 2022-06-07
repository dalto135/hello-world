class TrieNode {
    constructor() {
        this.isEndOfWord = false;
        this.children = new Array(26);
        for (let i = 0; i < 26; i++) {
            this.children[i] = null;
        }
    }
}

// If not present, inserts word into trie
    // If the word is prefix of trie node,
    // just marks leaf node
function insert(root, word) {
    let pCrawl = root;

    for (let level = 0; level < word.length; ++level) {
        let index = word[level].charCodeAt(0) - 'a'.charCodeAt(0);

        if (pCrawl.children[index] == null) {
            pCrawl.children[index] = new TrieNode();
        }
        pCrawl = pCrawl.children[index];
    }

    // mark last node as leaf
    pCrawl.isEndOfWord = true;
}

// Returns true if word presents in trie, else false
function search(root, word) {
    let pCrawl = root;

    for (let level = 0; level < word.length; ++level) {
        let index = word[level].charCodeAt(0) - 'a'.charCodeAt(0);

        if (pCrawl.children[index] == null) {
            return false;
        }
        pCrawl = pCrawl.children[index];
    }

    return pCrawl.isEndOfWord;
}

// Driver   
// Input words (use only 'a' through 'z' and lower case)
let root = new TrieNode();

let words = ["the", "a", "there", "answer", "any", "by", "bye", "their"];

// Construct trie
for (let i = 0; i < words.length ; i++) {
    insert(root, words[i]);
}

console.log("THE");
console.log(search(root, "the"));

console.log("THESE");
console.log(search(root, "these"));

console.log("THEIR");
console.log(search(root, "their"));

console.log("THAW");
console.log(search(root, "thaw"));