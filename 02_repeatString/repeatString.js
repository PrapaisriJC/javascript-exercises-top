const repeatString = function(word, num) {
    let finalString = '';
    if (num < 0){
        finalString = 'ERROR';
        return finalString;
    }
    for(let i = 0; i < num ; i++){
        finalString += word;
    }
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
