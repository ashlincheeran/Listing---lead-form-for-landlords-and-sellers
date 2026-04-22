import { Home } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#1F343F] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Home className="h-6 w-6" />
              <span className="font-serif text-xl font-semibold">betterhomes</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-md">
              Dubai&apos;s most trusted real estate experts since 1986. With 40 years of
              market intelligence and over 250,000 homes sold, we&apos;re committed to
              delivering exceptional results for every client.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="flex flex-col gap-2 text-sm text-white/70">
              <li>
                <a href="#" className="hover:text-[#FF787A] transition-colors">
                  List for Sale
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF787A] transition-colors">
                  List for Rent
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF787A] transition-colors">
                  Property Search
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF787A] transition-colors">
                  Market Reports
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="flex flex-col gap-2 text-sm text-white/70">
              <li>800 BETTER (238837)</li>
              <li>info@betterhomes.com</li>
              <li>Dubai, UAE</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} betterhomes. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
