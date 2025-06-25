"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Calendar,
  Clock,
  ArrowRight,
  Search,
  Play,
  BarChart3,
  Users,
  Share2,
  BookOpen,
  Video,
  FileText,
  TrendingUp,
} from "lucide-react"
import Link from "next/link"
import { Input } from "@/components/ui/input"

const blogCategories = [
  { id: "all", label: "All Posts", icon: BookOpen, count: 24 },
  { id: "ai-trends", label: "AI & Automation Trends", icon: TrendingUp, count: 8 },
  { id: "case-studies", label: "Case Studies", icon: BarChart3, count: 6 },
  { id: "industry-insights", label: "Industry Insights", icon: Users, count: 5 },
  { id: "expert-opinions", label: "Expert Opinions", icon: FileText, count: 3 },
  { id: "webinars", label: "Webinars & Videos", icon: Video, count: 2 },
]

const contentTypes = [
  { id: "article", label: "Article", icon: FileText },
  { id: "case-study", label: "Case Study", icon: BarChart3 },
  { id: "infographic", label: "Infographic", icon: TrendingUp },
  { id: "video", label: "Video", icon: Video },
  { id: "webinar", label: "Webinar", icon: Play },
]

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI-Powered Supply Chain Optimization in the Middle East",
    excerpt:
      "Explore how artificial intelligence is revolutionizing supply chain management across the MENA region, with insights from leading industry experts and real-world implementation strategies.",
    image: "/placeholder.svg?height=400&width=600",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "ai-trends",
    contentType: "article",
    author: "Dr. Sarah Al-Mahmoud",
    authorRole: "Chief AI Officer, ITSC",
    authorImage: "/placeholder.svg?height=60&width=60",
    tags: ["AI", "Supply Chain", "Middle East", "Optimization"],
    featured: true,
    views: "2.4K",
    shares: 156,
    slug: "future-ai-supply-chain-middle-east",
  },
  {
    id: 2,
    title: "Case Study: How Al-Noor Retail Achieved 85% Stockout Reduction with AI Forecasting",
    excerpt:
      "Detailed analysis of our successful implementation of AI-powered demand forecasting for Al-Noor Retail Group, resulting in $2.3M annual savings and 96% forecast accuracy.",
    image: "/placeholder.svg?height=400&width=600",
    date: "December 10, 2024",
    readTime: "12 min read",
    category: "case-studies",
    contentType: "case-study",
    author: "Ahmed Al-Rashid",
    authorRole: "Senior Solutions Architect",
    authorImage: "/placeholder.svg?height=60&width=60",
    tags: ["Case Study", "Retail", "Demand Forecasting", "ROI"],
    featured: true,
    views: "3.1K",
    shares: 203,
    slug: "al-noor-retail-ai-forecasting-case-study",
  },
  {
    id: 3,
    title: "5 Key Trends Shaping Supply Chain Automation in 2025",
    excerpt:
      "Discover the emerging trends that will define supply chain automation in 2025, from autonomous warehouses to predictive maintenance and beyond.",
    image: "/placeholder.svg?height=400&width=600",
    date: "December 8, 2024",
    readTime: "6 min read",
    category: "industry-insights",
    contentType: "infographic",
    author: "Omar Al-Mansouri",
    authorRole: "Industry Research Director",
    authorImage: "/placeholder.svg?height=60&width=60",
    tags: ["Trends", "Automation", "2025", "Innovation"],
    featured: false,
    views: "1.8K",
    shares: 124,
    slug: "supply-chain-automation-trends-2025",
  },
  {
    id: 4,
    title: "Webinar: Implementing Zero-Downtime Warehouse Automation",
    excerpt:
      "Join our experts for an in-depth discussion on implementing warehouse automation without disrupting operations, featuring real examples from Gulf Express Logistics.",
    image: "/placeholder.svg?height=400&width=600",
    date: "December 5, 2024",
    readTime: "45 min watch",
    category: "webinars",
    contentType: "webinar",
    author: "Fatima Al-Zahra",
    authorRole: "Warehouse Automation Lead",
    authorImage: "/placeholder.svg?height=60&width=60",
    tags: ["Webinar", "Warehouse", "Automation", "Implementation"],
    featured: false,
    views: "892",
    shares: 67,
    slug: "zero-downtime-warehouse-automation-webinar",
  },
  {
    id: 5,
    title: "The ROI of Predictive Maintenance: A Data-Driven Analysis",
    excerpt:
      "Comprehensive analysis of predictive maintenance ROI across different industries, with real data from our implementations showing average savings of 40% in maintenance costs.",
    image: "/placeholder.svg?height=400&width=600",
    date: "December 3, 2024",
    readTime: "10 min read",
    category: "expert-opinions",
    contentType: "article",
    author: "Dr. Khalid Al-Otaibi",
    authorRole: "Head of Predictive Analytics",
    authorImage: "/placeholder.svg?height=60&width=60",
    tags: ["Predictive Maintenance", "ROI", "Data Analysis", "Cost Savings"],
    featured: false,
    views: "2.7K",
    shares: 189,
    slug: "predictive-maintenance-roi-analysis",
  },
  {
    id: 6,
    title: "Route Optimization Success: Desert Commerce's 35% Fuel Savings Journey",
    excerpt:
      "Step-by-step breakdown of how Desert Commerce Co. achieved 35% fuel cost reduction and 96% on-time delivery through our AI-powered route optimization solution.",
    image: "/placeholder.svg?height=400&width=600",
    date: "November 28, 2024",
    readTime: "9 min read",
    category: "case-studies",
    contentType: "case-study",
    author: "Amira Hassan",
    authorRole: "Route Optimization Specialist",
    authorImage: "/placeholder.svg?height=60&width=60",
    tags: ["Route Optimization", "Fuel Savings", "E-commerce", "Success Story"],
    featured: false,
    views: "1.9K",
    shares: 142,
    slug: "desert-commerce-route-optimization-success",
  },
  {
    id: 7,
    title: "Video: AI in Action - Real-Time Supply Chain Visibility Demo",
    excerpt:
      "Watch our live demonstration of real-time supply chain visibility in action, featuring our platform tracking shipments across 15 countries for Arabian Steel Industries.",
    image: "/placeholder.svg?height=400&width=600",
    date: "November 25, 2024",
    readTime: "15 min watch",
    category: "webinars",
    contentType: "video",
    author: "Youssef Al-Mahmoud",
    authorRole: "Product Demo Specialist",
    authorImage: "/placeholder.svg?height=60&width=60",
    tags: ["Video", "Demo", "Supply Chain Visibility", "Real-time"],
    featured: false,
    views: "1.2K",
    shares: 89,
    slug: "ai-supply-chain-visibility-demo",
  },
  {
    id: 8,
    title: "Expert Opinion: The Impact of Geopolitical Events on Supply Chain Risk Management",
    excerpt:
      "Our risk management experts analyze how recent geopolitical developments affect supply chain operations and share strategies for building resilient networks.",
    image: "/placeholder.svg?height=400&width=600",
    date: "November 22, 2024",
    readTime: "7 min read",
    category: "expert-opinions",
    contentType: "article",
    author: "Dr. Layla Al-Rashid",
    authorRole: "Risk Management Director",
    authorImage: "/placeholder.svg?height=60&width=60",
    tags: ["Risk Management", "Geopolitics", "Supply Chain", "Expert Opinion"],
    featured: false,
    views: "2.1K",
    shares: 167,
    slug: "geopolitical-impact-supply-chain-risk",
  },
  {
    id: 9,
    title: "Infographic: The Complete Guide to Warehouse Automation ROI",
    excerpt:
      "Visual breakdown of warehouse automation return on investment, featuring data from 50+ implementations and average payback periods by industry sector.",
    image: "/placeholder.svg?height=400&width=600",
    date: "November 20, 2024",
    readTime: "3 min read",
    category: "industry-insights",
    contentType: "infographic",
    author: "Nadia Al-Mansouri",
    authorRole: "Data Visualization Specialist",
    authorImage: "/placeholder.svg?height=60&width=60",
    tags: ["Infographic", "Warehouse", "ROI", "Automation"],
    featured: false,
    views: "1.5K",
    shares: 98,
    slug: "warehouse-automation-roi-guide",
  },
]

