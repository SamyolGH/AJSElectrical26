
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ServicesQuotePanel() {
    return (
        <section className="bg-white px-6 pb-16 font-[family-name:var(--font-poppins)] lg:px-10">
            <div
                className="
                mx-auto flex max-w-[1600px] flex-col gap-6
                rounded-2xl bg-[#1a41ae]/5 px-7 py-8
                md:flex-row md:items-center md:justify-between
                md:px-10
                "
            >
                <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#10294A]">
                        Need a custom solution?
                    </p>

                    <h2 className="mt-2 text-3xl font-bold text-[#10294A]">
                        Get in touch for a{" "}
                        <span className="text-[#eab308]">
                        free quote.
                        </span>
                    </h2>
                </div>

                <Button
                    className="
                        rounded-full bg-[#F9C515] px-7 py-6
                        font-bold text-[#10294A]
                        hover:bg-[#e8b800]
                    "
                >
                    <Link href="/contact">
                        Contact Us
                    </Link>
                </Button>
            </div>
        </section>
    );
};