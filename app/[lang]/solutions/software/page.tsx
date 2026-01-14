import { getDictionary } from '@/get-dictionary';
import { i18n, Locale } from '@/i18n-config';
import { Dictionary } from '@/types/dictionary';
import ServiceDetailContent from '../components/ServiceDetailContent';

export default async function LogisticsSoftwarePage({
	params,
}: {
	params: Promise<{ lang: Locale }>;
}) {
	const { lang } = await params;
	const validLang = i18n.locales.includes(lang) ? lang : i18n.defaultLocale;
	const dictionary = (await getDictionary(validLang)) as Dictionary;

	const content = {
		icon: 'Database' as const,
		hero: {
			title: lang === 'ar' ? 'حلول برمجيات الخدمات اللوجستية' : 'Logistics Software Solutions',
			subtitle: lang === 'ar' 
				? 'أنظمة إدارة المستودعات (WMS) وتكامل ERP'
				: 'Warehouse Management Systems (WMS) & ERP Integration',
			description: lang === 'ar'
				? 'تطوير وتنفيذ حلول برمجيات الخدمات اللوجستية الشاملة بما في ذلك أنظمة إدارة المستودعات (WMS)، وتكامل ERP، ومنصات سلسلة التوريد الشاملة. توفر ITSC حلول برمجيات متكاملة تدعم العمليات اللوجستية من الطلب إلى التسليم، مما يضمن رؤية شاملة وكفاءة تشغيلية محسّنة.'
				: 'Develop and implement comprehensive logistics software solutions including Warehouse Management Systems (WMS), ERP integration, and end-to-end supply chain platforms. ITSC provides integrated software solutions that support logistics operations from order to delivery, ensuring comprehensive visibility and enhanced operational efficiency.'
		},
		definition: {
			title: lang === 'ar' ? 'ما هي حلول برمجيات الخدمات اللوجستية؟' : 'What are Logistics Software Solutions?',
			content: lang === 'ar'
				? 'حلول برمجيات الخدمات اللوجستية هي أنظمة برمجيات شاملة مصممة لإدارة وتنسيق جميع جوانب عمليات الخدمات اللوجستية وسلسلة التوريد. تتضمن هذه الحلول أنظمة إدارة المستودعات (WMS) لإدارة المخزون والعمليات داخل المستودع، وأنظمة إدارة النقل (TMS) لتحسين عمليات النقل، وتكامل ERP لربط العمليات اللوجستية بالأنظمة المؤسسية الأخرى. تتجاوز هذه الحلول الأنظمة المنفصلة من خلال توفير منصة موحدة تدعم الرؤية الشاملة والتحكم في جميع جوانب سلسلة التوريد من الطلب إلى التسليم.'
				: 'Logistics Software Solutions are comprehensive software systems designed to manage and coordinate all aspects of logistics and supply chain operations. These solutions include Warehouse Management Systems (WMS) for inventory and in-warehouse operations management, Transportation Management Systems (TMS) for optimizing transportation operations, and ERP integration to connect logistics operations with other enterprise systems. These solutions go beyond separate systems by providing a unified platform that supports comprehensive visibility and control across all aspects of the supply chain from order to delivery.',
			challenge: lang === 'ar'
				? 'الشركات اليوم تعتمد على أنظمة برمجيات متعددة غير متكاملة لإدارة عمليات الخدمات اللوجستية، مما يؤدي إلى فقدان الرؤية، وعدم الكفاءة، وزيادة التكاليف. بدون منصة برمجيات لوجستية موحدة، تواجه الشركات تحديات في تنسيق العمليات بين المستودعات، والنقل، والمخزون، والطلبات. هذا يؤدي إلى أخطاء في الطلبات، ومخزون غير دقيق، وتأخيرات في التسليم، ورضا عملاء منخفض. علاوة على ذلك، مع تزايد تعقيد سلاسل التوريد، أصبح من المستحيل إدارة العمليات بكفاءة دون حلول برمجية متكاملة.'
				: 'Companies today rely on multiple disconnected software systems to manage logistics operations, leading to loss of visibility, inefficiency, and increased costs. Without a unified logistics software platform, companies face challenges coordinating operations between warehouses, transportation, inventory, and orders. This results in order errors, inaccurate inventory, delivery delays, and low customer satisfaction. Moreover, with increasing supply chain complexity, it has become impossible to manage operations efficiently without integrated software solutions.'
		},
		approach: {
			title: lang === 'ar' ? 'نهج ITSC في حلول برمجيات الخدمات اللوجستية' : 'ITSC\'s Approach to Logistics Software Solutions',
			content: lang === 'ar'
				? 'تستخدم ITSC منهجية متكاملة لتطوير وتنفيذ حلول برمجيات الخدمات اللوجستية التي تجمع بين WMS و TMS وتكامل ERP في منصة موحدة. نحن نطور أنظمة قابلة للتخصيص تتكامل بسلاسة مع البنية التحتية التقنية الحالية، مع ضمان الرؤية الشاملة والأتمتة والتحسين عبر جميع جوانب سلسلة التوريد. نستخدم أحدث تقنيات البرمجيات وممارسات التطوير لضمان الأداء العالي، والأمان، وقابلية التوسع.'
				: 'ITSC employs an integrated methodology for developing and implementing logistics software solutions that combine WMS, TMS, and ERP integration into a unified platform. We develop customizable systems that integrate seamlessly with existing technical infrastructure, ensuring comprehensive visibility, automation, and optimization across all aspects of the supply chain. We use the latest software technologies and development practices to ensure high performance, security, and scalability.',
			technologies: [
				{
					title: lang === 'ar' ? 'أنظمة إدارة المستودعات (WMS)' : 'Warehouse Management Systems (WMS)',
					description: lang === 'ar'
						? 'أنظمة شاملة لإدارة المخزون، والعمليات داخل المستودع، وتنفيذ الطلبات، والتتبع، مع دعم العمليات الآلية واليدوية.'
						: 'Comprehensive systems for managing inventory, in-warehouse operations, order fulfillment, and tracking, with support for both automated and manual processes.'
				},
				{
					title: lang === 'ar' ? 'تكامل ERP' : 'ERP Integration',
					description: lang === 'ar'
						? 'تكامل شامل مع أنظمة ERP الرئيسية مثل SAP، Oracle، Microsoft Dynamics لربط العمليات اللوجستية بالأنظمة المؤسسية.'
						: 'Comprehensive integration with major ERP systems such as SAP, Oracle, Microsoft Dynamics to connect logistics operations with enterprise systems.'
				},
				{
					title: lang === 'ar' ? 'منصات سلسلة التوريد الشاملة' : 'End-to-End Supply Chain Platforms',
					description: lang === 'ar'
						? 'منصات موحدة تدعم الرؤية الشاملة والتحكم في جميع جوانب سلسلة التوريد من الطلب إلى التسليم.'
						: 'Unified platforms that support comprehensive visibility and control across all aspects of the supply chain from order to delivery.'
				},
				{
					title: lang === 'ar' ? 'الأتمتة والتكامل' : 'Automation and Integration',
					description: lang === 'ar'
						? 'تقنيات الأتمتة المتقدمة والتكامل بين الأنظمة لضمان تدفق سلس للبيانات والعمليات عبر جميع الأنظمة.'
						: 'Advanced automation technologies and system integration to ensure smooth data and process flow across all systems.'
				}
			]
		},
		benefits: {
			title: lang === 'ar' ? 'الفوائد والعائد على الاستثمار' : 'Key Benefits & ROI',
			content: lang === 'ar'
				? 'توفر حلول برمجيات الخدمات اللوجستية المتكاملة عائداً قوياً على الاستثمار من خلال تحسين الكفاءة التشغيلية، وتقليل التكاليف، وزيادة الدقة، وتحسين رضا العملاء. تظهر الشركات التي تنفذ حلول برمجيات لوجستية متكاملة تحسينات كبيرة في الإنتاجية والدقة مع تقليل التكاليف التشغيلية.'
				: 'Integrated logistics software solutions deliver strong return on investment through improved operational efficiency, reduced costs, increased accuracy, and enhanced customer satisfaction. Companies implementing integrated logistics software solutions show significant improvements in productivity and accuracy with reduced operational costs.',
			roi: [
				{
					metric: lang === 'ar' ? 'تحسين الإنتاجية' : 'Productivity Improvement',
					value: '30-45%',
					description: lang === 'ar'
						? 'تحسين الإنتاجية التشغيلية من خلال الأتمتة والتحسين'
						: 'Improved operational productivity through automation and optimization'
				},
				{
					metric: lang === 'ar' ? 'تحسين الدقة' : 'Accuracy Improvement',
					value: '99%+',
					description: lang === 'ar'
						? 'دقة محسّنة في إدارة المخزون وتنفيذ الطلبات'
						: 'Improved accuracy in inventory management and order fulfillment'
				},
				{
					metric: lang === 'ar' ? 'تقليل التكاليف' : 'Cost Reduction',
					value: '20-35%',
					description: lang === 'ar'
						? 'تقليل التكاليف التشغيلية من خلال الكفاءة المحسّنة والأتمتة'
						: 'Reduced operational costs through improved efficiency and automation'
				}
			]
		},
		integration: {
			title: lang === 'ar' ? 'التكامل مع الأنظمة المؤسسية' : 'Integration with Enterprise Systems',
			content: lang === 'ar'
				? 'تتكامل حلول برمجيات الخدمات اللوجستية الخاصة بـ ITSC بسلاسة مع الأنظمة المؤسسية الحالية من خلال واجهات برمجية موحدة ومعايير صناعية. نحن نضمن التكامل مع أنظمة ERP مثل SAP EWM و Oracle WMS و Microsoft Dynamics، ومنصات التجارة الإلكترونية، وأنظمة إدارة علاقات العملاء (CRM)، وأنظمة إدارة الطلبات. يتم التكامل بطريقة غير مدمرة، مما يضمن انتقالاً سلساً وتحسين تدريجي للعمليات.'
				: 'ITSC\'s Logistics Software Solutions integrate seamlessly with existing enterprise systems through unified APIs and industry standards. We ensure integration with ERP systems such as SAP EWM, Oracle WMS, and Microsoft Dynamics, e-commerce platforms, Customer Relationship Management (CRM) systems, and order management systems. Integration is performed in a non-disruptive manner, ensuring smooth transition and gradual process improvement.'
		},
		cta: {
			title: lang === 'ar' ? 'ابدأ تحسين عملياتك اللوجستية' : 'Start Optimizing Your Logistics Operations',
			description: lang === 'ar'
				? 'اكتشف كيف يمكن لحلول برمجيات الخدمات اللوجستية تحويل عملياتك. احجز استشارة مجانية لمناقشة احتياجاتك.'
				: 'Discover how logistics software solutions can transform your operations. Schedule a free consultation to discuss your needs.',
			buttonText: lang === 'ar' ? 'احجز استشارة' : 'Schedule Consultation',
			buttonLink: `/${lang}/contact`
		}
	};

	return <ServiceDetailContent dictionary={dictionary} lang={validLang} content={content} />;
}