const featuredStats = [
  { label: "Monthly Readers", value: "25K+", icon: Users },
  { label: "Published Articles", value: "150+", icon: FileText },
  { label: "Industry Experts", value: "12", icon: TrendingUp },
  { label: "Average Engagement", value: "8.5%", icon: Share2 },
]

export default function BlogSection() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")
  const [activeContentType, setActiveContentType] = useState("all")

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = activeCategory === "all" || post.category === activeCategory
    const matchesContentType = activeContentType === "all" || post.contentType === activeContentType
    return matchesSearch && matchesCategory && matchesContentType
  })

  const featuredPosts = filteredPosts.filter((post) => post.featured)
  const regularPosts = filteredPosts.filter((post) => !post.featured)

  const getContentTypeIcon = (type: string) => {
    const contentType = contentTypes.find((ct) => ct.id === type)
    return contentType ? contentType.icon : FileText
  }

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
            <span className="text-sm font-semibold text-primary">Thought Leadership</span>
          </div>
          <h2 className="text-4xl font-mono mb-4 text-foreground dark:text-foreground">
            Supply Chain <span className="text-primary">Intelligence Hub</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay ahead of the curve with expert insights, case studies, and the latest trends in AI-powered supply chain
            optimization from ITSC's industry leaders.
          </p>
        </motion.div>

        {/* Blog Statistics */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 p-8 rounded-2xl bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {featuredStats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          className="mb-12 space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              type="text"
              placeholder="Search articles, case studies, and insights..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 pr-4 py-4 text-lg bg-card dark:bg-card border-border dark:border-border rounded-xl"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {blogCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-card text-muted-foreground hover:bg-primary/10 dark:bg-card dark:hover:bg-primary/10"
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.label}
                <span className="text-xs opacity-75">({category.count})</span>
              </button>
            ))}
          </div>

          {/* Content Type Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setActiveContentType("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeContentType === "all"
                  ? "bg-secondary text-secondary-foreground"
                  : "bg-card text-muted-foreground hover:bg-secondary/10 dark:bg-card dark:hover:bg-secondary/10"
              }`}
            >
              All Content
            </button>
            {contentTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setActiveContentType(type.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeContentType === type.id
                    ? "bg-secondary text-secondary-foreground"
                    : "bg-card text-muted-foreground hover:bg-secondary/10 dark:bg-card dark:hover:bg-secondary/10"
                }`}
              >
                <type.icon className="w-4 h-4" />
                {type.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-foreground dark:text-foreground">Featured Articles</h3>
            <div className="grid gap-8 lg:grid-cols-2">
              {featuredPosts.slice(0, 2).map((post, index) => {
                const ContentTypeIcon = getContentTypeIcon(post.contentType)
                return (
                  <article
                    key={post.id}
                    className="group bg-card dark:bg-card rounded-2xl overflow-hidden shadow-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
                  >
                    <Link href={`/blog/${post.slug}`} className="block">
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute top-4 left-4 flex items-center gap-2">
                          <span className="px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                            Featured
                          </span>
                          <span className="px-3 py-1 text-xs font-medium bg-background/80 backdrop-blur text-foreground rounded-full flex items-center gap-1">
                            <ContentTypeIcon className="w-3 h-3" />
                            {contentTypes.find((ct) => ct.id === post.contentType)?.label}
                          </span>
                        </div>
                        <div className="absolute bottom-4 right-4 flex items-center gap-4 text-white text-sm">
                          <div className="flex items-center gap-1">
                            <Users className="w-4 h-4" />
                            {post.views}
                          </div>
                          <div className="flex items-center gap-1">
                            <Share2 className="w-4 h-4" />
                            {post.shares}
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {post.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {post.readTime}
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 text-foreground dark:text-foreground group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 leading-relaxed">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <img
                              src={post.authorImage || "/placeholder.svg"}
                              alt={post.author}
                              className="w-10 h-10 rounded-full object-cover"
                            />
                            <div>
                              <div className="font-medium text-foreground dark:text-foreground">{post.author}</div>
                              <div className="text-sm text-muted-foreground">{post.authorRole}</div>
                            </div>
                          </div>
                          <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                        </div>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {post.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </Link>
                  </article>
                )
              })}
            </div>
          </motion.div>
        )}

        {/* Regular Posts Grid */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-foreground dark:text-foreground">Latest Insights</h3>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {regularPosts.map((post, index) => {
              const ContentTypeIcon = getContentTypeIcon(post.contentType)
              return (
                <article
                  key={post.id}
                  className="group bg-card dark:bg-card rounded-2xl overflow-hidden shadow-lg border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl"
                >
                  <Link href={`/blog/${post.slug}`} className="block">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 text-xs font-medium bg-background/80 backdrop-blur text-foreground rounded-full flex items-center gap-1">
                          <ContentTypeIcon className="w-3 h-3" />
                          {contentTypes.find((ct) => ct.id === post.contentType)?.label}
                        </span>
                      </div>
                      <div className="absolute bottom-4 right-4 flex items-center gap-3 text-white text-sm">
                        <div className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          {post.views}
                        </div>
                        <div className="flex items-center gap-1">
                          <Share2 className="w-3 h-3" />
                          {post.shares}
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {post.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {post.readTime}
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold mb-2 text-foreground dark:text-foreground group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center gap-2 mb-3">
                        <img
                          src={post.authorImage || "/placeholder.svg"}
                          alt={post.author}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <div>
                          <div className="font-medium text-sm text-foreground dark:text-foreground">{post.author}</div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                </article>
              )
            })}
          </div>
        </motion.div>

        {/* Newsletter Subscription */}
        <motion.div
          className="text-center p-12 rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 border border-primary/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <BookOpen className="w-16 h-16 text-primary mx-auto mb-6" />
          <h3 className="text-3xl font-bold mb-4 text-foreground dark:text-foreground">Stay Ahead of the Curve</h3>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest supply chain insights, case studies, and industry trends
            delivered directly to your inbox every week.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-8">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 bg-background dark:bg-background border-border dark:border-border"
            />
            <button className="px-6 py-2 bg-primary text-primary-foreground rounded-md font-semibold hover:bg-primary/90 transition-colors">
              Subscribe
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">Weekly</div>
              <div className="text-sm text-muted-foreground">Expert Insights</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">15K+</div>
              <div className="text-sm text-muted-foreground">Subscribers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">No Spam</div>
              <div className="text-sm text-muted-foreground">Unsubscribe Anytime</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
