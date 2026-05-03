import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, ArrowLeft, AlertTriangle, Package, FlaskConical, BookOpen, Beaker, Phone } from 'lucide-react'
import { products } from '@/data/products'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  return products.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const product = products.find(p => p.slug === slug)
  if (!product) return {}
  return {
    title: `${product.name} – ${product.tagline}`,
    description: product.description.slice(0, 160),
  }
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = products.find(p => p.slug === slug)
  if (!product) notFound()

  const related = products.filter(p => p.slug !== product.slug).slice(0, 3)

  return (
    <>
      {/* Breadcrumb + Hero */}
      <section className="bg-white pt-24 pb-0 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-400 py-4">
            <Link href="/" className="hover:text-[#0047AB]">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-[#0047AB]">Products</Link>
            <span>/</span>
            <span className="text-gray-700 font-medium">{product.name}</span>
          </div>
        </div>
      </section>

      {/* Product Hero */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">

            {/* Image */}
            <div className="sticky top-24">
              <div className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 flex items-center justify-center p-8 min-h-[420px]">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={480}
                  height={480}
                  className="object-contain max-h-96 w-auto drop-shadow-xl"
                />
              </div>
              {/* Category badge */}
              <div className="flex items-center gap-2 mt-4">
                <span className="bg-blue-50 text-[#0047AB] text-xs font-semibold px-3 py-1.5 rounded-full border border-blue-100">
                  {product.category}
                </span>
                <span className="text-xs text-gray-400">Every batch tested before delivery</span>
              </div>
            </div>

            {/* Core Info */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#0047AB] mb-2 tracking-tight">{product.name}</h1>
              <p className="text-gray-500 text-lg font-medium mb-5">{product.tagline}</p>
              <p className="text-gray-600 leading-relaxed mb-8 text-base">{product.description}</p>

              {/* Composition */}
              <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-8 flex gap-3">
                <FlaskConical size={20} className="text-[#0047AB] shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold text-[#0047AB] uppercase tracking-wide mb-1">Composition</p>
                  <p className="text-sm text-gray-700">{product.composition}</p>
                </div>
              </div>

              {/* Key Benefits */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <CheckCircle size={20} className="text-[#27AE60]" /> Key Benefits
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.benefits.map(b => (
                    <li key={b} className="flex items-start gap-2 text-sm text-gray-600 bg-gray-50 rounded-lg px-3 py-2.5">
                      <CheckCircle size={15} className="text-[#27AE60] shrink-0 mt-0.5" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Applications */}
              <div className="mb-8">
                <h2 className="text-lg font-bold text-gray-900 mb-4">Applications</h2>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map(a => (
                    <span key={a} className="bg-[#0047AB] text-white px-3 py-1.5 rounded-full text-xs font-medium">
                      {a}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href={`/contact?product=${product.name}`}
                  className="btn-primary flex items-center gap-2"
                >
                  Request Quote
                </Link>
                <a href="tel:+917878108158" className="btn-outline flex items-center gap-2">
                  <Phone size={16} /> Call Us
                </a>
                <a
                  href="https://wa.me/917878108158"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors text-sm"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Info Tabs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">

            {/* Directions for Use */}
            <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
              <h2 className="text-lg font-bold text-gray-900 mb-5 flex items-center gap-2">
                <BookOpen size={20} className="text-[#0047AB]" /> Directions for Use
              </h2>
              <ol className="space-y-3">
                {product.directions.map((step, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-600">
                    <span className="w-6 h-6 bg-[#0047AB] text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            {/* Packaging */}
            <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
              <h2 className="text-lg font-bold text-gray-900 mb-5 flex items-center gap-2">
                <Package size={20} className="text-[#0047AB]" /> Available Packaging
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {product.packaging.map(p => (
                  <div key={p} className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-3 border border-gray-100">
                    <Package size={16} className="text-[#0047AB] shrink-0" />
                    <span className="text-sm text-gray-700 font-medium">{p}</span>
                  </div>
                ))}
              </div>

              {/* Warnings */}
              <div className="mt-6">
                <h3 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <AlertTriangle size={16} className="text-amber-500" /> Precautions & Warnings
                </h3>
                <ul className="space-y-2">
                  {product.warnings.map(w => (
                    <li key={w} className="flex items-start gap-2 text-xs text-gray-500">
                      <AlertTriangle size={13} className="text-amber-400 shrink-0 mt-0.5" />
                      {w}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Technical Specifications — full width table */}
          <div className="mt-8 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-7 py-5 border-b border-gray-100 flex items-center gap-2">
              <Beaker size={20} className="text-[#0047AB]" />
              <h2 className="text-lg font-bold text-gray-900">Technical Specifications</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <tbody>
                  {product.specifications.map((spec, i) => (
                    <tr key={spec.label} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-7 py-3.5 text-sm font-semibold text-gray-700 w-1/3 border-r border-gray-100">
                        {spec.label}
                      </td>
                      <td className="px-7 py-3.5 text-sm text-gray-600">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance Banner */}
      <section className="py-10 bg-[#0047AB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white text-center md:text-left">
            <p className="text-blue-200 text-sm font-medium uppercase tracking-wide mb-1">Quality Assurance</p>
            <h3 className="text-xl font-bold">Every batch of {product.name} is tested before delivery</h3>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            {['WHO Compliant', 'ISO Certified', 'CDSCO Approved', 'Batch Tested'].map(badge => (
              <span key={badge} className="bg-white/15 border border-white/30 text-white text-xs font-semibold px-4 py-2 rounded-full flex items-center gap-1.5">
                <CheckCircle size={13} /> {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Other Products</h2>
            <Link href="/products" className="text-[#0047AB] text-sm font-medium hover:underline flex items-center gap-1">
              View All <ArrowLeft size={14} className="rotate-180" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {related.map(p => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="group flex flex-col bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="bg-white flex items-center justify-center p-6 h-44 border-b border-gray-100">
                  <Image
                    src={p.image}
                    alt={p.name}
                    width={160}
                    height={160}
                    className="object-contain h-32 w-auto group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <span className="text-xs text-[#0047AB] font-semibold uppercase tracking-wide">{p.category}</span>
                  <h3 className="font-bold text-gray-900 mt-1">{p.name}</h3>
                  <p className="text-xs text-gray-500 mt-1">{p.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
