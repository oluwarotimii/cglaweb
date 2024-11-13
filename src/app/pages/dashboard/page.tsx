'use client'

import { useState } from  'react'
import Link from 'next/link'
import { Button } from '../../components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../components/ui/card'
import { Progress } from '../../components/ui/progress'

// Mock user data - in a real app, this would come from an API or database
const userData = {
  name: 'John Doe',
  enrolledCourses: [
    {
      id: 'data-analysis-python-gis',
      title: 'Data Analysis with Python for GIS',
      progress: 60,
      status: 'In Progress'
    },
    {
      id: 'intro-remote-sensing',
      title: 'Introduction to Remote Sensing',
      progress: 100,
      status: 'Completed'
    }
  ]
}

export default function DashboardPage() {
  const [user] = useState(userData)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Welcome, {user.name}</h1>

      <h2 className="text-2xl font-semibold mb-4">Your Courses</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {user.enrolledCourses.map((course) => (
          <Card key={course.id}>
            <CardHeader>
              <CardTitle>{course.title}</CardTitle>
              <CardDescription>Status: {course.status}</CardDescription>
            </CardHeader>
            <CardContent>
              <Progress value={course.progress} className="w-full" />
              <p className="mt-2 text-sm text-gray-600">{course.progress}% complete</p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href={`/courses/${course.id}`}>
                  {course.status === 'Completed' ? 'Review Course' : 'Continue Learning'}
                </Link>
              </Button>
              {course.status === 'Completed' && (
                <Button variant="outline" className="ml-2" asChild>
                  <Link href={`/certificates/${course.id}`}>View Certificate</Link>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}