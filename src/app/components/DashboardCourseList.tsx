import React from 'react'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from './ui/button'
import { Progress } from './ui/progress'

interface Course {
  id: string
  title: string
  progress: number
  status: 'Not Started' | 'In Progress' | 'Completed'
}

interface DashboardCourseListProps {
  courses: Course[]
}

export const DashboardCourseList: React.FC<DashboardCourseListProps> = ({ courses }) => {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {courses.map((course) => (
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
  )
}