import { SkeletonPageHero, SkeletonCards, Skeleton } from '@/components/Skeleton'

export default function Loading() {
  return (
    <>
      <SkeletonPageHero />
      <section className="py-16 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Skeleton className="h-12 w-full max-w-md" />
            <div className="flex gap-2">
              {[...Array(5)].map((_, i) => <Skeleton key={i} className="h-10 w-24" />)}
            </div>
          </div>
          <SkeletonCards count={6} />
        </div>
      </section>
    </>
  )
}
