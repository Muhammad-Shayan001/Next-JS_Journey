
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "This is the about page explanation for SEO class.",
};

export default function About() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">About Page</h1>
      <p>
        Check the browser tab! It should say <strong>"About Us | Class 8 App"</strong>.
      </p>
      <p>
        This was achieved using a simple export in the page file:
      </p>
      <pre className="bg-gray-100 dark:bg-zinc-900 p-4 rounded overflow-auto text-sm">
        {`export const metadata: Metadata = {
  title: "About Us",
  description: "...",
};`}
      </pre>
    </div>
  );
}
