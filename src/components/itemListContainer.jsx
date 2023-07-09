import React from 'react';
import AddItemButton from './AddItemButton';

export const ItemListContainer = (props) => {
    return (
        <div class="col-sm-3">
            <div className="card" style={{width: "16rem", margin: "25px"}}>
                    <img src={props.props.url} className="card-img-top" alt="..."></img>
                    <div className="card-body">
                        <h5 className="card-title">{props.props.title}</h5>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">US$ {props.props.price}</li>
                        <li className="list-group-item">{props.props.descripcion}</li>
                    </ul>
                    <div className="card-body text-center">
                        <AddItemButton props={props.props.id}/>
                        <a style={{margin: "10px"}} href={"/Products/"+props.props.id} className="card-link btn btn-warning">Mas detalles</a>
                    </div>
            </div>
        </div>
    )

}

export default ItemListContainer