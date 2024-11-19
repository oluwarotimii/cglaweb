'use client'

import React, { useState } from 'react'
import { Button } from './ui/button'
import { Label } from './ui/label'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import Link from 'next/link'
import { Input } from './ui/input'
import { signIn } from 'next-auth/react'

export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null) // to handle any login errors

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Call the NextAuth signIn function with the "credentials" provider
    const result = await signIn('credentials', {
      redirect: false,
      email,
      password
    })

    if (result?.error) {
      // Handle error (e.g., invalid credentials)
      setError(result.error)
    } else {
      // Redirect or show success (depending on your app flow)
      console.log('Login successful')
      // Example: redirect to dashboard
      // router.push('/dashboard') if using useRouter
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Login to CGLA</CardTitle>
        <CardDescription>Enter your credentials to access your account</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <Button type="submit" className="w-full mt-4 bg-slate-600 text-white hover:bg-black">Login</Button>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link href="/forgot-password" className="text-sm text-blue-600 hover:underline">
          Forgot password?
        </Link>
        <Link href="/signup" className="text-sm text-blue-600 hover:underline">
          Don&apos; have an account? Sign up
        </Link>
      </CardFooter>
    </Card>
  )
}
