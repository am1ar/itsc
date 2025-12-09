'use client';

import { Dictionary } from '@/types/dictionary';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface HeroProps {
	dictionary: Dictionary;
	lang: string;
}

export default function Hero({ dictionary, lang }: HeroProps) {
	const isRTL = lang === 'ar';
	
	return (
		<section 
			className={cn(
				'relative flex min-h-screen items-center justify-center px-6 pt-32 pb-24 md:px-12 lg:px-24',
				isRTL && 'rtl font-arabic'
			)}
			dir={isRTL ? 'rtl' : 'ltr'}
		>
			<div className='relative z-10 max-w-[1200px] text-center'>
				<motion.div
					className={cn(
						'mb-8 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 dark:border-primary/30 dark:bg-primary/10 px-4 py-2',
						isRTL && 'flex-row-reverse'
					)}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<span className={cn(
						'text-sm font-semibold text-primary',
						isRTL ? 'ml-2' : 'mr-2'
					)}>
						{dictionary.hero.tagline}
					</span>
				</motion.div>
				<motion.h1
					className={cn(
						'mb-6 font-mono text-4xl font-normal leading-tight sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tight dark:text-white',
						isRTL && 'text-right font-arabic'
					)}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
				>
					{dictionary.hero.title.part2 || dictionary.hero.title.part3 ? (
						<>
							<span className='block sm:inline'>{dictionary.hero.title.part1}</span>{' '}
							{dictionary.hero.title.part2 && (
								<span className='block'>{dictionary.hero.title.part2}</span>
							)}
							{dictionary.hero.title.part3 && (
								<span className='text-primary block'>
									{dictionary.hero.title.part3}
								</span>
							)}
						</>
					) : (
						<span className='block'>{dictionary.hero.title.part1}</span>
					)}
				</motion.h1>
				<motion.p
					className={cn(
						'mx-auto mb-8 max-w-2xl text-xl font-normal text-gray-600 dark:text-gray-300 md:text-2xl text-center',
						isRTL && 'font-arabic'
					)}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.4 }}
				>
					{dictionary.hero.description}
				</motion.p>
				<motion.div
					className={cn("flex flex-col sm:flex-row gap-4 justify-center items-center", isRTL && 'flex-row-reverse')}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.6 }}
				>
					<a href={`/${lang}/services`}>
						<motion.button
							className='rounded-full bg-primary px-8 py-4 text-lg font-medium text-primary-foreground transition-colors hover:bg-primary/90'
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							{dictionary.hero.cta}
						</motion.button>
					</a>
					<a href={`/${lang}/solutions/warehouse-automation`}>
						<motion.button
							className={cn(
								'rounded-full border-2 border-primary px-8 py-4 text-lg font-medium text-primary transition-colors hover:bg-primary/10',
								isRTL && 'font-arabic'
							)}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							{lang === 'ar' ? 'اكتشف أتمتة المستودعات' : 'Explore Warehouse Automation'}
						</motion.button>
					</a>
				</motion.div>
			</div>
		</section>
	);
}
