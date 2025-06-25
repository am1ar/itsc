import { BarChart3, Database, Shield, Truck } from 'lucide-react';

export const solutions = {
	en: [
		{
			icon: BarChart3,
			title: 'AI-Driven Supply Chain Analytics Platform',
			description:
				'Comprehensive analytics platform that transforms raw supply chain data into actionable insights, enabling data-driven decisions and continuous improvement.',
			benefits: [
				'360° supply chain visibility',
				'42% improved forecast accuracy',
				'35% inventory optimization',
			],
			category: 'analytics',
			featured: true,
			link: '/solutions/analytics-platform',
		},
		{
			icon: Database,
			title: 'Inventory Management & Optimization Solution',
			description:
				'AI-powered inventory optimization that balances stock levels, carrying costs, and service levels to maximize profitability while meeting customer demands.',
			benefits: [
				'32% reduction in inventory costs',
				'99.5% order fulfillment rate',
				'45% less excess inventory',
			],
			category: 'operations',
			featured: true,
			link: '/solutions/inventory-management',
		},
		{
			icon: Truck,
			title: 'Logistics & Fleet Optimization Solution',
			description:
				'Dynamic route planning and fleet management that considers real-time conditions to minimize costs and maximize delivery efficiency.',
			benefits: [
				'30% fuel cost reduction',
				'25% faster deliveries',
				'40% maintenance cost reduction',
			],
			category: 'operations',
			featured: true,
			link: '/solutions/logistics-optimization',
		},
		{
			icon: Shield,
			title: 'Supply Chain Risk Management Solution',
			description:
				'Proactive risk identification and mitigation strategies powered by AI to protect your supply chain from disruptions and compliance issues.',
			benefits: [
				'85% risk prediction accuracy',
				'60% faster response times',
				'40% reduction in disruption impact',
			],
			category: 'risk',
			featured: true,
			link: '/solutions/risk-management',
		},
	],
	ar: [
		{
			icon: BarChart3,
			title: 'منصة تحليلات سلسلة التوريد المدعومة بالذكاء الاصطناعي',
			description:
				'منصة تحليلات شاملة تحول بيانات سلسلة التوريد الخام إلى رؤى قابلة للتنفيذ، مما يتيح اتخاذ قرارات مدفوعة بالبيانات وتحسين مستمر.',
			benefits: [
				'رؤية شاملة لسلسلة التوريد بنسبة 360°',
				'تحسين دقة التنبؤ بنسبة 42%',
				'تحسين المخزون بنسبة 35%',
			],
			category: 'analytics',
			featured: true,
			link: '/solutions/analytics-platform',
		},
		{
			icon: Database,
			title: 'حل إدارة وت оптимизация المخزون',
			description:
				'تحسين المخزون المدعوم بالذكاء الاصطناعي يوازن مستويات المخزون وتكاليف الاحتفاظ ومستويات الخدمة لتعظيم الربحية مع تلبية متطلبات العملاء.',
			benefits: [
				'خفض تكاليف المخزون بنسبة 32%',
				'معدل تنفيذ الطلبات 99.5%',
				'تقليل المخزون الزائد بنسبة 45%',
			],
			category: 'operations',
			featured: true,
			link: '/solutions/inventory-management',
		},
		{
			icon: Truck,
			title: 'حل تحسين الخدمات اللوجستية والأسطول',
			description:
				'تخطيط المسارات الديناميكي وإدارة الأسطول الذي يأخذ في الاعتبار الظروف في الوقت الفعلي لتقليل التكاليف وتعظيم كفاءة التسليم.',
			benefits: [
				'خفض تكاليف الوقود بنسبة 30%',
				'تسليم أسرع بنسبة 25%',
				'خفض تكاليف الصيانة بنسبة 40%',
			],
			category: 'operations',
			featured: true,
			link: '/solutions/logistics-optimization',
		},
		{
			icon: Shield,
			title: 'حل إدارة مخاطر سلسلة التوريد',
			description:
				'استراتيجيات تحديد وتخفيف المخاطر الاستباقية المدعومة بالذكاء الاصطناعي لحماية سلسلة التوريد الخاصة بك من الاضطرابات ومشكلات الامتثال.',
			benefits: [
				'دقة التنبؤ بالمخاطر 85%',
				'أوقات استجابة أسرع بنسبة 60%',
				'خفض تأثير الاضطرابات بنسبة 40%',
			],
			category: 'risk',
			featured: true,
			link: '/solutions/risk-management',
		},
	],
};
