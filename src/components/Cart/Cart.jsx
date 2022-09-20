import CartItem from '../CartItem/CartItem';
import { useContext } from 'react';
import { CartContext} from '../../store/CartContext'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown, faFaceSadTear } from '@fortawesome/free-solid-svg-icons';
import "./Cart.css";


function Cart() {
    const {cart, removeItem, removeAll, precioTotal, totalCantidad, sumarItemCarrito, restarItemCarrito} = useContext(CartContext);
    function removeItemCart(id){
        removeItem(id)
    }
    function sumarItem(id){
        sumarItemCarrito(id)
    }
    function restarItem(id){
        restarItemCarrito(id)
    }
    if (cart.length === 0){
        return (
            <main>
                <div className='carritoVacioContainer'>
                    <div className='tituloVacio'>
                        <h1>Carrito Vacío</h1>
                        <FontAwesomeIcon className='carritoVacioCara' icon={faFaceSadTear} />
                    </div>
                        <span><FontAwesomeIcon className='carritoVacio' icon={faCartArrowDown}/></span>
                        <Link to={"/"}><button className='detailButton'>Ir a Comprar </button></Link>
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
                            key={item.id + item.nombre}
                            id= {index}
                            img={item.img}
                            name={item.nombre}
                            precio={item.precio * item.cantidad}
                            cantidad={item.cantidad}
                            stock={item.stock}
                            sumarItem={sumarItem}
                            restarItem={restarItem}
                            removeItemCart={removeItemCart}
                            />
                        )
                    })}
                    <button className='detailButtonVacio' onClick={removeAll}>Vaciar Carrito</button>
                </section>
                <section className='sectionResume'>
                    <h1 className='tituloResume'>Resumen del pedido</h1>
                    <h3 className='resumeDetalle'>Cantidad de productos: {totalCantidad()}</h3>
                    <h3 className='resumeDetalle'>Subtotal: ${precioTotal()}</h3>
                    <h3 className='resumeDetalle'>Envío: Gratis</h3>
                    <h2 className='resumePago'>Total a pagar: ${precioTotal()}</h2>
                    <div className='containerBotones'>
                        <Link to={"/"}><button className='detailButton'>Seguir comprando</button></Link>
                        <Link to={"/Checkout"}><button className="detailButton">Finalizar Compra </button></Link>
                    </div>
                    <img className="pagoResume" src="https://siesingenieros.com/wp-content/uploads/2020/10/medios-nuevo.jpg" alt="Metodos de pago"></img>
                </section>
            </main>
        )
    }
    
}

export default Cart