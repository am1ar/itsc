'use client';

import { Dictionary } from '@/types/dictionary';
import { Locale } from '@/i18n-config';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Linkedin, Mail } from 'lucide-react';

interface TeamPageContentProps {
	dictionary: Dictionary;
	lang: Locale;
}

const teamMembers = [
	{
		id: 1,
		name: 'Ahmed Al-Rashid',
		position: {
			en: 'Chief Executive Officer',
			ar: 'الرئيس التنفيذي'
		},
		bio: {
			en: 'Leading ITSC with over 15 years of experience in supply chain management and AI technology.',
			ar: 'يقود ITSC بخبرة تزيد عن 15 عاماً في إدارة سلسلة التوريد وتكنولوجيا الذكاء الاصطناعي.'
		},
		expertise: ['AI Strategy', 'Supply Chain', 'Leadership']
	},
	{
		id: 2,
		name: 'Sarah Johnson',
		position: {
			en: 'Chief Technology Officer',
			ar: 'مدير التكنولوجيا'
		},
		bio: {
			en: 'Expert in AI and machine learning with a focus on supply chain optimization solutions.',
			ar: 'خبيرة في الذكاء الاصطناعي والتعلم الآلي مع التركيز على حلول تحسين سلسلة التوريد.'
		},
		expertise: ['Machine Learning', 'AI Development', 'Data Science']
	},
	{
		id: 3,
		name: 'Mohammed Hassan',
		position: {
			en: 'Head of Operations',
			ar: 'رئيس العمليات'
		},
		bio: {
			en: 'Specializes in logistics optimization and warehouse automation with 12+ years of experience.',
			ar: 'متخصص في تحسين الخدمات اللوجستية وأتمتة المستودعات بخبرة تزيد عن 12 عاماً.'
		},
		expertise: ['Logistics', 'Operations', 'Automation']
	}
];

export default function TeamPageContent({ dictionary, lang }: TeamPageContentProps) {
	return (
		<div className="min-h-screen bg-background">
			<Header dictionary={dictionary} lang={lang} />
			<main className="pt-20">
				{/* Hero Section */}
				<section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
					<div className="container mx-auto px-4">
						<div className="max-w-4xl mx-auto text-center">
							<h1 className="text-4xl md:text-6xl font-bold mb-6">
								{lang === 'ar' ? 'فريق القيادة' : 'Leadership Team'}
							</h1>
							<p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
								{lang === 'ar' 
									? 'تعرف على الخبراء الذين يقودون الابتكار في ITSC'
									: 'Meet the experts driving innovation at ITSC'
								}
							</p>
						</div>
					</div>
				</section>

				{/* Team Members */}
				<section className="py-20">
					<div className="container mx-auto px-4">
						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
							{teamMembers.map((member) => (
								<Card key={member.id} className="text-center hover:shadow-lg transition-shadow">
									<CardHeader>
										<div className="mx-auto mb-4 w-24 h-24 rounded-full bg-muted flex items-center justify-center">
											<div className="text-2xl font-bold text-muted-foreground">
												{member.name.split(' ').map(n => n[0]).join('')}
											</div>
										</div>
										<CardTitle>{member.name}</CardTitle>
										<CardDescription className="text-primary font-medium">
											{member.position[lang]}
										</CardDescription>
									</CardHeader>
									<CardContent>
										<p className="text-muted-foreground mb-4 text-sm">
											{member.bio[lang]}
										</p>
										<div className="flex flex-wrap gap-2 justify-center mb-4">
											{member.expertise.map((skill, index) => (
												<Badge key={index} variant="secondary" className="text-xs">
													{skill}
												</Badge>
											))}
										</div>
										<div className="flex justify-center space-x-2">
											<button className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors">
												<Linkedin className="w-4 h-4" />
											</button>
											<button className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors">
												<Mail className="w-4 h-4" />
											</button>
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</section>

				{/* Join Our Team CTA */}
				<section className="py-20 bg-muted/50">
					<div className="container mx-auto px-4 text-center">
						<h2 className="text-3xl font-bold mb-6">
							{lang === 'ar' ? 'انضم إلى فريقنا' : 'Join Our Team'}
						</h2>
						<p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
							{lang === 'ar' 
								? 'نحن نبحث عن أشخاص موهوبين للانضمام إلى مهمتنا في تحويل سلاسل التوريد'
								: 'We are looking for talented individuals to join our mission of transforming supply chains'
							}
						</p>
						<a 
							href={`/${lang}/careers`}
							className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
						>
							{lang === 'ar' ? 'عرض الوظائف' : 'View Careers'}
						</a>
					</div>
				</section>
			</main>
			<Footer dictionary={dictionary} lang={lang} />
		</div>
	);
}