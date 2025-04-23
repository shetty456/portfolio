"use client"
import { motion } from 'framer-motion'

import { caseStudies } from '@/constants/case-studies'
import { tagColors } from '@/constants/colors'

export default function CaseStudies() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
            APM Case Studies
          </h2>
          <p className="text-lg leading-8 text-gray-600 mb-8">
            Demonstrating product thinking, analytical skills, and collaboration through real-world scenarios
          </p>
          <p className="text-sm text-gray-500 italic">
            &ldquo;The best way to predict the future is to create it&rdquo;
          </p>
        </motion.div>

        <div className="mx-auto mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl">
          {caseStudies.map((study, index) => (
            <motion.article 
              key={study.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
            >
              <div className="flex flex-wrap gap-2 mb-6">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`${tagColors[tag]} px-3 py-1.5 rounded-full text-xs font-medium`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {study.title}
              </h3>
              
              <p className="text-gray-600 mb-8 text-lg">
                {study.description}
              </p>

              <div className="space-y-6">
                <div className="grid grid-cols-3 gap-4">
                  {study.metrics.map((metric, i) => (
                    <div key={i} className="bg-gray-50 p-4 rounded-lg text-center">
                      <span className="text-primary font-semibold block text-sm">
                        {metric}
                      </span>
                    </div>
                  ))}
                </div>
                
                <a
                  href={study.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors group w-full md:w-auto"
                >
                  Read Detailed Analysis
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600">
            These case studies demonstrate my approach to product challenges using principles of social proof, authority, and scarcity from Cialdini&apos;s &ldquo;Influence&rdquo;
          </p>
        </motion.div>
      </div>
    </div>
  )
}