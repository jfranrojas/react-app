import React, {useEffect, useState} from 'react'
import ItemList from "../ItemList/ItemList"
import { getDocs, collection, query, where, getFirestore } from 'firebase/firestore';
import database from '../../services/firebase';
import "./ItemListContainer.css"
import {useParams} from "react-router-dom"

function ItemListContainer() {
  const[data, setData] = useState([])
  const idCategory = useParams().idCategory
  function getProducts() {
    return new Promise((resolve => {
      const productsCollections = collection(database, "productos")
      getDocs(productsCollections).then(snapshot => {
        const docsData = snapshot.docs.map(doc => { return { ...doc.data(), id: doc.id } })
        resolve(docsData)
      })
    }))
  }
  function getItemsFromDBbyIdCategory(idCategory) {
    const productsCollection = collection(database, "productos");
    return new Promise((resolve) => {
      const queryProducts = query(productsCollection, where("categoria", "==", idCategory))
      getDocs(queryProducts).then(snapshot => {
        const docsData = snapshot.docs.map(doc => {
          return { ...doc.data(), id: doc.id }
        });
        resolve(docsData);
      });
    });
  };
  useEffect(() => {
    if (idCategory) {
      getItemsFromDBbyIdCategory(idCategory).then((resolve) => {
        setData(resolve)
      })
    } else {
      getProducts().then((resolve) =>{
        setData(resolve)
      });
    }
  }, [idCategory])
//     useEffect(() => {
//     const queryDB = getFirestore();
//     const queryCollection = collection(queryDB, 'productos');
//     if(idCategory) {
//         const queryFilter = query(queryCollection, where('categoria', '==', idCategory));
//         getDocs(queryFilter).then(res => setData(res.docs.map(product => ({...product.data(), id: product.id}))))
//     } else {
//         getDocs(queryCollection).then(res => setData(res.docs.map(product => ({ ...product.data(), id: product.id}))))
//     }
// }, [idCategory]);

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



