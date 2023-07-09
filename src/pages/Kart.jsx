import React from 'react'
import ItemList from '../components/itemList'
import Checkout from '../components/Checkout'
const Kart = () => {
    return (
        <div>
            <h1 style={{color: "Yellow"}}>Carrito:</h1>
            <Checkout/>
            <ItemList props="carritos"/>
            
        </div>
    )
}

export default Kart