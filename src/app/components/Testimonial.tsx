import React from 'react'
import { Card, CardContent } from './ui/card'

interface TestimonialProps {
  quote: string
  author: string
  role: string
}

export const Testimonial: React.FC<TestimonialProps> = ({ quote, author, role }) => {
  return (
    <Card>
      <CardContent className="pt-6">
        <blockquote className="text-lg italic text-gray-600 mb-4">&quot;{quote}&quot;</blockquote>
        <div className="flex items-center">
          <div className="ml-4">
            <p className="text-sm font-semibold">{author}</p>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}