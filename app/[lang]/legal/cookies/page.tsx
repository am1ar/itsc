import { getDictionary } from '@/get-dictionary';
import { i18n, Locale } from '@/i18n-config';
import { Dictionary } from '@/types/dictionary';
import LegalPageContent from '../components/LegalPageContent';

export default async function CookiesPage({
	params,
}: {
	params: Promise<{ lang: Locale }>;
}) {
	const { lang } = await params;
	const validLang = i18n.locales.includes(lang) ? lang : i18n.defaultLocale;
	const dictionary = (await getDictionary(validLang)) as Dictionary;

	const legalData = {
		title: lang === 'ar' ? 'سياسة ملفات تعريف الارتباط' : 'Cookie Policy',
		lastUpdated: '2024-01-01',
		sections: [
			{
				title: lang === 'ar' ? 'ما هي ملفات تعريف الارتباط' : 'What Are Cookies',
				content: lang === 'ar' 
					? 'ملفات تعريف الارتباط هي ملفات نصية صغيرة يتم تخزينها على جهازك عند زيارة موقعنا. تساعدنا هذه الملفات في تحسين تجربتك وتقديم خدمات أفضل.'
					: 'Cookies are small text files that are stored on your device when you visit our website. These files help us improve your experience and provide better services.'
			},
			{
				title: lang === 'ar' ? 'كيف نستخدم ملفات تعريف الارتباط' : 'How We Use Cookies',
				content: lang === 'ar' 
					? 'نستخدم ملفات تعريف الارتباط لتحسين وظائف الموقع، وتحليل استخدام الموقع، وتخصيص تجربتك.'
					: 'We use cookies to improve website functionality, analyze website usage, and personalize your experience.'
			},
			{
				title: lang === 'ar' ? 'إدارة ملفات تعريف الارتباط' : 'Managing Cookies',
				content: lang === 'ar' 
					? 'يمكنك إدارة تفضيلات ملفات تعريف الارتباط من خلال إعدادات المتصفح الخاص بك.'
					: 'You can manage your cookie preferences through your browser settings.'
			}
		]
	};

	return <LegalPageContent dictionary={dictionary} lang={validLang} legal={legalData} />;
}

