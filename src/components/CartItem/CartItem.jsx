import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faTrashCanArrowUp } from '@fortawesome/free-solid-svg-icons'
// import ItemCount from '../ItemCount/ItemCount'

function CartItem({img, nombre, precio, cantidad, removeItemCart, id, stock}) {
  return (
    <div className='itemCart-container'>
      <img src={img} alt={`Imagen de : ${nombre}`}></img>
      <div className='description-container'>
        <h2 className='cartName'>{nombre}</h2>
        <h3 className='cartAmount'>Cantidad: {cantidad}</h3>
        <h3 className='cartSubtotal'>Subtotal: {precio}</h3>
        <h3 className='cartStock'>Stock Disponible: {stock}</h3>
        <FontAwesomeIcon className='cartDelete' onClick={() => removeItemCart(id)} icon={faTrashCanArrowUp}></FontAwesomeIcon>
      </div>
    </div>
  )
}

export default CartItem