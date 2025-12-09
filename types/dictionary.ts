export interface Dictionary {
	hero: {
		tagline: string;
		title: {
			part1: string;
			part2: string;
			part3: string;
		};
		description: string;
		cta: string;
	};
	header: {
		home: string;
		about: string;
		solutions: string;
		howWeWork: string;
		successStory: string;
		faq: string;
		contact: string;
		getStarted: string;
	};
	about: {
		title: string;
		description: string;
		features: Array<{
			title: string;
			description: string;
		}>;
		stats: Array<{
			value: string;
			label: string;
		}>;
	};
	services: {
		title: string;
		description: string;
		categories: {
			all: string;
			analytics: string;
			operations: string;
			risk: string;
			technology: string;
			services: string;
		};
		searchPlaceholder: string;
		items: Array<{
			title: string;
			description: string;
		}>;
	};
	capabilities: {
		title: string;
		subtitle: string;
		sections: Array<{
			id: string;
			headline: string;
			icon: string;
			content?: string;
			benefits?: Array<{
				title: string;
				description: string;
			}>;
			metrics?: Array<{
				label: string;
				value: string;
				description: string;
			}>;
		}>;
	};
	howWeWork: {
		title: string;
		description: string;
		steps: Array<{
			title: string;
			description: string;
		}>;
	};
	successStory: {
		title: string;
		description: string;
		metrics: Array<{
			value: string;
			label: string;
		}>;
	};
	faq: {
		title: string;
		description: string;
		categories: Array<{
			id: string;
			title: string;
		}>;
	};
	contact: {
		title: string;
		description: string;
		methods: Array<{
			title: string;
			description: string;
			details: Array<{
				label: string;
				value: string;
			}>;
			availability: string;
		}>;
		actions: Array<{
			title: string;
			description: string;
			action: string;
		}>;
	};
	footer: {
		company: {
			name: string;
			fullName: string;
			description: string;
		};
		contact: {
			email: string;
			phone: string;
		};
		sections: {
			company: string;
			solutions: string;
			industries: string;
			resources: string;
			support: string;
			followUs: string;
			legal: string;
		};
		links: {
			company: Array<{
				name: string;
				href: string;
			}>;
			solutions: Array<{
				name: string;
				href: string;
			}>;
			industries: Array<{
				name: string;
				href: string;
			}>;
			resources: Array<{
				name: string;
				href: string;
			}>;
			support: Array<{
				name: string;
				href: string;
			}>;
			legal: Array<{
				name: string;
				href: string;
			}>;
		};
		social: Array<{
			name: string;
			href: string;
		}>;
		copyright: string;
	};
}
