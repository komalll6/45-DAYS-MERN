//create function - print elt of arr either pirnt even num or odd and 
//if you print its your choice to print elt or odd elt

let hello = [93,12,1,23,55,64,2]
function printElements(hello){
    for(let i = 0; i<=hello.length;i++){
        if(hello[i]%2===0){
            console.log("print the even array of hello", hello[i])
        }
    }
}

printElements(hello)