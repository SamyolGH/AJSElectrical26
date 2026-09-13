"use client"

import { useEffect, useRef, useState } from "react"
import {
  AirVent,
  ArrowLeft,
  CheckCircle2,
  HousePlug,
  Lightbulb,
  PanelsTopLeft,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { ServiceCard } from "./ServiceCard"
import { basePath } from "@/lib/basepath"

const services = [
  {
    title: "General Domestic Electric",
    description:
      "From new builds to renovations and everyday electrical work, we provide safe, reliable solutions for your home.",
    image: `${basePath}/images/services/placeholder.jpg`,
    icon: HousePlug,
    position: "center",
    details:
      "AJ's Electrical provides a complete range of domestic electrical services for homes, renovations and new builds. Whether you need a new power point installed, faulty wiring repaired or electrical work completed as part of a larger renovation, we can provide a safe and reliable solution.",
    features: [
      "a quick brown fox jumps over the lazy dog",
    ],
  },
  {
    title: "Aircon Installations & Maintenance",
    description:
      "Professional installation and maintenance to keep your home comfortable throughout the year.",
    image: `${basePath}/images/services/placeholder.jpg`,
    icon: AirVent,
    position: "center",
    details:
      "We install and maintain air conditioning systems for residential properties, helping keep your home comfortable throughout Brisbane's warmer months. We can assist with new installations, replacements and ongoing maintenance.",
    features: [
      "a quick brown fox jumps over the lazy dog 2",
    ],
  },
  {
    title: "Switchboard Upgrades",
    description:
      "Improve safety and performance with a modern switchboard upgrade tailored to your property.",
    image: `${basePath}/images/services/placeholder.jpg`,
    icon: PanelsTopLeft,
    position: "center",
    details:
      "Older switchboards may no longer provide the level of protection required by modern homes and electrical equipment. We can assess your existing switchboard and provide upgrades designed to improve safety, reliability and capacity.",
    features: [
      "a quick brown fox jumps over the lazy dog 3",
    ],
  },
  {
    title: "Lighting Installations",
    description:
      "Stylish and efficient lighting solutions for your home, outdoor spaces and commercial projects.",
    image: `${basePath}/images/services/placeholder.jpg`,
    icon: Lightbulb,
    position: "center",
    details:
      "From practical indoor lighting to outdoor and feature lighting, we can install lighting solutions suited to your property. We can also replace or upgrade existing fittings with modern, energy-efficient alternatives.",
    features: [
      "a quick brown fox jumps over the lazy dog 4",
    ],
  },
]

type Service = (typeof services)[number]

export function ServicesGrid() {
  const [selectedService, setSelectedService] =
    useState<Service | null>(null)

  const [visible, setVisible] = useState(true)

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  const changeView = (service: Service | null) => {
    setVisible(false)

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(() => {
      setSelectedService(service)

      requestAnimationFrame(() => {
        setVisible(true)
      })
    }, 250)
  }

  return (
    <section className="bg-white py-16 font-[family-name:var(--font-poppins)] md:py-20">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-10">
        <div
          className={`
            transition-all duration-300 ease-in-out
            ${
              visible
                ? "translate-y-0 opacity-100"
                : "translate-y-2 opacity-0"
            }
          `}
        >
          {!selectedService ? (
            /* Services Grid */
            <div className="grid gap-6 lg:grid-cols-2">
              {services.map((service) => (
                <ServiceCard
                  key={service.title}
                  {...service}
                  onLearnMore={() => changeView(service)}
                />
              ))}
            </div>
          ) : (
            /* Service Detail Panel */
            <ServiceDetail
              service={selectedService}
              onReturn={() => changeView(null)}
            />
          )}
        </div>
      </div>
    </section>
  )
}

function ServiceDetail({
  service,
  onReturn,
}: {
  service: Service
  onReturn: () => void
}) {
  const Icon = service.icon

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
      <div className="grid lg:grid-cols-[45%_55%]">
        {/* Service Image */}
        <div className="relative min-h-[300px] lg:min-h-[520px]">
          <img
            src={service.image}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            style={{
              objectPosition: service.position,
            }}
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#10294A]/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="flex flex-col p-7 sm:p-10 lg:p-12">
          <Button
            variant="ghost"
            onClick={onReturn}
            className="mb-8 w-fit px-0 text-[#1a41ae] hover:bg-transparent hover:text-[#eab308]"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Button>

          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1a41ae]/10">
            <Icon className="h-7 w-7 text-[#1a41ae]" />
          </div>

          <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-[#eab308]">
            Our Services
          </p>

          <h2 className="mt-2 text-3xl font-bold text-[#10294A] md:text-4xl">
            {service.title}
          </h2>

          <p className="mt-6 max-w-2xl leading-7 text-slate-600">
            {service.details}
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {service.features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-3 text-sm font-medium text-[#10294A]"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#eab308]" />
                {feature}
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Button
              className="rounded-full bg-[#F9C515] px-8 py-6 font-bold text-[#10294A] hover:bg-[#e8b800]"
            >
              <a href="/contact">
                Get a Free Quote
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}