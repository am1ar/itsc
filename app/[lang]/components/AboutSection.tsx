'use client';

import { Dictionary } from '@/types/dictionary';
import { motion } from 'framer-motion';
import { BarChart3, Globe, Target, Zap } from 'lucide-react';

const icons = [Target, Zap, BarChart3, Globe];

interface AboutSectionProps {
	dictionary: Dictionary;
	lang: string;
}

export default function AboutSection({ dictionary, lang }: AboutSectionProps) {
	return (
		<section className='relative z-10 bg-muted dark:bg-muted/10 py-24'>
			<div className='container mx-auto max-w-7xl px-6'>
				<div className='relative z-10 px-6 py-24'>
					<div className='mx-auto max-w-7xl'>
						<div className='grid gap-12 lg:grid-cols-2 lg:gap-24 items-center'>
							{/* Left Column - Content */}
							<motion.div
								className='space-y-8'
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6 }}
							>
								<div className='inline-flex items-center rounded-full border border-primary/20 bg-primary/10 dark:border-primary/30 dark:bg-primary/20 px-4 py-2'>
									<span className='text-sm font-semibold text-primary'>
										{dictionary.about.title}
									</span>
								</div>

								<h2 className='text-4xl font-mono leading-tight dark:text-white'>
									{dictionary.about.title}
								</h2>

								<p className='text-lg text-gray-600 dark:text-gray-300'>
									{dictionary.about.description}
								</p>

								<div className='space-y-6'>
									{dictionary.about.features.map((feature, index) => (
										<motion.div
											key={feature.title}
											className='flex items-start gap-4'
											initial={{ opacity: 0, y: 20 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
										>
											<div className='mt-1 rounded-full bg-primary/20 dark:bg-primary/30 p-2'>
												<svg
													className={`w-4 h-4 text-primary ${
														lang === 'ar' ? 'transform scale-x-[-1]' : ''
													}`}
													fill='none'
													viewBox='0 0 24 24'
													stroke='currentColor'
												>
													<path
														strokeLinecap='round'
														strokeLinejoin='round'
														strokeWidth={3}
														d='M5 13l4 4L19 7'
													/>
												</svg>
											</div>
											<div>
												<h3 className='font-semibold text-foreground dark:text-foreground mb-1'>
													{feature.title}
												</h3>
												<p className='text-gray-600 dark:text-gray-300'>
													{feature.description}
												</p>
											</div>
										</motion.div>
									))}
								</div>
							</motion.div>

							{/* Right Column - Stats */}
							<motion.div
								className='grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8'
								initial={{ opacity: 0, x: 20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.6, delay: 0.2 }}
							>
								{dictionary.about.stats.map((stat, index) => {
									const Icon = icons[index];
									return (
										<motion.div
											key={stat.label}
											className='group rounded-2xl border border-border dark:border-border bg-card dark:bg-card p-8 text-center shadow-lg hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 hover:shadow-xl'
											initial={{ opacity: 0, y: 20 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ duration: 0.6, delay: 0.1 * index }}
										>
											<div className='mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 dark:bg-primary/20 group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors'>
												<Icon className='h-6 w-6 text-primary' />
											</div>
											<div className='text-3xl font-bold text-primary mb-1'>
												{stat.value}
											</div>
											<div className='text-sm text-muted-foreground'>
												{stat.label}
											</div>
										</motion.div>
									);
								})}
							</motion.div>
						</div>

						{/* Additional Section - Technology Focus */}
						{/* <motion.div
              className="mt-20 rounded-2xl border border-border dark:border-border bg-card dark:bg-card p-8 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="grid gap-8 lg:grid-cols-3">
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20">
                    <Code2 className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground dark:text-foreground">
                    AI-Powered Analytics
                  </h3>
                  <p className="text-muted-foreground">
                    Advanced machine learning algorithms that predict, optimize, and automate supply chain decisions in
                    real-time.
                  </p>
                </div>
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20">
                    <Rocket className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground dark:text-foreground">
                    Automation Excellence
                  </h3>
                  <p className="text-muted-foreground">
                    Intelligent automation systems that streamline operations, reduce manual errors, and accelerate
                    delivery times.
                  </p>
                </div>
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 dark:bg-primary/20">
                    <Trophy className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground dark:text-foreground">Proven Results</h3>
                  <p className="text-muted-foreground">
                    Delivering measurable improvements in cost reduction, productivity enhancement, and profit
                    maximization for our clients.
                  </p>
                </div>
              </div>
            </motion.div> */}
					</div>
				</div>
			</div>
		</section>
	);
}
