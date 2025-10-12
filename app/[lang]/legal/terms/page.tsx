import { getDictionary } from '@/get-dictionary';
import { i18n, Locale } from '@/i18n-config';
import { Dictionary } from '@/types/dictionary';
import LegalPageContent from '../components/LegalPageContent';

export default async function TermsPage({
	params,
}: {
	params: Promise<{ lang: Locale }>;
}) {
	const { lang } = await params;
	const validLang = i18n.locales.includes(lang) ? lang : i18n.defaultLocale;
	const dictionary = (await getDictionary(validLang)) as Dictionary;

	const legalData = {
		title: lang === 'ar' ? 'شروط الخدمة' : 'Terms of Service',
		lastUpdated: '2024-01-01',
		sections: [
			{
				title: lang === 'ar' ? 'قبول الشروط' : 'Acceptance of Terms',
				content: lang === 'ar' 
					? 'باستخدام خدماتنا، فإنك توافق على الالتزام بهذه الشروط والأحكام.'
					: 'By using our services, you agree to be bound by these terms and conditions.'
			},
			{
				title: lang === 'ar' ? 'استخدام الخدمات' : 'Use of Services',
				content: lang === 'ar' 
					? 'يجب استخدام خدماتنا وفقاً للقوانين المعمول بها وهذه الشروط.'
					: 'Our services must be used in accordance with applicable laws and these terms.'
			},
			{
				title: lang === 'ar' ? 'المسؤولية' : 'Liability',
				content: lang === 'ar' 
					? 'نحن نقدم خدماتنا "كما هي" ولا نتحمل مسؤولية أي أضرار غير مباشرة.'
					: 'We provide our services "as is" and are not liable for any indirect damages.'
			}
		]
	};

	return <LegalPageContent dictionary={dictionary} lang={validLang} legal={legalData} />;
}