import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import { industries } from '@/data/content'

export const metadata: Metadata = {
  title: 'Applications',
  description: 'J.N. Chemicals products serve healthcare, pharma, food industry, industrial cleaning, and commercial spaces.',
}

export default function ApplicationsPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-[#0047AB] to-[#1E90FF] pt-32 pb-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Industry Applications</h1>
          <p className="text-blue-100 text-xl max-w-2xl">Our products serve diverse industries with specialized formulations for every need.</p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {industries.map((industry, i) => (
            <div key={industry.name} className={`grid md:grid-cols-2 gap-10 items-center bg-white rounded-2xl p-8 shadow-sm border border-gray-100 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                <div className="text-5xl mb-4">{industry.icon}</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">{industry.name}</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">{industry.description}</p>
                <div className="mb-6">
                  <h4 className="font-semibold text-sm text-gray-500 uppercase tracking-wide mb-3">Key Benefits</h4>
                  <ul className="space-y-2">
                    {industry.benefits.map(b => (
                      <li key={b} className="flex items-center gap-2 text-gray-700 text-sm">
                        <CheckCircle size={16} className="text-[#27AE60] shrink-0" /> {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href="/contact" className="btn-primary text-sm py-2 px-5">Get Industry Quote</Link>
              </div>
              <div className={i % 2 === 1 ? 'md:order-1' : ''}>
                <h4 className="font-semibold text-sm text-gray-500 uppercase tracking-wide mb-4">Recommended Products</h4>
                <div className="grid grid-cols-2 gap-3">
                  {industry.products.map(p => (
                    <Link
                      key={p}
                      href={`/products/${p.toLowerCase()}`}
                      className="bg-[#0047AB] text-white rounded-xl p-4 text-center font-bold hover:bg-blue-900 transition-colors"
                    >
                      {p}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-[#0047AB] text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Don't See Your Industry?</h2>
          <p className="text-blue-200 mb-8">We offer custom formulations for specialized requirements. Contact us to discuss your needs.</p>
          <Link href="/contact" className="bg-white text-[#0047AB] px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block">
            Contact Our Experts
          </Link>
        </div>
      </section>
    </>
  )
}
