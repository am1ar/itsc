import { getDictionary } from '@/get-dictionary';
import { i18n, Locale } from '@/i18n-config';
import { Dictionary } from '@/types/dictionary';
import ScmPageContent, {
	ScmPageConfig,
} from '../components/ScmPageContent';

export default async function LogisticsCostReductionPage({
	params,
}: {
	params: Promise<{ lang: Locale }>;
}) {
	const { lang } = await params;
	const validLang = i18n.locales.includes(lang) ? lang : i18n.defaultLocale;
	const dictionary = (await getDictionary(validLang)) as Dictionary;

	const page: ScmPageConfig = {
		id: 'logistics-cost-reduction',
		title: 'Cost Reduction for Logistics Operations',
		heroKicker: 'Analytics-Led Cost Transformation',
		heroDescription:
			'ITSC identifies and eliminates structural cost drivers across transportation, warehousing, inventory, and third-party logistics. We use advanced analytics, AI, and automation to turn one-time savings initiatives into an ongoing cost-optimization engine.',
		overviewTitle: 'From Tactical Savings to Structural Cost Advantage',
		overviewBody: [
			'Many logistics cost-reduction programs focus on short-term levers such as rate negotiations or headcount freezes. While useful, these efforts rarely address the underlying design of the network, processes, and systems that generate cost every day.',
			'ITSC approaches cost reduction as a structural challenge. We start by building a unified cost model that spans freight, labor, inventory, facilities, and third-party services. This model exposes the true cost-to-serve by product, lane, customer, and channel, revealing opportunities that are invisible in traditional P&L views.',
			'With cost drivers made explicit, we co-design a roadmap that mixes quick wins—like better routing and warehouse productivity—with strategic shifts in network design, automation, and sourcing models. Throughout, our focus remains on preserving or improving service levels, not just cutting spend.',
		],
		aiTitle:
			'Using AI, Data Analytics, and Automation to Sustain Savings',
		aiBody: [
			'ITSC’s analytics platform aggregates data from TMS, WMS, YMS, ERP, and finance systems to create a detailed view of logistics performance and cost. Machine learning models detect anomalies—such as out-of-policy routing, underutilized assets, or facilities with disproportionate labor cost—and surface them as prioritized actions.',
			'Optimization algorithms support decisions such as redesigning delivery territories, consolidating facilities, standardizing service levels, or redefining inventory policies. When changes are implemented, we configure your operational systems so that new rules, automations, and guardrails make savings “stick” rather than fade over time.',
			'We also design dashboards that link operational KPIs (like OTIF or productivity) with financial metrics (such as cost per shipment or per order), creating a shared language between supply chain and finance teams and ensuring sustained governance of cost performance.',
		],
		capabilitiesTitle: 'Cost-Reduction Capabilities',
		capabilities: [
			{
				title: 'Cost-to-Serve Analytics',
				description:
					'Granular modeling of logistics cost by product, lane, customer, and channel to target the highest-impact opportunities.',
			},
			{
				title: 'Transportation Spend Optimization',
				description:
					'Mode, lane, and carrier strategies informed by data, integrated into TMS rules and procurement processes.',
			},
			{
				title: 'Warehouse Productivity & Labor Efficiency',
				description:
					'Process redesign, engineered labor standards, and automation that reduce cost per unit handled.',
			},
			{
				title: 'Inventory & Working-Capital Reduction',
				description:
					'Multi-echelon inventory optimization and policy changes that free capital while protecting service.',
			},
			{
				title: 'RPA & Workflow Automation',
				description:
					'Automation of repetitive tasks like freight audit, order entry, or appointment scheduling to cut administrative cost.',
			},
			{
				title: 'Savings Governance & Tracking',
				description:
					'Dashboards and routines that track initiatives, realized savings, and ROI over time.',
			},
		],
		outcomesTitle: 'Cost Outcomes You Can Measure',
		outcomes: [
			{
				title: '5–15% reduction in end-to-end logistics cost',
				description:
					'Savings distributed across freight, labor, and inventory, depending on baseline maturity and network complexity.',
			},
			{
				title: 'Improved margin and EBITDA',
				description:
					'Transparent attribution of savings initiatives to P&L impact, building confidence with leadership and investors.',
			},
			{
				title: 'Sustainable cost performance',
				description:
					'System-level changes and governance prevent “cost creep” and maintain efficiency gains over time.',
			},
			{
				title: 'Stronger negotiating position',
				description:
					'Data-backed view of lanes and volumes supports more effective carrier and 3PL negotiations.',
			},
		],
		useCasesTitle: 'Sample Cost-Reduction Use Cases',
		useCases: [
			{
				title: 'Transportation Cost Transformation for a Regional Shipper',
				challenge:
					'A regional shipper faced rising freight costs and limited visibility into which customers, lanes, or products were truly unprofitable.',
				solution:
					'ITSC built a cost-to-serve model using shipment, invoice, and operational data, then reconfigured routing rules, consolidation strategies, and carrier mix in the TMS.',
				impact:
					'Total transportation spend dropped by 9% within the first year, while on-time delivery improved and unprofitable accounts were re-priced or restructured.',
			},
			{
				title: 'Warehouse Productivity and Automation Program',
				challenge:
					'A distribution network operated manually with inconsistent processes and no standardized productivity benchmarks across sites.',
				solution:
					'ITSC introduced engineered standards, redesigned pick paths, piloted selective automation, and implemented common KPIs and dashboards.',
				impact:
					'Average cost per order fell by 14%, with several sites achieving more than 25% productivity improvement while maintaining or improving service.',
			},
		],
	};

	return <ScmPageContent dictionary={dictionary} lang={validLang} page={page} />;
}


