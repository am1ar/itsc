import { getDictionary } from '@/get-dictionary';
import { i18n, Locale } from '@/i18n-config';
import { Dictionary } from '@/types/dictionary';
import ScmPageContent, {
	ScmPageConfig,
} from '../components/ScmPageContent';

export default async function LogisticsTechnologyInnovationPage({
	params,
}: {
	params: Promise<{ lang: Locale }>;
}) {
	const { lang } = await params;
	const validLang = i18n.locales.includes(lang) ? lang : i18n.defaultLocale;
	const dictionary = (await getDictionary(validLang)) as Dictionary;

	const page: ScmPageConfig = {
		id: 'logistics-technology-innovation',
		title: 'Technology & Innovation in Logistics',
		heroKicker: 'AI, IoT & Custom Platforms',
		heroDescription:
			'This hub explains how ITSC uses AI, IoT, digital twins, and custom software to power next-generation logistics. We connect strategy, architecture, and execution so that every technology investment translates into measurable business outcomes.',
		overviewTitle: 'Making Logistics Technology Work for the Business',
		overviewBody: [
			'Technology in logistics is evolving rapidly—new WMS releases, robotics platforms, visibility tools, and control towers appear every year. Without a clear strategy and architecture, it is easy to accumulate disconnected tools that add complexity but not value.',
			'ITSC helps clients define a technology roadmap that starts from business objectives: service expectations, growth plans, cost targets, and sustainability commitments. We then identify which capabilities should be delivered by standard products, which require custom development, and how all components will communicate.',
			'Our role does not end at design. We support vendor selection, implementation oversight, and ongoing optimization, ensuring that systems are adopted by users and embedded into daily operations rather than remaining “shelfware.”',
		],
		aiTitle:
			'AI, IoT, Digital Twins, and System Architecture by ITSC',
		aiBody: [
			'ITSC’s AI capabilities span demand forecasting, routing, anomaly detection, and prescriptive recommendations. We deploy these models via microservices that can be consumed by TMS, WMS, and control-tower applications, making advanced analytics a native part of everyday workflows.',
			'IoT and telematics devices—on trucks, in warehouses, and on assets—stream real-time data about location, temperature, utilization, and condition. Our architecture ingests and normalizes these feeds so that they can be analyzed together with transactional data, enabling visibility, predictive maintenance, and process automation.',
			'For strategic planning, ITSC builds digital-twin models of logistics networks that simulate flows, constraints, and investments. These twins help leadership test scenarios such as opening new DCs, adding automation, or changing service-level promises before making large CAPEX or OPEX commitments.',
		],
		capabilitiesTitle: 'Technology & Innovation Capabilities',
		capabilities: [
			{
				title: 'Logistics Technology Roadmapping',
				description:
					'End-to-end roadmaps that link business strategy with specific capabilities in TMS, WMS, YMS, analytics, and automation.',
			},
			{
				title: 'System Architecture & Integration',
				description:
					'API-first, event-driven architectures that connect legacy platforms with new cloud-native components.',
			},
			{
				title: 'AI & Advanced Analytics Platform',
				description:
					'Reusable models and data pipelines that support forecasting, optimization, and decision support across logistics domains.',
			},
			{
				title: 'IoT & Telematics Integration',
				description:
					'Device strategy, connectivity, and data processing for vehicles, assets, and facilities.',
			},
			{
				title: 'Control Towers & Custom Applications',
				description:
					'User-centric apps and control panels built on top of data and integration layers to orchestrate day-to-day operations.',
			},
			{
				title: 'Innovation Governance',
				description:
					'Operating models that prioritize pilots, measure ROI, and industrialize successful innovations.',
			},
		],
		outcomesTitle: 'Technology Outcomes You Can Measure',
		outcomes: [
			{
				title: 'Higher ROI on technology spend',
				description:
					'Investments are guided by business cases and integrated into operations rather than remaining side projects.',
			},
			{
				title: 'Reduced integration and maintenance burden',
				description:
					'Clear architecture and standards cut the cost and risk of connecting systems and onboarding new partners.',
			},
			{
				title: 'Faster innovation cycles',
				description:
					'Modular platforms and reusable components allow new capabilities to be delivered in weeks, not years.',
			},
			{
				title: 'Future-ready logistics stack',
				description:
					'Your organization can adopt new tools or replace components without destabilizing the entire ecosystem.',
			},
		],
		useCasesTitle: 'Sample Technology & Innovation Use Cases',
		useCases: [
			{
				title: 'Building a Logistics Control Tower Platform',
				challenge:
					'Multiple legacy systems and data silos prevented a global shipper from gaining end-to-end visibility or coordinating decisions across modes and regions.',
				solution:
					'ITSC designed a control-tower architecture, implemented a data platform, and built role-based applications that surface AI insights from transportation, warehouse, and inventory data.',
				impact:
					'The client gained real-time visibility and scenario-planning capabilities, improving service KPIs while identifying multimillion-dollar cost opportunities.',
			},
			{
				title: 'IoT-Enabled Yard and Fleet Operations',
				challenge:
					'A logistics provider lacked accurate, real-time information on yard assets and vehicle conditions, leading to delays and unplanned downtime.',
				solution:
					'ITSC integrated IoT sensors, telematics, and YMS/TMS data into a unified platform with dashboards and alerts for dispatch, maintenance, and yard teams.',
				impact:
					'Vehicle availability improved, yard congestion dropped, and maintenance costs were reduced through earlier detection of issues.',
			},
		],
	};

	return <ScmPageContent dictionary={dictionary} lang={validLang} page={page} />;
}


