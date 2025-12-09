import { getDictionary } from '@/get-dictionary';
import { i18n, Locale } from '@/i18n-config';
import { Dictionary } from '@/types/dictionary';
import IndustryPageContent from '../components/IndustryPageContent';

export default async function AutomotivePage({
	params,
}: {
	params: Promise<{ lang: Locale }>;
}) {
	const { lang } = await params;
	const validLang = i18n.locales.includes(lang) ? lang : i18n.defaultLocale;
	const dictionary = (await getDictionary(validLang)) as Dictionary;

	const industryData = {
		title: lang === 'ar' ? 'السيارات' : 'Automotive',
		description: lang === 'ar' 
			? 'حلول متخصصة لتحسين سلاسل التوريد في صناعة السيارات'
			: 'Specialized solutions for optimizing supply chains in the automotive industry',
		challenges: [
			{
				title: lang === 'ar' ? 'إدارة قطع الغيار' : 'Parts Management',
				description: lang === 'ar' ? 'إدارة معقدة لقطع الغيار والمكونات' : 'Complex management of parts and components'
			},
			{
				title: lang === 'ar' ? 'التخطيط للإنتاج' : 'Production Planning',
				description: lang === 'ar' ? 'تنسيق الإنتاج والمواد الخام' : 'Coordinating production and raw materials'
			},
			{
				title: lang === 'ar' ? 'التسليم في الوقت المحدد' : 'Just-In-Time Delivery',
				description: lang === 'ar' ? 'ضمان التسليم الدقيق في الوقت المحدد' : 'Ensuring precise just-in-time delivery'
			}
		],
		solutions: [
			{
				title: lang === 'ar' ? 'التحسين الذكي' : 'Smart Optimization',
				description: lang === 'ar' ? 'تحسين عمليات سلسلة التوريد باستخدام الذكاء الاصطناعي' : 'Optimize supply chain operations using AI'
			},
			{
				title: lang === 'ar' ? 'التكامل الكامل' : 'Full Integration',
				description: lang === 'ar' ? 'تكامل شامل مع أنظمة الإنتاج' : 'Comprehensive integration with production systems'
			}
		]
	};

	return <IndustryPageContent dictionary={dictionary} lang={validLang} industry={industryData} />;
}

