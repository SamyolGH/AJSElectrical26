"use client"

import Image from "next/image"
import Link from "next/link"
import { CheckCircle2, ShieldCheck, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import Autoplay from "embla-carousel-autoplay"
import { basePath } from "@/lib/basepath"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel"



const heroImages = [
  {
    src: `${basePath}/images/hero/hero-1.jpg`,
    position: "center 0%",
  },
  {
    src: `${basePath}/images/hero/hero-2.jpg`,
    position: "center 0%",
  },
  {
    src: `${basePath}/images/hero/hero-3.jpg`,
    position: "center 0%",
  },
  {
    src: `${basePath}/images/hero/hero-4.jpg`,
    position: "center 0%",
  },
  {
    src: `${basePath}/images/hero/hero-5.jpg`,
    position: "center 0%",
  },
  {
    src: `${basePath}/images/hero/hero-6.jpg`,
    position: "center 60%",
  },
]

export function Hero() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) return

    const updateCarousel = () => {
      setCurrent(api.selectedScrollSnap())
      setCount(api.scrollSnapList().length)
    }

    updateCarousel()

    api.on("select", updateCarousel)
    api.on("reInit", updateCarousel)

    return () => {
      api.off("select", updateCarousel)
      api.off("reInit", updateCarousel)
    }
  }, [api])

  return (
    <section className="relative min-h-[650px] overflow-hidden font-[family-name:var(--font-poppins)]">
        {/* Image Carousel */}
        <Carousel
            setApi={setApi}
            opts={{
                loop: true,
                align: "start",
                slidesToScroll: 1,
            }}
            plugins={[
                Autoplay({
                    delay: 5000,
                    stopOnInteraction: false,
                }),
            ]}
            className="absolute inset-0 h-[650px] w-full"
        >
            <CarouselContent className="ml-0 h-[650px]">
                {heroImages.map((image, index) => (
                    <CarouselItem
                        key={image.src}
                        className="relative h-[650px] basis-full pl-0 md:basis-1/3"
                    >
                    <Image
                        src={image.src}
                        alt=""
                        fill
                        priority={index === 0}
                        sizes="(max-width: 767px) 100vw, 33vw"
                        className="object-cover"
                        style={{
                        objectPosition: image.position,
                        }}
                    />
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>

        {/* Gradient Overlay */}
        <div
            className="
            pointer-events-none
            absolute inset-0 z-10
            bg-gradient-to-r
            from-black/65
            via-black/35
            to-black/20
            "
        />

        {/* Hero Overlay Content */}
        <div className="pointer-events-none absolute inset-0 z-20">
            <div className="mx-auto flex h-full items-center px-6 py-10">
                <div className="grid w-full items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
                    {/* Main Hero Text */}
                    <div
                        className="
                        mx-auto max-w-2xl text-center text-white
                        lg:mx-0 lg:text-left
                        "
                    >
                        <h1 className="text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
                            Electrical Solutions
                            <br />
                            <span className="text-[#F9C515]">
                                For Your Every Need
                            </span>
                        </h1>

                        <p
                            className="
                                mx-auto mt-6 max-w-xl
                                text-base leading-7 text-white/90
                                sm:text-lg
                                lg:mx-0
                            "
                        >
                            Quality workmanship that you can count on from local licensed
                            electricians.
                        </p>

                        <Button
                            className="
                                pointer-events-auto
                                mt-7
                                rounded-full
                                bg-[#F9C515]
                                px-8 py-6
                                font-bold
                                text-[#1b3fa6]
                                hover:bg-[#e8b800]
                            "
                        >
                            <Link href="/contact">
                                Get a Free Quote
                            </Link>
                        </Button>
                    </div>

                    {/* Desktop Blue Info Card */}
                    <div
                        className="
                            hidden
                            lg:block
                            pointer-events-auto
                            mx-auto w-full max-w-[500px]
                            rounded-md
                            bg-[#10294A]/80
                            text-white
                            shadow-2xl
                            backdrop-blur-sm

                            lg:absolute
                            lg:right-8
                            lg:top-1/2
                            lg:mx-0
                            lg:-translate-y-1/2
                        "
                    >
                        <div className="p-6 sm:p-8">
                            <div className="flex items-start gap-4">
                                <div>
                                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#F9C515]">
                                        Who Are We?
                                    </p>

                                    <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                                        About Us
                                    </h2>

                                    <p className="mt-4 text-sm leading-6 text-white/80">
                                        AJ’s Electrical Pty Ltd is a Brisbane based family business established in 1993. We service residential, commercial and new builds, covering Brisbane, Ipswich, Logan and surrounding areas. AJ’s Electrical Pty Ltd provide all electrical work, 
                                        including new home wiring, electrical maintenance, commercial & residential work, switchboard upgrades, air conditioning and more.
                                    </p>
                                </div>
                            </div>

                            {/* Guarantees */}
                            <div
                                className="
                                mt-6 grid gap-4
                                border-t border-white/20 pt-5
                                sm:grid-cols-3
                                "
                            >
                                <div className="flex items-center gap-2">
                                    <ShieldCheck className="h-5 w-5 shrink-0 text-[#F9C515]" />

                                    <span className="text-xs font-semibold">
                                        Fully Licensed
                                    </span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <Clock className="h-5 w-5 shrink-0 text-[#F9C515]" />
                                    
                                    <span className="text-xs font-semibold">
                                        On-Time Service
                                    </span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <CheckCircle2 className="h-5 w-5 shrink-0 text-[#F9C515]" />

                                    <span className="text-xs font-semibold">
                                        Quality Guaranteed
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Carousel Nav */}
        <div className="absolute bottom-8 left-1/2 z-40 flex -translate-x-1/2 gap-2">
            {Array.from({ length: count }).map((_, index) => (
                <button
                    key={index}
                    type="button"
                    onClick={() => api?.scrollTo(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    className={`
                    h-2 rounded-full transition-all duration-300
                    ${
                        current === index
                        ? "w-6 bg-[#F9C515]"
                        : "w-2 bg-white/50 hover:bg-white/80"
                    }
                    `}
                />
            ))}
        </div>
    </section>
  )
}