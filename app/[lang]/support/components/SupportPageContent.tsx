'use client';

import { Dictionary } from '@/types/dictionary';
import { Locale } from '@/i18n-config';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MessageCircle, Book, Video, Users } from 'lucide-react';

interface SupportPageContentProps {
	dictionary: Dictionary;
	lang: Locale;
}

const supportOptions = [
	{
		icon: Phone,
		title: {
			en: 'Phone Support',
			ar: 'الدعم الهاتفي'
		},
		description: {
			en: 'Get immediate help from our support team',
			ar: 'احصل على مساعدة فورية من فريق الدعم لدينا'
		},
		action: {
			en: 'Call Now',
			ar: 'اتصل الآن'
		},
		availability: {
			en: '24/7 Available',
			ar: 'متاح على مدار الساعة'
		}
	},
	{
		icon: Mail,
		title: {
			en: 'Email Support',
			ar: 'دعم البريد الإلكتروني'
		},
		description: {
			en: 'Send us detailed questions and get comprehensive answers',
			ar: 'أرسل لنا أسئلة مفصلة واحصل على إجابات شاملة'
		},
		action: {
			en: 'Send Email',
			ar: 'إرسال بريد إلكتروني'
		},
		availability: {
			en: 'Response within 2 hours',
			ar: 'رد خلال ساعتين'
		}
	},
	{
		icon: MessageCircle,
		title: {
			en: 'Live Chat',
			ar: 'الدردشة المباشرة'
		},
		description: {
			en: 'Chat with our support agents in real-time',
			ar: 'تحدث مع وكلاء الدعم لدينا في الوقت الفعلي'
		},
		action: {
			en: 'Start Chat',
			ar: 'بدء الدردشة'
		},
		availability: {
			en: 'Mon-Fri 9AM-6PM',
			ar: 'الإثنين-الجمعة 9ص-6م'
		}
	}
];

const resources = [
	{
		icon: Book,
		title: {
			en: 'Documentation',
			ar: 'الوثائق'
		},
		description: {
			en: 'Comprehensive guides and API documentation',
			ar: 'أدلة شاملة ووثائق API'
		}
	},
	{
		icon: Video,
		title: {
			en: 'Video Tutorials',
			ar: 'دروس الفيديو'
		},
		description: {
			en: 'Step-by-step video guides for our solutions',
			ar: 'أدلة فيديو خطوة بخطوة لحلولنا'
		}
	},
	{
		icon: Users,
		title: {
			en: 'Community Forum',
			ar: 'منتدى المجتمع'
		},
		description: {
			en: 'Connect with other users and share experiences',
			ar: 'تواصل مع المستخدمين الآخرين وشارك التجارب'
		}
	}
];

export default function SupportPageContent({ dictionary, lang }: SupportPageContentProps) {
	return (
		<div className="min-h-screen bg-background">
			<Header dictionary={dictionary} lang={lang} />
			<main className="pt-20">
				{/* Hero Section */}
				<section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
					<div className="container mx-auto px-4">
						<div className="max-w-4xl mx-auto text-center">
							<h1 className="text-4xl md:text-6xl font-bold mb-6">
								{lang === 'ar' ? 'مركز المساعدة' : 'Help Center'}
							</h1>
							<p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
								{lang === 'ar' 
									? 'نحن هنا لمساعدتك في الحصول على أقصى استفادة من حلولنا'
									: 'We are here to help you get the most out of our solutions'
								}
							</p>
						</div>
					</div>
				</section>

				{/* Support Options */}
				<section className="py-20">
					<div className="container mx-auto px-4">
						<h2 className="text-3xl font-bold text-center mb-12">
							{lang === 'ar' ? 'كيف يمكننا مساعدتك؟' : 'How Can We Help You?'}
						</h2>
						<div className="grid md:grid-cols-3 gap-8">
							{supportOptions.map((option, index) => {
								const IconComponent = option.icon;
								return (
									<Card key={index} className="text-center hover:shadow-lg transition-shadow">
										<CardHeader>
											<div className="mx-auto mb-4 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
												<IconComponent className="w-6 h-6 text-primary" />
											</div>
											<CardTitle>{option.title[lang]}</CardTitle>
											<CardDescription>{option.description[lang]}</CardDescription>
										</CardHeader>
										<CardContent>
											<Button className="w-full mb-2">
												{option.action[lang]}
											</Button>
											<p className="text-sm text-muted-foreground">
												{option.availability[lang]}
											</p>
										</CardContent>
									</Card>
								);
							})}
						</div>
					</div>
				</section>

				{/* Contact Form */}
				<section className="py-20 bg-muted/50">
					<div className="container mx-auto px-4">
						<div className="max-w-2xl mx-auto">
							<h2 className="text-3xl font-bold text-center mb-12">
								{lang === 'ar' ? 'أرسل لنا رسالة' : 'Send Us a Message'}
							</h2>
							<Card>
								<CardContent className="p-6">
									<form className="space-y-6">
										<div className="grid md:grid-cols-2 gap-4">
											<div>
												<label className="text-sm font-medium mb-2 block">
													{dictionary.contact.form.firstName}
												</label>
												<Input placeholder={dictionary.contact.form.placeholders.firstName} />
											</div>
											<div>
												<label className="text-sm font-medium mb-2 block">
													{dictionary.contact.form.lastName}
												</label>
												<Input placeholder={dictionary.contact.form.placeholders.lastName} />
											</div>
										</div>
										<div>
											<label className="text-sm font-medium mb-2 block">
												{dictionary.contact.form.email}
											</label>
											<Input type="email" placeholder={dictionary.contact.form.placeholders.email} />
										</div>
										<div>
											<label className="text-sm font-medium mb-2 block">
												{lang === 'ar' ? 'الموضوع' : 'Subject'}
											</label>
											<Input placeholder={lang === 'ar' ? 'موضوع رسالتك' : 'Subject of your message'} />
										</div>
										<div>
											<label className="text-sm font-medium mb-2 block">
												{dictionary.contact.form.message}
											</label>
											<Textarea 
												placeholder={dictionary.contact.form.placeholders.message}
												rows={5}
											/>
										</div>
										<Button type="submit" className="w-full">
											{dictionary.contact.form.submit}
										</Button>
									</form>
								</CardContent>
							</Card>
						</div>
					</div>
				</section>

				{/* Resources */}
				<section className="py-20">
					<div className="container mx-auto px-4">
						<h2 className="text-3xl font-bold text-center mb-12">
							{lang === 'ar' ? 'موارد إضافية' : 'Additional Resources'}
						</h2>
						<div className="grid md:grid-cols-3 gap-8">
							{resources.map((resource, index) => {
								const IconComponent = resource.icon;
								return (
									<Card key={index} className="text-center">
										<CardHeader>
											<div className="mx-auto mb-4 w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
												<IconComponent className="w-6 h-6 text-secondary" />
											</div>
											<CardTitle>{resource.title[lang]}</CardTitle>
										</CardHeader>
										<CardContent>
											<CardDescription>{resource.description[lang]}</CardDescription>
										</CardContent>
									</Card>
								);
							})}
						</div>
					</div>
				</section>
			</main>
			<Footer dictionary={dictionary} lang={lang} />
		</div>
	);
}