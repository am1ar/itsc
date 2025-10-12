import { getDictionary } from '@/get-dictionary';
import { i18n, Locale } from '@/i18n-config';
import { Dictionary } from '@/types/dictionary';
import SolutionPageContent from '../components/SolutionPageContent';

export default async function WarehouseAutomationPage({
	params,
}: {
	params: Promise<{ lang: Locale }>;
}) {
	const { lang } = await params;
	const validLang = i18n.locales.includes(lang) ? lang : i18n.defaultLocale;
	const dictionary = (await getDictionary(validLang)) as Dictionary;

	const solutionData = {
		title: lang === 'ar' ? 'أتمتة المستودعات' : 'Warehouse Automation',
		description: lang === 'ar' 
			? 'تحسين عمليات المستودعات وزيادة الكفاءة من خلال حلول الأتمتة المتقدمة'
			: 'Optimize warehouse operations and increase efficiency with advanced automation solutions',
		features: [
			{
				title: lang === 'ar' ? 'أتمتة كاملة' : 'Full Automation',
				description: lang === 'ar' ? 'أتمتة شاملة لعمليات المستودع' : 'Complete warehouse operation automation'
			},
			{
				title: lang === 'ar' ? 'تتبع المخزون' : 'Inventory Tracking',
				description: lang === 'ar' ? 'تتبع دقيق للمخزون في الوقت الفعلي' : 'Accurate real-time inventory tracking'
			},
			{
				title: lang === 'ar' ? 'تحسين المساحة' : 'Space Optimization',
				description: lang === 'ar' ? 'استخدام أمثل لمساحة المستودع' : 'Optimal warehouse space utilization'
			}
		]
	};

	return <SolutionPageContent dictionary={dictionary} lang={validLang} solution={solutionData} />;
}