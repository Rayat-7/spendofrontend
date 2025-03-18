"use client"

import type React from "react"


import { useRouter } from "next/navigation"
// import { useAuth } from "@/contexts/auth-Context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function SignInForm() {


//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [isLoading, setIsLoading] = useState(false)
//   const [error, setError] = useState("")
//   const { signInWithEmailPassword, signInWithGoogle } = useState("")
//   const router = useRouter()

//   const handleEmailSignIn = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsLoading(true)
//     setError("")

//     try {
//       await signInWithEmailPassword(email, password)
//       router.push("/student/dashboard") // Will be redirected to admin if they are an admin
//     } catch (error: any) {
//       setError(error.message || "Failed to sign in")
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   const handleGoogleSignIn = async () => {
//     setIsLoading(true)
//     setError("")

//     try {
//       await signInWithGoogle()
//       router.push("/student/dashboard") // Will be redirected to admin if they are an admin
//     } catch (error: any) {
//       setError(error.message || "Failed to sign in with Google")
//     } finally {
//       setIsLoading(false)
//     }
//   }

  return (
    <div className="min-h-90vh flex items-center justify-center bg-slate-300 h-screen font-custom2 p-4">
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-2xl">Sign In</CardTitle>
        <CardDescription>Sign in to your Spendo account</CardDescription>
      </CardHeader>
      <CardContent>
        <form  className="space-y-4"> {/*onSubmit={handleEmailSignIn} */}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
            //   value={email}
            //   onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
            //   value={password}
            //   onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {/* {error && <p className="text-sm text-red-500">{error}</p>}
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Signing in..." : "Sign In"}
          </Button> */}
        </form>
        <div className="relative my-4">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
          </div>
        </div>
        {/* <Button type="button" variant="outline" className="w-full" onClick={handleGoogleSignIn} disabled={isLoading}>
          {isLoading ? "Signing in..." : "Sign in with Google"}
        </Button> */}
      </CardContent>
      <CardFooter className="flex flex-col space-y-2 text-center text-sm text-muted-foreground">
        <p>
          Don&apos;t have an account?{" "}
          <Link href="/auth/register" className="underline underline-offset-4 hover:text-primary">
            Sign up
          </Link>
        </p>
      </CardFooter>
    </Card>
    </div>
  )
}
