import {
	DollarSign,
	MessageCircle,
	Settings,
	Shield,
	Users,
	Zap,
} from 'lucide-react';

export const faqData = {
	en: {
		categories: [
			{
				id: 'all',
				title: 'All Categories',
				icon: Settings,
				color: 'text-gray-600',
				bgColor: 'bg-gray-50 dark:bg-gray-900/20',
			},
			{
				id: 'services',
				title: 'Services & Solutions',
				icon: Settings,
				color: 'text-blue-600',
				bgColor: 'bg-blue-50 dark:bg-blue-900/20',
			},
			{
				id: 'benefits',
				title: 'AI & Automation Benefits',
				icon: Zap,
				color: 'text-green-600',
				bgColor: 'bg-green-50 dark:bg-green-900/20',
			},
			{
				id: 'implementation',
				title: 'Implementation Process',
				icon: Users,
				color: 'text-purple-600',
				bgColor: 'bg-purple-50 dark:bg-purple-900/20',
			},
			{
				id: 'security',
				title: 'Security & Privacy',
				icon: Shield,
				color: 'text-red-600',
				bgColor: 'bg-red-50 dark:bg-red-900/20',
			},
			{
				id: 'pricing',
				title: 'Pricing & Investment',
				icon: DollarSign,
				color: 'text-yellow-600',
				bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
			},
			{
				id: 'support',
				title: 'Support & Maintenance',
				icon: MessageCircle,
				color: 'text-indigo-600',
				bgColor: 'bg-indigo-50 dark:bg-indigo-900/20',
			},
		],
		faqs: [
			{
				category: 'services',
				question:
					'What specific AI and automation solutions does ITSC offer for supply chain management?',
				answer:
					'ITSC provides comprehensive AI and automation solutions including: Predictive Analytics for demand forecasting with 95%+ accuracy, Automated Warehouse Management systems with robotics integration, AI-Powered Route Optimization reducing fuel costs by 30-40%, Real-Time Supply Chain Visibility platforms, Fleet Management with predictive maintenance, Risk Management systems, and Process Automation solutions. Each solution is customized to address specific supply chain challenges and integrate seamlessly with existing systems.',
			},
			{
				category: 'services',
				question:
					"How does ITSC's AI technology differ from traditional supply chain management systems?",
				answer:
					"Unlike traditional rule-based systems, ITSC's AI solutions use machine learning algorithms that continuously learn and adapt from data patterns. Our systems provide predictive insights rather than reactive responses, automate complex decision-making processes, and optimize operations in real-time. Traditional systems typically require manual updates and can't adapt to changing conditions, while our AI solutions evolve automatically to improve performance over time.",
			},
			{
				category: 'services',
				question:
					'Can ITSC solutions integrate with existing ERP and WMS systems?',
				answer:
					'Yes, ITSC solutions are designed with integration-first architecture. We support seamless integration with major ERP systems (SAP, Oracle, Microsoft Dynamics), WMS platforms (Manhattan, Blue Yonder, Infor), and TMS solutions. Our API-first approach ensures minimal disruption to existing operations while maximizing the value of your current technology investments. We also provide custom integration services for proprietary systems.',
			},
			{
				category: 'benefits',
				question:
					"What measurable benefits can we expect from implementing ITSC's AI solutions?",
				answer:
					'Based on our client results, typical benefits include: 30-40% reduction in operational costs, 25-60% improvement in efficiency metrics, 85-95% accuracy in predictive analytics, 70-80% reduction in manual tasks, 40-85% decrease in stockouts or delays, and ROI typically achieved within 6-12 months. Specific results vary by industry and implementation scope, but we guarantee measurable improvements with clear KPIs.',
			},
			{
				category: 'benefits',
				question:
					'How does AI improve demand forecasting accuracy compared to traditional methods?',
				answer:
					"ITSC's AI-powered demand forecasting analyzes hundreds of variables including historical sales patterns, seasonal trends, weather data, economic indicators, social media sentiment, and market events. Our machine learning models achieve 95-98% accuracy compared to 60-70% accuracy of traditional statistical methods. The AI continuously learns from new data, automatically adjusting for market changes and improving predictions over time.",
			},
			{
				category: 'implementation',
				question:
					"How long does it typically take to implement ITSC's AI solutions?",
				answer:
					'Implementation timelines vary by solution complexity and scope. Typical timeframes are: Demand Forecasting (6-10 weeks), Route Optimization (4-8 weeks), Warehouse Automation (12-20 weeks), Supply Chain Visibility (8-12 weeks), and Risk Management (6-10 weeks). We use agile methodology with phased rollouts to minimize disruption and deliver value incrementally. Pilot implementations can often be completed in 2-4 weeks.',
			},
			{
				category: 'implementation',
				question:
					'What level of disruption should we expect during implementation?',
				answer:
					'ITSC follows a zero-disruption deployment methodology. We implement solutions in parallel with existing systems, conduct thorough testing in controlled environments, and use phased rollouts with fallback procedures. Most implementations occur during planned maintenance windows or low-activity periods. Our team provides 24/7 support during go-live to ensure smooth transitions.',
			},
			{
				category: 'security',
				question:
					'How does ITSC ensure data security and protect sensitive supply chain information?',
				answer:
					'ITSC implements enterprise-grade security measures including: End-to-end encryption for data in transit and at rest, Multi-factor authentication and role-based access controls, Regular security audits and penetration testing, Compliance with ISO 27001, SOC 2, and GDPR standards, Secure cloud infrastructure with 99.9% uptime SLA, and Data residency options to meet local regulations. We also provide detailed security documentation and compliance reports.',
			},
			{
				category: 'pricing',
				question:
					"What are ITSC's pricing models and what factors influence the cost?",
				answer:
					'ITSC offers flexible pricing models: Subscription-based SaaS (monthly/annual), Project-based implementation fees, Hybrid models combining both, and Performance-based pricing tied to achieved results. Costs depend on solution complexity, data volume, number of users, integration requirements, and support level. We provide detailed ROI analysis and typically guarantee payback within 12-18 months.',
			},
			{
				category: 'support',
				question:
					'What ongoing support and maintenance services does ITSC provide?',
				answer:
					'ITSC provides comprehensive support including: 24/7 technical support with guaranteed response times, Proactive system monitoring and maintenance, Regular software updates and feature enhancements, Performance optimization and tuning, User training and documentation updates, and Strategic consulting for system expansion. Support levels range from basic to premium with customizable SLAs.',
			},
			{
				category: 'services',
				question:
					'What warehouse automation solutions does ITSC provide?',
				answer:
					'ITSC provides comprehensive warehouse automation solutions including: High-Density Storage and AS/RS Systems (Automated Storage and Retrieval Systems) for maximizing vertical space utilization, Advanced Robotics and Mobile Fleet Integration with AMRs/AGVs for flexible material handling, Goods-to-Person (G2P) solutions that reduce walking time by up to 60%, Robotic Picking and Sorting systems with AI vision for high-speed, accurate operations, and Complete Software Intelligence Stack (WMS, WES, WCS) for 100% real-time monitoring and inventory traceability. Our solutions are designed to transform warehouses from cost centers into high-efficiency operational hubs.',
			},
			{
				category: 'benefits',
				question:
					'What are the key benefits of warehouse automation?',
				answer:
					'Warehouse automation delivers significant operational and financial benefits: Operational Efficiency with 25% average increase in overall productivity and 50-75% reduction in order processing times, Cost and Labor Reduction with 30-50% reductions in labor costs and up to 50% speed increases in picking and storing operations, Space Optimization with 10-20% improvement in space utilization and up to 85% reduction in required warehouse footprint, Scalability allowing facilities to expand operations by 20-40% without proportional cost increases, and Enhanced Safety through comprehensive engineering that mitigates risks associated with manual handling. These improvements typically result in ROI achievement within 12-18 months.',
			},
		],
		labels: {
			searchPlaceholder: 'Search questions...',
			noResults: 'No questions found',
			noResultsDescription: 'Try adjusting your search or category filter',
			showAllQuestions: 'Show All Questions',
			contactSupport: 'Contact Support',
			contactSupportDescription: "Didn't find what you're looking for?",
		},
	},
	ar: {
		categories: [
			{
				id: 'all',
				title: 'جميع الفئات',
				icon: Settings,
				color: 'text-gray-600',
				bgColor: 'bg-gray-50 dark:bg-gray-900/20',
			},
			{
				id: 'services',
				title: 'الخدمات والحلول',
				icon: Settings,
				color: 'text-blue-600',
				bgColor: 'bg-blue-50 dark:bg-blue-900/20',
			},
			{
				id: 'benefits',
				title: 'فوائد الذكاء الاصطناعي والأتمتة',
				icon: Zap,
				color: 'text-green-600',
				bgColor: 'bg-green-50 dark:bg-green-900/20',
			},
			{
				id: 'implementation',
				title: 'عملية التنفيذ',
				icon: Users,
				color: 'text-purple-600',
				bgColor: 'bg-purple-50 dark:bg-purple-900/20',
			},
			{
				id: 'security',
				title: 'الأمان والخصوصية',
				icon: Shield,
				color: 'text-red-600',
				bgColor: 'bg-red-50 dark:bg-red-900/20',
			},
			{
				id: 'pricing',
				title: 'التسعير والاستثمار',
				icon: DollarSign,
				color: 'text-yellow-600',
				bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
			},
			{
				id: 'support',
				title: 'الدعم والصيانة',
				icon: MessageCircle,
				color: 'text-indigo-600',
				bgColor: 'bg-indigo-50 dark:bg-indigo-900/20',
			},
		],
		faqs: [
			{
				category: 'services',
				question:
					'ما هي حلول الذكاء الاصطناعي والأتمتة المحددة التي تقدمها ITSC لإدارة سلسلة التوريد؟',
				answer:
					'تقدم ITSC حلول ذكاء اصطناعي وأتمتة شاملة تشمل: التحليلات التنبؤية لتوقع الطلب بدقة تزيد عن 95%، أنظمة إدارة المستودعات الآلية مع تكامل الروبوتات، تحسين المسارات المدعوم بالذكاء الاصطناعي يقلل تكاليف الوقود بنسبة 30-40%، منصات رؤية سلسلة التوريد في الوقت الفعلي، إدارة الأسطول مع الصيانة التنبؤية، أنظمة إدارة المخاطر، وحلول أتمتة العمليات. كل حل مخصص لمعالجة تحديات سلسلة التوريد المحددة والتكامل بسلاسة مع الأنظمة الموجودة.',
			},
			{
				category: 'services',
				question:
					'كيف تختلف تكنولوجيا الذكاء الاصطناعي لـ ITSC عن أنظمة إدارة سلسلة التوريد التقليدية؟',
				answer:
					'على عكس الأنظمة التقليدية القائمة على القواعد، تستخدم حلول الذكاء الاصطناعي من ITSC خوارزميات التعلم الآلي التي تتعلم وتتكيف باستمرار من أنماط البيانات. تقدم أنظمتنا رؤى تنبؤية بدلاً من الاستجابات التفاعلية، وتؤتمت عمليات صنع القرار المعقدة، وتحسن العمليات في الوقت الفعلي. تتطلب الأنظمة التقليدية عادة تحديثات يدوية ولا يمكنها التكيف مع الظروف المتغيرة، بينما تتطور حلول الذكاء الاصطناعي الخاصة بنا تلقائياً لتحسين الأداء مع الوقت.',
			},
			{
				category: 'services',
				question: 'هل يمكن لحلول ITSC التكامل مع أنظمة ERP و WMS الموجودة؟',
				answer:
					'نعم، حلول ITSC مصممة بهيكل التكامل أولاً. ندعم التكامل السلس مع أنظمة ERP الرئيسية (SAP، Oracle، Microsoft Dynamics)، منصات WMS (Manhattan، Blue Yonder، Infor)، وحلول TMS. نهجنا القائم على API يضمن الحد الأدنى من التعطيل للعمليات الموجودة مع تعظيم قيمة استثماراتك التكنولوجية الحالية. نقدم أيضاً خدمات تكامل مخصصة للأنظمة الخاصة.',
			},
			{
				category: 'benefits',
				question:
					'ما هي الفوائد القابلة للقياس التي يمكننا توقعها من تنفيذ حلول الذكاء الاصطناعي من ITSC؟',
				answer:
					'بناءً على نتائج عملائنا، تشمل الفوائد النموذجية: انخفاض 30-40% في التكاليف التشغيلية، تحسن 25-60% في مقاييس الكفاءة، دقة 85-95% في التحليلات التنبؤية، انخفاض 70-80% في المهام اليدوية، انخفاض 40-85% في نفاد المخزون أو التأخير، وعادة ما يتحقق العائد على الاستثمار خلال 6-12 شهراً. تختلف النتائج المحددة حسب الصناعة ونطاق التنفيذ، لكننا نضمن تحسينات قابلة للقياس مع مؤشرات أداء رئيسية واضحة.',
			},
			{
				category: 'benefits',
				question:
					'كيف يحسن الذكاء الاصطناعي دقة التنبؤ بالطلب مقارنة بالطرق التقليدية؟',
				answer:
					'يحلل التنبؤ بالطلب المدعوم بالذكاء الاصطناعي من ITSC مئات المتغيرات بما في ذلك أنماط المبيعات التاريخية والاتجاهات الموسمية وبيانات الطقس والمؤشرات الاقتصادية ومشاعر وسائل التواصل الاجتماعي وأحداث السوق. تحقق نماذج التعلم الآلي الخاصة بنا دقة 95-98% مقارنة بدقة 60-70% للطرق الإحصائية التقليدية. يتعلم الذكاء الاصطناعي باستمرار من البيانات الجديدة، ويتكيف تلقائياً مع تغيرات السوق ويحسن التنبؤات مع الوقت.',
			},
			{
				category: 'implementation',
				question:
					'كم من الوقت يستغرق عادة تنفيذ حلول الذكاء الاصطناعي من ITSC؟',
				answer:
					'تختلف الجداول الزمنية للتنفيذ حسب تعقيد الحل ونطاقه. الأطر الزمنية النموذجية هي: التنبؤ بالطلب (6-10 أسابيع)، تحسين المسارات (4-8 أسابيع)، أتمتة المستودعات (12-20 أسبوع)، رؤية سلسلة التوريد (8-12 أسبوع)، وإدارة المخاطر (6-10 أسابيع). نستخدم منهجية رشيقة مع عمليات طرح متدرجة لتقليل التعطيل وتقديم القيمة تدريجياً. يمكن غالباً إكمال التنفيذات التجريبية في 2-4 أسابيع.',
			},
			{
				category: 'implementation',
				question: 'ما مستوى التعطيل الذي يجب أن نتوقعه أثناء التنفيذ؟',
				answer:
					'تتبع ITSC منهجية نشر بدون تعطيل. ننفذ الحلول بالتوازي مع الأنظمة الموجودة، ونقوم بالاختبار الشامل في بيئات محكومة، ونستخدم عمليات طرح متدرجة مع إجراءات الرجوع. تحدث معظم التنفيذات خلال نوافذ الصيانة المخططة أو فترات النشاط المنخفض. يقدم فريقنا دعماً على مدار الساعة أثناء التشغيل لضمان انتقالات سلسة.',
			},
			{
				category: 'security',
				question:
					'كيف تضمن ITSC أمان البيانات وحماية معلومات سلسلة التوريد الحساسة؟',
				answer:
					'تنفذ ITSC تدابير أمنية على مستوى المؤسسة تشمل: التشفير من طرف إلى طرف للبيانات أثناء النقل والتخزين، المصادقة متعددة العوامل وضوابط الوصول القائمة على الأدوار، عمليات تدقيق أمني منتظمة واختبار الاختراق، الامتثال لمعايير ISO 27001 و SOC 2 و GDPR، بنية تحتية سحابية آمنة مع اتفاقية مستوى خدمة بنسبة 99.9%، وخيارات إقامة البيانات لتلبية اللوائح المحلية. نقدم أيضاً وثائق أمنية مفصلة وتقارير امتثال.',
			},
			{
				category: 'pricing',
				question:
					'ما هي نماذج التسعير لـ ITSC وما العوامل التي تؤثر على التكلفة؟',
				answer:
					'تقدم ITSC نماذج تسعير مرنة: SaaS قائم على الاشتراك (شهري/سنوي)، رسوم تنفيذ قائمة على المشروع، نماذج مختلطة تجمع بين الاثنين، وتسعير قائم على الأداء مرتبط بالنتائج المحققة. تعتمد التكاليف على تعقيد الحل وحجم البيانات وعدد المستخدمين ومتطلبات التكامل ومستوى الدعم. نقدم تحليل العائد على الاستثمار المفصل وعادة ما نضمن الاسترداد خلال 12-18 شهراً.',
			},
			{
				category: 'support',
				question: 'ما خدمات الدعم والصيانة المستمرة التي تقدمها ITSC؟',
				answer:
					'تقدم ITSC دعماً شاملاً يشمل: دعم تقني على مدار الساعة مع أوقات استجابة مضمونة، مراقبة وصيانة النظام الاستباقية، تحديثات البرامج المنتظمة وتحسينات الميزات، تحسين الأداء والضبط، تدريب المستخدمين وتحديثات الوثائق، والاستشارات الاستراتيجية لتوسيع النظام. تتراوح مستويات الدعم من الأساسي إلى المتميز مع اتفاقيات مستوى خدمة قابلة للتخصيص.',
			},
			{
				category: 'services',
				question: 'ما حلول أتمتة المستودعات التي تقدمها ITSC؟',
				answer:
					'تقدم ITSC حلول أتمتة مستودعات شاملة تشمل: أنظمة التخزين عالي الكثافة وAS/RS (أنظمة التخزين والاسترجاع الآلية) لتعظيم استخدام المساحة العمودية، الروبوتات المتقدمة وتكامل الأسطول المتنقل مع AMRs/AGVs للمعالجة المرنة للمواد، حلول من البضائع إلى الشخص (G2P) التي تقلل وقت المشي بنسبة تصل إلى 60%، أنظمة الاختيار والفرز الروبوتية مع رؤية الذكاء الاصطناعي للعمليات عالية السرعة والدقة، ومكدس ذكاء البرمجيات الكامل (WMS، WES، WCS) لمراقبة 100% في الوقت الفعلي وتتبع المخزون. مصممة حلولنا لتحويل المستودعات من مراكز تكلفة إلى محاور تشغيلية عالية الكفاءة.',
			},
			{
				category: 'benefits',
				question: 'ما هي الفوائد الرئيسية لأتمتة المستودعات؟',
				answer:
					'توفر أتمتة المستودعات فوائد تشغيلية ومالية كبيرة: الكفاءة التشغيلية مع متوسط زيادة 25% في الإنتاجية الإجمالية وتقليل 50-75% في أوقات معالجة الطلبات، تقليل التكلفة والعمالة مع تقليل 30-50% في تكاليف العمالة وزيادة السرعة بنسبة تصل إلى 50% في عمليات الاختيار والتخزين، تحسين المساحة مع تحسين 10-20% في استخدام المساحة وتقليل يصل إلى 85% في البصمة المطلوبة للمستودع، القابلية للتوسع مما يسمح للمنشآت بتوسيع العمليات بنسبة 20-40% دون زيادات تكلفة متناسبة، والأمان المحسن من خلال الهندسة الشاملة التي تخفف المخاطر المرتبطة بالمعالجة اليدوية. عادة ما تؤدي هذه التحسينات إلى تحقيق العائد على الاستثمار خلال 12-18 شهراً.',
			},
		],
		labels: {
			searchPlaceholder: 'ابحث في الأسئلة...',
			noResults: 'لا توجد أسئلة',
			noResultsDescription: 'حاول تعديل البحث أو مرشح الفئة',
			showAllQuestions: 'إظهار جميع الأسئلة',
			contactSupport: 'هل لا تزال لديك أسئلة؟',
			contactSupportDescription:
				'خبراؤنا في سلسلة التوريد جاهزون للإجابة على أسئلتك المحددة ومناقشة كيف يمكن لـ ITSC تحويل عملياتك. احصل على رؤى مخصصة لتحدياتك الفريدة.',
		},
	},
};
