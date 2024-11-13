import React, { useState } from 'react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'

interface PaystackPaymentPageProps {
  courseId: string
  courseTitle: string
  price: number
}

export const PaystackPaymentPage: React.FC<PaystackPaymentPageProps> = ({ courseId, courseTitle, price }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [paymentUrl, setPaymentUrl] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('/api/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          courseId,
          courseTitle,
          amount: price,
        }),
      })

      const data = await response.json()

      if (data.status) {
        setPaymentUrl(data.data.authorization_url)
      } else {
        alert('Error creating payment page. Please try again.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('An error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Enroll in {courseTitle}</CardTitle>
        <CardDescription>Complete your payment to gain access to the course</CardDescription>
      </CardHeader>
      <CardContent>
        {!paymentUrl ? (
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <CardFooter className="flex justify-between items-center mt-6">
              <div className="text-2xl font-bold">${(price / 100).toFixed(2)}</div>
              <Button type="submit" disabled={loading}>
                {loading ? 'Processing...' : 'Proceed to Payment'}
              </Button>
            </CardFooter>
          </form>
        ) : (
          <div className="text-center">
            <p className="mb-4">Your payment page has been created. Click the button below to complete your payment.</p>
            <Button asChild>
              <a href={paymentUrl} target="_blank" rel="noopener noreferrer">Go to Payment Page</a>
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}