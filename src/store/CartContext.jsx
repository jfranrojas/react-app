import { createContext, useState} from "react";

//1. Inicializar el context con React.createContext()
//2. Crear el provider y darle un "value"
//3. Definir los componentes que van a acceder al context
//4. Darle acceso a los componentes al context con el hook useContext()
//5. Los componentes consumer podran acceder y cambiar el value del context

export const CartContext = createContext();

export function CartProvider({children}) {
    const [cart, setCart] = useState([]);
    let copyCart = [...cart];
    //AGREGAR AL CARRITO 
    function addToCart(data, cantidad) {
        //Primero ver si el objeto ya existe para no duplicarlo
        if(isInCart(data.id)){
            const itemIndex = findItem(data.id)
            copyCart[itemIndex].cantidad += cantidad;
            setCart(copyCart)
        }
        //Si no existe pushearlo al carrito
        else {
            copyCart.push({...data, cantidad});
            setCart(copyCart) 
        }
    }
    // FUNCION PARA REMOVER ITEM POR ID
    function removeItem(data){
        const itemRemove = findItem(data.id)
        const indexItem = copyCart.indexOf(itemRemove)
        copyCart.splice(indexItem, 1)
        setCart(copyCart)
        console.log(copyCart)
    }
    //FUNCION VACIAR CARRITO
    function removeAll(){
        copyCart = []
        setCart(copyCart)
        console.log(copyCart)
    }
    function isInCart(id){
        return(copyCart.some(itemCart => itemCart.id === Number(id)))
    }
    //FUNCION PARA BUSCAR CON EL ID
    function findItem(id){
        return(copyCart.findIndex(item => item.id === Number(id)))
    }
    return(
        <CartContext.Provider value={{cart, addToCart, removeItem, removeAll}}>
            {children}
        </CartContext.Provider>         
    );
}