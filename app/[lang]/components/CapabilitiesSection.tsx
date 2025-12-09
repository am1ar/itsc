'use client';

import { Dictionary } from '@/types/dictionary';
import { motion } from 'framer-motion';
import {
	Brain,
	Warehouse,
	Bot,
	Code,
	TrendingUp,
	CheckCircle2,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface CapabilitiesSectionProps {
	dictionary: Dictionary;
	lang: string;
}

const iconMap: { [key: string]: any } = {
	Brain: Brain,
	Warehouse: Warehouse,
	Bot: Bot,
	Code: Code,
	TrendingUp: TrendingUp,
};

export default function CapabilitiesSection({
	dictionary,
	lang,
}: CapabilitiesSectionProps) {
	const isRTL = lang === 'ar';
	const capabilities = dictionary.capabilities;

	return (
		<section
			className={cn(
				'relative z-10 bg-background text-foreground px-6 py-24',
				isRTL ? 'rtl font-arabic' : 'ltr'
			)}
			dir={isRTL ? 'rtl' : 'ltr'}
		>
			<div className='container mx-auto max-w-7xl'>
				{/* Header */}
				<motion.div
					className={cn('text-center mb-16', isRTL && 'text-right')}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<div className='inline-flex items-center rounded-full border border-primary/20 bg-primary/10 dark:border-primary/30 dark:bg-primary/20 px-4 py-2 mb-6'>
						<span className='text-sm font-semibold text-primary'>
							{capabilities.title}
						</span>
					</div>
					<h2
						className={cn(
							'text-4xl md:text-5xl font-mono mb-4 dark:text-white',
							isRTL && 'text-right font-arabic'
						)}
					>
						{capabilities.subtitle}
					</h2>
				</motion.div>

				{/* Capabilities Sections */}
				<div className='space-y-24'>
					{capabilities.sections.map((section: any, sectionIndex: number) => {
						const IconComponent = iconMap[section.icon] || Brain;
						const isMetricsSection = section.id === 'measurable-outcomes';

						return (
							<motion.div
								key={section.id}
								initial={{ opacity: 0, y: 40 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
								className={cn(
									'bg-card dark:bg-card rounded-2xl p-8 md:p-12 shadow-lg border border-border dark:border-border',
									isRTL && 'text-right'
								)}
							>
								{/* Section Header */}
								<div
									className={cn(
										'flex items-start gap-6 mb-8',
										isRTL && 'flex-row-reverse'
									)}
								>
									<div className='p-4 rounded-xl bg-primary/10 dark:bg-primary/20 flex-shrink-0'>
										<IconComponent className='w-8 h-8 text-primary' />
									</div>
									<div className='flex-1'>
										<h3
											className={cn(
												'text-2xl md:text-3xl font-bold mb-4 text-foreground dark:text-foreground',
												isRTL && 'text-right font-arabic'
											)}
										>
											{section.headline}
										</h3>
										{section.content && (
											<p
												className={cn(
													'text-lg text-muted-foreground leading-relaxed mb-6',
													isRTL && 'text-right font-arabic'
												)}
											>
												{section.content}
											</p>
										)}
									</div>
								</div>

								{/* Content */}
								{isMetricsSection ? (
									/* Metrics Grid */
									<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
										{section.metrics.map((metric: any, index: number) => (
											<motion.div
												key={index}
												className='bg-muted/50 dark:bg-muted/20 rounded-xl p-6 border border-border'
												initial={{ opacity: 0, scale: 0.9 }}
												animate={{ opacity: 1, scale: 1 }}
												transition={{ duration: 0.4, delay: sectionIndex * 0.1 + index * 0.05 }}
											>
												<div
													className={cn(
														'flex items-start gap-3 mb-3',
														isRTL && 'flex-row-reverse'
													)}
												>
													<CheckCircle2 className='w-5 h-5 text-primary flex-shrink-0 mt-0.5' />
													<div className={cn('flex-1', isRTL && 'text-right')}>
														<div className='text-3xl font-bold text-primary mb-1'>
															{metric.value}
														</div>
														<div
															className={cn(
																'text-sm font-semibold text-foreground mb-1',
																isRTL && 'font-arabic'
															)}
														>
															{metric.label}
														</div>
														<div
															className={cn(
																'text-sm text-muted-foreground',
																isRTL && 'font-arabic'
															)}
														>
															{metric.description}
														</div>
													</div>
												</div>
											</motion.div>
										))}
									</div>
								) : (
									/* Benefits Grid */
									<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
										{section.benefits.map((benefit: any, index: number) => (
											<motion.div
												key={index}
												className='bg-muted/50 dark:bg-muted/20 rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300'
												initial={{ opacity: 0, y: 20 }}
												animate={{ opacity: 1, y: 0 }}
												transition={{ duration: 0.4, delay: sectionIndex * 0.1 + index * 0.05 }}
											>
												<div
													className={cn(
														'flex items-start gap-3',
														isRTL && 'flex-row-reverse'
													)}
												>
													<div className='p-2 rounded-lg bg-primary/10 dark:bg-primary/20 flex-shrink-0'>
														<CheckCircle2 className='w-5 h-5 text-primary' />
													</div>
													<div className={cn('flex-1', isRTL && 'text-right')}>
														<h4
															className={cn(
																'text-lg font-semibold mb-2 text-foreground dark:text-foreground',
																isRTL && 'font-arabic'
															)}
														>
															{benefit.title}
														</h4>
														<p
															className={cn(
																'text-sm text-muted-foreground leading-relaxed',
																isRTL && 'font-arabic'
															)}
														>
															{benefit.description}
														</p>
													</div>
												</div>
											</motion.div>
										))}
									</div>
								)}
							</motion.div>
						);
					})}
				</div>

				{/* CTA Section */}
				<motion.div
					className={cn(
						'mt-20 text-center p-12 rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 border border-primary/20',
						isRTL && 'text-right'
					)}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.8 }}
				>
					<h3
						className={cn(
							'text-3xl font-bold mb-4 text-foreground dark:text-foreground',
							isRTL && 'text-right font-arabic'
						)}
					>
						{isRTL
							? 'جاهز لتحويل عملياتك؟'
							: 'Ready to Transform Your Operations?'}
					</h3>
					<p
						className={cn(
							'text-xl text-muted-foreground mb-8 max-w-2xl mx-auto',
							isRTL && 'text-right font-arabic'
						)}
					>
						{isRTL
							? 'تواصل مع خبرائنا لمناقشة كيف يمكن لحلولنا الهندسية المتقدمة أن تحقق نتائج قابلة للقياس لعملياتك.'
							: 'Contact our experts to discuss how our advanced engineering solutions can deliver measurable results for your operations.'}
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<a
							href='/contact'
							className='px-8 py-3 bg-primary text-primary-foreground rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors'
						>
							{isRTL ? 'اتصل بنا' : 'Contact Us'}
						</a>
					</div>
				</motion.div>
			</div>
		</section>
	);
}

