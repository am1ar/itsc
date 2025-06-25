'use client';

import { i18n, type Locale } from '@/i18n-config';
import { Globe } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

// Map of locale codes to language names
const localeNames: Record<Locale, string> = {
	en: 'English',
	ar: 'العربية',
};

// Map of locale codes to flags (using emoji for simplicity)
const localeFlags: Record<Locale, string> = {
	en: '🇬🇧',
	ar: '🇸🇦',
};

// Map of locale codes to text direction
const localeDirections: Record<Locale, 'ltr' | 'rtl'> = {
	en: 'ltr',
	ar: 'rtl',
};

export default function LocaleSwitcher() {
	const pathname = usePathname();
	const router = useRouter();
	const [isOpen, setIsOpen] = useState(false);
	const [isChangingLanguage, setIsChangingLanguage] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	// Generate redirected path for a given locale
	const redirectedPathname = (locale: Locale) => {
		if (!pathname) return '/';
		const segments = pathname.split('/');
		segments[1] = locale;
		return segments.join('/');
	};

	// Extract current locale from pathname
	const currentLocale =
		(pathname?.split('/')[1] as Locale) || i18n.defaultLocale;

	// Update document direction and language when locale changes
	useEffect(() => {
		const direction = localeDirections[currentLocale];
		document.documentElement.dir = direction;
		document.documentElement.lang = currentLocale;

		// Add language transition class for smooth animations
		document.body.classList.add('language-transition');
		const timer = setTimeout(() => {
			document.body.classList.remove('language-transition');
		}, 300);

		return () => clearTimeout(timer);
	}, [currentLocale]);

	// Handle language change with loading state
	const handleLanguageChange = (locale: Locale) => {
		if (locale === currentLocale) {
			setIsOpen(false);
			return;
		}

		setIsChangingLanguage(true);
		const newPath = redirectedPathname(locale);

		// Update document direction and language before navigation
		document.documentElement.dir = localeDirections[locale];
		document.documentElement.lang = locale;

		router.push(newPath);
	};

	// Close dropdown when clicking outside
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	// Reset loading state when navigation is complete
	useEffect(() => {
		const handleRouteChangeComplete = () => {
			setIsChangingLanguage(false);
			setIsOpen(false);
		};

		window.addEventListener('popstate', handleRouteChangeComplete);
		return () =>
			window.removeEventListener('popstate', handleRouteChangeComplete);
	}, []);

	return (
		<div className='relative' ref={dropdownRef}>
			{isChangingLanguage && (
				<div className='fixed inset-0 bg-black/70 flex items-center justify-center z-50'>
					<div className='w-16 h-16 rounded-full border-4 border-blue-600 border-t-transparent animate-spin'></div>
				</div>
			)}

			<button
				className='flex items-center gap-2 rounded-full bg-black/10 dark:bg-white/10 px-3 py-2 text-sm font-medium text-black dark:text-white hover:bg-white/20 transition-colors'
				onClick={() => setIsOpen(!isOpen)}
			>
				<Globe className='h-4 w-4' />
				<span>{localeNames[currentLocale]}</span>
			</button>

			{isOpen && (
				<div className='absolute right-0 mt-2 w-40 origin-top-right rounded-md bg-background shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10'>
					<div
						className='py-1'
						role='menu'
						aria-orientation='vertical'
						aria-labelledby='language-menu'
					>
						{i18n.locales.map((locale) => {
							const isActive = locale === currentLocale;
							return (
								<button
									key={locale}
									className={`flex w-full items-center px-4 py-2 text-sm ${
										isActive
											? 'bg-blue-500/10 text-blue-500'
											: 'text-foreground hover:bg-muted hover:text-foreground'
									}`}
									role='menuitem'
									onClick={() => handleLanguageChange(locale)}
								>
									<span className='mr-2'>{localeFlags[locale]}</span>
									<span>{localeNames[locale]}</span>
								</button>
							);
						})}
					</div>
				</div>
			)}
		</div>
	);
}
