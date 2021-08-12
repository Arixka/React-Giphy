import React from 'react'
import PropTypes from 'prop-types'
import {useFetchGifs} from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({ category }) => {

  const {data:images, loading} = useFetchGifs(category)

  return (
    <>
      {loading && <p className="animate__animated animate__flash animate__delay-2s">Loading...</p>}

      <h3 className="animate__animated animate__fadeIn animate__delay-2s">
        {category}
      </h3>
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

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}