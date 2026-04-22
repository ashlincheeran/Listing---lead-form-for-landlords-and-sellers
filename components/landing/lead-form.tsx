"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { MapPin } from "lucide-react"

interface LeadFormProps {
  variant: "sell" | "rent"
}

const propertyTypes = ["Apartment", "Villa", "Townhouse", "Penthouse", "Land", "Other"]
const bedroomOptions = ["Studio", "1", "2", "3", "4", "5", "6", "7", "8+"]

export function LeadForm({ variant }: LeadFormProps) {
  const [formData, setFormData] = useState({
    location: "",
    category: "residential" as "residential" | "commercial",
    propertyType: "",
    bedrooms: "",
    expectedPrice: "",
    name: "",
    email: "",
    phone: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const isSell = variant === "sell"

  return (
    <div className="bg-white border border-[#e5e5e5] shadow-xl">
      {/* Form Header */}
      <div className="bg-[#1F343F] px-6 py-4">
        <h3 className="font-serif text-xl font-semibold text-white">
          {isSell ? "List Your Property for Sale" : "List Your Property for Rent"}
        </h3>
        <p className="text-white/70 text-sm mt-1">
          Fill in your details and our experts will contact you shortly.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-5">
        {/* Location */}
        <div>
          <Label className="text-[#1F343F] text-sm font-medium">
            Location<span className="text-red-500">*</span>
          </Label>
          <div className="relative mt-1.5">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#888]" />
            <Input
              placeholder="Enter location, building or community"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="pl-10 border-[#e5e5e5] focus:border-[#2C537A] focus:ring-[#2C537A] rounded-md h-11"
              required
            />
          </div>
        </div>

        {/* Category & Type */}
        <div>
          <Label className="text-[#1F343F] text-sm font-medium">
            Category & Type<span className="text-red-500">*</span>
          </Label>
          <div className="mt-1.5 flex rounded-md border border-[#e5e5e5] overflow-hidden">
            <button
              type="button"
              onClick={() => setFormData({ ...formData, category: "residential" })}
              className={`flex-1 py-2.5 text-sm font-medium transition-colors ${
                formData.category === "residential"
                  ? "bg-[#0D9488] text-white"
                  : "bg-white text-[#1F343F] hover:bg-gray-50"
              }`}
            >
              Residential
            </button>
            <button
              type="button"
              onClick={() => setFormData({ ...formData, category: "commercial" })}
              className={`flex-1 py-2.5 text-sm font-medium transition-colors border-l border-[#e5e5e5] ${
                formData.category === "commercial"
                  ? "bg-[#0D9488] text-white"
                  : "bg-white text-[#1F343F] hover:bg-gray-50"
              }`}
            >
              Commercial
            </button>
          </div>
        </div>

        {/* Property Type Chips */}
        <div className="flex flex-wrap gap-2">
          {propertyTypes.map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setFormData({ ...formData, propertyType: type })}
              className={`px-4 py-2 text-sm border rounded-md transition-colors ${
                formData.propertyType === type
                  ? "border-[#0D9488] bg-[#0D9488]/10 text-[#0D9488]"
                  : "border-[#e5e5e5] text-[#666] hover:border-[#0D9488] hover:text-[#0D9488]"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Bedrooms */}
        <div>
          <Label className="text-[#1F343F] text-sm font-medium">
            Bedrooms<span className="text-red-500">*</span>
          </Label>
          <div className="mt-1.5 flex flex-wrap gap-2">
            {bedroomOptions.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setFormData({ ...formData, bedrooms: option })}
                className={`min-w-[40px] px-3 py-2 text-sm border rounded-full transition-colors ${
                  formData.bedrooms === option
                    ? "border-[#0D9488] bg-[#0D9488] text-white"
                    : "border-[#e5e5e5] text-[#666] hover:border-[#0D9488]"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Expected Price */}
        <div>
          <Label className="text-[#1F343F] text-sm font-medium">
            Expected Price (AED)<span className="text-red-500">*</span>
          </Label>
          <Input
            placeholder="Enter expected price"
            value={formData.expectedPrice}
            onChange={(e) => setFormData({ ...formData, expectedPrice: e.target.value })}
            className="mt-1.5 border-[#e5e5e5] focus:border-[#2C537A] focus:ring-[#2C537A] rounded-md h-11"
            required
          />
        </div>

        {/* Contact Details Card */}
        <div className="bg-[#f9f9f9] border border-[#e5e5e5] rounded-md p-4 flex flex-col gap-3">
          <Input
            placeholder="Name*"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="border-[#e5e5e5] focus:border-[#2C537A] focus:ring-[#2C537A] rounded-md h-11 bg-white"
            required
          />
          <Input
            type="email"
            placeholder="Email (optional)"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="border-[#e5e5e5] focus:border-[#2C537A] focus:ring-[#2C537A] rounded-md h-11 bg-white"
          />
          <div className="flex items-center border border-[#e5e5e5] rounded-md bg-white overflow-hidden">
            <div className="flex items-center gap-2 px-3 border-r border-[#e5e5e5] bg-white">
              <span className="text-lg">🇦🇪</span>
              <span className="text-sm text-[#666]">+971</span>
            </div>
            <Input
              type="tel"
              placeholder=""
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="border-0 focus:ring-0 h-11 rounded-none"
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full bg-[#0D9488] hover:bg-[#0D9488]/90 text-white font-semibold py-6 rounded-md text-base"
        >
          Submit
        </Button>

        {/* Terms */}
        <p className="text-xs text-[#888] leading-relaxed">
          By submitting, you agree to betterhomes&apos;{" "}
          <a href="#" className="text-[#0D9488] hover:underline">Terms</a> &{" "}
          <a href="#" className="text-[#0D9488] hover:underline">Privacy Policy</a>.
          <br />
          This site is protected by reCAPTCHA and the Google{" "}
          <a href="#" className="text-[#0D9488] hover:underline">Privacy Policy</a> and{" "}
          <a href="#" className="text-[#0D9488] hover:underline">Terms of Service</a> apply.
        </p>
      </form>
    </div>
  )
}
