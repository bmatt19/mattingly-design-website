import "@/styles/globals.css";
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mattingly Design Inc.",
  description: "Luxury architectural design in Southern Arizona",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}[13:02:51.064] Cloning github.com/bmatt19/mattingly-design-website (Branch: main, Commit: 27c294d)
[13:02:51.753] Previous build caches not available
[13:02:51.879] Cloning completed: 813.000ms
[13:02:52.387] Running build in Washington, D.C., USA (East) – iad1
[13:02:53.120] Running "vercel build"
[13:02:53.579] Vercel CLI 41.4.1
[13:02:53.885] Installing dependencies...
[13:03:16.248] npm warn deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
[13:03:16.249] npm warn deprecated rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported
[13:03:17.058] npm warn deprecated glob@7.1.7: Glob versions prior to v9 are no longer supported
[13:03:17.178] npm warn deprecated @humanwhocodes/object-schema@2.0.3: Use @eslint/object-schema instead
[13:03:17.237] npm warn deprecated @humanwhocodes/config-array@0.13.0: Use @eslint/config-array instead
[13:03:18.560] npm warn deprecated eslint@8.57.1: This version is no longer supported. Please see https://eslint.org/version-support for other options.
[13:03:22.460] 
[13:03:22.460] added 391 packages in 28s
[13:03:22.461] 
[13:03:22.461] 148 packages are looking for funding
[13:03:22.461]   run `npm fund` for details
[13:03:22.509] Detected Next.js version: 14.0.4
[13:03:22.515] Running "npm run build"
[13:03:22.649] 
[13:03:22.649] > mattingly-design-website@0.1.0 build
[13:03:22.649] > next build
[13:03:22.649] 
[13:03:23.332] Attention: Next.js now collects completely anonymous telemetry regarding usage.
[13:03:23.333] This information is used to shape Next.js' roadmap and prioritize features.
[13:03:23.333] You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
[13:03:23.333] https://nextjs.org/telemetry
[13:03:23.333] 
[13:03:23.409]    ▲ Next.js 14.0.4
[13:03:23.410] 
[13:03:23.410]    Creating an optimized production build ...
[13:03:26.396] Failed to compile.
[13:03:26.396] 
[13:03:26.397] ./app/layout.tsx
[13:03:26.397] Module not found: Can't resolve './globals.css'
[13:03:26.397] 
[13:03:26.397] https://nextjs.org/docs/messages/module-not-found
[13:03:26.398] 
[13:03:26.398] 
[13:03:26.398] > Build failed because of webpack errors
[13:03:26.424] Error: Command "npm run build" exited with 1
[13:03:26.739] 
