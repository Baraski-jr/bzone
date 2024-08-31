import React from 'react'
import ProductCart from '../productCart'
import FilterComponent from '../filterComponent'
import client from '@/lib/apollo-client'
import { gql } from '@apollo/client'

const GET_DATA = gql`
  query {
    products {
      id
      title
      price
      images
    }
  }
`;

const ShopCollection = async () => {
  const { data } = await client.query({ query: GET_DATA });

    return (
        <section className="w-[95%] mx-auto py-8 space-y-2 md:space-y-4">
            <FilterComponent />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-5">
                { data.products.map(({ id, title, images, price }) => (
                    < ProductCart key={id} id={ id } title = { title } image = { images[1]} price = { price } />
                    ))
                }
            </div>
        </section>
  )
}

export default ShopCollection