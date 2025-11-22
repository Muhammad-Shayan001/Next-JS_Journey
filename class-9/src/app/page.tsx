
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 gap-8 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-bold">Class 9: Data Fetching</h1>
      <p className="text-xl text-center max-w-2xl">
        In this class, we learn how to fetch data in Next.js using both Server Components and Client Components.
      </p>
      
      <div className="flex gap-4">
        <Link 
          href="/server-data-fetch"
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
        >
          Server Side Fetching
        </Link>
        <Link 
          href="/client-data-fetch"
          className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
        >
          Client Side Fetching
        </Link>
      </div>
    </div>
  );
}
