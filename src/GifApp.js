import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifApp = () => {

  const [categories, setCategories] = useState(['cats'])

  //console.log(categories)

  return <>
    <h2>Giphy App</h2>
    <AddCategory setCategories={setCategories} />
    <hr />
    {/* <button onClick={handleAdd}>Agregar</button> */}
    <ol>
      {categories.map(category =>
        <GifGrid 
        category={category.toUpperCase()} 
        key={category} />
        )}
    </ol>


  </>
}
