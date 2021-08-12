import React from 'react'
import PropTypes from 'prop-types'

export const GifGridItem = ({id, title,url}) => {
 // console.log(id, title,url)
  return (
    <div className='card animate__animated animate__fadeIn animate__delay-2s'>
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  )
}

GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}