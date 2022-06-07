function fact(num) {
    let answer = 1;

    if (num > 1) {
        for (let i = num; i > 0; --i) {
            answer *= i;
        }
        return answer;
    }
    else if (num < 0) {
        for (let i = num; i < 0; ++i) {
            answer *= i;
        }
        return answer;
    }
    else {
        return answer;
    }
}

function nChooseK(n, k) {
    if (n < 1 || k < 1) {
        return -1;
    }
    let answer = fact(n) / (fact(n - k) * fact(k));
    return answer;
}

console.log(nChooseK(10, 5));

// console.log(fact(0));