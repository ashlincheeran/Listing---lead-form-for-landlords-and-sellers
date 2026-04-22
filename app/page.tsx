"use client"

import { useState } from "react"
import { Header } from "@/components/landing/header"
import { LeadForm } from "@/components/landing/lead-form"
import { USPs } from "@/components/landing/usps"
import { FAQ } from "@/components/landing/faq"
import { Footer } from "@/components/landing/footer"

export default function LandingPage() {
  const [variant, setVariant] = useState<"sell" | "rent">("sell")

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Tab Navigation */}
      <div className="bg-[#2C537A]">
        <div className="max-w-7xl mx-auto">
          <div className="flex">
            <button
              onClick={() => setVariant("sell")}
              className={`px-8 py-4 font-semibold text-sm uppercase tracking-wide transition-colors ${
                variant === "sell"
                  ? "bg-background text-[#1F343F]"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              Sell Your Property
            </button>
            <button
              onClick={() => setVariant("rent")}
              className={`px-8 py-4 font-semibold text-sm uppercase tracking-wide transition-colors ${
                variant === "rent"
                  ? "bg-background text-[#1F343F]"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              Rent Your Property
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left Column - Content */}
          <div className="lg:w-[60%]">
            {/* Hero Section */}
            <section>
              <h1 className="font-serif text-4xl lg:text-5xl font-semibold text-[#1F343F] leading-tight text-balance">
                {variant === "sell"
                  ? "List Your Property for Sale with Dubai's Most Trusted Experts"
                  : "Find a Tenant Fast: List Your Property for Rent"}
              </h1>
              <p className="mt-6 text-lg text-[#1F343F]/80 leading-relaxed">
                {variant === "sell" ? (
                  <>
                    Ready to sell your property? Get the true market value and connect
                    with qualified buyers instantly. With 40 years of market intelligence
                    and a transaction completed every 12 minutes, we don&apos;t just list
                    your property for sale—we sell it. betterhomes combines deep data
                    with dedicated community specialists who know exactly how to position
                    your home to maximize your return.
                  </>
                ) : (
                  <>
                    Looking to lease my property without the hassle? Secure reliable,
                    pre-qualified tenants quickly with betterhomes. Leveraging 40 years
                    of market leadership and an active database of corporate relocators
                    and residents, we ensure your investment yields maximum returns with
                    minimum vacancy periods.
                  </>
                )}
              </p>
            </section>

            {/* Subheadline */}
            <p className="mt-8 text-lg font-semibold text-[#2C537A]">
              {variant === "sell"
                ? "Why Sellers Choose betterhomes"
                : "The Smart Way to Lease Your Property"}
            </p>

            {/* USPs */}
            <USPs variant={variant} />

            {/* FAQ */}
            <FAQ variant={variant} />
          </div>

          {/* Right Column - Sticky Form */}
          <div className="lg:w-[40%]">
            <div className="lg:sticky lg:top-8">
              <LeadForm variant={variant} />

              {/* Trust Badges */}
              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                <div className="bg-white/50 border border-[#D9B9A0] p-4">
                  <p className="text-2xl font-serif font-bold text-[#1F343F]">40+</p>
                  <p className="text-xs text-[#1F343F]/60 mt-1">Years Experience</p>
                </div>
                <div className="bg-white/50 border border-[#D9B9A0] p-4">
                  <p className="text-2xl font-serif font-bold text-[#1F343F]">250K+</p>
                  <p className="text-xs text-[#1F343F]/60 mt-1">Homes Sold</p>
                </div>
                <div className="bg-white/50 border border-[#D9B9A0] p-4">
                  <p className="text-2xl font-serif font-bold text-[#1F343F]">5★</p>
                  <p className="text-xs text-[#1F343F]/60 mt-1">2,500+ Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
