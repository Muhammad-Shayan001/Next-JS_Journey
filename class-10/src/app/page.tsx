
import Link from "next/link";
import { cookies } from "next/headers";

export default async function Home() {
    const cookieStore = await cookies();
    const hasToken = cookieStore.has('auth_token');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 gap-8 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-4xl font-bold">Class 10: Middleware & Auth Logic</h1>
      <p className="text-xl text-center max-w-2xl">
        In this class, we use Middleware to protect the <code>/dashboard</code> route.
        Try accessing the dashboard without logging in!
      </p>

      <div className="p-4 bg-gray-100 dark:bg-zinc-800 rounded">
          Status: {hasToken ? <span className="text-green-500 font-bold">Logged In</span> : <span className="text-red-500 font-bold">Logged Out</span>}
      </div>
      
      <div className="flex gap-4">
        <Link 
          href="/dashboard"
          className="rounded-full bg-foreground text-background flex items-center justify-center h-12 px-6 hover:opacity-90"
        >
          Go to Dashboard (Protected)
        </Link>
        <Link 
          href="/login"
          className="rounded-full border border-gray-300 flex items-center justify-center h-12 px-6 hover:bg-gray-50 dark:hover:bg-zinc-800"
        >
          Go to Login
        </Link>
      </div>
    </div>
  );
}
