'use client';
import { ModeToggle } from '@/components/ui/mode-toggle';
import { Dictionary } from '@/types/dictionary';
import { motion } from 'framer-motion';
import { AreaChart, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import LocaleSwitcher from './LocaleSwitcher';
import { cn } from '@/lib/utils';

interface HeaderProps {
	dictionary: Dictionary;
	lang: string;
}

export default function Header({ dictionary, lang }: HeaderProps) {
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [visible, setVisible] = useState(true);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState('hero');
	const pathname = usePathname();

	// Get current language from props (consistent with other components)
	const currentLang = lang;

	const navItems = [
		{ href: '#hero', label: dictionary.header.home },
		{ href: '#about', label: dictionary.header.about },
		{ href: '#solutions', label: dictionary.header.solutions },
		{ href: '#how-we-work', label: dictionary.header.howWeWork },
		{ href: '#success-story', label: dictionary.header.successStory },
		{ href: '#faq', label: dictionary.header.faq },
		{ href: '#contact', label: dictionary.header.contact },
	];

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId.substring(1));
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
		setMobileMenuOpen(false);
	};

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollPos = window.scrollY;
			setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
			setPrevScrollPos(currentScrollPos);

			// Update active section based on scroll position
			const sections = navItems.map((item) => item.href);
			const currentSection = sections.find((sectionId) => {
				const sectionElement = document.getElementById(sectionId.substring(1));
				if (sectionElement) {
					const rect = sectionElement.getBoundingClientRect();
					return rect.top <= 100 && rect.bottom >= 100;
				}
				return false;
			});

			if (currentSection) {
				const activeItem = navItems.find(
					(item) => item.href === currentSection
				);
				if (activeItem) {
					setActiveSection(activeItem.href.substring(1));
				}
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [prevScrollPos, navItems]);

	useEffect(() => {
		// Ensure smooth scrolling is enabled
		document.documentElement.style.scrollBehavior = 'smooth';

		return () => {
			// Clean up on unmount
			document.documentElement.style.scrollBehavior = 'auto';
		};
	}, []);

	return (
		<header
			className={`fixed left-0 right-0 top-0 z-40 mt-9 mx-auto max-w-[1728px] px-4 py-2 transition-transform duration-300 ${
				visible ? 'translate-y-0' : '-translate-y-[200px]'
			}`}
		>
			<nav
				className={`flex items-center justify-between rounded-full bg-background/95 dark:bg-background/95 backdrop-blur-md shadow-lg border border-border/40 dark:border-border/40 px-6 py-4 ${
					currentLang === 'ar' ? 'flex-row-reverse' : ''
				}`}
			>
				{/* Logo and Brand */}
				<Link href='/' className='flex items-center cursor-pointer'>
					<div className='relative'>
						<div className='flex items-center'>
							<div className='relative'>
								<div className='absolute -inset-1 bg-gradient-to-r from-green-600 to-primary rounded-full blur-sm opacity-70'></div>
								<div className='relative bg-background dark:bg-background rounded-full p-1.5'>
									<AreaChart className='h-6 w-6 text-primary' />
								</div>
							</div>
							<div className='ml-2'>
								<span className='text-2xl font-bold text-foreground dark:text-foreground'>
									ITSC
								</span>
							</div>
						</div>
					</div>
				</Link>

				{/* Desktop Navigation */}
				<div className='hidden items-center space-x-1 lg:flex'>
					{navItems.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className={`flex items-center space-x-1 text-sm font-medium px-3 py-2 rounded-lg transition-all duration-200 ${
								activeSection === item.href.substring(1)
									? 'text-primary bg-primary/10 border border-primary/20'
									: 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
							}`}
						>
							<span>{item.label}</span>
						</Link>
					))}
				</div>

				{/* Right Side Actions */}
				<div className='flex items-center space-x-3'>
					<ModeToggle />

					<div className='hidden md:block'>
						<motion.button
							onClick={() => scrollToSection('contact')}
							className={cn(
								'rounded-full bg-primary hover:bg-primary/90 text-primary-foreground transition-colors px-5 py-2 text-sm font-medium',
								currentLang === 'ar' && 'font-arabic'
							)}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							{dictionary.header.getStarted}
						</motion.button>
					</div>

					{/* Language Switcher */}
					<div className='hidden md:block'>
						<LocaleSwitcher />
					</div>

					{/* Mobile Menu Toggle */}
					<button
						className='block lg:hidden'
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
					>
						{mobileMenuOpen ? (
							<X className='h-6 w-6 text-foreground' />
						) : (
							<Menu className='h-6 w-6 text-foreground' />
						)}
					</button>
				</div>
			</nav>

			{/* Mobile Menu */}
			{mobileMenuOpen && (
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -20 }}
					transition={{ duration: 0.2 }}
					className='lg:hidden absolute top-full left-4 right-4 mt-2 p-4 rounded-xl bg-background dark:bg-background border border-border shadow-lg'
				>
					<div className='flex flex-col space-y-2'>
						{navItems.map((item) => (
							<Link
								key={item.href}
								href={item.href}
								className={`flex items-center px-3 py-3 rounded-lg text-left w-full transition-all duration-200 ${
									activeSection === item.href.substring(1)
										? 'text-primary bg-primary/10 border border-primary/20'
										: 'text-muted-foreground hover:text-foreground hover:bg-muted'
								}`}
							>
								<span className='font-medium'>{item.label}</span>
							</Link>
						))}

						<div className='pt-4 border-t border-border/40 mt-4'>
							<motion.button
								onClick={() => scrollToSection('contact')}
								className={cn(
									'w-full rounded-full bg-primary hover:bg-primary/90 text-primary-foreground transition-colors px-5 py-3 text-sm font-medium',
									currentLang === 'ar' && 'font-arabic'
								)}
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
							>
								{dictionary.header.getStarted}
							</motion.button>
						</div>

						<div className='flex items-center justify-between pt-4 border-t border-border/40'>
							<div className='flex items-center'>
								<span className='text-xs text-muted-foreground'>
									Saudi Arabia • Global
								</span>
							</div>

							<div className='block md:hidden'>
								<LocaleSwitcher />
							</div>
						</div>
					</div>
				</motion.div>
			)}
		</header>
	);
}
