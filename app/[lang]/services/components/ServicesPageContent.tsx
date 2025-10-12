'use client';

import { Dictionary } from '@/types/dictionary';
import { Locale } from '@/i18n-config';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SolutionSection from '../../components/SolutionSection';

interface ServicesPageContentProps {
	dictionary: Dictionary;
	lang: Locale;
}

export default function ServicesPageContent({ dictionary, lang }: ServicesPageContentProps) {
	return (
		<div className="min-h-screen bg-background">
			<Header dictionary={dictionary} lang={lang} />
			<main className="pt-20">
				<div className="container mx-auto px-4 py-16">
					<div className="text-center mb-16">
						<h1 className="text-4xl md:text-6xl font-bold mb-6">
							{dictionary.services.title}
						</h1>
						<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
							{dictionary.services.description}
						</p>
					</div>
				</div>
				<SolutionSection dictionary={dictionary} lang={lang} />
			</main>
			<Footer dictionary={dictionary} lang={lang} />
		</div>
	);
}