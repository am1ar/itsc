import { getDictionary } from '@/get-dictionary';
import { i18n, Locale } from '@/i18n-config';
import { Dictionary } from '@/types/dictionary';
import SolutionPageContent from '../components/SolutionPageContent';

export default async function VisibilityPage({
	params,
}: {
	params: Promise<{ lang: Locale }>;
}) {
	const { lang } = await params;
	const validLang = i18n.locales.includes(lang) ? lang : i18n.defaultLocale;
	const dictionary = (await getDictionary(validLang)) as Dictionary;

	const solutionData = {
		title: lang === 'ar' ? 'رؤية سلسلة التوريد' : 'Supply Chain Visibility',
		description: lang === 'ar' 
			? 'احصل على رؤية فورية وشاملة لعمليات سلسلة التوريد بأكملها'
			: 'Get real-time, comprehensive visibility into your entire supply chain operations',
		features: [
			{
				title: lang === 'ar' ? 'رؤية في الوقت الفعلي' : 'Real-time Visibility',
				description: lang === 'ar' ? 'تتبع العمليات في الوقت الفعلي' : 'Track operations in real-time'
			},
			{
				title: lang === 'ar' ? 'تحليلات شاملة' : 'Comprehensive Analytics',
				description: lang === 'ar' ? 'تحليلات متعمقة لجميع العمليات' : 'Deep analytics across all operations'
			},
			{
				title: lang === 'ar' ? 'تنبيهات ذكية' : 'Smart Alerts',
				description: lang === 'ar' ? 'تنبيهات استباقية للمشاكل المحتملة' : 'Proactive alerts for potential issues'
			}
		]
	};

	return <SolutionPageContent dictionary={dictionary} lang={validLang} solution={solutionData} />;
}