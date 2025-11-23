
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default function LoginPage() {
  async function login() {
    "use server"
    const cookieStore = await cookies()
    // Set a dummy cookie
    cookieStore.set('auth_token', 'secret-123', { 
        secure: true,
        httpOnly: true,
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 // 1 day
    })
    redirect('/dashboard')
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      <form action={login}>
        <button 
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
            Login with Dummy Token
        </button>
      </form>
    </div>
  )
}
