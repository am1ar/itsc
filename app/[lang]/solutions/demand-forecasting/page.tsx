import { getDictionary } from '@/get-dictionary';
import { i18n, Locale } from '@/i18n-config';
import { Dictionary } from '@/types/dictionary';
import SolutionPageContent from '../components/SolutionPageContent';

export default async function DemandForecastingPage({
	params,
}: {
	params: Promise<{ lang: Locale }>;
}) {
	const { lang } = await params;
	const validLang = i18n.locales.includes(lang) ? lang : i18n.defaultLocale;
	const dictionary = (await getDictionary(validLang)) as Dictionary;

	const solutionData = {
		title: lang === 'ar' ? 'التنبؤ بالطلب' : 'Demand Forecasting',
		description: lang === 'ar' 
			? 'توقع متطلبات السوق بدقة 95% باستخدام خوارزميات التعلم الآلي المتقدمة'
			: 'Predict market demands with 95% accuracy using advanced machine learning algorithms',
		features: [
			{
				title: lang === 'ar' ? 'دقة عالية' : 'High Accuracy',
				description: lang === 'ar' ? 'دقة تنبؤ تصل إلى 95%' : 'Up to 95% prediction accuracy'
			},
			{
				title: lang === 'ar' ? 'تحليل الوقت الفعلي' : 'Real-time Analysis',
				description: lang === 'ar' ? 'تحليل البيانات في الوقت الفعلي' : 'Real-time data analysis'
			},
			{
				title: lang === 'ar' ? 'تكامل سلس' : 'Seamless Integration',
				description: lang === 'ar' ? 'يتكامل مع أنظمتك الحالية' : 'Integrates with your existing systems'
			}
		]
	};

	return <SolutionPageContent dictionary={dictionary} lang={validLang} solution={solutionData} />;
}