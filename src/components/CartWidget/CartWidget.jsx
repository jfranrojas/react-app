import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import "./CartWidget.css"

function CartWidget() {
    return(
        <FontAwesomeIcon className='icono' icon={faCartShopping} />
    )
}

export default CartWidget
