import { getDictionary } from '@/get-dictionary';
import { i18n, Locale } from '@/i18n-config';
import { Dictionary } from '@/types/dictionary';
import SolutionPageContent from '../components/SolutionPageContent';

export default async function RouteOptimizationPage({
	params,
}: {
	params: Promise<{ lang: Locale }>;
}) {
	const { lang } = await params;
	const validLang = i18n.locales.includes(lang) ? lang : i18n.defaultLocale;
	const dictionary = (await getDictionary(validLang)) as Dictionary;

	const solutionData = {
		title: lang === 'ar' ? 'تحسين المسارات' : 'Route Optimization',
		description: lang === 'ar' 
			? 'تقليل أوقات التسليم وتكاليف الوقود من خلال تخطيط المسارات المدعوم بالذكاء الاصطناعي'
			: 'Minimize delivery times and fuel costs with AI-powered route planning',
		features: [
			{
				title: lang === 'ar' ? 'توفير الوقود' : 'Fuel Savings',
				description: lang === 'ar' ? 'توفير يصل إلى 30% في تكاليف الوقود' : 'Up to 30% savings in fuel costs'
			},
			{
				title: lang === 'ar' ? 'تسليم أسرع' : 'Faster Delivery',
				description: lang === 'ar' ? 'تقليل أوقات التسليم بنسبة 40%' : '40% reduction in delivery times'
			},
			{
				title: lang === 'ar' ? 'تخطيط ديناميكي' : 'Dynamic Planning',
				description: lang === 'ar' ? 'تخطيط المسارات في الوقت الفعلي' : 'Real-time route planning'
			}
		]
	};

	return <SolutionPageContent dictionary={dictionary} lang={validLang} solution={solutionData} />;
}