import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { Product } from '@/data/products'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <Image src={product.image} alt={product.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
        <span className="absolute top-3 right-3 bg-[#0047AB] text-white text-xs px-2 py-1 rounded-full">{product.category}</span>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-[#0047AB] mb-1">{product.name}</h3>
        <p className="text-sm text-gray-500 mb-2 font-medium">{product.tagline}</p>
        <p className="text-gray-600 text-sm mb-4 flex-1 line-clamp-2">{product.description}</p>
        <div className="flex gap-2 mt-auto">
          <Link href={`/products/${product.slug}`} className="btn-primary text-sm py-2 px-4 flex items-center gap-1">
            Details <ArrowRight size={14} />
          </Link>
          <Link href={`/contact?product=${product.name}`} className="btn-outline text-sm py-2 px-4">
            Quote
          </Link>
        </div>
      </div>
    </div>
  )
}
