
"use client"; // Marks this as a Client Component

import React, { useEffect, useState } from 'react';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export default function ClientFetchingPage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTodos() {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/todos');
        const data = await res.json();
        setTodos(data);
      } catch (error) {
        console.error("Failed to fetch todos", error);
      } finally {
        setLoading(false);
      }
    }

    fetchTodos();
  }, []);

  if (loading) return <div className="p-10">Loading...</div>;

  return (
    <div className="p-10 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold mb-6">Client Side Data Fetching</h1>
      <p className="mb-4 text-gray-500">
        This data was fetched on the client using `useEffect`.
        Useful for user-specific data or updates after interaction.
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
