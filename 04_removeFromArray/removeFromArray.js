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

// Solution
// const removeFromArray = function (...args) {
//     // the very first item in our list of arguments is the array, we pull it out with args[0]
//     const array = args[0];
//     // create a new empty array
//     const newArray = [];
//     // use forEach to go through the array
//     array.forEach((item) => {
//       // push every element into the new array
//       // UNLESS it is included in the function arguments
//       // so we create a new array with every item, except those that should be removed
//       if (!args.includes(item)) {
//         newArray.push(item);
//       }
//     });
//     // and return that array
//     return newArray;
//   };

// Do not edit below this line
module.exports = removeFromArray;
