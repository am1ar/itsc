'use client';

import { Dictionary } from '@/types/dictionary';
import { Locale } from '@/i18n-config';
import Header from './Header';
import Footer from './Footer';
import { Button } from '@/components/ui/button';
import { Construction } from 'lucide-react';

interface PlaceholderPageProps {
	dictionary: Dictionary;
	lang: Locale;
	title: string;
	description: string;
}

export default function PlaceholderPage({ dictionary, lang, title, description }: PlaceholderPageProps) {
	return (
		<div className="min-h-screen bg-background">
			<Header dictionary={dictionary} lang={lang} />
			<main className="pt-20">
				<div className="container mx-auto px-4 py-20">
					<div className="max-w-2xl mx-auto text-center">
						<div className="mb-8">
							<Construction className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
						</div>
						<h1 className="text-4xl font-bold mb-6">{title}</h1>
						<p className="text-xl text-muted-foreground mb-8">
							{description}
						</p>
						<p className="text-muted-foreground mb-8">
							{lang === 'ar' 
								? 'هذه الصفحة قيد التطوير. سيتم إطلاقها قريباً مع محتوى شامل ومفيد.'
								: 'This page is under development. It will be launched soon with comprehensive and useful content.'
							}
						</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<a href={`/${lang}`}>
								<Button>
									{lang === 'ar' ? 'العودة للرئيسية' : 'Back to Home'}
								</Button>
							</a>
							<a href={`/${lang}/contact`}>
								<Button variant="outline">
									{dictionary.contact.title}
								</Button>
							</a>
						</div>
					</div>
				</div>
			</main>
			<Footer dictionary={dictionary} lang={lang} />
		</div>
	);
}