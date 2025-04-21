import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog | Product Management Insights',
  description: 'Thoughts and insights on product management, user experience, and product strategy.',
  openGraph: {
    title: 'Blog | Product Management Insights',
    description: 'Thoughts and insights on product management, user experience, and product strategy.',
    type: 'website',
  },
}

const blogPosts = [
  {
    id: 1,
    title: 'The Art of Product Strategy',
    description: 'How to craft a product strategy that aligns business goals with user needs.',
    date: 'March 15, 2024',
    readTime: '5 min read',
    category: 'Product Strategy',
    slug: 'the-art-of-product-strategy'
  },
  {
    id: 2,
    title: 'User Research Best Practices',
    description: 'Essential techniques for conducting effective user research and gathering actionable insights.',
    date: 'March 10, 2024',
    readTime: '7 min read',
    category: 'User Research',
    slug: 'user-research-best-practices'
  },
  {
    id: 3,
    title: 'Building High-Performing Product Teams',
    description: 'Strategies for fostering collaboration and driving innovation within product teams.',
    date: 'March 5, 2024',
    readTime: '6 min read',
    category: 'Team Leadership',
    slug: 'building-high-performing-product-teams'
  }
]

export default function Blog() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Product Management Blog</h1>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Insights and experiences from my journey in product management
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.id} className="flex flex-col items-start">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.date} className="text-gray-500">
                  {post.date}
                </time>
                <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600">
                  {post.category}
                </span>
              </div>
              <div className="group relative">
                <h2 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <Link href={`/blog/${post.slug}`}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
              </div>
              <div className="mt-6 flex items-center gap-x-4">
                <div className="text-sm leading-6">
                  <p className="text-gray-600">{post.readTime}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
} 