"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'

const journey = [
  {
    year: "2018",
    title: "Started My Product Journey",
    description: "Began my career in product management, learning the fundamentals of user research and product strategy.",
    icon: "🚀"
  },
  {
    year: "2019",
    title: "First Major Product Launch",
    description: "Led the development and launch of a mobile app that reached 100,000+ users in its first year.",
    icon: "📱"
  },
  {
    year: "2020",
    title: "Enterprise Product Management",
    description: "Transitioned to enterprise product management, working on complex B2B solutions and scaling products.",
    icon: "🏢"
  },
  {
    year: "2021",
    title: "Growth & Optimization",
    description: "Focused on growth strategies and product optimization, achieving significant improvements in key metrics.",
    icon: "📈"
  },
  {
    year: "2022",
    title: "Leadership Role",
    description: "Took on a leadership role, managing a team of product managers and driving product vision.",
    icon: "👥"
  },
  {
    year: "2023",
    title: "Current Focus",
    description: "Working on innovative product solutions and mentoring the next generation of product managers.",
    icon: "💡"
  }
]

export default function About() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">My Journey</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            A timeline of my product management career and key milestones
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
          <div className="relative">
            {/* Timeline line - hidden on mobile */}
            <div className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-gray-200 sm:block" />
            
            {/* Timeline items */}
            <div className="space-y-8">
              {journey.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex items-center justify-center sm:justify-start sm:pl-8 lg:pl-0"
                >
                  {/* Mobile dot */}
                  <div className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center sm:hidden">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  
                  {/* Desktop dot */}
                  <div className="absolute left-1/2 top-0 hidden h-6 w-6 -translate-x-1/2 items-center justify-center sm:flex">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  
                  <div className={`w-full sm:w-1/2 ${index % 2 === 0 ? 'sm:pr-8 lg:pr-0' : 'sm:pl-8 lg:pl-0'}`}>
                    <div className={`rounded-2xl bg-gray-50 p-6 ${index % 2 === 0 ? 'sm:ml-auto' : 'sm:mr-auto'}`}>
                      <div className="flex items-center gap-4">
                        <span className="text-2xl">{item.icon}</span>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                          <p className="mt-1 text-sm text-gray-600">{item.year}</p>
                        </div>
                      </div>
                      <p className="mt-4 text-base text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 