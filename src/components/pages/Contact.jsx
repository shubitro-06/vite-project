import {useEffect,useState} from 'react'
import Card from '../Card'

const Contact = () => {
  const [product, setProduct] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/products?sortBy=title&order=asc')
      .then(res => res.json())
      .then((data) => setProduct(data.products));
  }, [])

  return (
    <div>
      <h1 className='bg-blue-400 w-full font-bold text-center text-4xl' >To contact me : Gmail - name123@gamil.com <br /> Number - 0124356345
        <div className='container'>
          <div className=' mt-[25px] flex flex-wrap  gap-2 '>

            {
              product.map((item) => {
                return (

                  <Card
                    image={item.thumbnail}
                    title={item.title}
                    rating={item.rating}
                    price={item.price}
                    button={item.button}
                  />
                )
              })
            }

          </div>
        </div>
      </h1>
    </div>
  )
}

export default Contact
