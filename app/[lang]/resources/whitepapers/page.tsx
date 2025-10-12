import { getDictionary } from '@/get-dictionary';
import { i18n, Locale } from '@/i18n-config';
import { Dictionary } from '@/types/dictionary';
import PlaceholderPage from '../../components/PlaceholderPage';

export default async function WhitepapersPage({
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
			title={lang === 'ar' ? 'المستندات التقنية' : 'White Papers'}
			description={lang === 'ar' 
				? 'مجموعة شاملة من المستندات التقنية والأبحاث في مجال سلسلة التوريد'
				: 'Comprehensive collection of technical papers and research in supply chain management'
			}
		/>
	);
}