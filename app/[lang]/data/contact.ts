import {
	Clock,
	Headphones,
	Mail,
	MessageCircle,
	Phone,
	Users,
} from 'lucide-react';

export const contactData = {
	en: {
		contactMethods: [
			{
				icon: Phone,
				title: 'Phone Support',
				description: 'Speak directly with our experts',
				details: [
					{ label: 'Any Inquiries', value: '+966 58 012 2162', type: 'tel' },
				],
				availability: '24/7 Support Available',
			},
			{
				icon: Mail,
				title: 'Email Contact',
				description: 'Get detailed responses to your inquiries',
				details: [
					{
						label: 'General Inquiries',
						value: 'info@itsc.site',
						type: 'email',
					},
				],
				availability: 'Response within 2 hours',
			},
		],
		quickActions: [
			{
				icon: MessageCircle,
				title: 'Schedule a Demo',
				description: 'See our AI solutions in action',
				action: 'Book Demo',
				color: 'bg-blue-500 hover:bg-blue-600',
			},
			{
				icon: Users,
				title: 'Consultation Call',
				description: 'Discuss your supply chain challenges',
				action: 'Schedule Call',
				color: 'bg-green-500 hover:bg-green-600',
			},
			{
				icon: Headphones,
				title: 'Technical Support',
				description: 'Get help with existing solutions',
				action: 'Get Support',
				color: 'bg-purple-500 hover:bg-purple-600',
			},
		],
		form: {
			firstName: 'First Name',
			lastName: 'Last Name',
			email: 'Email Address',
			phone: 'Phone Number',
			message: 'Your Message',
			submit: 'Send Message',
		},
		officeDetails: [
			{
				city: 'Riyadh',
				country: 'Saudi Arabia',
				address: 'King Fahd Road, Olaya District',
				postalCode: 'Riyadh 12211',
				phone: '+966 11 234 5678',
				email: 'riyadh@itsc-solutions.com',
				hours: 'Sunday - Thursday: 8:00 AM - 6:00 PM',
				image: '/placeholder.svg?height=200&width=300',
				isHeadquarters: true,
			},
			{
				city: 'Dubai',
				country: 'United Arab Emirates',
				address: 'Dubai International Financial Centre',
				postalCode: 'Dubai, UAE',
				phone: '+971 4 567 8901',
				email: 'dubai@itsc-solutions.com',
				hours: 'Sunday - Thursday: 9:00 AM - 6:00 PM',
				image: '/placeholder.svg?height=200&width=300',
				isHeadquarters: false,
			},
		],
	},
	ar: {
		contactMethods: [
			{
				icon: Phone,
				title: 'الدعم الهاتفي',
				description: 'تحدث مباشرة مع خبرائنا',
				details: [
					{ label: 'أي استفسارات', value: '+966 58 012 2162', type: 'tel' },
				],
				availability: 'دعم متاح على مدار الساعة',
			},
			{
				icon: Mail,
				title: 'التواصل عبر البريد الإلكتروني',
				description: 'احصل على ردود مفصلة على استفساراتك',
				details: [
					{
						label: 'الاستفسارات العامة',
						value: 'info@itsc.site',
						type: 'email',
					},
				],
				availability: 'رد خلال ساعتين',
			},
		],
		quickActions: [
			{
				icon: MessageCircle,
				title: 'جدولة عرض توضيحي',
				description: 'شاهد حلول الذكاء الاصطناعي في العمل',
				action: 'حجز عرض توضيحي',
				color: 'bg-blue-500 hover:bg-blue-600',
			},
			{
				icon: Users,
				title: 'مكالمة استشارية',
				description: 'ناقش تحديات سلسلة التوريد الخاصة بك',
				action: 'جدولة مكالمة',
				color: 'bg-green-500 hover:bg-green-600',
			},
			{
				icon: Headphones,
				title: 'الدعم الفني',
				description: 'احصل على مساعدة في الحلول الحالية',
				action: 'الحصول على دعم',
				color: 'bg-purple-500 hover:bg-purple-600',
			},
		],
		form: {
			firstName: 'الاسم الأول',
			lastName: 'اسم العائلة',
			email: 'عنوان البريد الإلكتروني',
			phone: 'رقم الهاتف',
			message: 'رسالتك',
			submit: 'إرسال الرسالة',
		},
		officeDetails: [
			{
				city: 'الرياض',
				country: 'المملكة العربية السعودية',
				address: 'طريق الملك فهد، حي العليا',
				postalCode: 'الرياض 12211',
				phone: '+966 11 234 5678',
				email: 'riyadh@itsc-solutions.com',
				hours: 'الأحد - الخميس: 8:00 ص - 6:00 م',
				image: '/placeholder.svg?height=200&width=300',
				isHeadquarters: true,
			},
			{
				city: 'دبي',
				country: 'دولة الإمارات العربية المتحدة',
				address: 'مركز دبي المالي العالمي',
				postalCode: 'دبي، الإمارات العربية المتحدة',
				phone: '+971 4 567 8901',
				email: 'dubai@itsc-solutions.com',
				hours: 'الأحد - الخميس: 9:00 ص - 6:00 م',
				image: '/placeholder.svg?height=200&width=300',
				isHeadquarters: false,
			},
		],
	},
};
