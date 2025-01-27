"use client"
import Image from "next/image"
import { useState } from "react"

type Props = {
  url: string
  hoverUrl: string
  alt: string
}
export const ImageHover = ({ url, hoverUrl, alt }: Props) => {
  const [isHovered, setIsHovered] = useState(false)
  let hoverTimeout: any
  const handleMouseEnter = () => {
    hoverTimeout = setTimeout(() => setIsHovered(true), 100)
  }
  const handleMouseLeave = () => {
    clearTimeout(hoverTimeout)
    setIsHovered(false)
  }

  return (
    <div
      className="relative h-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        src={url}
        alt={alt}
        priority
        width={600}
        height={400}
        className={`object-contain transition-opacity duration-500 w-auto ${
          isHovered ? "opacity-0" : "opacity-100"
        }`}
      />
      <Image
        src={hoverUrl}
        alt={alt}
        width={600}
        height={400}
        priority
        className={`absolute inset-0  w-auto object-contain transition-opacity duration-500 ${
          isHovered ? "opacity-100 " : "opacity-0"
        }`}
      />
    </div>
  )
}
