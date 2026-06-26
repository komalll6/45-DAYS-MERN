import Student from "./components/Student"
import products from "./data/products.js"
import Details from "./components/Details.jsx"

function App() {
  //js code are write before the return 
  let arr = ["A", "W", "Q", "F", "B"]

  // let products = [
  //   {
  //     name: "pen",
  //     price: "rs 10",
  //     desc: "hllpoo just buy this"
  //   }, 
  //   {
  //     name: "pencil",
  //     price: "rs 5",
  //     desc: "hllpoo just buy this"
  //   },
  //   {
  //     name: "eraser",
  //     price: "rs 15",
  //     desc: "hllpoo just buy this"
  //   },
  // ]

  return (
    <>
      <Student name="ABC" age="22"/>

      {arr.map((letter) =>(
        <h1>{letter}</h1>
      ))}

      {products.map((products) =>(
        <div>
          <h3>{products.name}</h3>
          <p>Price: {products.price}</p>
          <p>Desc: {products.desc}</p>
        </div>
      ))}

    <Details></Details>
    
    </>
  )
}

export default App