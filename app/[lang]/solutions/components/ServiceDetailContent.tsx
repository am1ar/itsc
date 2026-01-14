'use client';

import { Dictionary } from '@/types/dictionary';
import { Locale } from '@/i18n-config';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { 
	BarChart3, 
	Route, 
	Truck, 
	Map, 
	Code, 
	Database,
	Check,
	TrendingUp,
	Zap,
	Target,
	ArrowRight
} from 'lucide-react';
import Link from 'next/link';

interface ServiceContent {
	hero: {
		title: string;
		subtitle?: string;
		description: string;
	};
	definition: {
		title: string;
		content: string;
		challenge: string;
	};
	approach: {
		title: string;
		content: string;
		technologies: Array<{
			title: string;
			description: string;
		}>;
	};
	benefits: {
		title: string;
		content: string;
		roi: Array<{
			metric: string;
			value: string;
			description: string;
		}>;
	};
	integration: {
		title: string;
		content: string;
	};
	cta: {
		title: string;
		description: string;
		buttonText: string;
		buttonLink: string;
	};
	icon: 'BarChart3' | 'Route' | 'Truck' | 'Map' | 'Code' | 'Database';
}

interface ServiceDetailContentProps {
	dictionary: Dictionary;
	lang: Locale;
	content: ServiceContent;
}

const iconMap = {
	BarChart3,
	Route,
	Truck,
	Map,
	Code,
	Database,
};

