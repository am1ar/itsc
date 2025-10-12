'use client';

import { Dictionary } from '@/types/dictionary';
import { Locale } from '@/i18n-config';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, User } from 'lucide-react';

interface BlogPageContentProps {
	dictionary: Dictionary;
	lang: Locale;
}

const blogPosts = [
	{
		id: 1,
		title: {
			en: 'The Future of AI in Supply Chain Management',
			ar: 'مستقبل الذكاء الاصطناعي في إدارة سلسلة التوريد'
		},
		excerpt: {
			en: 'Discover how artificial intelligence is revolutionizing supply chain operations and what it means for businesses.',
			ar: 'اكتشف كيف يحدث الذكاء الاصطناعي ثورة في عمليات سلسلة التوريد وما يعنيه ذلك للشركات.'
		},
		category: {
			en: 'AI & Technology',
			ar: 'الذكاء الاصطناعي والتكنولوجيا'
		},
		date: '2024-01-15',
		author: 'ITSC Team'
	},
	{
		id: 2,
		title: {
			en: 'Optimizing Warehouse Operations with Automation',
			ar: 'تحسين عمليات المستودعات بالأتمتة'
		},
		excerpt: {
			en: 'Learn how warehouse automation can reduce costs and improve efficiency in your supply chain.',
			ar: 'تعلم كيف يمكن لأتمتة المستودعات تقليل التكاليف وتحسين الكفاءة في سلسلة التوريد الخاصة بك.'
		},
		category: {
			en: 'Warehouse Management',
			ar: 'إدارة المستودعات'
		},
		date: '2024-01-10',
		author: 'ITSC Team'
	},
	{
		id: 3,
		title: {
			en: 'Demand Forecasting: The Key to Supply Chain Success',
			ar: 'التنبؤ بالطلب: مفتاح نجاح سلسلة التوريد'
		},
		excerpt: {
			en: 'Understand the importance of accurate demand forecasting and how it can transform your business.',
			ar: 'فهم أهمية التنبؤ الدقيق بالطلب وكيف يمكن أن يحول عملك.'
		},
		category: {
			en: 'Analytics',
			ar: 'التحليلات'
		},
		date: '2024-01-05',
		author: 'ITSC Team'
	}
];

export default function BlogPageContent({ dictionary, lang }: BlogPageContentProps) {
	return (
		<div className="min-h-screen bg-background">
			<Header dictionary={dictionary} lang={lang} />
			<main className="pt-20">
				{/* Hero Section */}
				<section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
					<div className="container mx-auto px-4">
						<div className="max-w-4xl mx-auto text-center">
							<h1 className="text-4xl md:text-6xl font-bold mb-6">
								{lang === 'ar' ? 'المدونة والرؤى' : 'Blog & Insights'}
							</h1>
							<p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
								{lang === 'ar' 
									? 'اكتشف أحدث الاتجاهات والرؤى في مجال سلسلة التوريد والذكاء الاصطناعي'
									: 'Discover the latest trends and insights in supply chain and AI technology'
								}
							</p>
						</div>
					</div>
				</section>

				{/* Blog Posts */}
				<section className="py-20">
					<div className="container mx-auto px-4">
						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
							{blogPosts.map((post) => (
								<Card key={post.id} className="hover:shadow-lg transition-shadow">
									<CardHeader>
										<div className="flex items-center justify-between mb-2">
											<Badge variant="secondary">
												{post.category[lang]}
											</Badge>
											<div className="flex items-center text-sm text-muted-foreground">
												<Calendar className="w-4 h-4 mr-1" />
												{post.date}
											</div>
										</div>
										<CardTitle className="line-clamp-2">
											{post.title[lang]}
										</CardTitle>
									</CardHeader>
									<CardContent>
										<CardDescription className="line-clamp-3 mb-4">
											{post.excerpt[lang]}
										</CardDescription>
										<div className="flex items-center text-sm text-muted-foreground">
											<User className="w-4 h-4 mr-1" />
											{post.author}
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</section>
			</main>
			<Footer dictionary={dictionary} lang={lang} />
		</div>
	);
}