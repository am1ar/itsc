import { getDictionary } from '@/get-dictionary';
import { i18n, Locale } from '@/i18n-config';
import { Dictionary } from '@/types/dictionary';
import IndustryPageContent from '../components/IndustryPageContent';

export default async function ManufacturingPage({
	params,
}: {
	params: Promise<{ lang: Locale }>;
}) {
	const { lang } = await params;
	const validLang = i18n.locales.includes(lang) ? lang : i18n.defaultLocale;
	const dictionary = (await getDictionary(validLang)) as Dictionary;

	const industryData = {
		title: lang === 'ar' ? 'التصنيع' : 'Manufacturing',
		description: lang === 'ar' 
			? 'حلول متخصصة لتحسين عمليات التصنيع وسلسلة التوريد'
			: 'Specialized solutions for optimizing manufacturing and supply chain operations',
		challenges: [
			{
				title: lang === 'ar' ? 'تخطيط الإنتاج' : 'Production Planning',
				description: lang === 'ar' ? 'تحدي تخطيط الإنتاج الأمثل' : 'Optimal production planning challenges'
			},
			{
				title: lang === 'ar' ? 'إدارة المواد الخام' : 'Raw Material Management',
				description: lang === 'ar' ? 'إدارة فعالة للمواد الخام والمكونات' : 'Efficient raw material and component management'
			},
			{
				title: lang === 'ar' ? 'مراقبة الجودة' : 'Quality Control',
				description: lang === 'ar' ? 'ضمان الجودة في جميع مراحل الإنتاج' : 'Quality assurance across all production stages'
			}
		],
		solutions: [
			{
				title: lang === 'ar' ? 'تخطيط الإنتاج الذكي' : 'Smart Production Planning',
				description: lang === 'ar' ? 'تخطيط الإنتاج المدعوم بالذكاء الاصطناعي' : 'AI-powered production planning'
			},
			{
				title: lang === 'ar' ? 'إدارة المخزون المتقدمة' : 'Advanced Inventory Management',
				description: lang === 'ar' ? 'حلول متقدمة لإدارة المخزون والمواد' : 'Advanced inventory and material management solutions'
			}
		]
	};

	return <IndustryPageContent dictionary={dictionary} lang={validLang} industry={industryData} />;
}