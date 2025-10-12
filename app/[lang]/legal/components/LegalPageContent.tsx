'use client';

import { Dictionary } from '@/types/dictionary';
import { Locale } from '@/i18n-config';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

interface LegalData {
	title: string;
	lastUpdated: string;
	sections: {
		title: string;
		content: string;
	}[];
}

interface LegalPageContentProps {
	dictionary: Dictionary;
	lang: Locale;
	legal: LegalData;
}

export default function LegalPageContent({ dictionary, lang, legal }: LegalPageContentProps) {
	return (
		<div className="min-h-screen bg-background">
			<Header dictionary={dictionary} lang={lang} />
			<main className="pt-20">
				<div className="container mx-auto px-4 py-16">
					<div className="max-w-4xl mx-auto">
						<h1 className="text-4xl font-bold mb-6">{legal.title}</h1>
						<p className="text-muted-foreground mb-8">
							{lang === 'ar' ? 'آخر تحديث: ' : 'Last updated: '}{legal.lastUpdated}
						</p>
						
						<div className="prose prose-lg max-w-none">
							{legal.sections.map((section, index) => (
								<div key={index} className="mb-8">
									<h2 className="text-2xl font-semibold mb-4">{section.title}</h2>
									<p className="text-muted-foreground leading-relaxed">{section.content}</p>
								</div>
							))}
						</div>

						<div className="mt-12 p-6 bg-muted/50 rounded-lg">
							<h3 className="text-xl font-semibold mb-4">
								{lang === 'ar' ? 'تواصل معنا' : 'Contact Us'}
							</h3>
							<p className="text-muted-foreground">
								{lang === 'ar' 
									? 'إذا كان لديك أي أسئلة حول هذه السياسة، يرجى الاتصال بنا على:'
									: 'If you have any questions about this policy, please contact us at:'
								}
							</p>
							<p className="mt-2">
								<strong>Email:</strong> {dictionary.footer.contact.email}<br />
								<strong>Phone:</strong> {dictionary.footer.contact.phone}
							</p>
						</div>
					</div>
				</div>
			</main>
			<Footer dictionary={dictionary} lang={lang} />
		</div>
	);
}