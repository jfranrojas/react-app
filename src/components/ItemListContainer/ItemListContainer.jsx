import React, {useEffect, useState} from 'react'
import ItemList from "../ItemList/ItemList"
import productos from "../../data/data"
import "./ItemListContainer.css"

function getProducto() {
  return new Promise ((resolve)=>{
    setTimeout(() => {
      resolve(productos)
    }, 2000);
  })
}
function ItemListContainer() {
  const [data, setData] = useState([])
  useEffect(()=>{
    getProducto().then(products =>{
      setData(products)
    })
  }, [])
  return (
    <main>
        <>
        <section className='itemsContainer'>
          <ItemList data = {data}/>
        </section>
        </>
    </main>
  )
}
export default ItemListContainer



