"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
// import { useAuth } from "@/contexts/auth-Context"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function SignUpForm() {
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [confirmPassword, setConfirmPassword] = useState("")
//   const [isLoading, setIsLoading] = useState(false)
//   const [error, setError] = useState("")
//   const { signUpWithEmailPassword, signInWithGoogle } = useAuth()
//   const router = useRouter()

//   const handleEmailSignUp = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsLoading(true)
//     setError("")

//     if (password !== confirmPassword) {
//       setError("Passwords do not match")
//       setIsLoading(false)
//       return
//     }

//     try {
//       await signUpWithEmailPassword(email, password)
//       router.push("/dashboard")
//     } catch (error: any) {
//       setError(error.message || "Failed to sign up")
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   const handleGoogleSignUp = async () => {
//     setIsLoading(true)
//     setError("")

//     try {
//       await signInWithGoogle()
//       router.push("/dashboard")
//     } catch (error: any) {
//       setError(error.message || "Failed to sign up with Google")
//     } finally {
//       setIsLoading(false)
//     }
//   }

  return (
    <div className="min-h-90vh flex items-center justify-center bg-slate-300 h-screen font-custom2 p-4">
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-2xl">Sign Up</CardTitle>
        <CardDescription>Create a new UniSched account</CardDescription>
      </CardHeader>
      <CardContent>
         <form  className="space-y-4">{/*onSubmit={handleEmailSignUp} */}
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
          <div className="space-y-2">
            <Label htmlFor="confirm-password">Confirm Password</Label>
            <Input
              id="confirm-password"
              type="password"
            //   value={confirmPassword}
            //   onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          {/* {error && <p className="text-sm text-red-500">{error}</p>}
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Signing up..." : "Sign Up"}
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
        {/* <Button type="button" variant="outline" className="w-full" onClick={handleGoogleSignUp} disabled={isLoading}>
          {isLoading ? "Signing up..." : "Sign up with Google"}
        </Button> */}
      </CardContent>
      <CardFooter className="flex flex-col space-y-2 text-center text-sm text-muted-foreground">
        <p>
          Already have an account?{" "}
          <Link href="/auth/login" className="underline underline-offset-4 hover:text-primary">
            Sign in
          </Link>
        </p>
      </CardFooter>
    </Card>
    </div>
  )
}

