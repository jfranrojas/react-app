import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import "./ItemDetailContainer.css"
import { useParams } from "react-router-dom"
import SpinerLoad from '../SpinerLoad/spinerLoad';
import { doc, getDoc, getFirestore } from "firebase/firestore";

function ItemDetailContainer() {
  const [data, setData] = useState([])
  const idUrl = useParams().id;
  useEffect(() => {
    const queryDB = getFirestore();
    const queryDoc = doc(queryDB, 'productos', idUrl);
    getDoc(queryDoc).then(item => setData({ ...item.data(), id: item.id }))
  }, [idUrl]);

  return (
    <>
      {data.length === 0 ?
        <main className="spinnerMain">
          <SpinerLoad />
        </main>
        :
        <main>
          <ItemDetail data={data} />
        </main>
      }
    </>

  )
}

export default ItemDetailContainer