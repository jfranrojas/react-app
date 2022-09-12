import React from "react";
import Item from "../Item/Item";
import "./ItemList.css"

function ItemList({ data }) {
  return (
    data.map((product) => {
      return (
        <div>
          <Item
            key={product.id}
            id={product.id}
            img={product.img}
            nombre={product.nombre}
            categoria={product.categoria}
            precio={product.precio}
            stock={product.stock}
          />
        </div>
      )
    })
  )
}
export default ItemList