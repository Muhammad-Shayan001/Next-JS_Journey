"use client";

import { useFormStatus } from "react-dom";
import { addTodo } from "@/actions/todo-actions";
import { useRef } from "react";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button 
      type="submit" 
      disabled={pending}
      className="bg-foreground text-background px-4 py-2 rounded hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {pending ? "Adding..." : "Add"}
    </button>
  );
}

export default function AddTodoForm() {
  const ref = useRef<HTMLFormElement>(null);

  return (
    <form 
      action={async (formData) => {
        await addTodo(formData);
        ref.current?.reset();
      }} 
      ref={ref}
      className="flex gap-2 w-full"
    >
      <input 
        type="text" 
        name="task" 
        placeholder="Enter a new task..." 
        className="flex-1 p-2 border rounded border-gray-300 dark:border-zinc-700 dark:bg-zinc-900"
        required
      />
      <SubmitButton />
    </form>
  );
}
