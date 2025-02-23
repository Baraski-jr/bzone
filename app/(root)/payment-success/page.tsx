import Gutter from "@/components/Gutter"

type SearchParams = {
  amount: string
}
export default async function PaymentSuccess({
  searchParams,
}: {
  searchParams: Promise<SearchParams>
}) {
  const searchParamProps = await searchParams

  return (
    <>
      <Gutter />
      <main className="max-w-6xl mx-auto p-10 text-slate-700 text-center m-10 rounded-md bg-gradient-to-tr">
        <div className="mb-10">
          <h1 className="text-4xl font-extrabold mb-2">Thank you!</h1>
          <h2 className="text-2xl">You successfully sent</h2>
          <div className="bg-white p-2 rounded-md text-purple-500 mt-5 text-4xl font-bold">
            ${searchParamProps.amount}
          </div>
        </div>
      </main>
    </>
  )
}
