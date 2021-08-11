import React, { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({ category }) => {
  // const apikey = 'P4tTcP5cVyoU0AepV7bE7hx8z8s1oyMu'

  const [images, setImages] = useState([])

  useEffect(() => {
    getGif()
  }, [])//dependencies

  const getGif = async () => {


    const url = 'https://api.giphy.com/v1/gifs/search?q=mapache&limit=10&api_key=P4tTcP5cVyoU0AepV7bE7hx8z8s1oyMu'

    const response = await fetch(url)
    const { data } = await response.json()

    const gifs = data.map(img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
      }
    })
    console.log(gifs)
    setImages(gifs)
  }
  //getGif() usar useEffect

  return (
    <>
      <h3>{category}</h3>
      <div className='card-grid'>
        {images.map((img) =>
          <GifGridItem
            key={img.id}
            {...img} />//...img mandamos cada imagen con sus propiedades 
        )}

      </div>
    </>
  )
}
