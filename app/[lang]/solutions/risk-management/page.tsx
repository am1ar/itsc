import { getDictionary } from '@/get-dictionary';
import { i18n, Locale } from '@/i18n-config';
import { Dictionary } from '@/types/dictionary';
import SolutionPageContent from '../components/SolutionPageContent';

export default async function RiskManagementPage({
	params,
}: {
	params: Promise<{ lang: Locale }>;
}) {
	const { lang } = await params;
	const validLang = i18n.locales.includes(lang) ? lang : i18n.defaultLocale;
	const dictionary = (await getDictionary(validLang)) as Dictionary;

	const solutionData = {
		title: lang === 'ar' ? 'إدارة المخاطر' : 'Risk Management',
		description: lang === 'ar' 
			? 'تحديد وتخفيف مخاطر سلسلة التوريد قبل أن تؤثر على عملك'
			: 'Identify and mitigate supply chain risks before they impact your business',
		features: [
			{
				title: lang === 'ar' ? 'تحديد المخاطر' : 'Risk Identification',
				description: lang === 'ar' ? 'تحديد استباقي للمخاطر المحتملة' : 'Proactive identification of potential risks'
			},
			{
				title: lang === 'ar' ? 'تقييم المخاطر' : 'Risk Assessment',
				description: lang === 'ar' ? 'تقييم شامل لتأثير المخاطر' : 'Comprehensive assessment of risk impact'
			},
			{
				title: lang === 'ar' ? 'خطط التخفيف' : 'Mitigation Plans',
				description: lang === 'ar' ? 'استراتيجيات فعالة لتخفيف المخاطر' : 'Effective strategies for risk mitigation'
			}
		]
	};

	return <SolutionPageContent dictionary={dictionary} lang={validLang} solution={solutionData} />;
}