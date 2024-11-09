import React from 'react'
import { RotatingSquare } from 'react-loader-spinner'

const Loader = () => {
  return (
      <section className="z-50 absolute top-0 left-0 w-full h-full grid place-content-center bg-white bg-opacity-90">
        <RotatingSquare
            visible={true}
            height="150"
            width="150"
            color="#4fa94d"
            ariaLabel="rotating-square-loading"
            wrapperStyle={{}}
            wrapperClass=""
        />
    </section>
  )
}

export default Loader