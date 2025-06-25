"use client"

import { motion } from "framer-motion"

const features = [
  {
    title: "Sitemaps",
    description:
      "From a simple company description to a fully fleshed out sitemap generated with AI to help you get a birds eye view",
    status: "Online",
  },
  {
    title: "Wireframes",
    description:
      "Turn your Sitemap into wires in one click generating real components un-styled and ready for feedback",
    status: "Online",
  },
  {
    title: "Style Guide",
    description: "Turn your wireframes into polished designs with a Style Guide ready for development.",
    status: "Beta",
  },
]

export default function FeaturesGrid() {
  return (
    <div className="relative z-10 mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-6 md:grid-cols-3">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            className="group rounded-2xl border border-gray-200 bg-white p-8 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-2xl font-mono">{feature.title}</h3>
              <span className="flex items-center space-x-2">
                <span className="h-2 w-2 rounded-full bg-green-400" />
                <span className="text-sm text-gray-500">{feature.status}</span>
              </span>
            </div>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
