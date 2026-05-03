import type { Metadata } from 'next'
import GalleryClient from './GalleryClient'

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Product gallery of J.N. Chemicals – Handwash, Disinfectant Solutions, Antiseptic Solutions, Povidone Iodine Surgical products.',
}

export default function GalleryPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-[#0047AB] to-[#1E90FF] pt-32 pb-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Product Gallery</h1>
          <p className="text-blue-100 text-xl max-w-2xl">Browse our complete range of hygiene and disinfection products across all categories.</p>
        </div>
      </section>
      <GalleryClient />
    </>
  )
}
