import React from "react";
import "./Item.css"
import {Link} from "react-router-dom"
function Item({ nombre, precio, img, id, categoria, stock}) {
    return (
        <>
            <img className="itemImg" src={img} alt="Imagen" />
            <h2 className="itemNombre">{nombre}</h2>
            <h2 className="itemPrecio">${precio}</h2>
            <h2 className="itemCategoria">{categoria}</h2>
            <p className="itemStock">Unidades: {stock}</p>
            <Link className="itemLink" to={`detalle/${id}`}>Ver detalle</Link>
        </>
    )
}

export default Item;