import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../components/ui/card'

const blogPosts = [
  {
    id: 'intro-to-gis',
    title: 'Introduction to Geographic Information Systems (GIS)',
    excerpt: 'Learn about the basics of GIS and how it is revolutionizing spatial data analysis.',
    date: '2024-03-01',
    author: 'Dr. Jane Smith'
  },
  {
    id: 'python-in-geospatial',
    title: 'The Role of Python in Geospatial Analysis',
    excerpt: 'Discover how Python is becoming an essential tool for GIS professionals.',
    date: '2024-02-15',
    author: 'Prof. John Doe'
  },
  {
    id: 'remote-sensing-applications',
    title: 'Innovative Applications of Remote Sensing',
    excerpt: 'Explore cutting-edge uses of remote sensing technology in various industries.',
    date: '2024-01-30',
    author: 'Sarah Johnson, MSc'
  }
]

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">CGLA Blog</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>{post.date} | By {post.author}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{post.excerpt}</p>
            </CardContent>
            <CardFooter>
              <Link href={`/ blog/${post.id}`} className="text-blue-600 hover:underline">
                Read More
              </Link>  
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}