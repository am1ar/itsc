import { getDictionary } from '@/get-dictionary';
import { i18n, Locale } from '@/i18n-config';
import { Dictionary } from '@/types/dictionary';
import ServiceDetailContent from '../components/ServiceDetailContent';

export default async function RouteOptimizationPage({
	params,
}: {
	params: Promise<{ lang: Locale }>;
}) {
	const { lang } = await params;
	const validLang = i18n.locales.includes(lang) ? lang : i18n.defaultLocale;
	const dictionary = (await getDictionary(validLang)) as Dictionary;

	const content = {
		icon: 'Route' as const,
		hero: {
			title: lang === 'ar' ? 'تحسين المسارات' : 'Route Optimization',
			subtitle: lang === 'ar' 
				? 'خوارزميات متقدمة لمسارات التسليم الفعالة'
				: 'Advanced Algorithms for Efficient Delivery Paths',
			description: lang === 'ar'
				? 'تقليل تكاليف الوقود، وأوقات العبور، والنفقات التشغيلية من خلال خوارزميات تحسين المسارات المتقدمة التي تأخذ في الاعتبار حركة المرور في الوقت الفعلي، وقدرات المركبات، ومتطلبات العملاء، والقيود الجغرافية. توفر حلول تحسين المسارات الخاصة بـ ITSC تخطيطاً ديناميكياً متعدد التوقفات يضمن أقصى كفاءة وأداء لأسطولك.'
				: 'Reduce fuel costs, transit times, and operational expenses through advanced route optimization algorithms that account for real-time traffic, vehicle capabilities, customer requirements, and geographic constraints. ITSC\'s route optimization solutions provide dynamic multi-stop planning that ensures maximum efficiency and performance for your fleet.'
		},
		definition: {
			title: lang === 'ar' ? 'ما هو تحسين المسارات؟' : 'What is Route Optimization?',
			content: lang === 'ar'
				? 'تحسين المسارات هو عملية حسابية متقدمة تستخدم خوارزميات معقدة لتحديد أكثر المسارات كفاءة للمركبات لتسليم البضائع أو تقديم الخدمات. يتجاوز التخطيط اليدوي البسيط من خلال أخذ عشرات المتغيرات في الاعتبار - بما في ذلك أنماط حركة المرور التاريخية والوقت الفعلي، والقيود الزمنية للعملاء، وسعة المركبات، وأنماط الطقس، والقيود الجغرافية - لإنشاء مسارات محسّنة ديناميكياً تقلل من المسافة المقطوعة، وتقليل وقت القيادة، وتقليل استهلاك الوقود مع ضمان تلبية جميع متطلبات التسليم.'
				: 'Route optimization is an advanced computational process that uses sophisticated algorithms to determine the most efficient paths for vehicles to deliver goods or provide services. It goes far beyond simple manual planning by accounting for dozens of variables—including historical and real-time traffic patterns, customer time windows, vehicle capacities, weather patterns, and geographic constraints—to create dynamically optimized routes that minimize distance traveled, reduce driving time, and decrease fuel consumption while ensuring all delivery requirements are met.',
			challenge: lang === 'ar'
				? 'يواجه مديرو النقل تحديات يومية في تخطيط مسارات فعالة لأساطيلهم. بدون تحسين المسارات المتقدم، تعتمد الشركات على التخطيط اليدوي أو الأنظمة الأساسية التي لا تأخذ في الاعتبار العوامل الديناميكية مثل حركة المرور المتغيرة، وتغيرات الطلب، والقيود الزمنية المعقدة. هذا يؤدي إلى مسارات غير فعالة، وزيادة تكاليف الوقود، وتأخير التسليم، وعدم رضا العملاء. علاوة على ذلك، مع تزايد الطلب على التسليمات السريعة والموثوقة، أصبح التخطيط اليدوي غير قابل للتطبيق للأساطيل الكبيرة.'
				: 'Transportation managers face daily challenges in planning efficient routes for their fleets. Without advanced route optimization, companies rely on manual planning or basic systems that don\'t account for dynamic factors like changing traffic conditions, demand fluctuations, and complex time constraints. This results in inefficient routes, increased fuel costs, delivery delays, and customer dissatisfaction. Moreover, with growing demand for fast and reliable deliveries, manual planning has become unfeasible for large fleets.'
		},
		approach: {
			title: lang === 'ar' ? 'نهج ITSC في تحسين المسارات' : 'ITSC\'s Approach to Route Optimization',
			content: lang === 'ar'
				? 'تستخدم ITSC خوارزميات تحسين متطورة تجمع بين تقنيات الذكاء الاصطناعي، والنمذجة الرياضية المتقدمة، ومعالجة البيانات في الوقت الفعلي. نظامنا يحلل ملايين المسارات المحتملة في ثوانٍ، مع الأخذ في الاعتبار مئات المتغيرات للتأكد من العثور على الحل الأمثل. نستخدم خوارزميات متعددة - بما في ذلك خوارزميات الشبكة الديناميكية، والبرمجة الخطية، والخوارزميات الجينية - التي تعمل معاً لإنشاء مسارات محسّنة بالكامل تتكيف مع الظروف المتغيرة.'
				: 'ITSC employs sophisticated optimization algorithms that combine AI technologies, advanced mathematical modeling, and real-time data processing. Our system analyzes millions of possible routes in seconds, accounting for hundreds of variables to ensure optimal solutions are found. We utilize multiple algorithms—including dynamic network algorithms, linear programming, and genetic algorithms—that work together to create fully optimized routes that adapt to changing conditions.',
			technologies: [
				{
					title: lang === 'ar' ? 'خوارزميات الشبكة الديناميكية' : 'Dynamic Network Algorithms',
					description: lang === 'ar'
						? 'خوارزميات متقدمة تحلل شبكات الطرق وتحدد المسارات الأكثر كفاءة بناءً على حركة المرور في الوقت الفعلي وظروف الطرق المتغيرة.'
						: 'Advanced algorithms that analyze road networks and determine the most efficient routes based on real-time traffic and changing road conditions.'
				},
				{
					title: lang === 'ar' ? 'تحسين متعدد المتغيرات' : 'Multi-Variable Optimization',
					description: lang === 'ar'
						? 'نظام يحلل بشكل متزامن عشرات المتغيرات - بما في ذلك سعة المركبات، والقيود الزمنية، وأنماط الطقس، وكثافة حركة المرور - لإنشاء حلول متوازنة.'
						: 'A system that simultaneously analyzes dozens of variables—including vehicle capacities, time constraints, weather patterns, and traffic density—to create balanced solutions.'
				},
				{
					title: lang === 'ar' ? 'التحديث في الوقت الفعلي' : 'Real-Time Re-optimization',
					description: lang === 'ar'
						? 'القدرة على إعادة تحسين المسارات تلقائياً عندما تحدث تغييرات غير متوقعة مثل تأخيرات المرور أو طلبات جديدة أو تغييرات في الطلب.'
						: 'The ability to automatically re-optimize routes when unexpected changes occur, such as traffic delays, new orders, or demand shifts.'
				},
				{
					title: lang === 'ar' ? 'التعلم الآلي التكيفي' : 'Adaptive Machine Learning',
					description: lang === 'ar'
						? 'نماذج ML التي تتعلم من أنماط التسليم السابقة والنتائج لتحسين دقة التحسين باستمرار وتكييف استراتيجيات التخطيط.'
						: 'ML models that learn from past delivery patterns and outcomes to continuously improve optimization accuracy and adapt planning strategies.'
				}
			]
		},
		benefits: {
			title: lang === 'ar' ? 'الفوائد والعائد على الاستثمار' : 'Key Benefits & ROI',
			content: lang === 'ar'
				? 'يوفر تحسين المسارات المتقدم عائداً سريعاً على الاستثمار من خلال تقليل تكاليف الوقود، وتحسين استخدام الأسطول، وزيادة عدد التسليمات في اليوم. تظهر الشركات التي تنفذ حلول تحسين المسارات عادةً تحسينات كبيرة في الكفاءة التشغيلية مع تقليل التكاليف بشكل كبير.'
				: 'Advanced route optimization delivers rapid return on investment by reducing fuel costs, improving fleet utilization, and increasing the number of daily deliveries. Companies implementing route optimization solutions typically show significant improvements in operational efficiency with substantial cost reductions.',
			roi: [
				{
					metric: lang === 'ar' ? 'توفير الوقود' : 'Fuel Savings',
					value: '30-40%',
					description: lang === 'ar'
						? 'تقليل تكاليف الوقود من خلال تقليل المسافة المقطوعة وتحسين كفاءة القيادة'
						: 'Reduced fuel costs through minimized distance traveled and improved driving efficiency'
				},
				{
					metric: lang === 'ar' ? 'زيادة التسليمات' : 'Delivery Increase',
					value: '25-35%',
					description: lang === 'ar'
						? 'زيادة عدد التسليمات المكتملة يومياً من خلال تحسين كفاءة المسارات'
						: 'Increased number of daily completed deliveries through improved route efficiency'
				},
				{
					metric: lang === 'ar' ? 'تقليل وقت العبور' : 'Transit Time Reduction',
					value: '40-50%',
					description: lang === 'ar'
						? 'تقليل أوقات التسليم وتحسين رضا العملاء'
						: 'Reduced delivery times and improved customer satisfaction'
				}
			]
		},
		integration: {
			title: lang === 'ar' ? 'التكامل مع عمليات النقل' : 'Integration with Transportation Operations',
			content: lang === 'ar'
				? 'يتكامل نظام تحسين المسارات الخاص بـ ITSC بسلاسة مع أنظمة إدارة الأسطول، وأنظمة تتبع GPS، وأنظمة إدارة الطلبات، ومنصات ERP. يتم تبادل البيانات في الوقت الفعلي بين الأنظمة، مما يضمن أن المسارات المحسّنة تعكس أحدث المعلومات المتاحة. يمكن للنظام أيضاً الاتصال بأجهزة الاستشعار في المركبات، وأنظمة الاتصالات، ومنصات التجارة الإلكترونية لإنشاء تدفق عمل متكامل بالكامل من الطلب إلى التسليم.'
				: 'ITSC\'s Route Optimization system integrates seamlessly with fleet management systems, GPS tracking systems, order management systems, and ERP platforms. Data is exchanged in real-time between systems, ensuring optimized routes reflect the latest available information. The system can also connect to vehicle sensors, communication systems, and e-commerce platforms to create a fully integrated workflow from order to delivery.'
		},
		cta: {
			title: lang === 'ar' ? 'احسن مساراتك اليوم' : 'Optimize Your Routes Today',
			description: lang === 'ar'
				? 'اكتشف كيف يمكن لتحسين المسارات المتقدم تقليل تكاليفك وزيادة كفاءة أسطولك. اطلب عرضاً توضيحياً مخصصاً لعرض التوفيرات المحتملة.'
				: 'Discover how advanced route optimization can reduce your costs and increase your fleet efficiency. Request a customized demo to see potential savings.',
			buttonText: lang === 'ar' ? 'طلب عرض توضيحي' : 'Request Demo',
			buttonLink: `/${lang}/contact`
		}
	};

	return <ServiceDetailContent dictionary={dictionary} lang={validLang} content={content} />;
}


