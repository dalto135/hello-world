function permPerm(str, prefix) {
    if (str.length == 0) {
        console.log(prefix);
    }
    else {
        for (let i = 0; i < str.length; ++i) {
            //rem is the full str minus the character at i
            let rem = str.substring(0, i) + str.substring(i + 1);
            permPerm(rem, prefix + str[i]);
        }
    }
}

function perm(str) {
    permPerm(str, "");
}

// Runtime: N!(N^2)
let str = "cat";
perm(str);