import {
	BarChart3,
	CheckCircle,
	Code,
	FileText,
	Headphones,
	Lightbulb,
	Rocket,
	Search,
	TestTube,
	TrendingUp,
	Users,
	Zap,
} from 'lucide-react';

export const howWeWorkData = {
	en: {
		stages: [
			{
				icon: Search,
				title: 'Discovery & Assessment',
				duration: '1-2 weeks',
				description:
					'Comprehensive analysis of your current supply chain operations, identifying pain points, opportunities, and defining success metrics.',
				deliverables: [
					'Current state analysis',
					'Gap assessment',
					'ROI projections',
					'Project roadmap',
				],
				highlight: 'Data-driven baseline establishment',
			},
			{
				icon: FileText,
				title: 'Strategic Planning',
				duration: '1-2 weeks',
				description:
					'Collaborative development of a tailored AI/automation strategy aligned with your business objectives and operational requirements.',
				deliverables: [
					'Solution architecture',
					'Technology stack selection',
					'Implementation timeline',
					'Resource allocation',
				],
				highlight: 'Agile methodology framework',
			},
			{
				icon: Lightbulb,
				title: 'Solution Design',
				duration: '2-3 weeks',
				description:
					'Design of custom AI algorithms and automation workflows, incorporating industry best practices and your specific operational constraints.',
				deliverables: [
					'Technical specifications',
					'UI/UX mockups',
					'Integration plans',
					'Performance benchmarks',
				],
				highlight: 'Client-centric design approach',
			},
			{
				icon: Code,
				title: 'Development & Configuration',
				duration: '4-8 weeks',
				description:
					'Agile development of your AI solution with regular sprint reviews, continuous integration, and real-time client feedback incorporation.',
				deliverables: [
					'Working prototypes',
					'API integrations',
					'Data pipelines',
					'Security implementations',
				],
				highlight: 'Continuous client collaboration',
			},
			{
				icon: TestTube,
				title: 'Testing & Validation',
				duration: '2-3 weeks',
				description:
					'Rigorous testing in simulated and controlled environments, ensuring accuracy, reliability, and performance optimization.',
				deliverables: [
					'Test results',
					'Performance reports',
					'Quality assurance',
					'User acceptance testing',
				],
				highlight: '99.9% accuracy guarantee',
			},
			{
				icon: Rocket,
				title: 'Deployment & Go-Live',
				duration: '1-2 weeks',
				description:
					'Seamless deployment with minimal operational disruption, comprehensive staff training, and real-time monitoring setup.',
				deliverables: [
					'Live system',
					'Training materials',
					'Monitoring dashboards',
					'Support documentation',
				],
				highlight: 'Zero-downtime deployment',
			},
			{
				icon: Headphones,
				title: 'Support & Optimization',
				duration: 'Ongoing',
				description:
					'24/7 monitoring, continuous performance optimization, and proactive maintenance to ensure sustained value delivery.',
				deliverables: [
					'Performance reports',
					'Optimization recommendations',
					'System updates',
					'Strategic insights',
				],
				highlight: 'Continuous improvement',
			},
			{
				icon: TrendingUp,
				title: 'Scale & Evolution',
				duration: 'Ongoing',
				description:
					'Regular reviews and strategic enhancements to scale solutions as your business grows and market conditions evolve.',
				deliverables: [
					'Scaling roadmap',
					'Feature enhancements',
					'Market insights',
					'Future planning',
				],
				highlight: 'Future-ready solutions',
			},
		],
		methodologyPrinciples: [
			{
				icon: Users,
				title: 'Partnership Approach',
				description:
					'We work as an extension of your team, ensuring deep understanding of your business objectives and challenges.',
			},
			{
				icon: BarChart3,
				title: 'Data-Driven Decisions',
				description:
					'Every recommendation and solution component is backed by comprehensive data analysis and proven methodologies.',
			},
			{
				icon: Zap,
				title: 'Agile Implementation',
				description:
					'Flexible, iterative development with regular feedback loops and rapid adaptation to changing requirements.',
			},
			{
				icon: CheckCircle,
				title: 'Measurable Results',
				description:
					'Clear KPIs, regular progress reporting, and guaranteed performance improvements with measurable ROI.',
			},
		],
		testimonials: [
			{
				quote:
					"ITSC's methodology ensured we saw immediate improvements even during implementation. Their partnership approach made us feel supported throughout the entire journey.",
				author: 'Sarah Al-Rashid',
				position: 'Supply Chain Director',
				company: 'Middle East Logistics Corp',
				results: '35% cost reduction in 6 months',
			},
			{
				quote:
					"The agile approach allowed us to adapt quickly to market changes. ITSC's team became an integral part of our operations, not just a vendor.",
				author: 'James Chen',
				position: 'Operations Manager',
				company: 'Global Trade Solutions',
				results: '60% efficiency improvement',
			},
		],
		labels: {
			keyDeliverables: 'Key Deliverables:',
			methodology: 'Our Methodology',
			ctaTitle: 'Ready to Start Your AI Transformation?',
			ctaDescription:
				"Begin your journey with a comprehensive assessment. Let's identify how AI can transform your supply chain operations and drive measurable results.",
			ctaButton: 'Start Free Assessment',
			ctaSecondary: 'Schedule a Consultation',
		},
	},
	ar: {
		stages: [
			{
				icon: Search,
				title: 'الاكتشاف والتقييم',
				duration: '1-2 أسابيع',
				description:
					'تحليل شامل لعمليات سلسلة التوريد الحالية، وتحديد نقاط الألم والفرص وتحديد مقاييس النجاح.',
				deliverables: [
					'تحليل الحالة الحالية',
					'تقييم الفجوات',
					'توقعات العائد على الاستثمار',
					'خارطة طريق المشروع',
				],
				highlight: 'إنشاء خط أساس مدفوع بالبيانات',
			},
			{
				icon: FileText,
				title: 'التخطيط الاستراتيجي',
				duration: '1-2 أسابيع',
				description:
					'التطوير التعاوني لاستراتيجية مخصصة للذكاء الاصطناعي/الأتمتة متوافقة مع أهدافك التجارية ومتطلباتك التشغيلية.',
				deliverables: [
					'هيكل الحل',
					'اختيار مجموعة التقنيات',
					'جدول زمني للتنفيذ',
					'تخصيص الموارد',
				],
				highlight: 'إطار عمل المنهجية المرنة',
			},
			{
				icon: Lightbulb,
				title: 'تصميم الحل',
				duration: '2-3 أسابيع',
				description:
					'تصميم خوارزميات ذكاء اصطناعي مخصصة وتدفقات أتمتة، مع دمج أفضل الممارسات الصناعية وقيودك التشغيلية المحددة.',
				deliverables: [
					'المواصفات التقنية',
					'نماذج أولية للواجهة',
					'خطط التكامل',
					'معايير الأداء',
				],
				highlight: 'نهج التصميم المتمحور حول العميل',
			},
			{
				icon: Code,
				title: 'التطوير والتكوين',
				duration: '4-8 أسابيع',
				description:
					'التطوير المرن لحل الذكاء الاصطناعي مع مراجعات منتظمة، والتكامل المستمر، ودمج ملاحظات العميل في الوقت الفعلي.',
				deliverables: [
					'نماذج أولية عاملة',
					'تكاملات API',
					'خطوط أنابيب البيانات',
					'تطبيقات الأمان',
				],
				highlight: 'التعاون المستمر مع العميل',
			},
			{
				icon: TestTube,
				title: 'الاختبار والتحقق',
				duration: '2-3 أسابيع',
				description:
					'اختبار صارم في بيئات محاكاة ومتحكم فيها، مما يضمن الدقة والموثوقية وتحسين الأداء.',
				deliverables: [
					'نتائج الاختبار',
					'تقارير الأداء',
					'ضمان الجودة',
					'اختبار قبول المستخدم',
				],
				highlight: 'ضمان دقة 9.99%',
			},
			{
				icon: Rocket,
				title: 'النشر والتشغيل',
				duration: '1-2 أسابيع',
				description:
					'نشر سلس مع الحد الأدنى من الاضطراب التشغيلي، والتدريب الشامل للموظفين، وإعداد المراقبة في الوقت الفعلي.',
				deliverables: [
					'النظام المباشر',
					'مواد التدريب',
					'لوحات مراقبة',
					'وثائق الدعم',
				],
				highlight: 'نشر بدون توقف',
			},
			{
				icon: Headphones,
				title: 'الدعم والتحسين',
				duration: 'مستمر',
				description:
					'مراقبة على مدار الساعة، وتحسين الأداء المستمر، والصيانة الاستباقية لضمان تقديم القيمة المستدامة.',
				deliverables: [
					'تقارير الأداء',
					'توصيات التحسين',
					'تحديثات النظام',
					'رؤى استراتيجية',
				],
				highlight: 'التحسين المستمر',
			},
			{
				icon: TrendingUp,
				title: 'التوسع والتطور',
				duration: 'مستمر',
				description:
					'مراجعات منتظمة وتحسينات استراتيجية لتوسيع الحلول مع نمو عملك وتطور ظروف السوق.',
				deliverables: [
					'خارطة طريق التوسع',
					'تحسينات الميزات',
					'رؤى السوق',
					'التخطيط المستقبلي',
				],
				highlight: 'حلول جاهزة للمستقبل',
			},
		],
		methodologyPrinciples: [
			{
				icon: Users,
				title: 'نهج الشراكة',
				description:
					'نعمل كامتداد لفريقك، مما يضمن فهماً عميقاً لأهدافك التجارية وتحدياتك.',
			},
			{
				icon: BarChart3,
				title: 'القرارات المدفوعة بالبيانات',
				description:
					'كل توصية ومكون حل مدعوم بتحليل البيانات الشامل والمنهجيات المثبتة.',
			},
			{
				icon: Zap,
				title: 'التنفيذ المرن',
				description:
					'تطوير مرن وتكراري مع حلقات ملاحظات منتظمة وتكيف سريع مع المتطلبات المتغيرة.',
			},
			{
				icon: CheckCircle,
				title: 'نتائج قابلة للقياس',
				description:
					'مؤشرات أداء رئيسية واضحة، وتقارير تقدم منتظمة، وتحسينات أداء مضمونة مع عائد استثمار قابل للقياس.',
			},
		],
		testimonials: [
			{
				quote:
					'ضمنت منهجية ITSC رؤية تحسينات فورية حتى أثناء التنفيذ. جعلنا نهج الشراكة الخاص بهم نشعر بالدعم طوال الرحلة بأكملها.',
				author: 'سارة الراشد',
				position: 'مديرة سلسلة التوريد',
				company: 'شركة الشرق الأوسط للخدمات اللوجستية',
				results: 'خفض التكاليف بنسبة 35% في 6 أشهر',
			},
			{
				quote:
					'سمح النهج المرن بالتكيف بسرعة مع تغيرات السوق. أصبح فريق ITSC جزءاً لا يتجزأ من عملياتنا، وليس مجرد مورد.',
				author: 'جيمس تشين',
				position: 'مدير العمليات',
				company: 'شركة حلول التجارة العالمية',
				results: 'تحسين الكفاءة بنسبة 60%',
			},
		],
		labels: {
			keyDeliverables: 'المخرجات الرئيسية:',
			methodology: 'منهجيتنا',
			ctaTitle: 'هل أنت مستعد لبدء تحولك في الذكاء الاصطناعي؟',
			ctaDescription:
				'ابدأ رحلتك بتقييم شامل. دعنا نحدد كيف يمكن للذكاء الاصطناعي أن يحول عمليات سلسلة التوريد لديك ويحقق نتائج قابلة للقياس.',
			ctaButton: 'ابدأ التقييم المجاني',
			ctaSecondary: 'جدولة استشارة',
		},
	},
};
