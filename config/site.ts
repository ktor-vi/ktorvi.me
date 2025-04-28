import { SiteConfig } from "@/types/siteConfig";

export const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://ktorvi.me";
export const SOURCE_CODE_URL = 'https://github.com/ktor-vi/ktorvi.me';

const TWITTER_URL = 'https://x.com/weijunext'
const BSKY_URL = 'https://bsky.app/profile/judewei.bsky.social'
const EMAIL_URL = 'mailto:me@ktorvi.me'
const GITHUB_URL = 'https://github.com/ktor-vi'

export const siteConfig: SiteConfig = {
  name: "Victor Philippe",
  tagLine: 'Junior Developer',
  description:
    "Young and motivated developer, ready to take on new challenges and learn from experienced professionals.",
  url: BASE_URL,
  authors: [
    {
      name: "ktorvi",
      url: "https://ktorvi.me",
    }
  ],
  creator: '@ktorvi',
  socialLinks: {
    bluesky: BSKY_URL,
    twitter: TWITTER_URL,
    email: EMAIL_URL,
    github: GITHUB_URL,
  },
  themeColors: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  defaultNextTheme: 'system', // next-theme option: system | dark | light
  icons: {
    icon: "/favicon.ico",
    shortcut: "/logo.png",
    apple: "/logo.png", // apple-touch-icon.png
  },
}
