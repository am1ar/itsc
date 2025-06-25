"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote, Star, TrendingUp, DollarSign, Clock, Target } from "lucide-react"

const testimonials = [
  {
    id: 1,
    content:
      "ITSC's AI-powered demand forecasting solution transformed our inventory management completely. We eliminated stockouts during peak seasons and reduced excess inventory by $2.3 million annually. Their team's expertise in supply chain analytics is unmatched in the region.",
    author: "Ahmed Al-Mansouri",
    position: "Supply Chain Director",
    company: "Al-Noor Retail Group",
    location: "Riyadh, Saudi Arabia",
    image: "/placeholder.svg?height=120&width=120",
    companyLogo: "/placeholder.svg?height=40&width=120",
    results: [
      { metric: "Cost Savings", value: "$2.3M", icon: DollarSign },
      { metric: "Forecast Accuracy", value: "96%", icon: Target },
      { metric: "Stockout Reduction", value: "85%", icon: TrendingUp },
    ],
    industry: "Retail",
    projectType: "Demand Forecasting",
    rating: 5,
  },
  {
    id: 2,
    content:
      "The warehouse automation system ITSC implemented exceeded all our expectations. We achieved 300% throughput improvement with 99.8% picking accuracy. Our order fulfillment time dropped from 4 hours to just 45 minutes. This technology has revolutionized our operations.",
    author: "Fatima Al-Zahra",
    position: "Operations Manager",
    company: "Gulf Express Logistics",
    location: "Dubai, UAE",
    image: "/placeholder.svg?height=120&width=120",
    companyLogo: "/placeholder.svg?height=40&width=120",
    results: [
      { metric: "Throughput Increase", value: "300%", icon: TrendingUp },
      { metric: "Picking Accuracy", value: "99.8%", icon: Target },
      { metric: "Fulfillment Time", value: "45 min", icon: Clock },
    ],
    industry: "Logistics",
    projectType: "Warehouse Automation",
    rating: 5,
  },
  {
    id: 3,
    content:
      "ITSC's route optimization solution saved us over $630,000 in fuel costs within the first year. Our on-time delivery rate improved from 70% to 96%, and customer satisfaction scores reached an all-time high of 94%. The ROI was immediate and substantial.",
    author: "Omar Al-Rashid",
    position: "Logistics Director",
    company: "Desert Commerce Co.",
    location: "Jeddah, Saudi Arabia",
    image: "/placeholder.svg?height=120&width=120",
    companyLogo: "/placeholder.svg?height=40&width=120",
    results: [
      { metric: "Fuel Savings", value: "$630K", icon: DollarSign },
      { metric: "On-time Delivery", value: "96%", icon: Clock },
      { metric: "Customer Satisfaction", value: "94%", icon: Target },
    ],
    industry: "E-commerce",
    projectType: "Route Optimization",
    rating: 5,
  },
  {
    id: 4,
    content:
      "The supply chain visibility platform gave us complete control over our global operations across 15 countries. We can now predict and prevent issues before they impact our customers. Issue resolution time improved by 80%, and our customer satisfaction reached 92%.",
    author: "Sarah Al-Mahmoud",
    position: "Vice President of Supply Chain",
    company: "Arabian Steel Industries",
    location: "Dammam, Saudi Arabia",
    image: "/placeholder.svg?height=120&width=120",
    companyLogo: "/placeholder.svg?height=40&width=120",
    results: [
      { metric: "Visibility", value: "100%", icon: Target },
      { metric: "Issue Resolution", value: "80% faster", icon: Clock },
      { metric: "Customer Satisfaction", value: "92%", icon: TrendingUp },
    ],
    industry: "Manufacturing",
    projectType: "Supply Chain Visibility",
    rating: 5,
  },
  {
    id: 5,
    content:
      "ITSC's predictive maintenance solution transformed our fleet management. We reduced unexpected breakdowns by 78% and saved $1.6 million in maintenance costs. Our vehicle uptime improved to 97%, and we extended our fleet lifespan by 30%.",
    author: "Khalid Al-Otaibi",
    position: "Fleet Manager",
    company: "Kingdom Transport Solutions",
    location: "Riyadh, Saudi Arabia",
    image: "/placeholder.svg?height=120&width=120",
    companyLogo: "/placeholder.svg?height=40&width=120",
    results: [
      { metric: "Breakdown Reduction", value: "78%", icon: TrendingUp },
      { metric: "Cost Savings", value: "$1.6M", icon: DollarSign },
      { metric: "Vehicle Uptime", value: "97%", icon: Target },
    ],
    industry: "Transportation",
    projectType: "Predictive Maintenance",
    rating: 5,
  },
  {
    id: 6,
    content:
      "The AI-powered risk management system helped us avoid $4.2 million in potential losses during recent global disruptions. The 94% risk prediction accuracy gives us confidence to make strategic decisions. It's like having a crystal ball for supply chain risks.",
    author: "Amira Hassan",
    position: "Risk Management Director",
    company: "Gulf Trade Partners",
    location: "Abu Dhabi, UAE",
    image: "/placeholder.svg?height=120&width=120",
    companyLogo: "/placeholder.svg?height=40&width=120",
    results: [
      { metric: "Loss Prevention", value: "$4.2M", icon: DollarSign },
      { metric: "Prediction Accuracy", value: "94%", icon: Target },
      { metric: "Response Time", value: "75% faster", icon: Clock },
    ],
    industry: "Import/Export",
    projectType: "Risk Management",
    rating: 5,
  },
]

