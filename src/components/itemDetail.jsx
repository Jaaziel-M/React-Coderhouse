import React from 'react';
import { useState, useEffect } from 'react';
import {collection, getDoc, getFirestore, doc} from "firebase/firestore";
import ItemDetailContainer from './itemDetailContainer';

const ItemDetail = (props) => {
    const [dataProd, setDataProd] = useState([])
    const [notFoundItem, setNotFoundItem] = useState(false)
    useEffect(()=>{
        const db = getFirestore();
        const docRef = doc(db, "productos", props.props);
        getDoc(docRef).then((snapshot) => {
            Object.assign(snapshot.data(),{"id":props.props})
            setDataProd(
                Object.assign(snapshot.data(),{"id":props.props})
            )
        })
    },[])
    return(
        <div>
            {<ItemDetailContainer props={{dataProd}}/>}
            <div className='text-center'>
                <a href="/Products" className="btn btn-info" >Seguir comprando</a>
            </div>
            
        </div>
    )
}

export default ItemDetail