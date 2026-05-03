import type { Metadata } from 'next'
import ProductsClient from './ProductsClient'

export const metadata: Metadata = {
  title: 'Products',
  description: 'Explore J.N. Chemicals complete product range — Handwash, Disinfectants, Antiseptics, Povidone Iodine. Every product tested before delivery.',
}

export default function ProductsPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-[#0047AB] to-[#1E90FF] pt-32 pb-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-blue-100 text-xl max-w-2xl">
            19 industry-leading formulations across 4 categories. Every product tested before delivery.
          </p>
        </div>
      </section>
      <ProductsClient />
    </>
  )
}
