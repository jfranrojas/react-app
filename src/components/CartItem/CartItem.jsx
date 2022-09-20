import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
import "./CartItem.css"

function CartItem({ img, nombre, precio, cantidad, removeItemCart, id, stock, sumarItem, restarItem}) {
  return (
    <div className='cartItemContainer'>
      <img className='cartImg' src={img} alt={`Imagen de : ${nombre}`}></img>
      <div className='descContainer'>
        <h2 className='cartNombre'>{nombre}</h2>
        <h3 className='cartCantidad'>Cantidad: {cantidad}</h3>
        <h3 className='cartSubtotal'>Subtotal: ${precio}</h3>
        <h3 className='cartStock'>Stock Disponible: {stock}</h3>
        <div className='buttonsContainer'>
          <button className='products-buttons' onClick={() => restarItem(id)}>-</button>
          <h2>{cantidad}</h2>
          <button className='products-buttons' onClick={() => sumarItem(id)}>+</button>
          <FontAwesomeIcon className='cartBorrarItem' onClick={() => removeItemCart(id)} icon={faTrashCan}></FontAwesomeIcon> 
        </div>
      </div>
    </div>

  )
}

export default CartItem