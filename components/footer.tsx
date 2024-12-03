import Link from "next/link"
import { Facebook, Linkedin, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Link href="/" className="text-2xl font-bold">
              ASTRA
            </Link>
            <div className="flex space-x-4">
              <Link href="https://twitter.com" className="hover:text-blue-400 transition-colors">
                <Twitter className="w-6 h-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="https://linkedin.com" className="hover:text-blue-600 transition-colors">
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://facebook.com" className="hover:text-blue-600 transition-colors">
                <Facebook className="w-6 h-6" />
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
          </div>
          <div>
            <p className="text-lg leading-relaxed">
              Astra is an alternative financing solution purpose-built for healthcare practices. We enable practice owners to rapidly and regularly access capital, without risk or debt, so they can maintain their practice autonomy and independently thrive.
            </p>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex space-x-8">
            <Link href="/privacy" className="hover:text-blue-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-blue-400 transition-colors">
              Terms of Service
            </Link>
          </div>
          <div className="text-sm text-gray-400">
            Copyright © {new Date().getFullYear()} Astra, Inc.
          </div>
        </div>
      </div>
    </footer>
  )
}

