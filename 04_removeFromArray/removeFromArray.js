const removeFromArray = function(array, ...thingToRemove) {
    const newArray = [];
    
    iterateArray:
    for(const item of array){
        for(const thing of thingToRemove){
            if(item === thing){
                continue iterateArray;
            }
        }
        newArray.push(item);
    }
    return newArray;
};

//dont forget to cemment
/*** 
 * Iterate through the first array and check if it is true equal to the thingToremove then skip to the next iteration
 * else push the value to the new array
*/

// Do not edit below this line
module.exports = removeFromArray;


