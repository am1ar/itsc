'use client';

import { Dictionary } from '@/types/dictionary';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import {
	Boxes,
	Truck,
	Warehouse as WarehouseIcon,
	ClipboardCheck,
	PiggyBank,
	BarChart3,
	Cpu,
	Leaf,
	Activity,
	Workflow,
	Routing,
	ShoppingBag,
	BookOpenCheck,
} from 'lucide-react';
import Link from 'next/link';

interface SCMPillarsSectionProps {
	dictionary: Dictionary;
	lang: string;
}

const pillars = [
	{
		id: 'logistics-management',
		title: 'Logistics Management',
		description:
			'End-to-end control tower for multi-modal logistics, connecting transportation, warehousing, and inventory into one orchestrated flow.',
		icon: Boxes,
		href: '/logistics-management',
	},
	{
		id: 'transportation-management',
		title: 'Transportation Management',
		description:
			'AI-powered TMS that combines route optimization, carrier selection, and fleet orchestration using real-time transportation data.',
		icon: Truck,
		href: '/transportation-management',
	},
	{
		id: 'warehouse-management',
		title: 'Warehouse Management',
		description:
			'Intelligent WMS and automation that transform warehouses into high-throughput, low-error fulfillment engines.',
		icon: WarehouseIcon,
		href: '/warehouse-management',
	},
	{
		id: 'inventory-management',
		title: 'Inventory Management',
		description:
			'Data-driven inventory optimization across plants, DCs, and stores, balancing service levels with working-capital efficiency.',
		icon: ClipboardCheck,
		href: '/inventory-management',
	},
	{
		id: 'logistics-cost-reduction',
		title: 'Cost Reduction for Logistics Operations',
		description:
			'Analytics and automation that systematically remove waste from transportation, warehousing, and third‑party spend.',
		icon: PiggyBank,
		href: '/logistics-cost-reduction',
	},
	{
		id: 'logistics-kpi-measurement',
		title: 'Logistics Performance Measurement & KPIs',
		description:
			'Real-time logistics dashboards and KPI frameworks tied directly to data from TMS, WMS, YMS, and IoT sources.',
		icon: BarChart3,
		href: '/logistics-kpi-measurement',
	},
	{
		id: 'logistics-technology-innovation',
		title: 'Technology & Innovation in Logistics',
		description:
			'AI, IoT, digital twins, and custom software platforms that power next-generation logistics operations.',
		icon: Cpu,
		href: '/logistics-technology-innovation',
	},
	{
		id: 'green-logistics',
		title: 'Sustainable & Green Logistics',
		description:
			'Emissions-aware planning and network design that reduce CO₂ while preserving cost and service performance.',
		icon: Leaf,
		href: '/green-logistics',
	},
	{
		id: 'demand-forecasting-planning',
		title: 'Demand Forecasting & Planning',
		description:
			'Predictive and prescriptive planning that links demand signals with capacity, inventory, and transportation plans.',
		icon: Activity,
		href: '/demand-forecasting-planning',
	},
	{
		id: 'lean-agile-logistics',
		title: 'Lean & Agile Logistics',
		description:
			'Lean process design and agile execution techniques that remove waste and increase responsiveness.',
		icon: Workflow,
		href: '/lean-agile-logistics',
	},
	{
		id: 'last-mile-logistics',
		title: 'Last Mile Logistics',
		description:
			'Optimized, customer-centric last mile operations using dynamic routing, tracking, and delivery experience tools.',
		icon: Routing,
		href: '/last-mile-logistics',
	},
	{
		id: 'ecommerce-omnichannel-logistics',
		title: 'E‑Commerce & Omni-Channel Logistics',
		description:
			'Integrated fulfillment models for e‑commerce, marketplace, and store networks with smart sourcing decisions.',
		icon: ShoppingBag,
		href: '/ecommerce-omnichannel-logistics',
	},
	{
		id: 'case-studies',
		title: 'Case Studies & Interactive Journeys',
		description:
			'Deep dives into ocean, air, and road logistics transformations with quantified ROI and clear implementation steps.',
		icon: BookOpenCheck,
		href: '/case-studies',
	},
];

export default function SCMPillarsSection({
	dictionary,
	lang,
}: SCMPillarsSectionProps) {
	const isRTL = lang === 'ar';

	return (
		<section
			className={cn(
				'relative z-10 bg-muted/30 px-6 py-20',
				isRTL ? 'rtl font-arabic' : 'ltr'
			)}
			dir={isRTL ? 'rtl' : 'ltr'}
		>
			<div className='container mx-auto max-w-7xl'>
				<motion.div
					className={cn('text-center mb-12', isRTL && 'text-right')}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<div className='inline-flex items-center rounded-full border border-primary/20 bg-primary/10 dark:border-primary/30 dark:bg-primary/20 px-4 py-2 mb-4'>
						<span className='text-sm font-semibold text-primary'>
							{isRTL
								? 'محاورنا الأساسية في إدارة سلسلة الإمداد والخدمات اللوجستية'
								: 'Core Supply Chain & Logistics Solution Pillars'}
						</span>
					</div>
					<h2
						className={cn(
							'text-3xl md:text-4xl font-mono mb-3 dark:text-white',
							isRTL && 'text-right'
						)}
					>
						{isRTL
							? 'الطريقة الأذكى لأتمتة سلسلة الإمداد لديك'
							: 'The Smarter Way to Automate Your Supply Chain'}
					</h2>
					<p
						className={cn(
							'text-lg text-muted-foreground max-w-3xl mx-auto',
							isRTL && 'text-right'
						)}
					>
						{isRTL
							? 'نربط الذكاء الاصطناعي، وتحليلات بيانات النقل، وهندسة الأنظمة لإنشاء منصة موحدة تدير النقل، والمستودعات، والمخزون، والأداء في كل مستوى من مستويات شبكتك.'
							: 'ITSC connects AI, transportation data analytics, and modern system architecture into a unified platform that manages transportation, warehousing, inventory, and performance at every level of your network.'}
					</p>
				</motion.div>

				<div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
					{pillars.map((pillar, index) => {
						const Icon = pillar.icon;
						return (
							<motion.div
								key={pillar.id}
								className={cn(
									'group flex h-full flex-col rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-lg',
									isRTL && 'text-right'
								)}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.4, delay: 0.03 * index }}
							>
								<div
									className={cn(
										'mb-4 flex items-center gap-3',
										isRTL && 'flex-row-reverse'
									)}
								>
									<div className='flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary'>
										<Icon className='h-6 w-6' />
									</div>
									<h3 className='text-base font-semibold leading-snug group-hover:text-primary'>
										{pillar.title}
									</h3>
								</div>
								<p className='mb-4 text-sm text-muted-foreground'>
									{pillar.description}
								</p>
								<div className='mt-auto pt-2'>
									<Link
										href={`/${lang}${pillar.href}`}
										className={cn(
											'text-sm font-medium text-primary underline-offset-4 hover:underline',
											isRTL && 'flex-row-reverse'
										)}
									>
										{isRTL ? 'استكشف الحل' : 'Explore solution'}
									</Link>
								</div>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}


