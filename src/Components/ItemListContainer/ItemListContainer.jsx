import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'

import ItemList from '../ItemList/ItemList'
const ItemListContainer = () => {
    const [productos, setProductos] = useState([])
    const {seccion}= useParams()
    useEffect(()=> {
        if(seccion){
            fetch('../json/productos.json')
            .then(response => response.json())
            .then(items => {
                const products = items.filter(prods => prods.seccion === seccion)
                const productsList = ItemList({products})
                console.log(productsList)
                setProductos(productsList)
            })
        } else {
            fetch('./json/productos.json')
            .then(response => response.json())
            .then(products => {
                const productsList = ItemList({products})
                console.log(productsList)
                setProductos(productsList)
            })
        }
    }, [seccion])
    return (
        <div className='row cardProductos'>
            {productos}
        </div>
    );
}

export default ItemListContainer;
