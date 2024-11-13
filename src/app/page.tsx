import Link from 'next/link'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './components/ui/card'
// import './globals.css'

export default function Home() {
  const featuredCourses = [
    {
      title: "Data Analysis with Python for GIS",
      description: "Learn how to leverage Python for geospatial data analysis and GIS applications.",
      link: "/courses/data-analysis-python-gis"
    },
    {
      title: "Introduction to Remote Sensing",
      description: "Explore the fundamentals of remote sensing and its applications in geospatial science.",
      link: "/courses/intro-remote-sensing"
    }
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "GIS Analyst",
      quote: "CGLA's courses helped me advance my career in geospatial technology. Highly recommended!"
    },
    {
      name: "Michael Chen",
      role: "Environmental Scientist",
      quote: "The practical skills I gained from CGLA's Python for GIS course were immediately applicable to my work."
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8 ">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to CGLA</h1>
        <p className="text-xl text-gray-600 mb-8">Advancing geospatial knowledge through accessible, beginner-friendly courses.</p>
        <div className="flex justify-center space-x-4">
          <Button asChild>
            <Link href="/courses">Explore Courses</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/about">Learn More</Link>
          </Button>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Featured Courses</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {featuredCourses.map((course, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{course.title}</CardTitle>
                <CardDescription>{course.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild>
                  <Link href={course.link}>Enroll Now</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">What Our Students Say</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <blockquote className="italic text-gray-600 mb-4">"{testimonial.quote}"</blockquote>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}