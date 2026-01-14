import { getDictionary } from '@/get-dictionary';
import { i18n, Locale } from '@/i18n-config';
import { Dictionary } from '@/types/dictionary';
import ScmPageContent, {
	ScmPageConfig,
} from '../components/ScmPageContent';

export default async function InventoryManagementPage({
	params,
}: {
	params: Promise<{ lang: Locale }>;
}) {
	const { lang } = await params;
	const validLang = i18n.locales.includes(lang) ? lang : i18n.defaultLocale;
	const dictionary = (await getDictionary(validLang)) as Dictionary;

	const page: ScmPageConfig = {
		id: 'inventory-management',
		title: 'Inventory Management',
		heroKicker: 'Data-Driven Inventory',
		heroDescription:
			'ITSC helps you hold the right stock in the right place at the right time by combining demand forecasting, multi-echelon optimization, and real-time visibility. We treat inventory as a strategic asset, not just a cost.',
		overviewTitle: 'Balancing Service and Working Capital Across the Network',
		overviewBody: [
			'Inventory decisions ripple through every part of the supply chain—from customer promise reliability to transportation cost and warehouse utilization. Yet many organizations still rely on simplistic rules of thumb such as fixed safety stocks or manually updated reorder points.',
			'ITSC’s inventory management approach uses granular data to model demand variability, lead-time risk, and service targets across each node in your network. We design policies that differentiate between fast movers, strategic SKUs, and long-tail items so that capital is allocated where it delivers the highest value.',
			'By integrating inventory strategy with transportation and warehousing realities, we avoid creating “optimal on paper” plans that fail during execution. Instead, planners work with transparent models that explain why a given inventory level is recommended and how it will behave under different demand and supply scenarios.',
		],
		aiTitle:
			'AI, Multi-Echelon Optimization, and Integration with WMS/YMS',
		aiBody: [
			'ITSC uses machine learning to build demand forecasts at SKU-location level, incorporating seasonality, promotions, cannibalization effects, and external factors. Forecast accuracy is continuously monitored and models are retrained as new patterns emerge in your business.',
			'On top of these signals, we run multi-echelon inventory optimization that considers each layer of your network—plants, regional DCs, local warehouses, and stores—to recommend safety stocks and reorder points. Lead-time distributions are informed by transportation analytics and YMS/WMS data, capturing real-world variability rather than static assumptions.',
			'All of this is surfaced through intuitive dashboards where planners can run “what-if” scenarios: changing service targets, adding a new warehouse, or switching suppliers. The underlying architecture makes inventory data accessible for other ITSC solutions, including logistics cost optimization and performance measurement.',
		],
		capabilitiesTitle: 'Inventory Management Capabilities',
		capabilities: [
			{
				title: 'Segmentation & Policy Design',
				description:
					'ABC/XYZ segmentation and criticality analysis that inform differentiated inventory policies by SKU, customer, and channel.',
			},
			{
				title: 'Multi-Echelon Inventory Optimization',
				description:
					'Holistic optimization of stock across all nodes, balancing service levels, holding costs, and supply risk.',
			},
			{
				title: 'Demand Forecasting Integration',
				description:
					'Tight coupling to statistical and machine-learning forecasts so policies adapt as demand patterns evolve.',
			},
			{
				title: 'Visibility & Analytics',
				description:
					'Single view of inventory across plants, DCs, stores, and in-transit positions with alerts for exceptions and aging.',
			},
			{
				title: 'Slow-Moving and Obsolescence Management',
				description:
					'Analytical identification of at-risk stock with clear actions such as rebalancing, promotions, or controlled run-out.',
			},
			{
				title: 'Governance & Process Enablement',
				description:
					'Roles, workflows, and review cadences that embed inventory management into S&OP / IBP routines.',
			},
		],
		outcomesTitle: 'Inventory Outcomes You Can Measure',
		outcomes: [
			{
				title: '10–25% reduction in inventory value',
				description:
					'Capital is freed by eliminating redundant buffers while respecting agreed service levels.',
			},
			{
				title: 'Fewer stockouts and backorders',
				description:
					'Better forecasting and right-sized buffers reduce lost sales and emergency shipments.',
			},
			{
				title: 'Improved cash flow and margins',
				description:
					'Less money locked in slow-moving or obsolete inventory and fewer write-offs.',
			},
			{
				title: 'Higher planning confidence',
				description:
					'Transparent models make trade-offs visible and support constructive dialogue between sales, operations, and finance.',
			},
		],
		useCasesTitle: 'Sample Inventory Management Use Cases',
		useCases: [
			{
				title: 'Multi-Echelon Optimization for a Consumer Goods Network',
				challenge:
					'A consumer goods company held high inventories at every level of its network yet still experienced frequent stockouts in key markets.',
				solution:
					'ITSC introduced SKU-location segmentation, demand forecasting enhancements, and multi-echelon optimization. We aligned inventory targets with service goals and rebalanced stock between plants, DCs, and markets.',
				impact:
					'Overall inventory was reduced by 19% while service levels improved by 3 percentage points, unlocking significant working capital without sacrificing availability.',
			},
			{
				title: 'Rationalizing Long-Tail and Obsolete Stock',
				challenge:
					'An industrial distributor had a growing tail of low-velocity SKUs and no structured visibility into obsolescence risk.',
				solution:
					'ITSC deployed analytics to classify items by velocity and profitability, flag at-risk stock, and recommend actions such as product rationalization, price incentives, or strategic reserves.',
				impact:
					'Slow-moving and obsolete inventory was reduced by 32% over 18 months, with clear governance so the long-tail did not grow back.',
			},
		],
	};

	return <ScmPageContent dictionary={dictionary} lang={validLang} page={page} />;
}


