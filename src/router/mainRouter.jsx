import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Products from '../pages/Products'
import Categories from '../pages/Categories'
import NavBar from '../components/NavBar'
import Detail from '../pages/Detail'
import Kart from '../pages/Kart'

export const mainRouter = () => {
    return (
        <BrowserRouter>
            <div style={{backgroundColor: "black"}}>
                <NavBar/>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/Products' element={<Products />} />
                    <Route path='/Products/:id' element={<Detail/>} />
                    <Route path='/Categories/:cat' element={<Categories />} />
                    <Route path='/Kart' element={<Kart />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default mainRouter