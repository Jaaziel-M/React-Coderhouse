import React from 'react'
import { useParams } from 'react-router'
import ItemDetail from '../components/itemDetail'

const Detail = () => {
    const {id} = useParams()
    return (
        <div>
            <ItemDetail props={id}/>
        </div>
    )
}

export default Detail