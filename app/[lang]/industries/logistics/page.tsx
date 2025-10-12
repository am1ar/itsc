import { getDictionary } from '@/get-dictionary';
import { i18n, Locale } from '@/i18n-config';
import { Dictionary } from '@/types/dictionary';
import IndustryPageContent from '../components/IndustryPageContent';

export default async function LogisticsPage({
	params,
}: {
	params: Promise<{ lang: Locale }>;
}) {
	const { lang } = await params;
	const validLang = i18n.locales.includes(lang) ? lang : i18n.defaultLocale;
	const dictionary = (await getDictionary(validLang)) as Dictionary;

	const industryData = {
		title: lang === 'ar' ? 'الخدمات اللوجستية والنقل' : 'Logistics & Transportation',
		description: lang === 'ar' 
			? 'حلول متخصصة لتحسين عمليات الخدمات اللوجستية والنقل'
			: 'Specialized solutions for optimizing logistics and transportation operations',
		challenges: [
			{
				title: lang === 'ar' ? 'تحسين المسارات' : 'Route Optimization',
				description: lang === 'ar' ? 'تحدي إيجاد أفضل المسارات للتسليم' : 'Finding optimal delivery routes'
			},
			{
				title: lang === 'ar' ? 'إدارة الأسطول' : 'Fleet Management',
				description: lang === 'ar' ? 'إدارة فعالة لأسطول المركبات' : 'Efficient vehicle fleet management'
			},
			{
				title: lang === 'ar' ? 'تتبع الشحنات' : 'Shipment Tracking',
				description: lang === 'ar' ? 'تتبع دقيق للشحنات في الوقت الفعلي' : 'Accurate real-time shipment tracking'
			}
		],
		solutions: [
			{
				title: lang === 'ar' ? 'تحسين المسارات الذكي' : 'Smart Route Optimization',
				description: lang === 'ar' ? 'تحسين المسارات باستخدام الذكاء الاصطناعي' : 'AI-powered route optimization'
			},
			{
				title: lang === 'ar' ? 'إدارة الأسطول المتقدمة' : 'Advanced Fleet Management',
				description: lang === 'ar' ? 'حلول شاملة لإدارة الأسطول' : 'Comprehensive fleet management solutions'
			}
		]
	};

	return <IndustryPageContent dictionary={dictionary} lang={validLang} industry={industryData} />;
}