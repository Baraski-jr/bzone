import { login, signup } from "./actions"

export default function LoginPage() {
  return (
    <div className="bg-gray-500 h-screen flex items-center justify-center">
      <form className="flex flex-col gap-4 bg-white p-8 rounded-lg">
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" required />
        <button formAction={login}>Log in</button>
        <button formAction={signup}>Sign up</button>
      </form>
    </div>
  )
}
