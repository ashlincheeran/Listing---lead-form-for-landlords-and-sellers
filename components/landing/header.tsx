import { Home } from "lucide-react"

export function Header() {
  return (
    <header className="bg-[#1F343F] text-white py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Home className="h-8 w-8" />
          <span className="font-serif text-2xl font-semibold tracking-tight">
            betterhomes
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#" className="hover:text-[#FF787A] transition-colors">
            Buy
          </a>
          <a href="#" className="hover:text-[#FF787A] transition-colors">
            Rent
          </a>
          <a href="#" className="hover:text-[#FF787A] transition-colors">
            Sell
          </a>
          <a href="#" className="hover:text-[#FF787A] transition-colors">
            About Us
          </a>
          <a href="#" className="hover:text-[#FF787A] transition-colors">
            Contact
          </a>
        </nav>
        <div className="text-sm text-white/80">
          <span className="hidden sm:inline">Trusted since </span>1986
        </div>
      </div>
    </header>
  )
}
