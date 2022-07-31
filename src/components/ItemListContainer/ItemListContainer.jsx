import "./ItemListContainer.css" 
import React from 'react'
import ItemCount from './ItemCount'

function ItemListContainer({greeting}) {
  return (
    <main>
        <h1 className='titulo'>{greeting}</h1>
        <ItemCount producto="Pantalon de jean" stock={10} min={1} />
    </main>
    
  )
}   

export default ItemListContainer