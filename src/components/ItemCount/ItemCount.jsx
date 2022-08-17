import "./ItemCount.css"
import React from 'react'

function ItemCount({min, stock, addToCart}) {
    const [cantidad, setCantidad] = React.useState(1)
    function setPlus() {
        cantidad < stock ? setCantidad(cantidad + 1) : alert("No hay mas stock")
    }
    function setSub() {
        cantidad > min ? setCantidad(cantidad - 1) : alert("No podes restar mas productos")
    }
    return (
        <section className="section-products">
            <div className='product-container'>
                <div className='product-button'>
                    <button className='button' onClick={setSub}>-</button>
                    <h2 className='product-amount'>{cantidad}</h2>
                    <button className='button' onClick={setPlus}>+</button>
                </div>
                <button className='button-fin' onClick={()=>addToCart(cantidad)}>Agregar al carrito</button>
            </div>
        </section>
    )
}
export default ItemCount