"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [now, setNow] = useState<string>("");

  useEffect(() => {
    const update = () => setNow(new Date().toLocaleString());
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black">
        <div className="flex flex-col items-center gap-3 text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
            Welcome to the Agent World!
          </h1>
          <h3 className="text-lg text-zinc-700 dark:text-zinc-300">{now}</h3>
        </div>
      </main>
    </div>
  );
}
