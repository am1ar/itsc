import { getDictionary } from '@/get-dictionary';
import { i18n, Locale } from '@/i18n-config';
import { Dictionary } from '@/types/dictionary';
import LegalPageContent from '../components/LegalPageContent';

export default async function SecurityPage({
	params,
}: {
	params: Promise<{ lang: Locale }>;
}) {
	const { lang } = await params;
	const validLang = i18n.locales.includes(lang) ? lang : i18n.defaultLocale;
	const dictionary = (await getDictionary(validLang)) as Dictionary;

	const legalData = {
		title: lang === 'ar' ? 'الأمان' : 'Security',
		lastUpdated: '2024-01-01',
		sections: [
			{
				title: lang === 'ar' ? 'أمان البيانات' : 'Data Security',
				content: lang === 'ar' 
					? 'نستخدم تقنيات تشفير متقدمة وبروتوكولات أمنية قوية لحماية بياناتك من الوصول غير المصرح به.'
					: 'We use advanced encryption technologies and strong security protocols to protect your data from unauthorized access.'
			},
			{
				title: lang === 'ar' ? 'الأمان المادي' : 'Physical Security',
				content: lang === 'ar' 
					? 'مرافقنا محمية بمعايير أمنية عالية لضمان سلامة البيانات والمعدات.'
					: 'Our facilities are protected with high security standards to ensure the safety of data and equipment.'
			},
			{
				title: lang === 'ar' ? 'المراقبة المستمرة' : 'Continuous Monitoring',
				content: lang === 'ar' 
					? 'نراقب أنظمتنا باستمرار لاكتشاف ومنع أي تهديدات أمنية محتملة.'
					: 'We continuously monitor our systems to detect and prevent any potential security threats.'
			}
		]
	};

	return <LegalPageContent dictionary={dictionary} lang={validLang} legal={legalData} />;
}

