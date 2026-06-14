import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { GITHUB_URL } from "@/consts";

export function Footer() {
  const navigation = [
    { name: "FAQ", href: "/faq" },
  ];

  const social = [
    { name: "Github", href: "https://github.com/daoliveirafilho" },
    { name: "Medium", href: "https://medium.com/@da.oliveira.filho" },
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
        ><path
            fillRule="evenodd"
            clipRule="evenodd"
d="M17.02 28.00L16.77 28.00Q15.75 27.76 14.78 27.65Q13.82 27.54 12.50 27.54Q10.38 27.54 8.40 28.48Q6.42 29.42 4.59 30.91L4.59 50.27L0 50.27L0 23.00L4.59 23.00L4.59 27.03Q7.32 24.83 9.41 23.91Q11.50 23.00 13.67 23.00Q14.87 23.00 15.41 23.06Q15.94 23.12 17.02 23.29L17.02 28.00ZM44.17 37.11L24.07 37.11Q24.07 39.62 24.83 41.49Q25.59 43.36 26.90 44.56Q28.17 45.73 29.92 46.31Q31.67 46.90 33.76 46.90Q36.55 46.90 39.37 45.79Q42.19 44.68 43.38 43.60L43.63 43.60L43.63 48.61Q41.31 49.58 38.89 50.24Q36.47 50.90 33.81 50.90Q27.03 50.90 23.22 47.23Q19.41 43.55 19.41 36.79Q19.41 30.10 23.06 26.17Q26.71 22.24 32.67 22.24Q38.18 22.24 41.17 25.46Q44.17 28.69 44.17 34.62L44.17 37.11M39.70 33.59Q39.67 29.98 37.88 28.00Q36.08 26.03 32.42 26.03Q28.74 26.03 26.55 28.20Q24.37 30.37 24.07 33.59L39.70 33.59ZM75.88 50.27L69.82 50.27L58.89 38.33L55.91 41.16L55.91 50.27L51.32 50.27L51.32 12.28L55.91 12.28L55.91 36.65L69.17 23.00L74.95 23.00L62.28 35.60L75.88 50.27ZM101.90 50.27L97.34 50.27L97.34 47.36Q96.73 47.78 95.69 48.52Q94.65 49.27 93.68 49.71Q92.53 50.27 91.04 50.65Q89.55 51.03 87.55 51.03Q83.86 51.03 81.30 48.58Q78.74 46.14 78.74 42.36Q78.74 39.26 80.07 37.34Q81.40 35.42 83.86 34.33Q86.35 33.23 89.84 32.84Q93.33 32.45 97.34 32.25L97.34 31.54Q97.34 29.98 96.79 28.96Q96.24 27.93 95.21 27.34Q94.24 26.78 92.87 26.59Q91.50 26.39 90.01 26.39Q88.21 26.39 85.99 26.87Q83.76 27.34 81.40 28.25L81.15 28.25L81.15 23.58Q82.50 23.22 85.03 22.78Q87.57 22.34 90.04 22.34Q92.92 22.34 95.06 22.81Q97.19 23.29 98.75 24.44Q100.29 25.56 101.10 27.34Q101.90 29.13 101.90 31.76L101.90 50.27M97.34 43.55L97.34 35.96Q95.24 36.08 92.40 36.33Q89.55 36.57 87.89 37.04Q85.91 37.60 84.69 38.78Q83.47 39.97 83.47 42.04Q83.47 44.38 84.89 45.57Q86.30 46.75 89.21 46.75Q91.63 46.75 93.63 45.81Q95.63 44.87 97.34 43.55ZM115.38 50.27L110.79 50.27L110.79 12.28L115.38 12.28L115.38 50.27ZM129.10 50.27L124.51 50.27L124.51 12.28L129.10 12.28L129.10 50.27Z"
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
