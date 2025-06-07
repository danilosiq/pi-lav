"use client"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel"
import banner1 from "@/core/assets/images/banners/banner-1.jpeg"
import banner2 from "@/core/assets/images/banners/banner-2.jpeg"
import banner3 from "@/core/assets/images/banners/banner-3.jpeg"
import Image from "next/image"
import { useEffect, useRef } from "react"

export function HomeScreenCarousel() {
  const carouselItems = [banner1, banner2, banner3]
  const carouselRef = useRef<CarouselApi | null>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
       
          carouselRef.current.scrollNext()
        
      }
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Carousel
      opts={{ loop: true }}
      setApi={(api) => {
        carouselRef.current = api
      }}
    >
      <CarouselContent>
        {carouselItems.map((item, index) => (
          <CarouselItem
          key={index}
          className="flex justify-center items-center"
        >
          <Image
            src={item}
            alt={`Banner ${index + 1}`}
            className="max-w-[800px] max-h-[300px] w-full object-contain rounded-md"
          />
        </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}