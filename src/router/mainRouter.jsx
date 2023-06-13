import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Products from '../pages/Products'
import Categories from '../pages/Categories'
import NavBar from '../components/NavBar'


export const mainRouter = () => {
    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Products' element={<Products />} />
                <Route path='/Categories' element={<Categories />} />
            </Routes>
        </BrowserRouter>
    )
}

export default mainRouter