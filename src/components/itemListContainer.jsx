import React from 'react';
import { useState, useEffect } from 'react';

export const ItemListContainer = () => {
    const [dataProds, setDataProds] = useState([])
    useEffect(()=>{
        fetch('https://dummyjson.com/products/1')
        .then(res => res.json()).then(json => {setDataProds(json.products); console.log(json.products)})
    },[])
    // console.log(json.products) setDataProds(json.products)
    return (
        <div>
            {dataProds.map((product, index)=>{
                {console.log(product)}
                return(
                <div>
                    {product.title}
                    <img src={product.images[0]}></img>
                </div>
                )
        })}
        </div>
    )

}

export default ItemListContainer