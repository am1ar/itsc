import { ThemeProvider } from '@/components/theme-provider';
import { i18n, Locale } from '@/i18n-config';
import { getDirection } from '@/lib/get-direction';
import { Space_Grotesk, Space_Mono } from 'next/font/google';
import type React from 'react';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
	subsets: ['latin'],
	variable: '--font-space-grotesk',
});

const spaceMono = Space_Mono({
	weight: ['400', '700'],
	subsets: ['latin'],
	variable: '--font-space-mono',
});

export async function generateStaticParams() {
	return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: Promise<{ lang: Locale }>;
}) {
	const { lang } = await params;
	const validLang = i18n.locales.includes(lang) ? lang : i18n.defaultLocale;
	const dir = getDirection(validLang);

	return (
		<html
			lang={validLang}
			dir={dir}
			className={`${spaceGrotesk.variable} ${spaceMono.variable}`}
			suppressHydrationWarning
		>
			<body className='font-sans' suppressHydrationWarning>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}

export const metadata = {
	generator: 'v0.dev',
};
