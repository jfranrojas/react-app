import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import Swal from "sweetalert2";
import "./Item.css"

function Item({nombre, precio, img}) {
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
        <img className="itemImg" src={img} alt="Imagen" />
        <h2 className="itemNombre">{nombre}</h2>
        <h2 className="ItemPrecio">${precio}</h2>
        <button>Ver más</button>
        <ItemCount stock={5} min={1} addToCart={addToCart} />
        </>
    );
}
export default Item;