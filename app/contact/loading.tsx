import { SkeletonPageHero, Skeleton } from '@/components/Skeleton'

export default function Loading() {
  return (
    <>
      <SkeletonPageHero />
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-6">
            <Skeleton className="h-8 w-48 mb-8" />
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex gap-4 items-start">
                <Skeleton className="w-12 h-12 rounded-xl shrink-0" />
                <div className="space-y-2 flex-1">
                  <Skeleton className="h-5 w-32" />
                  <Skeleton className="h-4 w-48" />
                </div>
              </div>
            ))}
            <Skeleton className="h-12 w-48 rounded-xl mt-4" />
            <Skeleton className="h-64 w-full rounded-xl mt-8" />
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-8 space-y-4">
            <Skeleton className="h-8 w-56 mb-2" />
            <Skeleton className="h-4 w-40 mb-8" />
            {[...Array(4)].map((_, i) => (
              <div key={i} className="space-y-1">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-12 w-full" />
              </div>
            ))}
            <Skeleton className="h-32 w-full" />
            <Skeleton className="h-12 w-full mt-4" />
          </div>
        </div>
      </section>
    </>
  )
}
