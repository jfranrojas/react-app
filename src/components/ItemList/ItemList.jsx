import React from "react";
import Item from "../Item/Item";
import "./ItemList.css"



function ItemList({data}) {
  return (
    data.map((product)=>{
        return(
            <div className="itemContainer">
            <Item
                key= {product.id}
                img= {product.img}
                nombre= {product.nombre}
                categoria = {product.categoria}
                precio={product.precio}
            />
            </div>
            
        )
    })
  )
}

export default ItemList