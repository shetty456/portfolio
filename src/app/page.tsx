"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { caseStudies } from "@/constants/case-studies";
import { tagColors } from "@/constants/colors";

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
            Product Manager with a unique blend of technical expertise and
            user-centric thinking. Currently open to new opportunities this
            quarter.
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

      {/* Featured Case Studies Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">
              Featured Case Studies
            </h2>
            <p className="text-lg text-gray-600">
              Real examples showcasing my product mindset and problem-solving
              approach.
            </p>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.slice(0, 3).map((study, index) => (
              <motion.article
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-200"
              >
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className={`${tagColors[tag]} px-3 py-1.5 rounded-full text-xs font-medium`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {study.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {study.description}
                </p>
                <a
                  href={study.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-primary hover:underline inline-flex items-center group"
                >
                  View Case Study
                  <svg
                    className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </motion.article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/case-studies"
              className="inline-block text-sm font-semibold text-primary hover:underline"
            >
              See all case studies →
            </Link>
          </div>
        </div>
      </div>
      {/* skills section */}
      <section className="w-full bg-white">
        <section className="w-full max-w-6xl mx-auto py-20 px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Core Skills & Focus Areas
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Product Management", icon: "🚀" },
              { name: "User Research & Interviews", icon: "🔍" },
              { name: "Metrics & Analytics (HEART, AARRR)", icon: "📈" },
              { name: "Team Leadership & Communication", icon: "🧩" },
              { name: "Backend Architecture (Django, FastAPI)", icon: "🛠️" },
              { name: "UI/UX & Dev Handoff (Flutter, React)", icon: "🎨" },
              { name: "Experimentation & Iteration", icon: "🧪" },
              { name: "Documentation & Clarity", icon: "💬" },
            ].map((skill) => (
              <div
                key={skill.name}
                className="bg-white border border-gray-200 p-6 rounded-md text-center shadow-sm hover:shadow-md transition"
              >
                <div className="text-4xl">{skill.icon}</div>
                <h4 className="mt-4 text-lg font-semibold text-gray-800">
                  {skill.name}
                </h4>
              </div>
            ))}
          </div>
          
        </section>
      </section>

      {/* Scarcity message */}
      <div className="bg-black/80 py-8 text-center">
        <p className="text-sm text-white px-4">
          I&apos;m open to PM roles this quarter — let&apos;s connect before my
          calendar fills up.
        </p>
      </div>
    </div>
  );
}
