import React from 'react'
import ItemCount from '../ItemCount/ItemCount';
import "./ItemDetail.css"
import { Link } from "react-router-dom"
import { useContext } from "react";
import { CartContext } from "../../store/CartContext";

function ItemDetail({ data }) {
    const { cart, addToCart, totalStock } = useContext(CartContext);
    function onAdd(cantidad) {
        addToCart(data, cantidad);
    }
    return (
        <>
            <section className='sectionDetail'>
                <div className='detailContainer'>
                    <div>
                        <img className="detailImg" src={data.img} alt="Imagen de producto" />
                    </div>
                    <div className='detailData'>
                        <h2 className="detailNombre">{data.nombre}</h2>
                        <h2 className="detailPrecio">${data.precio}</h2>
                        <h3 className='detailDesc'>{data.descripcion}</h3>
                        {cart.length === 0 ?
                            <ItemCount stock={totalStock(data)} min={1} onAdd={onAdd}/> :
                            <>
                            <ItemCount stock={totalStock(data)} min={1} onAdd={onAdd}/>
                            <Link  className="" to={"/cart"}>Ver Carrito</Link>
                            </>
                            }
                        <p className='detailStock'>Stock disponible: {totalStock(data)}</p>
                        <Link className='detailButton' to={`/category/${data.categoria}`}>Volver a Categoría: {data.categoria}</Link>
                        <Link className='detailButton' to={"/"}>Volver al inicio</Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ItemDetail