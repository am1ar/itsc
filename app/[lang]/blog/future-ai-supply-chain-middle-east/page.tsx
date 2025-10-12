import { getDictionary } from '@/get-dictionary';
import { i18n, Locale } from '@/i18n-config';
import { Dictionary } from '@/types/dictionary';
import BlogPostContent from '../components/BlogPostContent';

export default async function BlogPostPage({
	params,
}: {
	params: Promise<{ lang: Locale }>;
}) {
	const { lang } = await params;
	const validLang = i18n.locales.includes(lang) ? lang : i18n.defaultLocale;
	const dictionary = (await getDictionary(validLang)) as Dictionary;

	const blogPost = {
		title: lang === 'ar' 
			? 'مستقبل تحسين سلسلة التوريد المدعوم بالذكاء الاصطناعي في الشرق الأوسط'
			: 'The Future of AI-Powered Supply Chain Optimization in the Middle East',
		excerpt: lang === 'ar'
			? 'استكشف كيف يحدث الذكاء الاصطناعي ثورة في إدارة سلسلة التوريد عبر منطقة الشرق الأوسط وشمال أفريقيا'
			: 'Explore how artificial intelligence is revolutionizing supply chain management across the MENA region',
		content: lang === 'ar'
			? 'يشهد الشرق الأوسط تحولاً جذرياً في مجال إدارة سلسلة التوريد بفضل تقنيات الذكاء الاصطناعي المتطورة. تستثمر الشركات في المنطقة بكثافة في هذه التقنيات لتحسين الكفاءة وخفض التكاليف.'
			: 'The Middle East is experiencing a fundamental transformation in supply chain management thanks to advanced artificial intelligence technologies. Companies in the region are investing heavily in these technologies to improve efficiency and reduce costs.',
		author: 'Dr. Sarah Al-Mahmoud',
		date: 'December 15, 2024',
		readTime: '8 min read',
		category: lang === 'ar' ? 'اتجاهات الذكاء الاصطناعي' : 'AI Trends'
	};

	return <BlogPostContent dictionary={dictionary} lang={validLang} post={blogPost} />;
}