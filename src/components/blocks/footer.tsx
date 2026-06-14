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
        ><path d="M39.434 62.871L39.434 62.871Q41.367 62.871 43.477 63.076Q45.586 63.281 47.227 63.633L47.227 63.633L45.996 72.656Q44.414 72.246 42.480 72.012Q40.547 71.777 38.848 71.777L38.848 71.777Q34.980 71.777 31.553 73.330Q28.125 74.883 25.547 77.783Q22.969 80.684 21.504 84.756Q20.039 88.828 20.039 93.809L20.039 93.809L20.039 128.262L10.254 128.262L10.254 64.043L18.340 64.043L19.395 75.879L19.805 75.879Q21.797 72.305 24.609 69.346Q27.422 66.387 31.143 64.629Q34.863 62.871 39.434 62.871ZM84.023 62.871L84.023 62.871Q92.227 62.871 98.086 66.504Q103.945 70.137 107.051 76.670Q110.156 83.203 110.156 91.934L110.156 91.934L110.156 97.969L65.801 97.969Q65.977 109.277 71.426 115.195Q76.875 121.113 86.777 121.113L86.777 121.113Q92.871 121.113 97.559 120Q102.246 118.887 107.285 116.719L107.285 116.719L107.285 125.273Q102.422 127.441 97.646 128.438Q92.871 129.434 86.367 129.434L86.367 129.434Q77.109 129.434 70.225 125.654Q63.340 121.875 59.531 114.551Q55.723 107.227 55.723 96.621L55.723 96.621Q55.723 86.250 59.209 78.662Q62.695 71.074 69.053 66.973Q75.410 62.871 84.023 62.871ZM83.906 70.840L83.906 70.840Q76.113 70.840 71.484 75.938Q66.855 81.035 65.977 90.176L65.977 90.176L99.961 90.176Q99.902 84.434 98.174 80.068Q96.445 75.703 92.930 73.271Q89.414 70.840 83.906 70.840ZM126.680 37.090L136.348 37.090L136.348 84.434Q136.348 86.777 136.172 90.146Q135.996 93.516 135.879 96.094L135.879 96.094L136.289 96.094Q137.520 94.570 139.893 91.582Q142.266 88.594 143.906 86.777L143.906 86.777L165.234 64.043L176.660 64.043L150.820 91.465L178.535 128.262L166.816 128.262L144.141 97.852L136.348 105L136.348 128.262L126.680 128.262L126.680 37.090ZM213.750 62.988L213.750 62.988Q225.234 62.988 230.801 68.145Q236.367 73.301 236.367 84.609L236.367 84.609L236.367 128.262L229.277 128.262L227.402 118.770L226.934 118.770Q224.238 122.285 221.309 124.658Q218.379 127.031 214.541 128.232Q210.703 129.434 205.137 129.434L205.137 129.434Q199.277 129.434 194.736 127.383Q190.195 125.332 187.588 121.172Q184.980 117.012 184.980 110.625L184.980 110.625Q184.980 101.016 192.598 95.859Q200.215 90.703 215.801 90.234L215.801 90.234L226.875 89.766L226.875 85.840Q226.875 77.520 223.301 74.180Q219.727 70.840 213.223 70.840L213.223 70.840Q208.184 70.840 203.613 72.305Q199.043 73.770 194.941 75.762L194.941 75.762L191.953 68.379Q196.289 66.152 201.914 64.570Q207.539 62.988 213.750 62.988ZM226.758 102.539L226.758 96.621L216.973 97.031Q204.961 97.500 200.039 100.957Q195.117 104.414 195.117 110.742L195.117 110.742Q195.117 116.250 198.457 118.887Q201.797 121.523 207.305 121.523L207.305 121.523Q215.859 121.523 221.309 116.777Q226.758 112.031 226.758 102.539L226.758 102.539ZM266.191 37.090L266.191 128.262L256.406 128.262L256.406 37.090L266.191 37.090ZM296.484 37.090L296.484 128.262L286.699 128.262L286.699 37.090L296.484 37.090Z"
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
