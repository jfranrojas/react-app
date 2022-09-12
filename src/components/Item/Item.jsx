import React from "react";
import "./Item.css"
import {Link} from "react-router-dom"
function Item({ nombre, precio, img, id, categoria, stock}) {
    return (
        <>
        <div className="itemContainer">
            <img className="itemImg" src={img} alt="Imagen de remera" />
            <h2 className="itemNombre">{nombre}</h2>
            <h2 className="itemPrecio">${precio}</h2>
            <h2 className="itemCategoria">{categoria}</h2>
            <p className="itemStock">Unidades: {stock}</p>
            <Link className="itemLink" to={`/detalle/${id}`}>Ver detalle</Link>
        </div>
        </>
    )
}

export default Item;