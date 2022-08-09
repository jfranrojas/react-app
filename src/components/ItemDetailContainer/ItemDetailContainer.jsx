import React, {useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import productos from "../../data/data"
import "./ItemDetailContainer.css"
function getProducto() {
    return new Promise ((resolve)=>{
      setTimeout(() => {
        resolve(productos)
      }, 2000);
    })
  }
function ItemDetailContainer() {
    const [data, setData] = useState([])
    useEffect(()=>{
        getProducto().then(products =>{
        setData(products[0])
    })
  }, [])
  return (
    <main>
        <>
          <ItemDetail data = {data}/>
        </>
    </main>
  )
}

export default ItemDetailContainer