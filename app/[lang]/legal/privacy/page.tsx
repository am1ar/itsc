import { getDictionary } from '@/get-dictionary';
import { i18n, Locale } from '@/i18n-config';
import { Dictionary } from '@/types/dictionary';
import LegalPageContent from '../components/LegalPageContent';

export default async function PrivacyPage({
	params,
}: {
	params: Promise<{ lang: Locale }>;
}) {
	const { lang } = await params;
	const validLang = i18n.locales.includes(lang) ? lang : i18n.defaultLocale;
	const dictionary = (await getDictionary(validLang)) as Dictionary;

	const legalData = {
		title: lang === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy',
		lastUpdated: '2024-01-01',
		sections: [
			{
				title: lang === 'ar' ? 'المعلومات التي نجمعها' : 'Information We Collect',
				content: lang === 'ar' 
					? 'نحن نجمع المعلومات التي تقدمها لنا مباشرة، مثل عندما تنشئ حساباً أو تتصل بنا.'
					: 'We collect information you provide directly to us, such as when you create an account or contact us.'
			},
			{
				title: lang === 'ar' ? 'كيف نستخدم معلوماتك' : 'How We Use Your Information',
				content: lang === 'ar' 
					? 'نستخدم المعلومات التي نجمعها لتقديم وتحسين خدماتنا والتواصل معك.'
					: 'We use the information we collect to provide, maintain, and improve our services and communicate with you.'
			},
			{
				title: lang === 'ar' ? 'مشاركة المعلومات' : 'Information Sharing',
				content: lang === 'ar' 
					? 'نحن لا نبيع أو نؤجر أو نشارك معلوماتك الشخصية مع أطراف ثالثة دون موافقتك.'
					: 'We do not sell, rent, or share your personal information with third parties without your consent.'
			}
		]
	};

	return <LegalPageContent dictionary={dictionary} lang={validLang} legal={legalData} />;
}