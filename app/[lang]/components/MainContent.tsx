'use client';

import { Dictionary } from '@/types/dictionary';
import AboutSection from './AboutSection';
import ContactSection from './ContactSection';
import FaqSection from './FaqSection';
import Footer from './Footer';
import Header from './Header';
import Hero from './Hero';
import HowWeWorkSection from './HowWeWorkSection';
import SolutionSection from './SolutionSection';
import SuccessStorySection from './SuccessStorySection';

interface MainContentProps {
	dictionary: Dictionary;
	lang: string;
}

export default function MainContent({ dictionary, lang }: MainContentProps) {
	return (
		<main className='relative min-h-screen overflow-hidden bg-background text-foreground'>
			<Header dictionary={dictionary} lang={lang} />
			<div id='hero'>
				<Hero dictionary={dictionary} lang={lang} />
			</div>
			<div id='about'>
				<AboutSection dictionary={dictionary} lang={lang} />
			</div>
			<div id='solutions'>
				<SolutionSection dictionary={dictionary} lang={lang} />
			</div>
			<div id='how-we-work'>
				<HowWeWorkSection dictionary={dictionary} lang={lang} />
			</div>
			{/* <div id='success-story'>
				<SuccessStorySection dictionary={dictionary} lang={lang} />
			</div> */}
			<div id='faq'>
				<FaqSection dictionary={dictionary} lang={lang} />
			</div>
			<div id='contact'>
				<ContactSection dictionary={dictionary} lang={lang} />
			</div>
			<Footer dictionary={dictionary} lang={lang} />
		</main>
	);
}
