import { SkeletonPageHero, Skeleton } from '@/components/Skeleton'

export default function Loading() {
  return (
    <>
      <SkeletonPageHero />
      <section className="py-16 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-12">
            {[...Array(5)].map((_, i) => <Skeleton key={i} className="h-9 w-28 rounded-full" />)}
          </div>

          {/* Sections */}
          <div className="space-y-16">
            {[...Array(2)].map((_, s) => (
              <div key={s}>
                <div className="flex items-center gap-3 mb-6">
                  <Skeleton className="w-10 h-10 rounded-lg shrink-0" />
                  <Skeleton className="h-5 w-56" />
                  <div className="flex-1 h-px bg-gray-200 ml-2" />
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-0 border border-gray-200">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="border-r border-b border-gray-200 last:border-r-0">
                      <Skeleton className="h-52 rounded-none" />
                      <div className="px-3 py-3">
                        <Skeleton className="h-4 w-20 mx-auto" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
