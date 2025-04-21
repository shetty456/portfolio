"use client"
import { motion } from "framer-motion"

const skills = [
  {
    category: "Product Management",
    items: [
      { name: "Product Strategy", level: 90 },
      { name: "User Research", level: 85 },
      { name: "Agile Methodologies", level: 95 },
      { name: "Product Roadmapping", level: 90 },
      { name: "A/B Testing", level: 80 }
    ]
  },
  {
    category: "Technical Skills",
    items: [
      { name: "SQL", level: 85 },
      { name: "Data Analysis", level: 80 },
      { name: "API Design", level: 75 },
      { name: "System Architecture", level: 70 },
      { name: "Technical Writing", level: 85 }
    ]
  },
  {
    category: "Soft Skills",
    items: [
      { name: "Leadership", level: 90 },
      { name: "Communication", level: 95 },
      { name: "Stakeholder Management", level: 85 },
      { name: "Problem Solving", level: 90 },
      { name: "Team Collaboration", level: 95 }
    ]
  }
]

export default function Toolbox() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">My Toolbox</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            The skills and tools I use to build great products
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skillCategory) => (
              <motion.div
                key={skillCategory.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col rounded-2xl bg-gray-50 p-8"
              >
                <h3 className="text-xl font-semibold leading-7 text-gray-900">{skillCategory.category}</h3>
                <div className="mt-6 space-y-4">
                  {skillCategory.items.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-900">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-gray-200">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="h-full rounded-full bg-primary"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 