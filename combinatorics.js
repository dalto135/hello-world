// Returns the factorial of num
function fact(num) {
    let answer = 1;

    if (num > 1) {
        for (let i = num; i > 0; --i) {
            answer *= i;
        }
    }
    else if (num < 0) {
        for (let i = num; i < 0; ++i) {
            answer *= i;
        }
    }

    return answer;
}

// How many combinations of k items can be created from n items (order doesn't matter)
function nChooseK(n, k) {
    if (n < k) {
        return -1;
    }
    let answer = Math.floor(fact(n) / (fact(n - k) * fact(k)));
    return answer;
}

// How many permutations of k items can be created from n items (order does matter)
function permutations(n, k) {
    let answer = Math.floor(fact(n) / fact(n - k));
    return answer;
}

function starsAndBars(types, stars) {
    // let places = n + k - 1;
    let bars = types - 1;
    let places = stars + bars;

    return nChooseK(places, bars);
}

console.log(nChooseK(49, 6));
console.log(permutations(14, 4));
console.log(starsAndBars(5, 10))
console.log(fact(0));