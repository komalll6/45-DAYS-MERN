//provide context

import UserContext from "./context/UserContext"
import Home from "./components/Home"

function App() {
let user = "Koms"
  return (
    <>
      <UserContext.Provider value={user}>
        <Home></Home>
      </UserContext.Provider>
    </>
  )
}

export default App
