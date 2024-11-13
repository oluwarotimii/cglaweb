import Link from 'next/link'
import { Button } from '../../components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../components/ui/card'

const courses = [
  {
    id: 'data-analysis-python-gis',
    title: 'Data Analysis with Python for GIS',
    description: 'Learn how to leverage Python for geospatial data analysis and GIS applications.',
    duration: '8 weeks',
    level: 'Beginner'
  },
  {
    id: 'intro-remote-sensing',
    title: 'Introduction to Remote Sensing',
    description: 'Explore the fundamentals of remote sensing and its applications in geospatial science.',
    duration: '8 weeks',
    level: 'Beginner'
  },
  {
    id: 'advanced-gis-techniques',
    title: 'Advanced GIS Techniques',
    description: 'Master advanced GIS techniques and spatial analysis methods.',
    duration: '8 weeks',
    level: 'Intermediate'
  }
]

export default function CoursesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Courses</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <Card key={course.id}>
            <CardHeader>
              <CardTitle>{course.title}</CardTitle>
              <CardDescription>{course.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p><strong>Duration:</strong> {course.duration}</p>
              <p><strong>Level:</strong> {course.level}</p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href={`/courses/${course.id}`}>Learn More</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}