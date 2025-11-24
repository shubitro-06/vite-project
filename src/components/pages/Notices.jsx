import {useEffect,useState} from 'react'
import Card from '../Card'


const Notices = () => {

    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch('https://dummyjson.com/products/search?q=phone')
            .then(res => res.json())
            .then((data) => setProduct(data.products));
    }, [])
    return (
        <div>
            <h1 className='bg-emerald-700 text-amber-50 w-full font-bold text-center text-4xl' > Good in
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>BOOTSTRAP</li>
                    <li>TAILWIND</li>
                    <li>JSX</li>
                </ul>
                <br /> Number - 0124356345</h1>

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
        </div>
    )
}

export default Notices
