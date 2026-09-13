
import Image from "next/image";
import { basePath } from "@/lib/basepath"

export function ContactHero() {
    return (
        <section className="relative h-[290px] overflow-hidden font-[family-name:var(--font-poppins)] md:h-[320px]">
            <Image
                src={`${basePath}/images/hero/hero-4.jpg`}
                alt=""
                fill
                priority
                sizes="100vw"
                className="scale-105 object-cover blur-[1px]"
            />

            <div className="absolute inset-0 bg-[#10294A]/80" />

            <div className="relative z-10 mx-auto flex h-full max-w-[1600px] items-center justify-center px-6 text-center lg:px-10">
                <div className="max-w-3xl">
                    <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#F9C515]">
                        Contact Us
                    </p>

                    <h1 className="mt-4 text-4xl font-bold leading-tight text-white md:text-5xl">
                        How Can We{" "}
                        <span className="text-[#F9C515]">
                        Help?
                        </span>
                    </h1>

                    <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/80">
                        Have a question or need assistance with your electrical needs?
                        Get in touch with our team and we'll be happy to help.
                    </p>
                </div>
            </div>
        </section>
    );
};