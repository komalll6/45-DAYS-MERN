import { Navigate, useNavigate } from "react-router-dom" //INBUILD FUNCTION IN REACT

function About(){
    const navigate = useNavigate()
    return(
        <>
        <h1>THIS IS ABOUT PAGE</h1>
        <button onClick={() => Navigate("/")}>GO TO HOME PAGE</button>
        <button onClick={() => Navigate("/contact")}>GO TO CONTACT PAGE</button>
        </>
    )
}

export default About
