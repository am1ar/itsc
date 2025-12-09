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
				title: lang === 'ar' ? 'مقدمة' : 'Introduction',
				content: lang === 'ar' 
					? 'شركة Intelligent transportation, LLC ("ITSC"، "نحن"، "لنا"، أو "خاصتنا") ملتزمة بحماية خصوصيتك. تشرح سياسة الخصوصية هذه كيف نجمع ونستخدم ونحمي معلوماتك الشخصية عند استخدامك لموقعنا الإلكتروني وخدماتنا. باستخدام خدماتنا، فإنك توافق على ممارسات جمع واستخدام المعلومات الموضحة في هذه السياسة.'
					: 'Intelligent transportation, LLC ("ITSC," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website and services. By using our services, you agree to the collection and use of information in accordance with this policy.'
			},
			{
				title: lang === 'ar' ? 'المعلومات التي نجمعها' : 'Information We Collect',
				content: lang === 'ar' 
					? 'نجمع أنواعاً مختلفة من المعلومات لتقديم وتحسين خدماتنا:\n\n• المعلومات التي تقدمها مباشرة: الاسم، عنوان البريد الإلكتروني، رقم الهاتف، معلومات الشركة، وأي معلومات أخرى تقدمها عند التسجيل أو التواصل معنا.\n\n• معلومات الاستخدام: نجمع معلومات حول كيفية استخدامك لموقعنا وخدماتنا، بما في ذلك عنوان IP، نوع المتصفح، صفحات الويب التي تزورها، والوقت والتاريخ.\n\n• ملفات تعريف الارتباط: نستخدم ملفات تعريف الارتباط وتقنيات مماثلة لتتبع النشاط على موقعنا وتحسين تجربتك.'
					: 'We collect different types of information to provide and improve our services:\n\n• Information You Provide Directly: Name, email address, phone number, company information, and any other information you provide when registering or contacting us.\n\n• Usage Information: We collect information about how you use our website and services, including IP address, browser type, web pages you visit, and time and date.\n\n• Cookies: We use cookies and similar technologies to track activity on our site and improve your experience.'
			},
			{
				title: lang === 'ar' ? 'كيف نستخدم معلوماتك' : 'How We Use Your Information',
				content: lang === 'ar' 
					? 'نستخدم المعلومات التي نجمعها للأغراض التالية:\n\n• تقديم وصيانة وتحسين خدماتنا\n• التواصل معك بشأن خدماتنا، بما في ذلك الإشعارات والتحديثات\n• معالجة المعاملات وإدارة طلباتك\n• إرسال رسائل تسويقية (مع إمكانية إلغاء الاشتراك)\n• تحليل استخدام الموقع لتحسين تجربة المستخدم\n• الكشف عن ومنع الاحتيال والأنشطة غير المصرح بها\n• الامتثال للالتزامات القانونية'
					: 'We use the information we collect for the following purposes:\n\n• To provide, maintain, and improve our services\n• To communicate with you about our services, including notifications and updates\n• To process transactions and manage your requests\n• To send marketing communications (with opt-out options)\n• To analyze website usage to improve user experience\n• To detect and prevent fraud and unauthorized activities\n• To comply with legal obligations'
			},
			{
				title: lang === 'ar' ? 'مشاركة المعلومات' : 'Information Sharing',
				content: lang === 'ar' 
					? 'نحن لا نبيع أو نؤجر معلوماتك الشخصية. قد نشارك معلوماتك في الحالات التالية:\n\n• مع مقدمي الخدمات: نعمل مع مزودي خدمات موثوقين يساعدوننا في تشغيل أعمالنا (مثل استضافة الويب، معالجة المدفوعات، التحليلات).\n\n• للامتثال القانوني: عندما نعتقد أن الكشف مطلوب بموجب القانون أو لحماية حقوقنا أو حقوق الآخرين.\n\n• في حالة الاندماج أو الاستحواذ: إذا تم دمج ITSC أو الاستحواذ عليها، قد يتم نقل معلوماتك كجزء من هذه المعاملة.'
					: 'We do not sell or rent your personal information. We may share your information in the following circumstances:\n\n• With Service Providers: We work with trusted service providers who help us operate our business (such as web hosting, payment processing, analytics).\n\n• For Legal Compliance: When we believe disclosure is required by law or to protect our rights or the rights of others.\n\n• In Case of Merger or Acquisition: If ITSC is merged or acquired, your information may be transferred as part of that transaction.'
			},
			{
				title: lang === 'ar' ? 'أمان البيانات' : 'Data Security',
				content: lang === 'ar' 
					? 'نحن نستخدم تدابير أمنية متقدمة لحماية معلوماتك الشخصية من الوصول غير المصرح به أو التغيير أو الكشف أو التدمير. تشمل هذه التدابير:\n\n• التشفير: نستخدم التشفير لحماية البيانات أثناء النقل والتخزين\n• ضوابط الوصول: نحد من الوصول إلى معلوماتك الشخصية للموظفين والمقاولين والوكلاء الذين يحتاجون إلى هذه المعلومات\n• المراقبة: نراقب أنظمتنا لاكتشاف التهديدات الأمنية\n\nومع ذلك، لا يمكن ضمان أمان 100% لأي طريقة نقل عبر الإنترنت أو تخزين إلكتروني.'
					: 'We use advanced security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. These measures include:\n\n• Encryption: We use encryption to protect data in transit and at rest\n• Access Controls: We limit access to your personal information to employees, contractors, and agents who need that information\n• Monitoring: We monitor our systems to detect security threats\n\nHowever, no method of transmission over the Internet or electronic storage is 100% secure.'
			},
			{
				title: lang === 'ar' ? 'حقوقك' : 'Your Rights',
				content: lang === 'ar' 
					? 'لديك حقوق معينة فيما يتعلق بمعلوماتك الشخصية:\n\n• حق الوصول: يمكنك طلب نسخة من المعلومات الشخصية التي نحتفظ بها عنك\n• حق التصحيح: يمكنك طلب تصحيح أي معلومات غير دقيقة\n• حق الحذف: يمكنك طلب حذف معلوماتك الشخصية في ظروف معينة\n• حق الاعتراض: يمكنك الاعتراض على معالجة معلوماتك الشخصية\n• حق نقل البيانات: يمكنك طلب نقل معلوماتك إلى خدمة أخرى\n\nللممارسة هذه الحقوق، يرجى الاتصال بنا على info@itsc.site.'
					: 'You have certain rights regarding your personal information:\n\n• Right to Access: You can request a copy of the personal information we hold about you\n• Right to Rectification: You can request correction of any inaccurate information\n• Right to Deletion: You can request deletion of your personal information under certain circumstances\n• Right to Object: You can object to the processing of your personal information\n• Right to Data Portability: You can request transfer of your information to another service\n\nTo exercise these rights, please contact us at info@itsc.site.'
			},
			{
				title: lang === 'ar' ? 'التغييرات على سياسة الخصوصية' : 'Changes to Privacy Policy',
				content: lang === 'ar' 
					? 'قد نحدث سياسة الخصوصية هذه من وقت لآخر. سنخطرك بأي تغييرات عن طريق نشر سياسة الخصوصية الجديدة على هذه الصفحة وتحديث تاريخ "آخر تحديث" في الأعلى. يُنصح بمراجعة سياسة الخصوصية هذه بشكل دوري لأي تغييرات.'
					: 'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date at the top. You are advised to review this Privacy Policy periodically for any changes.'
			}
		]
	};

	return <LegalPageContent dictionary={dictionary} lang={validLang} legal={legalData} />;
}