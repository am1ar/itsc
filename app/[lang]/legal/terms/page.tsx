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
					? 'مرحباً بك في موقع Intelligent transportation, LLC ("ITSC"، "نحن"، "لنا"، أو "خاصتنا"). من خلال الوصول إلى موقعنا الإلكتروني واستخدامه، فإنك تقبل وتوافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على أي جزء من هذه الشروط، فيجب عليك عدم استخدام خدماتنا.'
					: 'Welcome to Intelligent transportation, LLC ("ITSC," "we," "us," or "our"). By accessing and using our website, you accept and agree to be bound by these Terms and Conditions. If you do not agree to any part of these terms, you must not use our services.'
			},
			{
				title: lang === 'ar' ? 'استخدام الخدمات' : 'Use of Services',
				content: lang === 'ar' 
					? 'يجب استخدام خدماتنا فقط للأغراض القانونية وبالطرق المصرح بها. أنت توافق على:\n\n• استخدام خدماتنا وفقاً لجميع القوانين واللوائح المعمول بها\n• عدم استخدام خدماتنا لأي غرض غير قانوني أو غير مصرح به\n• عدم محاولة الوصول غير المصرح به إلى أنظمتنا أو بياناتنا\n• عدم إعاقة أو تعطيل أمان أو وظائف موقعنا\n• عدم استخدام أي آلية تلقائية لجمع المعلومات من موقعنا دون إذن\n• عدم إعادة إنتاج أو نسخ أو بيع أو إعادة بيع أي جزء من خدماتنا'
					: 'Our services must be used only for lawful purposes and in authorized ways. You agree to:\n\n• Use our services in accordance with all applicable laws and regulations\n• Not use our services for any illegal or unauthorized purpose\n• Not attempt to gain unauthorized access to our systems or data\n• Not interfere with or disrupt the security or functionality of our website\n• Not use any automated mechanism to collect information from our site without permission\n• Not reproduce, copy, sell, or resell any part of our services'
			},
			{
				title: lang === 'ar' ? 'الحسابات والمعلومات' : 'Accounts and Information',
				content: lang === 'ar' 
					? 'عند إنشاء حساب معنا، أنت مسؤول عن:\n\n• الحفاظ على سرية معلومات حسابك وكلمة المرور\n• جميع الأنشطة التي تحدث تحت حسابك\n• إخطارنا فوراً بأي استخدام غير مصرح به لحسابك\n• توفير معلومات دقيقة وحديثة وكاملة عند التسجيل\n\nنحتفظ بالحق في تعليق أو إنهاء حسابك إذا انتهكت أياً من هذه الشروط.'
					: 'When creating an account with us, you are responsible for:\n\n• Maintaining the confidentiality of your account information and password\n• All activities that occur under your account\n• Notifying us immediately of any unauthorized use of your account\n• Providing accurate, current, and complete information when registering\n\nWe reserve the right to suspend or terminate your account if you violate any of these terms.'
			},
			{
				title: lang === 'ar' ? 'الملكية الفكرية' : 'Intellectual Property',
				content: lang === 'ar' 
					? 'جميع المحتويات الموجودة على موقعنا، بما في ذلك النصوص والرسومات والشعارات والصور والبرمجيات، هي ملك لـ ITSC أو مرخص لها وهي محمية بموجب قوانين حقوق النشر والعلامات التجارية. لا يجوز لك استخدام أو نسخ أو تعديل أو توزيع أي محتوى من موقعنا دون إذن كتابي صريح منا.'
					: 'All content on our website, including text, graphics, logos, images, and software, is the property of ITSC or its licensors and is protected by copyright and trademark laws. You may not use, copy, modify, or distribute any content from our website without our express written permission.'
			},
			{
				title: lang === 'ar' ? 'المسؤولية والضمانات' : 'Liability and Warranties',
				content: lang === 'ar' 
					? 'نقدم خدماتنا "كما هي" و "كما هو متاح". لا نقدم أي ضمانات، صريحة أو ضمنية، بما في ذلك:\n\n• ضمانات القابلية للتسويق أو الملاءمة لغرض معين\n• ضمانات عدم الانتهاك\n• ضمانات أن خدماتنا ستكون غير منقطعة أو خالية من الأخطاء\n\nفي أقصى حد يسمح به القانون، لن نكون مسؤولين عن أي أضرار مباشرة أو غير مباشرة أو عرضية أو خاصة أو تبعية ناتجة عن استخدامك أو عدم قدرتك على استخدام خدماتنا.'
					: 'We provide our services "as is" and "as available." We make no warranties, express or implied, including:\n\n• Warranties of merchantability or fitness for a particular purpose\n• Warranties of non-infringement\n• Warranties that our services will be uninterrupted or error-free\n\nTo the maximum extent permitted by law, we shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from your use or inability to use our services.'
			},
			{
				title: lang === 'ar' ? 'التعويض' : 'Indemnification',
				content: lang === 'ar' 
					? 'أنت توافق على تعويض وحماية ITSC وموظفيها ومديريها ووكلائها من أي مطالبات أو التزامات أو أضرار أو خسائر (بما في ذلك الرسوم القانونية المعقولة) الناتجة عن:\n\n• استخدامك لخدماتنا\n• انتهاكك لهذه الشروط\n• انتهاكك لأي حقوق لطرف ثالث'
					: 'You agree to indemnify and hold harmless ITSC, its employees, directors, and agents from any claims, liabilities, damages, or losses (including reasonable legal fees) arising from:\n\n• Your use of our services\n• Your violation of these terms\n• Your violation of any third-party rights'
			},
			{
				title: lang === 'ar' ? 'إنهاء الخدمة' : 'Termination',
				content: lang === 'ar' 
					? 'نحتفظ بالحق في إنهاء أو تعليق وصولك إلى خدماتنا فوراً، دون إشعار مسبق أو مسؤولية، لأي سبب من الأسباب، بما في ذلك إذا انتهكت هذه الشروط. عند الإنهاء، سينتهي حقك في استخدام خدماتنا فوراً.'
					: 'We reserve the right to terminate or suspend your access to our services immediately, without prior notice or liability, for any reason, including if you breach these terms. Upon termination, your right to use our services will cease immediately.'
			},
			{
				title: lang === 'ar' ? 'القانون الحاكم' : 'Governing Law',
				content: lang === 'ar' 
					? 'تخضع هذه الشروط وتفسر وفقاً لقوانين ولاية ديلاوير، الولايات المتحدة الأمريكية، دون اعتبار لأحكام تعارض القوانين. أي نزاع ينشأ من أو يتعلق بهذه الشروط سيتم حله حصرياً في محاكم ولاية ديلاوير.'
					: 'These terms shall be governed by and construed in accordance with the laws of the State of Delaware, United States of America, without regard to conflict of law provisions. Any dispute arising from or relating to these terms shall be resolved exclusively in the courts of Delaware.'
			},
			{
				title: lang === 'ar' ? 'التغييرات على الشروط' : 'Changes to Terms',
				content: lang === 'ar' 
					? 'نحتفظ بالحق في تعديل أو استبدال هذه الشروط في أي وقت. إذا كانت التعديلات جوهرية، سنحاول تقديم إشعار قبل 30 يوماً على الأقل من سريان التغييرات. الاستمرار في استخدام خدماتنا بعد سريان التغييرات يشكل موافقتك على الشروط المعدلة.'
					: 'We reserve the right to modify or replace these terms at any time. If the modifications are material, we will try to provide at least 30 days notice before the changes take effect. Continued use of our services after the changes take effect constitutes your acceptance of the modified terms.'
			},
			{
				title: lang === 'ar' ? 'اتصل بنا' : 'Contact Us',
				content: lang === 'ar' 
					? 'إذا كان لديك أي أسئلة حول شروط الخدمة هذه، يرجى الاتصال بنا:\n\nالبريد الإلكتروني: info@itsc.site\nالهاتف: +966580122162\nالعنوان: 266 Cherry Lane, New Castle, DE 19720 US'
					: 'If you have any questions about these Terms of Service, please contact us:\n\nEmail: info@itsc.site\nPhone: +966580122162\nAddress: 266 Cherry Lane, New Castle, DE 19720 US'
			}
		]
	};

	return <LegalPageContent dictionary={dictionary} lang={validLang} legal={legalData} />;
}