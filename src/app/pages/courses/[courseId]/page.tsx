import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Button } from '../../../components/ui/button'

const courses = {
  'data-analysis-python-gis': {
    title: 'Data Analysis with Python for GIS',
    description: 'Learn how to leverage Python for geospatial data analysis and GIS applications.',
    duration: '6 weeks',
    level: 'Beginner',
    outline: [
      'Introduction to Python and GIS',
      'Working with Geospatial Data in Python',
      'Spatial Analysis with GeoPandas',
      'Visualization Techniques for GIS Data',
      'Advanced GIS Operations in Python',
      'Final Project: Real-world GIS Analysis'
    ],
    requirements: [
      'Basic understanding of GIS concepts',
      'No prior programming experience required',
      'Computer with internet access',
      'Google account for accessing Google Colab'
    ]
  },
  'intro-remote-sensing': {
    title: 'Introduction to Remote Sensing',
    description: 'Explore the fundamentals of remote sensing and its applications in geospatial science.',
    duration: '4 weeks',
    level: 'Beginner',
    outline: [
      'Principles of Remote Sensing',
      'Types of Remote Sensing Systems',
      'Image Interpretation and Analysis',
      'Applications of Remote Sensing in Various Fields'
    ],
    requirements: [
      'No prior remote sensing knowledge required',
      'Basic computer skills',
      'Internet access for online resources and exercises'
    ]
  }
}

export default function CourseDetailsPage({ params }: { params: { courseId: string } }) {
  const course = courses[params.courseId as keyof typeof courses]

  if (!course) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{course.title}</h1>
      <p className="text-xl text-gray-600 mb-8">{course.description}</p>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Course Details</h2>
          <p><strong>Duration:</strong> {course.duration}</p>
          <p><strong>Level:</strong> {course.level}</p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Course Outline</h3>
          <ul className="list-disc pl-5 space-y-2">
            {course.outline.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Requirements</h3>
          <ul className="list-disc pl-5 space-y-2">
            {course.requirements.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <div className="mt-8">
            <Button asChild size="lg">
              <Link href={`/enroll/${params.courseId}`}>Enroll Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}