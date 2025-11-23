
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function DashboardPage() {
    // We can assume we are authenticated here because middleware protects this route
  return (
    <div className="p-10 flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p className="text-green-600 mb-8">Welcome! You are authorized to see this page.</p>

      <form action={async () => {
          "use server"
          const cookieStore = await cookies()
          cookieStore.delete('auth_token')
          redirect("/login")
      }}>
          <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition-colors">Logout</button>
      </form>
    </div>
  )
}
