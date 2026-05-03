import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin } from 'lucide-react'

const LOGO = '/images/Screenshot 2026-05-03 151733.png'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Image src={LOGO} alt="J.N. Chemicals Logo" width={36} height={36} className="object-contain brightness-0 invert" />
            <span className="font-bold text-white text-lg">J.N. Chemicals</span>
          </div>
          <p className="text-sm leading-relaxed">Premium disinfectant & chemical solutions since 1983. Every product tested before delivery.</p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[['/', 'Home'], ['/about', 'About Us'], ['/products', 'Products'], ['/applications', 'Applications'], ['/contact', 'Contact']].map(([href, label]) => (
              <li key={href}><Link href={href} className="hover:text-[#1E90FF] transition-colors">{label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Products</h4>
          <ul className="space-y-2 text-sm">
            {['ALCOCID', 'ALDINO', 'ALTIMATE', 'HANDICIDE', 'ENVASEPTIC', 'MACIRRIUM', 'STERISCOPE'].map(p => (
              <li key={p}><Link href={`/products/${p.toLowerCase()}`} className="hover:text-[#1E90FF] transition-colors">{p}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2"><MapPin size={16} className="text-[#1E90FF] shrink-0 mt-0.5" /><span>Vatva GIDC, Ahmedabad, Gujarat 382445</span></li>
            <li className="flex gap-2"><Phone size={16} className="text-[#1E90FF] shrink-0" /><a href="tel:+917878108158" className="hover:text-[#1E90FF]">+91 78781 08158</a></li>
            <li className="flex gap-2"><Mail size={16} className="text-[#1E90FF] shrink-0" /><a href="mailto:info@jnchemicals.co.in" className="hover:text-[#1E90FF]">info@jnchemicals.co.in</a></li>
          </ul>
          <a
            href="https://wa.me/917878108158"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition-colors"
          >
            💬 WhatsApp Us
          </a>
        </div>
      </div>
      <div className="border-t border-gray-800 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} J.N. Chemicals. All rights reserved. | jnchemicals.co.in
      </div>
    </footer>
  )
}
