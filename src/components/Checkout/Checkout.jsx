import React, { useState } from 'react'
import { collection, addDoc } from "firebase/firestore";
import { CartContext } from '../../store/CartContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import database from "../../services/firebase";


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
                <div className='thankYouContainer'>
                    <FontAwesomeIcon className="checkIcon" icon={faCircleCheck} />
                    <h1 className='titleThankYou'>Compra exitosa!</h1>
                    <h2 className='subtitleThankYou'>Gracias por confiar en TiendaJS {userBuyer.name}</h2>
                    <h3 className='detailCheckOut'>En instante recibirá el detalle de su pedido en la siguiente dirección: {userBuyer.email}</h3>
                    <h3 className='detailCheckOut'>El id de seguimiento de tu compra es: {orderFirebase.id}</h3>
                    <Link to={"/"}> <button className='buttonThankYou'>Seguir Comprando</button></Link>
                </div>
            </main>
        )
    }
    else {
        return (
            <main className='mainCheckOut'>
                <div className='checkoutContainer'>
                    <h1 className='title'>Finalizar Compra</h1>
                    <form className='formContainer' onSubmit={handleSubmit}>
                        <legend className='label'>Completa los datos y es tuya!</legend>
                        <label className='label' htmlFor="name">Nombre</label>
                        <input className='formInput' type="text" name='name' value={userBuyer.name} onChange={inputChangeHandler} placeholder='Juan Perez' required></input>
                        <label className='label' htmlFor="phone">Teléfono</label>
                        <input className='formInput' type="number" name='phone' value={userBuyer.phone} onChange={inputChangeHandler} placeholder='123456789' required></input>
                        <label className='label' htmlFor="email">Email</label>
                        <input className='formInput' type="email" name='email' value={userBuyer.email} onChange={inputChangeHandler} placeholder='ejemplo@ejemplo.com' required></input>
                        <input className='buttonForm' type="submit" value='Comprar'></input>
                    </form>
                </div >
            </main>
        )
    }
}

export default Checkout