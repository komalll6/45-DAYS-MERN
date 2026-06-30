//user context
import { useContext } from "react"

function home(){
    const user = useContext(UserContext)
    return(
        <>
        <h1>My name is Komal Kalra</h1>
        </>
    )
}

export default Home