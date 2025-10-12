'use client';

import { Dictionary } from '@/types/dictionary';
import { Locale } from '@/i18n-config';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AboutSection from '../../components/AboutSection';

interface AboutPageContentProps {
	dictionary: Dictionary;
	lang: Locale;
}

export default function AboutPageContent({ dictionary, lang }: AboutPageContentProps) {
	return (
		<div className="min-h-screen bg-background">
			<Header dictionary={dictionary} lang={lang} />
			<main className="pt-20">
				<AboutSection dictionary={dictionary} lang={lang} />
			</main>
			<Footer dictionary={dictionary} lang={lang} />
		</div>
	);
}