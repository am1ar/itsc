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
				isRTL && 'rtl'
			)}
		>
			<div className='mx-auto max-w-6xl'>
				{/* Header */}
				<motion.div
					className='text-center mb-16'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<div className='inline-flex items-center rounded-full border border-primary/20 bg-primary/10 dark:border-primary/30 dark:bg-primary/20 px-4 py-2 mb-6'>
						<span className='text-sm font-semibold text-primary'>
							{dictionary.faq.title}
						</span>
					</div>
					<h2 className='text-4xl font-mono mb-4 text-foreground dark:text-foreground'>
						{dictionary.faq.description}
					</h2>
					<p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
						{isRTL
							? 'اعثر على إجابات للأسئلة الشائعة حول حلول الذكاء الاصطناعي والأتمتة، عملية التنفيذ، وخدمات الدعم. لا يمكنك العثور على ما تبحث عنه؟ اتصل بخبرائنا.'
							: "Find answers to common questions about our AI and automation solutions, implementation process, and support services. Can't find what you're looking for? Contact our experts."}
					</p>
				</motion.div>

				{/* Search Bar */}
				<motion.div
					className='relative mb-12'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
				>
					<div className='relative max-w-2xl mx-auto'>
						<Search
							className={cn(
								'absolute top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5',
								isRTL ? 'right-4' : 'left-4'
							)}
						/>
						<Input
							type='text'
							placeholder={labels.searchPlaceholder}
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							className={cn(
								'py-4 text-lg bg-card dark:bg-card border-border dark:border-border rounded-xl',
								isRTL ? 'pr-12 pl-4 text-right' : 'pl-12 pr-4 text-left'
							)}
						/>
					</div>
				</motion.div>

				{/* Category Filters */}
				<motion.div
					className='mb-12'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.3 }}
				>
					<div className='flex flex-wrap justify-center gap-4'>
						{categories.map((category) => (
							<button
								key={category.id}
								onClick={() => setActiveCategory(category.id)}
								className={cn(
									'flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-colors',
									activeCategory === category.id
										? `${category.bgColor} ${category.color} border border-current`
										: 'bg-card text-muted-foreground hover:bg-muted/50 dark:bg-card dark:hover:bg-muted/20',
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
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
				>
					{filteredFaqs.length > 0 ? (
						<Accordion type='single' collapsible className='w-full space-y-4'>
							{filteredFaqs.map((faq, index) => {
								const category = categories.find(
									(cat) => cat.id === faq.category
								);
								return (
									<AccordionItem
										key={index}
										value={`item-${index}`}
										className='bg-card dark:bg-card border border-border dark:border-border rounded-xl px-6 shadow-sm hover:shadow-md transition-shadow'
									>
										<AccordionTrigger
											className={cn(
												'hover:no-underline py-6 transition-colors',
												isRTL ? 'text-right' : 'text-left'
											)}
										>
											<div
												className={cn(
													'flex items-start gap-4',
													isRTL ? 'flex-row-reverse text-right' : 'text-left'
												)}
											>
												{category && (
													<div
														className={`p-2 rounded-lg ${category.bgColor} flex-shrink-0 mt-1`}
													>
														<category.icon
															className={`w-5 h-5 ${category.color}`}
														/>
													</div>
												)}
												<span
													className={cn(
														'text-lg font-semibold text-foreground dark:text-foreground',
														isRTL ? 'pl-4' : 'pr-4'
													)}
												>
													{faq.question}
												</span>
											</div>
										</AccordionTrigger>
										<AccordionContent className='pb-6'>
											<div
												className={cn('space-y-4', isRTL ? 'mr-16' : 'ml-16')}
											>
												<p className='text-muted-foreground leading-relaxed'>
													{faq.answer}
												</p>
												{faq.example && (
													<div
														className={cn(
															'p-4 rounded-lg bg-primary/5 border-primary',
															isRTL ? 'border-r-4' : 'border-l-4'
														)}
													>
														<h4 className='text-sm font-semibold text-primary mb-2'>
															{isRTL
																? 'مثال من الواقع:'
																: 'Real-World Example:'}
														</h4>
														<p className='text-sm text-muted-foreground italic'>
															{faq.example}
														</p>
													</div>
												)}
											</div>
										</AccordionContent>
									</AccordionItem>
								);
							})}
						</Accordion>
					) : (
						<div className='text-center py-12'>
							<Search className='w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50' />
							<h3 className='text-xl font-semibold text-foreground dark:text-foreground mb-2'>
								{labels.noResults}
							</h3>
							<p className='text-muted-foreground'>
								{labels.noResultsDescription}
							</p>
							<button
								onClick={() => {
									setSearchQuery('');
									setActiveCategory('all');
								}}
								className='mt-4 px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors'
							>
								{labels.showAllQuestions}
							</button>
						</div>
					)}
				</motion.div>

				{/* Contact CTA */}
				<motion.div
					className='mt-20 text-center p-12 rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 border border-primary/20'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.6 }}
				>
					<MessageCircle className='w-16 h-16 text-primary mx-auto mb-6' />
					<h3 className='text-3xl font-bold mb-4 text-foreground dark:text-foreground'>
						{labels.contactSupport}
					</h3>
					<p className='text-xl text-muted-foreground mb-8 max-w-2xl mx-auto'>
						{labels.contactSupportDescription}
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<button className='px-8 py-3 bg-primary text-primary-foreground rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors'>
							{isRTL ? 'جدولة استشارة خبير' : 'Schedule Expert Consultation'}
						</button>
						<button className='px-8 py-3 border border-primary text-primary rounded-full text-lg font-semibold hover:bg-primary/10 transition-colors'>
							{isRTL ? 'اتصل بفريق الدعم' : 'Contact Support Team'}
						</button>
					</div>
					<div className='mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto'>
						<div className='text-center'>
							<div className='text-2xl font-bold text-primary'>24/7</div>
							<div className='text-sm text-muted-foreground'>
								{isRTL ? 'دعم خبير' : 'Expert Support'}
							</div>
						</div>
						<div className='text-center'>
							<div className='text-2xl font-bold text-primary'>
								15 {isRTL ? 'دقيقة' : 'min'}
							</div>
							<div className='text-sm text-muted-foreground'>
								{isRTL ? 'وقت الاستجابة' : 'Response Time'}
							</div>
						</div>
						<div className='text-center'>
							<div className='text-2xl font-bold text-primary'>98%</div>
							<div className='text-sm text-muted-foreground'>
								{isRTL ? 'رضا العملاء' : 'Client Satisfaction'}
							</div>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
