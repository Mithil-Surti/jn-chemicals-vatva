import { SkeletonHero, SkeletonCards, Skeleton } from '@/components/Skeleton'

export default function Loading() {
  return (
    <>
      <SkeletonHero />

      {/* Stats */}
      <section className="bg-white py-16 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="space-y-2">
              <Skeleton className="h-10 w-20 mx-auto" />
              <Skeleton className="h-4 w-24 mx-auto" />
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Skeleton className="h-10 w-72 mx-auto mb-4" />
          <Skeleton className="h-5 w-96 mx-auto mb-10" />
          <SkeletonCards count={6} />
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Skeleton className="h-10 w-64 mx-auto mb-4" />
          <Skeleton className="h-5 w-80 mx-auto mb-12" />
          <SkeletonCards count={3} />
        </div>
      </section>
    </>
  )
}
