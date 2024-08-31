// 'use client'
// import React, { useEffect, useState } from 'react'
// import ProductCart from '../productCart'
// import FilterComponent from '../filterComponent'

// const ShopCollection = () => {
    
//   const [products, setProducts] = useState<any[]>([]); // State to store the fetched data
//   const [loading, setLoading] = useState(true); // State to indicate loading status
//   const [error, setError] = useState<string | null>(null); // State to handle any errors

//   useEffect(() => {
//     // Function to fetch data from the API
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://api.escuelajs.co/api/v1/products');
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//           const products = await response.json(); 
//           console.log(products)
//         setProducts(products); // Set the fetched data to the state
//       } catch (error) {
//         setError((error as Error).message); // Handle any errors
//       } finally {
//         setLoading(false); // Set loading to false after the fetch is complete
//       }
//     };

//     fetchData();
//   }, []); // Dependency array is empty so useEffect runs once when component mounts

//     console.log(products)
//     return (
//         <section className="w-[95%] mx-auto py-8 space-y-2 md:space-y-4">
//             <FilterComponent />
//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-5">
//                 { products.map(({ id, title, images, price }) => (
//                     < ProductCart id = { id } title = { title } image = { images[0]} price = { price } />
//                     ))
//                 }
//             </div>
//         </section>
//   )
// }

// export default ShopCollection