"use client"
import Gutter from "@/components/Gutter"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import Confetti from "react-confetti"

const SuccessPage = () => {
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/products")
    }, 5000)

    return () => {
      clearTimeout(timer)
    }
  }, [router])

  return (
    <>
      <Gutter />
      <Gutter />
      <div className="flex flex-col w-full gap-6 items-center justify-center">
        <Confetti
          width={window.innerWidth || 100}
          height={window.innerHeight || 100}
        />
        <h1 className="text-6xl text-primary">Successful</h1>
        <h2 className="text-xl font-medium">
          An invoice will be sent to your e-mail
        </h2>
      </div>
    </>
  )
}

export default SuccessPage
