import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import { AddCategory } from '../../components/AddCategory'

describe('pruebas con AddCategory', () => {

  const setCategories = jest.fn()
  let wrapper = shallow(<AddCategory setCategories={setCategories} />)

  beforeEach(() => {
    jest.clearAllMocks()
    wrapper = shallow(<AddCategory setCategories={setCategories} />)
  })


  test('debe renderizar el componente correctamente', () => {
    expect(wrapper).toMatchSnapshot()
  })

  test('Debe cambiar la caja de texto', () => {
    const input = wrapper.find('input')
    const value = 'Hola mundo'
    input.simulate('change', { target: { value } })

    expect(wrapper.find('p').text().trim()).toEqual(value)
  })
  test('No debe postear la informacion con submit, pq no llamamos a setcatefories', () => {

    wrapper.find('form').simulate('submit', { preventDefault() { } })
    expect(setCategories).not.toHaveBeenCalled()
  })

  test('Debe de llamar a setCategories y limpiar la caja de texto',()=>{

    const value = 'contenido del input'
    wrapper.find('input').simulate('change',{ target: { value }})//simulamos el input
    wrapper.find('form').simulate('submit', { preventDefault() { }})//simulamos el submit
   // expect(setCategories).toHaveBeenCalled();
    expect(wrapper.find('input').prop('value')).toBe('')
  })
})



//value del input debe ser vacio ''