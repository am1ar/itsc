'use client';

import { Dictionary } from '@/types/dictionary';
import { Locale } from '@/i18n-config';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, User } from 'lucide-react';

interface NewsPageContentProps {
	dictionary: Dictionary;
	lang: Locale;
}

const newsArticles = [
	{
		id: 1,
		title: {
			en: 'ITSC Expands Operations to UAE Market',
			ar: 'ITSC توسع عملياتها إلى السوق الإماراتي'
		},
		excerpt: {
			en: 'ITSC announces strategic expansion into the UAE market, bringing AI-powered supply chain solutions to Dubai and Abu Dhabi.',
			ar: 'ITSC تعلن عن التوسع الاستراتيجي في السوق الإماراتي، وتقدم حلول سلسلة التوريد المدعومة بالذكاء الاصطناعي إلى دبي وأبو ظبي.'
		},
		category: {
			en: 'Company News',
			ar: 'أخبار الشركة'
		},
		date: '2024-01-20',
		author: 'ITSC Communications'
	},
	{
		id: 2,
		title: {
			en: 'New Partnership with Leading Logistics Provider',
			ar: 'شراكة جديدة مع مزود خدمات لوجستية رائد'
		},
		excerpt: {
			en: 'ITSC partners with regional logistics leader to implement AI-driven route optimization across 500+ delivery vehicles.',
			ar: 'ITSC تشارك مع رائد الخدمات اللوجستية الإقليمي لتنفيذ تحسين المسارات المدعوم بالذكاء الاصطناعي عبر أكثر من 500 مركبة توصيل.'
		},
		category: {
			en: 'Partnerships',
			ar: 'الشراكات'
		},
		date: '2024-01-15',
		author: 'ITSC Communications'
	},
	{
		id: 3,
		title: {
			en: 'ITSC Wins Supply Chain Innovation Award',
			ar: 'ITSC تفوز بجائزة الابتكار في سلسلة التوريد'
		},
		excerpt: {
			en: 'ITSC receives recognition for outstanding innovation in AI-powered supply chain management at the Middle East Logistics Awards.',
			ar: 'ITSC تحصل على التقدير للابتكار المتميز في إدارة سلسلة التوريد المدعومة بالذكاء الاصطناعي في جوائز الشرق الأوسط للخدمات اللوجستية.'
		},
		category: {
			en: 'Awards',
			ar: 'الجوائز'
		},
		date: '2024-01-10',
		author: 'ITSC Communications'
	}
];

export default function NewsPageContent({ dictionary, lang }: NewsPageContentProps) {
	return (
		<div className="min-h-screen bg-background">
			<Header dictionary={dictionary} lang={lang} />
			<main className="pt-20">
				{/* Hero Section */}
				<section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
					<div className="container mx-auto px-4">
						<div className="max-w-4xl mx-auto text-center">
							<h1 className="text-4xl md:text-6xl font-bold mb-6">
								{lang === 'ar' ? 'الأخبار والإعلام' : 'News & Media'}
							</h1>
							<p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
								{lang === 'ar' 
									? 'ابق على اطلاع بأحدث أخبار ITSC والتطورات في مجال سلسلة التوريد'
									: 'Stay updated with the latest ITSC news and developments in supply chain technology'
								}
							</p>
						</div>
					</div>
				</section>

				{/* News Articles */}
				<section className="py-20">
					<div className="container mx-auto px-4">
						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
							{newsArticles.map((article) => (
								<Card key={article.id} className="hover:shadow-lg transition-shadow">
									<CardHeader>
										<div className="flex items-center justify-between mb-2">
											<Badge variant="secondary">
												{article.category[lang]}
											</Badge>
											<div className="flex items-center text-sm text-muted-foreground">
												<Calendar className="w-4 h-4 mr-1" />
												{article.date}
											</div>
										</div>
										<CardTitle className="line-clamp-2">
											{article.title[lang]}
										</CardTitle>
									</CardHeader>
									<CardContent>
										<CardDescription className="line-clamp-3 mb-4">
											{article.excerpt[lang]}
										</CardDescription>
										<div className="flex items-center text-sm text-muted-foreground">
											<User className="w-4 h-4 mr-1" />
											{article.author}
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</section>

				{/* Media Contact */}
				<section className="py-20 bg-muted/50">
					<div className="container mx-auto px-4 text-center">
						<h2 className="text-3xl font-bold mb-6">
							{lang === 'ar' ? 'الاتصال الإعلامي' : 'Media Contact'}
						</h2>
						<p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
							{lang === 'ar' 
								? 'للاستفسارات الإعلامية والصحفية، يرجى التواصل معنا'
								: 'For media inquiries and press requests, please contact us'
							}
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<a 
								href={`mailto:${dictionary.footer.contact.email}`}
								className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
							>
								{dictionary.footer.contact.email}
							</a>
							<a 
								href={`tel:${dictionary.footer.contact.phone}`}
								className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
							>
								{dictionary.footer.contact.phone}
							</a>
						</div>
					</div>
				</section>
			</main>
			<Footer dictionary={dictionary} lang={lang} />
		</div>
	);
}