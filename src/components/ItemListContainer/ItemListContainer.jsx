import React from 'react'
import ItemCount from "../ItemCount/ItemCount"
import Swal from 'sweetalert2'

function ItemListContainer({greeting}) {
  function addToCart(cantidad, producto) {
    Swal.fire({
        position: 'top',
        icon: 'success',
        title: `Has agregado ${cantidad} del producto ${producto}`,
        showConfirmButton: false,
        timer: 2000
    })
}
  return (
    <main>
        <h1 className='titulo'>{greeting}</h1>
        <ItemCount producto="Pantalon de jean" stock={10} min={1} addToCart={addToCart} />
    </main>
  )
}   

export default ItemListContainer