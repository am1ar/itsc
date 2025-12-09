import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { getDictionary } from '@/get-dictionary';
import { i18n, Locale } from '@/i18n-config';
import { cn } from '@/lib/utils';

export default async function NotFound({
	params,
}: {
	params: Promise<{ lang?: Locale }>;
}) {
	const { lang } = await params || {};
	const validLang = lang && i18n.locales.includes(lang) ? lang : i18n.defaultLocale;
	const dictionary = await getDictionary(validLang);
	const isRTL = validLang === 'ar';

	return (
		<div className={cn(
			"min-h-screen bg-background flex items-center justify-center px-4",
			isRTL && 'rtl font-arabic'
		)} dir={isRTL ? 'rtl' : 'ltr'}>
			<div className={cn("text-center max-w-md", isRTL && 'text-right')}>
				<h1 className={cn(
					"text-6xl font-bold text-primary mb-4",
					isRTL && 'font-arabic'
				)}>404</h1>
				<h2 className={cn(
					"text-2xl font-semibold mb-4",
					isRTL && 'font-arabic'
				)}>
					{isRTL ? 'الصفحة غير موجودة' : 'Page Not Found'}
				</h2>
				<p className={cn(
					"text-muted-foreground mb-8",
					isRTL && 'font-arabic'
				)}>
					{isRTL
						? 'الصفحة التي تبحث عنها غير موجودة أو تم نقلها.'
						: 'The page you are looking for does not exist or has been moved.'}
				</p>
				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<Link href={`/${validLang}`}>
						<Button className={cn(isRTL && 'font-arabic')}>
							{isRTL ? 'العودة للرئيسية' : 'Go Back Home'}
						</Button>
					</Link>
					<Link href={`/${validLang}/contact`}>
						<Button variant="outline" className={cn(isRTL && 'font-arabic')}>
							{dictionary.contact.title}
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
}
