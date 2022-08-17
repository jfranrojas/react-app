import React, {useState} from 'react'
import Swal from "sweetalert2";
import ItemCount from '../ItemCount/ItemCount';
import "./ItemDetail.css"
import {Link} from "react-router-dom"

function ItemDetail({ data }) {
const [cantProd, setcantProd] = useState(0)
    function addToCart(cantidad) {
        setcantProd(cantidad)
        Swal.fire({
            position: 'top',
            icon: 'success',
            title: `Has agregado: ${cantidad}, de ${data.nombre}`,
            showConfirmButton: false,
            timer: 2000
        })
    }
    return (
        <>
        <section className='detailContainer'>
            <div>
                <img className="detailImg" src={data.img} alt="Imagen" />
            </div>
            <div className='detailData'>
                <h2 className="detailNombre">{data.nombre}</h2>
                <h2 className="detailPrecio">${data.precio}</h2>
                <h3 className='detailDesc'>{data.descripcion}</h3>
                {
                cantProd === 0 ? 
                <ItemCount  stock={data.stock} min={1} addToCart={addToCart} />: 
                <Link to={"/cart"}>Ver Carrito</Link>
                }
            </div>
        </section>
        </>
    )
}

export default ItemDetail