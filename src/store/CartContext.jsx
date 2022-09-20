import { createContext, useState } from "react";
import Swal from "sweetalert2";
import { useEffect } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
    const storageCart = JSON.parse(localStorage.getItem("setStorage")) || []
    const [cart, setCart] = useState(storageCart);
    let copyCart = [...cart];
    useEffect(() => {
        localStorage.setItem("setStorage", JSON.stringify(cart))
    }, [cart])
    //AGREGAR AL CARRITO 
    function addToCart(data, cantidad) {
        if (totalStock(data) > 0){
            let indexCart = findItem(data.id)
            if (isInCart(data.id)) {
                indexCart.cantidad += cantidad;
                indexCart.stock -= cantidad;
                data.stock -= cantidad;
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: `Has agregado ${cantidad}, de ${data.nombre} al carrito`,
                    showConfirmButton: false,
                    timer: 1500
                })
                setCart(copyCart);
            }
            else {
                data.stock -= cantidad;
                copyCart.push({ ...data, cantidad});
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: `Has agregado ${cantidad}, de ${data.nombre} al carrito`,
                    showConfirmButton: false,
                    timer: 1500
                })
                setCart(copyCart);
                }
            }
        else{
            Swal.fire({
                position: 'top',
                icon: 'error',
                title: `No se puede agregar más de ${data.stock}, de ${data.nombre} ya que no hay más en stock`,
                showConfirmButton: false,
                timer: 1500,
                timerProgressBar: true,
            })
        }
    }
    function removeItem(id) {
        const itemRemove = findItem(id);
        const indexItem = copyCart.indexOf(itemRemove)
        copyCart.splice(indexItem, 1)
        setCart(copyCart)
    }
    function removeAll() {
        copyCart = []
        setCart(copyCart)
    }
    function totalCantidad(){
        let cantidadCart = 0;
        copyCart.map(index => cantidadCart += index.cantidad)
        return cantidadCart;
    }
    function precioTotal(){
        let total = 0;
        copyCart.map((index) => total += index.precio * index.cantidad)
        return total;
    }
function totalStock(data){
        let indexStock =  findItem(data.id)
        if (indexStock){
            return indexStock.stock; 
        }
        else {
            return data.stock;

        }
    }
    function isInCart(id) {
        return (copyCart.some(itemCart => itemCart.id === id))
    }
    function findItem(id) {
        return (copyCart.find(item => item.id === id))
    }
    function sumarItemCarrito(id){
        if(copyCart[id].stock !== 0){
            copyCart[id].cantidad += 1;
            copyCart[id].stock -= 1;
            setCart(copyCart)
        }
    }
    function restarItemCarrito(id){
        if(copyCart[id].cantidad !== 0){
            copyCart[id].cantidad -= 1;
            copyCart[id].stock += 1;
            setCart(copyCart)
        }
    }
    function vaciarCarrito(){
        copyCart = []
        setCart(copyCart)
    }
    return (
        <CartContext.Provider value={{ cart, addToCart, removeItem, removeAll, totalCantidad, precioTotal, totalStock, sumarItemCarrito, restarItemCarrito, vaciarCarrito }}>
            {children}
        </CartContext.Provider>
    );
}