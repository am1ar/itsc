'use client';

import { Dictionary } from '@/types/dictionary';
import { Locale } from '@/i18n-config';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronRight, TrendingUp, Clock, Users } from 'lucide-react';

interface CaseStudiesPageContentProps {
	dictionary: Dictionary;
	lang: Locale;
}

const caseStudies = [
	{
		id: 1,
		title: {
			en: 'Global Retailer Reduces Costs by 40%',
			ar: 'تاجر تجزئة عالمي يقلل التكاليف بنسبة 40%'
		},
		industry: {
			en: 'Retail',
			ar: 'التجزئة'
		},
		challenge: {
			en: 'Inefficient inventory management leading to high carrying costs',
			ar: 'إدارة مخزون غير فعالة تؤدي إلى ارتفاع تكاليف الاحتفاظ'
		},
		solution: {
			en: 'AI-powered demand forecasting and inventory optimization',
			ar: 'التنبؤ بالطلب المدعوم بالذكاء الاصطناعي وتحسين المخزون'
		},
		results: [
			{
				metric: '40%',
				description: {
					en: 'Cost Reduction',
					ar: 'تقليل التكاليف'
				}
			},
			{
				metric: '25%',
				description: {
					en: 'Inventory Optimization',
					ar: 'تحسين المخزون'
				}
			},
			{
				metric: '60%',
				description: {
					en: 'Faster Processing',
					ar: 'معالجة أسرع'
				}
			}
		],
		duration: '6 months',
		teamSize: '15 people'
	},
	{
		id: 2,
		title: {
			en: 'Manufacturing Company Improves Delivery by 60%',
			ar: 'شركة تصنيع تحسن التسليم بنسبة 60%'
		},
		industry: {
			en: 'Manufacturing',
			ar: 'التصنيع'
		},
		challenge: {
			en: 'Complex supply chain with multiple suppliers and delivery delays',
			ar: 'سلسلة توريد معقدة مع موردين متعددين وتأخير في التسليم'
		},
		solution: {
			en: 'Route optimization and supply chain visibility platform',
			ar: 'تحسين المسارات ومنصة رؤية سلسلة التوريد'
		},
		results: [
			{
				metric: '60%',
				description: {
					en: 'Faster Delivery',
					ar: 'تسليم أسرع'
				}
			},
			{
				metric: '35%',
				description: {
					en: 'Cost Savings',
					ar: 'توفير التكاليف'
				}
			},
			{
				metric: '95%',
				description: {
					en: 'On-time Delivery',
					ar: 'التسليم في الوقت المحدد'
				}
			}
		],
		duration: '8 months',
		teamSize: '20 people'
	},
	{
		id: 3,
		title: {
			en: 'Logistics Provider Automates Warehouse Operations',
			ar: 'مزود خدمات لوجستية يؤتمت عمليات المستودع'
		},
		industry: {
			en: 'Logistics',
			ar: 'الخدمات اللوجستية'
		},
		challenge: {
			en: 'Manual warehouse processes causing errors and inefficiencies',
			ar: 'عمليات المستودع اليدوية تسبب أخطاء وعدم كفاءة'
		},
		solution: {
			en: 'Warehouse automation system with AI-powered inventory tracking',
			ar: 'نظام أتمتة المستودع مع تتبع المخزون المدعوم بالذكاء الاصطناعي'
		},
		results: [
			{
				metric: '80%',
				description: {
					en: 'Error Reduction',
					ar: 'تقليل الأخطاء'
				}
			},
			{
				metric: '50%',
				description: {
					en: 'Efficiency Gain',
					ar: 'زيادة الكفاءة'
				}
			},
			{
				metric: '30%',
				description: {
					en: 'Labor Cost Savings',
					ar: 'توفير تكاليف العمالة'
				}
			}
		],
		duration: '4 months',
		teamSize: '12 people'
	}
];

export default function CaseStudiesPageContent({ dictionary, lang }: CaseStudiesPageContentProps) {
	return (
		<div className="min-h-screen bg-background">
			<Header dictionary={dictionary} lang={lang} />
			<main className="pt-20">
				{/* Hero Section */}
				<section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
					<div className="container mx-auto px-4">
						<div className="max-w-4xl mx-auto text-center">
							<h1 className="text-4xl md:text-6xl font-bold mb-6">
								{lang === 'ar' ? 'دراسات الحالة' : 'Case Studies'}
							</h1>
							<p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
								{lang === 'ar' 
									? 'اكتشف كيف ساعدنا الشركات في تحقيق نتائج استثنائية'
									: 'Discover how we have helped companies achieve exceptional results'
								}
							</p>
						</div>
					</div>
				</section>

				{/* Case Studies */}
				<section className="py-20">
					<div className="container mx-auto px-4">
						<div className="space-y-12">
							{caseStudies.map((study, index) => (
								<Card key={study.id} className="overflow-hidden">
									<div className="grid lg:grid-cols-2 gap-8">
										<CardHeader className="lg:p-8">
											<div className="flex items-center gap-4 mb-4">
												<Badge variant="secondary">{study.industry[lang]}</Badge>
												<div className="flex items-center text-sm text-muted-foreground">
													<Clock className="w-4 h-4 mr-1" />
													{study.duration}
												</div>
												<div className="flex items-center text-sm text-muted-foreground">
													<Users className="w-4 h-4 mr-1" />
													{study.teamSize}
												</div>
											</div>
											<CardTitle className="text-2xl mb-4">{study.title[lang]}</CardTitle>
											<div className="space-y-4">
												<div>
													<h4 className="font-semibold mb-2">
														{lang === 'ar' ? 'التحدي:' : 'Challenge:'}
													</h4>
													<CardDescription>{study.challenge[lang]}</CardDescription>
												</div>
												<div>
													<h4 className="font-semibold mb-2">
														{lang === 'ar' ? 'الحل:' : 'Solution:'}
													</h4>
													<CardDescription>{study.solution[lang]}</CardDescription>
												</div>
											</div>
										</CardHeader>
										<CardContent className="lg:p-8">
											<h4 className="font-semibold mb-6 text-lg">
												{lang === 'ar' ? 'النتائج:' : 'Results:'}
											</h4>
											<div className="grid grid-cols-3 gap-4 mb-6">
												{study.results.map((result, resultIndex) => (
													<div key={resultIndex} className="text-center">
														<div className="text-3xl font-bold text-primary mb-2">
															{result.metric}
														</div>
														<div className="text-sm text-muted-foreground">
															{result.description[lang]}
														</div>
													</div>
												))}
											</div>
											<Button className="w-full">
												{lang === 'ar' ? 'اقرأ دراسة الحالة الكاملة' : 'Read Full Case Study'}
												<ChevronRight className="w-4 h-4 ml-2" />
											</Button>
										</CardContent>
									</div>
								</Card>
							))}
						</div>
					</div>
				</section>

				{/* CTA Section */}
				<section className="py-20 bg-muted/50">
					<div className="container mx-auto px-4 text-center">
						<h2 className="text-3xl font-bold mb-6">
							{lang === 'ar' ? 'هل أنت مستعد لتحقيق نتائج مماثلة؟' : 'Ready to Achieve Similar Results?'}
						</h2>
						<p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
							{lang === 'ar' 
								? 'تواصل معنا اليوم لمناقشة كيف يمكن لحلولنا تحويل عملياتك'
								: 'Contact us today to discuss how our solutions can transform your operations'
							}
						</p>
						<Button size="lg">
							{dictionary.contact.title}
						</Button>
					</div>
				</section>
			</main>
			<Footer dictionary={dictionary} lang={lang} />
		</div>
	);
}