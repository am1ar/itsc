'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Globe } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface Language {
	code: string;
	label: string;
	flag: string;
	dir: 'ltr' | 'rtl';
}

const languages: Language[] = [
	{ code: 'en', label: 'English', flag: '🇺🇸', dir: 'ltr' },
	{ code: 'ar', label: 'العربية', flag: '🇸🇦', dir: 'rtl' },
];

interface LanguageSwitcherProps {
	className?: string;
	variant?: 'default' | 'mobile';
}

export default function LanguageSwitcher({
	className = '',
	variant = 'default',
}: LanguageSwitcherProps) {
	const [isOpen, setIsOpen] = useState(false);
	const router = useRouter();
	const pathname = usePathname();

	// Get current language from pathname
	const currentLang = pathname.split('/')[1] || 'en';
	const [selectedLanguage, setSelectedLanguage] = useState(currentLang);

	// Update selected language when pathname changes
	useEffect(() => {
		const lang = pathname.split('/')[1] || 'en';
		setSelectedLanguage(lang);
	}, [pathname]);

	const handleLanguageChange = (langCode: string) => {
		setSelectedLanguage(langCode);
		const selectedLang = languages.find((lang) => lang.code === langCode);
		if (selectedLang) {
			document.documentElement.dir = selectedLang.dir;
			document.documentElement.lang = langCode;
		}
		setIsOpen(false);

		// Get the current path without the language prefix
		const pathWithoutLang = pathname.split('/').slice(2).join('/');
		// Construct new path with selected language
		const newPath = `/${langCode}/${pathWithoutLang}`;
		// Navigate to the new path
		router.push(newPath);
	};

	const selectedLang = languages.find((lang) => lang.code === selectedLanguage);

	return (
		<div className={`relative ${className}`}>
			<button
				onClick={() => setIsOpen(!isOpen)}
				className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
					variant === 'mobile'
						? 'w-full justify-between hover:bg-muted/50'
						: 'hover:bg-muted/50'
				}`}
			>
				<div className='flex items-center gap-2'>
					<Globe className='w-4 h-4 text-muted-foreground' />
					<span className='text-sm text-muted-foreground'>
						{selectedLang?.flag} {selectedLang?.code.toUpperCase()}
					</span>
				</div>
				<ChevronDown
					className={`w-4 h-4 text-muted-foreground transition-transform ${
						isOpen ? 'rotate-180' : ''
					}`}
				/>
			</button>

			{isOpen && (
				<motion.div
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -10 }}
					className={`absolute ${
						variant === 'mobile' ? 'bottom-full mb-2' : 'top-full mt-2'
					} right-0 w-40 bg-background border border-border rounded-lg shadow-lg z-50`}
				>
					{languages.map((language) => (
						<button
							key={language.code}
							onClick={() => handleLanguageChange(language.code)}
							className={`w-full flex items-center px-3 py-2 text-sm hover:bg-muted transition-colors first:rounded-t-lg last:rounded-b-lg ${
								selectedLanguage === language.code
									? 'bg-primary/10 text-primary'
									: 'text-foreground'
							}`}
						>
							<span className='mr-2'>{language.flag}</span>
							<span
								className={`${language.code === 'ar' ? 'font-arabic' : ''}`}
							>
								{language.label}
							</span>
							{selectedLanguage === language.code && (
								<div className='ml-auto w-2 h-2 bg-primary rounded-full'></div>
							)}
						</button>
					))}
				</motion.div>
			)}
		</div>
	);
}
