const sumAll = function(num1, num2) {
    if ((Number.isInteger(num1)  && Number.isInteger(num2)) && num1 >= 0) {
        if (num2 < num1) {
            let temp = num1;
            num1 = num2;
            num2 = temp;
        }
        let ans = 0;
        for (num1; num1 <= num2; num1 ++) {
            ans += num1;
        }
        return ans;
    }
    return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
