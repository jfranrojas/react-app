import "./ItemCount.css"
import React, { useState } from 'react'

function ItemCount({ min, stock, onAdd }) {
    const [cantidad, setCantidad] = useState(1)
    function setPlus() {
        if (cantidad < stock) {
            setCantidad(cantidad + 1)
        }
    }
    function setSub() {
        if(cantidad > min){
            setCantidad(cantidad - 1)
        }
    }
    return (
        <section className="section-products">
            <div className='product-container'>
                <div className='product-button'>
                    <button className='itemButton' onClick={setSub}>-</button>
                    <h2 className='product-amount'>{cantidad}</h2>
                    <button className='itemButton' onClick={setPlus}>+</button>
                </div>
                <button className='button-fin' onClick={() => onAdd(cantidad)}>Agregar al carrito</button>
            </div>
        </section>
    )
}
export default ItemCount