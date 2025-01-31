import Link from "next/link"

export const NetworkError = ({
  top = 50,
  opacity = 100,
  link,
  message,
}: {
  top?: number
  opacity?: number
  link: string
  message: string
}) => {
  return (
    <div
      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-6 md:mt-10 flex items-center justify-center`}
    >
      <div className="space-y-4 text-center ">
        <h1
          className={`$opacity-${opacity} text-xl md:text-xl font-bold text-red-500`}
        >
          {message}
        </h1>
        <Link
          className={`block py-3 opacity-${opacity} px-6 bg-primary text-white w-fit mx-auto rounded-full font-semibold`}
          href={link}
        >
          Click to Refresh the page
        </Link>
      </div>
    </div>
  )
}
