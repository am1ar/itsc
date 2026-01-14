import { getDictionary } from '@/get-dictionary';
import { i18n, Locale } from '@/i18n-config';
import { Dictionary } from '@/types/dictionary';
import ServiceDetailContent from '../components/ServiceDetailContent';

export default async function FleetManagementPage({
	params,
}: {
	params: Promise<{ lang: Locale }>;
}) {
	const { lang } = await params;
	const validLang = i18n.locales.includes(lang) ? lang : i18n.defaultLocale;
	const dictionary = (await getDictionary(validLang)) as Dictionary;

	const content = {
		icon: 'Truck' as const,
		hero: {
			title: lang === 'ar' ? 'إدارة الأسطول' : 'Fleet Management',
			subtitle: lang === 'ar' 
				? 'تتبع في الوقت الفعلي والتحكم في الأصول'
				: 'Real-Time Tracking and Asset Control',
			description: lang === 'ar'
				? 'الحصول على رؤية كاملة لأسطولك من خلال نظام إدارة شامل يوفر تتبعاً في الوقت الفعلي، وتحليلات الأداء، وإدارة الصيانة، والتحكم في الأصول. توفر حلول إدارة الأسطول الخاصة بـ ITSC رؤية شاملة لجميع مركباتك ومواردك، مما يتيح لك اتخاذ قرارات مستنيرة وتحسين الأداء التشغيلي.'
				: 'Gain complete visibility into your fleet through a comprehensive management system that provides real-time tracking, performance analytics, maintenance management, and asset control. ITSC\'s fleet management solutions deliver comprehensive visibility into all your vehicles and resources, enabling you to make informed decisions and optimize operational performance.'
		},
		definition: {
			title: lang === 'ar' ? 'ما هي إدارة الأسطول؟' : 'What is Fleet Management?',
			content: lang === 'ar'
				? 'إدارة الأسطول هي نظام متكامل يجمع بين تتبع GPS في الوقت الفعلي، وإدارة الصيانة، وتحليل الأداء، وتقارير الامتثال لإدارة شاملة لجميع أصول النقل. يتجاوز هذا الحل التتبع البسيط من خلال توفير لوحة معلومات مركزية تعرض حالة كل مركبة، وأداء السائقين، ومتطلبات الصيانة، واستهلاك الوقود، وأنماط الاستخدام. يمكّن النظام المديرين من مراقبة العمليات عن بُعد، وتحديد المشاكل قبل أن تتفاقم، واتخاذ قرارات مدفوعة بالبيانات لتحسين الكفاءة وخفض التكاليف.'
				: 'Fleet Management is an integrated system that combines real-time GPS tracking, maintenance management, performance analytics, and compliance reporting for comprehensive oversight of all transportation assets. This solution goes beyond simple tracking by providing a centralized dashboard that displays the status of every vehicle, driver performance, maintenance requirements, fuel consumption, and usage patterns. The system enables managers to monitor operations remotely, identify issues before they escalate, and make data-driven decisions to improve efficiency and reduce costs.',
			challenge: lang === 'ar'
				? 'إدارة أسطول من المركبات يمثل تحدياً معقداً يتطلب مراقبة مستمرة لمواقع المركبات، وأداء السائقين، والاحتياجات الصيانة، والتكاليف التشغيلية. بدون نظام إدارة أسطول متكامل، تعتمد الشركات على العمليات اليدوية والتقارير غير المترابطة، مما يؤدي إلى فقدان الرؤية، وزيادة التكاليف، ومخاطر السلامة، وعدم الامتثال للوائح. علاوة على ذلك، مع تزايد حجم الأساطيل وتنوع المركبات، أصبح من المستحيل تقريباً إدارة الأسطول بشكل فعال دون أدوات متقدمة.'
				: 'Managing a fleet of vehicles presents a complex challenge requiring continuous monitoring of vehicle locations, driver performance, maintenance needs, and operational costs. Without an integrated fleet management system, companies rely on manual processes and disconnected reports, leading to loss of visibility, increased costs, safety risks, and regulatory non-compliance. Moreover, with growing fleet sizes and vehicle diversity, it has become nearly impossible to manage fleets effectively without advanced tools.'
		},
		approach: {
			title: lang === 'ar' ? 'نهج ITSC في إدارة الأسطول' : 'ITSC\'s Approach to Fleet Management',
			content: lang === 'ar'
				? 'تستخدم ITSC منصة إدارة أسطول شاملة تجمع بين تتبع GPS المتقدم، وأجهزة الاستشعار في المركبات (IoT)، والذكاء الاصطناعي، والتحليلات التنبؤية. نظامنا يوفر رؤية في الوقت الفعلي لجميع المركبات، مع إمكانيات متقدمة لتتبع الأداء، وإدارة الصيانة الوقائية، وتحليل سلوك السائقين. نحن نستخدم تقنيات التعلم الآلي للتنبؤ باحتياجات الصيانة، وتحديد أنماط الاستخدام غير الفعالة، وتوفير توصيات لتحسين الكفاءة.'
				: 'ITSC employs a comprehensive fleet management platform that combines advanced GPS tracking, vehicle sensors (IoT), artificial intelligence, and predictive analytics. Our system provides real-time visibility into all vehicles, with advanced capabilities for performance tracking, preventive maintenance management, and driver behavior analysis. We utilize machine learning technologies to predict maintenance needs, identify inefficient usage patterns, and provide recommendations for efficiency improvements.',
			technologies: [
				{
					title: lang === 'ar' ? 'تتبع GPS المتقدم' : 'Advanced GPS Tracking',
					description: lang === 'ar'
						? 'نظام تتبع دقيق يوفر تحديثات موقع في الوقت الفعلي مع إمكانيات تتبع المسار التاريخي، ووضع السيارة، وسرعة الحركة.'
						: 'Precise tracking system that provides real-time location updates with capabilities for historical route tracking, vehicle status, and movement speed.'
				},
				{
					title: lang === 'ar' ? 'تحليلات الأداء التنبؤية' : 'Predictive Performance Analytics',
					description: lang === 'ar'
						? 'تقنيات الذكاء الاصطناعي التي تحلل بيانات الأداء التاريخية لتوقع مشاكل المحتملة، وتحديد أنماط الاستخدام غير الفعالة، وتوفير توصيات التحسين.'
						: 'AI technologies that analyze historical performance data to predict potential issues, identify inefficient usage patterns, and provide optimization recommendations.'
				},
				{
					title: lang === 'ar' ? 'إدارة الصيانة الوقائية' : 'Preventive Maintenance Management',
					description: lang === 'ar'
						? 'نظام إدارة صيانة متقدم يحدد تلقائياً متطلبات الصيانة بناءً على استخدام المركبة، ويجدول الصيانة، ويتتبع التكاليف.'
						: 'Advanced maintenance management system that automatically identifies maintenance requirements based on vehicle usage, schedules maintenance, and tracks costs.'
				},
				{
					title: lang === 'ar' ? 'تحليل سلوك السائق' : 'Driver Behavior Analysis',
					description: lang === 'ar'
						? 'تقنيات متقدمة لمراقبة وتحليل سلوك القيادة لتحسين السلامة، وتقليل استهلاك الوقود، وتقليل المخاطر.'
						: 'Advanced techniques for monitoring and analyzing driving behavior to improve safety, reduce fuel consumption, and minimize risks.'
				}
			]
		},
		benefits: {
			title: lang === 'ar' ? 'الفوائد والعائد على الاستثمار' : 'Key Benefits & ROI',
			content: lang === 'ar'
				? 'يوفر نظام إدارة الأسطول عائداً قوياً على الاستثمار من خلال تحسين استخدام المركبات، وتقليل تكاليف الصيانة، وتحسين السلامة، وخفض استهلاك الوقود. تظهر الشركات التي تنفذ حلول إدارة الأسطول تحسينات كبيرة في الكفاءة التشغيلية مع تقليل التكاليف التشغيلية.'
				: 'Fleet Management systems deliver strong return on investment through improved vehicle utilization, reduced maintenance costs, enhanced safety, and lower fuel consumption. Companies implementing fleet management solutions show significant improvements in operational efficiency with reduced operational costs.',
			roi: [
				{
					metric: lang === 'ar' ? 'تقليل تكاليف الصيانة' : 'Maintenance Cost Reduction',
					value: '30-40%',
					description: lang === 'ar'
						? 'تقليل تكاليف الصيانة من خلال الصيانة الوقائية المدعومة بالبيانات'
						: 'Reduced maintenance costs through data-driven preventive maintenance'
				},
				{
					metric: lang === 'ar' ? 'تحسين استخدام المركبات' : 'Vehicle Utilization',
					value: '20-30%',
					description: lang === 'ar'
						? 'تحسين استخدام الأسطول من خلال التخطيط والتحسين المحسّن'
						: 'Improved fleet utilization through enhanced planning and optimization'
				},
				{
					metric: lang === 'ar' ? 'توفير الوقود' : 'Fuel Savings',
					value: '15-25%',
					description: lang === 'ar'
						? 'تقليل استهلاك الوقود من خلال تحسين المسارات وتحليل سلوك السائق'
						: 'Reduced fuel consumption through route optimization and driver behavior analysis'
				}
			]
		},
		integration: {
			title: lang === 'ar' ? 'التكامل مع أنظمة النقل' : 'Integration with Transportation Systems',
			content: lang === 'ar'
				? 'يتكامل نظام إدارة الأسطول الخاص بـ ITSC بسلاسة مع أنظمة تتبع GPS، وأجهزة الاستشعار في المركبات، وأنظمة إدارة الصيانة، وأنظمة الموارد البشرية، ومنصات ERP. يتم تبادل البيانات في الوقت الفعلي بين جميع الأنظمة، مما يوفر رؤية موحدة لعمليات الأسطول. يمكن للنظام أيضاً الاتصال بأنظمة إدارة الطلبات، وأنظمة تخطيط المسارات، وأنظمة إدارة المخزون لإنشاء منصة متكاملة بالكامل.'
				: 'ITSC\'s Fleet Management system integrates seamlessly with GPS tracking systems, vehicle sensors, maintenance management systems, HR systems, and ERP platforms. Data is exchanged in real-time between all systems, providing a unified view of fleet operations. The system can also connect to order management systems, route planning systems, and inventory management systems to create a fully integrated platform.'
		},
		cta: {
			title: lang === 'ar' ? 'احصل على رؤية كاملة لأسطولك' : 'Get Complete Fleet Visibility',
			description: lang === 'ar'
				? 'اكتشف كيف يمكن لنظام إدارة الأسطول تحسين عملياتك وخفض التكاليف. احجز استشارة مجانية لتحليل أسطولك.'
				: 'Discover how a fleet management system can improve your operations and reduce costs. Schedule a free consultation to analyze your fleet.',
			buttonText: lang === 'ar' ? 'تحليل بيانات الأسطول' : 'Analyze My Fleet Data',
			buttonLink: `/${lang}/contact`
		}
	};

	return <ServiceDetailContent dictionary={dictionary} lang={validLang} content={content} />;
}


