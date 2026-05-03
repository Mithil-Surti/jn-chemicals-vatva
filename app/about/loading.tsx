import { SkeletonPageHero, Skeleton } from '@/components/Skeleton'

export default function Loading() {
  return (
    <>
      <SkeletonPageHero />

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-3">
            <Skeleton className="h-9 w-48 mb-6" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-full mt-4" />
            <Skeleton className="h-4 w-4/5" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[...Array(4)].map((_, i) => <Skeleton key={i} className="h-28 rounded-xl" />)}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="bg-white rounded-xl p-8 space-y-3">
              <Skeleton className="h-10 w-10 rounded-lg" />
              <Skeleton className="h-7 w-40" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-4/5" />
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Skeleton className="h-9 w-48 mx-auto mb-12" />
          <div className="space-y-8">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="flex gap-6 items-start">
                <Skeleton className="w-16 h-16 rounded-full shrink-0" />
                <Skeleton className="h-20 flex-1 rounded-xl" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
