import { createContext, useState } from "react";
import Swal from "sweetalert2";

//1. Inicializar el context con React.createContext()
//2. Crear el provider y darle un "value"
//3. Definir los componentes que van a acceder al context
//4. Darle acceso a los componentes al context con el hook useContext()
//5. Los componentes consumer podran acceder y cambiar el value del context

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    let copyCart = [...cart];
    //AGREGAR AL CARRITO 
    function addToCart(data, cantidad) {
        //Primero ver si el objeto ya existe para no duplicarlo
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
            //Si no existe pushearlo al carrito
            else {
                data.stock -= cantidad;
                copyCart.push({...data, cantidad});
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
    // FUNCION PARA REMOVER ITEM POR ID
    function removeItem(id) {
        const itemRemove = findItem(id)
        const indexItem = copyCart.indexOf(itemRemove)
        copyCart.splice(indexItem, 1)
        setCart(copyCart)
    }
    //FUNCION VACIAR CARRITO
    function removeAll() {
        copyCart = []
        setCart(copyCart)
    }
    // QUITAR EL TOTAL DE PRODUCTOS AGREGADOS AL CARRITO AUNQUE ESTEN REPETIDOS
    function totalCantidad(){
        let cantidadCart = 0;
        copyCart.map(index => cantidadCart += index.cantidad)
        return cantidadCart;
    }
    //CALCULAR PRECIO TOTAL
    function precioTotal(){
        let total = 0;
        copyCart.map((index) => total += index.precio * index.cantidad)
        return total;
    }
    function totalStock(data){
        let indexStock = findItem(data.id)
        if (indexStock){
            return indexStock.stock;
        }
        else {
            return data.stock;
        }
    }

    // FUNCIONES AUXILIARES 

    // FUNCION PARA REVISAR SI EXISTE EL ITEM
    function isInCart(id) {
        return (copyCart.some(itemCart => itemCart.id === id))
    }
    //FUNCION PARA BUSCAR CON EL ID
    function findItem(id) {
        return (copyCart.findIndex(item => item.id === id))
    }
    return (
        <CartContext.Provider value={{ cart, addToCart, removeItem, removeAll, totalCantidad, precioTotal, totalStock }}>
            {children}
        </CartContext.Provider>
    );
}