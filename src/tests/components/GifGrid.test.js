import React from 'react'
import { shallow } from 'enzyme'
import { GifGrid } from '../../components/GifGrid'
import { useFetchGifs } from '../../hooks/useFetchGifs'

jest.mock('../../hooks/useFetchGifs') //simular el uso de useFetchGifs
describe('pruebas con gifGrid', () => {

  const category = 'mapaches'
  const gifs = [{ id: 'abc', url: 'http://loquesea', title: 'cualquiercosa' }, { id: 'aeq', url: 'http://loqueseaasa', title: 'cualquiercosaasda' }]

  test('Debe renderizar correctamente el componente', () => {

    useFetchGifs.mockReturnValue({
      data: [],
      loading: true
    })
    const wrapper = shallow(<GifGrid category={category} />)
    expect(wrapper).toMatchSnapshot()
  })

  test('Debe de mostrar items cuando cargamos imagenes useFetchGifs', () => {
    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false
    })
    const wrapper = shallow(<GifGrid category={category} />)
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.find('p').exists()).toBe(false)
    expect(wrapper.find('GifGridItem').length).toBe(gifs.length)
  })

})