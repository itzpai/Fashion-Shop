import { useState } from 'react'
import t1 from '../assets/t1.png'
import t2 from '../assets/t2.png'
import t3 from '../assets/t3.png'
import ProductCard from '../components/ProductCard'

const productData = [
  {
    id: 1, name: "T-shirt", image: t1, price: 19.99
  },
  {
    id: 2, name: "T-shirt", image: t2, price: 39.99
  },
  {
    id: 3, name: "T-shirt", image: t3, price: 59.99
  }
]

function Shop() {
  const [products, setProducts] = useState(productData)

  return (
    <>
      <section className='grow bg-gray-100 p-4'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-3'>
          {products.map(product => <ProductCard key={product.id} {...product} />)}
        </div>
      </section>
    </>
  )
}

export default Shop