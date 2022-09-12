import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

function CartItem({ img, nombre, precio, cantidad, removeItemCart, id, stock, setPlus, setSub }) {
  return (
    <div className='itemCart-container'>
      <img src={img} alt={`Imagen de : ${nombre}`}></img>
      <div className='description-container'>
        <h2 className='cartName'>{nombre}</h2>
        <h3 className='cartAmount'>Cantidad: {cantidad}</h3>
        <h3 className='cartSubtotal'>Subtotal: {precio}</h3>
        <h3 className='cartStock'>Stock Disponible: {stock}</h3>
        <div className="buttonsContaier">
          <button className='products-buttons' onClick={() => setSub(id)}>-</button>
          <h2>{cantidad}</h2>
          <button className='products-buttons' onClick={() => setPlus(id)}>+</button>
        </div>
        <FontAwesomeIcon className='cartDeleteItem' onClick={() => removeItemCart(id)} icon={faTrashCan}></FontAwesomeIcon>
      </div>
    </div>

  )
}

export default CartItem