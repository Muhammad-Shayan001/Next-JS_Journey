
'use server'

import { revalidatePath } from "next/cache";

// Simulating a database
let todos = [
    { id: 1, task: "Learn Next.js Server Actions" },
    { id: 2, task: "Build a cool project" }
];

export async function addTodo(formData: FormData) {
    const task = formData.get("task") as string;
    
    if (!task) return;

    // Simulate delay
    await new Promise(resolve => setTimeout(resolve, 500));

    todos.push({
        id: Date.now(),
        task
    });

    // Revalidate the page so the new todo shows up immediately
    revalidatePath("/");
}

export async function deleteTodo(id: number) {
    todos = todos.filter(t => t.id !== id);
    revalidatePath("/");
}

export async function getTodos() {
    return todos;
}
