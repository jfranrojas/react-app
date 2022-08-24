import React from 'react'
import ItemData from "../../data/data";
import { useContext } from 'react';
import { cartContext} from '../../store/CartContext'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown, faFaceSadTear } from '@fortawesome/free-solid-svg-icons';
import "./Cart.css";


function Cart(id) {
    const {cart, removeItem, removeAll, totalPrice, totalAmount} = useContext(cartContext);
    function RemoveItemCart(){
        removeItem(id)
    }
    if ( cart.lenght === 0){
        return (
            <main>
                <div className='carritoVacioContainer'>
                    <div className='tituloVacio'>
                        <h1>Carrito Vacio</h1>
                        <FontAwesomeIcon className='carritoVacioCara' icon={faFaceSadTear}></FontAwesomeIcon>
                        <Link to={"/"}><button className='cartResumeButtons'>Ir a Comprar </button></Link>
                    </div>

                </div>
            </main>
        )
    }
    
}

export default Cart