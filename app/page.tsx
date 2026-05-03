import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle, Award, Truck, ChevronRight } from 'lucide-react'
import { products } from '@/data/products'
import { stats, testimonials } from '@/data/content'
import ProductCard from '@/components/ProductCard'

const LOGO = '/images/Screenshot 2026-05-03 151733.png'

export default function HomePage() {
  const featured = products.slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#0047AB] via-[#003d99] to-[#002d73] pt-16">
        <div className="absolute inset-0 opacity-10 bg-[url('https://placehold.co/1920x1080/ffffff/ffffff?text=')] bg-cover" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <span className="inline-block bg-white/20 text-white text-sm px-4 py-1.5 rounded-full mb-6 font-medium">
              Trusted Since 1983 · Vatva GIDC, Ahmedabad
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Premium Disinfectant & Chemical Solutions Since 1983
            </h1>
            <p className="text-blue-100 text-lg mb-8 leading-relaxed">
              Every product rigorously tested before delivery. Trusted by 1000+ clients across healthcare, pharma, food, and industrial sectors.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/products" className="bg-white text-[#0047AB] px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Explore Products
              </Link>
              <Link href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#0047AB] transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="hidden md:grid grid-cols-2 gap-4">
            {products.slice(0, 4).map(p => (
              <div key={p.slug} className="bg-white/10 backdrop-blur rounded-xl p-4 border border-white/20 hover:bg-white/20 transition-colors">
                <div className="text-2xl mb-2">🧪</div>
                <div className="text-white font-bold">{p.name}</div>
                <div className="text-blue-200 text-xs mt-1">{p.tagline}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-16 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map(s => (
            <div key={s.label}>
              <div className="text-4xl font-bold text-[#0047AB] mb-2">{s.value}</div>
              <div className="text-gray-500 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title">Why Choose J.N. Chemicals?</h2>
          <p className="section-subtitle">Four decades of expertise, quality, and trust in chemical manufacturing.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Image src={LOGO} alt="logo" width={32} height={32} className="object-contain mix-blend-multiply" />, title: '100% Quality Tested', desc: 'Every batch undergoes rigorous quality testing before leaving our facility.' },
              { icon: <Award size={32} className="text-[#27AE60]" />, title: '40+ Years Experience', desc: 'Established in 1983, we bring decades of expertise to every product we manufacture.' },
              { icon: <Truck size={32} className="text-[#1E90FF]" />, title: 'Reliable Supply Chain', desc: 'Consistent supply with on-time delivery to clients across India.' },
              { icon: <CheckCircle size={32} className="text-[#0047AB]" />, title: 'WHO Compliant', desc: 'Formulations aligned with WHO and international safety standards.' },
              { icon: <CheckCircle size={32} className="text-[#27AE60]" />, title: 'Custom Formulations', desc: 'Tailored chemical solutions to meet your specific industry requirements.' },
              { icon: <CheckCircle size={32} className="text-[#1E90FF]" />, title: 'Expert Support', desc: 'Technical support and guidance from our experienced team of chemists.' },
            ].map(item => (
              <div key={item.title} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-left hover:shadow-md transition-shadow">
                <div className="mb-4">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">Featured Products</h2>
            <p className="section-subtitle">Industry-leading formulations trusted by healthcare, pharma, and industrial clients.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featured.map(p => <ProductCard key={p.slug} product={p} />)}
          </div>
          <div className="text-center mt-10">
            <Link href="/products" className="btn-primary inline-flex items-center gap-2">
              View All Products <ChevronRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#0047AB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-blue-200 text-lg">Trusted by leading organizations across India</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map(t => (
              <div key={t.name} className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
                <p className="text-blue-100 mb-4 leading-relaxed">"{t.text}"</p>
                <div>
                  <div className="text-white font-semibold">{t.name}</div>
                  <div className="text-blue-300 text-sm">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="section-title">Ready to Elevate Your Hygiene Standards?</h2>
          <p className="section-subtitle">Get in touch for bulk pricing, custom formulations, or product samples.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">Request a Quote</Link>
            <a href="tel:+917878108158" className="btn-outline">Call +91 78781 08158</a>
          </div>
        </div>
      </section>
    </>
  )
}
