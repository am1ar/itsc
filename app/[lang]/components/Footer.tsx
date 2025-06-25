'use client';

import { motion } from 'framer-motion';
import {
	Mail,
	Phone,
	MapPin,
	Facebook,
	Twitter,
	Linkedin,
	Youtube,
	Instagram,
	ArrowRight,
	ArrowLeft,
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface FooterProps {
	dictionary: any;
	lang: string;
}

export default function Footer({ dictionary, lang }: FooterProps) {
	// Determine text direction based on language
	const isRTL = lang === 'ar';
	const currentYear = new Date().getFullYear();

	// Get the appropriate arrow icon based on direction
	const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

	// Social media icon mapping
	const getSocialIcon = (name: string) => {
		const iconMap: { [key: string]: any } = {
			LinkedIn: Linkedin,
			'لينكد إن': Linkedin,
			Twitter: Twitter,
			تويتر: Twitter,
			YouTube: Youtube,
			يوتيوب: Youtube,
			Facebook: Facebook,
			فيسبوك: Facebook,
			Instagram: Instagram,
			إنستغرام: Instagram,
		};
		return iconMap[name] || Mail;
	};

	return (
		<footer
			className={cn(
				'bg-background dark:bg-background border-t border-border dark:border-border',
				isRTL ? 'rtl font-arabic' : 'ltr'
			)}
			dir={isRTL ? 'rtl' : 'ltr'}
		>
			<div className='mx-auto max-w-7xl px-6 py-16'>
				{/* Main Footer Content */}
				<div className='grid gap-12 lg:grid-cols-4 md:grid-cols-2'>
					{/* Company Info */}
					<motion.div
						className='lg:col-span-1'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						<div className='mb-6'>
							<h3
								className={cn(
									'text-2xl font-bold text-foreground dark:text-foreground mb-2',
									isRTL && 'text-right font-arabic'
								)}
							>
								{dictionary.footer.company.name}
							</h3>
							<p
								className={cn(
									'text-sm text-muted-foreground font-medium',
									isRTL && 'text-right font-arabic'
								)}
							>
								{dictionary.footer.company.fullName}
							</p>
						</div>
						<p
							className={cn(
								'text-sm text-muted-foreground mb-6 leading-relaxed',
								isRTL && 'text-right font-arabic'
							)}
						>
							{dictionary.footer.company.description}
						</p>

						{/* Contact Info */}
						<div className='space-y-3'>
							<div
								className={cn(
									'flex items-center gap-3',
									isRTL && 'flex-row-reverse'
								)}
							>
								<div className='p-2 bg-primary/10 dark:bg-primary/20 rounded-lg'>
									<Mail className='w-4 h-4 text-primary' />
								</div>
								<a
									href={`mailto:${dictionary.footer.contact.email}`}
									className='text-sm text-muted-foreground hover:text-primary transition-colors'
								>
									{dictionary.footer.contact.email}
								</a>
							</div>
							<div
								className={cn(
									'flex items-center gap-3',
									isRTL && 'flex-row-reverse'
								)}
							>
								<div className='p-2 bg-primary/10 dark:bg-primary/20 rounded-lg'>
									<Phone className='w-4 h-4 text-primary' />
								</div>
								<a
									href={`tel:${dictionary.footer.contact.phone}`}
									className='text-sm text-muted-foreground hover:text-primary transition-colors'
								>
									{dictionary.footer.contact.phone}
								</a>
							</div>
						</div>
					</motion.div>

					{/* Company Links */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.1 }}
					>
						<h4
							className={cn(
								'text-lg font-semibold text-foreground dark:text-foreground mb-6',
								isRTL && 'text-right font-arabic'
							)}
						>
							{dictionary.footer.sections.company}
						</h4>
						<ul className='space-y-3'>
							{dictionary.footer.links.company.map(
								(link: any, index: number) => (
									<li key={index}>
										<Link
											href={link.href}
											className={cn(
												'text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group',
												isRTL && 'flex-row-reverse font-arabic'
											)}
										>
											<span>{link.name}</span>
											<ArrowIcon className='w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity' />
										</Link>
									</li>
								)
							)}
						</ul>
					</motion.div>

					{/* Solutions Links */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						<h4
							className={cn(
								'text-lg font-semibold text-foreground dark:text-foreground mb-6',
								isRTL && 'text-right font-arabic'
							)}
						>
							{dictionary.footer.sections.solutions}
						</h4>
						<ul className='space-y-3'>
							{dictionary.footer.links.solutions.map(
								(link: any, index: number) => (
									<li key={index}>
										<Link
											href={link.href}
											className={cn(
												'text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group',
												isRTL && 'flex-row-reverse font-arabic'
											)}
										>
											<span>{link.name}</span>
											<ArrowIcon className='w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity' />
										</Link>
									</li>
								)
							)}
						</ul>
					</motion.div>

					{/* Resources & Support */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.3 }}
					>
						<h4
							className={cn(
								'text-lg font-semibold text-foreground dark:text-foreground mb-6',
								isRTL && 'text-right font-arabic'
							)}
						>
							{dictionary.footer.sections.resources}
						</h4>
						<ul className='space-y-3 mb-8'>
							{dictionary.footer.links.resources
								.slice(0, 4)
								.map((link: any, index: number) => (
									<li key={index}>
										<Link
											href={link.href}
											className={cn(
												'text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group',
												isRTL && 'flex-row-reverse font-arabic'
											)}
										>
											<span>{link.name}</span>
											<ArrowIcon className='w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity' />
										</Link>
									</li>
								))}
						</ul>

						{/* Social Media */}
						<div>
							<h5
								className={cn(
									'text-sm font-semibold text-foreground dark:text-foreground mb-4',
									isRTL && 'text-right font-arabic'
								)}
							>
								{dictionary.footer.sections.followUs}
							</h5>
							<div className={cn('flex gap-3', isRTL && 'flex-row-reverse')}>
								{dictionary.footer.social.map((social: any, index: number) => {
									const IconComponent = getSocialIcon(social.name);
									return (
										<a
											key={index}
											href={social.href}
											target='_blank'
											rel='noopener noreferrer'
											className='p-2 bg-muted hover:bg-primary hover:text-primary-foreground text-muted-foreground rounded-lg transition-all duration-200 hover:scale-110'
											aria-label={social.name}
										>
											<IconComponent className='w-4 h-4' />
										</a>
									);
								})}
							</div>
						</div>
					</motion.div>
				</div>

				{/* Bottom Section */}
				<motion.div
					className={cn(
						'mt-12 pt-8 border-t border-border dark:border-border flex flex-col md:flex-row md:items-center md:justify-between gap-4',
						isRTL && 'md:flex-row-reverse'
					)}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.5 }}
				>
					<p
						className={cn(
							'text-sm text-muted-foreground',
							isRTL && 'text-right font-arabic'
						)}
					>
						{dictionary.footer.copyright.replace(
							'{year}',
							currentYear.toString()
						)}
					</p>

					{/* Language Indicator */}
					<div
						className={cn(
							'flex items-center gap-2 text-sm text-muted-foreground',
							isRTL && 'flex-row-reverse'
						)}
					>
						<div className='flex items-center gap-1'>
							<div className='w-2 h-2 bg-green-500 rounded-full animate-pulse'></div>
							<span className={cn(isRTL && 'font-arabic')}>
								{isRTL
									? 'يخدم عالمياً من السعودية'
									: 'Serving globally from Saudi Arabia'}
							</span>
						</div>
					</div>
				</motion.div>
			</div>
		</footer>
	);
}
