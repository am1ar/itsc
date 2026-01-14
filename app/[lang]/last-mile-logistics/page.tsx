import { getDictionary } from '@/get-dictionary';
import { i18n, Locale } from '@/i18n-config';
import { Dictionary } from '@/types/dictionary';
import ScmPageContent, {
	ScmPageConfig,
} from '../components/ScmPageContent';

export default async function LastMileLogisticsPage({
	params,
}: {
	params: Promise<{ lang: Locale }>;
}) {
	const { lang } = await params;
	const validLang = i18n.locales.includes(lang) ? lang : i18n.defaultLocale;
	const dictionary = (await getDictionary(validLang)) as Dictionary;

	const page: ScmPageConfig = {
		id: 'last-mile-logistics',
		title: 'Last Mile Logistics',
		heroKicker: 'Customer-Centric Delivery',
		heroDescription:
			'ITSC optimizes the most visible and complex part of logistics—the last mile. We use dynamic routing, real-time data, and customer experience tools to deliver reliably while controlling cost per stop.',
		overviewTitle: 'Designing High-Performance Last Mile Networks',
		overviewBody: [
			'Last mile logistics is where customer expectations are highest and operational complexity is greatest. Dense urban routes, narrow delivery windows, and diverse parcel profiles create a challenging environment for planners and drivers alike.',
			'ITSC designs last mile operations that align delivery models, fleet composition, depot locations, and service offerings with your brand promise. We help you decide when to operate your own fleet, when to use partners, and how to integrate crowdsourced capacity when appropriate.',
			'By connecting last mile with upstream order management, warehouse operations, and transportation planning, we ensure that delivery promises made to customers are realistic and achievable.',
		],
		aiTitle:
			'AI Routing, Telemetics, and Experience Design for Last Mile',
		aiBody: [
			'Our route-optimization engines generate efficient, constraint-aware plans that consider time windows, traffic, vehicle capacity, and driver hours. As conditions change throughout the day—new orders, cancellations, congestion—the system can re-optimize routes and relay updates to drivers via mobile applications.',
			'Telematics and mobile tracking provide real-time visibility into delivery progress, feeding ETA predictions and exception alerts. These feed customer-facing notifications and internal dashboards so that customer service teams always know what is happening on the road.',
			'We also help design the digital experience around delivery: communication templates, rescheduling options, proof-of-delivery flows, and feedback mechanisms that turn last mile from a cost center into a relationship-building touchpoint.',
		],
		capabilitiesTitle: 'Last Mile Logistics Capabilities',
		capabilities: [
			{
				title: 'Network & Delivery Model Design',
				description:
					'Definition of depot locations, delivery territories, and partner mix aligned to service levels and cost targets.',
			},
			{
				title: 'Dynamic Route Optimization',
				description:
					'AI-based routing that adapts to changing order patterns and real-world conditions in near real time.',
			},
			{
				title: 'Driver Tools & Mobility',
				description:
					'Mobile applications for navigation, task management, proof-of-delivery, and communication.',
			},
			{
				title: 'Customer Experience Design',
				description:
					'End-to-end design of notifications, tracking portals, and delivery options that match your brand promise.',
			},
			{
				title: 'Performance & Cost Analytics',
				description:
					'Metrics such as cost per stop, first-attempt success rate, and customer satisfaction tracked at route and depot level.',
			},
			{
				title: 'Integration with TMS & OMS',
				description:
					'Architecture that connects last mile decisions to upstream order management and transportation planning.',
			},
		],
		outcomesTitle: 'Last Mile Outcomes You Can Measure',
		outcomes: [
			{
				title: 'Reduced delivery cost per stop',
				description:
					'Optimized routing and better utilization reduce miles and time per delivery.',
			},
			{
				title: 'Higher first-attempt success rate',
				description:
					'Better communication and scheduling reduce failed deliveries and re-delivery costs.',
			},
			{
				title: 'Improved customer satisfaction and NPS',
				description:
					'Customers receive clearer expectations, timely updates, and more flexible options.',
			},
			{
				title: 'Greater flexibility during peaks',
				description:
					'Networks are designed to flex capacity during peak seasons without sacrificing service quality.',
			},
		],
		useCasesTitle: 'Sample Last Mile Logistics Use Cases',
		useCases: [
			{
				title: 'Home Delivery Optimization for a Retailer',
				challenge:
					'A retailer with growing e-commerce volumes faced rising last mile costs and declining on-time performance.',
				solution:
					'ITSC implemented dynamic routing, redesigned territories, and integrated customer communication tools into the delivery workflow.',
				impact:
					'Delivery cost-per-order dropped, on-time performance improved, and customer complaints decreased significantly.',
			},
			{
				title: 'Heavy-Goods Last Mile Network',
				challenge:
					'Deliveries of bulky, heavy items suffered from scheduling complexity and high failed-delivery rates.',
				solution:
					'ITSC redesigned booking processes, introduced better pre-delivery communication, and optimized routes and time slots for heavy-goods deliveries.',
				impact:
					'Failed deliveries decreased and capacity was used more efficiently, improving both customer experience and profitability.',
			},
		],
	};

	return <ScmPageContent dictionary={dictionary} lang={validLang} page={page} />;
}


