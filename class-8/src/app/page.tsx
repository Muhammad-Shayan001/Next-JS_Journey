
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Class 8: Metadata & SEO</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300">
        In this class, we learn how to optimize our application for Search Engines and Social Media sharing.
        Next.js makes this easy with the Metadata API.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-8">
        <div className="border p-6 rounded-lg dark:border-zinc-800">
            <h2 className="text-2xl font-bold mb-2">Static Metadata</h2>
            <p className="mb-4">
                Used for pages where the title and description are constant (like an About page).
            </p>
            <Link href="/about" className="text-blue-600 dark:text-blue-400 hover:underline">
                Visit About Page &rarr;
            </Link>
        </div>

        <div className="border p-6 rounded-lg dark:border-zinc-800">
            <h2 className="text-2xl font-bold mb-2">Dynamic Metadata</h2>
            <p className="mb-4">
                Used when the title depends on data, like a blog post title or product name.
            </p>
            <Link href="/posts/1" className="text-blue-600 dark:text-blue-400 hover:underline">
                Visit Post 1 &rarr;
            </Link>
        </div>
      </div>

      <div className="bg-zinc-100 dark:bg-zinc-900 p-4 rounded text-sm">
          <strong>Tip:</strong> Look at the browser tab title as you navigate!
      </div>
    </div>
  );
}
