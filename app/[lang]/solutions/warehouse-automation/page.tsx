import { getDictionary } from '@/get-dictionary';
import { i18n, Locale } from '@/i18n-config';
import { Dictionary } from '@/types/dictionary';
import WarehouseAutomationContent from './components/WarehouseAutomationContent';

export default async function WarehouseAutomationPage({
	params,
}: {
	params: Promise<{ lang: Locale }>;
}) {
	const { lang } = await params;
	const validLang = i18n.locales.includes(lang) ? lang : i18n.defaultLocale;
	const dictionary = (await getDictionary(validLang)) as Dictionary;

	const content = {
		hero: {
			title: lang === 'ar' ? 'ITSC: إعادة تعريف الأتمتة الذكية' : 'ITSC: Redefining Intelligent Automation',
			subtitle: lang === 'ar' 
				? 'استشاريون هندسيون ومتكاملو أنظمة متخصصون'
				: 'Expert Engineering Consultants & System Integrators',
			description: lang === 'ar'
				? 'كاستشاريين هندسيين ومتكاملي أنظمة متخصصين، تقدم ITSC حلول أتمتة متقدمة مدفوعة بالبيانات لحل التحديات المعقدة مثل المساحة المحدودة ونقص العمالة والطلب المتزايد على التجارة الإلكترونية. نحول المستودعات من مراكز تكلفة إلى محاور تشغيلية عالية الكفاءة ومرنة.'
				: 'As expert engineering consultants and system integrators, ITSC delivers advanced, data-driven automation solutions to solve complex challenges like limited space, labor shortages, and rising e-commerce demands. We transform warehouses from cost centers into high-efficiency, resilient operational hubs.'
		},
		solutions: [
			{
				id: 'storage-asrs',
				title: lang === 'ar' 
					? '1. التخزين عالي الكثافة وأنظمة AS/RS'
					: '1. High-Density Storage and AS/RS Systems',
				icon: 'Warehouse',
				items: [
					{
						title: lang === 'ar' ? 'تعظيم المساحة العمودية' : 'Vertical Space Maximization',
						description: lang === 'ar'
							? 'تصميم وتنفيذ أنظمة التخزين والاسترجاع الآلية (AS/RS) المحسّنة لتعظيم الاستخدام المكعب، بما في ذلك هياكل الخليج العالي وتكوينات الممرات العميقة.'
							: 'Design and implementation of Automated Storage and Retrieval Systems (AS/RS) optimized for maximizing cubic utilization, including high-bay structures and deep lane configurations.'
					},
					{
						title: lang === 'ar' ? 'أنواع AS/RS' : 'AS/RS Types',
						description: lang === 'ar'
							? 'دمج تقنيات AS/RS المتنوعة، بما في ذلك أنظمة تحميل الوحدة الثقيلة (للمنصات الكاملة) وأنظمة الميني-لود/المكوك الدقيقة (للصناديق/الحالات).'
							: 'Integration of diverse AS/RS technologies, including heavy-duty Unit-Load Systems (for full pallets) and precision Mini-Load/Shuttle Systems (for totes/cases).'
					},
					{
						title: lang === 'ar' ? 'الأجهزة المتخصصة' : 'Specialized Hardware',
						description: lang === 'ar'
							? 'نشر معدات عالية الكفاءة مثل رافعات المكدس وأنظمة المكوك رباعية الاتجاهات وأنظمة متخصصة مثل وحدات الرفع العمودي (VLMs).'
							: 'Deployment of highly efficient equipment such as Stacker Cranes, Four-Way Shuttle Systems, and specialized systems like Vertical Lift Modules (VLMs).'
					},
					{
						title: lang === 'ar' ? 'النتائج' : 'Results',
						description: lang === 'ar'
							? 'تحقق الأنظمة الآلية تحسيناً بنسبة 10% إلى 20% في استخدام المساحة ويمكن أن تقلل من البصمة المطلوبة للمستودع بنسبة تصل إلى 85%.'
							: 'Automated systems yield a 10% to 20% improvement in space utilization and can reduce required warehouse footprint by up to 85%.'
					}
				],
				results: lang === 'ar'
					? 'تحسين استخدام المساحة بنسبة 10-20%، تقليل البصمة المطلوبة للمستودع بنسبة تصل إلى 85%'
					: '10-20% improvement in space utilization, up to 85% reduction in required warehouse footprint'
			},
			{
				id: 'robotics-fleet',
				title: lang === 'ar'
					? '2. الروبوتات المتقدمة وتكامل الأسطول المتنقل'
					: '2. Advanced Robotics and Mobile Fleet Integration',
				icon: 'Bot',
				items: [
					{
						title: lang === 'ar' ? 'النقل المرن' : 'Flexible Transport',
						description: lang === 'ar'
							? 'تنفيذ الروبوتات المتنقلة المستقلة (AMRs) والمركبات الموجهة الآلية (AGVs) لإدارة معالجة المواد وحركة المنتجات داخل المنشأة بشكل مستقل.'
							: 'Implementation of Autonomous Mobile Robots (AMRs) and Automated Guided Vehicles (AGVs) to autonomously manage material handling and product movement within the facility.'
					},
					{
						title: lang === 'ar' ? 'من البضائع إلى الشخص (G2P)' : 'Goods-to-Person (G2P)',
						description: lang === 'ar'
							? 'حلول تركز على نموذج G2P، الذي يجلب البضائع المطلوبة مباشرة إلى منتقيين ثابتين، مما يقلل الوقت المستغرق في المشي بنسبة تصل إلى 60%.'
							: 'Solutions centered on the G2P paradigm, which brings ordered goods directly to stationary pickers, reducing time spent walking by up to 60%.'
					},
					{
						title: lang === 'ar' ? 'الاختيار والفرز الروبوتي' : 'Robotic Picking and Sorting',
						description: lang === 'ar'
							? 'دمج وحدات روبوتية متخصصة، مثل محاثات الطرود الروبوتية، باستخدام رؤية الكمبيوتر والروبوتات الصناعية للاختيار والفرز والتفرد عالي السرعة والدقة.'
							: 'Integration of specialized robotic modules, such as Robotic Parcel Inductors, utilizing computer vision and industrial robots for high-speed, accurate picking, sorting, and singulation.'
					}
				]
			},
			{
				id: 'software-control',
				title: lang === 'ar'
					? '3. ذكاء البرمجيات ومكدس التحكم'
					: '3. Software Intelligence and Control Stack',
				icon: 'Code',
				items: [
					{
						title: lang === 'ar' ? 'التسلسل الهرمي للتحكم' : 'Control Hierarchy',
						description: lang === 'ar'
							? 'نشر البنية المعمارية البرمجية ثلاثية المستويات الحاسمة: نظام إدارة المستودع (WMS) لإدارة المخزون والطلبات على مستوى المؤسسة، ونظام تنفيذ المستودع (WES) للتنسيق التشغيلي والتحسين في الوقت الفعلي، ونظام التحكم في المستودع (WCS) للتحكم المباشر في المعدات الآلية والروبوتات.'
							: 'Deployment of the crucial three-tiered software architecture: Warehouse Management System (WMS) for enterprise-level inventory and order management, Warehouse Execution System (WES) for real-time operational orchestration and optimization, and Warehouse Control System (WCS) for direct control of automated equipment and robotics.'
					},
					{
						title: lang === 'ar' ? 'البيانات في الوقت الفعلي' : 'Real-Time Data',
						description: lang === 'ar'
							? 'تضمن الأنظمة مراقبة 100% في الوقت الفعلي لحالة المخزون والنشاط.'
							: 'Systems ensure 100% real-time monitoring of inventory and activity status.'
					},
					{
						title: lang === 'ar' ? 'دقة عالية' : 'High Accuracy',
						description: lang === 'ar'
							? 'التركيز على حلول هندسية تحقق أهداف أداء تشغيلي أدنى، بما في ذلك دقة مخزون 99% أو أعلى.'
							: 'Focus on engineering solutions that deliver minimum operational performance targets, including 99% or higher inventory accuracy.'
					},
					{
						title: lang === 'ar' ? 'تكامل سلس' : 'Seamless Integration',
						description: lang === 'ar'
							? 'ضمان التواصل السلس بين أجهزة الأتمتة (الروبوتات، PLCs) وأنظمة المضيف للعملاء (ERP) من خلال معايير مفتوحة مثل REST API و OPC UA. دعم التكامل مع أنظمة SAP EWM و Oracle WMS و Microsoft Dynamics وغيرها من منصات ERP الرئيسية.'
							: 'Ensuring smooth communication between automation hardware (Robots, PLCs) and client host systems (ERP) through open standards like REST API and OPC UA. Support for integration with SAP EWM, Oracle WMS, Microsoft Dynamics, and other major ERP platforms.'
					},
					{
						title: lang === 'ar' ? 'الامتثال والموافقات' : 'Compliance & Approvals',
						description: lang === 'ar'
							? 'الامتثال الكامل لدورة حياة المشروع، بما في ذلك الموافقات السلطوية (MODON/الدفاع المدني) ومعايير السلامة العالمية لأنظمة AS/RS. ضمان الامتثال لجميع المتطلبات التنظيمية المحلية والدولية.'
							: 'Full project lifecycle compliance, including Authority Approvals (MODON/Civil Defense) and global safety standards for AS/RS systems. Ensuring compliance with all local and international regulatory requirements.'
					}
				]
			}
		],
		value: {
			title: lang === 'ar' 
				? 'قيمة ITSC الهندسية والتشغيلية'
				: 'ITSC Engineering & Operational Value',
			metrics: [
				{
					title: lang === 'ar' ? 'الكفاءة التشغيلية' : 'Operational Efficiency',
					description: lang === 'ar'
						? 'توفر الأتمتة متوسط زيادة بنسبة 25% في الإنتاجية الإجمالية وتقلل أوقات معالجة الطلبات بنسبة 50-75%.'
						: 'Automation delivers an average of a 25% increase in overall productivity and reduces order processing times by 50-75%.'
				},
				{
					title: lang === 'ar' ? 'تقليل التكلفة والعمالة' : 'Cost and Labor Reduction',
					description: lang === 'ar'
						? 'يتم تبرير الأنظمة من خلال تحقيق وفورات كبيرة في التكاليف، بما في ذلك تقليل تكاليف العمالة بنسبة 30-50% وزيادة السرعة بنسبة تصل إلى 50% في وقت الاختيار والتخزين مقارنة بالعمليات اليدوية.'
						: 'Systems are justified by achieving substantial cost savings, including 30-50% reductions in labor costs and speed increases of up to 50% in picking and storing time compared to manual processes.'
				},
				{
					title: lang === 'ar' ? 'القابلية للتوسع والمرونة' : 'Scalability and Flexibility',
					description: lang === 'ar'
						? 'الحلول مصممة لتكون معيارية وقابلة للتوسع، مما يسمح للمنشآت بتوسيع العمليات بنسبة 20-40% دون زيادات تكلفة متناسبة، مما يضمن التكيف مع تقلبات الطلب في السوق.'
						: 'Solutions are designed to be modular and scalable, allowing facilities to expand operations by 20-40% without proportional cost increases, ensuring adaptability to market demand fluctuations.'
				},
				{
					title: lang === 'ar' ? 'الأمان والامتثال' : 'Safety and Compliance',
					description: lang === 'ar'
						? 'يضمن الهندسة الشاملة مستويات عالية من أمان مكان العمل، مما يخفف بشكل فعال من المخاطر المرتبطة بالمعالجة اليدوية.'
						: 'Comprehensive engineering ensures high levels of workplace safety, effectively mitigating risks associated with manual handling.'
				}
			]
		}
	};

	return <WarehouseAutomationContent dictionary={dictionary} lang={validLang} content={content} />;
}
