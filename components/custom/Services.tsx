import {
    HousePlug,
    Lightbulb,
    PanelsTopLeft,
    AirVent,
} from "lucide-react"
import { Button } from "@/components/ui/button";
import Link from "next/link";

const services = [
    {
        title: "General Domestic Electrical",
        description:
        "We install outlets and switches, and fix faulty wiring.",
        icon: HousePlug,
    },
    {
        title: "Lighting Installation",
        description:
        "We install your lighting needs.",
        icon: Lightbulb,
    },
    {
        title: "Switchboard Upgrades",
        description:
        "We install, upgrade and relocate switchboards.",
        icon: PanelsTopLeft,
    },
    {
        title: "Aircon Installations & Maintenance",
        description:
        "We install and maintain air conditioning systems.",
        icon: AirVent,
    },
]

export function ServicesSection() {
    return (
        <section className="bg-[] py-20 font-[family-name:var(--font-poppins)]">
            <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-10">
                {/* Heading */}
                <div className="mx-auto mb-14 max-w-2xl text-center">
                    <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#eab308]">
                        Our Services
                    </p>

                    <h2 className="mt-3 text-4xl font-bold text-[#10294A] md:text-5xl">
                        Services We Provide
                    </h2>

                    <p className="mt-4 text-base leading-7 text-slate-600">
                        From small repairs to larger electrical projects, AJs
                        Electrical provides reliable solutions for homes and businesses.
                    </p>
                </div>

                    {/* Service Cards */}
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {services.map((service) => {
                            const Icon = service.icon

                            return (
                                <div
                                    key={service.title}
                                    className="
                                    group rounded-2xl border border-slate-200 bg-white p-7
                                    shadow-sm transition-all duration-300
                                    hover:-translate-y-1 hover:shadow-lg
                                    "
                                >
                                    <div
                                        className="
                                            flex h-14 w-14 items-center justify-center
                                            rounded-full bg-[#1a41ae]/10
                                            transition-colors duration-300
                                            group-hover:bg-[#1a41ae]
                                        "
                                    >
                                        <Icon
                                            className="
                                            h-7 w-7 text-[#1a41ae]
                                            transition-colors duration-300
                                            group-hover:text-[#F9C515]
                                            "
                                        />
                                    </div>

                                    <h3 className="mt-6 text-xl font-bold text-[#10294A]">
                                        {service.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-6 text-slate-600">
                                        {service.description}
                                    </p>
                                </div>
                            )
                        })}
                </div>

                {/* Footer */}
                <div className="mx-auto mt-14 max-w-2xl text-center">
                    <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#eab308]">
                        Want to know more? Check Out Our Services Page.
                    </p>

                    <h2 className="mt-3 text-4xl font-bold text-[#10294A] md:text-5xl">
                        Need a quote or have a general enquiry?
                    </h2>

                    <p className="mt-4 text-base leading-7 text-slate-600">
                        We'll endeavour to respond as soon as possible to any enquiries.
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
                            Contact Us
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}