
import {getGifs} from '../../helpers/getGifs'

describe('pruebas con getGifs fech',()=>{

  test('getGifs devolvera 12 elementos', async ()=>{

    const response= await getGifs('Mariposas')
    expect(response.length).toBe(12)
  })

  test('getGifs cuando no mandamos category', async ()=>{
    const response= await getGifs('')
    expect(response.length).toBe(0)
  })
})