'use client';

import { Dictionary } from '@/types/dictionary';
import { motion } from 'framer-motion';

interface HeroProps {
	dictionary: Dictionary;
}

export default function Hero({ dictionary }: HeroProps) {
	return (
		<section className='relative flex min-h-screen items-center justify-center px-6 pt-32 pb-24 md:px-12 lg:px-24'>
			<div className='relative z-10 max-w-[1200px] text-center'>
				<motion.div
					className='mb-8 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 dark:border-primary/30 dark:bg-primary/10 px-4 py-2'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<span className='mr-2 text-sm font-semibold text-primary'>
						{dictionary.hero.tagline}
					</span>
				</motion.div>
				<motion.h1
					className='mb-6 font-mono text-4xl font-normal leading-tight sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tight dark:text-white'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
				>
					<span className='block sm:inline'>{dictionary.hero.title.part1}</span>{' '}
					<span className='block'>{dictionary.hero.title.part2}</span>
					<span className='text-primary block'>
						{dictionary.hero.title.part3}
					</span>
				</motion.h1>
				<motion.p
					className='mx-auto mb-8 max-w-2xl text-xl font-normal text-gray-600 dark:text-gray-300 md:text-2xl'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.4 }}
				>
					{dictionary.hero.description}
				</motion.p>
				<motion.button
					className='rounded-full bg-primary px-8 py-4 text-lg font-medium text-primary-foreground transition-colors hover:bg-primary/90'
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.6 }}
				>
					{dictionary.hero.cta}
				</motion.button>
			</div>
		</section>
	);
}
