'use client';

import { Dictionary } from '@/types/dictionary';
import { Locale } from '@/i18n-config';
import Header from './Header';
import Footer from './Footer';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface Outcome {
	title: string;
	description: string;
}

interface UseCase {
	title: string;
	challenge: string;
	solution: string;
	impact: string;
}

export interface ScmPageConfig {
	id: string;
	title: string;
	heroKicker?: string;
	heroDescription: string;
	overviewTitle: string;
	overviewBody: string[];
	aiTitle: string;
	aiBody: string[];
	capabilitiesTitle: string;
	capabilities: {
		title: string;
		description: string;
	}[];
	outcomesTitle: string;
	outcomes: Outcome[];
	useCasesTitle: string;
	useCases: UseCase[];
}

interface ScmPageContentProps {
	dictionary: Dictionary;
	lang: Locale;
	page: ScmPageConfig;
}

export default function ScmPageContent({
	dictionary,
	lang,
	page,
}: ScmPageContentProps) {
	const isRTL = lang === 'ar';

	return (
		<div
			className={cn(
				'min-h-screen bg-background text-foreground',
				isRTL && 'rtl font-arabic'
			)}
			dir={isRTL ? 'rtl' : 'ltr'}
		>
			<Header dictionary={dictionary} lang={lang} />
			<main className='pt-20'>
				{/* Hero */}
				<section
					className={cn(
						'py-20 bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10',
						isRTL && 'text-right'
					)}
				>
					<div className='container mx-auto px-4'>
						<div className='max-w-4xl mx-auto'>
							<motion.p
								className={cn(
									'text-sm font-semibold text-primary mb-3 tracking-wide uppercase',
									isRTL && 'font-arabic'
								)}
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.4 }}
							>
								{page.heroKicker ||
									(isRTL
										? 'حلول متقدمة لإدارة سلسلة الإمداد والخدمات اللوجستية'
										: 'Advanced Supply Chain & Logistics Solutions')}
							</motion.p>
							<motion.h1
								className={cn(
									'text-4xl md:text-5xl lg:text-6xl font-bold mb-6 dark:text-white',
									isRTL && 'font-arabic'
								)}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.1 }}
							>
								{page.title}
							</motion.h1>
							<motion.p
								className={cn(
									'text-xl text-muted-foreground leading-relaxed max-w-3xl',
									isRTL && 'font-arabic'
								)}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.2 }}
							>
								{page.heroDescription}
							</motion.p>
						</div>
					</div>
				</section>

				{/* Overview & AI Sections */}
				<section className='py-16'>
					<div className='container mx-auto px-4'>
						<div className='grid gap-12 lg:grid-cols-2'>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.1 }}
							>
								<h2
									className={cn(
										'text-2xl md:text-3xl font-semibold mb-4',
										isRTL && 'font-arabic'
									)}
								>
									{page.overviewTitle}
								</h2>
								<div
									className={cn(
										'space-y-4 text-base text-muted-foreground leading-relaxed',
										isRTL && 'font-arabic'
									)}
								>
									{page.overviewBody.map((p, idx) => (
										<p key={idx}>{p}</p>
									))}
								</div>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.2 }}
							>
								<h2
									className={cn(
										'text-2xl md:text-3xl font-semibold mb-4',
										isRTL && 'font-arabic'
									)}
								>
									{page.aiTitle}
								</h2>
								<div
									className={cn(
										'space-y-4 text-base text-muted-foreground leading-relaxed',
										isRTL && 'font-arabic'
									)}
								>
									{page.aiBody.map((p, idx) => (
										<p key={idx}>{p}</p>
									))}
								</div>
								<div className='mt-6 grid gap-4 sm:grid-cols-2'>
									<div className='rounded-xl border border-primary/20 bg-primary/5 p-4 text-sm'>
										<p className='font-semibold text-primary'>
											{isRTL
												? 'تكامل الأنظمة'
												: 'Deep integration with TMS / WMS / YMS'}
										</p>
										<p className='mt-1 text-muted-foreground'>
											{isRTL
												? 'تصميم معماري يربط أنظمة النقل والمستودعات والمخزون في طبقة تحكم واحدة.'
												: 'Architecture that connects TMS, WMS, YMS, and analytics into a single control layer.'}
										</p>
									</div>
									<div className='rounded-xl border border-primary/20 bg-primary/5 p-4 text-sm'>
										<p className='font-semibold text-primary'>
											{isRTL
												? 'نتائج قابلة للقياس'
												: 'Measurable business outcomes'}
										</p>
										<p className='mt-1 text-muted-foreground'>
											{isRTL
												? 'كل حالة استخدام مصممة لقياس العائد على الاستثمار، وتقليل التكاليف، وتحسين خدمة العملاء.'
												: 'Each use case is designed and monitored against ROI, cost, and service KPIs.'}
										</p>
									</div>
								</div>
							</motion.div>
						</div>
					</div>
				</section>

				{/* Capabilities */}
				<section className='py-16 bg-muted/40'>
					<div className='container mx-auto px-4'>
						<motion.div
							className={cn('mb-10', isRTL && 'text-right')}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
						>
							<h2
								className={cn(
									'text-2xl md:text-3xl font-semibold mb-3',
									isRTL && 'font-arabic'
								)}
							>
								{page.capabilitiesTitle}
							</h2>
							<p
								className={cn(
									'text-base text-muted-foreground max-w-3xl',
									isRTL && 'font-arabic ml-auto'
								)}
							>
								{isRTL
									? 'مجموعة من القدرات العملية التي تجمع بين الاستشارات والبرمجيات والبيانات لضمان نجاح التنفيذ.'
									: 'A practical set of capabilities that blend consulting, software, and data to deliver tangible improvements.'}
							</p>
						</motion.div>

						<div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
							{page.capabilities.map((capability, idx) => (
								<motion.div
									key={capability.title}
									className='h-full rounded-2xl border border-border bg-card p-5 shadow-sm'
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.4, delay: 0.05 * idx }}
								>
									<h3
										className={cn(
											'text-lg font-semibold mb-2',
											isRTL && 'font-arabic text-right'
										)}
									>
										{capability.title}
									</h3>
									<p
										className={cn(
											'text-sm text-muted-foreground leading-relaxed',
											isRTL && 'font-arabic text-right'
										)}
									>
										{capability.description}
									</p>
								</motion.div>
							))}
						</div>
					</div>
				</section>

				{/* Outcomes & Use Cases */}
				<section className='py-16'>
					<div className='container mx-auto px-4 space-y-12'>
						<motion.div
							className='grid gap-10 lg:grid-cols-2'
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
						>
							<div>
								<h2
									className={cn(
										'text-2xl md:text-3xl font-semibold mb-3',
										isRTL && 'font-arabic text-right'
									)}
								>
									{page.outcomesTitle}
								</h2>
								<p
									className={cn(
										'text-base text-muted-foreground mb-6',
										isRTL && 'font-arabic text-right'
									)}
								>
									{isRTL
										? 'نحدد منذ البداية كيف سيتم قياس النجاح: مؤشرات الأداء الرئيسية، والعائد على الاستثمار، وكفاءة العمليات.'
										: 'From the first workshop, we agree how success will be measured—through KPIs, ROI, and operational resilience.'}
								</p>
								<div className='grid gap-4 sm:grid-cols-2'>
									{page.outcomes.map((outcome) => (
										<div
											key={outcome.title}
											className='rounded-xl border border-primary/20 bg-primary/5 p-4'
										>
											<p
												className={cn(
													'text-sm font-semibold text-primary mb-1',
													isRTL && 'font-arabic text-right'
												)}
											>
												{outcome.title}
											</p>
											<p
												className={cn(
													'text-xs text-muted-foreground',
													isRTL && 'font-arabic text-right'
												)}
											>
												{outcome.description}
											</p>
										</div>
									))}
								</div>
							</div>

							<div>
								<h2
									className={cn(
										'text-2xl md:text-3xl font-semibold mb-3',
										isRTL && 'font-arabic text-right'
									)}
								>
									{page.useCasesTitle}
								</h2>
								<div className='space-y-6'>
									{page.useCases.map((useCase, idx) => (
										<div
											key={useCase.title}
											className='rounded-2xl border border-border bg-card p-5'
										>
											<p className='text-xs font-medium text-primary mb-1'>
												{isRTL
													? `حالة تطبيق ${idx + 1}`
													: `Use case ${idx + 1}`}
											</p>
											<h3
												className={cn(
													'text-lg font-semibold mb-2',
													isRTL && 'font-arabic text-right'
												)}
											>
												{useCase.title}
											</h3>
											<div
												className={cn(
													'space-y-2 text-sm text-muted-foreground',
													isRTL && 'font-arabic text-right'
												)}
											>
												<p>
													<strong>
														{isRTL ? 'التحدي: ' : 'Challenge: '}
													</strong>
													{useCase.challenge}
												</p>
												<p>
													<strong>
														{isRTL ? 'حل ITSC: ' : 'ITSC solution: '}
													</strong>
													{useCase.solution}
												</p>
												<p>
													<strong>
														{isRTL ? 'الأثر: ' : 'Impact: '}
													</strong>
													{useCase.impact}
												</p>
											</div>
										</div>
									))}
								</div>
							</div>
						</motion.div>

						{/* CTA */}
						<motion.div
							className={cn(
								'rounded-2xl border border-primary/30 bg-gradient-to-r from-primary/10 to-primary/5 px-6 py-10 text-center md:px-10',
								isRTL && 'font-arabic'
							)}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
						>
							<h3 className='text-2xl md:text-3xl font-semibold mb-3'>
								{isRTL
									? 'هل تريد نموذجاً مشابهاً في عملياتك؟'
									: 'Ready to apply this model in your operation?'}
							</h3>
							<p className='mx-auto mb-6 max-w-2xl text-base text-muted-foreground'>
								{isRTL
									? 'تواصل مع فريق ITSC لتصميم خريطة طريق مخصصة تعتمد على الذكاء الاصطناعي وتحليلات البيانات وهندسة الأنظمة، وتتناسب مع شبكتك وسوقك.'
									: 'Speak with the ITSC team to design a tailored roadmap that uses AI, data analytics, and system architecture to transform your specific network and market context.'}
							</p>
							<a
								href={`/${lang}/contact`}
								className='inline-flex rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90'
							>
								{dictionary.contact.title}
							</a>
						</motion.div>
					</div>
				</section>
			</main>
			<Footer dictionary={dictionary} lang={lang} />
		</div>
	);
}


