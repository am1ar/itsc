'use client';

import { motion } from 'framer-motion';
import {
	Award,
	Clock,
	DollarSign,
	Package,
	Quote,
	TrendingUp,
} from 'lucide-react';

export default function SuccessStorySection() {
	const achievements = [
		{
			icon: TrendingUp,
			metric: '45%',
			label: 'Increase in Efficiency',
			description: 'Streamlined operations across all warehouses',
		},
		{
			icon: DollarSign,
			metric: '$2.3M',
			label: 'Annual Savings',
			description: 'Reduced operational costs significantly',
		},
		{
			icon: Clock,
			metric: '60%',
			label: 'Faster Processing',
			description: 'Accelerated order fulfillment times',
		},
		{
			icon: Package,
			metric: '99.8%',
			label: 'Inventory Accuracy',
			description: 'Near-perfect stock tracking',
		},
	];

	return (
		<section className='relative py-24 overflow-hidden'>
			{/* Background Pattern */}
			<div className='absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent' />

			<div className='container mx-auto relative'>
				{/* Section Header */}
				<motion.div
					className='text-center mb-16'
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4'>
						<Award className='w-4 h-4' />
						<span className='text-sm font-medium'>Success Story</span>
					</div>
					<h2 className='text-4xl md:text-5xl font-bold mb-4'>
						Transforming Saudi Retail Giant's
						<span className='block text-primary mt-2'>
							Supply Chain Operations
						</span>
					</h2>
					<p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
						How Al-Rashid Retail Group revolutionized their inventory management
						and logistics with ITSC's AI-powered solutions
					</p>
				</motion.div>

				<div className='grid lg:grid-cols-2 gap-12 items-center'>
					{/* Left Column - Story Content */}
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						{/* Client Info */}
						<div className='mb-8'>
							<div className='flex items-center gap-4 mb-4'>
								<div className='w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center'>
									<Package className='w-8 h-8 text-primary' />
								</div>
								<div>
									<h3 className='text-2xl font-bold'>Al-Rashid Group</h3>
									<p className='text-muted-foreground'>
										Leading Retail Chain in Saudi Arabia
									</p>
								</div>
							</div>
						</div>

						{/* Challenge */}
						<div className='mb-8'>
							<h4 className='text-xl font-semibold mb-3'>The Challenge</h4>
							<p className='text-muted-foreground leading-relaxed'>
								The organization was struggling with operational inefficiencies,
								which were hindering growth and profitability. There were
								significant weaknesses in workflow processes, and the company
								lacked the right tools to streamline operations effectively.
								Despite having a good customer base, the company was unable to
								increase its client retention or scale its services efficiently.
							</p>
						</div>

						{/* Solution */}
						<div className='mb-8'>
							<h4 className='text-xl font-semibold mb-3'>The ITSC Solution</h4>
							<p className='text-muted-foreground leading-relaxed mb-4'>
								Through strategic planning and data analysis, ITSC identified
								key weaknesses and strengths within the organization's
								operations.
							</p>
							<ul className='space-y-2'>
								<li className='flex items-start gap-2'>
									<div className='w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5'>
										<div className='w-2 h-2 rounded-full bg-primary' />
									</div>
									<span className='text-muted-foreground'>
										Analyzed operational data to pinpoint inefficiencies and
										areas for improvement.
									</span>
								</li>
								<li className='flex items-start gap-2'>
									<div className='w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5'>
										<div className='w-2 h-2 rounded-full bg-primary' />
									</div>
									<span className='text-muted-foreground'>
										Work tasks were reassigned to improve resource utilization
										and productivity.
									</span>
								</li>
								<li className='flex items-start gap-2'>
									<div className='w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5'>
										<div className='w-2 h-2 rounded-full bg-primary' />
									</div>
									<span className='text-muted-foreground'>
										A customized ERP system was created to automate workflows
										and optimize daily processes.
									</span>
								</li>
								<li className='flex items-start gap-2'>
									<div className='w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5'>
										<div className='w-2 h-2 rounded-full bg-primary' />
									</div>
									<span className='text-muted-foreground'>
										A system was put in place to enhance the speed and
										efficiency of operations, reducing manual effort and
										eliminating bottlenecks.
									</span>
								</li>
							</ul>
						</div>

						{/* Testimonial */}
						<div className='bg-primary/5 rounded-2xl p-6 border border-primary/10'>
							<Quote className='w-8 h-8 text-primary mb-4' />
							<blockquote className='text-lg italic mb-4'>
								"As a result of ITSC's innovative approach, our business
								experienced unparalleled growth. The customized ERP system and
								operational improvements drastically enhanced our workflow, and
								the strategic restructuring delivered immediate results. Our
								client base increased by 700%, and the business shifted from
								unprofitable to profitable. ITSC's solutions have transformed
								our organization, boosting customer loyalty and improving our
								cash flows. We are now poised for sustained success and
								expansion thanks to their expertise."
							</blockquote>
							<div className='flex items-center gap-3'>
								<div className='w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center'>
									<span className='text-lg font-bold text-primary'>MK</span>
								</div>
								<div>
									<p className='font-semibold'>Mohammed Al-Khalid</p>
									<p className='text-sm text-muted-foreground'>
										CEO, Al-Rashid Retail Group
									</p>
								</div>
							</div>
						</div>
					</motion.div>

					{/* Right Column - Achievements & Visuals */}
					<motion.div
						initial={{ opacity: 0, x: 20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.4 }}
					>
						{/* Visual Dashboard Preview */}
						{/* <div className="mb-8 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 blur-3xl" />
              <div className="relative bg-card rounded-2xl border shadow-xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <h5 className="text-lg font-semibold">Supply Chain Performance</h5>
                  <span className="text-sm text-muted-foreground">Live Dashboard</span>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-primary/5 rounded-lg p-4">
                      <p className="text-sm text-muted-foreground mb-1">Orders Processed</p>
                      <p className="text-2xl font-bold">12,847</p>
                      <p className="text-xs text-green-600 mt-1">↑ 45% from last month</p>
                    </div>
                    <div className="bg-primary/5 rounded-lg p-4">
                      <p className="text-sm text-muted-foreground mb-1">Delivery Time</p>
                      <p className="text-2xl font-bold">2.3 hrs</p>
                      <p className="text-xs text-green-600 mt-1">↓ 60% improvement</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-muted-foreground">Inventory Accuracy</span>
                        <span className="font-medium">99.8%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: "99.8%" }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-muted-foreground">On-Time Delivery</span>
                        <span className="font-medium">96.5%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: "96.5%" }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

						{/* Key Achievements Grid */}
						{/* <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="bg-card rounded-xl border p-6 hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <achievement.icon className="w-8 h-8 text-primary mb-3" />
                  <p className="text-3xl font-bold mb-1">{achievement.metric}</p>
                  <p className="text-sm font-medium mb-1">{achievement.label}</p>
                  <p className="text-xs text-muted-foreground">{achievement.description}</p>
                </motion.div>
              ))}
            </div> */}

						{/* CTA */}
						{/* <motion.div
              className="mt-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                View More Success Stories
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div> */}
					</motion.div>
				</div>
			</div>
		</section>
	);
}
