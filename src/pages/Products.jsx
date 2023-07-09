import React from 'react'
import ItemList from '../components/itemList'
export const Products = () => {
    return(
        <div className='row'>
            <ItemList props="productos"/>
        </div>
    )
}
export default Products