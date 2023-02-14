const removeFromArray = function() {
    const args = [...arguments];
    for (let i = 1; i < args.length; i++) {
        let ans = args[i];
        for (let j = 0; j < args[0].length; j ++) {
            if (args[0][j] === ans) {
                for (let k = j; k < args[0].length - 1; k++) {
                    args[0][k] = args[0][k+1];
                }
                args[0].pop();
                break;
            }
        }
    }
    return args[0]
};

// Do not edit below this line
module.exports = removeFromArray;
