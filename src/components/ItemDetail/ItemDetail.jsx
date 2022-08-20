import React, {useState} from 'react'
import Swal from "sweetalert2";
import ItemCount from '../ItemCount/ItemCount';
import "./ItemDetail.css"
import {Link} from "react-router-dom"
import {useContext} from "react";
import {CartContext} from "../../store/CartContext";

function ItemDetail({ data }) {
    const {addToCart} = useContext(CartContext);
    const [cantProd, setcantProd] = useState(0)
        function onAdd(cantidad) {
            addToCart(data, cantidad);
            // Si el contador da 1 o mas, cambia agregar al carrito por ver más
            setcantProd(cantidad)
            Swal.fire({
                position: 'top',
                icon: 'success',
                title: `Has agregado: ${cantidad}, de ${data.nombre}`,
                showConfirmButton: false,
                timer: 1500
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
                    <ItemCount  stock={data.stock} min={1} onAdd={onAdd} />: 
                    <Link to={"/cart"}>Ver Carrito</Link>
                    }
                </div>
            </section>
            </>
    )
}

export default ItemDetail