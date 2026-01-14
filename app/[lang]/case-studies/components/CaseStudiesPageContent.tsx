'use client';

import { Dictionary } from '@/types/dictionary';
import { Locale } from '@/i18n-config';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronRight, TrendingUp, Clock, Users, ArrowRight, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface CaseStudiesPageContentProps {
	dictionary: Dictionary;
	lang: Locale;
}

const caseStudies = [
	{
		id: 1,
		title: {
			en: 'Major Logistics Provider Achieves 35% Cost Reduction Through Route Optimization',
			ar: 'مزود خدمات لوجستية رئيسي يحقق خفض تكاليف بنسبة 35% من خلال تحسين المسارات'
		},
		industry: {
			en: 'Transportation & Logistics',
			ar: 'النقل والخدمات اللوجستية'
		},
		challenge: {
			en: 'A leading Middle Eastern logistics company with 500+ vehicles struggled with inefficient route planning, high fuel costs accounting for 40% of operating expenses, and delivery delays affecting customer satisfaction. Manual routing processes could not account for real-time traffic conditions, leading to extended delivery times and increased operational costs.',
			ar: 'شركة لوجستية رائدة في الشرق الأوسط تمتلك أكثر من 500 مركبة عانت من تخطيط المسارات غير الفعال، وتكاليف وقود عالية تشكل 40% من النفقات التشغيلية، وتأخيرات في التسليم تؤثر على رضا العملاء. لم تتمكن عمليات التوجيه اليدوية من مراعاة ظروف حركة المرور في الوقت الفعلي، مما أدى إلى أوقات تسليم ممتدة وتكاليف تشغيلية متزايدة.'
		},
		solution: {
			en: 'ITSC implemented a comprehensive Route Optimization solution leveraging AI-powered algorithms that analyze real-time traffic data, historical delivery patterns, vehicle capacities, and customer time windows. The system dynamically re-optimizes routes based on changing conditions and provides fleet dispatchers with real-time visibility into vehicle locations and delivery status.',
			ar: 'نفذت ITSC حل تحسين المسارات الشامل الذي يستفيد من الخوارزميات المدعومة بالذكاء الاصطناعي التي تحلل بيانات حركة المرور في الوقت الفعلي، وأنماط التسليم التاريخية، وقدرات المركبات، ونوافذ الوقت الخاصة بالعملاء. يعيد النظام تحسين المسارات ديناميكياً بناءً على الظروف المتغيرة ويوفر لمراقبي الأسطول رؤية في الوقت الفعلي لمواقع المركبات وحالة التسليم.'
		},
		keyFeatures: {
			en: [
				'AI-powered dynamic route optimization',
				'Real-time traffic integration',
				'Multi-stop delivery planning',
				'Driver mobile app integration',
				'Performance analytics dashboard'
			],
			ar: [
				'تحسين المسارات الديناميكي المدعوم بالذكاء الاصطناعي',
				'تكامل حركة المرور في الوقت الفعلي',
				'تخطيط التسليم متعدد المحطات',
				'تكامل تطبيق الجوال للسائق',
				'لوحة تحليلات الأداء'
			]
		},
		results: [
			{
				metric: '35%',
				description: {
					en: 'Fuel Cost Reduction',
					ar: 'تقليل تكاليف الوقود'
				},
				detail: {
					en: 'Reduced annual fuel expenses from $12M to $7.8M',
					ar: 'خفض نفقات الوقود السنوية من 12 مليون دولار إلى 7.8 مليون دولار'
				}
			},
			{
				metric: '42%',
				description: {
					en: 'Faster Delivery Times',
					ar: 'أوقات تسليم أسرع'
				},
				detail: {
					en: 'Average delivery time reduced from 4.2 hours to 2.4 hours',
					ar: 'انخفض متوسط وقت التسليم من 4.2 ساعة إلى 2.4 ساعة'
				}
			},
			{
				metric: '28%',
				description: {
					en: 'Increase in Daily Deliveries',
					ar: 'زيادة في التسليمات اليومية'
				},
				detail: {
					en: 'Fleet capacity increased from 2,500 to 3,200 deliveries per day',
					ar: 'زادت قدرة الأسطول من 2,500 إلى 3,200 تسليم يومياً'
				}
			},
			{
				metric: 'ROI: 12 months',
				description: {
					en: 'Return on Investment',
					ar: 'العائد على الاستثمار'
				},
				detail: {
					en: 'Full system cost recovered within first year',
					ar: 'استعادة تكلفة النظام الكاملة خلال السنة الأولى'
				}
			}
		],
		duration: '4 months',
		teamSize: '18 people'
	},
	{
		id: 2,
		title: {
			en: 'Regional Fleet Operator Achieves 40% Maintenance Cost Reduction with AI-Powered Fleet Management',
			ar: 'مشغل أسطول إقليمي يحقق خفض تكاليف الصيانة بنسبة 40% مع إدارة الأسطول المدعومة بالذكاء الاصطناعي'
		},
		industry: {
			en: 'Fleet Management',
			ar: 'إدارة الأسطول'
		},
		challenge: {
			en: 'A regional transportation company managing 800 commercial vehicles across multiple depots faced challenges with unplanned downtime, reactive maintenance causing 25% vehicle unavailability, lack of real-time visibility into fleet operations, and inability to predict maintenance needs leading to expensive emergency repairs.',
			ar: 'واجهت شركة نقل إقليمية تدير 800 مركبة تجارية عبر مستودعات متعددة تحديات مع توقف غير مخطط، وصيانة تفاعلية تسبب عدم توفر 25% من المركبات، ونقص الرؤية في الوقت الفعلي لعمليات الأسطول، وعدم القدرة على التنبؤ باحتياجات الصيانة مما يؤدي إلى إصلاحات طارئة مكلفة.'
		},
		solution: {
			en: 'ITSC deployed a comprehensive Fleet Management system featuring predictive maintenance analytics using IoT sensors and AI algorithms, real-time GPS tracking for all vehicles, driver behavior analysis to improve safety and fuel efficiency, and integrated maintenance scheduling that automatically assigns work orders based on vehicle usage patterns and maintenance history.',
			ar: 'نشرت ITSC نظام إدارة أسطول شامل يتميز بتحليلات الصيانة التنبؤية باستخدام أجهزة استشعار IoT وخوارزميات الذكاء الاصطناعي، وتتبع GPS في الوقت الفعلي لجميع المركبات، وتحليل سلوك السائق لتحسين السلامة وكفاءة الوقود، وجدولة الصيانة المتكاملة التي تعين تلقائياً أوامر العمل بناءً على أنماط استخدام المركبة وتاريخ الصيانة.'
		},
		keyFeatures: {
			en: [
				'Predictive maintenance analytics',
				'Real-time GPS tracking',
				'Driver behavior monitoring',
				'Automated maintenance scheduling',
				'Fleet performance dashboards'
			],
			ar: [
				'تحليلات الصيانة التنبؤية',
				'تتبع GPS في الوقت الفعلي',
				'مراقبة سلوك السائق',
				'جدولة الصيانة التلقائية',
				'لوحات أداء الأسطول'
			]
		},
		results: [
			{
				metric: '40%',
				description: {
					en: 'Maintenance Cost Reduction',
					ar: 'تقليل تكاليف الصيانة'
				},
				detail: {
					en: 'Annual maintenance costs reduced from $8.5M to $5.1M',
					ar: 'انخفضت تكاليف الصيانة السنوية من 8.5 مليون دولار إلى 5.1 مليون دولار'
				}
			},
			{
				metric: '92%',
				description: {
					en: 'Fleet Availability',
					ar: 'توفر الأسطول'
				},
				detail: {
					en: 'Vehicle downtime reduced from 25% to 8%',
					ar: 'انخفض تعطل المركبات من 25% إلى 8%'
				}
			},
			{
				metric: '22%',
				description: {
					en: 'Fuel Efficiency Improvement',
					ar: 'تحسين كفاءة الوقود'
				},
				detail: {
					en: 'Improved fuel consumption through optimized routing and driver coaching',
					ar: 'تحسين استهلاك الوقود من خلال تحسين المسارات وتدريب السائقين'
				}
			},
			{
				metric: 'ROI: 10 months',
				description: {
					en: 'Return on Investment',
					ar: 'العائد على الاستثمار'
				},
				detail: {
					en: 'System investment recovered ahead of projected timeline',
					ar: 'استعادة استثمار النظام قبل الجدول الزمني المتوقع'
				}
			}
		],
		duration: '6 months',
		teamSize: '22 people'
	}
];

