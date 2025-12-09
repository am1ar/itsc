'use client';

import { Dictionary } from '@/types/dictionary';
import { Locale } from '@/i18n-config';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Warehouse, Bot, Code, TrendingUp, CheckCircle2, Target, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

interface WarehouseAutomationContentProps {
	dictionary: Dictionary;
	lang: Locale;
	content: {
		hero: {
			title: string;
			subtitle: string;
			description: string;
		};
		solutions: Array<{
			id: string;
			title: string;
			icon: string;
			items: Array<{
				title: string;
				description: string;
			}>;
			results?: string;
		}>;
		value: {
			title: string;
			metrics: Array<{
				title: string;
				description: string;
			}>;
		};
	};
}

const iconMap: { [key: string]: any } = {
	Warehouse: Warehouse,
	Bot: Bot,
	Code: Code,
};

export default function WarehouseAutomationContent({
	dictionary,
	lang,
	content,
}: WarehouseAutomationContentProps) {
	const isRTL = lang === 'ar';

	return (
		<div className={cn("min-h-screen bg-background", isRTL && 'rtl font-arabic')} dir={isRTL ? 'rtl' : 'ltr'}>
			<Header dictionary={dictionary} lang={lang} />
			<main className="pt-20">
				{/* Hero Section */}
				<section className={cn(
					"py-20 bg-gradient-to-br from-primary/10 to-secondary/10",
					isRTL && 'text-right'
				)}>
					<div className="container mx-auto px-4">
						<div className="max-w-4xl mx-auto text-center">
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6 }}
							>
								<h1 className={cn(
									"text-4xl md:text-6xl font-bold mb-6",
									isRTL && 'font-arabic'
								)}>
									{content.hero.title}
								</h1>
								<p className={cn(
									"text-xl font-semibold text-primary mb-4",
									isRTL && 'font-arabic'
								)}>
									{content.hero.subtitle}
								</p>
								<p className={cn(
									"text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed",
									isRTL && 'text-right font-arabic'
								)}>
									{content.hero.description}
								</p>
								<div className="flex flex-col sm:flex-row gap-4 justify-center">
									<Button size="lg">
										{dictionary.contact.actions[0].action}
									</Button>
									<Button variant="outline" size="lg">
										{dictionary.contact.actions[1].action}
									</Button>
								</div>
							</motion.div>
						</div>
					</div>
				</section>

				{/* Core Automation Solutions */}
				<section className="py-20">
					<div className="container mx-auto px-4">
						<motion.div
							className={cn("text-center mb-16", isRTL && 'text-right')}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
						>
							<h2 className={cn(
								"text-3xl md:text-4xl font-bold mb-4",
								isRTL && 'text-right font-arabic'
							)}>
								{lang === 'ar' ? 'حلول الأتمتة الأساسية' : 'Core Automation Solutions'}
							</h2>
						</motion.div>

						<div className="space-y-16">
							{content.solutions.map((solution, solutionIndex) => {
								const IconComponent = iconMap[solution.icon] || Warehouse;
								return (
									<motion.div
										key={solution.id}
										className="bg-card dark:bg-card rounded-2xl p-8 md:p-12 shadow-lg border border-border"
										initial={{ opacity: 0, y: 40 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.6, delay: solutionIndex * 0.1 }}
									>
										{/* Solution Header */}
										<div className={cn(
											"flex items-start gap-6 mb-8",
											isRTL && 'flex-row-reverse'
										)}>
											<div className="p-4 rounded-xl bg-primary/10 dark:bg-primary/20 flex-shrink-0">
												<IconComponent className="w-8 h-8 text-primary" />
											</div>
											<div className="flex-1">
												<h3 className={cn(
													"text-2xl md:text-3xl font-bold mb-4 text-foreground dark:text-foreground",
													isRTL && 'text-right font-arabic'
												)}>
													{solution.title}
												</h3>
											</div>
										</div>

										{/* Solution Items */}
										<div className="space-y-6">
											{solution.items.map((item, itemIndex) => (
												<div
													key={itemIndex}
													className={cn(
														"flex items-start gap-4",
														isRTL && 'flex-row-reverse'
													)}
												>
													<div className="p-2 rounded-lg bg-primary/10 dark:bg-primary/20 flex-shrink-0 mt-0.5">
														<CheckCircle2 className="w-5 h-5 text-primary" />
													</div>
													<div className={cn("flex-1", isRTL && 'text-right')}>
														<h4 className={cn(
															"text-lg font-semibold mb-2 text-foreground dark:text-foreground",
															isRTL && 'font-arabic'
														)}>
															{item.title}
														</h4>
														<p className={cn(
															"text-muted-foreground leading-relaxed",
															isRTL && 'font-arabic'
														)}>
															{item.description}
														</p>
													</div>
												</div>
											))}
										</div>

										{/* Results */}
										{solution.results && (
											<div className={cn(
												"mt-8 p-6 bg-primary/5 dark:bg-primary/10 rounded-xl border border-primary/20",
												isRTL && 'text-right'
											)}>
												<div className={cn(
													"flex items-start gap-3",
													isRTL && 'flex-row-reverse'
												)}>
													<TrendingUp className="w-6 h-6 text-primary flex-shrink-0" />
													<div>
														<p className={cn(
															"font-semibold text-foreground mb-1",
															isRTL && 'font-arabic'
														)}>
															{lang === 'ar' ? 'النتائج:' : 'Results:'}
														</p>
														<p className={cn(
															"text-muted-foreground",
															isRTL && 'font-arabic'
														)}>
															{solution.results}
														</p>
													</div>
												</div>
											</div>
										)}
									</motion.div>
								);
							})}
						</div>
					</div>
				</section>

				{/* ITSC Engineering & Operational Value */}
				<section className="py-20 bg-muted/50">
					<div className="container mx-auto px-4">
						<motion.div
							className={cn("text-center mb-16", isRTL && 'text-right')}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.4 }}
						>
							<h2 className={cn(
								"text-3xl md:text-4xl font-bold mb-4",
								isRTL && 'text-right font-arabic'
							)}>
								{content.value.title}
							</h2>
						</motion.div>

						<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
							{content.value.metrics.map((metric, index) => (
								<motion.div
									key={index}
									className="bg-card dark:bg-card rounded-xl p-6 shadow-md border border-border hover:border-primary/50 transition-all duration-300"
									initial={{ opacity: 0, scale: 0.9 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
								>
									<div className={cn(
										"flex items-start gap-3",
										isRTL && 'flex-row-reverse'
									)}>
										<div className="p-2 rounded-lg bg-primary/10 dark:bg-primary/20 flex-shrink-0">
											<Target className="w-5 h-5 text-primary" />
										</div>
										<div className={cn("flex-1", isRTL && 'text-right')}>
											<h4 className={cn(
												"text-lg font-semibold mb-2 text-foreground dark:text-foreground",
												isRTL && 'font-arabic'
											)}>
												{metric.title}
											</h4>
											<p className={cn(
												"text-sm text-muted-foreground leading-relaxed",
												isRTL && 'font-arabic'
											)}>
												{metric.description}
											</p>
										</div>
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</section>

				{/* CTA Section */}
				<section className="py-20">
					<div className="container mx-auto px-4 text-center">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.6 }}
						>
							<h2 className={cn(
								"text-3xl font-bold mb-6",
								isRTL && 'text-right font-arabic'
							)}>
								{lang === 'ar' ? 'هل أنت مستعد لتحويل مستودعك؟' : 'Ready to Transform Your Warehouse?'}
							</h2>
							<p className={cn(
								"text-xl text-muted-foreground mb-8 max-w-2xl mx-auto",
								isRTL && 'text-right font-arabic'
							)}>
								{lang === 'ar'
									? 'تواصل مع خبرائنا الهندسيين لمناقشة كيف يمكن لحلول الأتمتة المتقدمة لدينا تحويل عمليات المستودع الخاصة بك'
									: 'Contact our engineering experts to discuss how our advanced automation solutions can transform your warehouse operations'}
							</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								<Button size="lg">
									{dictionary.contact.title}
								</Button>
								<Button variant="outline" size="lg">
									{dictionary.contact.actions[0].action}
								</Button>
							</div>
						</motion.div>
					</div>
				</section>
			</main>
			<Footer dictionary={dictionary} lang={lang} />
		</div>
	);
}

