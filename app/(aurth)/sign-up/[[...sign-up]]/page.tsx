import { SignUp } from "@clerk/nextjs"

export default function Page() {
  return (
    <div className="py-4 flex items-center justify-center min-h-screen">
      <SignUp />
    </div>
  )
}
