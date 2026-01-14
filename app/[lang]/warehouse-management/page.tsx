import { getDictionary } from '@/get-dictionary';
import { i18n, Locale } from '@/i18n-config';
import { Dictionary } from '@/types/dictionary';
import ScmPageContent, {
	ScmPageConfig,
} from '../components/ScmPageContent';

export default async function WarehouseManagementPage({
	params,
}: {
	params: Promise<{ lang: Locale }>;
}) {
	const { lang } = await params;
	const validLang = i18n.locales.includes(lang) ? lang : i18n.defaultLocale;
	const dictionary = (await getDictionary(validLang)) as Dictionary;

	const page: ScmPageConfig = {
		id: 'warehouse-management',
		title: 'Warehouse Management',
		heroKicker: 'Intelligent Warehousing',
		heroDescription:
			'ITSC designs and operates intelligent warehouses where WMS, automation, and analytics work together. We connect your Warehouse Management System with robotics, AS/RS, and labor planning to create fast, accurate, and scalable fulfillment centers.',
		overviewTitle: 'From Manual Warehouses to Intelligent Fulfillment Hubs',
		overviewBody: [
			'Warehouses sit at the heart of the supply chain, yet many still rely on paper processes, basic scanning, and tribal knowledge to keep goods moving. As order profiles become more complex and labor markets tighten, these approaches struggle to meet service expectations.',
			'ITSC’s warehouse management solutions begin with a process-first view of your inbound, storage, picking, packing, and outbound flows. We then align physical layout, storage media, automation options, and WMS configuration so that every movement inside the building is intentional and measurable.',
			'Whether you operate a conventional facility or are investing in high-bay AS/RS and robotics, ITSC ensures each element is orchestrated through the WMS and supporting software layers. This orchestration translates directly into higher throughput, better accuracy, and more predictable labor needs.',
		],
		aiTitle:
			'AI, WMS/WES/WCS, and Data-Driven Warehouse Optimization',
		aiBody: [
			'ITSC uses historical order, inventory, and handling data from your WMS to model demand patterns at SKU and location level. AI-powered slotting recommends optimal locations for products based on velocity, affinity, and handling characteristics, reducing travel time and congestion on the floor.',
			'We design and implement the full warehouse software stack—including WMS, Warehouse Execution Systems (WES), and Warehouse Control Systems (WCS)—so that automation assets such as conveyors, shuttles, and AMRs are synchronized with human tasks. Real-time dashboards show queue lengths, bottlenecks, and resource utilization, enabling supervisors to react instantly.',
			'Our architecture approach ensures seamless integration with ITSC’s broader logistics ecosystem: transportation management, inventory optimization, and demand planning. This allows warehouse decisions (like wave release timing or replenishment) to be driven by upstream and downstream realities rather than static rules.',
		],
		capabilitiesTitle: 'Warehouse Management Capabilities',
		capabilities: [
			{
				title: 'WMS Design, Implementation & Optimization',
				description:
					'Blueprinting and configuring WMS workflows across receiving, put-away, picking, packing, and shipping, tailored to your network and product mix.',
			},
			{
				title: 'Intelligent Slotting & Layout Design',
				description:
					'AI-driven slotting strategies and layout recommendations that reduce travel distance and improve picker productivity.',
			},
			{
				title: 'Labor Planning & Task Interleaving',
				description:
					'Forecast-based labor plans combined with task interleaving rules that keep people and equipment working productively.',
			},
			{
				title: 'Automation & Robotics Integration',
				description:
					'End-to-end integration of AS/RS, AMRs/AGVs, and sortation equipment via WES/WCS to deliver consistent, reliable performance.',
			},
			{
				title: 'Operational Dashboards & KPIs',
				description:
					'Real-time visibility into throughput, errors, utilization, and backlog so supervisors can manage proactively.',
			},
			{
				title: 'Safety, Compliance & Scalability',
				description:
					'Designs that respect safety and regulatory standards while enabling future expansion and automation upgrades.',
			},
		],
		outcomesTitle: 'Warehouse Outcomes You Can Measure',
		outcomes: [
			{
				title: '15–30% productivity improvement',
				description:
					'Optimized slotting, travel paths, and automation increase picks per hour and reduce overtime requirements.',
			},
			{
				title: 'Higher inventory and order accuracy',
				description:
					'Structured processes and system-based checks reduce mis-picks, shrink, and corrections.',
			},
			{
				title: 'Reduced order cycle time',
				description:
					'Better coordination between waves, replenishment, and packing compresses time from order release to ship confirmation.',
			},
			{
				title: 'Scalable peak performance',
				description:
					'Facilities can handle seasonal or promotional spikes without linear increases in labor cost.',
			},
		],
		useCasesTitle: 'Sample Warehouse Management Use Cases',
		useCases: [
			{
				title: 'E‑Commerce DC Modernization',
				challenge:
					'An e‑commerce fulfillment center faced long picking routes, frequent errors, and could not keep up with peak volumes without hiring large numbers of temporary workers.',
				solution:
					'ITSC redesigned the layout, implemented AI-based slotting, and integrated AMRs into the WMS via a WES layer. We introduced structured wave planning and real-time dashboards for supervisors.',
				impact:
					'Picking productivity increased by 27%, order accuracy exceeded 99.8%, and the client managed peak season with 20% fewer temporary staff than previous years.',
			},
			{
				title: 'High-Bay AS/RS Integration for a Manufacturer',
				challenge:
					'A manufacturer investing in a new high-bay AS/RS needed to ensure that automation integrated cleanly with existing ERP and downstream shipping processes.',
				solution:
					'ITSC designed the WMS, WCS, and integration architecture, mapped detailed material flows, and configured exception handling so the AS/RS could operate as part of a unified warehouse system.',
				impact:
					'Storage capacity more than doubled within the same footprint, dock-to-stock time fell by 35%, and the project achieved a payback period of under four years.',
			},
		],
	};

	return <ScmPageContent dictionary={dictionary} lang={validLang} page={page} />;
}


