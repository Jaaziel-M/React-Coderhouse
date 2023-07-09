import React from 'react'
import {collection, getDocs, getFirestore, doc, deleteDoc, addDoc} from "firebase/firestore"

const Checkout = () => {

    const db = getFirestore();
    const productos = collection(db, "carritos")
    const sendOrder = (data) => {
        const ordersCollection = collection(db,"orders")
        addDoc(ordersCollection, data).then(
            console.log("Order Sent")
        )
    }
    const deleteKart = (arry) => {
        console.log(arry)
        arry.map((product)=>{
            deleteDoc(doc(db, "carritos", product.id)).then(()=>{window.location.reload()}) 
        })
    }
    const submitEvent = (e) => {
        e.preventDefault()
        
        getDocs(productos).then((snapshot) => {
            const orderData = {
                "nya": e.target[0].value,
                "tel": e.target[1].value, 
                "mail": e.target[2].value,
                "prods": snapshot.docs.map((doc) => ({id:doc.id, ...doc.data() }))
            }
            sendOrder(orderData)
            
            deleteKart(orderData.prods)
        })

    }
    
    return (
        <div>
            <form onSubmit={submitEvent} action='/Kart'>
                <input name="nya" style={{margin: "10px"}} type="text" placeholder='Nombre y Apellido'/>
                <input name="tel" style={{margin: "10px"}} type="number" placeholder='Telefono'/>
                <input name="email" style={{margin: "10px"}} type="email" placeholder='email'/>
                <button className="btn btn-primary" type='submit'>Finalizar compra</button>
            </form>
        </div>
    )
}

export default Checkout