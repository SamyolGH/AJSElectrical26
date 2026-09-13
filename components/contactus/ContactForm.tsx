"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import emailjs from "@emailjs/browser"
import { ArrowRight, CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

type Inputs = {
  custName: string
  custEmail: string
  custNumber: string
  custInquiry: string
  custSuburb: string
}

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>()

  const onSubmit = async (data: Inputs) => {
    setSubmitError(null)

    try {
        await emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
            data,
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        )

        setIsSubmitted(true)

        if (typeof window !== "undefined" && (window as any).fbq) {
            ;(window as any).fbq("track", "Lead", {
            content_name: "Contact Form Submission",
            })
        }
        } catch {
            setSubmitError("Submission failed. Please try again.")
        }
  }

  if (isSubmitted) {
    return (
      <div
        className="
          flex min-h-[420px] flex-col items-center justify-center
          rounded-2xl border border-slate-200 bg-white
          p-8 text-center shadow-sm
        "
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#1a41ae]/10">
          <CheckCircle2 className="h-8 w-8 text-[#1a41ae]" />
        </div>

        <h2 className="mt-6 text-2xl font-bold text-[#10294A]">
            Enquiry Submitted
        </h2>

        <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">
            Thanks for getting in touch. One of our team members will get back
            to you as soon as possible.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="
        rounded-2xl border border-slate-200
        bg-white p-6 shadow-sm
        md:p-9
      "
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {/* Name */}
        <div className="space-y-2">
          <Label htmlFor="custName" className="text-[#10294A]">
            Full Name <span className="text-red-500">*</span>
          </Label>

          <Input
            id="custName"
            placeholder="Your name"
            aria-invalid={!!errors.custName}
            {...register("custName", {
              required: "A name is required",
            })}
          />

          {errors.custName && (
            <p className="text-sm text-red-500">
              {errors.custName.message}
            </p>
          )}
        </div>

        {/* Suburb */}
        <div className="space-y-2">
          <Label htmlFor="custSuburb" className="text-[#10294A]">
            Suburb <span className="text-red-500">*</span>
          </Label>

          <Input
            id="custSuburb"
            placeholder="Your suburb"
            aria-invalid={!!errors.custSuburb}
            {...register("custSuburb", {
              required: "A suburb is required",
            })}
          />

          {errors.custSuburb && (
            <p className="text-sm text-red-500">
              {errors.custSuburb.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="custEmail" className="text-[#10294A]">
            Email Address <span className="text-red-500">*</span>
          </Label>

          <Input
            id="custEmail"
            type="email"
            placeholder="you@example.com"
            aria-invalid={!!errors.custEmail}
            {...register("custEmail", {
              required: "Your email address is required",
              pattern: {
                value:
                  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Enter a valid email address",
              },
            })}
          />

          {errors.custEmail && (
            <p className="text-sm text-red-500">
              {errors.custEmail.message}
            </p>
          )}
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <Label htmlFor="custNumber" className="text-[#10294A]">
            Best Contact Number <span className="text-red-500">*</span>
          </Label>

          <Input
            id="custNumber"
            type="tel"
            placeholder="04XX XXX XXX"
            aria-invalid={!!errors.custNumber}
            {...register("custNumber", {
              required: "Your phone number is required",
              pattern: {
                value: /^[0-9+\s()-]{8,20}$/,
                message: "Enter a valid phone number",
              },
            })}
          />

          {errors.custNumber && (
            <p className="text-sm text-red-500">
              {errors.custNumber.message}
            </p>
          )}
        </div>
      </div>

      {/* Enquiry */}
      <div className="mt-6 space-y-2">
        <Label htmlFor="custInquiry" className="text-[#10294A]">
          How can we help? <span className="text-red-500">*</span>
        </Label>

        <Textarea
          id="custInquiry"
          placeholder="Tell us a little about the work you need done..."
          className="min-h-[160px] resize-none"
          aria-invalid={!!errors.custInquiry}
          {...register("custInquiry", {
            required: "You must provide a brief description of your enquiry",
          })}
        />

        {errors.custInquiry && (
          <p className="text-sm text-red-500">
            {errors.custInquiry.message}
          </p>
        )}
      </div>

      {submitError && (
        <p className="mt-4 text-sm text-red-500">
          {submitError}
        </p>
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="
          mt-7 h-12 rounded-full
          bg-[#F9C515] px-8
          font-bold text-[#10294A]
          hover:bg-[#e8b800]
          disabled:cursor-not-allowed disabled:opacity-60
        "
      >
        {isSubmitting ? "Sending..." : "Send Enquiry"}

        {!isSubmitting && (
          <ArrowRight className="ml-2 h-4 w-4" />
        )}
      </Button>
    </form>
  )
};
