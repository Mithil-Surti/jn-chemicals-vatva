'use client'
import { useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'

interface GalleryItem {
  id: number
  src: string
  alt: string
  name: string
  category: string
  description: string
}

const galleryData: { category: string; icon: string; color: string; items: GalleryItem[] }[] = [
  {
    category: 'Handwash / Hand Scrub',
    icon: '🧴',
    color: '#27AE60',
    items: [
      {
        id: 1,
        src: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=400&h=520&fit=crop&q=80',
        alt: 'ALTIMATE Hand Scrub Bottle',
        name: 'ALTIMATE',
        category: 'Handwash / Hand Scrub',
        description: 'Chlorhexidine gluconate surgical scrub for pre-operative hand preparation',
      },
      {
        id: 2,
        src: 'https://images.unsplash.com/photo-1584483766114-2cea6facdf57?w=400&h=520&fit=crop&q=80',
        alt: 'HANDICIDE Hand Sanitizer Bottle',
        name: 'HANDICIDE',
        category: 'Handwash / Hand Scrub',
        description: 'WHO-formula instant hand sanitizer with moisturizing agents',
      },
      {
        id: 3,
        src: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=520&fit=crop&q=80',
        alt: 'MACIRRIUM Hand Scrub Bottle',
        name: 'MACIRRIUM',
        category: 'Handwash / Hand Scrub',
        description: 'Antiseptic hand scrub for clinical and industrial hygiene use',
      },
      {
        id: 4,
        src: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=520&fit=crop&q=80',
        alt: 'HEXI-SCRUB Bottle',
        name: 'HEXI-SCRUB',
        category: 'Handwash / Hand Scrub',
        description: 'Chlorhexidine gluconate 4% surgical hand scrub solution',
      },
      {
        id: 5,
        src: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=400&h=520&fit=crop&q=80',
        alt: 'SKIN PREP Bottle',
        name: 'SKIN PREP',
        category: 'Handwash / Hand Scrub',
        description: 'Pre-operative skin antiseptic preparation solution',
      },
      {
        id: 6,
        src: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=520&fit=crop&q=80',
        alt: 'CUTARUB Hand Rub Bottle',
        name: 'CUTARUB',
        category: 'Handwash / Hand Scrub',
        description: 'Alcohol-based waterless hand rub for hygienic hand disinfection',
      },
    ],
  },
  {
    category: 'Disinfectant Solutions',
    icon: '🧪',
    color: '#0047AB',
    items: [
      {
        id: 7,
        src: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=520&fit=crop&q=80',
        alt: 'ALCOCID Disinfectant Bottle',
        name: 'ALCOCID',
        category: 'Disinfectant Solutions',
        description: 'Advanced alcohol-based surface disinfectant, kills 99.9% pathogens',
      },
      {
        id: 8,
        src: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=520&fit=crop&q=80',
        alt: 'ALDINO Sterilant Bottle',
        name: 'ALDINO',
        category: 'Disinfectant Solutions',
        description: 'Glutaraldehyde-based high-level disinfectant for medical instruments',
      },
      {
        id: 9,
        src: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=520&fit=crop&q=80',
        alt: 'ENVABAC Disinfectant Bottle',
        name: 'ENVABAC',
        category: 'Disinfectant Solutions',
        description: 'Broad-spectrum bactericidal disinfectant for environmental surfaces',
      },
      {
        id: 10,
        src: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=520&fit=crop&q=80',
        alt: 'ENVASEPTIC Bottle',
        name: 'ENVASEPTIC',
        category: 'Disinfectant Solutions',
        description: 'Environmental surface disinfectant for hospitals and pharma cleanrooms',
      },
      {
        id: 11,
        src: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400&h=520&fit=crop&q=80',
        alt: 'ENZYCLIN-M Bottle',
        name: 'ENZYCLIN-M',
        category: 'Disinfectant Solutions',
        description: 'Enzymatic multi-surface cleaner and disinfectant for clinical use',
      },
      {
        id: 12,
        src: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=400&h=520&fit=crop&q=80',
        alt: 'REMDEX Disinfectant Bottle',
        name: 'REMDEX',
        category: 'Disinfectant Solutions',
        description: 'Ready-to-use disinfectant for rapid surface decontamination',
      },
      {
        id: 13,
        src: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=520&fit=crop&q=80',
        alt: 'STERISEPT Bottle',
        name: 'STERISEPT',
        category: 'Disinfectant Solutions',
        description: 'High-level disinfectant for critical and semi-critical medical devices',
      },
      {
        id: 14,
        src: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=400&h=520&fit=crop&q=80',
        alt: 'STERISCOPE Bottle',
        name: 'STERISCOPE',
        category: 'Disinfectant Solutions',
        description: 'OPA-based scope and instrument sterilant for endoscopy units',
      },
    ],
  },
  {
    category: 'Antiseptic Solutions',
    icon: '💉',
    color: '#1E90FF',
    items: [
      {
        id: 15,
        src: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&h=520&fit=crop&q=80',
        alt: 'CITALON Antiseptic Bottle',
        name: 'CITALON',
        category: 'Antiseptic Solutions',
        description: 'Cetrimide-based antiseptic solution for wound cleansing and skin antisepsis',
      },
      {
        id: 16,
        src: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=400&h=520&fit=crop&q=80',
        alt: 'HEXCITA Antiseptic Bottle',
        name: 'HEXCITA',
        category: 'Antiseptic Solutions',
        description: 'Chlorhexidine + Cetrimide combination antiseptic for broad-spectrum skin care',
      },
    ],
  },
  {
    category: 'Povidone Iodine Surgical Scrub With Emollients And Moisturizers',
    icon: '🏥',
    color: '#B8860B',
    items: [
      {
        id: 17,
        src: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=520&fit=crop&q=80',
        alt: 'JN-SAFE SCRUB Bottle',
        name: 'JN-SAFE SCRUB',
        category: 'Povidone Iodine Surgical Scrub With Emollients And Moisturizers',
        description: 'Povidone iodine surgical scrub with emollients for pre-operative hand preparation',
      },
      {
        id: 18,
        src: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=400&h=520&fit=crop&q=80',
        alt: 'JN SAFE-5 Bottle',
        name: 'JN SAFE-5',
        category: 'Povidone Iodine Surgical Scrub With Emollients And Moisturizers',
        description: 'Povidone iodine 5% surgical scrub with moisturizers for sensitive skin',
      },
      {
        id: 19,
        src: 'https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&h=520&fit=crop&q=80',
        alt: 'POVIDONE-IODINE SOLUTION I.P. Bottle',
        name: 'POVIDONE-IODINE SOLUTION I.P.',
        category: 'Povidone Iodine Surgical Scrub With Emollients And Moisturizers',
        description: 'Povidone Iodine Solution I.P. 10% w/v for surgical site antisepsis',
      },
    ],
  },
]

const allItems = galleryData.flatMap(g => g.items)
const filterTabs = ['All', ...galleryData.map(g => g.category)]

function ProductCard({ item, sectionColor, onClick }: { item: GalleryItem; sectionColor: string; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer bg-white border border-gray-200 hover:border-[#0047AB] hover:shadow-md transition-all duration-200 flex flex-col"
      style={{ '--hover-color': sectionColor } as React.CSSProperties}
    >
      {/* Image — white bg, object-contain, bottle centered */}
      <div className="bg-white flex items-center justify-center p-5 h-52 overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src={item.src}
            alt={item.alt}
            fill
            className="object-contain group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
          />
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-gray-200 group-hover:bg-[#0047AB] transition-colors duration-200" />

      {/* Name */}
      <div className="px-3 py-3 text-center">
        <p className="font-bold text-xs tracking-widest text-gray-800 uppercase leading-tight">{item.name}</p>
      </div>
    </div>
  )
}

export default function GalleryClient() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null)

  const filteredSections = activeFilter === 'All'
    ? galleryData
    : galleryData.filter(g => g.category === activeFilter)

  return (
    <section className="py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {filterTabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                activeFilter === tab
                  ? 'bg-[#0047AB] text-white shadow-md'
                  : 'bg-white border border-gray-300 text-gray-600 hover:border-[#0047AB] hover:text-[#0047AB]'
              }`}
            >
              {tab === 'All' ? `All Products (${allItems.length})` : tab}
            </button>
          ))}
        </div>

        {/* Sections */}
        <div className="space-y-16">
          {filteredSections.map(section => (
            <div key={section.category}>

              {/* Section Header */}
              <div className="flex items-center gap-3 mb-6">
                <span
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-xl shrink-0"
                  style={{ backgroundColor: section.color + '18' }}
                >
                  {section.icon}
                </span>
                <div>
                  <h2 className="text-base font-bold text-gray-900 uppercase tracking-wide leading-tight">
                    {section.category}
                  </h2>
                  <p className="text-xs text-gray-400 mt-0.5">{section.items.length} products</p>
                </div>
                <div className="flex-1 h-px bg-gray-200 ml-2" />
              </div>

              {/* Cards Grid — shared outer border, inner borders between cards */}
              <div
                className="grid gap-0 border border-gray-200"
                style={{
                  gridTemplateColumns: `repeat(${Math.min(section.items.length, 4)}, minmax(0, 1fr))`,
                }}
              >
                {section.items.map((item, idx) => {
                  const cols = Math.min(section.items.length, 4)
                  const isLastInRow = (idx + 1) % cols === 0
                  const isInLastRow = idx >= section.items.length - (section.items.length % cols || cols)
                  return (
                    <div
                      key={item.id}
                      className={[
                        !isLastInRow ? 'border-r border-gray-200' : '',
                        !isInLastRow ? 'border-b border-gray-200' : '',
                      ].join(' ')}
                    >
                      <ProductCard
                        item={item}
                        sectionColor={section.color}
                        onClick={() => setLightbox(item)}
                      />
                    </div>
                  )
                })}
              </div>

            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-[#0047AB] rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-2">Need a Specific Product?</h3>
          <p className="text-blue-200 mb-6">Contact us for bulk orders, custom formulations, or product samples.</p>
          <a href="/contact" className="bg-white text-[#0047AB] px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block">
            Request a Quote
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-5 right-5 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X size={24} />
          </button>

          <div
            className="bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col sm:flex-row max-w-xl w-full"
            onClick={e => e.stopPropagation()}
          >
            {/* Bottle image */}
            <div className="bg-gray-50 flex items-center justify-center p-8 sm:w-56 shrink-0 border-b sm:border-b-0 sm:border-r border-gray-100">
              <div className="relative w-32 h-44">
                <Image
                  src={lightbox.src}
                  alt={lightbox.alt}
                  fill
                  className="object-contain"
                  sizes="128px"
                />
              </div>
            </div>

            {/* Info */}
            <div className="p-6 flex flex-col justify-center">
              <p className="text-xs text-[#0047AB] font-bold uppercase tracking-widest mb-2">{lightbox.category}</p>
              <h3 className="text-xl font-bold text-gray-900 mb-3 uppercase tracking-wide">{lightbox.name}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">{lightbox.description}</p>
              <div className="flex gap-3">
                <a
                  href={`/contact?product=${lightbox.name}`}
                  className="flex-1 bg-[#0047AB] text-white px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-900 transition-colors text-center"
                >
                  Request Quote
                </a>
                <a
                  href="https://wa.me/917878108158"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-[#25D366] text-white px-4 py-2.5 rounded-lg text-sm font-semibold hover:bg-green-600 transition-colors text-center"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
