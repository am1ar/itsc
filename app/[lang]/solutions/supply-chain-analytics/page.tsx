import { getDictionary } from '@/get-dictionary';
import { i18n, Locale } from '@/i18n-config';
import { Dictionary } from '@/types/dictionary';
import SolutionPageContent from '../components/SolutionPageContent';

export default async function SupplyChainAnalyticsPage({
	params,
}: {
	params: Promise<{ lang: Locale }>;
}) {
	const { lang } = await params;
	const validLang = i18n.locales.includes(lang) ? lang : i18n.defaultLocale;
	const dictionary = (await getDictionary(validLang)) as Dictionary;

	const solutionData = {
		title: lang === 'ar' ? 'منصة تحليلات سلسلة التوريد المدعومة بالذكاء الاصطناعي' : 'AI-Powered Supply Chain Analytics Platform',
		description: lang === 'ar' 
			? 'منصة تحليلات شاملة تحول بيانات سلسلة التوريد الخام إلى رؤى قابلة للتنفيذ'
			: 'Comprehensive analytics platform that transforms raw supply chain data into actionable insights',
		features: [
			{
				title: lang === 'ar' ? 'رؤية شاملة 360°' : '360° Visibility',
				description: lang === 'ar' ? 'رؤية كاملة لجميع عمليات سلسلة التوريد' : 'Complete visibility across all supply chain operations'
			},
			{
				title: lang === 'ar' ? 'تحليلات متقدمة' : 'Advanced Analytics',
				description: lang === 'ar' ? 'تحليلات مدعومة بالذكاء الاصطناعي والتعلم الآلي' : 'AI and machine learning powered analytics'
			},
			{
				title: lang === 'ar' ? 'تقارير في الوقت الفعلي' : 'Real-time Reporting',
				description: lang === 'ar' ? 'تقارير وتنبيهات فورية للقرارات السريعة' : 'Instant reports and alerts for quick decision making'
			}
		]
	};

	return <SolutionPageContent dictionary={dictionary} lang={validLang} solution={solutionData} />;
}