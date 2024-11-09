'use client'
import { products } from '@/constants';
import React, { Children, createContext, Provider } from 'react'


export const ProductsContext = createContext;

const ProductsContextProvider = (props: { Children: any; }) => {

    const currency = '$';
    const value = {
        products,
        currency,
    }
    
    return (
        <ProductsContext.Provider value={value}>
            {props.Children}
      </ProductsContext.Provider>
  )
}

export default ProductsContextProvider
