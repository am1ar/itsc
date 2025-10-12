import { getDictionary } from '@/get-dictionary';
import { i18n, Locale } from '@/i18n-config';
import { Dictionary } from '@/types/dictionary';
import PlaceholderPage from '../../components/PlaceholderPage';

export default async function ROICalculatorPage({
	params,
}: {
	params: Promise<{ lang: Locale }>;
}) {
	const { lang } = await params;
	const validLang = i18n.locales.includes(lang) ? lang : i18n.defaultLocale;
	const dictionary = (await getDictionary(validLang)) as Dictionary;

	return (
		<PlaceholderPage 
			dictionary={dictionary} 
			lang={validLang}
			title={lang === 'ar' ? 'حاسبة العائد على الاستثمار' : 'ROI Calculator'}
			description={lang === 'ar' 
				? 'احسب العائد المتوقع على الاستثمار من حلول سلسلة التوريد الخاصة بنا'
				: 'Calculate the expected return on investment from our supply chain solutions'
			}
		/>
	);
}