const overallStats = [
  { label: "Client Satisfaction Rate", value: "98%", icon: Target },
  { label: "Average ROI Delivered", value: "340%", icon: TrendingUp },
  { label: "Total Cost Savings", value: "$15M+", icon: DollarSign },
  { label: "Projects Completed", value: "150+", icon: Clock },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prev) => (prev + newDirection + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="relative z-10 px-6 py-24 bg-background dark:bg-background">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 dark:border-primary/30 dark:bg-primary/20 px-4 py-2 mb-6">
            <span className="text-sm font-semibold text-primary">Client Success Stories</span>
          </div>
          <h2 className="text-4xl font-mono mb-4 text-foreground dark:text-foreground">
            Trusted by Industry <span className="text-primary">Leaders</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how ITSC's AI and automation solutions have transformed supply chain operations for leading
            companies across the Middle East and beyond.
          </p>
        </motion.div>

        {/* Overall Statistics */}
        {/* <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 p-8 rounded-2xl bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {overallStats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div> */}

        {/* Main Testimonial Carousel */}
        <div className="relative mb-16">
          <div className="relative h-[600px] overflow-hidden rounded-2xl bg-card dark:bg-card border border-border shadow-xl">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x)

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1)
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1)
                  }
                }}
                className="absolute w-full h-full"
              >
                <div className="flex flex-col lg:flex-row h-full">
                  {/* Left Side - Testimonial Content */}
                  <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
                    <div className="mb-6">
                      <Quote className="h-12 w-12 text-primary mb-4" />
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(currentTestimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                        ))}
                      </div>
                    </div>

                    <blockquote className="text-xl lg:text-2xl text-foreground dark:text-foreground leading-relaxed mb-8 font-medium">
                      "{currentTestimonial.content}"
                    </blockquote>

                    <div className="flex items-center gap-4 mb-6">
                      <img
                        src={currentTestimonial.image || "/placeholder.svg"}
                        alt={currentTestimonial.author}
                        className="w-16 h-16 rounded-full object-cover ring-2 ring-primary/20"
                      />
                      <div>
                        <div className="font-semibold text-lg text-foreground dark:text-foreground">
                          {currentTestimonial.author}
                        </div>
                        <div className="text-muted-foreground">{currentTestimonial.position}</div>
                        <div className="text-primary font-medium">{currentTestimonial.company}</div>
                        <div className="text-sm text-muted-foreground">{currentTestimonial.location}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                        {currentTestimonial.industry}
                      </span>
                      <span className="px-3 py-1 text-xs font-medium bg-secondary/10 text-secondary-foreground rounded-full">
                        {currentTestimonial.projectType}
                      </span>
                    </div>
                  </div>

                  {/* Right Side - Results */}
                  <div className="lg:w-1/3 bg-muted/30 dark:bg-muted/20 p-8 lg:p-12 flex flex-col justify-center">
                    <h3 className="text-xl font-semibold mb-6 text-foreground dark:text-foreground">
                      Measurable Results
                    </h3>
                    <div className="space-y-6">
                      {currentTestimonial.results.map((result, idx) => (
                        <div key={idx} className="flex items-center gap-4">
                          <div className="p-3 rounded-lg bg-primary/10">
                            <result.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-primary">{result.value}</div>
                            <div className="text-sm text-muted-foreground">{result.metric}</div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 p-4 rounded-lg bg-primary/5 border border-primary/20">
                      <div className="text-sm font-medium text-primary mb-1">Company Logo</div>
                      <img
                        src={currentTestimonial.companyLogo || "/placeholder.svg"}
                        alt={`${currentTestimonial.company} logo`}
                        className="h-8 opacity-70"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 flex justify-between pointer-events-none z-20">
              <button
                onClick={() => paginate(-1)}
                className="p-3 rounded-full shadow-lg bg-background/80 dark:bg-background/80 backdrop-blur border border-border hover:bg-background dark:hover:bg-background pointer-events-auto transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6 text-foreground dark:text-foreground" />
              </button>
              <button
                onClick={() => paginate(1)}
                className="p-3 rounded-full shadow-lg bg-background/80 dark:bg-background/80 backdrop-blur border border-border hover:bg-background dark:hover:bg-background pointer-events-auto transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6 text-foreground dark:text-foreground" />
              </button>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                  setIsAutoPlaying(false)
                  setTimeout(() => setIsAutoPlaying(true), 10000)
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-muted hover:bg-primary/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Testimonial Grid Preview */}
        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="p-6 bg-card dark:bg-card rounded-xl border border-border hover:border-primary/50 transition-colors cursor-pointer"
              onClick={() => {
                setDirection(testimonial.id > currentIndex ? 1 : -1)
                setCurrentIndex(testimonial.id - 1)
                setIsAutoPlaying(false)
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-foreground dark:text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-3">"{testimonial.content}"</p>
              <div className="flex items-center gap-1 mt-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center p-12 rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 border border-primary/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-3xl font-bold mb-4 text-foreground dark:text-foreground">
            Ready to Transform Your Supply Chain?
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join industry leaders who have achieved remarkable results with ITSC's AI and automation solutions. Contact
            us to learn how we can transform your supply chain operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <button className="px-8 py-3 bg-primary text-primary-foreground rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors">
              Schedule a Consultation
            </button> */}
            <button className="px-8 py-3 border border-primary text-primary rounded-full text-lg font-semibold hover:bg-primary/10 transition-colors">
              Download Success Stories
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
