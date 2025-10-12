import { getDictionary } from '@/get-dictionary';
import { i18n, Locale } from '@/i18n-config';
import { Dictionary } from '@/types/dictionary';
import SolutionPageContent from '../components/SolutionPageContent';

export default async function FleetManagementPage({
	params,
}: {
	params: Promise<{ lang: Locale }>;
}) {
	const { lang } = await params;
	const validLang = i18n.locales.includes(lang) ? lang : i18n.defaultLocale;
	const dictionary = (await getDictionary(validLang)) as Dictionary;

	const solutionData = {
		title: lang === 'ar' ? 'إدارة الأسطول' : 'Fleet Management',
		description: lang === 'ar' 
			? 'حلول شاملة لإدارة الأسطول وتحسين الكفاءة التشغيلية'
			: 'Comprehensive fleet management solutions to optimize operational efficiency',
		features: [
			{
				title: lang === 'ar' ? 'تتبع المركبات' : 'Vehicle Tracking',
				description: lang === 'ar' ? 'تتبع دقيق لجميع المركبات في الوقت الفعلي' : 'Accurate real-time tracking of all vehicles'
			},
			{
				title: lang === 'ar' ? 'إدارة الصيانة' : 'Maintenance Management',
				description: lang === 'ar' ? 'جدولة وإدارة الصيانة الوقائية' : 'Preventive maintenance scheduling and management'
			},
			{
				title: lang === 'ar' ? 'تحليل الأداء' : 'Performance Analytics',
				description: lang === 'ar' ? 'تحليل شامل لأداء الأسطول' : 'Comprehensive fleet performance analysis'
			}
		]
	};

	return <SolutionPageContent dictionary={dictionary} lang={validLang} solution={solutionData} />;
}