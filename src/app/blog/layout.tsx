import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Blog | Product Management Insights',
    template: '%s | Product Management Blog'
  },
  description: 'Thoughts and insights on product management, user experience, and product strategy.',
  openGraph: {
    title: 'Blog | Product Management Insights',
    description: 'Thoughts and insights on product management, user experience, and product strategy.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | Product Management Insights',
    description: 'Thoughts and insights on product management, user experience, and product strategy.',
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-white">
      {children}
    </div>
  )
} 