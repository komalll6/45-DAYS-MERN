//js are create dynamic website
//to make the website intractive using dom
//DOM- Document Object Model => have tree like hierarchy
//Document- root of html, and have tags


//method-1
// document.getElementById("heading") //select by id

//method-2
// document.getElementById("heading") //select by class

//method-3
// document.getElementsByTagName("h1") //store all h1 tags

//method-4
// document.querySelector("h1") //support only first vala h1, must tell the id, class or tagname
// document.querySelector("#heading")   //id
// document.querySelector(".heading")  //class

//method-5
// document.querySelectorAll("h1") //sare h1 query selector mei ajayegy


//innertext
function changeText(){
    let heading = document.querySelector("#heading") //store on variable, any name of variable name
    heading.innerText = "Welcome to DOM" //innerText are- (property name) to chnage text
    heading.style.color = "yellow" 
    document.body.bgColor = "gray" //must ensure the small or capital letter
    
}


//THEME TOGGLE=> CHANGE MODE- DARK OR LIGHT
let isDark = false;
function changeTheme(){
    let heading = document.querySelector("#text")

    if(isDark == true){ //check if the value are ture toh code chnage hoga
        document.body.style.backgroundColor = "white"
        heading.style.color = "black"
        isDark = false
    }
    else{
        document.body.style.backgroundColor = "black"
        heading.style.color = "white"
        isDark = true
    }
}


//PASSWORD TOGGLE => IN PASSWORD TO SHOW OR HIDE THE PASSWORD
function toggle(){
    let password = document.querySelector("#input")
    
    if(password.type == 'text'){
        password.type = "password"
    }
    else{
        password.type = "text"
    }
}


function submit(){
    let name = document.querySelector("#username").value
    let heading = document.querySelector("#greeting") 

    heading.innerText = "Welcome to our page " + name //to chnage into msg when user submit their nanme it show the msg with the (innertext)
    heading.style.color = "red"
}


//toggle img of bulb
let isOn = false
function toggle(){
  let bulb = document.querySelector("#bulb") 
  let btn = document.querySelector("#btn") 

  if(isOn){
    bulb.src = "download (1).jpeg"
    btn.innerText = "Turn on"
    isOn = false
  }
  else{
    bulb.src = "download.jpeg"
    btn.innerText = "Turn off"
    isOn = true
  }
}