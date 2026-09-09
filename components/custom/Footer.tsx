import Image from "next/image"
import Link from "next/link"
import {
    //Facebook,
    Mail,
    MapPin,
    Phone,
} from "lucide-react"
import { FaFacebookF } from "react-icons/fa"

const footerLinks = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "Services",
        href: "/services",
    },
    {
        label: "Contact Us",
        href: "/contact",
    },
]

export function Footer() {
    return (
        <footer className="font-[family-name:var(--font-poppins)]">
        {/* Main Footer */}
        <div className="bg-[#10294A] text-white">
            <div className="mx-auto grid w-full max-w-[1600px] gap-10 px-6 py-12 md:grid-cols-2 lg:grid-cols-4 lg:px-10">
                {/* Brand */}
                <div>
                    <Image
                    src="/images/AJElectricalLogoWidescreenWhite.png"
                    alt="AJ's Electrical"
                    width={260}
                    height={75}
                    className="h-auto w-[210px]"
                    />

                    <p className="mt-5 max-w-sm text-sm leading-6 text-white/70">
                    Reliable residential and commercial electrical services
                    throughout Brisbane and surrounding areas.
                    </p>
                </div>

                {/* Navigation */}
                <div>
                    <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-[#F9C515]">
                    Navigation
                    </h3>

                    <nav className="mt-5 flex flex-col gap-3">
                    {footerLinks.map((link) => (
                        <Link
                        key={link.href}
                        href={link.href}
                        className="w-fit text-sm text-white/80 transition-colors hover:text-[#F9C515]"
                        >
                        {link.label}
                        </Link>
                    ))}
                    </nav>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-[#F9C515]">
                    Contact
                    </h3>
                        
                    <div className="mt-5 flex flex-col gap-4 text-sm text-white/80">
                        <a
                            href="mailto:electricalajs@gmail.com"
                            className="flex items-center gap-3 transition-colors hover:text-[#F9C515]"
                        >
                            <Mail className="h-5 w-5 shrink-0 text-[#F9C515]" />
                            electricalajs@gmail.com
                        </a>

                        <a
                            href="tel:+61419647823"
                            className="flex items-center gap-3 transition-colors hover:text-[#F9C515]"
                        >
                            <Phone className="h-5 w-5 shrink-0 text-[#F9C515]" />
                            +61 419 647 823
                        </a>

                        <div className="flex items-start gap-3">
                            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#F9C515]" />
                                <span>Brisbane, Queensland</span>
                        </div>
                    </div>
                </div>

                {/* Business Details */}
                <div>
                    <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-[#F9C515]">
                        Business Details
                    </h3>

                    <div className="mt-5 space-y-3 text-sm text-white/80">
                        <p>
                            <span className="font-semibold text-white">
                            ABN:
                            </span>{" "}
                            43 081 304 065
                        </p>

                        <p>
                            <span className="font-semibold text-white">
                            Electrical Licence:
                            </span>{" "}
                            38416
                        </p>
                    </div>

                    <div className="mt-6">
                        <a
                            href="#"
                            aria-label="Facebook"
                            className="
                            inline-flex h-10 w-10 items-center justify-center
                            rounded-full border border-white/20
                            transition-colors
                            hover:border-[#F9C515]
                            hover:bg-[#F9C515]
                            hover:text-[#10294A]
                            "
                        >
                            <FaFacebookF className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-[#0b1f38] text-white/60">
            <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-2 px-6 py-4 text-xs sm:flex-row sm:items-center sm:justify-between lg:px-10">
            <p>
                © {new Date().getFullYear()} AJ's Electrical Pty Ltd.
                All rights reserved.
            </p>

            <p>
                Brisbane, Queensland
            </p>
            </div>
        </div>
        </footer>
    )
}