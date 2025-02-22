import Link from "next/link"
import Image from "next/image"
import React from "react"

const CollectionCategory: React.FC = () => {
  return (
    <section className="mt-6 md:mt-14 ">
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-[100rem] w-[95%] mx-auto ">
        {/* left */}
        <Link href={"/products/"} className="block overflow-hidden">
          <Image
            className="object-cover object-right-bottom w-full hover:-rotate-2 hover:scale-105 ease-linear transition-all duration-500"
            src={"/banner-image-new.jpg"}
            width={400}
            height={250}
            alt="New Arrival"
          />
        </Link>
        {/* right */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1">
          {/* top */}
          <Link
            href={"/products/?category=men"}
            className="block overflow-hidden"
          >
            <Image
              className="object-cover object-right-bottom w-full h-full hover:rotate-1 hover:scale-110 ease-linear transition-all duration-500"
              src={"/banner-image-trend.jpg"}
              width={400}
              height={250}
              alt="trending now"
            />
          </Link>
          {/* down */}
          <div className="grid grid-cols-2">
            {/* left */}
            <Link
              href={"/products?category=women"}
              className="block overflow-hidden"
            >
              <Image
                className="object-cover object-right-bottom w-full h-full hover:rotate-1 hover:scale-110 ease-linear transition-all duration-700"
                src={"/banner-image-campaign.jpg"}
                width={400}
                height={250}
                alt="campaign"
              />
            </Link>
            {/* right */}
            <Link
              href={"/products?category=kid"}
              className="block overflow-hidden"
            >
              <Image
                className="object-cover object-right-bottom w-full h-full hover:rotate-1 hover:scale-110 ease-linear transition-all duration-700"
                src={"/banner-image-lookbook.jpg"}
                width={400}
                height={250}
                alt="lookbook"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CollectionCategory
