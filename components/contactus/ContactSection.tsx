import {
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react"

import { ContactForm } from "./ContactForm"

export function ContactSection() {
  return (
    <section className="bg-white py-16 font-[family-name:var(--font-poppins)] md:py-20">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Section Heading */}
        <div className="mb-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#eab308]">
            Get In Touch
          </p>

          <h2 className="mt-2 text-3xl font-bold text-[#10294A] md:text-4xl">
            Send Us a Message
          </h2>

          <p className="mt-3 max-w-2xl leading-7 text-slate-600">
            Fill out the form and tell us how we can help. One of our team
            members will get back to you as soon as possible.
          </p>
        </div>

        <div className="grid items-stretch gap-8 lg:grid-cols-[1.6fr_0.8fr]">
          {/* Form */}
          <ContactForm />

          {/* Contact Information */}
          <aside className="rounded-2xl bg-[#10294A] p-7 text-white shadow-lg md:p-9">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10">
              <ShieldCheck className="h-7 w-7 text-[#F9C515]" />
            </div>

            <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-[#F9C515]">
              Need Some Help?
            </p>

            <h3 className="mt-2 text-2xl font-bold">
              Talk to our team
            </h3>

            <p className="mt-3 text-sm leading-6 text-white/70">
              Have a question before submitting an enquiry? You can contact
              AJ's Electrical directly.
            </p>

            <div className="mt-8 space-y-6 border-t border-white/15 pt-7">
              <a
                href="tel:+61419647823"
                className="group flex items-center gap-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <Phone className="h-5 w-5 text-[#F9C515]" />
                </div>

                <div>
                  <p className="text-xs text-white/50">
                    Phone
                  </p>
                  <p className="mt-0.5 text-sm font-semibold transition-colors group-hover:text-[#F9C515]">
                    +61 419 647 823
                  </p>
                </div>
              </a>

              <a
                href="mailto:electricalajs@gmail.com"
                className="group flex items-center gap-4"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <Mail className="h-5 w-5 text-[#F9C515]" />
                </div>

                <div>
                  <p className="text-xs text-white/50">
                    Email
                  </p>
                  <p className="mt-0.5 break-all text-sm font-semibold transition-colors group-hover:text-[#F9C515]">
                    electricalajs@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <MapPin className="h-5 w-5 text-[#F9C515]" />
                </div>

                <div>
                  <p className="text-xs text-white/50">
                    Service Area
                  </p>
                  <p className="mt-0.5 text-sm font-semibold">
                    Brisbane & surrounding areas
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-white/15 pt-6 text-xs leading-6 text-white/60">
              <p>
                <span className="font-semibold text-white/80">ABN:</span>{" "}
                43 081 304 065
              </p>

              <p>
                <span className="font-semibold text-white/80">
                  Electrical Licence:
                </span>{" "}
                38416
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}