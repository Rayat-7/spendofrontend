import Link from "next/link"
import { Twitter, Instagram, Linkedin, Github } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-100 pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold bg-gradient-to-r from-black to-slate-700 bg-clip-text text-transparent">
                Spendo
              </span>
            </Link>
            <p className="text-slate-600 max-w-xs">
              Simplifying personal finance management with intuitive tools and actionable insights.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-600 hover:text-black transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-600 hover:text-black transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-600 hover:text-black transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-600 hover:text-black transition-colors" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product Column */}
          <div>
            <h3 className="font-bold text-lg mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-slate-600 hover:text-black transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-600 hover:text-black transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-600 hover:text-black transition-colors">
                  Integrations
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-600 hover:text-black transition-colors">
                  Changelog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-600 hover:text-black transition-colors">
                  Roadmap
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-slate-600 hover:text-black transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-600 hover:text-black transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-600 hover:text-black transition-colors">
                  Guides
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-600 hover:text-black transition-colors">
                  API Docs
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-600 hover:text-black transition-colors">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-slate-600 hover:text-black transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-600 hover:text-black transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-600 hover:text-black transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-600 hover:text-black transition-colors">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="#" className="text-slate-600 hover:text-black transition-colors">
                  Press
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-slate-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Spendo. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="#" className="text-slate-600 hover:text-black transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-slate-600 hover:text-black transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-slate-600 hover:text-black transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

