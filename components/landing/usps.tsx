import {
  Clock,
  Home,
  Users,
  MapPin,
  Star,
  TrendingUp,
} from "lucide-react"

interface USPsProps {
  variant: "sell" | "rent"
}

const sellUSPs = [
  {
    icon: TrendingUp,
    title: "40 years of market intelligence",
    description: "Trusted by sellers across UAE communities since 1986.",
  },
  {
    icon: Home,
    title: "250,000+ homes sold",
    description: "The most comprehensive track record of successful transactions in the market.",
  },
  {
    icon: Clock,
    title: "One transaction every 12 minutes",
    description: "Our high volume of deals gives us a live, accurate view of buyer behavior and pricing.",
  },
  {
    icon: Users,
    title: "100,000+ pre-qualified buyers",
    description: "Gain immediate access to an active database of investors and families actively searching to buy across the UAE.",
  },
  {
    icon: MapPin,
    title: "300+ community specialists",
    description: "Local experts who understand neighborhood-level pricing to sell your property faster.",
  },
  {
    icon: Star,
    title: "2,500+ five-star reviews",
    description: "Independent feedback from homeowners who trust our guidance and results.",
  },
]

const rentUSPs = [
  {
    icon: Users,
    title: "Unmatched tenant reach",
    description: "Immediate exposure to our database of 100,000+ qualified clients, including major corporate relocators.",
  },
  {
    icon: Clock,
    title: "One transaction every 12 minutes",
    description: "Our unparalleled frequency of deals means we match tenants to properties faster than anyone else.",
  },
  {
    icon: TrendingUp,
    title: "40 years of leasing authority",
    description: "Established in 1986, we have navigated every market cycle to protect our landlords' yields.",
  },
  {
    icon: MapPin,
    title: "300+ local leasing specialists",
    description: "On-the-ground experts who understand exactly what renters in your specific community are looking for.",
  },
  {
    icon: Home,
    title: "Comprehensive market data",
    description: "Over 250,000 transactions analyzed to ensure your property is priced perfectly for the current rental market.",
  },
  {
    icon: Star,
    title: "2,500+ five-star reviews",
    description: "Trusted by landlords across the UAE to manage and lease their investments securely.",
  },
]

export function USPs({ variant }: USPsProps) {
  const usps = variant === "sell" ? sellUSPs : rentUSPs

  return (
    <section className="mt-12">
      <h2 className="font-serif text-2xl font-semibold text-[#1F343F] mb-8">
        What Sets Us Apart
      </h2>
      <div className="flex flex-col gap-6">
        {usps.map((usp, index) => (
          <div key={index} className="flex gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-[#D9B9A0]/30 flex items-center justify-center">
              <usp.icon className="w-6 h-6 text-[#2C537A]" />
            </div>
            <div>
              <h3 className="font-semibold text-[#1F343F] mb-1">{usp.title}</h3>
              <p className="text-[#1F343F]/70 text-sm leading-relaxed">
                {usp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
