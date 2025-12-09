import { getDictionary } from '@/get-dictionary';
import { i18n, Locale } from '@/i18n-config';
import { Dictionary } from '@/types/dictionary';
import LegalPageContent from '../components/LegalPageContent';

export default async function CompliancePage({
	params,
}: {
	params: Promise<{ lang: Locale }>;
}) {
	const { lang } = await params;
	const validLang = i18n.locales.includes(lang) ? lang : i18n.defaultLocale;
	const dictionary = (await getDictionary(validLang)) as Dictionary;

	const legalData = {
		title: lang === 'ar' ? 'الامتثال' : 'Compliance',
		lastUpdated: '2024-01-01',
		sections: [
			{
				title: lang === 'ar' ? 'التزامنا بالامتثال' : 'Our Compliance Commitment',
				content: lang === 'ar' 
					? 'نحن ملتزمون بالامتثال لجميع القوانين واللوائح المعمول بها في جميع البلدان التي نعمل فيها.'
					: 'We are committed to complying with all applicable laws and regulations in all countries where we operate.'
			},
			{
				title: lang === 'ar' ? 'المعايير واللوائح' : 'Standards & Regulations',
				content: lang === 'ar' 
					? 'نلتزم بمعايير الصناعة الدولية وأفضل الممارسات في مجالات الأمان والجودة والبيئة.'
					: 'We adhere to international industry standards and best practices in safety, quality, and environmental areas.'
			},
			{
				title: lang === 'ar' ? 'المراجعة والتحسين' : 'Review & Improvement',
				content: lang === 'ar' 
					? 'نقوم بمراجعة وتحسين برامج الامتثال لدينا بانتظام لضمان مواكبة أحدث المتطلبات.'
					: 'We regularly review and improve our compliance programs to ensure we meet the latest requirements.'
			}
		]
	};

	return <LegalPageContent dictionary={dictionary} lang={validLang} legal={legalData} />;
}

