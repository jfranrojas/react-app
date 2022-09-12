import React, {useEffect, useState} from 'react'
import ItemList from "../ItemList/ItemList"
import "./ItemListContainer.css"
import {useParams} from "react-router-dom"
import { getDocs, collection, query, where, getFirestore } from 'firebase/firestore';
import database from '../../services/firebase';

function ItemListContainer() {
  const[data, setData] = useState([])
  const idCategory = useParams().idCategory
    useEffect(() => {
    const queryDB = getFirestore();
    const queryCollection = collection(queryDB, 'productos');
    if(idCategory) {
        const queryFilter = query(queryCollection, where('categoria', '==', idCategory));
        getDocs(queryFilter).then(res => setData(res.docs.map(product => ({...product.data(), id: product.id}))))
    } else {
        getDocs(queryCollection).then(res => setData(res.docs.map(product => ({ ...product.data(), id: product.id}))))
    }
}, [idCategory]);

  return (
    <main>
        <>
        <section className='itemsContainer'>
          <ItemList data = {data}/>
        </section>
        </>
    </main>
  )
}
export default ItemListContainer



