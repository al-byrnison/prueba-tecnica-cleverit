import { useState } from 'react'
import { Products } from '../components/Products'
import { products as initialProducts } from '../mocks/products.json'
import {Filters} from '../components/Filters'
import { useFilters } from '../hooks/useFilters'

const Home = () => {
  const [products] = useState(initialProducts)
  const { filterProducts, setFilters} = useFilters()
  const filteredProducts = filterProducts(products)
  return (
    <>
     <Filters onChange={setFilters} />
      <Products products={filteredProducts} />
    </>
  )
}

export default Home
