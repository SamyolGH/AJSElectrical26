
import Image from "next/image";
import { basePath } from "@/lib/basepath"

export function ServicesHero() {
    return (
        <section className="relative h-[290px] overflow-hidden font-[family-name:var(--font-poppins)] md:h-[320px]">
            <Image
                src={`${basePath}/images/hero/hero-5-blur.jpg`}
                alt=""
                fill
                priority
                sizes="100vw"
                className="object-cover"
                style={{
                    objectPosition: "center 40%",
                }}
            />

            <div className="absolute inset-0 bg-[#102294A]/80"/>

            <div className="relative z-10 mx-auto flex h-full max-w-[1600px] items-center justify-center px-6 text-center lg:px-10">
                <div className="max-w-3xl">
                    <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#F9C515]">
                        Our Services
                    </p>

                    <h1 className="mt-4 text-4xl font-bold leading-tight text-white md:text-5xl">
                        Reliable Electrical Solutions
                        <span className="block text-[#F9C515]">
                        For Every Space
                        </span>
                    </h1>

                    <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/80">
                        Explore our core services below. Select a service to learn more
                        or get in touch if you have any questions.
                    </p>
                </div>
            </div>
        </section>
    );
};