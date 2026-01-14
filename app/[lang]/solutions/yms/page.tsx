import { getDictionary } from '@/get-dictionary';
import { i18n, Locale } from '@/i18n-config';
import { Dictionary } from '@/types/dictionary';
import ServiceDetailContent from '../components/ServiceDetailContent';

export default async function YardManagementSystemsPage({
	params,
}: {
	params: Promise<{ lang: Locale }>;
}) {
	const { lang } = await params;
	const validLang = i18n.locales.includes(lang) ? lang : i18n.defaultLocale;
	const dictionary = (await getDictionary(validLang)) as Dictionary;

	const content = {
		icon: 'Map' as const,
		hero: {
			title: lang === 'ar' ? 'أنظمة إدارة الساحات (YMS)' : 'Yard Management Systems (YMS)',
			subtitle: lang === 'ar' 
				? 'جدولة الأرصفة الذكية وتحسين تدفق الساحة'
				: 'Intelligent Dock Scheduling and Yard Flow Optimization',
			description: lang === 'ar'
				? 'تحسين عمليات الساحة والمستودع من خلال نظام إدارة شامل يوفر جدولة ذكية للأرصفة، وتتبع الحاويات، وإدارة تدفق الساحات. توفر أنظمة إدارة الساحات (YMS) الخاصة بـ ITSC رؤية كاملة وعمليات محسّنة لساحات التخزين، مما يقلل من أوقات الانتظار، ويحسن استخدام الأرصفة، ويزيد من الإنتاجية الإجمالية.'
				: 'Optimize yard and warehouse operations through a comprehensive management system that provides intelligent dock scheduling, container tracking, and yard flow management. ITSC\'s Yard Management Systems (YMS) deliver complete visibility and optimized operations for storage yards, reducing wait times, improving dock utilization, and increasing overall productivity.'
		},
		definition: {
			title: lang === 'ar' ? 'ما هي أنظمة إدارة الساحات (YMS)؟' : 'What are Yard Management Systems (YMS)?',
			content: lang === 'ar'
				? 'أنظمة إدارة الساحات (YMS) هي أنظمة متخصصة مصممة لإدارة وتنسيق العمليات التي تحدث في ساحات التخزين والمستودعات. تتضمن هذه الأنظمة جدولة الأرصفة، وتتبع المقطورات والحاويات، وإدارة حركة المركبات داخل الساحة وخارجها، وتحسين استخدام المساحة. يتجاوز YMS الممارسات اليدوية من خلال توفير رؤية في الوقت الفعلي لجميع الأصول في الساحة، وتنسيق تلقائي للحركات، وتنبيهات فورية للمشاكل المحتملة مثل الاختناقات أو التأخيرات.'
				: 'Yard Management Systems (YMS) are specialized systems designed to manage and coordinate operations that occur in storage yards and warehouses. These systems encompass dock scheduling, trailer and container tracking, management of vehicle movements in and out of the yard, and optimization of space utilization. YMS goes beyond manual practices by providing real-time visibility into all yard assets, automated coordination of movements, and instant alerts for potential issues such as congestion or delays.',
			challenge: lang === 'ar'
				? 'تعد إدارة ساحات التخزين والمستودعات واحدة من أكثر التحديات تعقيداً في عمليات سلسلة التوريد. بدون نظام YMS متكامل، تعتمد الشركات على التنسيق اليدوي، والجداول الورقية، والتواصل الهاتفي، مما يؤدي إلى أوقات انتظار طويلة، واستخدام غير فعال للأرصفة، وازدحام في الساحات، وفقدان الرؤية. هذه المشاكل تؤدي إلى تكاليف إضافية، وتأخير في عمليات التحميل والتفريغ، وانخفاض الإنتاجية. مع زيادة حجم العمليات وتنوع الأنشطة، أصبح من المستحيل إدارة الساحات بكفاءة دون أنظمة متقدمة.'
				: 'Managing storage yards and warehouses is one of the most complex challenges in supply chain operations. Without an integrated YMS, companies rely on manual coordination, paper schedules, and phone communication, leading to long wait times, inefficient dock utilization, yard congestion, and loss of visibility. These issues result in additional costs, delays in loading and unloading operations, and reduced productivity. As operations grow in scale and activity diversity, it has become impossible to manage yards efficiently without advanced systems.'
		},
		approach: {
			title: lang === 'ar' ? 'نهج ITSC في أنظمة إدارة الساحات' : 'ITSC\'s Approach to Yard Management Systems',
			content: lang === 'ar'
				? 'تستخدم ITSC منصة YMS متكاملة تجمع بين تقنيات IoT، والذكاء الاصطناعي، والتحليلات التنبؤية لإدارة شاملة لساحات التخزين. نظامنا يوفر جدولة تلقائية للأرصفة بناءً على الأولويات، وتوفر المركبات، ومتطلبات التحميل والتفريغ. نحن نستخدم أجهزة استشعار متقدمة وتقنيات RFID لتتبع دقيق للمقطورات والحاويات، مع خوارزميات تحسين لضمان تدفق سلس للحركة داخل الساحة.'
				: 'ITSC employs an integrated YMS platform that combines IoT technologies, artificial intelligence, and predictive analytics for comprehensive yard management. Our system provides automated dock scheduling based on priorities, vehicle availability, and loading/unloading requirements. We utilize advanced sensors and RFID technologies for precise tracking of trailers and containers, with optimization algorithms ensuring smooth flow of movement within the yard.',
			technologies: [
				{
					title: lang === 'ar' ? 'جدولة الأرصفة الذكية' : 'Intelligent Dock Scheduling',
					description: lang === 'ar'
						? 'نظام جدولة تلقائي يحسب أفضل توقيت وأرصفة للمركبات القادمة بناءً على الأولويات، وتوفر الأرصفة، وأنماط الحمولة.'
						: 'Automated scheduling system that calculates optimal timing and dock assignments for incoming vehicles based on priorities, dock availability, and load patterns.'
				},
				{
					title: lang === 'ar' ? 'تتبع الأصول في الوقت الفعلي' : 'Real-Time Asset Tracking',
					description: lang === 'ar'
						? 'تقنيات RFID وأجهزة الاستشعار التي توفر رؤية فورية لموقع جميع المقطورات والحاويات والمركبات في الساحة.'
						: 'RFID and sensor technologies that provide instant visibility into the location of all trailers, containers, and vehicles in the yard.'
				},
				{
					title: lang === 'ar' ? 'تحسين تدفق الساحة' : 'Yard Flow Optimization',
					description: lang === 'ar'
						? 'خوارزميات متقدمة تحلل أنماط الحركة وتحدد مسارات محسّنة لتقليل الازدحام وتحسين كفاءة الحركة.'
						: 'Advanced algorithms that analyze movement patterns and determine optimized paths to reduce congestion and improve movement efficiency.'
				},
				{
					title: lang === 'ar' ? 'إدارة الحاويات والمقطورات' : 'Container and Trailer Management',
					description: lang === 'ar'
						? 'نظام شامل لإدارة دورة حياة المقطورات والحاويات من الوصول إلى المغادرة، مع تتبع الحالة والموقع.'
						: 'Comprehensive system for managing the lifecycle of trailers and containers from arrival to departure, with status and location tracking.'
				}
			]
		},
		benefits: {
			title: lang === 'ar' ? 'الفوائد والعائد على الاستثمار' : 'Key Benefits & ROI',
			content: lang === 'ar'
				? 'توفر أنظمة إدارة الساحات عائداً سريعاً على الاستثمار من خلال تقليل أوقات الانتظار، وتحسين استخدام الأرصفة، وتقليل الازدحام، وزيادة الإنتاجية. تظهر الشركات التي تنفذ YMS تحسينات كبيرة في كفاءة العمليات مع تقليل التكاليف التشغيلية.'
				: 'Yard Management Systems deliver rapid return on investment by reducing wait times, improving dock utilization, minimizing congestion, and increasing productivity. Companies implementing YMS show significant improvements in operational efficiency with reduced operational costs.',
			roi: [
				{
					metric: lang === 'ar' ? 'تقليل أوقات الانتظار' : 'Wait Time Reduction',
					value: '50-70%',
					description: lang === 'ar'
						? 'تقليل كبير في أوقات الانتظار للمركبات من خلال الجدولة المحسّنة'
						: 'Significant reduction in vehicle wait times through optimized scheduling'
				},
				{
					metric: lang === 'ar' ? 'تحسين استخدام الأرصفة' : 'Dock Utilization',
					value: '30-40%',
					description: lang === 'ar'
						? 'تحسين استخدام الأرصفة من خلال الجدولة الذكية والتخطيط'
						: 'Improved dock utilization through intelligent scheduling and planning'
				},
				{
					metric: lang === 'ar' ? 'زيادة الإنتاجية' : 'Productivity Increase',
					value: '25-35%',
					description: lang === 'ar'
						? 'زيادة الإنتاجية الإجمالية من خلال تحسين تدفق الساحة'
						: 'Increased overall productivity through improved yard flow'
				}
			]
		},
		integration: {
			title: lang === 'ar' ? 'التكامل مع أنظمة المستودعات' : 'Integration with Warehouse Systems',
			content: lang === 'ar'
				? 'يتكامل نظام YMS الخاص بـ ITSC بسلاسة مع أنظمة إدارة المستودعات (WMS)، وأنظمة إدارة النقل (TMS)، وأنظمة تخطيط موارد المؤسسات (ERP)، وأنظمة إدارة الطلبات. يتم تبادل البيانات في الوقت الفعلي بين جميع الأنظمة، مما يوفر رؤية موحدة من الطلب إلى التسليم. يمكن للنظام أيضاً الاتصال بأجهزة الأرصفة، وأجهزة الاستشعار في الساحة، وأنظمة تتبع GPS لإنشاء منصة متكاملة بالكامل.'
				: 'ITSC\'s YMS system integrates seamlessly with Warehouse Management Systems (WMS), Transportation Management Systems (TMS), Enterprise Resource Planning (ERP) systems, and order management systems. Data is exchanged in real-time between all systems, providing a unified view from order to delivery. The system can also connect to dock equipment, yard sensors, and GPS tracking systems to create a fully integrated platform.'
		},
		cta: {
			title: lang === 'ar' ? 'طلب عرض YMS توضيحي' : 'Request an YMS Demo',
			description: lang === 'ar'
				? 'اكتشف كيف يمكن لنظام إدارة الساحات تحسين عملياتك وتقليل التكاليف. احجز عرضاً توضيحياً مخصصاً.'
				: 'Discover how a Yard Management System can improve your operations and reduce costs. Schedule a customized demo.',
			buttonText: lang === 'ar' ? 'طلب عرض توضيحي' : 'Request Demo',
			buttonLink: `/${lang}/contact`
		}
	};

	return <ServiceDetailContent dictionary={dictionary} lang={validLang} content={content} />;
}


