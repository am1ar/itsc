import { getDictionary } from '@/get-dictionary';
import { i18n, Locale } from '@/i18n-config';
import { Dictionary } from '@/types/dictionary';
import { redirect } from 'next/navigation';

export default async function PortfolioPage({
	params,
}: {
	params: Promise<{ lang: Locale }>;
}) {
	const { lang } = await params;
	const validLang = i18n.locales.includes(lang) ? lang : i18n.defaultLocale;
	
	// Redirect to case-studies page since they serve the same purpose
	redirect(`/${validLang}/case-studies`);
}