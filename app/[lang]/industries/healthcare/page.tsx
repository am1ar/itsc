import { getDictionary } from '@/get-dictionary';
import { i18n, Locale } from '@/i18n-config';
import { Dictionary } from '@/types/dictionary';
import IndustryPageContent from '../components/IndustryPageContent';

export default async function HealthcarePage({
	params,
}: {
	params: Promise<{ lang: Locale }>;
}) {
	const { lang } = await params;
	const validLang = i18n.locales.includes(lang) ? lang : i18n.defaultLocale;
	const dictionary = (await getDictionary(validLang)) as Dictionary;

	const industryData = {
		title: lang === 'ar' ? 'سلسلة توريد الرعاية الصحية' : 'Healthcare Supply Chain',
		description: lang === 'ar' 
			? 'حلول متخصصة لتحسين سلاسل التوريد في قطاع الرعاية الصحية'
			: 'Specialized solutions for optimizing supply chains in the healthcare sector',
		challenges: [
			{
				title: lang === 'ar' ? 'إدارة الأدوية' : 'Pharmaceutical Management',
				description: lang === 'ar' ? 'إدارة المخزون الدوائي والامتثال' : 'Managing pharmaceutical inventory and compliance'
			},
			{
				title: lang === 'ar' ? 'التبريد والسلامة' : 'Cold Chain & Safety',
				description: lang === 'ar' ? 'ضمان سلامة المنتجات الطبية' : 'Ensuring medical product safety'
			},
			{
				title: lang === 'ar' ? 'التتبع والامتثال' : 'Tracking & Compliance',
				description: lang === 'ar' ? 'تتبع المنتجات الطبية والامتثال التنظيمي' : 'Tracking medical products and regulatory compliance'
			}
		],
		solutions: [
			{
				title: lang === 'ar' ? 'إدارة ذكية' : 'Smart Management',
				description: lang === 'ar' ? 'إدارة ذكية للمخزون الطبي باستخدام الذكاء الاصطناعي' : 'Smart medical inventory management using AI'
			},
			{
				title: lang === 'ar' ? 'الامتثال التلقائي' : 'Automated Compliance',
				description: lang === 'ar' ? 'ضمان الامتثال التلقائي للمعايير الصحية' : 'Ensuring automated compliance with health standards'
			}
		]
	};

	return <IndustryPageContent dictionary={dictionary} lang={validLang} industry={industryData} />;
}

