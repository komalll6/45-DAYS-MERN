//kindof like usestate
//let suppose we have form the inpur of forms are store at it 
// have two => control and uncontrol => under react
//re-render

import { useRef } from "react";
import React from "react";
import Form from "./components/Form";

function App() {
    const inputRef = useRef(null);

    function focus() {
        inputRef.current.focus();
    }

    return (
        <>
            <input ref={inputRef} placeholder="Enter text..." /><br></br>
            <button onClick={focus}>Submit</button><br></br>
        </>
    )
}

export default App
