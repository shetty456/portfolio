"use client"
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Resume() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">My Resume</h1>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            A summary of my professional experience and skills
          </p>
        </motion.div>
        
        <div className="mx-auto mt-16 max-w-2xl">
          <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
            <div className="flex flex-col items-center justify-center gap-4">
              <a 
                href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
              >
                View Resume
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          {/* Social Proof Section */}
          <div className="mt-16">
            <h2 className="text-center text-2xl font-bold text-gray-900">Trusted By Industry Leaders</h2>
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div className="rounded-lg border border-gray-200 p-6">
                <p className="text-gray-600 italic">
                  &quot;Sunil&apos;s product management skills and strategic thinking have been invaluable to our team.&quot;
                </p>
                <div className="mt-4">
                  <p className="font-semibold text-gray-900">Sarah Johnson</p>
                  <p className="text-sm text-gray-500">Director of Product, TechCorp</p>
                </div>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <p className="text-gray-600 italic">
                  &quot;One of the most detail-oriented and user-focused PMs I&apos;ve worked with.&quot;
                </p>
                <div className="mt-4">
                  <p className="font-semibold text-gray-900">Michael Chen</p>
                  <p className="text-sm text-gray-500">VP of Engineering, StartupX</p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 rounded-lg bg-gray-50 p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900">Open to New Opportunities</h3>
            <p className="mt-4 text-gray-600">
              Currently available for new product management roles and collaborations.
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md text-white bg-primary hover:bg-primary/80 transition-colors"
              >
                Let&apos;s Connect
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}