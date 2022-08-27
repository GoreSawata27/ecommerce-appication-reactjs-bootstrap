import './App.css';
import React from 'react';
import {Routes , Route} from 'react-router-dom'
import NavBar from './Components/Pages/NavBar'
import Products from './Components/Products/Products'
import Footer from './Components/Pages/Footer'
import AddCart from './Components/AddCart';
import Login from './Components/Pages/Login';
import Home from './Components/Home/Home';
import SingleProduct from './Components/Products/SingleProduct';
function App() {
  return (
    <>
    <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='Products' element = {<Products />} />
        <Route path='About' element = {<Footer />} />
        <Route path='AddCart' element={<AddCart/>}></Route>
        <Route path='Login' element={<Login/>}></Route>
        {/* <Route path='Register' element={ <Register/> }></Route> */}
        <Route path='SingleProduct/:id' element={<SingleProduct/>}></Route>
      </Routes>
    </>
  )
}

export default App;
