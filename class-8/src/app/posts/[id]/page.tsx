
import type { Metadata } from "next";
import Link from "next/link";

type Props = {
  params: { id: string };
};

// Simulate fetching data
const getPost = (id: string) => {
    return {
        id,
        title: \`Article Title for Post \${id}\`,
        content: \`This is the amazing content for post number \${id}. It is very interesting and good for SEO.\`
    }
}

// Dynamic Metadata Function
export async function generateMetadata(
  { params }: Props
): Promise<Metadata> {
  // read route params
  const id = (await params).id;
  
  // fetch data
  const post = getPost(id);
 
  return {
    title: post.title,
    description: post.content.substring(0, 50) + "...",
  }
}

export default async function PostPage({ params }: Props) {
    const { id } = await params;
    const post = getPost(id);

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <div className="p-2 bg-yellow-100 text-yellow-800 rounded inline-block">
          Browser Tab Title: <strong>{post.title} | Class 8 App</strong>
      </div>
      <p className="text-lg leading-relaxed">{post.content}</p>
      
      <div className="pt-8 border-t dark:border-zinc-800">
          <Link href="/" className="text-blue-500 hover:underline">&larr; Back Home</Link>
      </div>
    </div>
  );
}
