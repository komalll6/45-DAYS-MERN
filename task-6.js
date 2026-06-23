// square of number with functions
// function square(num){
//     if(num*2 ){
//         console.log("square")
//     }

//     else {
//         console.log("not square")
//     }
// }

// square(20)
// function square(num){
//     console.log("")
// }

// square(4)

// function sqr(num){
//     let result = num*num
//     return result;
// }

// let num = 20
// console.log(num)


// Task: Calculate the square of a number using a function

// 1. We define the function machine
function findSquare(num) {
    let result = num * num; 
    return result; // "return" sends the final answer out of the machine
}

// 2. We use (call) the function and save the answer
let originalNumber = 6;
let squaredNumber = findSquare(originalNumber);

// 3. Print the output using a template literal
console.log(`The square of ${originalNumber} is: ${squaredNumber}`);