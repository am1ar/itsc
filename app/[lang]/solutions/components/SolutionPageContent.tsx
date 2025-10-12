'use client';

import { Dictionary } from '@/types/dictionary';
import { Locale } from '@/i18n-config';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

interface SolutionData {
	title: string;
	description: string;
	features: {
		title: string;
		description: string;
	}[];
}

interface SolutionPageContentProps {
	dictionary: Dictionary;
	lang: Locale;
	solution: SolutionData;
}

export default function SolutionPageContent({ dictionary, lang, solution }: SolutionPageContentProps) {
	return (
		<div className="min-h-screen bg-background">
			<Header dictionary={dictionary} lang={lang} />
			<main className="pt-20">
				{/* Hero Section */}
				<section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
					<div className="container mx-auto px-4">
						<div className="max-w-4xl mx-auto text-center">
							<h1 className="text-4xl md:text-6xl font-bold mb-6">
								{solution.title}
							</h1>
							<p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
								{solution.description}
							</p>
							<Button size="lg" className="mr-4">
								{dictionary.contact.actions[0].action}
							</Button>
							<Button variant="outline" size="lg">
								{dictionary.contact.actions[1].action}
							</Button>
						</div>
					</div>
				</section>

				{/* Features Section */}
				<section className="py-20">
					<div className="container mx-auto px-4">
						<div className="grid md:grid-cols-3 gap-8">
							{solution.features.map((feature, index) => (
								<Card key={index} className="text-center">
									<CardHeader>
										<div className="mx-auto mb-4 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
											<Check className="w-6 h-6 text-primary" />
										</div>
										<CardTitle>{feature.title}</CardTitle>
									</CardHeader>
									<CardContent>
										<CardDescription>{feature.description}</CardDescription>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</section>

				{/* CTA Section */}
				<section className="py-20 bg-muted/50">
					<div className="container mx-auto px-4 text-center">
						<h2 className="text-3xl font-bold mb-6">
							{lang === 'ar' ? 'هل أنت مستعد للبدء؟' : 'Ready to Get Started?'}
						</h2>
						<p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
							{lang === 'ar' 
								? 'تواصل معنا اليوم لمعرفة كيف يمكن لحلولنا تحويل عملياتك'
								: 'Contact us today to learn how our solutions can transform your operations'
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