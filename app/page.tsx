'use client'

import { useEffect, useState } from 'react'

export default function Home() {
  const [now, setNow] = useState<Date>(new Date())

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="relative min-h-dvh w-full overflow-hidden font-sans text-zinc-100">
      {/* Dark Veil background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(120%_120%_at_50%_0%,#0b0f19_0%,#0a0a0a_45%,#000000_100%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.35),rgba(0,0,0,0.8))]" />

      <main className="relative mx-auto flex min-h-dvh w-full max-w-3xl flex-col items-center justify-center gap-3 px-6 text-center sm:items-start sm:text-left">
        <h1 className="text-4xl font-bold tracking-tight">Welcome to Agents</h1>
        <h3 className="text-base text-zinc-300" aria-live="polite">
          {now.toLocaleString()}
        </h3>
      </main>
    </div>
  )
}
