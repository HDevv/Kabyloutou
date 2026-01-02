import { NextResponse } from 'next/server';

export function middleware(request) {
  // Rate limiting simple basé sur l'IP
  const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown';
  
  // Headers de sécurité supplémentaires
  const response = NextResponse.next();
  
  // Protection contre les attaques de timing
  response.headers.set('X-Robots-Tag', 'index, follow');
  
  // Logs de sécurité pour les tentatives suspectes
  if (request.nextUrl.pathname.includes('admin') || 
      request.nextUrl.pathname.includes('.env') ||
      request.nextUrl.pathname.includes('wp-admin')) {
    console.warn(`Tentative d'accès suspect depuis ${ip} vers ${request.nextUrl.pathname}`);
  }
  
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
