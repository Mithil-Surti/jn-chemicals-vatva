export function Skeleton({ className = '' }: { className?: string }) {
  return <div className={`animate-pulse bg-gray-200 rounded-lg ${className}`} />
}

export function SkeletonHero() {
  return (
    <section className="bg-gradient-to-br from-[#0047AB] via-[#003d99] to-[#002d73] min-h-screen pt-16 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid md:grid-cols-2 gap-12 w-full">
        <div className="space-y-4">
          <div className="animate-pulse bg-white/20 rounded-full h-8 w-64" />
          <div className="animate-pulse bg-white/20 rounded-lg h-14 w-full" />
          <div className="animate-pulse bg-white/20 rounded-lg h-14 w-4/5" />
          <div className="animate-pulse bg-white/20 rounded-lg h-6 w-full" />
          <div className="animate-pulse bg-white/20 rounded-lg h-6 w-3/4" />
          <div className="flex gap-4 pt-2">
            <div className="animate-pulse bg-white/30 rounded-lg h-12 w-40" />
            <div className="animate-pulse bg-white/20 rounded-lg h-12 w-36" />
          </div>
        </div>
        <div className="hidden md:grid grid-cols-2 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="animate-pulse bg-white/10 rounded-xl h-28" />
          ))}
        </div>
      </div>
    </section>
  )
}

export function SkeletonPageHero({ dark = false }: { dark?: boolean }) {
  return (
    <section className="bg-gradient-to-r from-[#0047AB] to-[#1E90FF] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="animate-pulse bg-white/30 rounded-lg h-12 w-72" />
        <div className="animate-pulse bg-white/20 rounded-lg h-6 w-96 max-w-full" />
      </div>
    </section>
  )
}

export function SkeletonCards({ count = 3, cols = 3 }: { count?: number; cols?: number }) {
  return (
    <div className={`grid gap-8 ${cols === 2 ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
      {[...Array(count)].map((_, i) => (
        <div key={i} className="bg-white rounded-xl border border-gray-100 overflow-hidden">
          <Skeleton className="h-48 rounded-none" />
          <div className="p-5 space-y-3">
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <div className="flex gap-2 pt-2">
              <Skeleton className="h-10 w-24" />
              <Skeleton className="h-10 w-20" />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export function SkeletonNavbar() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Skeleton className="w-10 h-10 rounded-full" />
            <Skeleton className="h-6 w-32" />
          </div>
          <div className="hidden md:flex items-center gap-6">
            {[...Array(6)].map((_, i) => <Skeleton key={i} className="h-4 w-16" />)}
            <Skeleton className="h-9 w-24 rounded-lg" />
          </div>
        </div>
      </div>
    </header>
  )
}
