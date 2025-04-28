import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const LOCALES = ['en', 'fr']
export const DEFAULT_LOCALE = 'en'
export const LOCALE_NAMES: Record<string, string> = {
  'en': "English",
  'fr': "Français",
};

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: LOCALES,

  // Used when no locale matches
  defaultLocale: DEFAULT_LOCALE,

  // auto detect locale
  localeDetection: process.env.NEXT_PUBLIC_LOCALE_DETECTION === 'true',

  localePrefix: 'as-needed',
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const {
  Link,
  redirect,
  usePathname,
  useRouter,
  getPathname,
} = createNavigation(routing);


export type Locale = (typeof routing.locales)[number];
