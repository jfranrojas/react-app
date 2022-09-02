import React from 'react'
import CartItem from '../CartItem/CartItem';
import { useContext } from 'react';
import { CartContext} from '../../store/CartContext'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown, faFaceSadTear } from '@fortawesome/free-solid-svg-icons';
import "./Cart.css";


function Cart() {
    const {cart, removeItem, removeAll, precioTotal, totalCantidad} = useContext(CartContext);
    function RemoveItemCart(id){
        removeItem(id)
    }
    if ( cart.lenght === 0){
        return (
            <main>
                <div className='carritoVacioContainer'>
                    <div className='tituloVacio'>
                        <h1>Carrito Vacio</h1>
                        <FontAwesomeIcon className='carritoVacioCara' icon={faFaceSadTear} />
                    </div>
                        <span><FontAwesomeIcon className='carritoVacio' icon={faCartArrowDown}/></span>
                        <Link to={"/"}><button className='cartResumeButtons'>Ir a Comprar </button></Link>
                </div>
            </main>
        )
    }
    else {
        return (
            <main className='mainCart'>
                <section className='sectionCartItem'>
                    {cart.map((item, index) => {
                        return (
                            <CartItem
                            key={item.id + item.name}
                            id= {index}
                            img={item.img}
                            precio={item.precio * item.cantidad}
                            cantidad={item.cantidad}
                            // stock={item.stock - item.cantidad }
                            RemoveItemCart={RemoveItemCart}
                            />
                        )
                    })}
                    <button className='cartBorrarTodo' onClick={removeAll}>Vaciar Carrito</button>
                </section>
                <section className='cartResume'>
                    <h1 className='tituloResume'>Resumen del pedido</h1>
                    <h3>Cantidad de productos: {totalCantidad()}</h3>
                    <h3>Subtotal: ${precioTotal()}</h3>
                    <h3>Envío: Gratis</h3>
                    <h2>Total a pagar: ${precioTotal}</h2>
                    <div className='containerBotones'>
                        <Link to={"/"}><button className='cartResumeButton'>Seguir comprando</button></Link>
                        <Link to={"/checkout"}><button className='cartResumeButton'>Finalizar compra</button></Link>
                    </div>
                </section>
            </main>
        )
    }
    
}

export default Cart