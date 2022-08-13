import React, {useEffect, useState} from 'react'
import ItemList from "../ItemList/ItemList"
import productos from "../../data/data"
import "./ItemListContainer.css"
import {useParams} from "react-router-dom"

function ItemListContainer() {
  const[data, setData] = useState([])
  const idCategory = useParams().idCategory
  function getProducto() {
    return new Promise ((resolve=>{
      setTimeout(() => {
        resolve(productos)
      }, 2000);
    }))
  }
  useEffect(()=>{
    getProducto().then(products =>{
      let itemsFilter = productos.filter((element) => element.categoria === idCategory)
      if (idCategory === undefined){
        setData(products)
      }
      else {
        setData(itemsFilter)
      }
  
    })
  }, [idCategory])
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



