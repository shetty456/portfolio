"use client"
import Image from "next/image"
import Link from "next/link"

const caseStudies = [
  {
    id: 1,
    title: "E-commerce Platform Redesign",
    description: "Led the redesign of a major e-commerce platform, resulting in a 40% increase in conversion rates.",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
    tags: ["Product Design", "User Research", "A/B Testing"],
    status: "Coming Soon"
  },
  {
    id: 2,
    title: "Mobile App Development",
    description: "Managed the development of a mobile app that reached 1M+ downloads in its first year.",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
    tags: ["Mobile", "Product Strategy", "Growth"],
    status: "Coming Soon"
  },
  {
    id: 3,
    title: "Enterprise SaaS Solution",
    description: "Built and launched an enterprise SaaS solution that now serves 500+ businesses.",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
    tags: ["Enterprise", "B2B", "Product Management"],
    status: "Coming Soon"
  }
]

export default function CaseStudies() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Case Studies</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            A collection of my most impactful product management work
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {caseStudies.map((study) => (
            <article key={study.id} className="flex flex-col items-start">
              <div className="relative w-full">
                <Image
                  src={study.image}
                  alt={study.title}
                  width={500}
                  height={300}
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <span className="absolute inset-0" />
                    {study.title}
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{study.description}</p>
                </div>
                <div className="mt-6 flex items-center">
                  <span className="text-sm font-medium text-primary">{study.status}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
} 