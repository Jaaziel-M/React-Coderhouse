import React from 'react'
import ItemListContainer from '../components/itemListContainer'
import { useState, useEffect } from 'react';
import {collection, getDoc, getFirestore, doc} from "firebase/firestore";
export const Home = () => {
  const [dataProd, setDataProd] = useState([])
  useEffect(()=>{
      const db = getFirestore();
      const docRef = doc(db, "productos", "638c0ae1987b680ecd870bd2");
      getDoc(docRef).then((snapshot) => {
          setDataProd(
              snapshot.data()
          )
      })
  },[])
  return (
    <div style={{backgroundColor:"grey", marginLeft: "auto", marginRight: "auto"}} className='text-center'>
      <h1>Air Soft Shop</h1>
      <img src="https://images.vexels.com/media/users/3/157934/isolated/preview/4118fe8da22a05fe8aa322992e809331-desert-eagle-gun-icon-by-vexels.png" alt="" />
      <h2>Si, amamos la deagle! Comprate una ya mismo ↓↓↓</h2>
      <ItemListContainer props={dataProd}/>
    </div>
  )
}

export default Home