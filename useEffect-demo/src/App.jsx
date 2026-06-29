import { useEffect } from "react"


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
      <button onClick={(onClick)}>on click</button>
    </>
  )
}

export default App
