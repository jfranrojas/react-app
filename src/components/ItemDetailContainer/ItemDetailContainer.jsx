import React, {useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { doc, getDoc, getFirestore } from "firebase/firestore";
import "./ItemDetailContainer.css"
import {useParams} from "react-router-dom"

function ItemDetailContainer() {
  const idUrl = useParams().id;
  const [data, setData] = useState([])
  useEffect(() => {
    const queryDB = getFirestore();
    const queryDoc = doc(queryDB, 'productos', idUrl);
    getDoc(queryDoc).then(item => setData({...item.data(), id: item.id}))
}, [idUrl]);

  return (
    <main>
        <>
          <ItemDetail data = {data}/>
        </>
    </main>
  )
}

export default ItemDetailContainer