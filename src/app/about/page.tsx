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
        {/* Profile Section */}
        <div className="mx-auto max-w-2xl text-center mb-24">
          <div className="relative w-40 h-40 mx-auto mb-8">
            <Image
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
              alt="Profile"
              className="rounded-full object-cover"
              fill
              priority
            />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
            Sunil Hanamshetty
          </h1>
          <p className="text-xl text-gray-600 italic mb-8">
            &quot;Passionate about building products that make a difference in people&apos;s lives. 
            I believe in data-driven decisions and user-centered design.&quot;
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Product Strategy", "User Research", "Team Leadership", "Agile", "Data Analytics"].map((skill) => (
              <span key={skill} className="px-4 py-2 bg-gray-100 rounded-full text-gray-700">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">My Journey</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            A timeline of my product management career and key milestones
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-gray-200 lg:block" />
            
            {/* Timeline items */}
            <div className="space-y-8 lg:space-y-16">
              {journey.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex flex-col lg:flex-row items-center"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 top-0 hidden lg:flex h-6 w-6 -translate-x-1/2 items-center justify-center">
                    <div className="h-3 w-3 rounded-full bg-primary ring-4 ring-white" />
                  </div>
                  
                  {/* Content */}
                  <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16 lg:ml-auto'}`}>
                    <div className="rounded-2xl bg-gray-50 p-6 shadow-sm hover:shadow-md transition-shadow">
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