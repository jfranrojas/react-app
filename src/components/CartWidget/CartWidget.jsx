import "./CartWidget.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../store/CartContext';

function CartWidget() {
    const {cart, totalCantidad} = useContext(CartContext)
    return(
        <Link to={"/Cart"}> <FontAwesomeIcon className="cartWidget" icon={faCartShopping} />
            {cart.lenght === 0 ?
            <span></span> :
            <span className="totalCantidad">{totalCantidad()}</span>}
        </Link>
    )
}

export default CartWidget
