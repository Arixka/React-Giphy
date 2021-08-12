import React from 'react'
import { shallow } from 'enzyme'
import { GifApp } from '../GifApp'

describe('pruebas con gifApp', () => {
  const wrapper = shallow(<GifApp />)

  test('debe renderizar el componente correctamente', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('Debe de mostrar una lista de categorias', () => {
    const categories = ['cats', 'dogs']
    const wrapper = shallow(<GifApp defaultCategories={categories}/>)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('GifGrid').length).toBe(categories.length)
  })

})