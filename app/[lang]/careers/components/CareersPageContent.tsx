'use client';

import { Dictionary } from '@/types/dictionary';
import { Locale } from '@/i18n-config';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Clock, Users } from 'lucide-react';

interface CareersPageContentProps {
	dictionary: Dictionary;
	lang: Locale;
}

const jobOpenings = [
	{
		id: 1,
		title: {
			en: 'Senior AI Engineer',
			ar: 'مهندس ذكاء اصطناعي أول'
		},
		department: {
			en: 'Engineering',
			ar: 'الهندسة'
		},
		location: {
			en: 'Riyadh, Saudi Arabia',
			ar: 'الرياض، المملكة العربية السعودية'
		},
		type: {
			en: 'Full-time',
			ar: 'دوام كامل'
		},
		description: {
			en: 'Join our team to develop cutting-edge AI solutions for supply chain optimization.',
			ar: 'انضم إلى فريقنا لتطوير حلول الذكاء الاصطناعي المتطورة لتحسين سلسلة التوريد.'
		},
		requirements: [
			{
				en: '5+ years of experience in AI/ML',
				ar: '5+ سنوات خبرة في الذكاء الاصطناعي/التعلم الآلي'
			},
			{
				en: 'Strong Python programming skills',
				ar: 'مهارات قوية في برمجة Python'
			},
			{
				en: 'Experience with TensorFlow/PyTorch',
				ar: 'خبرة في TensorFlow/PyTorch'
			}
		]
	},
	{
		id: 2,
		title: {
			en: 'Supply Chain Consultant',
			ar: 'مستشار سلسلة التوريد'
		},
		department: {
			en: 'Consulting',
			ar: 'الاستشارات'
		},
		location: {
			en: 'Dubai, UAE',
			ar: 'دبي، الإمارات العربية المتحدة'
		},
		type: {
			en: 'Full-time',
			ar: 'دوام كامل'
		},
		description: {
			en: 'Help clients optimize their supply chain operations using our AI-powered solutions.',
			ar: 'ساعد العملاء في تحسين عمليات سلسلة التوريد باستخدام حلولنا المدعومة بالذكاء الاصطناعي.'
		},
		requirements: [
			{
				en: '3+ years in supply chain management',
				ar: '3+ سنوات في إدارة سلسلة التوريد'
			},
			{
				en: 'Strong analytical skills',
				ar: 'مهارات تحليلية قوية'
			},
			{
				en: 'Excellent communication skills',
				ar: 'مهارات تواصل ممتازة'
			}
		]
	}
];

const benefits = [
	{
		title: {
			en: 'Competitive Salary',
			ar: 'راتب تنافسي'
		},
		description: {
			en: 'Industry-leading compensation packages',
			ar: 'حزم تعويضات رائدة في الصناعة'
		}
	},
	{
		title: {
			en: 'Health Insurance',
			ar: 'التأمين الصحي'
		},
		description: {
			en: 'Comprehensive health coverage for you and your family',
			ar: 'تغطية صحية شاملة لك ولعائلتك'
		}
	},
	{
		title: {
			en: 'Professional Development',
			ar: 'التطوير المهني'
		},
		description: {
			en: 'Continuous learning and growth opportunities',
			ar: 'فرص التعلم والنمو المستمر'
		}
	},
	{
		title: {
			en: 'Flexible Work',
			ar: 'عمل مرن'
		},
		description: {
			en: 'Remote and hybrid work options available',
			ar: 'خيارات العمل عن بُعد والمختلط متاحة'
		}
	}
];

export default function CareersPageContent({ dictionary, lang }: CareersPageContentProps) {
	return (
		<div className="min-h-screen bg-background">
			<Header dictionary={dictionary} lang={lang} />
			<main className="pt-20">
				{/* Hero Section */}
				<section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
					<div className="container mx-auto px-4">
						<div className="max-w-4xl mx-auto text-center">
							<h1 className="text-4xl md:text-6xl font-bold mb-6">
								{lang === 'ar' ? 'الوظائف' : 'Careers'}
							</h1>
							<p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
								{lang === 'ar' 
									? 'انضم إلى فريقنا وساعد في تشكيل مستقبل سلاسل التوريد'
									: 'Join our team and help shape the future of supply chains'
								}
							</p>
						</div>
					</div>
				</section>

				{/* Benefits Section */}
				<section className="py-20">
					<div className="container mx-auto px-4">
						<h2 className="text-3xl font-bold text-center mb-12">
							{lang === 'ar' ? 'لماذا تعمل معنا؟' : 'Why Work With Us?'}
						</h2>
						<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
							{benefits.map((benefit, index) => (
								<Card key={index} className="text-center">
									<CardHeader>
										<CardTitle className="text-lg">{benefit.title[lang]}</CardTitle>
									</CardHeader>
									<CardContent>
										<CardDescription>{benefit.description[lang]}</CardDescription>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</section>

				{/* Job Openings */}
				<section className="py-20 bg-muted/50">
					<div className="container mx-auto px-4">
						<h2 className="text-3xl font-bold text-center mb-12">
							{lang === 'ar' ? 'الوظائف المتاحة' : 'Open Positions'}
						</h2>
						<div className="max-w-4xl mx-auto space-y-6">
							{jobOpenings.map((job) => (
								<Card key={job.id} className="hover:shadow-lg transition-shadow">
									<CardHeader>
										<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
											<div>
												<CardTitle className="text-xl mb-2">{job.title[lang]}</CardTitle>
												<div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
													<div className="flex items-center">
														<Users className="w-4 h-4 mr-1" />
														{job.department[lang]}
													</div>
													<div className="flex items-center">
														<MapPin className="w-4 h-4 mr-1" />
														{job.location[lang]}
													</div>
													<div className="flex items-center">
														<Clock className="w-4 h-4 mr-1" />
														{job.type[lang]}
													</div>
												</div>
											</div>
											<Button>
												{lang === 'ar' ? 'تقدم الآن' : 'Apply Now'}
											</Button>
										</div>
									</CardHeader>
									<CardContent>
										<p className="text-muted-foreground mb-4">{job.description[lang]}</p>
										<div>
											<h4 className="font-semibold mb-2">
												{lang === 'ar' ? 'المتطلبات:' : 'Requirements:'}
											</h4>
											<ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
												{job.requirements.map((req, index) => (
													<li key={index}>{req[lang]}</li>
												))}
											</ul>
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</section>

				{/* CTA Section */}
				<section className="py-20">
					<div className="container mx-auto px-4 text-center">
						<h2 className="text-3xl font-bold mb-6">
							{lang === 'ar' ? 'لم تجد الوظيفة المناسبة؟' : "Don't See the Right Role?"}
						</h2>
						<p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
							{lang === 'ar' 
								? 'أرسل لنا سيرتك الذاتية وسنتواصل معك عند توفر فرص مناسبة'
								: 'Send us your resume and we will reach out when suitable opportunities arise'
							}
						</p>
						<Button size="lg">
							{lang === 'ar' ? 'أرسل سيرتك الذاتية' : 'Send Your Resume'}
						</Button>
					</div>
				</section>
			</main>
			<Footer dictionary={dictionary} lang={lang} />
		</div>
	);
}