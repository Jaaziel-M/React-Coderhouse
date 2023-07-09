import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import {collection, getDocs, getFirestore} from "firebase/firestore";
import ItemListContainer from '../components/itemListContainer';
export const Categories = () => {
    const {cat} = useParams()
    const [dataProds, setDataProds] = useState([])
    
    useEffect(()=>{
        const db = getFirestore();
        const productos = collection(db, "productos")
        getDocs(productos).then((snapshot) => {
            setDataProds(
                snapshot.docs.map((doc) => ({id:doc.id, ...doc.data() }))
            )
        })
    },[])
    return (
        <div className='row'>
            {console.log(dataProds)}
            {dataProds.map((product)=>{
                if(product.descripcion == cat){
                    return(
                        <ItemListContainer props={product}/>
                    )
                }
                
            })}
        </div>
    )
}
export default Categories