import { useState } from "react";
import form from "./components/Form";

function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <body style={{
        backgroundColor: isDark ? 'black' : 'white',
        color: isDark ? 'white' : 'black', 
      }}>
        <h1>This is a React code </h1>

        <button onClick={() => setIsDark(!isDark)}>Toggle theme</button>

      
      </body> <br /><br />

      <Form />
    </>
  )
}

export default App;