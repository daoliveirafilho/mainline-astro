import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { GITHUB_URL } from "@/consts";

export function Footer() {
  const navigation = [
    { name: "Product", href: "/#feature-modern-teams" },
    { name: "About Us", href: "/about" },
    { name: "Pricing", href: "/pricing" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  const social = [
    { name: "Xwitter", href: "https://x.com/ausrobdev" },
    { name: "LinkedIn", href: "#" },
  ];

  const legal = [{ name: "Privacy Policy", href: "/privacy" }];

  return (
    <footer className="flex flex-col items-center gap-14 pt-28 lg:pt-32">
      <div className="container space-y-3 text-center">
        <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
          Start your free trial today
        </h2>
        <p className="text-muted-foreground mx-auto max-w-xl leading-snug text-balance">
          Mainline is the fit-for-purpose tool for planning and building modern
          software products.
        </p>
        <div>
          <Button size="lg" className="mt-4" asChild>
            <a href={GITHUB_URL}>Get template</a>
          </Button>
        </div>
      </div>

      <nav className="container flex flex-col items-center gap-4">
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {navigation.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="font-medium transition-opacity hover:opacity-75"
              >
                {item.name}
              </a>
            </li>
          ))}
          {social.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="flex items-center gap-0.5 font-medium transition-opacity hover:opacity-75"
              >
                {item.name} <ArrowUpRight className="size-4" />
              </a>
            </li>
          ))}
        </ul>
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {legal.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="text-muted-foreground text-sm transition-opacity hover:opacity-75"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="text-primary mt-10 w-full md:mt-14 lg:mt-20">
        <svg
          width="1570"
          height="293"
          viewBox="0 0 1570 293"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
d="M30.08 50.27L23.80 50.27L11.65 35.82L4.83 35.82L4.83 50.27L0 50.27L0 13.92L10.18 13.92Q13.48 13.92 15.67 14.34Q17.87 14.77 19.63 15.87Q21.61 17.11 22.72 19.01Q23.83 20.90 23.83 23.80Q23.83 27.73 21.85 30.38Q19.87 33.03 16.41 34.38L30.08 50.27M18.77 24.15Q18.77 22.58 18.23 21.37Q17.68 20.17 16.41 19.34Q15.36 18.63 13.92 18.35Q12.48 18.07 10.52 18.07L4.83 18.07L4.83 31.79L9.72 31.79Q12.01 31.79 13.72 31.38Q15.43 30.98 16.63 29.88Q17.72 28.86 18.25 27.53Q18.77 26.20 18.77 24.15ZM58.72 50.27L34.77 50.27L34.77 13.92L58.72 13.92L58.72 18.21L39.60 18.21L39.60 28.17L58.72 28.17L58.72 32.47L39.60 32.47L39.60 45.97L58.72 45.97L58.72 50.27ZM95.61 50.27L89.33 50.27L74.95 34.08L71.34 37.94L71.34 50.27L66.50 50.27L66.50 13.92L71.34 13.92L71.34 32.89L88.99 13.92L94.85 13.92L78.61 31.01L95.61 50.27ZM129.69 50.27L124.54 50.27L120.97 40.14L105.25 40.14L101.68 50.27L96.78 50.27L110.01 13.92L116.46 13.92L129.69 50.27M119.48 35.99L113.11 18.14L106.71 35.99L119.48 35.99ZM158.20 50.27L135.21 50.27L135.21 13.92L140.04 13.92L140.04 45.97L158.20 45.97L158.20 50.27ZM186.04 50.27L163.04 50.27L163.04 13.92L167.87 13.92L167.87 45.97L186.04 45.97L186.04 50.27Z"
            fill="url(#paint0_linear_59_191)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_59_191"
              x1="742.5"
              y1="0"
              x2="742.5"
              y2="218.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="currentColor" />
              <stop offset="1" stopColor="#F8F8F8" stopOpacity="0.41" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </footer>
  );
}
