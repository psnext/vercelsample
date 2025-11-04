"use client";

import { useEffect, useState } from "react";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-none text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Welcome to Agentic World
          </h1>
          <LiveClock />
        </div>
      </main>
    </div>
  );
}

function LiveClock() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    // Initialize immediately on client to avoid hydration mismatches
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!now) {
    return (
      <div className="text-zinc-600 dark:text-zinc-400" aria-live="polite" role="timer">
        Loading current time...
      </div>
    );
  }

  const date = new Intl.DateTimeFormat(undefined, { dateStyle: "full" }).format(now);
  const time = new Intl.DateTimeFormat(undefined, { timeStyle: "medium" }).format(now);

  return (
    <div className="flex flex-col items-center gap-1 sm:items-start" aria-live="polite" role="timer">
      <div className="text-sm uppercase tracking-wide text-zinc-500 dark:text-zinc-400">Current Date</div>
      <time
        className="font-medium text-zinc-800 dark:text-zinc-200"
        dateTime={now.toISOString()}
        suppressHydrationWarning
      >
        {date}
      </time>
      <div className="text-sm mt-4 uppercase tracking-wide text-zinc-500 dark:text-zinc-400">Current Time</div>
      <time
        className="font-mono text-lg text-zinc-800 dark:text-zinc-200"
        dateTime={now.toISOString()}
        suppressHydrationWarning
      >
        {time}
      </time>
    </div>
  );
}
