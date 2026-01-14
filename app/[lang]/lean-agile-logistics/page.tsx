import { getDictionary } from '@/get-dictionary';
import { i18n, Locale } from '@/i18n-config';
import { Dictionary } from '@/types/dictionary';
import ScmPageContent, {
	ScmPageConfig,
} from '../components/ScmPageContent';

export default async function LeanAgileLogisticsPage({
	params,
}: {
	params: Promise<{ lang: Locale }>;
}) {
	const { lang } = await params;
	const validLang = i18n.locales.includes(lang) ? lang : i18n.defaultLocale;
	const dictionary = (await getDictionary(validLang)) as Dictionary;

	const page: ScmPageConfig = {
		id: 'lean-agile-logistics',
		title: 'Lean & Agile Logistics',
		heroKicker: 'Operational Excellence in Motion',
		heroDescription:
			'ITSC blends Lean principles with agile ways of working to eliminate waste and increase responsiveness in logistics. We redesign processes, empower teams, and embed data-driven improvement into daily operations.',
		overviewTitle: 'Creating Logistics Operations that Are Both Efficient and Adaptable',
		overviewBody: [
			'Logistics networks today face conflicting pressures: they must be highly efficient to control cost, yet agile enough to handle volatile demand, disruptions, and evolving service expectations. Traditional Lean programs can increase efficiency but sometimes reduce flexibility, while agile initiatives can lack operational discipline.',
			'ITSC combines the strengths of both approaches. We map value streams across transportation, warehousing, and last mile to identify delays, rework, and non-value-adding activities. At the same time, we introduce agile practices—short improvement sprints, clear backlogs, and cross-functional squads—so that enhancements are delivered iteratively rather than in one-off projects.',
			'The end state is an organization where frontline teams continuously refine processes using data and experimentation, supported by technology that makes bottlenecks and waste visible in real time.',
		],
		aiTitle:
			'Using Data, Analytics, and Workflow Tools to Support Lean & Agile',
		aiBody: [
			'ITSC instruments logistics operations with the data needed for true continuous improvement: process times, queue lengths, failure rates, and workload distributions. These signals are visualized through intuitive dashboards and digital Andon boards that highlight where flow is disrupted.',
			'We introduce workflow tools that standardize best practices, enforce error-proofing steps, and capture reasons for deviations. AI models and analytics help teams understand which improvements drive the largest impact, helping them prioritize sprint backlogs and validate the results of experiments.',
			'Our architecture approach ensures that Lean and agile practices are supported—not hindered—by systems. As processes improve, we update WMS, TMS, and supporting tools so that new standards are reflected in system behavior and training materials.',
		],
		capabilitiesTitle: 'Lean & Agile Logistics Capabilities',
		capabilities: [
			{
				title: 'Value Stream Mapping & Waste Elimination',
				description:
					'End-to-end mapping of material, information, and decision flows to identify bottlenecks, delays, and rework.',
			},
			{
				title: 'Lean Process Redesign',
				description:
					'Redesign of key logistics processes using Lean tools such as 5S, standard work, and visual management.',
			},
			{
				title: 'Agile Ways of Working',
				description:
					'Cross-functional squads, sprint planning, and improvement backlogs focused on logistics outcomes.',
			},
			{
				title: 'Digital Support for Continuous Improvement',
				description:
					'Dashboards, workflow tools, and analytics tailored to daily stand-ups and performance reviews.',
			},
			{
				title: 'Capability Building & Coaching',
				description:
					'Training for leaders and frontline teams so Lean and agile behaviors become part of the culture.',
			},
			{
				title: 'Integration with Technology Roadmaps',
				description:
					'Ensuring that process improvements are reflected in system designs and future automation choices.',
			},
		],
		outcomesTitle: 'Lean & Agile Outcomes You Can Measure',
		outcomes: [
			{
				title: 'Reduced lead times and variability',
				description:
					'Streamlined flows reduce delays and make service performance more predictable for customers.',
			},
			{
				title: 'Lower process waste and rework',
				description:
					'Fewer touches, errors, and handoffs translate directly into cost savings and higher quality.',
			},
			{
				title: 'More engaged and empowered teams',
				description:
					'Frontline staff participate in defining and implementing improvements, increasing ownership.',
			},
			{
				title: 'Faster response to change',
				description:
					'Agile routines and data visibility help organizations adapt quickly to new requirements and disruptions.',
			},
		],
		useCasesTitle: 'Sample Lean & Agile Logistics Use Cases',
		useCases: [
			{
				title: 'Lean Transformation of a Cross-Docking Operation',
				challenge:
					'A cross-dock facility suffered from unpredictable dwell times, congestion, and frequent loading errors.',
				solution:
					'ITSC led value-stream mapping, implemented standard work and visual controls, and introduced daily stand-ups with real-time metrics.',
				impact:
					'Dwell times dropped by 28%, loading errors decreased significantly, and the site handled higher volumes without additional docks.',
			},
			{
				title: 'Agile Improvement Program in Last Mile',
				challenge:
					'A last-mile operation struggled to implement improvements quickly across multiple depots.',
				solution:
					'Cross-functional agile squads were formed around key metrics, supported by dashboards and digital workflows to roll out and test changes.',
				impact:
					'Delivery success rates improved, and new process ideas moved from concept to deployment in weeks instead of months.',
			},
		],
	};

	return <ScmPageContent dictionary={dictionary} lang={validLang} page={page} />;
}


