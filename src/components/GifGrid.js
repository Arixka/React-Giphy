import React from 'react'

export const GifGrid = ({ category }) => {
  // const apikey = 'P4tTcP5cVyoU0AepV7bE7hx8z8s1oyMu'

  const getGif = async () => {
    const url = 'https://api.giphy.com/v1/gifs/search?q=cat&limit=10&api_key=P4tTcP5cVyoU0AepV7bE7hx8z8s1oyMu'

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
  }

  getGif()
  return (
    <div>
      <h3>{category}</h3>
    </div>
  )
}
