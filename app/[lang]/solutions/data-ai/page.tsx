import { getDictionary } from '@/get-dictionary';
import { i18n, Locale } from '@/i18n-config';
import { Dictionary } from '@/types/dictionary';
import ServiceDetailContent from '../components/ServiceDetailContent';

export default async function TransportDataAnalyticsPage({
	params,
}: {
	params: Promise<{ lang: Locale }>;
}) {
	const { lang } = await params;
	const validLang = i18n.locales.includes(lang) ? lang : i18n.defaultLocale;
	const dictionary = (await getDictionary(validLang)) as Dictionary;

	const content = {
		icon: 'BarChart3' as const,
		hero: {
			title: lang === 'ar' ? 'تحليل بيانات النقل والذكاء الاصطناعي' : 'Transport Data Analytics & AI',
			subtitle: lang === 'ar' 
				? 'استخدام البيانات الضخمة للتنبؤ بالاتجاهات اللوجستية'
				: 'Leveraging Big Data to Predict Logistics Trends',
			description: lang === 'ar'
				? 'تحويل البيانات الخام إلى رؤى استراتيجية قابلة للتنفيذ. تستخدم ITSC تقنيات الذكاء الاصطناعي والتعلم الآلي المتقدمة لتحليل كميات هائلة من بيانات النقل والخدمات اللوجستية، مما يسمح للشركات بالتنبؤ بالاتجاهات، وتحسين العمليات، واتخاذ قرارات مدفوعة بالبيانات تعزز الكفاءة التشغيلية والربحية.'
				: 'Transform raw data into actionable strategic insights. ITSC leverages advanced AI and machine learning technologies to analyze vast volumes of transportation and logistics data, enabling businesses to predict trends, optimize operations, and make data-driven decisions that enhance operational efficiency and profitability.'
		},
		definition: {
			title: lang === 'ar' ? 'ما هو تحليل بيانات النقل والذكاء الاصطناعي؟' : 'What is Transport Data Analytics & AI?',
			content: lang === 'ar'
				? 'تحليل بيانات النقل والذكاء الاصطناعي هو نظام شامل يجمع البيانات من مصادر متعددة في شبكة النقل الخاصة بك - بما في ذلك أنظمة تتبع الأسطول، وبيانات حركة المرور في الوقت الفعلي، ومعلومات الطلبات، ومقاييس الأداء التاريخية - ويستخدم خوارزميات التعلم الآلي المتقدمة لتحليل الأنماط، وتحديد الاتجاهات، وتوليد تنبؤات دقيقة. يتجاوز هذا الحل التحليلات التقليدية من خلال توفير رؤية استباقية لعمليات النقل، مما يتيح للشركات تحديد فرص التحسين قبل أن تتحول إلى مشاكل مكلفة.'
				: 'Transport Data Analytics & AI is a comprehensive system that aggregates data from multiple sources across your transportation network—including fleet tracking systems, real-time traffic data, order information, and historical performance metrics—and employs advanced machine learning algorithms to analyze patterns, identify trends, and generate accurate predictions. This solution goes beyond traditional analytics by providing proactive insights into transportation operations, enabling businesses to identify optimization opportunities before they become costly problems.',
			challenge: lang === 'ar'
				? 'تواجه الشركات اليوم تحديات غير مسبوقة في إدارة شبكات النقل المعقدة. مع تزايد أحجام البيانات وتعدد مصادر المعلومات، أصبح من الصعب استخراج رؤى قابلة للتنفيذ من البيانات الخام. بدون تحليل شامل مدعوم بالذكاء الاصطناعي، تفوت الشركات الفرص لتحسين المسارات، وتقليل التكاليف، وتحسين رضا العملاء. علاوة على ذلك، يمكن أن تؤدي القرارات القائمة على الحدس بدلاً من البيانات إلى أخطاء مكلفة وعدم كفاءة في استخدام الموارد.'
				: 'Businesses today face unprecedented challenges in managing complex transportation networks. With growing data volumes and multiple information sources, extracting actionable insights from raw data has become increasingly difficult. Without comprehensive AI-powered analytics, companies miss opportunities to optimize routes, reduce costs, and improve customer satisfaction. Moreover, decisions based on intuition rather than data can lead to costly mistakes and resource inefficiencies.'
		},
		approach: {
			title: lang === 'ar' ? 'نهج ITSC في تحليل بيانات النقل' : 'ITSC\'s Approach to Transport Data Analytics',
			content: lang === 'ar'
				? 'تستخدم ITSC منهجية متعددة الطبقات تجمع بين أحدث تقنيات الذكاء الاصطناعي، ومعالجة البيانات الضخمة، والنمذجة التنبؤية. نبدأ بإنشاء بنية بيانات قوية تجمع المعلومات من مصادر متعددة - بما في ذلك أجهزة الاستشعار في المركبات، وأنظمة ERP، ومنصات التجارة الإلكترونية، وبيانات الطقس والطرق. ثم نطبق خوارزميات التعلم الآلي المتخصصة، بما في ذلك النمذجة التنبؤية للسلاسل الزمنية، وتحليل التجميع، والتنبؤ بالطلب، لتحويل هذه البيانات إلى رؤى قابلة للتنفيذ.'
				: 'ITSC employs a multi-layered methodology that combines cutting-edge AI technologies, big data processing, and predictive modeling. We begin by establishing a robust data infrastructure that aggregates information from multiple sources—including vehicle sensors, ERP systems, e-commerce platforms, and weather and road condition data. We then apply specialized machine learning algorithms, including time-series predictive modeling, clustering analysis, and demand forecasting, to transform this data into actionable insights.',
			technologies: [
				{
					title: lang === 'ar' ? 'النمذجة التنبؤية للسلاسل الزمنية' : 'Time-Series Predictive Modeling',
					description: lang === 'ar'
						? 'خوارزميات متقدمة تحلل البيانات التاريخية لتحديد الأنماط الموسمية والدورية، مما يتيح التنبؤ الدقيق بأحجام الطلب، وأوقات العبور، ومتطلبات السعة المستقبلية.'
						: 'Advanced algorithms that analyze historical data to identify seasonal and cyclical patterns, enabling accurate predictions of demand volumes, transit times, and future capacity requirements.'
				},
				{
					title: lang === 'ar' ? 'تحليل التجميع والتصنيف' : 'Clustering and Classification Analysis',
					description: lang === 'ar'
						? 'تقنيات التعلم الآلي غير الخاضعة للإشراف التي تصنف المخزون، والمسارات، والعملاء إلى مجموعات ذات خصائص مماثلة، مما يسمح بالتحسين المستهدف والاستراتيجيات المخصصة.'
						: 'Unsupervised machine learning techniques that categorize inventory, routes, and customers into groups with similar characteristics, enabling targeted optimization and customized strategies.'
				},
				{
					title: lang === 'ar' ? 'تحليل البيانات الضخمة في الوقت الفعلي' : 'Real-Time Big Data Processing',
					description: lang === 'ar'
						? 'معمارية بيانات متطورة قادرة على معالجة ملايين نقاط البيانات في الثانية، مما يوفر تحديثات فورية عن الأداء التشغيلي والظروف المتغيرة.'
						: 'Advanced data architecture capable of processing millions of data points per second, providing instant updates on operational performance and changing conditions.'
				},
				{
					title: lang === 'ar' ? 'التعلم الآلي التنبؤي' : 'Predictive Machine Learning',
					description: lang === 'ar'
						? 'نماذج ML متطورة تتعلم باستمرار من البيانات الجديدة لتحسين دقة التنبؤات وتكيف مع الأنماط المتغيرة في عمليات النقل.'
						: 'Advanced ML models that continuously learn from new data to improve prediction accuracy and adapt to changing patterns in transportation operations.'
				}
			]
		},
		benefits: {
			title: lang === 'ar' ? 'الفوائد والعائد على الاستثمار' : 'Key Benefits & ROI',
			content: lang === 'ar'
				? 'يوفر تحليل بيانات النقل المدعوم بالذكاء الاصطناعي عوائد مالية وتشغيلية قابلة للقياس. من خلال التنبؤ الدقيق بالطلب وتحديد الأنماط التشغيلية، يمكن للشركات تقليل التكاليف بنسبة كبيرة، وتحسين كفاءة الأسطول، وزيادة رضا العملاء من خلال تسليمات أكثر موثوقية وسرعة.'
				: 'Transport data analytics powered by AI delivers measurable financial and operational returns. Through accurate demand forecasting and identification of operational patterns, companies can achieve significant cost reductions, improve fleet efficiency, and enhance customer satisfaction through more reliable and faster deliveries.',
			roi: [
				{
					metric: lang === 'ar' ? 'تقليل التكاليف' : 'Cost Reduction',
					value: '25-40%',
					description: lang === 'ar'
						? 'تخفيضات كبيرة في تكاليف الوقود والصيانة من خلال التحسين المستند إلى البيانات'
						: 'Significant reductions in fuel and maintenance costs through data-driven optimization'
				},
				{
					metric: lang === 'ar' ? 'دقة التنبؤ' : 'Forecast Accuracy',
					value: '95%+',
					description: lang === 'ar'
						? 'دقة تنبؤ محسّنة بشكل كبير لأحجام الطلب ومتطلبات السعة'
						: 'Dramatically improved accuracy in forecasting demand volumes and capacity requirements'
				},
				{
					metric: lang === 'ar' ? 'كفاءة الأسطول' : 'Fleet Efficiency',
					value: '30-50%',
					description: lang === 'ar'
						? 'تحسين استخدام الأسطول وتقليل أوقات التوقف'
						: 'Improved fleet utilization and reduced downtime'
				}
			]
		},
		integration: {
			title: lang === 'ar' ? 'التكامل مع العمليات الحالية' : 'Integration with Existing Operations',
			content: lang === 'ar'
				? 'تتكامل منصة تحليل بيانات النقل الخاصة بـ ITSC بسلاسة مع أنظمتك الحالية من خلال واجهات برمجية موحدة (APIs) ومعايير صناعية مفتوحة. نحن نضمن التكامل المباشر مع أنظمة تتبع الأسطول، وأنظمة إدارة المستودعات (WMS)، ومنصات ERP مثل SAP EWM و Oracle WMS و Microsoft Dynamics. يمكن للنظام أيضاً الاتصال بأنظمة إدارة الطلبات، ومنصات التجارة الإلكترونية، وأنظمة إدارة علاقات العملاء (CRM) لإنشاء رؤية شاملة عبر سلسلة التوريد بأكملها. يتم التكامل بطريقة غير مدمرة، مما يعني أنه لا يتطلب تغييرات كبيرة في عملياتك الحالية.'
				: 'ITSC\'s Transport Data Analytics platform integrates seamlessly with your existing systems through unified APIs and open industry standards. We ensure direct integration with fleet tracking systems, Warehouse Management Systems (WMS), and ERP platforms such as SAP EWM, Oracle WMS, and Microsoft Dynamics. The system can also connect to order management systems, e-commerce platforms, and Customer Relationship Management (CRM) systems to create a comprehensive view across your entire supply chain. Integration is performed in a non-disruptive manner, meaning it requires no major changes to your current operations.'
		},
		cta: {
			title: lang === 'ar' ? 'ابدأ تحليل بيانات النقل الخاص بك اليوم' : 'Start Analyzing Your Transport Data Today',
			description: lang === 'ar'
				? 'اكتشف كيف يمكن لتحليل بيانات النقل المدعوم بالذكاء الاصطناعي تحويل عملياتك وتحسين ربحيتك. تواصل معنا لجدولة استشارة مجانية وتقييم بياناتك.'
				: 'Discover how AI-powered transport data analytics can transform your operations and improve your profitability. Contact us to schedule a free consultation and data assessment.',
			buttonText: lang === 'ar' ? 'احجز استشارة مجانية' : 'Schedule Free Consultation',
			buttonLink: `/${lang}/contact`
		}
	};

	return <ServiceDetailContent dictionary={dictionary} lang={validLang} content={content} />;
}


