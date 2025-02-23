"use client"

import React, { useEffect, useState } from "react"
// import {
//   useStripe,
//   useElements,
//   ExpressCheckoutElement,
// } from "@stripe/react-stripe-js"
import { resolve } from "path"
import {
  useStripe,
  useElements,
  ExpressCheckoutElement,
} from "@stripe/react-stripe-js"
import { StripeExpressCheckoutElementConfirmEvent } from "@stripe/stripe-js"

const CheckoutPage = ({ amount }: { amount: number }) => {
  const stripe = useStripe()
  const elements = useElements()

  const [errorMessage, setErrorMessage] = useState<string>()

  const [clientSecret, setClientSecret] = useState("")
  const [loading, setLoading] = useState(false)

  const onConfirm = async (event: StripeExpressCheckoutElementConfirmEvent) => {
    // Stripe.js hasn't loaded yet.
    // Make sure to disable form submission until Stripe.js has loaded.
    if (!stripe || !elements) return

    const { error: submitError } = await elements.submit()

    if (submitError) {
      setErrorMessage(submitError.message)
      setLoading(false)
      return
    }
    // Create the PaymentIntent and obtain clientSecret
    const res = await fetch("/create-intent", {
      method: "POST",
    })

    const { client_secret: clientSecret } = await res.json()

    // Confirm the PaymentIntent using the details collected by the Express Checkout Element
    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: "/payment-success?amount=${amount}",
      },
    })

    if (error) {
      // This point is only reached if there's an immediate error when
      // confirming the payment. Show the error to your customer (for example, payment details incomplete)
      setErrorMessage(error.message)
    } else {
      // The payment UI automatically closes with a success animation.
      // Your customer is redirected to your `return_url`.
    }
  }
  return (
    <div className="">
      <ExpressCheckoutElement onConfirm={onConfirm} />
      {errorMessage && <div>{errorMessage}</div>}
    </div>
  )
}
export default CheckoutPage

// <form  className="bg-white p-2 rounded-md">
// {
/* {clientSecret && <PaymentElement />} */
// }
// {
/* <ExpressCheckoutElement
        onConfirm={onConfirm}
      /> */
// }

//   {errorMessage && <div>{errorMessage}</div>}

//   <button
//     type="button"
//     disabled={!stripe || loading}
//     className="text-white w-full p-5 bg-black mt-2 rounded-md font-bold disabled:opacity-50 disabled:animate-pulse"
//   >
//     {!loading ? `Purchase $${amount}` : "Processing..."}
//   </button>
// </form>

// const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//   event.preventDefault()
//   setLoading(true)

//   if (!stripe || !elements) {
//     return
//   }

//   const { error: submitError } = await elements.submit()

//   if (submitError) {
//     setErrorMessage(submitError.message)
//     setLoading(false)
//     return
//   }

//   const { error } = await stripe.confirmPayment({
//     elements,
//     clientSecret,
//     confirmParams: {
//       return_url: `/payment-success?amount=${amount}`,
//     },
//   })

// if (error) {
// This point is only reached if there's an immediate error when
// confirming the payment. Show the error to your customer (for example, payment details incomplete)
//   setErrorMessage(error.message)
// } else {
// The payment UI automatically closes with a success animation.
// Your customer is redirected to your `return_url`.
// }

// setLoading(false)
// }

// if (!clientSecret || !stripe || !elements) {
//   return (
//     <div className="flex items-center justify-center">
//       <div
//         className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
//         role="status"
//       >
//         <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
//           Loading...
//         </span>
//       </div>
//     </div>
//   )
// }
