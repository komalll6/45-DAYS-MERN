function Navbar(){
    return(
        <div>
            <ul style={{display: "flex", justifyContent:"flex-end", backgroundColor:"gray", listStyle:"none", gap:"20px",padding:"10px", cursor:"pointer", fontFamily:"sans-serif", fontStyle:"oblique", fontWeight:"bold" }}>
                <li>Home</li>
                <li>Products</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default Navbar