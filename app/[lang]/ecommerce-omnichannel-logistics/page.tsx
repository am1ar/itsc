import { getDictionary } from '@/get-dictionary';
import { i18n, Locale } from '@/i18n-config';
import { Dictionary } from '@/types/dictionary';
import ScmPageContent, {
	ScmPageConfig,
} from '../components/ScmPageContent';

export default async function EcommerceOmnichannelLogisticsPage({
	params,
}: {
	params: Promise<{ lang: Locale }>;
}) {
	const { lang } = await params;
	const validLang = i18n.locales.includes(lang) ? lang : i18n.defaultLocale;
	const dictionary = (await getDictionary(validLang)) as Dictionary;

	const page: ScmPageConfig = {
		id: 'ecommerce-omnichannel-logistics',
		title: 'E‑Commerce & Omni-Channel Logistics',
		heroKicker: 'Unified Retail Fulfillment',
		heroDescription:
			'ITSC designs logistics networks and systems that support e‑commerce, marketplace, and store channels from a single, intelligent backbone. We orchestrate inventory, fulfillment, and delivery so customers experience one brand, not disconnected channels.',
		overviewTitle: 'Aligning Logistics with the Omni-Channel Customer Journey',
		overviewBody: [
			'Customers expect to move seamlessly between online and offline touchpoints—researching online, buying in-store, ordering to home, or returning through any channel. Behind this simplicity lies a complex logistics challenge across order routing, inventory visibility, and last mile.',
			'ITSC helps retailers and brands design fulfillment strategies—ship-from-DC, ship-from-store, click-and-collect, locker pickup—that align with customer expectations and profitability goals. We map how orders should flow across your network depending on product, location, and promise speed.',
			'We then configure systems and processes so that every order is automatically routed to the optimal node, and inventory and transportation plans adjust dynamically as demand shifts across channels.',
		],
		aiTitle:
			'AI-Powered Order Orchestration, Inventory, and Delivery Choices',
		aiBody: [
			'ITSC uses AI models to recommend the best fulfillment source for each order, considering factors such as inventory availability, margin, shipping cost, promised delivery speed, and store workload. These decisions are embedded into order-management or custom orchestration layers.',
			'We connect inventory across DCs, stores, and in-transit stock into a single visibility layer so that omni-channel promises are based on real availability. Transportation analytics guide carrier and service-level selection at checkout, balancing conversion and cost.',
			'Our architecture approach links OMS, WMS, TMS, and last-mile systems so that omni-channel strategies can evolve over time without disrupting the customer experience.',
		],
		capabilitiesTitle: 'E‑Commerce & Omni-Channel Capabilities',
		capabilities: [
			{
				title: 'Fulfillment Strategy & Network Design',
				description:
					'Definition of when to use central DCs, regional hubs, stores, or partners to fulfill different order types.',
			},
			{
				title: 'Order Orchestration & Routing',
				description:
					'Rules and AI models that decide where each order should be picked, packed, and shipped from.',
			},
			{
				title: 'Inventory Visibility Across Channels',
				description:
					'Consolidated view of stock across DCs, stores, and in-transit locations exposed to OMS and customer-facing channels.',
			},
			{
				title: 'Checkout and Promise Design',
				description:
					'Design of delivery options, fees, and lead times that reflect operational capabilities and customer expectations.',
			},
			{
				title: 'Returns & Reverse Logistics',
				description:
					'Processes and systems to handle omni-channel returns efficiently while protecting margin.',
			},
			{
				title: 'Peak Planning & Playbooks',
				description:
					'Capacity, inventory, and carrier planning for events such as holidays, sales campaigns, and product launches.',
			},
		],
		outcomesTitle: 'Omni-Channel Outcomes You Can Measure',
		outcomes: [
			{
				title: 'Higher conversion and customer loyalty',
				description:
					'Reliable delivery promises and flexible options increase trust and repeat purchases.',
			},
			{
				title: 'Optimized fulfillment cost',
				description:
					'Orders are routed to the most economical node that still meets the service commitment.',
			},
			{
				title: 'Reduced split shipments and waste',
				description:
					'Smarter routing and inventory placement reduce the need to ship items from multiple locations.',
			},
			{
				title: 'Resilient peak performance',
				description:
					'Networks can absorb demand spikes without collapsing service or eroding margins.',
			},
		],
		useCasesTitle: 'Sample E‑Commerce & Omni-Channel Use Cases',
		useCases: [
			{
				title: 'Ship-from-Store Rollout for a Retailer',
				challenge:
					'A retailer wanted to use stores as fulfillment nodes but struggled with inventory accuracy and store workload management.',
				solution:
					'ITSC implemented inventory-visibility tools, defined eligibility rules for ship-from-store, and integrated order orchestration with store operations.',
				impact:
					'Online orders were fulfilled closer to customers, reducing delivery times and costs while improving store inventory turnover.',
			},
			{
				title: 'Omni-Channel Returns Optimization',
				challenge:
					'Return flows were fragmented by channel, leading to high processing costs and delayed resale of returned items.',
				solution:
					'ITSC designed unified returns policies and processes, supported by systems that consolidate returns and optimize routing back into the network.',
				impact:
					'Processing cost per return decreased and recovered value from returned merchandise increased.',
			},
		],
	};

	return <ScmPageContent dictionary={dictionary} lang={validLang} page={page} />;
}


