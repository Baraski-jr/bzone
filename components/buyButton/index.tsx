import React from 'react'

// const Buy: React.FC  = () => {
const Buy: React.FC<{disable?: boolean}> = ({ disable=false}) => {

  return (
    <button
      disabled={disable}
      className={`rounded-lg bg-slate-950 text-base text-white h-12 ${disable? 'bg-opacity-70 cursor-not-allowed': 'hover:bg-opacity-95'} transition-colors duration-300`} >
       BUY
    </button>
    )
}

export default Buy