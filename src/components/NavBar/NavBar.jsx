import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"
import {NavLink} from "react-router-dom";

function NavBar() {
  return (
    <header className='header'>
      <nav className='header-nav'>
        <ul className='nav-ul'>
          <NavLink to={"/"} className='ul-li'><li>Tienda React</li></NavLink>
          <NavLink to={`categoria/Remeras`} className='ul-li'><li>Remeras</li></NavLink>
          <NavLink to={"/categoria/camisas"} className='ul-li'><li>Camisas</li></NavLink>
          <NavLink to={`categoria/Pantalones`} className='ul-li'><li>Pantalones</li></NavLink>
          <NavLink to={"/categoria/invierno"} className='ul-li'><li>Invierno</li></NavLink>
          <CartWidget />
        </ul>
      </nav>
    </header>
  )
}
export default NavBar