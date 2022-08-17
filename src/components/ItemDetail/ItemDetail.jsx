import React from 'react'
import Swal from "sweetalert2";
import ItemCount from '../ItemCount/ItemCount';
import "./ItemDetail.css"

function ItemDetail({ data }) {
    function addToCart() {
        Swal.fire({
            position: 'top',
            icon: 'success',
            title: 'Agregado!',
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
                <button className='detailButton'>Agregar al carrito</button>
                <ItemCount stock={data.stock} min={1} addToCart={addToCart} />
            </div>
        </section>
        </>
    )
}

export default ItemDetail