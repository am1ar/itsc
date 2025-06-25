'use client';

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Dictionary } from '@/types/dictionary';
import { motion } from 'framer-motion';
import { MessageCircle, Search } from 'lucide-react';
import { useState } from 'react';
import { faqData } from '../data/faq';

interface FaqSectionProps {
	dictionary: Dictionary;
	lang: string;
}

export default function FaqSection({ dictionary, lang }: FaqSectionProps) {
	const [searchQuery, setSearchQuery] = useState('');
	const [activeCategory, setActiveCategory] = useState('all');

	// Get localized data
	const localizedData = faqData[lang as keyof typeof faqData] || faqData.en;
	const { categories, faqs, labels } = localizedData;

	// Determine text direction based on language
	const isRTL = lang === 'ar';

	const filteredFaqs = faqs.filter((faq) => {
		const matchesSearch =
			faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
			faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
		const matchesCategory =
			activeCategory === 'all' || faq.category === activeCategory;
		return matchesSearch && matchesCategory;
	});

	return (
		<section
			className={cn(
				'relative z-10 px-6 py-24 bg-background dark:bg-background',
				isRTL ? 'rtl' : 'ltr'
			)}
			dir={isRTL ? 'rtl' : 'ltr'}
		>
			<div className='mx-auto max-w-6xl'>
				{/* Header */}
				<motion.div
					className={cn('text-center mb-16', isRTL && 'text-right')}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<div className='inline-flex items-center rounded-full border border-primary/20 bg-primary/10 dark:border-primary/30 dark:bg-primary/20 px-4 py-2 mb-6'>
						<span className='text-sm font-semibold text-primary'>
							{dictionary.faq.title}
						</span>
					</div>
					<h2
						className={cn(
							'text-4xl font-mono mb-4 dark:text-white',
							isRTL && 'text-right'
						)}
					>
						{dictionary.faq.title}
					</h2>
					<p
						className={cn(
							'text-xl text-muted-foreground max-w-3xl mx-auto',
							isRTL && 'text-right'
						)}
					>
						{dictionary.faq.description}
					</p>
				</motion.div>

				{/* Search and Categories */}
				<motion.div
					className='mb-12'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
				>
					{/* Search */}
					<div className='relative max-w-lg mx-auto mb-8'>
						<Search
							className={cn(
								'absolute top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground',
								isRTL ? 'right-4' : 'left-4'
							)}
						/>
						<Input
							type='text'
							placeholder={labels.searchPlaceholder}
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							className={cn(
								'w-full py-3 rounded-full border-2 bg-background focus:border-primary',
								isRTL ? 'pr-12 pl-4 text-right' : 'pl-12 pr-4 text-left'
							)}
							dir={isRTL ? 'rtl' : 'ltr'}
						/>
					</div>

					{/* Category Filter */}
					<div className='flex flex-wrap gap-2 justify-center'>
						{categories.map((category) => (
							<button
								key={category.id}
								onClick={() => setActiveCategory(category.id)}
								className={cn(
									'flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
									activeCategory === category.id
										? `${category.bgColor} ${category.color} border-2 border-current`
										: 'bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground',
									isRTL && 'flex-row-reverse'
								)}
							>
								<category.icon className='w-4 h-4' />
								{category.title}
							</button>
						))}
					</div>
				</motion.div>

				{/* FAQ Content */}
				{filteredFaqs.length > 0 ? (
					<motion.div
						className='space-y-4'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}
					>
						<Accordion type='single' collapsible className='space-y-4'>
							{filteredFaqs.map((faq, index) => (
								<AccordionItem
									key={index}
									value={`item-${index}`}
									className='border border-border bg-card dark:bg-card rounded-xl px-6 shadow-sm hover:shadow-md transition-shadow'
								>
									<AccordionTrigger
										className={cn(
											'text-left font-semibold text-lg py-6 hover:no-underline [&[data-state=open]>svg]:rotate-180',
											isRTL && 'text-right flex-row-reverse'
										)}
									>
										<span className={cn('flex-1', isRTL && 'text-right')}>
											{faq.question}
										</span>
									</AccordionTrigger>
									<AccordionContent className='pb-6'>
										<div
											className={cn(
												'space-y-4 text-muted-foreground',
												isRTL && 'text-right'
											)}
										>
											<p className='leading-relaxed'>{faq.answer}</p>
											{faq.example && (
												<div className='p-4 bg-primary/5 border-l-4 border-primary rounded-r-lg'>
													<h4
														className={cn(
															'font-semibold text-primary mb-2',
															isRTL && 'text-right'
														)}
													>
														{isRTL ? 'مثال:' : 'Example:'}
													</h4>
													<p
														className={cn(
															'text-sm italic',
															isRTL && 'text-right'
														)}
													>
														{faq.example}
													</p>
												</div>
											)}
										</div>
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</motion.div>
				) : (
					<motion.div
						className={cn('text-center py-16', isRTL && 'text-right')}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}
					>
						<div className='max-w-md mx-auto'>
							<Search className='w-16 h-16 text-muted-foreground mx-auto mb-6' />
							<h3
								className={cn(
									'text-xl font-semibold mb-2 dark:text-white',
									isRTL && 'text-right'
								)}
							>
								{labels.noResults}
							</h3>
							<p
								className={cn(
									'text-muted-foreground mb-6',
									isRTL && 'text-right'
								)}
							>
								{labels.noResultsDescription}
							</p>
							<button
								onClick={() => {
									setActiveCategory('all');
									setSearchQuery('');
								}}
								className='px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors'
							>
								{labels.showAllQuestions}
							</button>
						</div>
					</motion.div>
				)}

				{/* Contact Support CTA */}
				<motion.div
					className={cn(
						'mt-20 text-center p-12 rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 border border-primary/20',
						isRTL && 'text-right'
					)}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.6 }}
				>
					<MessageCircle className='w-16 h-16 text-primary mx-auto mb-6' />
					<h3
						className={cn(
							'text-2xl font-bold mb-4 dark:text-white',
							isRTL && 'text-right'
						)}
					>
						{labels.contactSupportDescription}
					</h3>
					<p
						className={cn(
							'text-muted-foreground mb-8 max-w-2xl mx-auto',
							isRTL && 'text-right'
						)}
					>
						{dictionary.contact.description}
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<button className='px-8 py-3 bg-primary text-primary-foreground rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors'>
							{labels.contactSupport}
						</button>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
