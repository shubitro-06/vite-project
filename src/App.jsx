import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './NavBar'
import Banner from './components/Banner'
import Input from './Input'
import Card from './components/Card'


function App() {
  const [product, setProduct] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then((data) => setProduct(data.products));
  }, [])

  return (

    <>
      <Banner></Banner>
      <div className='container'>
        <div className=' mt-[25px]  flex flex-wrap justify-between  gap-2 '>

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
    </>
  )
}

export default App
