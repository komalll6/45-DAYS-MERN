// //user context
// import { useContext } from "react"

// function home(){
//     const user = useContext(UserContext)
//     return(
//         <>
//         <h1>My name is Komal Kalra</h1>
//         </>
//     )
// }

// export default Home

import { useContext } from "react";
import UserContext from "../context/UserContext";

function Home(){
    const {name, age, marks} = useContext(UserContext);
  return (
    <>
    <h1>Name is {name}</h1>
    <h1>{age}</h1>
    <h1>{marks}</h1>
    </>
  )
}

export default Home;