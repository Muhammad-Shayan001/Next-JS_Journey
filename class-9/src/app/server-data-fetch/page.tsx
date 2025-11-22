
import React from 'react';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export default async function ServerFetchingPage() {
  // This fetch runs on the server.
  // The result is rendered to HTML sent to the client.
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const todos: Todo[] = await res.json();

  return (
    <div className="p-10 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold mb-6">Server Side Data Fetching</h1>
      <p className="mb-4 text-gray-500">
        This data was fetched on the server using `async/await` in a Server Component.
        SEO friendly and no client-side waterfall.
      </p>

      <ul className="grid gap-4">
        {todos.slice(0, 10).map((todo) => (
          <li key={todo.id} className="p-4 border rounded shadow-sm">
            <span className={todo.completed ? "line-through text-gray-400" : ""}>
              {todo.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
