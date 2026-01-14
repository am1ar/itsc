import { getDictionary } from '@/get-dictionary';
import { i18n, Locale } from '@/i18n-config';
import { Dictionary } from '@/types/dictionary';
import ScmPageContent, {
	ScmPageConfig,
} from '../components/ScmPageContent';

export default async function LogisticsManagementPage({
	params,
}: {
	params: Promise<{ lang: Locale }>;
}) {
	const { lang } = await params;
	const validLang = i18n.locales.includes(lang) ? lang : i18n.defaultLocale;
	const dictionary = (await getDictionary(validLang)) as Dictionary;

	const page: ScmPageConfig = {
		id: 'logistics-management',
		title: 'Logistics Management',
		heroKicker: 'Control Tower Logistics',
		heroDescription:
			'ITSC unifies transportation, warehousing, inventory, and order flows into a single control tower. By combining AI, transportation data analytics, and robust system architecture, we transform fragmented, reactive logistics into an orchestrated, insight-driven operation.',
		overviewTitle: 'From Siloed Operations to an Integrated Logistics Control Tower',
		overviewBody: [
			'Most organizations still manage logistics through a patchwork of spreadsheets, regional tools, and manual coordination. Information moves slowly between transportation, warehousing, procurement, and customer service, making it hard to see true cost-to-serve or respond quickly when disruptions occur.',
			'ITSC’s logistics management approach replaces this fragmentation with a unified operational layer. We connect TMS, WMS, YMS, ERP, and telematics into a single data model so that every shipment, pallet, and order can be monitored and steered in real time. Instead of chasing exceptions, your teams work with a clear, prioritized picture of what matters most each day.',
			'We also embed governance into the operating model: standardized workflows, escalation paths, and KPIs for planners, dispatchers, and warehouse supervisors. This turns logistics from a black box into a controllable, continuously improving system that aligns tightly with commercial and financial goals.',
		],
		aiTitle:
			'How ITSC Uses AI, Transportation Analytics, and Software Platforms',
		aiBody: [
			'ITSC ingests high‑volume data streams from TMS, telematics, GPS, carrier portals, WMS events, and order systems. Machine learning models detect patterns such as lanes with chronic delays, customers at risk of missed OTIF, and distribution centers likely to hit capacity constraints. Predictive ETAs and risk scores feed directly into the control tower, helping planners intervene before service failures occur.',
			'We deploy optimization engines that propose better load building, mode selection, consolidation, and cross-dock strategies. These engines are not standalone tools—they are embedded into your day-to-day workflows through intuitive dashboards, alerts, and scenario-planning screens that operations teams can use without needing data-science skills.',
			'Underneath, our architects design a modular, API-first logistics platform that coexists with your current TMS, WMS, and ERP investments. Rather than forcing a rip-and-replace, ITSC adds an intelligent layer that orchestrates processes, exposes clean data to analytics, and makes it easier to plug in future technologies such as IoT sensors or digital-twin simulations.',
		],
		capabilitiesTitle: 'Core Logistics Management Capabilities',
		capabilities: [
			{
				title: 'End-to-End Visibility & Control',
				description:
					'Real-time milestones and predictive ETAs across ocean, air, road, and last mile—consolidated into role-based dashboards for executives, planners, and customer service.',
			},
			{
				title: 'Exception & Event Management',
				description:
					'AI-driven detection of dwell, missed cut-offs, capacity shortfalls, and cost anomalies with guided playbooks for resolution and automated notifications to partners.',
			},
			{
				title: 'Integrated Planning & Execution',
				description:
					'Link transportation plans with warehouse and inventory constraints so that routing, loading, and fulfillment decisions are made in a single, coherent model.',
			},
			{
				title: 'Partner & Carrier Collaboration',
				description:
					'Self-service portals and APIs for carriers, 3PLs, and suppliers to accept tenders, update statuses, and share documents without adding manual coordination overhead.',
			},
			{
				title: 'Governance, KPIs & Playbooks',
				description:
					'Standardized metrics, alerts, and operating procedures that ensure every site and region manages logistics in a consistent, measurable way.',
			},
			{
				title: 'Scalable, Secure Architecture',
				description:
					'Cloud-native, microservices-based design with clear integration patterns and data models, ensuring performance and resilience as volumes and geographies grow.',
			},
		],
		outcomesTitle: 'Business Outcomes for Logistics Leaders',
		outcomes: [
			{
				title: '5–15% reduction in total logistics cost',
				description:
					'Driven by better routing, consolidation, mode mix, and fewer premium expedites thanks to earlier risk visibility.',
			},
			{
				title: 'Improved OTIF and customer satisfaction',
				description:
					'Predictive ETAs and structured exception handling reduce surprises for customers and internal stakeholders.',
			},
			{
				title: '20–40% less manual coordination effort',
				description:
					'Automation replaces email and spreadsheets with guided workflows and system-to-system communication.',
			},
			{
				title: 'Higher resilience to disruption',
				description:
					'Scenario tools and network-wide visibility enable faster responses to capacity shocks, port issues, or demand spikes.',
			},
		],
		useCasesTitle: 'Sample Logistics Management Use Cases',
		useCases: [
			{
				title: 'Regional Control Tower for a Multi-Country Distributor',
				challenge:
					'A distributor operating across several countries had fragmented visibility, with each market running its own TMS and manual reporting. Leadership lacked a single source of truth for cost, service, and capacity.',
				solution:
					'ITSC implemented a regional control tower that aggregated TMS, WMS, and telematics data into a centralized analytics and workflow layer. AI models highlighted at-risk shipments, while standardized dashboards and alerts guided planners across all countries.',
				impact:
					'Within 9 months the client reduced premium freight by 18%, cut average lead times by 12%, and gained the ability to reassign volumes between carriers and hubs based on real-time performance.',
			},
			{
				title: 'Logistics Harmonization After a Merger',
				challenge:
					'Following an acquisition, a manufacturer operated multiple logistics processes and systems with inconsistent KPIs, making integration slow and costly.',
				solution:
					'ITSC designed a harmonized logistics operating model and data architecture. We connected legacy systems through APIs, defined a common KPI set, and rolled out a phased control-tower capability that could sit above both old and new platforms.',
				impact:
					'The client realized 11% logistics cost savings and shortened integration timelines for new sites from over 12 months to less than 6 months, with a clear roadmap for further automation.',
			},
		],
	};

	return <ScmPageContent dictionary={dictionary} lang={validLang} page={page} />;
}


