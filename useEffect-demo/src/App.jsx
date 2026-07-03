import { useEffect, useState } from "react"

function App() {
  const [count, setCount] = useState(0)

  // useEffect(() =>{
  //   console.log("good morning universe")
  // }, [count]) 

  useEffect(() =>{
    document.title = `${count}`
  }, [count])  //runs everytime when the variable (count) change

  return (
    <>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>+</button><br></br>   
      <button onClick={()=>setCount(count-1)}>-</button>
      <button onClick={()=>setCount(0)}>ReSet</button>
    </>
  )
}

export default App