'use client';

import { Dictionary } from '@/types/dictionary';
import { Locale } from '@/i18n-config';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
	BarChart3, 
	Route, 
	Truck, 
	Map, 
	Code, 
	Database,
	ArrowRight,
	Check
} from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ServicesPageContentProps {
	dictionary: Dictionary;
	lang: Locale;
}

const services = [
	{
		icon: BarChart3,
		title: 'Transport Data Analytics & AI',
		titleAr: 'تحليل بيانات النقل والذكاء الاصطناعي',
		description: 'Leveraging Big Data to Predict Logistics Trends',
		descriptionAr: 'استخدام البيانات الضخمة للتنبؤ بالاتجاهات اللوجستية',
		link: '/solutions/data-ai',
		features: ['Predictive Analytics', 'Real-Time Insights', 'Machine Learning Models']
	},
	{
		icon: Route,
		title: 'Route Optimization',
		titleAr: 'تحسين المسارات',
		description: 'Advanced Algorithms for Efficient Delivery Paths',
		descriptionAr: 'خوارزميات متقدمة لمسارات التسليم الفعالة',
		link: '/solutions/routes',
		features: ['30-40% Fuel Savings', 'Faster Delivery', 'Dynamic Planning']
	},
	{
		icon: Truck,
		title: 'Fleet Management',
		titleAr: 'إدارة الأسطول',
		description: 'Real-Time Tracking and Asset Control',
		descriptionAr: 'تتبع في الوقت الفعلي والتحكم في الأصول',
		link: '/solutions/fleet',
		features: ['GPS Tracking', 'Maintenance Management', 'Performance Analytics']
	},
	{
		icon: Map,
		title: 'Yard Management Systems',
		titleAr: 'أنظمة إدارة الساحات',
		description: 'Intelligent Dock Scheduling and Yard Flow Optimization',
		descriptionAr: 'جدولة الأرصفة الذكية وتحسين تدفق الساحة',
		link: '/solutions/yms',
		features: ['Dock Scheduling', 'Container Tracking', 'Yard Visibility']
	},
	{
		icon: Code,
		title: 'System Architecture',
		titleAr: 'هندسة الأنظمة',
		description: 'Building Custom Transportation Software Ecosystems',
		descriptionAr: 'بناء أنظمة برمجيات النقل المخصصة',
		link: '/solutions/architecture',
		features: ['Custom Development', 'API Integration', 'Scalable Architecture']
	},
	{
		icon: Database,
		title: 'Logistics Software',
		titleAr: 'برمجيات الخدمات اللوجستية',
		description: 'WMS, ERP Integration & End-to-End Platforms',
		descriptionAr: 'WMS وتكامل ERP ومنصات شاملة',
		link: '/solutions/software',
		features: ['WMS Solutions', 'ERP Integration', 'Unified Platform']
	},
];

