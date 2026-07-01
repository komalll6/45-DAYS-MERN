// //provide context

// import UserContext from "./context/UserContext"
// import Home from "./components/Home"

// function App() {
// let user = "Koms"
//   return (
//     <>
//       <UserContext.Provider value={user}>
//         <Home></Home>
//       </UserContext.Provider>
//     </>
//   )
// }

// export default App

import Home from "./components/Home";
import UserContext from "./context/UserContext";

function App() {
  // let user = "John";
  let obj = {id:1,name:"abc",city:"xyz"};

  return (
    <>
      {/* <UserContext.Provider value={{
        name: "A", age: 20, marks: 60
      }}> */}
      <UserContext.Provider value={obj}>
        <Home></Home>
      </UserContext.Provider>
    </>
  )
}

export default App;
