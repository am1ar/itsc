'use client';

import { motion } from 'framer-motion';
import {
	Mail,
	Phone,
	MapPin,
	Linkedin,
	AreaChart,
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

	return (
		<footer
			className={cn(
				'bg-background dark:bg-background border-t border-border dark:border-border',
				isRTL ? 'rtl font-arabic' : 'ltr'
			)}
			dir={isRTL ? 'rtl' : 'ltr'}
		>
			{/* Main Footer Content */}
			<div className='mx-auto max-w-7xl px-6 py-16'>
				<div className='grid gap-12 lg:grid-cols-4 md:grid-cols-2'>
					{/* Column 1: Company & Brand */}
					<motion.div
						className='lg:col-span-1'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						{/* Logo */}
						<div className={cn('mb-6', isRTL && 'text-right')}>
							<div className={cn(
								'flex items-center gap-2 mb-4',
								isRTL && 'flex-row-reverse justify-end'
							)}>
								<div className='relative'>
									<div className='absolute -inset-1 bg-gradient-to-r from-green-600 to-primary rounded-full blur-sm opacity-70'></div>
									<div className='relative bg-background dark:bg-background rounded-full p-1.5'>
										<AreaChart className='h-6 w-6 text-primary' />
									</div>
								</div>
								<span className='text-2xl font-bold text-foreground dark:text-foreground'>
									{dictionary.footer.company.name}
								</span>
							</div>
							<p
								className={cn(
									'text-sm text-muted-foreground font-medium mb-4',
									isRTL && 'text-right font-arabic'
								)}
							>
								{dictionary.footer.company.fullName}
							</p>
						</div>

						{/* Mission/Tagline */}
						<p
							className={cn(
								'text-sm text-muted-foreground mb-6 leading-relaxed',
								isRTL && 'text-right font-arabic'
							)}
						>
							{dictionary.footer.company.mission}
						</p>

						{/* Social Media - LinkedIn Only */}
						<div>
							{dictionary.footer.social.map((social: any, index: number) => (
								<a
									key={index}
									href={social.href}
									target='_blank'
									rel='noopener noreferrer'
									className={cn(
										'inline-flex items-center gap-2 p-2 bg-muted hover:bg-primary hover:text-primary-foreground text-muted-foreground rounded-lg transition-all duration-200 hover:scale-110',
										isRTL && 'flex-row-reverse'
									)}
									aria-label={social.name}
								>
									<Linkedin className='w-5 h-5' />
									<span className={cn('text-sm font-medium', isRTL && 'font-arabic')}>
										{social.name}
									</span>
								</a>
							))}
						</div>
					</motion.div>

					{/* Column 2: Key Services */}
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
							{dictionary.footer.sections.keyServices}
						</h4>
						<ul className='space-y-3'>
							{dictionary.footer.links.keyServices.map(
								(link: any, index: number) => (
									<li key={index}>
										<Link
											href={link.href}
											className={cn(
												'text-sm text-muted-foreground hover:text-primary transition-colors',
												isRTL && 'font-arabic text-right block'
											)}
										>
											{link.name}
										</Link>
									</li>
								)
							)}
						</ul>
					</motion.div>

					{/* Column 3: Quick Links */}
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
							{dictionary.footer.sections.quickLinks}
						</h4>
						<ul className='space-y-3'>
							{dictionary.footer.links.quickLinks.map(
								(link: any, index: number) => (
									<li key={index}>
										<Link
											href={link.href}
											className={cn(
												'text-sm text-muted-foreground hover:text-primary transition-colors',
												isRTL && 'font-arabic text-right block'
											)}
										>
											{link.name}
										</Link>
									</li>
								)
							)}
						</ul>
					</motion.div>

					{/* Column 4: Contact & Legal Address */}
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
							{dictionary.footer.sections.contact}
						</h4>
						<div className='space-y-4'>
							{/* US Headquarters */}
							<div>
								<p
									className={cn(
										'text-sm font-semibold text-foreground mb-2',
										isRTL && 'text-right font-arabic'
									)}
								>
									{isRTL ? 'المقر الرئيسي (الولايات المتحدة):' : 'US Headquarters:'}
								</p>
								<div
									className={cn(
										'text-sm text-muted-foreground space-y-1',
										isRTL && 'text-right font-arabic'
									)}
								>
									<p>{dictionary.footer.company.legalName}</p>
									<p>{dictionary.footer.company.usAddressLine1}</p>
									<p>{dictionary.footer.company.usAddressLine2}</p>
								</div>
							</div>

							{/* KSA Representative */}
							<div>
								<p
									className={cn(
										'text-sm font-semibold text-foreground mb-2',
										isRTL && 'text-right font-arabic'
									)}
								>
									{isRTL ? 'الممثل في المملكة العربية السعودية:' : 'KSA Representative:'}
								</p>
								<div
									className={cn(
										'text-sm text-muted-foreground space-y-1',
										isRTL && 'text-right font-arabic'
									)}
								>
									<p>{dictionary.footer.company.ksaRepresentative}</p>
									<p>
										{isRTL ? 'الرقم الموحد:' : 'Unified Number:'}{' '}
										{dictionary.footer.company.ksaUnifiedNumber}
									</p>
								</div>
							</div>

							{/* Contact Info */}
							<div>
								<p
									className={cn(
										'text-sm font-semibold text-foreground mb-2',
										isRTL && 'text-right font-arabic'
									)}
								>
									{isRTL ? 'الاتصال:' : 'Contact:'}
								</p>
								<div className='space-y-2'>
									<a
										href={`mailto:${dictionary.footer.contact.email}`}
										className={cn(
											'flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors',
											isRTL && 'flex-row-reverse font-arabic justify-end'
										)}
									>
										<Mail className='w-4 h-4' />
										{dictionary.footer.contact.email}
									</a>
									<a
										href={`tel:${dictionary.footer.contact.phone}`}
										className={cn(
											'flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors',
											isRTL && 'flex-row-reverse font-arabic justify-end'
										)}
									>
										<Phone className='w-4 h-4' />
										{dictionary.footer.contact.phone}
									</a>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>

			{/* Bottom Bar (Sub-Footer) */}
			<div
				className={cn(
					'border-t border-border dark:border-border bg-muted/30 dark:bg-muted/10',
					isRTL && 'rtl font-arabic'
				)}
			>
				<div className='mx-auto max-w-7xl px-6 py-6'>
					<div
						className={cn(
							'flex flex-col md:flex-row md:items-center md:justify-between gap-4',
							isRTL && 'md:flex-row-reverse'
						)}
					>
						{/* Copyright */}
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

						{/* Legal Links */}
						<div
							className={cn(
								'flex items-center gap-4 text-sm',
								isRTL && 'flex-row-reverse font-arabic'
							)}
						>
							<Link
								href='/legal/privacy'
								className='text-muted-foreground hover:text-primary transition-colors'
							>
								{dictionary.footer.legalLinks.privacy}
							</Link>
							<span className='text-muted-foreground'>|</span>
							<Link
								href='/legal/terms'
								className='text-muted-foreground hover:text-primary transition-colors'
							>
								{dictionary.footer.legalLinks.terms}
							</Link>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