export default function CaseStudiesPageContent({ dictionary, lang }: CaseStudiesPageContentProps) {
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
									{lang === 'ar' ? 'قصص النجاح' : 'Success Stories'}
								</h1>
								<p className={cn(
									"text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed",
									isRTL && 'font-arabic'
								)}>
									{lang === 'ar' 
										? 'اكتشف كيف ساعدنا الشركات في تحقيق نتائج استثنائية قابلة للقياس من خلال حلول النقل عالية التقنية وذكاء اللوجستيات'
										: 'Discover how we have helped companies achieve exceptional, measurable results through high-tech transportation and logistics intelligence solutions'
									}
								</p>
							</motion.div>
						</div>
					</div>
				</section>

				{/* Case Studies */}
				<section className="py-20">
					<div className="container mx-auto px-4">
						<div className="max-w-6xl mx-auto space-y-16">
							{caseStudies.map((study, index) => (
								<motion.div
									key={study.id}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: 0.2 * index }}
								>
									<Card className={cn(
										"overflow-hidden border-2 hover:border-primary/50 transition-all",
										isRTL && 'text-right'
									)}>
										<CardHeader className={cn("p-8 pb-4", isRTL && 'text-right')}>
											<div className={cn(
												"flex items-center gap-4 mb-6 flex-wrap",
												isRTL && 'flex-row-reverse justify-end'
											)}>
												<Badge variant="secondary" className="text-sm px-4 py-1">
													{study.industry[lang]}
												</Badge>
												<div className={cn(
													"flex items-center text-sm text-muted-foreground gap-4",
													isRTL && 'flex-row-reverse'
												)}>
													<div className={cn(
														"flex items-center gap-1",
														isRTL && 'flex-row-reverse'
													)}>
														<Clock className="w-4 h-4" />
														<span>{study.duration}</span>
													</div>
													<div className={cn(
														"flex items-center gap-1",
														isRTL && 'flex-row-reverse'
													)}>
														<Users className="w-4 h-4" />
														<span>{study.teamSize}</span>
													</div>
												</div>
											</div>
											<CardTitle className={cn(
												"text-2xl md:text-3xl mb-6",
												isRTL && 'font-arabic'
											)}>
												{study.title[lang]}
											</CardTitle>
										</CardHeader>
										
										<CardContent className={cn("p-8 pt-4", isRTL && 'text-right')}>
											<div className="space-y-6 mb-8">
												<div>
													<h4 className={cn(
														"font-semibold text-lg mb-3 text-foreground",
														isRTL && 'font-arabic'
													)}>
														{lang === 'ar' ? 'التحدي' : 'The Challenge'}
													</h4>
													<CardDescription className={cn(
														"text-base leading-relaxed",
														isRTL && 'font-arabic'
													)}>
														{study.challenge[lang]}
													</CardDescription>
												</div>
												
												<div>
													<h4 className={cn(
														"font-semibold text-lg mb-3 text-foreground",
														isRTL && 'font-arabic'
													)}>
														{lang === 'ar' ? 'الحل' : 'The Solution'}
													</h4>
													<CardDescription className={cn(
														"text-base leading-relaxed mb-4",
														isRTL && 'font-arabic'
													)}>
														{study.solution[lang]}
													</CardDescription>
													<ul className={cn(
														"space-y-2 mt-4",
														isRTL && 'text-right'
													)}>
														{study.keyFeatures[lang].map((feature, idx) => (
															<li key={idx} className={cn(
																"flex items-start gap-2",
																isRTL && 'flex-row-reverse justify-end'
															)}>
																<Check className={cn(
																	"w-5 h-5 text-primary flex-shrink-0 mt-0.5",
																	isRTL && 'ml-2'
																)} />
																<span className={cn(
																	"text-sm text-muted-foreground",
																	isRTL && 'font-arabic'
																)}>{feature}</span>
															</li>
														))}
													</ul>
												</div>
											</div>

											<div className="mb-8">
												<h4 className={cn(
													"font-semibold text-lg mb-6 text-foreground",
													isRTL && 'font-arabic text-right'
												)}>
													{lang === 'ar' ? 'النتائج القابلة للقياس' : 'Measurable Results'}
												</h4>
												<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
													{study.results.map((result, resultIndex) => (
														<div 
															key={resultIndex} 
															className={cn(
																"p-6 rounded-xl bg-primary/5 border border-primary/20 text-center",
																isRTL && 'text-right'
															)}
														>
															<div className={cn(
																"text-4xl font-bold text-primary mb-2",
																isRTL && 'font-arabic'
															)}>
																{result.metric}
															</div>
															<div className={cn(
																"text-sm font-semibold mb-2 text-foreground",
																isRTL && 'font-arabic'
															)}>
																{result.description[lang]}
															</div>
															<div className={cn(
																"text-xs text-muted-foreground",
																isRTL && 'font-arabic'
															)}>
																{result.detail[lang]}
															</div>
														</div>
													))}
												</div>
											</div>
										</CardContent>
									</Card>
								</motion.div>
							))}
						</div>
					</div>
				</section>

				{/* CTA Section */}
				<section className="py-20 bg-muted/50">
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
								{lang === 'ar' ? 'هل أنت مستعد لتحقيق نتائج مماثلة؟' : 'Ready to Achieve Similar Results?'}
							</h2>
							<p className={cn(
								"text-xl text-muted-foreground mb-8 max-w-2xl mx-auto",
								isRTL && 'font-arabic'
							)}>
								{lang === 'ar' 
									? 'تواصل معنا اليوم لمناقشة كيف يمكن لحلولنا تحويل عمليات النقل والخدمات اللوجستية الخاصة بك'
									: 'Contact us today to discuss how our solutions can transform your transportation and logistics operations'
								}
							</p>
							<Link href={`/${lang}/contact`}>
								<Button size="lg" className="text-lg px-8">
									{dictionary.contact.title}
									<ArrowRight className={cn(
										"w-5 h-5",
										isRTL ? 'mr-2 rotate-180' : 'ml-2'
									)} />
								</Button>
							</Link>
						</motion.div>
					</div>
				</section>
			</main>
			<Footer dictionary={dictionary} lang={lang} />
		</div>
	);
}
