import React from 'react'
import { useState, useEffect } from 'react';
import {collection, getDocs, getFirestore} from "firebase/firestore"
import ItemListContainer from './itemListContainer';

const ItemList = (props) => {
    const [dataProds, setDataProds] = useState([])
    console.log(props.props)
    useEffect(()=>{
        const db = getFirestore();
        const productos = collection(db, props.props)
        getDocs(productos).then((snapshot) => {
            setDataProds(
                snapshot.docs.map((doc) => ({id:doc.id, ...doc.data() }))
            )
        })
    },[])
    return (
        <div className='row'>
            {dataProds.map((product)=>{
                return(
                    <ItemListContainer props={product}/>
                )
            })}
        </div>
    )
}

export default ItemList