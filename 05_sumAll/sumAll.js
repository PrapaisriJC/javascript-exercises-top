const sumAll = function(num1, num2) {
    let sum = 0;

    if(num1 < 0 || num2 < 0 || typeof num1 !== "number" || typeof num2 !== "number"){
        return 'ERROR';
    }

    let startNum = (num1 < num2) ? num1 : num2;
    let endNum = (num1 > num2) ? num1 : num2;

    for(let i = startNum; i <= endNum; i++){
        sum+=i;
    }
    return sum;
};



// Do not edit below this line
module.exports = sumAll;
