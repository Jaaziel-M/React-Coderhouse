import React from 'react'
import { useState, useEffect } from 'react';
import AddItemButton from './AddItemButton';
export const ItemDetailContainer = (props) => {
    if(props.props.dataProd){
        return(
            <div className="card text-center">
                {console.log(props.props.dataProd)}
                <div className="card-header">
                    {props.props.dataProd.descripcion}
                </div>
                <div className="card-body">
                    <h1 className="card-title">{props.props.dataProd.title} - U$D {props.props.dataProd.price}</h1>
                    <img src={props.props.dataProd.url} />
                    <AddItemButton props={props.props.dataProd.id}/>
                </div>
                <div className="card-footer text-body-secondary">
                    Stock disponible: {props.props.dataProd.stock}
                </div>
            </div>
        )
    }
    else{
        return(
            <div>
                <h1>ERROR! El producto que intentas buscar no existe</h1>
                <h1>Por favor intentá nuevamente con un id valido.</h1>
            </div>
        )
    }
        
}

export default ItemDetailContainer