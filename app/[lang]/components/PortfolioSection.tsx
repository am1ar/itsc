"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { TrendingUp, Clock, DollarSign, Target, Users, Truck, Package, Globe } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "AI-Powered Demand Forecasting for Regional Retailer",
    category: "Predictive Analytics",
    industry: "Retail",
    client: "Al-Noor Retail Group",
    location: "Saudi Arabia",
    description:
      "Implemented advanced machine learning algorithms to predict demand patterns across 150+ retail locations, reducing stockouts and optimizing inventory levels.",
    challenge:
      "40% stockout rate during peak seasons, $3.2M in lost sales annually, and 25% excess inventory in slow-moving categories.",
    solution:
      "Deployed neural network-based forecasting system analyzing historical sales, weather patterns, local events, and economic indicators with real-time adjustment capabilities.",
    results: [
      { metric: "Stockout Reduction", value: "85%", icon: Package },
      { metric: "Inventory Cost Savings", value: "$2.3M", icon: DollarSign },
      { metric: "Forecast Accuracy", value: "96%", icon: Target },
      { metric: "Implementation Time", value: "8 weeks", icon: Clock },
    ],
    technologies: ["TensorFlow", "Python", "Apache Kafka", "PostgreSQL", "React"],
    image: "/placeholder.svg?height=400&width=600",
    testimonial: {
      quote:
        "ITSC's forecasting solution transformed our inventory management. We've eliminated stockouts during Ramadan and reduced excess inventory by millions.",
      author: "Ahmed Al-Mansouri",
      position: "Supply Chain Director",
    },
    type: "analytics",
  },
  {
    id: 2,
    title: "Automated Warehouse Management for Logistics Giant",
    category: "Warehouse Automation",
    industry: "Logistics",
    client: "Gulf Express Logistics",
    location: "UAE",
    description:
      "Revolutionized warehouse operations with AI-driven robotics and intelligent inventory placement, achieving 300% throughput improvement.",
    challenge:
      "Manual picking processes, 60% warehouse space utilization, 4-hour average order fulfillment time, and 15% picking errors.",
    solution:
      "Integrated robotic picking systems with computer vision, AI-optimized storage algorithms, and real-time inventory tracking across 500,000 sq ft facility.",
    results: [
      { metric: "Throughput Increase", value: "300%", icon: TrendingUp },
      { metric: "Space Utilization", value: "95%", icon: Package },
      { metric: "Picking Accuracy", value: "99.8%", icon: Target },
      { metric: "Order Fulfillment", value: "45 min", icon: Clock },
    ],
    technologies: ["ROS", "Computer Vision", "IoT Sensors", "MongoDB", "Node.js"],
    image: "/placeholder.svg?height=400&width=600",
    testimonial: {
      quote:
        "The automation solution exceeded our expectations. We're now processing 3x more orders with the same workforce and virtually zero errors.",
      author: "Fatima Al-Zahra",
      position: "Operations Manager",
    },
    type: "automation",
  },
  {
    id: 3,
    title: "Smart Route Optimization for Delivery Network",
    category: "Route Optimization",
    industry: "E-commerce",
    client: "Desert Commerce Co.",
    location: "Saudi Arabia",
    description:
      "Deployed AI-powered route optimization across 500+ delivery vehicles, reducing fuel costs and improving delivery times across the Kingdom.",
    challenge:
      "Rising fuel costs ($1.8M annually), 30% late deliveries, inefficient route planning, and customer satisfaction below 70%.",
    solution:
      "Implemented dynamic routing algorithms considering real-time traffic, weather, vehicle capacity, and customer preferences with mobile driver apps.",
    results: [
      { metric: "Fuel Cost Reduction", value: "35%", icon: DollarSign },
      { metric: "On-time Delivery", value: "96%", icon: Clock },
      { metric: "Customer Satisfaction", value: "94%", icon: Users },
      { metric: "Daily Routes Optimized", value: "2,500+", icon: Truck },
    ],
    technologies: ["Google Maps API", "Machine Learning", "React Native", "Firebase", "Python"],
    image: "/placeholder.svg?height=400&width=600",
    testimonial: {
      quote:
        "ITSC's route optimization saved us over $600K in fuel costs in the first year alone. Our customers love the improved delivery experience.",
      author: "Omar Al-Rashid",
      position: "Logistics Director",
    },
    type: "optimization",
  },
  {
    id: 4,
    title: "End-to-End Supply Chain Visibility Platform",
    category: "Supply Chain Visibility",
    industry: "Manufacturing",
    client: "Arabian Steel Industries",
    location: "Saudi Arabia",
    description:
      "Created comprehensive visibility platform tracking materials from suppliers to customers across 15 countries, enabling proactive decision-making.",
    challenge:
      "Limited visibility across global supply chain, 25% of shipments delayed, manual tracking processes, and reactive problem-solving approach.",
    solution:
      "Developed IoT-enabled tracking system with blockchain verification, predictive analytics for disruption detection, and real-time dashboard for stakeholders.",
    results: [
      { metric: "Shipment Visibility", value: "100%", icon: Globe },
      { metric: "Delay Reduction", value: "70%", icon: Clock },
      { metric: "Issue Resolution Time", value: "80% faster", icon: TrendingUp },
      { metric: "Customer Satisfaction", value: "92%", icon: Users },
    ],
    technologies: ["Blockchain", "IoT", "React", "Node.js", "AWS"],
    image: "/placeholder.svg?height=400&width=600",
    testimonial: {
      quote:
        "The visibility platform gave us complete control over our global supply chain. We can now predict and prevent issues before they impact customers.",
      author: "Sarah Al-Mahmoud",
      position: "Supply Chain VP",
    },
    type: "visibility",
  },
  {
    id: 5,
    title: "Predictive Maintenance for Fleet Management",
    category: "Fleet Optimization",
    industry: "Transportation",
    client: "Kingdom Transport Solutions",
    location: "Saudi Arabia",
    description:
      "Implemented AI-driven predictive maintenance system for 800+ vehicle fleet, reducing downtime and extending vehicle lifespan significantly.",
    challenge:
      "Unexpected breakdowns costing $2.1M annually, 15% vehicle downtime, reactive maintenance approach, and high repair costs.",
    solution:
      "Deployed IoT sensors and machine learning algorithms to predict maintenance needs, optimize service schedules, and prevent costly breakdowns.",
    results: [
      { metric: "Breakdown Reduction", value: "78%", icon: TrendingUp },
      { metric: "Maintenance Cost Savings", value: "$1.6M", icon: DollarSign },
      { metric: "Vehicle Uptime", value: "97%", icon: Truck },
      { metric: "Fleet Lifespan Extension", value: "30%", icon: Clock },
    ],
    technologies: ["IoT", "Machine Learning", "Telematics", "Python", "AWS IoT"],
    image: "/placeholder.svg?height=400&width=600",
    testimonial: {
      quote:
        "ITSC's predictive maintenance solution transformed our fleet operations. We've virtually eliminated unexpected breakdowns and saved millions.",
      author: "Khalid Al-Otaibi",
      position: "Fleet Manager",
    },
    type: "fleet",
  },
  {
    id: 6,
    title: "AI-Powered Risk Management System",
    category: "Risk Management",
    industry: "Import/Export",
    client: "Gulf Trade Partners",
    location: "UAE",
    description:
      "Developed intelligent risk assessment platform analyzing geopolitical, weather, and market factors to protect $500M+ in annual trade value.",
    challenge:
      "Unpredictable supply chain disruptions, $5M in losses from unforeseen events, manual risk assessment, and reactive contingency planning.",
    solution:
      "Built AI system analyzing 1000+ risk factors including geopolitical events, weather patterns, market volatility, and supplier reliability scores.",
    results: [
      { metric: "Risk Prediction Accuracy", value: "94%", icon: Target },
      { metric: "Loss Prevention", value: "$4.2M", icon: DollarSign },
      { metric: "Response Time", value: "75% faster", icon: Clock },
      { metric: "Trade Value Protected", value: "$500M+", icon: Globe },
    ],
    technologies: ["Natural Language Processing", "Big Data Analytics", "Python", "Apache Spark", "Elasticsearch"],
    image: "/placeholder.svg?height=400&width=600",
    testimonial: {
      quote:
        "The risk management system helped us avoid major losses during recent global disruptions. It's like having a crystal ball for supply chain risks.",
      author: "Amira Hassan",
      position: "Risk Management Director",
    },
    type: "risk",
  },
]

