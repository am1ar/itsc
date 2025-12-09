'use client';

import { Dictionary } from '@/types/dictionary';
import { Locale } from '@/i18n-config';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SolutionSection from '../../components/SolutionSection';
import CapabilitiesSection from '../../components/CapabilitiesSection';
import { cn } from '@/lib/utils';

interface ServicesPageContentProps {
	dictionary: Dictionary;
	lang: Locale;
}

export default function ServicesPageContent({ dictionary, lang }: ServicesPageContentProps) {
	const isRTL = lang === 'ar';
	
	return (
		<div className={cn("min-h-screen bg-background", isRTL && 'rtl font-arabic')} dir={isRTL ? 'rtl' : 'ltr'}>
			<Header dictionary={dictionary} lang={lang} />
			<main className="pt-20">
				{/* Hero Section */}
				<div className="container mx-auto px-4 py-16">
					<div className={cn("text-center mb-16", isRTL && 'text-right')}>
						<h1 className={cn("text-4xl md:text-6xl font-bold mb-6", isRTL && 'font-arabic')}>
							{dictionary.services.title}
						</h1>
						<p className={cn("text-xl text-muted-foreground max-w-3xl mx-auto", isRTL && 'font-arabic')}>
							{dictionary.services.description}
						</p>
					</div>
				</div>
				
				{/* Capabilities Section */}
				<CapabilitiesSection dictionary={dictionary} lang={lang} />
				
				{/* Solutions Section */}
				<SolutionSection dictionary={dictionary} lang={lang} />
			</main>
			<Footer dictionary={dictionary} lang={lang} />
		</div>
	);
}