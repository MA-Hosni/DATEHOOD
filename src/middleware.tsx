import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// const isProtectedRoute = createRouteMatcher(['/', '/api/webhook/clerk']);
const isProtectedRoute = createRouteMatcher([
  '/',
  '/activity(.*)',
  '/communities(.*)',
  '/create-thread(.*)',
  '/profile(.*)',
  '/search(.*)',
  '/thread(.*)',
]);
export default clerkMiddleware((auth, request) => {
  if (isProtectedRoute(request)) {
    auth().protect();
  }
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};