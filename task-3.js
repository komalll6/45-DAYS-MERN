//TASK3- take eg of amount and in particular amnt. gives this discount.
// let amnt = `20,000`
// if(amnt > `19,239`){
//     console.log("Giving you itna discount")
// }

// else if(amnt >= `12,483` && amnt < `32,494`){
//     console.log("Biggest amnt")
// }

// TASK3: Fixed code that shows the amount in the console output

let amnt = 20000; 

if (amnt >= 32494) {
    console.log(`Amount is ${amnt}: Biggest amnt!`);
} 
else if (amnt > 19239) {
    console.log(`Amount is ${amnt}: Giving you itna discount`);
} 
else if (amnt >= 12483) {
    console.log(`Amount is ${amnt}: Giving you a smaller discount`);
} 
else {
    console.log(`Amount is ${amnt}: No discount available`);
}