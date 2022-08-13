import React, {useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import productos from "../../data/data"
import "./ItemDetailContainer.css"
import {useParams} from "react-router-dom"
function ItemDetailContainer() {
  const idURL = useParams().id;
  function getProducto() {
    let itemEncontrado = productos.find((productos) => productos.id == idURL)
      return new Promise ((resolve)=>{
        setTimeout(() => {
          resolve(itemEncontrado)
        }, 2000);
      })
    }
    
    const [data, setData] = useState([])
    useEffect(()=>{
        getProducto().then(products =>{
        setData(products)
    })
  },)

  return (
    <main>
        <>
          <ItemDetail data = {data}/>
        </>
    </main>
  )
}

export default ItemDetailContainer