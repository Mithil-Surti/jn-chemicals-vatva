import { SkeletonPageHero, Skeleton } from '@/components/Skeleton'

export default function Loading() {
  return (
    <>
      <SkeletonPageHero />
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 grid md:grid-cols-2 gap-10">
              <div className="space-y-3">
                <Skeleton className="h-12 w-12 rounded-lg" />
                <Skeleton className="h-8 w-56" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <div className="space-y-2 pt-2">
                  {[...Array(3)].map((_, j) => <Skeleton key={j} className="h-4 w-3/4" />)}
                </div>
                <Skeleton className="h-10 w-36 mt-4" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[...Array(4)].map((_, j) => <Skeleton key={j} className="h-16 rounded-xl" />)}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
