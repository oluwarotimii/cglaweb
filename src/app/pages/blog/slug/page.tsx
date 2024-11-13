import { notFound } from 'next/navigation'

const blogPosts = {
  'intro-to-gis': {
    title: 'Introduction to Geographic Information Systems (GIS)',
    content: `
      Geographic Information Systems (GIS) have revolutionized the way we analyze and visualize spatial data. 
      This powerful technology combines hardware, software, and data to capture, manage, analyze, and display 
      all forms of geographically referenced information.

      In this post, we'll explore the basic concepts of GIS, its components, and some of its wide-ranging applications. 
      Whether you're a beginner just starting out in the field of geospatial technology or an experienced professional 
      looking to brush up on the fundamentals, this introduction will provide valuable insights into the world of GIS.

      [Rest of the blog post content...]
    `,
    date: '2024-03-01',
    author: 'Dr. Jane Smith'
  },
  'python-in-geospatial': {
    title: 'The Role of Python in Geospatial Analysis',
    content: `
      Python has emerged as a powerful and versatile programming language in the field of geospatial analysis. 
      Its simplicity, extensive libraries, and strong community support have made it an essential tool for GIS 
      professionals and researchers alike.

      In this blog post, we'll dive into how Python is being used in various aspects of geospatial analysis, 
      from data processing and manipulation to advanced spatial statistics and machine learning applications. 
      We'll also explore some of the most popular Python libraries for GIS, such as GeoPandas, Rasterio, and PyQGIS.

      [Rest of the blog post content...]
    `,
    date: '2024-02-15',
    author: 'Prof. John Doe'
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
      <p className="text-gray-600 mb-8">Published on {post.date} by {post.author}</p>
      <div className="prose max-w-none">
        {post.content.split('\n').map((paragraph, index) => (
          <p key={index} className="mb-4">{paragraph}</p>
        ))}
      </div>
    </div>
  )
}