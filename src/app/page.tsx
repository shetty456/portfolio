"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative isolate overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
          alt="Professional team collaboration"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Hero content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-48">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-white">
            Building Products That Matter
          </h1>
          <p className="mt-6 text-base sm:text-lg leading-8 text-gray-300">
            Product Manager with a unique blend of technical expertise and user-centric thinking. 
            Currently open to new opportunities this quarter.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link
              href="/contact"
              className="w-full sm:w-auto rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-200 hover:shadow-lg"
            >
              Let&apos;s Connect
            </Link>
            <Link 
              href="/case-studies" 
              className="w-full sm:w-auto text-sm font-semibold leading-6 text-white hover:text-primary/80 transition-colors"
            >
              View My Work <span aria-hidden="true">→</span>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Skills Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Core Product Management Skills
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Combining technical expertise with user-centric thinking to deliver exceptional products
            </p>
          </motion.div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {[
                {
                  name: "Product Strategy",
                  description: "Defining product vision, roadmap, and go-to-market strategies that align with business objectives and user needs.",
                  icon: "🎯",
                  color: "bg-blue-50 text-blue-600",
                },
                {
                  name: "User Research",
                  description: "Conducting qualitative and quantitative research to understand user pain points and validate product decisions.",
                  icon: "🔍",
                  color: "bg-purple-50 text-purple-600",
                },
                {
                  name: "Data Analysis",
                  description: "Leveraging analytics and metrics to make data-driven decisions and measure product success.",
                  icon: "📊",
                  color: "bg-green-50 text-green-600",
                },
                {
                  name: "Agile Development",
                  description: "Leading cross-functional teams through agile methodologies to deliver high-quality products iteratively.",
                  icon: "🔄",
                  color: "bg-yellow-50 text-yellow-600",
                },
                {
                  name: "Stakeholder Management",
                  description: "Building strong relationships with stakeholders and effectively communicating product vision and progress.",
                  icon: "🤝",
                  color: "bg-red-50 text-red-600",
                },
                {
                  name: "Technical Understanding",
                  description: "Working closely with engineering teams to make informed technical decisions and prioritize features.",
                  icon: "💻",
                  color: "bg-indigo-50 text-indigo-600",
                },
              ].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col"
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="relative flex flex-col gap-6 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200 hover:shadow-md transition-all duration-300"
                  >
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${skill.color} text-2xl`}>
                      {skill.icon}
                    </div>
                    <dt className="text-xl font-semibold leading-7 text-gray-900">
                      {skill.name}
                    </dt>
                    <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                      <p className="flex-auto">{skill.description}</p>
                    </dd>
                  </motion.div>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Scarcity message */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/80 py-4 text-center">
        <p className="text-sm text-white px-4">
          I&apos;m open to PM roles this quarter — let&apos;s connect before my calendar fills up.
        </p>
      </div>
    </div>
  );
}
