// function App(){

//   let name = "Koml Kalra"
//   let age = 22
//   let am = "Software Engg"

//    return(
//     <>
//     <h1>HELLOOOS</h1> 
//     <h2>Hi, I'm {name}, I'm {age} years old and, I'm a {am} at this age.<br></br> THANKYOU UNIVERSE.</h2>
//     <p>Lorem ipsum dolor sit amet consectetur 
//       adipisicing elit. Illum quos cum sapiente 
//       odit aliquid nostrum iure provident ducimus 
//       consequuntur libero officiis doloremque, 
//       aliquam enim maiores ipsam fugit ex nobis? 
//       Obcaecati.</p>
//     </>
//    )
// }

// export default App


//not all the codes in app.jsx- make components outside and import in app.jsx

import Student from "./components/Student";
import Person from "./components/Person";

function App(){
  return (
    <>
    <h1>hellllllos</h1>
    <Student/>
    <Person/>
    </>
  )
}

export default App;
