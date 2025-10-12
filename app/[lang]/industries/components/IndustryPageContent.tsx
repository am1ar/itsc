'use client';

import { Dictionary } from '@/types/dictionary';
import { Locale } from '@/i18n-config';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, Check } from 'lucide-react';

interface IndustryData {
	title: string;
	description: string;
	challenges: {
		title: string;
		description: string;
	}[];
	solutions: {
		title: string;
		description: string;
	}[];
}

interface IndustryPageContentProps {
	dictionary: Dictionary;
	lang: Locale;
	industry: IndustryData;
}

export default function IndustryPageContent({ dictionary, lang, industry }: IndustryPageContentProps) {
	return (
		<div className="min-h-screen bg-background">
			<Header dictionary={dictionary} lang={lang} />
			<main className="pt-20">
				{/* Hero Section */}
				<section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
					<div className="container mx-auto px-4">
						<div className="max-w-4xl mx-auto text-center">
							<h1 className="text-4xl md:text-6xl font-bold mb-6">
								{industry.title}
							</h1>
							<p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
								{industry.description}
							</p>
							<Button size="lg">
								{dictionary.contact.title}
							</Button>
						</div>
					</div>
				</section>

				{/* Challenges Section */}
				<section className="py-20">
					<div className="container mx-auto px-4">
						<h2 className="text-3xl font-bold text-center mb-12">
							{lang === 'ar' ? 'التحديات الصناعية' : 'Industry Challenges'}
						</h2>
						<div className="grid md:grid-cols-3 gap-8">
							{industry.challenges.map((challenge, index) => (
								<Card key={index} className="text-center">
									<CardHeader>
										<div className="mx-auto mb-4 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
											<AlertTriangle className="w-6 h-6 text-orange-600" />
										</div>
										<CardTitle>{challenge.title}</CardTitle>
									</CardHeader>
									<CardContent>
										<CardDescription>{challenge.description}</CardDescription>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</section>

				{/* Solutions Section */}
				<section className="py-20 bg-muted/50">
					<div className="container mx-auto px-4">
						<h2 className="text-3xl font-bold text-center mb-12">
							{lang === 'ar' ? 'حلولنا' : 'Our Solutions'}
						</h2>
						<div className="grid md:grid-cols-2 gap-8">
							{industry.solutions.map((solution, index) => (
								<Card key={index} className="text-center">
									<CardHeader>
										<div className="mx-auto mb-4 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
											<Check className="w-6 h-6 text-green-600" />
										</div>
										<CardTitle>{solution.title}</CardTitle>
									</CardHeader>
									<CardContent>
										<CardDescription>{solution.description}</CardDescription>
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
							{lang === 'ar' ? 'هل أنت مستعد لتحويل صناعتك؟' : 'Ready to Transform Your Industry?'}
						</h2>
						<p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
							{lang === 'ar' 
								? 'تواصل معنا اليوم لمعرفة كيف يمكن لحلولنا المتخصصة تحسين عملياتك'
								: 'Contact us today to learn how our specialized solutions can improve your operations'
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