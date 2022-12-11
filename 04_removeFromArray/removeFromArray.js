const removeFromArray = function() {
// const removeFromArray = function(ary, element) {
//     // take 1 element to be removed from the array
//     let removeIndex;
//     for(let i = 0; i < ary.length; i++) {
//         if(ary[i] == element) {
//             removeIndex = i;
//         }
//     }
//     if(removeIndex != null)
//         ary.splice(removeIndex, 1);
//     return ary;


    // take multiple parameters using "arguments"
    let targets = Array.from(arguments);
    // separate the array and target elements
    let ary = targets.shift();

    for(let i = 0; i < targets.length; i++) {
        // remove the target element and update the array
        ary = ary.filter(element => element !== targets[i])
    }

    return ary;
};

// Do not edit below this line
module.exports = removeFromArray;
