import { type NextRequest, NextResponse } from 'next/server';

// List of supported languages
export const languages = ['en', 'ar'];
export const defaultLanguage = 'en';

export function middleware(request: NextRequest) {
	const pathname = request.nextUrl.pathname;

	// Skip middleware for api routes and static assets
	if (
		pathname.startsWith('/api/') ||
		pathname.startsWith('/_next/') ||
		pathname.includes('.')
	) {
		return NextResponse.next();
	}

	// Check if the pathname already has a language
	const pathnameHasLanguage = languages.some(
		(lang) => pathname.startsWith(`/${lang}/`) || pathname === `/${lang}`
	);

	if (pathnameHasLanguage) return NextResponse.next();

	// Always default to English when no language prefix is provided
	const lang = defaultLanguage;
	const newUrl = new URL(
		`/${lang}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
		request.url
	);

	return NextResponse.redirect(newUrl);
}

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