export default function ServiceDetailContent({ dictionary, lang, content }: ServiceDetailContentProps) {
	const isRTL = lang === 'ar';
	const Icon = iconMap[content.icon];

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
							<div className="inline-flex items-center justify-center mb-6">
								<div className="p-4 rounded-2xl bg-primary/20">
									<Icon className="w-12 h-12 text-primary" />
								</div>
							</div>
							<h1 className={cn(
								"text-4xl md:text-6xl font-bold mb-6 dark:text-white",
								isRTL && 'font-arabic'
							)}>
								{content.hero.title}
							</h1>
							{content.hero.subtitle && (
								<p className={cn(
									"text-xl font-semibold text-primary mb-4",
									isRTL && 'font-arabic'
								)}>
									{content.hero.subtitle}
								</p>
							)}
							<p className={cn(
								"text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed",
								isRTL && 'font-arabic'
							)}>
								{content.hero.description}
							</p>
							<Link href={content.cta.buttonLink}>
								<Button size="lg" className={cn("mr-4", isRTL && 'ml-4 mr-0')}>
									{content.cta.buttonText}
									<ArrowRight className={cn("ml-2 w-4 h-4", isRTL && 'ml-0 mr-2 rotate-180')} />
								</Button>
							</Link>
						</div>
					</div>
				</section>

				{/* Service Definition Section */}
				<section className="py-20">
					<div className="container mx-auto px-4">
						<div className="max-w-4xl mx-auto">
							<h2 className={cn(
								"text-3xl md:text-4xl font-bold mb-6 dark:text-white",
								isRTL && 'text-right font-arabic'
							)}>
								{content.definition.title}
							</h2>
							<div className={cn("prose prose-lg dark:prose-invert max-w-none", isRTL && 'text-right')}>
								<p className={cn(
									"text-lg text-muted-foreground mb-6 leading-relaxed",
									isRTL && 'font-arabic'
								)}>
									{content.definition.content}
								</p>
								<div className={cn(
									"p-6 rounded-xl bg-muted/50 border-l-4 border-primary",
									isRTL && 'border-l-0 border-r-4'
								)}>
									<h3 className={cn(
										"text-xl font-semibold mb-3 text-foreground",
										isRTL && 'text-right font-arabic'
									)}>
										{lang === 'ar' ? 'التحدي الذي يحله' : 'The Challenge It Solves'}
									</h3>
									<p className={cn(
										"text-muted-foreground leading-relaxed",
										isRTL && 'font-arabic'
									)}>
										{content.definition.challenge}
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* ITSC's Approach Section */}
				<section className="py-20 bg-muted/30">
					<div className="container mx-auto px-4">
						<div className="max-w-4xl mx-auto">
							<h2 className={cn(
								"text-3xl md:text-4xl font-bold mb-6 dark:text-white",
								isRTL && 'text-right font-arabic'
							)}>
								{content.approach.title}
							</h2>
							<p className={cn(
								"text-lg text-muted-foreground mb-8 leading-relaxed",
								isRTL && 'font-arabic'
							)}>
								{content.approach.content}
							</p>
							<div className="grid md:grid-cols-2 gap-6">
								{content.approach.technologies.map((tech, index) => (
									<Card key={index} className={cn(isRTL && 'text-right')}>
										<CardHeader>
											<CardTitle className={cn(isRTL && 'font-arabic')}>
												{tech.title}
											</CardTitle>
										</CardHeader>
										<CardContent>
											<CardDescription className={cn(
												"leading-relaxed",
												isRTL && 'font-arabic'
											)}>
												{tech.description}
											</CardDescription>
										</CardContent>
									</Card>
								))}
							</div>
						</div>
					</div>
				</section>

				{/* Benefits & ROI Section */}
				<section className="py-20">
					<div className="container mx-auto px-4">
						<div className="max-w-4xl mx-auto">
							<h2 className={cn(
								"text-3xl md:text-4xl font-bold mb-6 dark:text-white",
								isRTL && 'text-right font-arabic'
							)}>
								{content.benefits.title}
							</h2>
							<p className={cn(
								"text-lg text-muted-foreground mb-8 leading-relaxed",
								isRTL && 'font-arabic'
							)}>
								{content.benefits.content}
							</p>
							<div className="grid md:grid-cols-3 gap-6 mb-12">
								{content.benefits.roi.map((item, index) => (
									<Card key={index} className={cn(
										"text-center border-2 border-primary/20 hover:border-primary/50 transition-colors",
										isRTL && 'text-right'
									)}>
										<CardHeader>
											<div className="mx-auto mb-4 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
												<TrendingUp className="w-8 h-8 text-primary" />
											</div>
											<CardTitle className={cn("text-3xl font-bold text-primary mb-2", isRTL && 'font-arabic')}>
												{item.value}
											</CardTitle>
											<CardTitle className={cn("text-lg", isRTL && 'font-arabic')}>
												{item.metric}
											</CardTitle>
										</CardHeader>
										<CardContent>
											<CardDescription className={cn(
												"leading-relaxed",
												isRTL && 'font-arabic'
											)}>
												{item.description}
											</CardDescription>
										</CardContent>
									</Card>
								))}
							</div>
						</div>
					</div>
				</section>

				{/* Integration Section */}
				<section className="py-20 bg-muted/30">
					<div className="container mx-auto px-4">
						<div className="max-w-4xl mx-auto">
							<h2 className={cn(
								"text-3xl md:text-4xl font-bold mb-6 dark:text-white",
								isRTL && 'text-right font-arabic'
							)}>
								{content.integration.title}
							</h2>
							<div className={cn(
								"prose prose-lg dark:prose-invert max-w-none",
								isRTL && 'text-right'
							)}>
								<p className={cn(
									"text-lg text-muted-foreground mb-6 leading-relaxed",
									isRTL && 'font-arabic'
								)}>
									{content.integration.content}
								</p>
								<div className={cn(
									"p-8 rounded-xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20",
									isRTL && 'text-right'
								)}>
									<div className="flex items-start gap-4">
										<Zap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
										<div>
											<h3 className={cn(
												"text-xl font-semibold mb-2 text-foreground",
												isRTL && 'font-arabic'
											)}>
												{lang === 'ar' ? 'التكامل السلس' : 'Seamless Integration'}
											</h3>
											<p className={cn(
												"text-muted-foreground leading-relaxed",
												isRTL && 'font-arabic'
											)}>
												{lang === 'ar' 
													? 'تتكامل حلولنا بسلاسة مع أنظمتك الحالية من خلال واجهات برمجية موحدة ومعايير صناعية مفتوحة. نحن نضمن التكامل مع SAP EWM و Oracle WMS و Microsoft Dynamics وأنظمة ERP الرئيسية الأخرى.'
													: 'Our solutions integrate seamlessly with your existing systems through unified APIs and open industry standards. We ensure compatibility with SAP EWM, Oracle WMS, Microsoft Dynamics, and other major ERP platforms.'
												}
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* CTA Section */}
				<section className="py-20 bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10">
					<div className="container mx-auto px-4 text-center">
						<h2 className={cn(
							"text-3xl md:text-4xl font-bold mb-6 dark:text-white",
							isRTL && 'font-arabic'
						)}>
							{content.cta.title}
						</h2>
						<p className={cn(
							"text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed",
							isRTL && 'font-arabic'
						)}>
							{content.cta.description}
						</p>
						<Link href={content.cta.buttonLink}>
							<Button size="lg" className="text-lg px-8 py-6">
								{content.cta.buttonText}
								<ArrowRight className={cn("ml-2 w-5 h-5", isRTL && 'ml-0 mr-2 rotate-180')} />
							</Button>
						</Link>
					</div>
				</section>
			</main>
			<Footer dictionary={dictionary} lang={lang} />
		</div>
	);
}


