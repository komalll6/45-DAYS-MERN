//arthematic op.
let a = 10
let b = 20
console.log("addition",  a+b)
console.log(a*b)
console.log(a/b)
console.log(a*b)


//Modular op.
console.log("modular", a/b)


//assignment op. - to assign the value
a += 10  //fisrt method     HAVE TWO METHOD TO WRITE
a = a+10 //2nd method 
console.log(a)


//comparasion op. - to compare some value 
let c = 10
let d = '10'
console.log(c==d) //conpare only value => true
console.log(c===d)  //but also comapre the value and also compare the datatype => false , prefer to use ===
console.log(a>b)
console.log(a>=b)
console.log(a<=b)
console.log(c != b) //same like ==
console.log(c !== b) 
//ALL THESE OP ARE COMPARING THE VALUE


//logical op. - used to check lgoic- like AND, OR, NOT
let age = 20
console.log(age > 5 && age > 10) //if condition are true then it return => true
console.log(age > 5 || age > 10) //

//increment and decrement
a++
console.log(a)

a--
console.log(a)


//ternary op. - 
console.log(age < 10 ? 'eligble to vote' : 'not eligble')