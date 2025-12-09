import { getDictionary } from '@/get-dictionary';
import { i18n, Locale } from '@/i18n-config';
import { Dictionary } from '@/types/dictionary';
import IndustryPageContent from '../components/IndustryPageContent';

export default async function ImportExportPage({
	params,
}: {
	params: Promise<{ lang: Locale }>;
}) {
	const { lang } = await params;
	const validLang = i18n.locales.includes(lang) ? lang : i18n.defaultLocale;
	const dictionary = (await getDictionary(validLang)) as Dictionary;

	const industryData = {
		title: lang === 'ar' ? 'الاستيراد والتصدير' : 'Import/Export',
		description: lang === 'ar' 
			? 'حلول متخصصة لتحسين عمليات الاستيراد والتصدير وسلاسل التوريد الدولية'
			: 'Specialized solutions for optimizing import/export operations and international supply chains',
		challenges: [
			{
				title: lang === 'ar' ? 'إدارة الجمارك' : 'Customs Management',
				description: lang === 'ar' ? 'التعامل مع إجراءات الجمارك والامتثال' : 'Navigating customs procedures and compliance'
			},
			{
				title: lang === 'ar' ? 'التتبع الدولي' : 'International Tracking',
				description: lang === 'ar' ? 'تتبع الشحنات عبر الحدود' : 'Tracking shipments across borders'
			},
			{
				title: lang === 'ar' ? 'إدارة الوثائق' : 'Document Management',
				description: lang === 'ar' ? 'إدارة الوثائق والامتثال التنظيمي' : 'Managing documentation and regulatory compliance'
			}
		],
		solutions: [
			{
				title: lang === 'ar' ? 'التحسين اللوجستي' : 'Logistics Optimization',
				description: lang === 'ar' ? 'تحسين عمليات الاستيراد والتصدير باستخدام الذكاء الاصطناعي' : 'Optimize import/export operations using AI'
			},
			{
				title: lang === 'ar' ? 'الشفافية الكاملة' : 'Full Visibility',
				description: lang === 'ar' ? 'رؤية شاملة لجميع مراحل العملية' : 'Complete visibility across all process stages'
			}
		]
	};

	return <IndustryPageContent dictionary={dictionary} lang={validLang} industry={industryData} />;
}

