import {BrowerRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Fotter from './components/Footer'
import Navbar from './components/Navbar'

function App(){
  return(
    <>
    <BrowerRouter>  
    <Navbar/> //show to all pages, (common)
    <Routes>

      <Route path='/' element = {<Home/>}></Route>
      <Route path='/contact' element = {<Contact/>}></Route>
      <Route path='/about' element = {<About/>}></Route>

    </Routes>
    <Footer/>
    </BrowerRouter>
    </>
  )
}

export default App;