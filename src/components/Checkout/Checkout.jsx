import React, { useState } from 'react'
import { collection, addDoc } from "firebase/firestore";
import { CartContext } from '../../store/CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import database from "../../services/firebase";

import "./Checkout.css"


function Checkout() {
    const { cart, precioTotal, vaciarCarrito } = useContext(CartContext)
    const [userBuyer, setUserBuyer] = useState({
        name: "",
        phone: "",
        email: "",
    })
    const [orderFirebase, setOrderFirebase] = useState({
        id: '',
        complete: false,
    });
    const purchaseOrder = {
        buyer: { ...userBuyer },
        items: [...cart],
        total: precioTotal(),
        date: new Date(),
    };
    async function handleSubmit(e) {
        e.preventDefault()
        const collectionRef = collection(database, "ordenes");
        const ordenes = await addDoc(collectionRef, purchaseOrder);
        setOrderFirebase({ id: ordenes.id, complete: true });
        vaciarCarrito()
    }
    function inputChangeHandler(e) {
        const input = e.target;
        const value = input.value;
        const inputName = input.name;
        let copyUserData = { ...userBuyer };
        copyUserData[inputName] = value;
        setUserBuyer(copyUserData);
    }
    if (orderFirebase.complete === true) {
        return (
            <main className='mainCheckOut'>
                <div className='graciasContainer'>
                    <FontAwesomeIcon className="checkIcon" icon={faCircleCheck} />
                    <h1 className='tituloGracias'>Compra exitosa!</h1>
                    <h2 className='subtituloGracias'>Gracias por confiar en TiendaJS {userBuyer.name}</h2>
                    <h3 className='detalleGracias'>En instante recibirá el detalle de su pedido en la siguiente dirección: {userBuyer.email}</h3>
                    <h3 className='detalleGracias'>El id de tu compra es: {orderFirebase.id}</h3>
                    <Link to={"/"}> <button className='detailButton'>Seguir Comprando</button></Link>
                </div>
            </main>
        )
    }
    else {
        return (
            <main className='mainCheckout'>
                <div className='checkoutContainer'>
                    <h1 className='titulo'>Finalizar Compra</h1>
                    <form className='formContainer' onSubmit={handleSubmit}>
                        <legend className='label'>Completa los datos y finaliza tu compra!</legend>
                        <label className='label' htmlFor="name">Nombre</label>
                        <input className='formInput' type="text" name='name' value={userBuyer.name} onChange={inputChangeHandler} placeholder='Francisco Rojas' required></input>
                        <label className='label' htmlFor="phone">Teléfono</label>
                        <input className='formInput' type="tel" name='phone' value={userBuyer.phone} onChange={inputChangeHandler} placeholder='Tu número de teléfono' required></input>
                        <label className='label' htmlFor="email">Email</label>
                        <input className='formInput' type="email" name='email' value={userBuyer.email} onChange={inputChangeHandler} placeholder='em.franciscorojas@gmail.com' required></input>
                        <input className='detailButton' type="submit" value='Comprar'></input>
                    </form>
                </div >
            </main>
        )
    }
}

export default Checkout