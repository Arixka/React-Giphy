import React from 'react';
import { shallow } from 'enzyme'
import {GifGridItem} from '../../components/GifGridItem'

describe('pruebas con gifGridItem', () => {

  const title = 'titulo'
  const url = 'http://loquesea'
  let wrapper = shallow(<GifGridItem title={title} url={url}/>)

  test('Debe renderizar correctamente el componente', () => {
    expect(wrapper).toMatchSnapshot()
  })
  test('Debe tener un parrafo con el titulo', () => {
    const p = wrapper.find('p')
    expect(p.text().trim()).toBe(title)
  })
  test('Debe tener una imagen igual al url y alt de los props', () => {
    const img = wrapper.find('img')
    expect(img.prop('alt')).toBe('titulo')
    expect(img.prop('src')).toBe('http://loquesea')
  })

  test('Debe tener la clase animate_fadeIn',()=>{
    const div = wrapper.find('div')
    expect(div.prop('className')).toContain('animate__fadeIn')
  })

})