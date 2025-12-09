import { getDictionary } from '@/get-dictionary';
import { i18n, Locale } from '@/i18n-config';
import { Dictionary } from '@/types/dictionary';
import LegalPageContent from '../components/LegalPageContent';

export default async function DataProtectionPage({
	params,
}: {
	params: Promise<{ lang: Locale }>;
}) {
	const { lang } = await params;
	const validLang = i18n.locales.includes(lang) ? lang : i18n.defaultLocale;
	const dictionary = (await getDictionary(validLang)) as Dictionary;

	const legalData = {
		title: lang === 'ar' ? 'حماية البيانات' : 'Data Protection',
		lastUpdated: '2024-01-01',
		sections: [
			{
				title: lang === 'ar' ? 'التزامنا بحماية البيانات' : 'Our Commitment to Data Protection',
				content: lang === 'ar' 
					? 'نحن ملتزمون بحماية بياناتك الشخصية وضمان خصوصيتك. نتبع أفضل الممارسات والمعايير الدولية لحماية البيانات.'
					: 'We are committed to protecting your personal data and ensuring your privacy. We follow best practices and international standards for data protection.'
			},
			{
				title: lang === 'ar' ? 'حقوقك' : 'Your Rights',
				content: lang === 'ar' 
					? 'لديك الحق في الوصول إلى بياناتك وتصحيحها وحذفها، فضلاً عن الحق في الاعتراض على معالجة بياناتك.'
					: 'You have the right to access, correct, and delete your data, as well as the right to object to the processing of your data.'
			},
			{
				title: lang === 'ar' ? 'الأمان' : 'Security',
				content: lang === 'ar' 
					? 'نستخدم تدابير أمنية متقدمة لحماية بياناتك من الوصول غير المصرح به أو التغيير أو الكشف.'
					: 'We use advanced security measures to protect your data from unauthorized access, alteration, or disclosure.'
			}
		]
	};

	return <LegalPageContent dictionary={dictionary} lang={validLang} legal={legalData} />;
}

