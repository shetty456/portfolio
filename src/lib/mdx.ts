import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

const postsDirectory = path.join(process.cwd(), 'src/content/blog')

export interface Post {
  slug: string
  title: string
  date: string
  description: string
  image: string
  tags: string[]
  content: string
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  return {
    slug,
    title: data.title,
    date: data.date,
    description: data.description,
    image: data.image,
    tags: data.tags || [],
    content,
  }
}

export async function getAllPosts(): Promise<Post[]> {
  const fileNames = fs.readdirSync(postsDirectory)
  const posts = await Promise.all(
    fileNames
      .filter((fileName) => fileName.endsWith('.mdx'))
      .map(async (fileName) => {
        const slug = fileName.replace(/\.mdx$/, '')
        return getPostBySlug(slug)
      })
  )

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getMdxSource(content: string) {
  return serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
  })
} 