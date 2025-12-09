'use client';

import { Dictionary } from '@/types/dictionary';
import { Locale } from '@/i18n-config';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { cn } from '@/lib/utils';

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
	const isRTL = lang === 'ar';
	
	// Function to render content with proper line breaks
	const renderContent = (content: string) => {
		return content.split('\n').map((line, index, array) => {
			// If line starts with bullet point marker
			if (line.trim().startsWith('•') || line.trim().startsWith('-')) {
				return (
					<span key={index} className="block mb-2">
						{line}
					</span>
				);
			}
			// Regular paragraph
			if (line.trim() === '') {
				return <br key={index} />;
			}
			return (
				<span key={index}>
					{line}
					{index < array.length - 1 && <br />}
				</span>
			);
		});
	};

	return (
		<div className={cn("min-h-screen bg-background", isRTL && 'rtl font-arabic')} dir={isRTL ? 'rtl' : 'ltr'}>
			<Header dictionary={dictionary} lang={lang} />
			<main className="pt-20">
				<div className="container mx-auto px-4 py-16">
					<div className="max-w-4xl mx-auto">
						<h1 className={cn("text-4xl font-bold mb-6", isRTL && 'text-right font-arabic')}>
							{legal.title}
						</h1>
						<p className={cn("text-muted-foreground mb-8", isRTL && 'text-right font-arabic')}>
							{lang === 'ar' ? 'آخر تحديث: ' : 'Last updated: '}{legal.lastUpdated}
						</p>
						
						<div className="prose prose-lg max-w-none">
							{legal.sections.map((section, index) => (
								<div key={index} className={cn("mb-8", isRTL && 'text-right')}>
									<h2 className={cn("text-2xl font-semibold mb-4", isRTL && 'text-right font-arabic')}>
										{section.title}
									</h2>
									<p className={cn("text-muted-foreground leading-relaxed whitespace-pre-line", isRTL && 'text-right font-arabic')}>
										{section.content}
									</p>
								</div>
							))}
						</div>

						<div className={cn("mt-12 p-6 bg-muted/50 rounded-lg", isRTL && 'text-right')}>
							<h3 className={cn("text-xl font-semibold mb-4", isRTL && 'text-right font-arabic')}>
								{lang === 'ar' ? 'تواصل معنا' : 'Contact Us'}
							</h3>
							<p className={cn("text-muted-foreground", isRTL && 'font-arabic')}>
								{lang === 'ar' 
									? 'إذا كان لديك أي أسئلة حول هذه السياسة، يرجى الاتصال بنا على:'
									: 'If you have any questions about this policy, please contact us at:'
								}
							</p>
							<p className={cn("mt-2", isRTL && 'font-arabic')}>
								<strong>{lang === 'ar' ? 'البريد الإلكتروني:' : 'Email:'}</strong> {dictionary.footer.contact.email}<br />
								<strong>{lang === 'ar' ? 'الهاتف:' : 'Phone:'}</strong> {dictionary.footer.contact.phone}
							</p>
						</div>
					</div>
				</div>
			</main>
			<Footer dictionary={dictionary} lang={lang} />
		</div>
	);
}