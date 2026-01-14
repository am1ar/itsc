import { getDictionary } from '@/get-dictionary';
import { i18n, Locale } from '@/i18n-config';
import { Dictionary } from '@/types/dictionary';
import ScmPageContent, {
	ScmPageConfig,
} from '../components/ScmPageContent';

export default async function TransportationManagementPage({
	params,
}: {
	params: Promise<{ lang: Locale }>;
}) {
	const { lang } = await params;
	const validLang = i18n.locales.includes(lang) ? lang : i18n.defaultLocale;
	const dictionary = (await getDictionary(validLang)) as Dictionary;

	const page: ScmPageConfig = {
		id: 'transportation-management',
		title: 'Transportation Management',
		heroKicker: 'AI-Enabled TMS',
		heroDescription:
			'ITSC modernizes transportation management by tightly integrating AI route optimization, fleet management, and carrier collaboration. We wrap your existing TMS with advanced analytics and automation to continuously improve cost, service, and asset utilization.',
		overviewTitle: 'Turning Transportation into a Self-Optimizing System',
		overviewBody: [
			'Transportation often represents the largest single element of logistics cost, yet many organizations still rely on static routing rules, manual tenders, and limited performance insight. As networks grow more complex, these approaches struggle to balance service commitments with budget constraints.',
			'ITSC’s transportation management solutions augment your TMS with dynamic planning and real-time decision support. Orders are automatically clustered into the right trips, modes, and service levels based on capacity, constraints, and evolving priorities. Dispatchers see clear recommendations rather than starting from a blank slate.',
			'By connecting transportation execution with inventory and warehouse data, we ensure that what is planned can actually be fulfilled. This end-to-end perspective reduces rework, failed deliveries, and the need for expensive last-minute rearrangements.',
		],
		aiTitle:
			'AI, Transportation Data Analytics, and Integration with Route Optimization & Fleet',
		aiBody: [
			'ITSC consumes detailed transportation data from telematics, ELDs, driver apps, traffic and weather services, and historical lane performance. Machine learning models produce realistic, continuously updated travel-time estimates and ETAs—far beyond static distance tables.',
			'These models feed our route optimization and fleet management engines. For each planning cycle, the system searches millions of route and load combinations to identify lower-cost, higher-service options that respect time windows, driver hours, and asset constraints. When disruptions occur during the day, the engine re-optimizes in near real time, suggesting re-sequencing stops or reassigning vehicles.',
			'System architecture is API-first and modular, enabling ITSC to integrate with your current TMS and carriers without disruption. We also expose transportation KPIs—such as cost per lane, on-time performance by carrier, and asset utilization—through interactive dashboards that directly connect to underlying execution data.',
		],
		capabilitiesTitle: 'Transportation Management Capabilities',
		capabilities: [
			{
				title: 'Dynamic Route & Load Optimization',
				description:
					'AI-driven planning for multi-stop, multi-day, and multi-modal routes, integrated with your existing route optimization initiatives.',
			},
			{
				title: 'Fleet & Carrier Orchestration',
				description:
					'Smart allocation across private fleet and external carriers based on cost, performance history, and real-time availability.',
			},
			{
				title: 'Real-Time Track & Trace',
				description:
					'End-to-end visibility into shipment status and exceptions through telematics, mobile apps, and carrier integrations.',
			},
			{
				title: 'Automated Tendering & Settlement',
				description:
					'Configurable rules and workflows that streamline carrier tendering, confirmations, proof-of-delivery capture, and freight audit.',
			},
			{
				title: 'Performance Analytics & Lane Strategy',
				description:
					'Analytics models evaluate lanes, service levels, and carriers, informing procurement and continuous-improvement programs.',
			},
			{
				title: 'Scenario Planning & “What-If” Simulation',
				description:
					'Tools to simulate volume shifts, network changes, or new service promises before committing to operational changes.',
			},
		],
		outcomesTitle: 'Transportation Outcomes You Can Measure',
		outcomes: [
			{
				title: '10–20% transportation cost reduction',
				description:
					'Through better routing, increased fill rates, reduced empty miles, and smarter mode and carrier selection.',
			},
			{
				title: 'Higher on-time performance',
				description:
					'Predictive ETAs and exception alerts reduce missed windows and failed deliveries across all modes.',
			},
			{
				title: 'Increased asset utilization',
				description:
					'Private fleets achieve more productive miles per vehicle, while contracts with carriers are aligned to true demand.',
			},
			{
				title: 'Reduced planning and dispatch effort',
				description:
					'Planners shift from manual schedule building to supervising and refining AI-generated transportation plans.',
			},
		],
		useCasesTitle: 'Sample Transportation Management Use Cases',
		useCases: [
			{
				title: 'Dynamic Routing for a Home-Delivery Network',
				challenge:
					'A retailer running fixed routes struggled with high failed-delivery rates and underutilized vehicles as order patterns shifted daily.',
				solution:
					'ITSC implemented dynamic route optimization integrated with the existing TMS and customer booking system. Routes are rebuilt each day based on confirmed orders, traffic, and driver constraints, with real-time re-optimization when customers reschedule.',
				impact:
					'Delivery cost-per-stop dropped by 14%, failed deliveries decreased by 22%, and customer satisfaction scores rose significantly thanks to more accurate ETAs.',
			},
			{
				title: 'Hybrid Fleet Strategy for a Manufacturer',
				challenge:
					'A manufacturer used a mix of private fleet and contract carriers but lacked transparent view of cost and performance to decide the optimal split.',
				solution:
					'ITSC connected TMS, telematics, and carrier invoices into a unified analytics layer. We then configured optimization rules that designate when to use private versus external capacity based on lane, time-of-day, and capacity constraints.',
				impact:
					'The client shifted 18% of volume into the most economical capacity while improving on-time delivery and reducing transportation spend by 11% within the first year.',
			},
		],
	};

	return <ScmPageContent dictionary={dictionary} lang={validLang} page={page} />;
}


