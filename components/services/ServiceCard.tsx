
import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";

type ServiceCardProps = {
    title: string
    description: string
    image: string
    icon: LucideIcon
    position?: string
    onLearnMore: () => void
};

export function ServiceCard( {title, description, image, icon: Icon, position = "center", onLearnMore}: ServiceCardProps ) {
    return (
        <article
        className="
            group flex h-full flex-col
            rounded-2xl border border-slate-200
            bg-white p-7
            shadow-sm
            transition-all duration-300
            hover:-translate-y-1 hover:border-[#1a41ae]/20 hover:shadow-lg
            md:p-8
        "
        >
            {/* Icon */}
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

            {/* Content */}
            <h2 className="mt-6 text-xl font-bold leading-tight text-[#10294A] md:text-2xl">
                {title}
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">
                {description}
            </p>

            {/* Learn More */}
            <button
                type="button"
                onClick={onLearnMore}
                className="
                mt-auto inline-flex w-fit items-center gap-3
                pt-7 font-semibold text-[#1a41ae]
                transition-colors hover:text-[#eab308]
                "
            >
                Learn More

                <span
                className="
                    flex h-9 w-9 items-center justify-center
                    rounded-full bg-[#F9C515] text-[#10294A]
                    transition-transform duration-300
                    group-hover:translate-x-1
                "
                >
                    <ArrowRight className="h-4 w-4" />
                </span>
            </button>
        </article>
    );
};