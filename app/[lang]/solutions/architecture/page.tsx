import { getDictionary } from '@/get-dictionary';
import { i18n, Locale } from '@/i18n-config';
import { Dictionary } from '@/types/dictionary';
import ServiceDetailContent from '../components/ServiceDetailContent';

export default async function SystemArchitecturePage({
	params,
}: {
	params: Promise<{ lang: Locale }>;
}) {
	const { lang } = await params;
	const validLang = i18n.locales.includes(lang) ? lang : i18n.defaultLocale;
	const dictionary = (await getDictionary(validLang)) as Dictionary;

	const content = {
		icon: 'Code' as const,
		hero: {
			title: lang === 'ar' ? 'هندسة الأنظمة والتطوير' : 'System Architecture & Development',
			subtitle: lang === 'ar' 
				? 'بناء أنظمة برمجيات النقل المخصصة'
				: 'Building Custom Transportation Software Ecosystems',
			description: lang === 'ar'
				? 'تصميم وتطوير أنظمة برمجيات النقل المخصصة المصممة خصيصاً لاحتياجات عملك الفريدة. توفر ITSC خدمات هندسة أنظمة شاملة تشمل تصميم البنية المعمارية، والتطوير المخصص، والتكامل المؤسسي، وإنشاء واجهات برمجية قابلة للتوسع. نحن نبني منصات قوية ومرنة يمكنها التكيف مع احتياجات عملك المتطورة.'
				: 'Design and develop custom transportation software systems tailored specifically to your unique business needs. ITSC provides comprehensive system architecture services including architecture design, custom development, enterprise integration, and scalable API development. We build robust, flexible platforms that can adapt to your evolving business requirements.'
		},
		definition: {
			title: lang === 'ar' ? 'ما هي هندسة الأنظمة والتطوير؟' : 'What is System Architecture & Development?',
			content: lang === 'ar'
				? 'هندسة الأنظمة والتطوير هي عملية تصميم وبناء أنظمة برمجيات مخصصة تجمع بين مكونات متعددة لإنشاء منصة موحدة تدعم عمليات النقل والخدمات اللوجستية. يتضمن ذلك تصميم البنية المعمارية التقنية، وتطوير التطبيقات المخصصة، وإنشاء واجهات برمجية (APIs) للتكامل، وضمان قابلية التوسع والأمان والأداء. يتجاوز هذا الحل الحلول الجاهزة من خلال توفير أنظمة مصممة خصيصاً لتلبية المتطلبات الفريدة لعملك، مع إمكانية التكامل السلس مع الأنظمة الحالية والتكيف مع النمو المستقبلي.'
				: 'System Architecture & Development is the process of designing and building custom software systems that combine multiple components to create a unified platform supporting transportation and logistics operations. This includes technical architecture design, custom application development, API creation for integration, and ensuring scalability, security, and performance. This solution goes beyond off-the-shelf solutions by providing systems specifically designed to meet the unique requirements of your business, with seamless integration capabilities with existing systems and adaptability for future growth.',
			challenge: lang === 'ar'
				? 'الشركات اليوم تواجه تحديات كبيرة في إدارة أنظمة برمجيات النقل المتعددة التي غالباً ما تكون غير متوافقة أو غير قادرة على التكيف مع احتياجاتها المتخصصة. الحلول الجاهزة قد لا تلبي المتطلبات الفريدة، بينما الأنظمة القديمة قد لا تدعم التكامل الحديث أو التوسع. بدون هندسة أنظمة مناسبة، تواجه الشركات تحديات في التكامل، وقابلية التوسع، والصيانة، والأمان. علاوة على ذلك، مع تطور العمليات وتغير المتطلبات، تحتاج الشركات لأنظمة مرنة يمكنها التكيف بسرعة.'
				: 'Companies today face significant challenges managing multiple transportation software systems that are often incompatible or unable to adapt to their specialized needs. Off-the-shelf solutions may not meet unique requirements, while legacy systems may not support modern integration or scaling. Without proper system architecture, companies face challenges with integration, scalability, maintenance, and security. Moreover, as operations evolve and requirements change, companies need flexible systems that can adapt quickly.'
		},
		approach: {
			title: lang === 'ar' ? 'نهج ITSC في هندسة الأنظمة' : 'ITSC\'s Approach to System Architecture',
			content: lang === 'ar'
				? 'تستخدم ITSC منهجية هندسة أنظمة شاملة تبدأ بفهم عميق لمتطلبات عملك وتحدياته. نحن نتبع ممارسات هندسة البرمجيات الحديثة، بما في ذلك التصميم المعماري، والتطوير المدفوع بالمجال (DDD)، والبنية المعمارية الدقيقة (Microservices)، والتصميم الموجه للأحداث (Event-Driven Architecture). نطور واجهات برمجية موحدة (RESTful APIs و GraphQL) تسمح بالتكامل السلس مع الأنظمة الحالية، مع ضمان قابلية التوسع العالية والأمان والأداء.'
				: 'ITSC employs a comprehensive system architecture methodology that begins with deep understanding of your business requirements and challenges. We follow modern software engineering practices, including architectural design, Domain-Driven Design (DDD), Microservices Architecture, and Event-Driven Architecture. We develop unified APIs (RESTful APIs and GraphQL) that enable seamless integration with existing systems, while ensuring high scalability, security, and performance.',
			technologies: [
				{
					title: lang === 'ar' ? 'البنية المعمارية الدقيقة' : 'Microservices Architecture',
					description: lang === 'ar'
						? 'تصميم معياري يستخدم خدمات مستقلة قابلة للتوسع والتطوير والنشر بشكل منفصل، مما يضمن المرونة والقابلية للتوسع.'
						: 'Modular design using independent services that can be scaled, developed, and deployed separately, ensuring flexibility and scalability.'
				},
				{
					title: lang === 'ar' ? 'واجهات برمجية موحدة' : 'Unified APIs',
					description: lang === 'ar'
						? 'تطوير واجهات برمجية RESTful و GraphQL موحدة تسمح بالتكامل السلس بين الأنظمة المختلفة وتسهل التواصل.'
						: 'Development of unified RESTful and GraphQL APIs that enable seamless integration between different systems and facilitate communication.'
				},
				{
					title: lang === 'ar' ? 'التكامل المؤسسي' : 'Enterprise Integration',
					description: lang === 'ar'
						? 'تكامل شامل مع أنظمة ERP، وأنظمة إدارة المستودعات، ومنصات التجارة الإلكترونية باستخدام معايير صناعية موحدة.'
						: 'Comprehensive integration with ERP systems, warehouse management systems, and e-commerce platforms using unified industry standards.'
				},
				{
					title: lang === 'ar' ? 'التصميم الموجه للأحداث' : 'Event-Driven Architecture',
					description: lang === 'ar'
						? 'بنية معمارية تستجيب للأحداث في الوقت الفعلي، مما يتيح الاتصال غير المتزامن والاستجابة السريعة للتغييرات.'
						: 'Architecture that responds to real-time events, enabling asynchronous communication and rapid response to changes.'
				}
			]
		},
		benefits: {
			title: lang === 'ar' ? 'الفوائد والعائد على الاستثمار' : 'Key Benefits & ROI',
			content: lang === 'ar'
				? 'توفر هندسة الأنظمة المخصصة عائداً قوياً على الاستثمار من خلال تحسين الكفاءة التشغيلية، وتقليل التكاليف، وزيادة المرونة. تظهر الشركات التي تنفذ أنظمة مخصصة تحسينات كبيرة في التكامل، وقابلية التوسع، والأداء، مع تقليل التكاليف التشغيلية.'
				: 'Custom system architecture delivers strong return on investment through improved operational efficiency, reduced costs, and increased flexibility. Companies implementing custom systems show significant improvements in integration, scalability, and performance, with reduced operational costs.',
			roi: [
				{
					metric: lang === 'ar' ? 'تحسين الكفاءة' : 'Efficiency Improvement',
					value: '35-50%',
					description: lang === 'ar'
						? 'تحسين الكفاءة التشغيلية من خلال الأنظمة المخصصة والتحسين المحسّن'
						: 'Improved operational efficiency through custom systems and enhanced optimization'
				},
				{
					metric: lang === 'ar' ? 'تقليل التكاليف' : 'Cost Reduction',
					value: '25-40%',
					description: lang === 'ar'
						? 'تقليل التكاليف التشغيلية من خلال الأتمتة والتكامل المحسّن'
						: 'Reduced operational costs through automation and improved integration'
				},
				{
					metric: lang === 'ar' ? 'قابلية التوسع' : 'Scalability',
					value: '10x',
					description: lang === 'ar'
						? 'قابلية التوسع للمعالجة المتزايدة والنمو المستقبلي'
						: 'Scalability to handle increased processing and future growth'
				}
			]
		},
		integration: {
			title: lang === 'ar' ? 'التكامل مع الأنظمة الحالية' : 'Integration with Existing Systems',
			content: lang === 'ar'
				? 'تصمم أنظمة ITSC المخصصة للاندماج بسلاسة مع البنية التحتية التقنية الحالية. نحن نستخدم واجهات برمجية موحدة ومعايير صناعية مفتوحة لضمان التكامل مع أنظمة ERP، وأنظمة إدارة المستودعات، ومنصات التجارة الإلكترونية، وأنظمة إدارة علاقات العملاء. يتم التكامل بطريقة غير مدمرة، مما يعني أنه لا يتطلب تغييرات كبيرة في الأنظمة الحالية ويضمن انتقالاً سلساً.'
				: 'ITSC\'s custom systems are designed to integrate seamlessly with existing technical infrastructure. We use unified APIs and open industry standards to ensure integration with ERP systems, warehouse management systems, e-commerce platforms, and customer relationship management systems. Integration is performed in a non-disruptive manner, meaning it requires no major changes to existing systems and ensures a smooth transition.'
		},
		cta: {
			title: lang === 'ar' ? 'ابدأ بناء نظامك المخصص' : 'Start Building Your Custom System',
			description: lang === 'ar'
				? 'اكتشف كيف يمكن لهندسة الأنظمة المخصصة تحويل عملياتك. احجز استشارة مجانية لمناقشة متطلباتك.'
				: 'Discover how custom system architecture can transform your operations. Schedule a free consultation to discuss your requirements.',
			buttonText: lang === 'ar' ? 'احجز استشارة' : 'Schedule Consultation',
			buttonLink: `/${lang}/contact`
		}
	};

	return <ServiceDetailContent dictionary={dictionary} lang={validLang} content={content} />;
}


