//value of name which are in parenst components and pass to child component
// APP are parent compeomnt and pass the value ot child compoenent, WITH THE HLEP OF PROPS

//havetwo method as parameter it catch the pro
//Example- login option before accesing the website 



// function Student(props){
//     return(
//       <>
//       <h1>my name is: {props.name}</h1>
//       <h2>my age is {props.age}</h2>
//     )
// }

// export default Student

{/* //another method to call the props are- catch the props with name with help of {} and no need to write the keyword => called destructring   */}
function Student({name, age}){
    return(
      <>
      <h1>my name is: {name}</h1>
      <h2>my age is {age}</h2>
      </>
    )
}

export default Student