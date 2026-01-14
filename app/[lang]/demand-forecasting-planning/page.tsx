import { getDictionary } from '@/get-dictionary';
import { i18n, Locale } from '@/i18n-config';
import { Dictionary } from '@/types/dictionary';
import ScmPageContent, {
	ScmPageConfig,
} from '../components/ScmPageContent';

export default async function DemandForecastingPlanningPage({
	params,
}: {
	params: Promise<{ lang: Locale }>;
}) {
	const { lang } = await params;
	const validLang = i18n.locales.includes(lang) ? lang : i18n.defaultLocale;
	const dictionary = (await getDictionary(validLang)) as Dictionary;

	const page: ScmPageConfig = {
		id: 'demand-forecasting-planning',
		title: 'Demand Forecasting & Planning',
		heroKicker: 'Predictive & Prescriptive Planning',
		heroDescription:
			'ITSC combines machine learning, collaborative planning, and integrated business processes to predict demand and align supply-chain responses. We turn forecasting into a cross-functional discipline that directly drives logistics, inventory, and capacity decisions.',
		overviewTitle: 'From Static Forecasts to Living Planning Cycles',
		overviewBody: [
			'Traditional forecasting processes often rely on simple statistical models and manual overrides in spreadsheets. Different departments maintain their own versions of the truth, leading to frequent surprises, rushed orders, and misaligned capacity.',
			'ITSC designs demand-forecasting and planning processes that connect commercial, operations, and finance teams. We introduce clear cadences for forecast review, scenario analysis, and decision-making, underpinned by shared data and tooling.',
			'The result is a living planning cycle where forecasts are continuously updated, assumptions are transparent, and downstream logistics and inventory plans adjust in sync rather than reacting after the fact.',
		],
		aiTitle:
			'Machine Learning Forecasts Connected to Logistics and Inventory',
		aiBody: [
			'Our data scientists build ML models that capture seasonality, promotions, product launches, and external drivers such as macroeconomic indicators or weather. These models operate at appropriate levels of granularity—SKU, customer, region, channel—based on data quality and business needs.',
			'Forecasts are not confined to a separate system. Through robust architecture, ITSC connects them to inventory optimization tools, production planning, and TMS/WMS capacity planning. This ensures that peaks and troughs in demand are translated into concrete adjustments to inventory, transportation capacity, and warehouse labor.',
			'We also design dashboards and workflows that help planners evaluate model output versus human input, track forecast accuracy, and learn over time which interventions truly add value.',
		],
		capabilitiesTitle: 'Demand Planning Capabilities',
		capabilities: [
			{
				title: 'Advanced Statistical & ML Forecasting',
				description:
					'Time-series and causal models tuned to your data, products, and planning horizons.',
			},
			{
				title: 'Collaborative Planning Processes',
				description:
					'Structured S&OP / IBP cycles where sales, operations, and finance converge on a single demand plan.',
			},
			{
				title: 'Scenario & Stress Testing',
				description:
					'Tools to explore best/worst cases, promotional impacts, and structural shifts in demand.',
			},
			{
				title: 'Integration to Execution Systems',
				description:
					'Architecture that connects forecasts directly to inventory, production, and logistics planning tools.',
			},
			{
				title: 'Forecast Accuracy Management',
				description:
					'Metrics, dashboards, and continuous-improvement routines focused on accuracy and bias reduction.',
			},
			{
				title: 'Change Management & Training',
				description:
					'Capability building so planners and business stakeholders can confidently use new tools and processes.',
			},
		],
		outcomesTitle: 'Planning Outcomes You Can Measure',
		outcomes: [
			{
				title: 'Improved forecast accuracy',
				description:
					'Accuracy typically improves by 10+ percentage points, reducing surprises and urgent corrections.',
			},
			{
				title: 'Reduced premium freight and overtime',
				description:
					'Better visibility into demand reduces last-minute transportation and production firefighting.',
			},
			{
				title: 'Better alignment across the business',
				description:
					'A single, agreed demand plan improves coordination between commercial, operations, and finance teams.',
			},
			{
				title: 'More resilient supply chains',
				description:
					'Scenario capabilities and stress tests prepare your network for volatility rather than reacting to it.',
			},
		],
		useCasesTitle: 'Sample Demand Forecasting & Planning Use Cases',
		useCases: [
			{
				title: 'Retail Forecasting with Promotional Impacts',
				challenge:
					'A retailer experienced major forecast errors around promotions and campaigns, leading to either stockouts or large leftover inventories.',
				solution:
					'ITSC built ML models that explicitly modeled promotion types, durations, and elasticities, feeding results into collaborative planning sessions with merchandising and supply-chain teams.',
				impact:
					'Forecast accuracy during promotional periods improved significantly, while both lost sales and post-promotion excess stock were reduced.',
			},
			{
				title: 'Industrial Demand Planning and Capacity Alignment',
				challenge:
					'An industrial manufacturer had volatile orders and long production lead times, resulting in frequent schedule changes and logistics disruption.',
				solution:
					'ITSC implemented an integrated demand-planning process connected to production, inventory, and transportation planning, including scenario tools for large project wins or losses.',
				impact:
					'Stability in production and logistics improved, premium freight costs declined, and customer service levels increased.',
			},
		],
	};

	return <ScmPageContent dictionary={dictionary} lang={validLang} page={page} />;
}


