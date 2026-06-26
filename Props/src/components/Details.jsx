function Details(){

    let isLoggedIn = true;  

    //if-else conditional rendering
    // if(isLoggedIn){
    //     return <h1>Welcome back</h1>
    // }
    // return <h1>Register to access website</h1>

    //2nd method- ternary operator
    // let result = isLoggedIn ? 'Welcome back' : 'Register to access website' ;
    
    // return (
    //     <>
    //      <h1>{result}</h1>
    //     </>
    // )

    //3rd-method Logical AND 
    return(
        <>
        {isLoggedIn && <h1>Welcome back</h1>}
        </>
    )
   
}

export default Details;