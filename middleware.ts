import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { type NextRequest, NextResponse } from 'next/server';

// List of supported languages
export const languages = ['en', 'ar'];
export const defaultLanguage = 'en';

// Get the preferred language from the request
function getLanguage(request: NextRequest) {
	const negotiatorHeaders: Record<string, string> = {};
	request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

	const languages = new Negotiator({ headers: negotiatorHeaders }).languages();
	const locales = ['en', 'ar']; // Define supported locales
	return match(languages, locales, defaultLanguage);
}

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

	// Redirect if there is no language
	const lang = getLanguage(request);
	const newUrl = new URL(
		`/${lang}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
		request.url
	);

	return NextResponse.redirect(newUrl);
}

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
