//conditional statements - if, else
//IF conditional statement

//CHECK THE ELIGIBLE TO VOTE NOT 
let age = 20 //check only one conditional
if(age > 18){
    console.log("can vote")
}

//ELSE conditional statement
else{
    console.log("cannot vote")
}


let num = -10
if (num > 0 ){
    console.log('positive')
}

else{
    console.log('negative')
}


//nested elseif - where have multiple condtion
let marks = 10
if(marks > 90)
    console.log("grade A")

else if(marks >= 75 && marks < 90){  //AGR YEH CONDITION SATISFIED TOH YEH RESULE AYEGA OR AGRR YEH CONDITON SATIESFIED HAI TOH YEH RESULT AYGA
    console.log("grade A")
}

else if(marks >= 35 && marks < 75){
    console.log("grade B")
}

else {
    console.log("not applicable")
}