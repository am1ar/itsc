'use client';

import { cn } from '@/lib/utils';
import { Dictionary } from '@/types/dictionary';
import { motion } from 'framer-motion';
import {
	ChevronRight,
	Clock,
	DollarSign,
	Filter,
	Search,
	Target,
	TrendingUp,
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { solutions } from '../data/solutions';

interface SolutionSectionProps {
	dictionary: Dictionary;
	lang: string;
}

// Solution categories
const categories = [
	{ id: 'all', name: 'All Solutions' },
	{ id: 'analytics', name: 'Analytics & Intelligence' },
	{ id: 'operations', name: 'Operations & Logistics' },
	{ id: 'risk', name: 'Risk & Compliance' },
	{ id: 'technology', name: 'Technology & Integration' },
	{ id: 'services', name: 'Services & Support' },
];

const impactStats = [
	{ icon: DollarSign, value: '$50M+', label: 'Cost Savings Delivered' },
	{ icon: Target, value: '95%', label: 'Average Accuracy Rate' },
	{ icon: Clock, value: '60%', label: 'Faster Operations' },
	{ icon: TrendingUp, value: '40%', label: 'Efficiency Improvement' },
];

export default function SolutionSection({
	dictionary,
	lang,
}: SolutionSectionProps) {
	const [activeCategory, setActiveCategory] = useState('all');
	const [searchQuery, setSearchQuery] = useState('');

	// Get localized solutions
	const localizedSolutions =
		solutions[lang as keyof typeof solutions] || solutions.en;

	// Filter solutions based on active category and search query
	const filteredSolutions = localizedSolutions.filter((solution) => {
		const matchesCategory =
			activeCategory === 'all' || solution.category === activeCategory;
		const matchesSearch =
			solution.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
			solution.description.toLowerCase().includes(searchQuery.toLowerCase());
		return matchesCategory && matchesSearch;
	});

	// Get featured solutions for the carousel
	const featuredSolutions = localizedSolutions.filter(
		(solution) => solution.featured
	);

	// Determine text direction based on language
	const isRTL = lang === 'ar';

	return (
		<section
			id='solutions'
			className={cn(
				'relative z-10 bg-background text-foreground px-6 py-24',
				isRTL ? 'rtl' : 'ltr'
			)}
			dir={isRTL ? 'rtl' : 'ltr'}
		>
			<div className='container mx-auto max-w-7xl'>
				{/* Header */}
				<motion.div
					className={cn('text-center mb-16', isRTL && 'text-right')}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<div className='inline-flex items-center rounded-full border border-primary/20 bg-primary/10 dark:border-primary/30 dark:bg-primary/20 px-4 py-2 mb-6'>
						<span className='text-sm font-semibold text-primary'>
							{dictionary.services.title}
						</span>
					</div>
					<h2
						className={cn(
							'text-4xl font-mono mb-4 dark:text-white',
							isRTL && 'text-right'
						)}
					>
						{dictionary.services.description}
					</h2>
				</motion.div>

				{/* Featured Solutions Carousel */}
				<motion.div
					className='mb-16'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.3 }}
				>
					<div className='flex items-center justify-between mb-8'>
						<h3 className='text-2xl font-semibold dark:text-white'>
							{dictionary.services.title}
						</h3>
						<Link
							href='/solutions'
							className='flex items-center text-primary hover:underline'
						>
							{dictionary.services.categories.all}{' '}
							<ChevronRight
								className={cn('w-4 h-4', isRTL ? 'ml-1 rotate-180' : 'ml-1')}
							/>
						</Link>
					</div>

					<div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
						{featuredSolutions.map((solution, index) => (
							<motion.div
								key={solution.title}
								className='flex flex-col h-full group p-6 bg-card dark:bg-card rounded-xl shadow-md border border-border dark:border-border hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 hover:shadow-lg'
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.4, delay: 0.1 * index }}
							>
								<div
									className={cn(
										'p-3 rounded-lg bg-primary/10 dark:bg-primary/20 w-fit mb-4',
										isRTL && 'ml-auto'
									)}
								>
									<solution.icon className='w-6 h-6 text-primary' />
								</div>

								<h3
									className={cn(
										'text-lg font-semibold mb-2 dark:text-white group-hover:text-primary transition-colors',
										isRTL && 'text-right'
									)}
								>
									{solution.title}
								</h3>

								<p
									className={cn(
										'text-sm text-gray-600 dark:text-gray-300 mb-4 flex-grow',
										isRTL && 'text-right'
									)}
								>
									{solution.description}
								</p>

								<div className='mt-auto'>
									<div
										className={cn(
											'flex flex-wrap gap-2 mb-4',
											isRTL && 'justify-end'
										)}
									>
										{solution.benefits.slice(0, 2).map((benefit, idx) => (
											<span
												key={idx}
												className={cn(
													'px-3 py-1 text-xs bg-primary/10 dark:bg-primary/20 text-primary rounded-full border border-primary/20',
													isRTL && 'text-right'
												)}
											>
												{benefit}
											</span>
										))}
									</div>

									<Link
										href={solution.link}
										className={cn(
											'inline-flex items-center text-sm font-medium text-primary hover:underline',
											isRTL && 'flex-row-reverse justify-end'
										)}
									>
										{dictionary.services.categories.all}{' '}
										<ChevronRight
											className={cn(
												'w-4 h-4',
												isRTL ? 'mr-1 rotate-180' : 'ml-1'
											)}
										/>
									</Link>
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>

				{/* Solution Categories and Search */}
				<motion.div
					className='mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.4 }}
				>
					<div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6'>
						<div className='flex flex-wrap gap-2'>
							{categories.map((category) => (
								<button
									key={category.id}
									onClick={() => setActiveCategory(category.id)}
									className={cn(
										'px-4 py-2 text-sm rounded-full transition-colors',
										activeCategory === category.id
											? 'bg-primary text-primary-foreground'
											: 'bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground'
									)}
								>
									{
										dictionary.services.categories[
											category.id as keyof typeof dictionary.services.categories
										]
									}
								</button>
							))}
						</div>

						<div className='relative w-full md:w-64'>
							<Search
								className={cn(
									'absolute top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground',
									isRTL ? 'right-3' : 'left-3'
								)}
							/>
							<input
								type='text'
								placeholder={dictionary.services.searchPlaceholder}
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
								className={cn(
									'w-full py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary',
									isRTL ? 'pr-10 pl-4 text-right' : 'pl-10 pr-4 text-left'
								)}
								dir={isRTL ? 'rtl' : 'ltr'}
							/>
						</div>
					</div>
				</motion.div>

				{/* All Solutions Grid */}
				<div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
					{filteredSolutions.length > 0 ? (
						filteredSolutions.map((solution, index) => (
							<motion.div
								key={solution.title}
								className='group p-6 bg-card dark:bg-card rounded-xl shadow-md border border-border dark:border-border hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 hover:shadow-lg flex flex-col h-full'
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.4, delay: 0.05 * index }}
							>
								<div className='p-3 rounded-lg bg-primary/10 dark:bg-primary/20 w-fit mb-4'>
									<solution.icon className='w-6 h-6 text-primary' />
								</div>

								<h3 className='text-lg font-semibold mb-2 dark:text-white group-hover:text-primary transition-colors'>
									{solution.title}
								</h3>

								<p className='text-sm text-gray-600 dark:text-gray-300 mb-4 flex-grow'>
									{solution.description}
								</p>

								<div className='mt-auto'>
									<div className='flex flex-wrap gap-2 mb-4'>
										{solution.benefits.slice(0, 2).map((benefit, idx) => (
											<span
												key={idx}
												className='px-3 py-1 text-xs bg-primary/10 dark:bg-primary/20 text-primary rounded-full border border-primary/20'
											>
												{benefit}
											</span>
										))}
									</div>

									<Link
										href={solution.link}
										className='inline-flex items-center text-sm font-medium text-primary hover:underline'
									>
										{dictionary.services.categories.all}{' '}
										<ChevronRight
											className={cn(
												'w-4 h-4',
												isRTL ? 'ml-1 rotate-180' : 'ml-1'
											)}
										/>
									</Link>
								</div>
							</motion.div>
						))
					) : (
						<div
							className={cn(
								'col-span-full text-center py-12',
								isRTL && 'text-right'
							)}
						>
							<Filter className='w-12 h-12 text-muted-foreground mx-auto mb-4' />
							<h3
								className={cn(
									'text-xl font-semibold mb-2',
									isRTL && 'text-right'
								)}
							>
								{dictionary.services.title}
							</h3>
							<p className={cn('text-muted-foreground', isRTL && 'text-right')}>
								{dictionary.services.description}
							</p>
							<button
								onClick={() => {
									setActiveCategory('all');
									setSearchQuery('');
								}}
								className='mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors'
							>
								{dictionary.services.categories.all}
							</button>
						</div>
					)}
				</div>

				{/* Call to Action */}
				<motion.div
					className={cn(
						'mt-20 text-center p-12 rounded-2xl bg-gradient-to-r from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 border border-primary/20',
						isRTL && 'text-right'
					)}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.8 }}
				>
					<h3
						className={cn(
							'text-3xl font-bold mb-4 text-foreground dark:text-foreground',
							isRTL && 'text-right'
						)}
					>
						{dictionary.services.title}
					</h3>
					<p
						className={cn(
							'text-xl text-muted-foreground mb-8 max-w-2xl mx-auto',
							isRTL && 'text-right'
						)}
					>
						{dictionary.services.description}
					</p>
					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<button className='px-8 py-3 bg-primary text-primary-foreground rounded-full text-lg font-semibold hover:bg-primary/90 transition-colors'>
							{dictionary.contact.actions[0].action}
						</button>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
