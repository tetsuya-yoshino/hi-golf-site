import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hi Golf",
  description: "HGQM based data-driven golf improvement studio",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

const headerNavItems = [
  { href: "/hgqm", label: "HGQM" },
  { href: "/method", label: "Method" },
  { href: "/blog", label: "Blog" },
  { href: "/initial-diagnosis", label: "Initial Diagnosis" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

const footerGroups = [
  {
    title: "Pages",
    links: [
      { href: "/", label: "Home" },
      { href: "/hgqm", label: "HGQM" },
      { href: "/method", label: "Method" },
      { href: "/blog", label: "Blog" },
      { href: "/about", label: "About" },
    ],
  },
  {
    title: "Lesson",
    links: [
      { href: "/initial-diagnosis", label: "Initial Diagnosis" },
      { href: "/pricing", label: "Pricing" },
      { href: "/lesson", label: "Lesson" },
      { href: "/example", label: "Example" },
    ],
  },
  {
    title: "Information",
    links: [
      { href: "/philosophy", label: "Philosophy" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="bg-white text-slate-900 antialiased">
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
            <Link href="/" className="text-5xl font-bold tracking-tight">
              Hi Golf
            </Link>

            <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
              {headerNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition hover:text-slate-900 ${
                    item.href === "/initial-diagnosis"
                      ? "font-semibold text-slate-900"
                      : ""
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        {children}

        <footer className="border-t border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-14 md:px-10">
            <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
              <div>
                <Link href="/" className="text-4xl font-bold tracking-tight">
                  Hi Golf
                </Link>
                <p className="mt-5 max-w-md text-sm leading-7 text-slate-600">
                  Hi Golfは、課題を観測し、傾向を整理し、原因を見極め、
                  改善を設計することで、再現性を高めていくゴルフレッスンです。
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  まずは初回診断で、何を優先して改善すべきかを明確にします。
                </p>
              </div>

              {footerGroups.map((group) => (
                <div key={group.title}>
                  <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
                    {group.title}
                  </h2>
                  <ul className="mt-4 space-y-3">
                    {group.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="text-sm text-slate-600 transition hover:text-slate-900"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-col gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
              <p>© {new Date().getFullYear()} Hi Golf. All rights reserved.</p>
              <div className="flex flex-wrap gap-4">
                <Link href="/initial-diagnosis" className="hover:text-slate-900">
                  初回診断
                </Link>
                <Link href="/pricing" className="hover:text-slate-900">
                  料金プラン
                </Link>
                <Link href="/contact" className="hover:text-slate-900">
                  お問い合わせ
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}