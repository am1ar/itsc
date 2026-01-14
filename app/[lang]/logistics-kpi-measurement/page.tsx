import { getDictionary } from '@/get-dictionary';
import { i18n, Locale } from '@/i18n-config';
import { Dictionary } from '@/types/dictionary';
import ScmPageContent, {
	ScmPageConfig,
} from '../components/ScmPageContent';

export default async function LogisticsKpiMeasurementPage({
	params,
}: {
	params: Promise<{ lang: Locale }>;
}) {
	const { lang } = await params;
	const validLang = i18n.locales.includes(lang) ? lang : i18n.defaultLocale;
	const dictionary = (await getDictionary(validLang)) as Dictionary;

	const page: ScmPageConfig = {
		id: 'logistics-kpi-measurement',
		title: 'Logistics Performance Measurement & KPIs',
		heroKicker: 'Data-Driven Performance Management',
		heroDescription:
			'ITSC turns logistics data into a single, trusted performance story. We design KPI frameworks, data models, and dashboards that give every stakeholder—from executives to supervisors—a clear view of cost, service, and productivity.',
		overviewTitle: 'From Fragmented Reports to a Single Version of Truth',
		overviewBody: [
			'Many logistics organizations are drowning in reports but starving for insight. Different regions use different KPI definitions, data arrives late, and operations teams spend more time reconciling spreadsheets than acting on what the numbers say.',
			'ITSC starts by defining a common performance language: clear, unambiguous KPIs such as OTIF, on-time pickup, cost per shipment, damage rate, and productivity per labor hour. We then design a data model and architecture that pull information from TMS, WMS, YMS, telematics, and finance systems into a governed analytics layer.',
			'On top of this foundation we build role-based dashboards and scorecards. Executives see strategic trends and benchmarks, while planners and supervisors get operational views with drill-downs to lanes, facilities, and even individual shipments.',
		],
		aiTitle:
			'Applying AI and Advanced Analytics to Logistics KPIs',
		aiBody: [
			'With clean, integrated data in place, ITSC uses machine learning to forecast key KPIs and flag anomalies. For example, we can predict which lanes are likely to miss OTIF this week, which warehouses are on track to exceed labor budgets, or where damage rates are trending out of tolerance.',
			'Anomaly-detection models highlight outliers at shipment, carrier, or site level so teams can investigate root causes rather than chasing averages. We also build simulation tools that let you test how network or policy changes could impact KPIs before committing to them.',
			'The result is a performance-management system that is proactive rather than reactive—one that surfaces issues before customers feel them and ties every improvement initiative to KPI and financial impact.',
		],
		capabilitiesTitle: 'Performance & KPI Capabilities',
		capabilities: [
			{
				title: 'KPI Framework & Governance',
				description:
					'Design and harmonization of logistics KPIs across business units and regions, with clear definitions and data owners.',
			},
			{
				title: 'Data Modeling & Integration',
				description:
					'Consolidated data layer pulling from TMS, WMS, YMS, IoT, and ERP/finance systems with robust quality controls.',
			},
			{
				title: 'Role-Based Dashboards & Scorecards',
				description:
					'Visualizations tailored to executives, managers, and frontline teams, aligned to their decisions and time horizons.',
			},
			{
				title: 'Predictive KPI Forecasting',
				description:
					'AI models that forecast service, cost, and productivity metrics, enabling early intervention when performance drifts.',
			},
			{
				title: 'Root-Cause & Anomaly Analytics',
				description:
					'Drill-down tools and anomaly detection that pinpoint where and why performance is off-track.',
			},
			{
				title: 'Continuous-Improvement Support',
				description:
					'KPI reviews, improvement backlogs, and benefit tracking embedded into operational governance.',
			},
		],
		outcomesTitle: 'Performance Outcomes You Can Measure',
		outcomes: [
			{
				title: 'Faster, more reliable reporting',
				description:
					'Reporting cycles shrink from weeks or days to near real time, reducing manual effort and error risk.',
			},
			{
				title: 'Improved service and cost KPIs',
				description:
					'Issues are identified earlier, and improvement initiatives are prioritized based on measurable impact.',
			},
			{
				title: 'Higher accountability and transparency',
				description:
					'Teams at all levels see how their work links to KPIs and business outcomes, strengthening ownership.',
			},
			{
				title: 'Stronger data culture',
				description:
					'Decisions increasingly rely on trusted data and analytics rather than intuition alone.',
			},
		],
		useCasesTitle: 'Sample KPI & Analytics Use Cases',
		useCases: [
			{
				title: 'Global Logistics Dashboard Suite',
				challenge:
					'A multinational company had dozens of local reporting tools and no consolidated global view of logistics performance.',
				solution:
					'ITSC designed a unified KPI framework and built a central analytics platform with dashboards for global, regional, and site-level stakeholders.',
				impact:
					'Reporting effort dropped by 80%, while leaders gained a transparent view of cost and service by region, mode, and customer segment.',
			},
			{
				title: 'Predictive Service-Risk Monitoring',
				challenge:
					'A shipper struggled to anticipate late deliveries and only learned about service failures after customers complained.',
				solution:
					'ITSC deployed predictive models using transportation data and external signals to flag at-risk shipments and lanes, integrating alerts into planners’ daily workflows.',
				impact:
					'The client reduced late deliveries by 15% and significantly improved customer satisfaction scores within the first year.',
			},
		],
	};

	return <ScmPageContent dictionary={dictionary} lang={validLang} page={page} />;
}


