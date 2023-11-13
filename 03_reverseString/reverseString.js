const reverseString = function(word) {
    const oldString = word.split('');
    const newString = [];
    const wordLength = oldString.length;

    for (i = 0; i < wordLength ; i++){
        let char = oldString.pop();
        newString.push(char);
    }

    let reverseString = newString.join("");

    return reverseString;

};



//GET word
//SPLIT word into an array
//POP each letter in a new array
//concat each letter in the new array into a new string 
//RETURN the new string

// Do not edit below this line
module.exports = reverseString;
