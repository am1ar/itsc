import { getDictionary } from '@/get-dictionary';
import { i18n, Locale } from '@/i18n-config';
import { Dictionary } from '@/types/dictionary';
import IndustryPageContent from '../components/IndustryPageContent';

export default async function RetailPage({
	params,
}: {
	params: Promise<{ lang: Locale }>;
}) {
	const { lang } = await params;
	const validLang = i18n.locales.includes(lang) ? lang : i18n.defaultLocale;
	const dictionary = (await getDictionary(validLang)) as Dictionary;

	const industryData = {
		title: lang === 'ar' ? 'التجزئة والتجارة الإلكترونية' : 'Retail & E-commerce',
		description: lang === 'ar' 
			? 'حلول متخصصة لتحسين سلاسل التوريد في قطاع التجزئة والتجارة الإلكترونية'
			: 'Specialized solutions for optimizing supply chains in retail and e-commerce sectors',
		challenges: [
			{
				title: lang === 'ar' ? 'إدارة المخزون' : 'Inventory Management',
				description: lang === 'ar' ? 'تحدي إدارة المخزون المتنوع' : 'Managing diverse inventory challenges'
			},
			{
				title: lang === 'ar' ? 'التنبؤ بالطلب' : 'Demand Forecasting',
				description: lang === 'ar' ? 'توقع الطلب الموسمي' : 'Seasonal demand prediction'
			},
			{
				title: lang === 'ar' ? 'التسليم السريع' : 'Fast Delivery',
				description: lang === 'ar' ? 'تلبية توقعات التسليم السريع' : 'Meeting fast delivery expectations'
			}
		],
		solutions: [
			{
				title: lang === 'ar' ? 'تحسين المخزون' : 'Inventory Optimization',
				description: lang === 'ar' ? 'تحسين مستويات المخزون وتقليل التكاليف' : 'Optimize inventory levels and reduce costs'
			},
			{
				title: lang === 'ar' ? 'التنبؤ الذكي' : 'Smart Forecasting',
				description: lang === 'ar' ? 'تنبؤ دقيق بالطلب باستخدام الذكاء الاصطناعي' : 'Accurate demand forecasting using AI'
			}
		]
	};

	return <IndustryPageContent dictionary={dictionary} lang={validLang} industry={industryData} />;
}