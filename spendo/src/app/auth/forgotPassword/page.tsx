"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
// import { z } from "zod"
// import { useForm } from "react-hook-form"
// import { zodResolver } from "@hookform/resolvers/zod"
import { Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import Link from "next/link"

// const formSchema = z.object({
//   email: z.string().email({ message: "Please enter a valid email address" }),
// })

// type FormValues = z.infer<typeof formSchema>

export default function ForgotPassword() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const router = useRouter()
  

//   const form = useForm<FormValues>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       email: "",
//     },
//   })

//   async function onSubmit(data: FormValues) {
//     setIsLoading(true)

    // try {
      // This would be replaced with your actual API call
      // await fetch('/api/auth/forgot-password', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email: data.email }),
      // })

      // Simulate API call
//       await new Promise((resolve) => setTimeout(resolve, 1500))

//       setIsSuccess(true)
//       toast({
//         title: "Reset link sent",
//         description: "Check your email for a link to reset your password.",
//       })
//     } catch (error) {
//       toast({
//         title: "Something went wrong",
//         description: "Failed to send reset link. Please try again.",
//         variant: "destructive",
//       })
//     } finally {
//       setIsLoading(false)
//     }
//   }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-300 px-4 py-12 dark:bg-slate-900 font-custom2">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Forgot Password</CardTitle>
          <CardDescription className="text-center">
            Enter your email address and we&apos;ll send you a link to reset your password
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isSuccess ? (
            <div className="flex flex-col items-center justify-center space-y-4 py-6">
              <div className="rounded-full bg-green-100 p-3 dark:bg-green-900">
                <Mail className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-medium">Check your email</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  We&apos;ve sent a password reset link to your email address.
                </p>
              </div>
              <Button variant="link" className="mt-4" onClick={() => router.push("/login")}>
                Back to login
              </Button>
            </div>
          ) : (
            <Form {...form}>
               <form  className="space-y-4"> {/*onSubmit={form.handleSubmit(onSubmit)} */}
                <FormField
                //   control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="name@example.com" {...field} disabled={isLoading} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? "Sending..." : "Send reset link"}
                </Button>
              </form>
            </Form>
          )}
        </CardContent>
        <CardFooter className="flex justify-center border-t px-6 py-4">
          <div className="text-sm text-muted-foreground">
            Remember your password?{" "}
            <Link href="/login" className="font-medium text-primary hover:underline">
              Back to login
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

