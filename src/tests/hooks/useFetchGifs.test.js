import { useFetchGifs } from '../../hooks/useFetchGifs'
import { renderHook } from '@testing-library/react-hooks';

describe('pruebas en el hook useFetchGifs', () => {

  test('Debe retornar el estado inicial', async () => {

    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('goku'))
    const { data, loading } = result.current

    await waitForNextUpdate()

    expect(data).toEqual([])
    expect(loading).toBe(true)
  })
  test('Debe retornar un arreglo de imgs y loading false', async () => {

    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('goku'))

    await waitForNextUpdate()
    
    const { data, loading } = result.current

    expect(data.length).toBe(12)
    expect(loading).toBe(false)

  })

})