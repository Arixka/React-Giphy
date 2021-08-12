
  export const getGifs = async (category) => {

    //encodeUri reemplaza los espacios por %20
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=12&api_key=P4tTcP5cVyoU0AepV7bE7hx8z8s1oyMu`

    const response = await fetch(url)
    const { data } = await response.json()

    const gifs = data.map(img => {
      // console.log('--------',img)
      return {
        id: img.id,
        title: img.title.toUpperCase(),
        url: img.images?.fixed_height.url
      }
    })

    return gifs
  }