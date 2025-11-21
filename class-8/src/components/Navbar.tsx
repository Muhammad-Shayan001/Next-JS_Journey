
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="border-b p-4 mb-4 dark:border-zinc-800 flex justify-between items-center">
      <Link href="/" className="font-bold text-xl">Class 8 (SEO)</Link>
      <div className="flex gap-4">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/about" className="hover:underline">About (Static)</Link>
        <Link href="/posts/1" className="hover:underline">Post 1 (Dynamic)</Link>
        <Link href="/posts/2" className="hover:underline">Post 2 (Dynamic)</Link>
      </div>
    </nav>
  );
}
