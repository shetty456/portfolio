import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'

// This would typically come from a CMS or database
const blogPosts = [
  {
    id: 1,
    title: 'The Art of Product Discovery',
    description: 'Learn how to effectively discover and validate product ideas before building them.',
    content: `Product discovery is a crucial phase in the product development lifecycle. It involves understanding user needs, market opportunities, and potential solutions before committing to building anything.

In this post, we'll explore:
- The importance of product discovery
- Key techniques for effective discovery
- How to validate your assumptions
- Common pitfalls to avoid

Remember, the goal of product discovery is to reduce uncertainty and increase the chances of building something that users actually want and need.`,
    date: '2024-03-15',
    readTime: '5 min read',
    category: 'Product Strategy',
    slug: 'the-art-of-product-discovery'
  },
  {
    id: 2,
    title: 'Building User-Centric Products',
    description: 'A deep dive into user-centered design and development practices.',
    content: `Building products that users love requires a deep understanding of their needs, behaviors, and pain points. In this post, we'll explore how to put users at the center of your product development process.

Key topics include:
- User research methods
- Persona development
- User journey mapping
- Usability testing
- Iterative design

By focusing on the user experience throughout the development process, you can create products that truly resonate with your target audience.`,
    date: '2024-03-10',
    readTime: '7 min read',
    category: 'User Experience',
    slug: 'building-user-centric-products'
  },
  {
    id: 3,
    title: 'Product Metrics That Matter',
    description: 'Understanding and implementing key product metrics for success.',
    content: `Measuring the right metrics is essential for product success. In this post, we'll explore the key metrics that product managers should track and why they matter.

We'll cover:
- North Star metrics
- User engagement metrics
- Retention metrics
- Conversion metrics
- Revenue metrics

Understanding these metrics will help you make data-driven decisions and demonstrate the impact of your product initiatives.`,
    date: '2024-03-05',
    readTime: '6 min read',
    category: 'Analytics',
    slug: 'product-metrics-that-matter'
  },
  {
    id: 4,
    title: 'User Research Best Practices',
    description: 'Essential techniques for conducting effective user research and gathering actionable insights.',
    content: `User research is the foundation of building successful products. In this comprehensive guide, we'll explore the best practices for conducting effective user research.

Key areas we'll cover:
- Planning and preparation
- Choosing the right research methods
- Conducting effective interviews
- Analyzing and synthesizing findings
- Turning insights into action

Best practices include:
- Always start with clear research objectives
- Use a mix of qualitative and quantitative methods
- Ensure diverse participant recruitment
- Document everything systematically
- Share findings with stakeholders effectively

Remember, the goal of user research is not just to gather data, but to uncover meaningful insights that drive product decisions.`,
    date: '2024-03-20',
    readTime: '8 min read',
    category: 'User Research',
    slug: 'user-research-best-practices'
  }
]

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find(post => post.slug === params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found.'
    }
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  }
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(post => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-12 bg-white rounded-lg shadow-sm">
      <Link 
        href="/blog"
        className="text-blue-600 hover:text-blue-800 mb-6 inline-block transition-colors"
      >
        ← Back to Blog
      </Link>
      
      <header className="mb-8 border-b border-gray-200 pb-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
        <div className="flex items-center text-gray-600 space-x-4">
          <time dateTime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
          <span>•</span>
          <span>{post.readTime}</span>
          <span>•</span>
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
            {post.category}
          </span>
        </div>
      </header>

      <div className="prose prose-lg max-w-none">
        {post.content.split('\n\n').map((paragraph, index) => {
          // Check if the paragraph starts with a bullet point
          if (paragraph.trim().startsWith('-')) {
            return (
              <ul key={index} className="list-disc pl-6 mb-6 space-y-2">
                {paragraph.split('\n').map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-700">
                    {item.replace('-', '').trim()}
                  </li>
                ))}
              </ul>
            )
          }
          
          // Regular paragraph
          return (
            <p key={index} className="mb-6 text-gray-700 leading-relaxed">
              {paragraph}
            </p>
          )
        })}
      </div>
    </article>
  )
} 