import type { Metadata } from 'next'
import { CheckCircle } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about J.N. Chemicals – established in 1983 at Vatva GIDC, Ahmedabad. Our history, mission, and commitment to quality.',
}

const timeline = [
  { year: '1983', event: 'Founded at Vatva GIDC, Ahmedabad by visionary entrepreneurs committed to quality chemical manufacturing.' },
  { year: '1990', event: 'Expanded product line to include hospital-grade disinfectants, serving Ahmedabad\'s growing healthcare sector.' },
  { year: '2000', event: 'Achieved ISO certification and began supplying to pharmaceutical companies across Gujarat.' },
  { year: '2010', event: 'Launched HANDICIDE and ENVASEPTIC, becoming a preferred supplier for 500+ clients.' },
  { year: '2020', event: 'Scaled production during the pandemic, supplying critical disinfectants to hospitals and government bodies.' },
  { year: '2024', event: 'Serving 1000+ clients across India with 7 product lines and expanding to new markets.' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#0047AB] to-[#1E90FF] pt-32 pb-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About J.N. Chemicals</h1>
          <p className="text-blue-100 text-xl max-w-2xl">Four decades of excellence in chemical manufacturing, built on trust, quality, and innovation.</p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Story</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Founded in 1983 at Vatva GIDC, Ahmedabad – one of India's largest industrial estates – J.N. Chemicals began with a simple but powerful commitment: to manufacture chemical products of uncompromising quality.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Over four decades, we have grown from a small manufacturing unit to a trusted name serving 1000+ clients across healthcare, pharmaceutical, food processing, and industrial sectors.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our core philosophy remains unchanged: <strong>every product is tested before delivery</strong>. This commitment to quality has earned us long-term partnerships with leading hospitals, pharma companies, and industrial clients.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Year Founded', value: '1983' },
              { label: 'Products', value: '7+' },
              { label: 'Clients Served', value: '1000+' },
              { label: 'Years of Trust', value: '40+' },
            ].map(item => (
              <div key={item.label} className="bg-[#0047AB] text-white rounded-xl p-6 text-center">
                <div className="text-3xl font-bold mb-1">{item.value}</div>
                <div className="text-blue-200 text-sm">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold mb-4 text-[#0047AB]">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To manufacture and deliver premium-quality disinfectants and chemical solutions that protect health, ensure safety, and support industrial efficiency – with every product tested before it reaches our customers.
            </p>
          </div>
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <div className="text-4xl mb-4">🔭</div>
            <h3 className="text-2xl font-bold mb-4 text-[#27AE60]">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be India's most trusted chemical manufacturer, recognized for innovation, quality, and sustainability – expanding our reach to serve industries across the globe while maintaining our founding values.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              'Quality First – Every product tested before delivery',
              'Customer Trust – Long-term partnerships over short-term gains',
              'Innovation – Continuously improving formulations',
              'Safety – Products safe for users and the environment',
              'Reliability – Consistent supply and on-time delivery',
              'Integrity – Transparent business practices',
            ].map(v => (
              <div key={v} className="flex items-start gap-3 p-4 rounded-lg bg-gray-50">
                <CheckCircle size={20} className="text-[#27AE60] shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#0047AB]/20" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div key={item.year} className="flex gap-6 items-start">
                  <div className="relative z-10 w-16 h-16 bg-[#0047AB] text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                    {item.year}
                  </div>
                  <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex-1 mt-2">
                    <p className="text-gray-600">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0047AB] text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Partner With Us</h2>
          <p className="text-blue-200 mb-8">Join 1000+ satisfied clients who trust J.N. Chemicals for their hygiene and industrial needs.</p>
          <Link href="/contact" className="bg-white text-[#0047AB] px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  )
}
