function permPerm(input, prefix) {
    if (input.length == 0) {
        console.log(prefix);
    }
    else {
        for (let i = 0; i < input.length; ++i) {
            //rem is the full input minus the element at i
            let rem = input.slice(0, i).concat(input.slice(i + 1));
            permPerm(rem, prefix.concat(input[i]));
        }
    }
}

function perm(input) {
    permPerm(input, "");
}

// Runtime: N!(N^2)
let str = "cat";
let array = [1, 2, 3];
perm(array);
