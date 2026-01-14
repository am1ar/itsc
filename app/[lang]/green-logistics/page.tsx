import { getDictionary } from '@/get-dictionary';
import { i18n, Locale } from '@/i18n-config';
import { Dictionary } from '@/types/dictionary';
import ScmPageContent, {
	ScmPageConfig,
} from '../components/ScmPageContent';

export default async function GreenLogisticsPage({
	params,
}: {
	params: Promise<{ lang: Locale }>;
}) {
	const { lang } = await params;
	const validLang = i18n.locales.includes(lang) ? lang : i18n.defaultLocale;
	const dictionary = (await getDictionary(validLang)) as Dictionary;

	const page: ScmPageConfig = {
		id: 'green-logistics',
		title: 'Sustainable & Green Logistics',
		heroKicker: 'Decarbonizing the Supply Chain',
		heroDescription:
			'ITSC embeds sustainability into everyday logistics decisions. We combine emissions data, optimization models, and system design to help you meet ESG targets while maintaining cost and service performance.',
		overviewTitle: 'Making Sustainability a Core Logistics Design Principle',
		overviewBody: [
			'Customers, regulators, and investors increasingly expect logistics operations to reduce their environmental footprint. However, many organizations treat sustainability as an afterthought—adding offset programs or isolated initiatives without redesigning the underlying network and processes.',
			'ITSC helps clients integrate sustainability directly into network design, mode choice, routing, and facility operations. We quantify emissions across modes and nodes, then use that insight to redesign flows, consolidate shipments, and select greener partners and technologies.',
			'Because sustainability is tightly linked to efficiency—fewer miles, better utilization, less waste—our programs often deliver cost savings alongside emissions reduction, making green logistics a business advantage rather than a trade-off.',
		],
		aiTitle:
			'Using Data, Optimization, and System Architecture for Green Logistics',
		aiBody: [
			'We build emissions-calculation engines that use standardized methodologies, carrier data, and real operational metrics to compute CO₂ footprints per shipment, lane, and facility. These engines plug into TMS, WMS, and planning tools so environmental impact can be considered alongside cost and service.',
			'Optimization models evaluate alternative network configurations, mode mixes, and routing patterns that reduce emissions while respecting commercial constraints. For example, they may recommend shifting volume from road to rail or ocean, or redesigning line-haul to enable more consolidation.',
			'At the facility level, ITSC integrates IoT data on energy usage and equipment performance to optimize lighting, HVAC, and material-handling operations. Our architecture ensures that sustainability metrics feed dashboards and ESG reporting tools in a reliable, auditable way.',
		],
		capabilitiesTitle: 'Green Logistics Capabilities',
		capabilities: [
			{
				title: 'Emissions Measurement & Reporting',
				description:
					'Shipment- and lane-level carbon accounting using transparent, standards-based methodologies integrated with operational systems.',
			},
			{
				title: 'Green Network & Route Design',
				description:
					'Network and routing optimization that explicitly consider emissions alongside cost and service-level requirements.',
			},
			{
				title: 'Mode & Carrier Strategy for Sustainability',
				description:
					'Data-driven strategies to shift volume to greener modes and carriers, including contractual and operational enablers.',
			},
			{
				title: 'Energy-Efficient Warehousing',
				description:
					'Design and operational changes in warehouses that reduce energy consumption and support renewable integration.',
			},
			{
				title: 'Sustainability Dashboards & ESG Integration',
				description:
					'Dashboards that expose logistics emissions data to ESG teams and leadership, with drill-downs for action planning.',
			},
			{
				title: 'Change Management & Communication',
				description:
					'Stakeholder alignment and external communication support to embed green logistics into brand and culture.',
			},
		],
		outcomesTitle: 'Sustainability Outcomes You Can Measure',
		outcomes: [
			{
				title: '10–30% reduction in logistics-related CO₂',
				description:
					'Emissions fall over time as networks are redesigned, modes shift, and operations become more efficient.',
			},
			{
				title: 'Improved ESG ratings and compliance',
				description:
					'High-quality data and transparent reporting support regulatory requirements and investor expectations.',
			},
			{
				title: 'Lower operating costs',
				description:
					'Many green initiatives—consolidation, reduced miles, energy efficiency—also cut spend on fuel and utilities.',
			},
			{
				title: 'Stronger brand and customer loyalty',
				description:
					'Visible progress on sustainability differentiates your logistics offering and supports commercial growth.',
			},
		],
		useCasesTitle: 'Sample Green Logistics Use Cases',
		useCases: [
			{
				title: 'Emission-Aware Network Redesign',
				challenge:
					'A retailer committed to ambitious CO₂ reduction targets but lacked a detailed view of emissions across its logistics network.',
				solution:
					'ITSC implemented an emissions-calculation engine, then used optimization tools to propose a new network and mode mix that cut emissions while maintaining service.',
				impact:
					'The client achieved a 22% reduction in logistics emissions and identified further opportunities tied to carrier selection and facility investments.',
			},
			{
				title: 'Energy Optimization in Distribution Centers',
				challenge:
					'DCs consumed significant energy with limited monitoring or control, contributing to both cost and emissions.',
				solution:
					'IoT sensors and analytics were deployed to monitor usage and automatically adjust lighting, HVAC, and equipment scheduling based on demand.',
				impact:
					'Energy consumption dropped by 18% with a payback period of less than two years, while working conditions and operational stability improved.',
			},
		],
	};

	return <ScmPageContent dictionary={dictionary} lang={validLang} page={page} />;
}


