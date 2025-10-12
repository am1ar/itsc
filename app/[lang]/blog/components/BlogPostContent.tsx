'use client';

import { Dictionary } from '@/types/dictionary';
import { Locale } from '@/i18n-config';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';

interface BlogPost {
	title: string;
	excerpt: string;
	content: string;
	author: string;
	date: string;
	readTime: string;
	category: string;
}

interface BlogPostContentProps {
	dictionary: Dictionary;
	lang: Locale;
	post: BlogPost;
}

export default function BlogPostContent({ dictionary, lang, post }: BlogPostContentProps) {
	return (
		<div className="min-h-screen bg-background">
			<Header dictionary={dictionary} lang={lang} />
			<main className="pt-20">
				<article className="container mx-auto px-4 py-16">
					<div className="max-w-4xl mx-auto">
						{/* Back to Blog */}
						<div className="mb-8">
							<a 
								href={`/${lang}/blog`}
								className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
							>
								<ArrowLeft className="w-4 h-4 mr-2" />
								{lang === 'ar' ? 'العودة إلى المدونة' : 'Back to Blog'}
							</a>
						</div>

						{/* Article Header */}
						<header className="mb-12">
							<div className="flex items-center gap-4 mb-6">
								<Badge variant="secondary">{post.category}</Badge>
								<div className="flex items-center text-sm text-muted-foreground gap-4">
									<div className="flex items-center">
										<Calendar className="w-4 h-4 mr-1" />
										{post.date}
									</div>
									<div className="flex items-center">
										<Clock className="w-4 h-4 mr-1" />
										{post.readTime}
									</div>
									<div className="flex items-center">
										<User className="w-4 h-4 mr-1" />
										{post.author}
									</div>
								</div>
							</div>
							<h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
								{post.title}
							</h1>
							<p className="text-xl text-muted-foreground leading-relaxed">
								{post.excerpt}
							</p>
						</header>

						{/* Article Content */}
						<div className="prose prose-lg max-w-none mb-12">
							<p className="text-lg leading-relaxed">
								{post.content}
							</p>
							
							{/* Additional content sections would go here */}
							<div className="mt-8 p-6 bg-muted/50 rounded-lg">
								<h3 className="text-xl font-semibold mb-4">
									{lang === 'ar' ? 'الخلاصة الرئيسية' : 'Key Takeaways'}
								</h3>
								<ul className="space-y-2">
									<li>{lang === 'ar' ? 'الذكاء الاصطناعي يحول سلاسل التوريد في المنطقة' : 'AI is transforming supply chains in the region'}</li>
									<li>{lang === 'ar' ? 'الاستثمار في التقنيات المتقدمة يحقق عوائد كبيرة' : 'Investment in advanced technologies yields significant returns'}</li>
									<li>{lang === 'ar' ? 'التعاون بين الشركات والتقنية أمر بالغ الأهمية' : 'Collaboration between companies and technology is crucial'}</li>
								</ul>
							</div>
						</div>

						{/* Call to Action */}
						<div className="border-t pt-12">
							<div className="text-center">
								<h3 className="text-2xl font-bold mb-4">
									{lang === 'ar' ? 'هل أنت مستعد لتحويل سلسلة التوريد الخاصة بك؟' : 'Ready to Transform Your Supply Chain?'}
								</h3>
								<p className="text-muted-foreground mb-6">
									{lang === 'ar' 
										? 'تواصل معنا لمعرفة كيف يمكن لحلولنا المدعومة بالذكاء الاصطناعي تحسين عملياتك'
										: 'Contact us to learn how our AI-powered solutions can improve your operations'
									}
								</p>
								<Button size="lg">
									{dictionary.contact.title}
								</Button>
							</div>
						</div>
					</div>
				</article>
			</main>
			<Footer dictionary={dictionary} lang={lang} />
		</div>
	);
}