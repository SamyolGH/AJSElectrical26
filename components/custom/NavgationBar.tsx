"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu } from "lucide-react"
import { basePath } from "@/lib/basepath"

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const navLinks = [
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

export function NavigationBar() {
  const pathname = usePathname()

    const isLinkActive = (href: string) => {
        return href === "/"
        ? pathname === "/"
        : pathname.startsWith(href)
    }

  return (
    <header className="w-full border-b bg-white">
        <div className="mx-auto flex h-20 items-center justify-between px-6">
            {/* Logo */}
            <Link href="/" className="flex items-center">
                <Image
                     src={`${basePath}/images/AJElectricalLogoWidescreenBlue.png`}
                    alt="AJ's Electrical"
                    width={270}
                    height={75}
                    className="h-auto w-[190px] sm:w-[220px]"
                    priority
                />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden items-center gap-8 font-[family-name:var(--font-poppins)] md:flex">
                {navLinks.map((link) => {
                    const isActive = isLinkActive(link.href)

                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`
                            relative py-2 text-[16px] font-semibold text-[#1a41ae]
                            transition-colors hover:text-[#eab308]

                            after:absolute
                            after:bottom-0
                            after:left-0
                            after:h-[3px]
                            after:w-full
                            after:origin-right
                            after:scale-x-0
                            after:bg-[#eab308]
                            after:transition-transform
                            after:duration-300
                            after:ease-out

                            hover:after:scale-x-100

                            ${isActive ? "after:scale-x-100" : ""}
                            `}
                        >
                            {link.label}
                        </Link>
                    )
                })}
            </nav>

            {/* Mobile Menu */}
            <Sheet>
                <SheetTrigger
                    className="
                        flex h-10 w-10 items-center justify-center
                        rounded-md text-[#1a41ae]
                        transition-colors
                        hover:bg-[#1a41ae]/5
                        md:hidden
                    "
                    aria-label="Open navigation menu"
                >
                    <Menu className="h-6 w-6" />
                </SheetTrigger>

                <SheetContent
                    side="right"
                    className="w-[300px] font-[family-name:var(--font-poppins)] sm:w-[350px]"
                >
                    <SheetHeader>
                        <SheetTitle className="text-left">
                            <Image
                                src={`${basePath}/images/AJElectricalLogoWidescreenBlue.png`}
                                alt="AJ's Electrical"
                                width={220}
                                height={61}
                                className="h-auto w-[180px]"
                            />
                        </SheetTitle>
                    </SheetHeader>

                    <nav className="mt-8 flex flex-col px-4">
                        {navLinks.map((link) => {
                            const isActive = isLinkActive(link.href)

                            return (
                                <SheetClose key={link.href}>
                                    <Link
                                        href={link.href}
                                        className={`
                                            border-b py-4 text-lg font-semibold
                                            transition-colors
                                            hover:text-[#eab308]

                                            ${
                                            isActive
                                                ? "text-[#eab308]"
                                                : "text-[#1a41ae]"
                                            }
                                        `}
                                    >
                                        {link.label}
                                    </Link>
                                </SheetClose>
                            )
                        })}
                    </nav>
                </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}