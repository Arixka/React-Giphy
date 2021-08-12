import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {

  const [inputValue, setInputValue] = useState('')

  const handleInputValue = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e) => {
    console.log('hangleSubmit', inputValue)
    e.preventDefault();
    if(inputValue.trim().length>2){
      // console.log(setCategories(cat=>[inputValue,...cat]))
      setInputValue('')
    }

  }
  return (
    <form onSubmit={handleSubmit}>
      <p>{inputValue}</p>
      <input
        type='text'
        placeholder='Add Category'
        value={inputValue}
        onChange={handleInputValue}
      ></input>
    </form>
  )
}

AddCategory.propTypes= {
  setCategories: PropTypes.func.isRequired
}