export default function ServicesPageContent({ dictionary, lang }: ServicesPageContentProps) {
	const isRTL = lang === 'ar';
	
	return (
		<div className={cn("min-h-screen bg-background", isRTL && 'rtl font-arabic')} dir={isRTL ? 'rtl' : 'ltr'}>
			<Header dictionary={dictionary} lang={lang} />
			<main className="pt-20">
				{/* Hero Section */}
				<section className={cn(
					"py-20 bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10",
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
									"text-4xl md:text-6xl font-bold mb-6 dark:text-white",
									isRTL && 'font-arabic'
								)}>
									{dictionary.services.title}
								</h1>
								<p className={cn(
									"text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed",
									isRTL && 'font-arabic'
								)}>
									{dictionary.services.description}
								</p>
							</motion.div>
						</div>
					</div>
				</section>

				{/* Services Grid */}
				<section className="py-20">
					<div className="container mx-auto px-4">
						<div className="max-w-7xl mx-auto">
							<motion.div
								className={cn("text-center mb-12", isRTL && 'text-right')}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6 }}
							>
								<h2 className={cn(
									"text-3xl md:text-4xl font-bold mb-4 dark:text-white",
									isRTL && 'font-arabic'
								)}>
									{lang === 'ar' ? 'حلولنا الشاملة' : 'Our Comprehensive Solutions'}
								</h2>
								<p className={cn(
									"text-lg text-muted-foreground max-w-2xl mx-auto",
									isRTL && 'font-arabic'
								)}>
									{lang === 'ar' 
										? 'استكشف نطاقنا الكامل من حلول النقل عالية التقنية وذكاء اللوجستيات'
										: 'Explore our complete range of high-tech transportation and logistics intelligence solutions'
									}
								</p>
							</motion.div>

							<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
								{services.map((service, index) => {
									const Icon = service.icon;
									return (
										<motion.div
											key={service.title}
											initial={{ opacity: 0, y: 20 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ duration: 0.4, delay: 0.1 * index }}
										>
											<Card className={cn(
												"h-full flex flex-col hover:shadow-lg transition-all duration-300 hover:border-primary/50",
												isRTL && 'text-right'
											)}>
												<CardHeader>
													<div className={cn(
														"flex items-center gap-4 mb-4",
														isRTL && 'flex-row-reverse justify-end'
													)}>
														<div className="p-3 rounded-xl bg-primary/10">
															<Icon className="w-6 h-6 text-primary" />
														</div>
														<CardTitle className={cn(
															"text-xl",
															isRTL && 'font-arabic'
														)}>
															{isRTL ? service.titleAr : service.title}
														</CardTitle>
													</div>
													<CardDescription className={cn(
														"text-base",
														isRTL && 'font-arabic'
													)}>
														{isRTL ? service.descriptionAr : service.description}
													</CardDescription>
												</CardHeader>
												<CardContent className="flex-grow flex flex-col">
													<ul className={cn(
														"space-y-2 mb-6 flex-grow",
														isRTL && 'text-right'
													)}>
														{service.features.map((feature, idx) => (
															<li key={idx} className={cn(
																"flex items-center gap-2 text-sm text-muted-foreground",
																isRTL && 'flex-row-reverse justify-end'
															)}>
																<Check className={cn(
																	"w-4 h-4 text-primary flex-shrink-0",
																	isRTL && 'ml-2'
																)} />
																<span className={isRTL ? 'font-arabic' : ''}>{feature}</span>
															</li>
														))}
													</ul>
													<Link href={`/${lang}${service.link}`}>
														<Button 
															variant="outline" 
															className={cn(
																"w-full",
																isRTL && 'font-arabic'
															)}
														>
															{lang === 'ar' ? 'تعرف على المزيد' : 'Learn More'}
															<ArrowRight className={cn(
																"w-4 h-4",
																isRTL ? 'mr-2 rotate-180' : 'ml-2'
															)} />
														</Button>
													</Link>
												</CardContent>
											</Card>
										</motion.div>
									);
								})}
							</div>
						</div>
					</div>
				</section>

				{/* CTA Section */}
				<section className="py-20 bg-muted/30">
					<div className="container mx-auto px-4 text-center">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
						>
							<h2 className={cn(
								"text-3xl md:text-4xl font-bold mb-6 dark:text-white",
								isRTL && 'font-arabic'
							)}>
								{lang === 'ar' ? 'هل أنت مستعد للبدء؟' : 'Ready to Get Started?'}
							</h2>
							<p className={cn(
								"text-xl text-muted-foreground mb-8 max-w-2xl mx-auto",
								isRTL && 'font-arabic'
							)}>
								{lang === 'ar' 
									? 'تواصل معنا اليوم لمعرفة كيف يمكن لحلولنا تحويل عمليات النقل والخدمات اللوجستية الخاصة بك'
									: 'Contact us today to learn how our solutions can transform your transportation and logistics operations'
								}
							</p>
							<div className={cn(
								"flex flex-col sm:flex-row gap-4 justify-center",
								isRTL && 'flex-row-reverse'
							)}>
								<Link href={`/${lang}/contact`}>
									<Button size="lg" className="text-lg px-8">
										{dictionary.contact.title}
										<ArrowRight className={cn(
											"w-5 h-5",
											isRTL ? 'mr-2 rotate-180' : 'ml-2'
										)} />
									</Button>
								</Link>
							</div>
						</motion.div>
					</div>
				</section>
			</main>
			<Footer dictionary={dictionary} lang={lang} />
		</div>
	);
}