const filterCategories = [
  { label: "All Projects", value: "all" },
  { label: "Predictive Analytics", value: "analytics" },
  { label: "Warehouse Automation", value: "automation" },
  { label: "Route Optimization", value: "optimization" },
  { label: "Supply Chain Visibility", value: "visibility" },
  { label: "Fleet Management", value: "fleet" },
  { label: "Risk Management", value: "risk" },
]

const industries = [
  { label: "All Industries", value: "all" },
  { label: "Retail", value: "Retail" },
  { label: "Logistics", value: "Logistics" },
  { label: "E-commerce", value: "E-commerce" },
  { label: "Manufacturing", value: "Manufacturing" },
  { label: "Transportation", value: "Transportation" },
  { label: "Import/Export", value: "Import/Export" },
]

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [activeIndustry, setActiveIndustry] = useState("all")
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const filteredProjects = projects.filter((project) => {
    const matchesFilter = activeFilter === "all" || project.type === activeFilter
    const matchesIndustry = activeIndustry === "all" || project.industry === activeIndustry
    return matchesFilter && matchesIndustry
  })

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
            <span className="text-sm font-semibold text-primary">Success Stories</span>
          </div>
          <h2 className="text-4xl font-mono mb-4 dark:text-white">
            Transforming Supply Chains with <span className="text-primary">Proven Results</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how ITSC's AI and automation solutions have delivered measurable value across diverse industries,
            from Saudi Arabia to global markets.
          </p>
        </motion.div>

        {/* Impact Statistics */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 p-8 rounded-2xl bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">$15M+</div>
            <div className="text-sm text-muted-foreground">Cost Savings Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">98%</div>
            <div className="text-sm text-muted-foreground">Average Accuracy Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">250%</div>
            <div className="text-sm text-muted-foreground">Average Efficiency Gain</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">15+</div>
            <div className="text-sm text-muted-foreground">Countries Served</div>
          </div>
        </motion.div>

        {/* Filter Buttons */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <div className="text-sm font-medium text-muted-foreground mb-2">Filter by Solution:</div>
            {filterCategories.map((category) => (
              <button
                key={category.value}
                onClick={() => setActiveFilter(category.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === category.value
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-muted-foreground hover:bg-primary/10 dark:bg-card dark:hover:bg-primary/10"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="text-sm font-medium text-muted-foreground mb-2">Filter by Industry:</div>
            {industries.map((industry) => (
              <button
                key={industry.value}
                onClick={() => setActiveIndustry(industry.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeIndustry === industry.value
                    ? "bg-secondary text-secondary-foreground"
                    : "bg-card text-muted-foreground hover:bg-secondary/10 dark:bg-card dark:hover:bg-secondary/10"
                }`}
              >
                {industry.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid gap-8 lg:grid-cols-2">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative bg-card dark:bg-card rounded-2xl overflow-hidden shadow-lg 
                  border border-border dark:border-border hover:border-primary/50 dark:hover:border-primary/50
                  transition-all duration-300 hover:shadow-xl"
              >
                {/* Project Header */}
                <div className="p-6 border-b border-border">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                          {project.category}
                        </span>
                        <span className="px-3 py-1 text-xs font-medium bg-secondary/10 text-secondary-foreground rounded-full">
                          {project.industry}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground dark:text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <div className="text-sm text-muted-foreground mb-2">
                        <strong>Client:</strong> {project.client} • <strong>Location:</strong> {project.location}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                </div>

                {/* Challenge & Solution */}
                <div className="p-6 border-b border-border">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h4 className="text-sm font-semibold text-destructive mb-2">Challenge:</h4>
                      <p className="text-sm text-muted-foreground">{project.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-2">Solution:</h4>
                      <p className="text-sm text-muted-foreground">{project.solution}</p>
                    </div>
                  </div>
                </div>

                {/* Results */}
                <div className="p-6 border-b border-border">
                  <h4 className="text-sm font-semibold text-foreground mb-4">Measurable Results:</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {project.results.map((result, idx) => (
                      <div key={idx} className="text-center p-3 rounded-lg bg-muted/50">
                        <result.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                        <div className="text-lg font-bold text-primary">{result.value}</div>
                        <div className="text-xs text-muted-foreground">{result.metric}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="p-6 border-b border-border">
                  <h4 className="text-sm font-semibold text-foreground mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs bg-muted text-muted-foreground rounded-full border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="p-6">
                  <div className="bg-primary/5 rounded-lg p-4 border-l-4 border-primary">
                    <p className="text-sm text-muted-foreground italic mb-3">"{project.testimonial.quote}"</p>
                    <div className="text-sm">
                      <div className="font-semibold text-foreground">{project.testimonial.author}</div>
                      <div className="text-muted-foreground">{project.testimonial.position}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-20 text-center p-12 rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 border border-primary/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-3xl font-bold mb-4 text-foreground dark:text-foreground">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let ITSC transform your supply chain operations with proven AI and automation solutions. Start your journey
            to measurable results today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors">
              Discuss Your Project
            </button>
            {/* <button className="px-8 py-3 border border-primary text-primary rounded-full text-lg font-semibold hover:bg-primary/10 transition-colors">
              Download Case Studies
            </button> */}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
