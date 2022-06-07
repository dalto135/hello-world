function getBit(num, i) {
    shiftOne = 1 << i;
    console.log("shiftOne: " + shiftOne);

    andNum = shiftOne & num;
    console.log("andNum: " + andNum);

    answer = ((num & (1 << i)) != 0);
    if (answer) {
        console.log("answer: " + 1);
    }
    else {
        console.log("answer: " + 0);
    }
    return answer;
}

// answer = getBit(45, 7);

function setBit(num, i) {
    shiftOne = 1 << i;
    console.log("shiftOne: " + shiftOne);

    answer = num ^ shiftOne;
    console.log("answer: " + answer);
    return answer;
}

// answer = setBit(45, 2);

function clearBit(num, i) {
    mask = ~(1 << i);
    return num & mask;
}

function clearBitsMSBthroughI(num, i) {
    mask = (1 << i) - 1;
    return num & mask;
}

function clearBitsIthrough0(num, i) {
    mask = (-1 << (i + 1));
    return num & mask;
}

// answer = clearBit(45, 3);
// answer = clearBitsMSBthroughI(45, 6);
// answer = clearBitsIthrough0(45, 2);

function updateBit(num, i, bitIs1) {
    value = bitIs1 ? 1 : 0;
    mask = ~(1 << i);
    return (num & mask) ^ (value << i);
}

answer = updateBit(45, 3, 0);

console.log(answer);
// 00101101