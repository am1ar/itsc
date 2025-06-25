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
				example:
					'For example, our demand forecasting solution helped Al-Noor Retail Group reduce stockouts by 85% and save $2.3M annually by analyzing historical sales data, weather patterns, local events, and economic indicators.',
			},
			{
				category: 'services',
				question:
					"How does ITSC's AI technology differ from traditional supply chain management systems?",
				answer:
					"Unlike traditional rule-based systems, ITSC's AI solutions use machine learning algorithms that continuously learn and adapt from data patterns. Our systems provide predictive insights rather than reactive responses, automate complex decision-making processes, and optimize operations in real-time. Traditional systems typically require manual updates and can't adapt to changing conditions, while our AI solutions evolve automatically to improve performance over time.",
				example:
					'Traditional route planning might use fixed algorithms, but our AI system dynamically adjusts routes based on real-time traffic, weather, vehicle capacity, and delivery priorities, resulting in 35% fuel savings for Desert Commerce Co.',
			},
			{
				category: 'services',
				question:
					'Can ITSC solutions integrate with existing ERP and WMS systems?',
				answer:
					'Yes, ITSC solutions are designed with integration-first architecture. We support seamless integration with major ERP systems (SAP, Oracle, Microsoft Dynamics), WMS platforms (Manhattan, Blue Yonder, Infor), and TMS solutions. Our API-first approach ensures minimal disruption to existing operations while maximizing the value of your current technology investments. We also provide custom integration services for proprietary systems.',
				example:
					"We successfully integrated our warehouse automation system with Gulf Express Logistics' existing SAP ERP and Manhattan WMS, achieving 300% throughput improvement without disrupting daily operations.",
			},
			{
				category: 'benefits',
				question:
					"What measurable benefits can we expect from implementing ITSC's AI solutions?",
				answer:
					'Based on our client results, typical benefits include: 30-40% reduction in operational costs, 25-60% improvement in efficiency metrics, 85-95% accuracy in predictive analytics, 70-80% reduction in manual tasks, 40-85% decrease in stockouts or delays, and ROI typically achieved within 6-12 months. Specific results vary by industry and implementation scope, but we guarantee measurable improvements with clear KPIs.',
				example:
					'Kingdom Transport Solutions achieved 78% reduction in unexpected breakdowns, $1.6M in maintenance cost savings, and 97% vehicle uptime after implementing our predictive maintenance solution.',
			},
			{
				category: 'benefits',
				question:
					'How does AI improve demand forecasting accuracy compared to traditional methods?',
				answer:
					"ITSC's AI-powered demand forecasting analyzes hundreds of variables including historical sales patterns, seasonal trends, weather data, economic indicators, social media sentiment, and market events. Our machine learning models achieve 95-98% accuracy compared to 60-70% accuracy of traditional statistical methods. The AI continuously learns from new data, automatically adjusting for market changes and improving predictions over time.",
				example:
					'Our forecasting system for Al-Noor Retail Group analyzes over 200 variables including local events, weather patterns, and economic indicators, achieving 96% accuracy and eliminating stockouts during peak seasons like Ramadan.',
			},
			{
				category: 'implementation',
				question:
					"How long does it typically take to implement ITSC's AI solutions?",
				answer:
					'Implementation timelines vary by solution complexity and scope. Typical timeframes are: Demand Forecasting (6-10 weeks), Route Optimization (4-8 weeks), Warehouse Automation (12-20 weeks), Supply Chain Visibility (8-12 weeks), and Risk Management (6-10 weeks). We use agile methodology with phased rollouts to minimize disruption and deliver value incrementally. Pilot implementations can often be completed in 2-4 weeks.',
				example:
					'We implemented our route optimization solution for Desert Commerce Co. in just 6 weeks, with immediate fuel savings visible from day one of go-live.',
			},
			{
				category: 'implementation',
				question:
					'What level of disruption should we expect during implementation?',
				answer:
					'ITSC follows a zero-disruption deployment methodology. We implement solutions in parallel with existing systems, conduct thorough testing in controlled environments, and use phased rollouts with fallback procedures. Most implementations occur during planned maintenance windows or low-activity periods. Our team provides 24/7 support during go-live to ensure smooth transitions.',
				example:
					'Gulf Express Logistics experienced zero operational downtime during our warehouse automation implementation, with the new system running parallel to existing operations until full transition.',
			},
			{
				category: 'security',
				question:
					'How does ITSC ensure data security and protect sensitive supply chain information?',
				answer:
					'ITSC implements enterprise-grade security measures including: End-to-end encryption for data in transit and at rest, Multi-factor authentication and role-based access controls, Regular security audits and penetration testing, Compliance with ISO 27001, SOC 2, and GDPR standards, Secure cloud infrastructure with 99.9% uptime SLA, and Data residency options to meet local regulations. We also provide detailed security documentation and compliance reports.',
				example:
					'For Gulf Trade Partners, we implemented blockchain-based data verification and encryption protocols that protected $500M+ in trade value while maintaining full audit trails for compliance.',
			},
			{
				category: 'pricing',
				question:
					"What are ITSC's pricing models and what factors influence the cost?",
				answer:
					'ITSC offers flexible pricing models: Subscription-based SaaS (monthly/annual), Project-based implementation fees, Hybrid models combining both, and Performance-based pricing tied to achieved results. Costs depend on solution complexity, data volume, number of users, integration requirements, and support level. We provide detailed ROI analysis and typically guarantee payback within 12-18 months.',
				example:
					'Al-Noor Retail Group chose our performance-based pricing model, paying based on inventory cost savings achieved. They recovered their investment in 8 months and continue to save $2.3M annually.',
			},
			{
				category: 'support',
				question:
					'What ongoing support and maintenance services does ITSC provide?',
				answer:
					'ITSC provides comprehensive support including: 24/7 technical support with guaranteed response times, Proactive system monitoring and maintenance, Regular software updates and feature enhancements, Performance optimization and tuning, User training and documentation updates, and Strategic consulting for system expansion. Support levels range from basic to premium with customizable SLAs.',
				example:
					'Gulf Express Logistics receives our premium support package with 15-minute response time for critical issues, monthly performance reviews, and quarterly optimization sessions that have improved system performance by 25%.',
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
				example:
					'على سبيل المثال، ساعد حل التنبؤ بالطلب الخاص بنا مجموعة النور للتجزئة في تقليل نفاد المخزون بنسبة 85% وتوفير 2.3 مليون دولار سنوياً من خلال تحليل بيانات المبيعات التاريخية وأنماط الطقس والأحداث المحلية والمؤشرات الاقتصادية.',
			},
			{
				category: 'services',
				question:
					'كيف تختلف تكنولوجيا الذكاء الاصطناعي لـ ITSC عن أنظمة إدارة سلسلة التوريد التقليدية؟',
				answer:
					'على عكس الأنظمة التقليدية القائمة على القواعد، تستخدم حلول الذكاء الاصطناعي من ITSC خوارزميات التعلم الآلي التي تتعلم وتتكيف باستمرار من أنماط البيانات. تقدم أنظمتنا رؤى تنبؤية بدلاً من الاستجابات التفاعلية، وتؤتمت عمليات صنع القرار المعقدة، وتحسن العمليات في الوقت الفعلي. تتطلب الأنظمة التقليدية عادة تحديثات يدوية ولا يمكنها التكيف مع الظروف المتغيرة، بينما تتطور حلول الذكاء الاصطناعي الخاصة بنا تلقائياً لتحسين الأداء مع الوقت.',
				example:
					'قد يستخدم تخطيط المسارات التقليدي خوارزميات ثابتة، لكن نظام الذكاء الاصطناعي الخاص بنا يعدل المسارات ديناميكياً بناءً على حركة المرور في الوقت الفعلي والطقس وسعة المركبة وأولويات التسليم، مما أدى إلى توفير 35% في الوقود لشركة ديزرت كوميرس.',
			},
			{
				category: 'services',
				question: 'هل يمكن لحلول ITSC التكامل مع أنظمة ERP و WMS الموجودة؟',
				answer:
					'نعم، حلول ITSC مصممة بهيكل التكامل أولاً. ندعم التكامل السلس مع أنظمة ERP الرئيسية (SAP، Oracle، Microsoft Dynamics)، منصات WMS (Manhattan، Blue Yonder، Infor)، وحلول TMS. نهجنا القائم على API يضمن الحد الأدنى من التعطيل للعمليات الموجودة مع تعظيم قيمة استثماراتك التكنولوجية الحالية. نقدم أيضاً خدمات تكامل مخصصة للأنظمة الخاصة.',
				example:
					'نجحنا في تكامل نظام أتمتة المستودعات الخاص بنا مع نظام SAP ERP و Manhattan WMS الموجودين لدى غلف إكسبرس لوجستيكس، محققين تحسن 300% في الإنتاجية دون تعطيل العمليات اليومية.',
			},
			{
				category: 'benefits',
				question:
					'ما هي الفوائد القابلة للقياس التي يمكننا توقعها من تنفيذ حلول الذكاء الاصطناعي من ITSC؟',
				answer:
					'بناءً على نتائج عملائنا، تشمل الفوائد النموذجية: انخفاض 30-40% في التكاليف التشغيلية، تحسن 25-60% في مقاييس الكفاءة، دقة 85-95% في التحليلات التنبؤية، انخفاض 70-80% في المهام اليدوية، انخفاض 40-85% في نفاد المخزون أو التأخير، وعادة ما يتحقق العائد على الاستثمار خلال 6-12 شهراً. تختلف النتائج المحددة حسب الصناعة ونطاق التنفيذ، لكننا نضمن تحسينات قابلة للقياس مع مؤشرات أداء رئيسية واضحة.',
				example:
					'حققت مملكة حلول النقل انخفاضاً بنسبة 78% في الأعطال غير المتوقعة، و1.6 مليون دولار في توفير تكاليف الصيانة، و97% من وقت تشغيل المركبات بعد تنفيذ حل الصيانة التنبؤية الخاص بنا.',
			},
			{
				category: 'benefits',
				question:
					'كيف يحسن الذكاء الاصطناعي دقة التنبؤ بالطلب مقارنة بالطرق التقليدية؟',
				answer:
					'يحلل التنبؤ بالطلب المدعوم بالذكاء الاصطناعي من ITSC مئات المتغيرات بما في ذلك أنماط المبيعات التاريخية والاتجاهات الموسمية وبيانات الطقس والمؤشرات الاقتصادية ومشاعر وسائل التواصل الاجتماعي وأحداث السوق. تحقق نماذج التعلم الآلي الخاصة بنا دقة 95-98% مقارنة بدقة 60-70% للطرق الإحصائية التقليدية. يتعلم الذكاء الاصطناعي باستمرار من البيانات الجديدة، ويتكيف تلقائياً مع تغيرات السوق ويحسن التنبؤات مع الوقت.',
				example:
					'يحلل نظام التنبؤ الخاص بنا لمجموعة النور للتجزئة أكثر من 200 متغير بما في ذلك الأحداث المحلية وأنماط الطقس والمؤشرات الاقتصادية، محققاً دقة 96% وإلغاء نفاد المخزون خلال المواسم الذروة مثل رمضان.',
			},
			{
				category: 'implementation',
				question:
					'كم من الوقت يستغرق عادة تنفيذ حلول الذكاء الاصطناعي من ITSC؟',
				answer:
					'تختلف الجداول الزمنية للتنفيذ حسب تعقيد الحل ونطاقه. الأطر الزمنية النموذجية هي: التنبؤ بالطلب (6-10 أسابيع)، تحسين المسارات (4-8 أسابيع)، أتمتة المستودعات (12-20 أسبوع)، رؤية سلسلة التوريد (8-12 أسبوع)، وإدارة المخاطر (6-10 أسابيع). نستخدم منهجية رشيقة مع عمليات طرح متدرجة لتقليل التعطيل وتقديم القيمة تدريجياً. يمكن غالباً إكمال التنفيذات التجريبية في 2-4 أسابيع.',
				example:
					'نفذنا حل تحسين المسارات الخاص بنا لشركة ديزرت كوميرس في 6 أسابيع فقط، مع توفير فوري في الوقود واضح من اليوم الأول للتشغيل.',
			},
			{
				category: 'implementation',
				question: 'ما مستوى التعطيل الذي يجب أن نتوقعه أثناء التنفيذ؟',
				answer:
					'تتبع ITSC منهجية نشر بدون تعطيل. ننفذ الحلول بالتوازي مع الأنظمة الموجودة، ونقوم بالاختبار الشامل في بيئات محكومة، ونستخدم عمليات طرح متدرجة مع إجراءات الرجوع. تحدث معظم التنفيذات خلال نوافذ الصيانة المخططة أو فترات النشاط المنخفض. يقدم فريقنا دعماً على مدار الساعة أثناء التشغيل لضمان انتقالات سلسة.',
				example:
					'لم تواجه غلف إكسبرس لوجستيكس أي توقف تشغيلي أثناء تنفيذ أتمتة المستودعات، مع تشغيل النظام الجديد بالتوازي مع العمليات الموجودة حتى الانتقال الكامل.',
			},
			{
				category: 'security',
				question:
					'كيف تضمن ITSC أمان البيانات وحماية معلومات سلسلة التوريد الحساسة؟',
				answer:
					'تنفذ ITSC تدابير أمنية على مستوى المؤسسة تشمل: التشفير من طرف إلى طرف للبيانات أثناء النقل والتخزين، المصادقة متعددة العوامل وضوابط الوصول القائمة على الأدوار، عمليات تدقيق أمني منتظمة واختبار الاختراق، الامتثال لمعايير ISO 27001 و SOC 2 و GDPR، بنية تحتية سحابية آمنة مع اتفاقية مستوى خدمة بنسبة 99.9%، وخيارات إقامة البيانات لتلبية اللوائح المحلية. نقدم أيضاً وثائق أمنية مفصلة وتقارير امتثال.',
				example:
					'لشركة غلف تريد بارتنرز، نفذنا بروتوكولات التحقق من البيانات والتشفير القائمة على البلوك تشين التي حمت أكثر من 500 مليون دولار في قيمة التجارة مع الحفاظ على مسارات تدقيق كاملة للامتثال.',
			},
			{
				category: 'pricing',
				question:
					'ما هي نماذج التسعير لـ ITSC وما العوامل التي تؤثر على التكلفة؟',
				answer:
					'تقدم ITSC نماذج تسعير مرنة: SaaS قائم على الاشتراك (شهري/سنوي)، رسوم تنفيذ قائمة على المشروع، نماذج مختلطة تجمع بين الاثنين، وتسعير قائم على الأداء مرتبط بالنتائج المحققة. تعتمد التكاليف على تعقيد الحل وحجم البيانات وعدد المستخدمين ومتطلبات التكامل ومستوى الدعم. نقدم تحليل العائد على الاستثمار المفصل وعادة ما نضمن الاسترداد خلال 12-18 شهراً.',
				example:
					'اختارت مجموعة النور للتجزئة نموذج التسعير القائم على الأداء، تدفع بناءً على توفير تكاليف المخزون المحققة. استردت استثمارها في 8 أشهر وتستمر في توفير 2.3 مليون دولار سنوياً.',
			},
			{
				category: 'support',
				question: 'ما خدمات الدعم والصيانة المستمرة التي تقدمها ITSC؟',
				answer:
					'تقدم ITSC دعماً شاملاً يشمل: دعم تقني على مدار الساعة مع أوقات استجابة مضمونة، مراقبة وصيانة النظام الاستباقية، تحديثات البرامج المنتظمة وتحسينات الميزات، تحسين الأداء والضبط، تدريب المستخدمين وتحديثات الوثائق، والاستشارات الاستراتيجية لتوسيع النظام. تتراوح مستويات الدعم من الأساسي إلى المتميز مع اتفاقيات مستوى خدمة قابلة للتخصيص.',
				example:
					'تتلقى غلف إكسبرس لوجستيكس حزمة الدعم المتميزة مع وقت استجابة 15 دقيقة للقضايا الحرجة، مراجعات أداء شهرية، وجلسات تحسين فصلية حسنت أداء النظام بنسبة 25%.',
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
