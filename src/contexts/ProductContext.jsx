import React, {createContext, useContext, useEffect} from 'react'
import ProductContext from './ProductContext';

export const ProductContext = createContext();
const ProductProvider = ({children}) => {
  return (
    <ProductContext.Provider>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductContext