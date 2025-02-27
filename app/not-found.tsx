import Link from "next/link"

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="border-slate-500 p-8">
        <div className="space-y-4 text-center w-[90%] max-w-[25rem]">
          <h1 className="text-6xl font-bold">404</h1>
          <h2 className="font-bold text-3xl">Comming Soon</h2>
          <p className="text-slate-500 font-semibold">
            Apologies, bw we were unable to find what you were looking for.
            Perhaps searching will help.
          </p>
          <div className="py-3 px-6 bg-primary text-slate-100 w-fit mx-auto rounded-full font-semibold">
            <Link href={"/"}>Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFound
