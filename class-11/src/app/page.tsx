
import { deleteTodo, getTodos } from "../actions/todo-actions";
import AddTodoForm from "@/components/AddTodoForm";

export default async function Home() {
  const todos = await getTodos();

  return (
    <div className="flex flex-col items-center min-h-screen p-8 gap-8 font-[family-name:var(--font-geist-sans)] max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold">Class 11: Server Actions</h1>
      <p className="textAlign-center text-gray-500">
        Forms submitting directly to server functions with pending states.
      </p>

      {/* Add Todo Form - Refactored to Client Component for pending state */}
      <AddTodoForm />

      {/* Todo List */}
      <ul className="w-full flex flex-col gap-2">
        {todos.map((t: any) => (
            <li key={t.id} className="flex justify-between items-center p-3 border rounded bg-white dark:bg-zinc-900">
                <span>{t.task}</span>
                <form action={deleteTodo.bind(null, t.id)}>
                    <button className="text-red-500 hover:underline text-sm">Delete</button>
                </form>
            </li>
        ))}
        {todos.length === 0 && <p className="text-center text-gray-400">No tasks yet.</p>}
      </ul>
    </div>
  );
}
