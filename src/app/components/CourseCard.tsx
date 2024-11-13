import React from 'react'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'

interface CourseCardProps {
  id: string
  title: string
  description: string
  duration: string
  level: string
}

export const CourseCard: React.FC<CourseCardProps> = ({ id, title, description, duration, level }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p><strong>Duration:</strong> {duration}</p>
        <p><strong>Level:</strong> {level}</p>
      </CardContent>
      <CardFooter>
        <Button asChild>
          <Link href={`/courses/${id}`}>Learn More</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}