import React from 'react'
import { useState, useEffect } from 'react';
import { collection, getDoc, getFirestore, doc, addDoc} from "firebase/firestore"
const AddItemButton = (props) => {
    
    const clickEvent = () => {
        const db = getFirestore();
        const docRef = doc(db, "productos", props.props);
        console.log(props.props)
        const sendOrder = (data) => {
            const ordersCollection = collection(db,"carritos")
            addDoc(ordersCollection, data.data()).then(
                ()=>{window.location.reload()}
            )
        }
        getDoc(docRef).then((snapshot) => {
            console.log(`snapshot: ${snapshot}`)
            sendOrder(snapshot)
            
        })
        
    }
    
    return (
        <div>
            <button onClick={clickEvent} className="btn btn-success">Agregar al carrito</button>
        </div>
    )
}

export default AddItemButton