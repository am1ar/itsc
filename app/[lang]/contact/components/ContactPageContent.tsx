'use client';

import { Dictionary } from '@/types/dictionary';
import { Locale } from '@/i18n-config';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ContactSection from '../../components/ContactSection';

interface ContactPageContentProps {
	dictionary: Dictionary;
	lang: Locale;
}

export default function ContactPageContent({ dictionary, lang }: ContactPageContentProps) {
	return (
		<div className="min-h-screen bg-background">
			<Header dictionary={dictionary} lang={lang} />
			<main className="pt-20">
				<ContactSection dictionary={dictionary} lang={lang} />
			</main>
			<Footer dictionary={dictionary} lang={lang} />
		</div>
	);
}