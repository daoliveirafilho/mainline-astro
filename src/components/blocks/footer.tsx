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
      <Path d="M0 0H388V127H0z" fill="#fff" />
      <Path d="M1 1H9V9H1z" fill="#ddd" />
      <Path d="M10 1H18V9H10z" fill="#ddd" />
      <Path d="M19 1H27V9H19z" fill="#ddd" />
      <Path d="M28 1H36V9H28z" fill="#ddd" />
      <Path d="M37 1H45V9H37z" fill="#ddd" />
      <Path d="M46 1H54V9H46z" fill="#ddd" />
      <Path d="M55 1H63V9H55z" fill="#ddd" />
      <Path d="M64 1H72V9H64z" fill="#ddd" />
      <Path d="M73 1H81V9H73z" fill="#ddd" />
      <Path d="M82 1H90V9H82z" fill="#ddd" />
      <Path d="M91 1H99V9H91z" fill="#ddd" />
      <Path d="M100 1H108V9H100z" fill="#fff" />
      <Path d="M109 1H117V9H109z" fill="#ddd" />
      <Path d="M118 1H126V9H118z" fill="#fff" />
      <Path d="M127 1H135V9H127z" fill="#fff" />
      <Path d="M136 1H144V9H136z" fill="#fff" />
      <Path d="M145 1H153V9H145z" fill="#fff" />
      <Path d="M154 1H162V9H154z" fill="#fff" />
      <Path d="M163 1H171V9H163z" fill="#fff" />
      <Path d="M172 1H180V9H172z" fill="#ddd" />
      <Path d="M181 1H189V9H181z" fill="#fff" />
      <Path d="M190 1H198V9H190z" fill="#fff" />
      <Path d="M199 1H207V9H199z" fill="#fff" />
      <Path d="M208 1H216V9H208z" fill="#fff" />
      <Path d="M217 1H225V9H217z" fill="#fff" />
      <Path d="M226 1H234V9H226z" fill="#ddd" />
      <Path d="M235 1H243V9H235z" fill="#ddd" />
      <Path d="M244 1H252V9H244z" fill="#ddd" />
      <Path d="M253 1H261V9H253z" fill="#ddd" />
      <Path d="M262 1H270V9H262z" fill="#ddd" />
      <Path d="M271 1H279V9H271z" fill="#ddd" />
      <Path d="M280 1H288V9H280z" fill="#ddd" />
      <Path d="M289 1H297V9H289z" fill="#ddd" />
      <Path d="M298 1H306V9H298z" fill="#ddd" />
      <Path d="M307 1H315V9H307z" fill="#ddd" />
      <Path d="M316 1H324V9H316z" fill="#ddd" />
      <Path d="M325 1H333V9H325z" fill="#ddd" />
      <Path d="M334 1H342V9H334z" fill="#ddd" />
      <Path d="M343 1H351V9H343z" fill="#ddd" />
      <Path d="M352 1H360V9H352z" fill="#ddd" />
      <Path d="M361 1H369V9H361z" fill="#fff" />
      <Path d="M370 1H378V9H370z" fill="#ddd" />
      <Path d="M1 10H9V18H1z" fill="#ddd" />
      <Path d="M10 10H18V18H10z" fill="#ddd" />
      <Path d="M19 10H27V18H19z" fill="#ddd" />
      <Path d="M28 10H36V18H28z" fill="#ddd" />
      <Path d="M37 10H45V18H37z" fill="#ddd" />
      <Path d="M46 10H54V18H46z" fill="#fff" />
      <Path d="M55 10H63V18H55z" fill="#ddd" />
      <Path d="M64 10H72V18H64z" fill="#ddd" />
      <Path d="M73 10H81V18H73z" fill="#ddd" />
      <Path d="M82 10H90V18H82z" fill="#ddd" />
      <Path d="M91 10H99V18H91z" fill="#fff" />
      <Path d="M100 10H108V18H100z" fill="#ddd" />
      <Path d="M109 10H117V18H109z" fill="#ddd" />
      <Path d="M118 10H126V18H118z" fill="#fff" />
      <Path d="M127 10H135V18H127z" fill="#fff" />
      <Path d="M136 10H144V18H136z" fill="#fff" />
      <Path d="M145 10H153V18H145z" fill="#fff" />
      <Path d="M154 10H162V18H154z" fill="#fff" />
      <Path d="M163 10H171V18H163z" fill="#fff" />
      <Path d="M172 10H180V18H172z" fill="#fff" />
      <Path d="M181 10H189V18H181z" fill="#fff" />
      <Path d="M190 10H198V18H190z" fill="#fff" />
      <Path d="M199 10H207V18H199z" fill="#fff" />
      <Path d="M208 10H216V18H208z" fill="#fff" />
      <Path d="M217 10H225V18H217z" fill="#ddd" />
      <Path d="M226 10H234V18H226z" fill="#fff" />
      <Path d="M235 10H243V18H235z" fill="#ddd" />
      <Path d="M244 10H252V18H244z" fill="#ddd" />
      <Path d="M253 10H261V18H253z" fill="#ddd" />
      <Path d="M262 10H270V18H262z" fill="#ddd" />
      <Path d="M271 10H279V18H271z" fill="#ddd" />
      <Path d="M280 10H288V18H280z" fill="#ddd" />
      <Path d="M289 10H297V18H289z" fill="#ddd" />
      <Path d="M298 10H306V18H298z" fill="#ddd" />
      <Path d="M307 10H315V18H307z" fill="#ddd" />
      <Path d="M316 10H324V18H316z" fill="#ddd" />
      <Path d="M325 10H333V18H325z" fill="#ddd" />
      <Path d="M334 10H342V18H334z" fill="#ddd" />
      <Path d="M343 10H351V18H343z" fill="#ddd" />
      <Path d="M352 10H360V18H352z" fill="#ddd" />
      <Path d="M361 10H369V18H361z" fill="#ddd" />
      <Path d="M370 10H378V18H370z" fill="#fff" />
      <Path d="M1 19H9V27H1z" fill="#ddd" />
      <Path d="M10 19H18V27H10z" fill="#ddd" />
      <Path d="M19 19H27V27H19z" fill="#ddd" />
      <Path d="M28 19H36V27H28z" fill="#ddd" />
      <Path d="M37 19H45V27H37z" fill="#ddd" />
      <Path d="M46 19H54V27H46z" fill="#ddd" />
      <Path d="M55 19H63V27H55z" fill="#ddd" />
      <Path d="M64 19H72V27H64z" fill="#ddd" />
      <Path d="M73 19H81V27H73z" fill="#ddd" />
      <Path d="M82 19H90V27H82z" fill="#ddd" />
      <Path d="M91 19H99V27H91z" fill="#ddd" />
      <Path d="M100 19H108V27H100z" fill="#ddd" />
      <Path d="M109 19H117V27H109z" fill="#fff" />
      <Path d="M118 19H126V27H118z" fill="#ddd" />
      <Path d="M127 19H135V27H127z" fill="#fff" />
      <Path d="M136 19H144V27H136z" fill="#fff" />
      <Path d="M145 19H153V27H145z" fill="#ddd" />
      <Path d="M154 19H162V27H154z" fill="#fff" />
      <Path d="M163 19H171V27H163z" fill="#fff" />
      <Path d="M172 19H180V27H172z" fill="#fff" />
      <Path d="M181 19H189V27H181z" fill="#fff" />
      <Path d="M190 19H198V27H190z" fill="#fff" />
      <Path d="M199 19H207V27H199z" fill="#ddd" />
      <Path d="M208 19H216V27H208z" fill="#fff" />
      <Path d="M217 19H225V27H217z" fill="#fff" />
      <Path d="M226 19H234V27H226z" fill="#ddd" />
      <Path d="M235 19H243V27H235z" fill="#fff" />
      <Path d="M244 19H252V27H244z" fill="#ddd" />
      <Path d="M253 19H261V27H253z" fill="#fff" />
      <Path d="M262 19H270V27H262z" fill="#ddd" />
      <Path d="M271 19H279V27H271z" fill="#ddd" />
      <Path d="M280 19H288V27H280z" fill="#ddd" />
      <Path d="M289 19H297V27H289z" fill="#ddd" />
      <Path d="M298 19H306V27H298z" fill="#ddd" />
      <Path d="M307 19H315V27H307z" fill="#ddd" />
      <Path d="M316 19H324V27H316z" fill="#ddd" />
      <Path d="M325 19H333V27H325z" fill="#ddd" />
      <Path d="M334 19H342V27H334z" fill="#fff" />
      <Path d="M343 19H351V27H343z" fill="#fff" />
      <Path d="M352 19H360V27H352z" fill="#ddd" />
      <Path d="M361 19H369V27H361z" fill="#ddd" />
      <Path d="M370 19H378V27H370z" fill="#ddd" />
      <Path d="M1 28H9V36H1z" fill="#ddd" />
      <Path d="M10 28H18V36H10z" fill="#ddd" />
      <Path d="M19 28H27V36H19z" fill="#ddd" />
      <Path d="M28 28H36V36H28z" fill="#fff" />
      <Path d="M37 28H45V36H37z" fill="#ddd" />
      <Path d="M46 28H54V36H46z" fill="#ddd" />
      <Path d="M55 28H63V36H55z" fill="#ddd" />
      <Path d="M64 28H72V36H64z" fill="#ddd" />
      <Path d="M73 28H81V36H73z" fill="#ddd" />
      <Path d="M82 28H90V36H82z" fill="#fff" />
      <Path d="M91 28H99V36H91z" fill="#ddd" />
      <Path d="M100 28H108V36H100z" fill="#ddd" />
      <Path d="M109 28H117V36H109z" fill="#ddd" />
      <Path d="M118 28H126V36H118z" fill="#fff" />
      <Path d="M127 28H135V36H127z" fill="#fff" />
      <Path d="M136 28H144V36H136z" fill="#fff" />
      <Path d="M145 28H153V36H145z" fill="#fff" />
      <Path d="M154 28H162V36H154z" fill="#ddd" />
      <Path d="M163 28H171V36H163z" fill="#fff" />
      <Path d="M172 28H180V36H172z" fill="#fff" />
      <Path d="M181 28H189V36H181z" fill="#fff" />
      <Path d="M190 28H198V36H190z" fill="#ddd" />
      <Path d="M199 28H207V36H199z" fill="#fff" />
      <Path d="M208 28H216V36H208z" fill="#fff" />
      <Path d="M217 28H225V36H217z" fill="#ddd" />
      <Path d="M226 28H234V36H226z" fill="#fff" />
      <Path d="M235 28H243V36H235z" fill="#fff" />
      <Path d="M244 28H252V36H244z" fill="#fff" />
      <Path d="M253 28H261V36H253z" fill="#ddd" />
      <Path d="M262 28H270V36H262z" fill="#fff" />
      <Path d="M271 28H279V36H271z" fill="#ddd" />
      <Path d="M280 28H288V36H280z" fill="#ddd" />
      <Path d="M289 28H297V36H289z" fill="#ddd" />
      <Path d="M298 28H306V36H298z" fill="#ddd" />
      <Path d="M307 28H315V36H307z" fill="#ddd" />
      <Path d="M316 28H324V36H316z" fill="#ddd" />
      <Path d="M325 28H333V36H325z" fill="#fff" />
      <Path d="M334 28H342V36H334z" fill="#ddd" />
      <Path d="M343 28H351V36H343z" fill="#ddd" />
      <Path d="M352 28H360V36H352z" fill="#ddd" />
      <Path d="M361 28H369V36H361z" fill="#fff" />
      <Path d="M370 28H378V36H370z" fill="#ddd" />
      <Path d="M1 37H9V45H1z" fill="#ddd" />
      <Path d="M10 37H18V45H10z" fill="#ddd" />
      <Path d="M19 37H27V45H19z" fill="#ddd" />
      <Path d="M28 37H36V45H28z" fill="#ddd" />
      <Path d="M37 37H45V45H37z" fill="#ddd" />
      <Path d="M46 37H54V45H46z" fill="#ddd" />
      <Path d="M55 37H63V45H55z" fill="#fff" />
      <Path d="M64 37H72V45H64z" fill="#ddd" />
      <Path d="M73 37H81V45H73z" fill="#ddd" />
      <Path d="M82 37H90V45H82z" fill="#ddd" />
      <Path d="M91 37H99V45H91z" fill="#ddd" />
      <Path d="M100 37H108V45H100z" fill="#ddd" />
      <Path d="M109 37H117V45H109z" fill="#fff" />
      <Path d="M118 37H126V45H118z" fill="#fff" />
      <Path d="M127 37H135V45H127z" fill="#fff" />
      <Path d="M136 37H144V45H136z" fill="#ddd" />
      <Path d="M145 37H153V45H145z" fill="#fff" />
      <Path d="M154 37H162V45H154z" fill="#fff" />
      <Path d="M163 37H171V45H163z" fill="#fff" />
      <Path d="M172 37H180V45H172z" fill="#fff" />
      <Path d="M181 37H189V45H181z" fill="#fff" />
      <Path d="M190 37H198V45H190z" fill="#fff" />
      <Path d="M199 37H207V45H199z" fill="#fff" />
      <Path d="M208 37H216V45H208z" fill="#fff" />
      <Path d="M217 37H225V45H217z" fill="#fff" />
      <Path d="M226 37H234V45H226z" fill="#fff" />
      <Path d="M235 37H243V45H235z" fill="#fff" />
      <Path d="M244 37H252V45H244z" fill="#ddd" />
      <Path d="M253 37H261V45H253z" fill="#ddd" />
      <Path d="M262 37H270V45H262z" fill="#ddd" />
      <Path d="M271 37H279V45H271z" fill="#ddd" />
      <Path d="M280 37H288V45H280z" fill="#ddd" />
      <Path d="M289 37H297V45H289z" fill="#ddd" />
      <Path d="M298 37H306V45H298z" fill="#ddd" />
      <Path d="M307 37H315V45H307z" fill="#ddd" />
      <Path d="M316 37H324V45H316z" fill="#ddd" />
      <Path d="M325 37H333V45H325z" fill="#ddd" />
      <Path d="M334 37H342V45H334z" fill="#ddd" />
      <Path d="M343 37H351V45H343z" fill="#ddd" />
      <Path d="M352 37H360V45H352z" fill="#ddd" />
      <Path d="M361 37H369V45H361z" fill="#ddd" />
      <Path d="M370 37H378V45H370z" fill="#ddd" />
      <Path d="M1 46H9V54H1z" fill="#ddd" />
      <Path d="M10 46H18V54H10z" fill="#ddd" />
      <Path d="M19 46H27V54H19z" fill="#ddd" />
      <Path d="M28 46H36V54H28z" fill="#ddd" />
      <Path d="M37 46H45V54H37z" fill="#ddd" />
      <Path d="M46 46H54V54H46z" fill="#ddd" />
      <Path d="M55 46H63V54H55z" fill="#ddd" />
      <Path d="M64 46H72V54H64z" fill="#fff" />
      <Path d="M73 46H81V54H73z" fill="#ddd" />
      <Path d="M82 46H90V54H82z" fill="#ddd" />
      <Path d="M91 46H99V54H91z" fill="#ddd" />
      <Path d="M100 46H108V54H100z" fill="#ddd" />
      <Path d="M109 46H117V54H109z" fill="#ddd" />
      <Path d="M118 46H126V54H118z" fill="#fff" />
      <Path d="M127 46H135V54H127z" fill="#fff" />
      <Path d="M136 46H144V54H136z" fill="#fff" />
      <Path d="M145 46H153V54H145z" fill="#fff" />
      <Path d="M154 46H162V54H154z" fill="#fff" />
      <Path d="M163 46H171V54H163z" fill="#fff" />
      <Path d="M172 46H180V54H172z" fill="#fff" />
      <Path d="M181 46H189V54H181z" fill="#fff" />
      <Path d="M190 46H198V54H190z" fill="#fff" />
      <Path d="M199 46H207V54H199z" fill="#fff" />
      <Path d="M208 46H216V54H208z" fill="#fff" />
      <Path d="M217 46H225V54H217z" fill="#ddd" />
      <Path d="M226 46H234V54H226z" fill="#fff" />
      <Path d="M235 46H243V54H235z" fill="#fff" />
      <Path d="M244 46H252V54H244z" fill="#fff" />
      <Path d="M253 46H261V54H253z" fill="#fff" />
      <Path d="M262 46H270V54H262z" fill="#ddd" />
      <Path d="M271 46H279V54H271z" fill="#ddd" />
      <Path d="M280 46H288V54H280z" fill="#ddd" />
      <Path d="M289 46H297V54H289z" fill="#fff" />
      <Path d="M298 46H306V54H298z" fill="#ddd" />
      <Path d="M307 46H315V54H307z" fill="#ddd" />
      <Path d="M316 46H324V54H316z" fill="#ddd" />
      <Path d="M325 46H333V54H325z" fill="#ddd" />
      <Path d="M334 46H342V54H334z" fill="#fff" />
      <Path d="M343 46H351V54H343z" fill="#ddd" />
      <Path d="M352 46H360V54H352z" fill="#ddd" />
      <Path d="M361 46H369V54H361z" fill="#ddd" />
      <Path d="M370 46H378V54H370z" fill="#ddd" />
      <Path d="M1 55H9V63H1z" fill="#ddd" />
      <Path d="M10 55H18V63H10z" fill="#fff" />
      <Path d="M19 55H27V63H19z" fill="#ddd" />
      <Path d="M28 55H36V63H28z" fill="#ddd" />
      <Path d="M37 55H45V63H37z" fill="#ddd" />
      <Path d="M46 55H54V63H46z" fill="#fff" />
      <Path d="M55 55H63V63H55z" fill="#ddd" />
      <Path d="M64 55H72V63H64z" fill="#ddd" />
      <Path d="M73 55H81V63H73z" fill="#ddd" />
      <Path d="M82 55H90V63H82z" fill="#ddd" />
      <Path d="M91 55H99V63H91z" fill="#ddd" />
      <Path d="M100 55H108V63H100z" fill="#fff" />
      <Path d="M109 55H117V63H109z" fill="#ddd" />
      <Path d="M118 55H126V63H118z" fill="#fff" />
      <Path d="M127 55H135V63H127z" fill="#ddd" />
      <Path d="M136 55H144V63H136z" fill="#fff" />
      <Path d="M145 55H153V63H145z" fill="#fff" />
      <Path d="M154 55H162V63H154z" fill="#fff" />
      <Path d="M163 55H171V63H163z" fill="#fff" />
      <Path d="M172 55H180V63H172z" fill="#fff" />
      <Path d="M181 55H189V63H181z" fill="#fff" />
      <Path d="M190 55H198V63H190z" fill="#fff" />
      <Path d="M199 55H207V63H199z" fill="#fff" />
      <Path d="M208 55H216V63H208z" fill="#ddd" />
      <Path d="M217 55H225V63H217z" fill="#fff" />
      <Path d="M226 55H234V63H226z" fill="#fff" />
      <Path d="M235 55H243V63H235z" fill="#fff" />
      <Path d="M244 55H252V63H244z" fill="#ddd" />
      <Path d="M253 55H261V63H253z" fill="#fff" />
      <Path d="M262 55H270V63H262z" fill="#ddd" />
      <Path d="M271 55H279V63H271z" fill="#ddd" />
      <Path d="M280 55H288V63H280z" fill="#ddd" />
      <Path d="M289 55H297V63H289z" fill="#ddd" />
      <Path d="M298 55H306V63H298z" fill="#ddd" />
      <Path d="M307 55H315V63H307z" fill="#fff" />
      <Path d="M316 55H324V63H316z" fill="#ddd" />
      <Path d="M325 55H333V63H325z" fill="#ddd" />
      <Path d="M334 55H342V63H334z" fill="#ddd" />
      <Path d="M343 55H351V63H343z" fill="#fff" />
      <Path d="M352 55H360V63H352z" fill="#ddd" />
      <Path d="M361 55H369V63H361z" fill="#ddd" />
      <Path d="M370 55H378V63H370z" fill="#ddd" />
      <Path d="M1 64H9V72H1z" fill="#ddd" />
      <Path d="M10 64H18V72H10z" fill="#ddd" />
      <Path d="M19 64H27V72H19z" fill="#ddd" />
      <Path d="M28 64H36V72H28z" fill="#ddd" />
      <Path d="M37 64H45V72H37z" fill="#ddd" />
      <Path d="M46 64H54V72H46z" fill="#ddd" />
      <Path d="M55 64H63V72H55z" fill="#ddd" />
      <Path d="M64 64H72V72H64z" fill="#ddd" />
      <Path d="M73 64H81V72H73z" fill="#fff" />
      <Path d="M82 64H90V72H82z" fill="#ddd" />
      <Path d="M91 64H99V72H91z" fill="#ddd" />
      <Path d="M100 64H108V72H100z" fill="#ddd" />
      <Path d="M109 64H117V72H109z" fill="#fff" />
      <Path d="M118 64H126V72H118z" fill="#fff" />
      <Path d="M127 64H135V72H127z" fill="#fff" />
      <Path d="M136 64H144V72H136z" fill="#fff" />
      <Path d="M145 64H153V72H145z" fill="#fff" />
      <Path d="M154 64H162V72H154z" fill="#fff" />
      <Path d="M163 64H171V72H163z" fill="#fff" />
      <Path d="M172 64H180V72H172z" fill="#fff" />
      <Path d="M181 64H189V72H181z" fill="#fff" />
      <Path d="M190 64H198V72H190z" fill="#fff" />
      <Path d="M199 64H207V72H199z" fill="#fff" />
      <Path d="M208 64H216V72H208z" fill="#fff" />
      <Path d="M217 64H225V72H217z" fill="#ddd" />
      <Path d="M226 64H234V72H226z" fill="#fff" />
      <Path d="M235 64H243V72H235z" fill="#fff" />
      <Path d="M244 64H252V72H244z" fill="#ddd" />
      <Path d="M253 64H261V72H253z" fill="#ddd" />
      <Path d="M262 64H270V72H262z" fill="#ddd" />
      <Path d="M271 64H279V72H271z" fill="#fff" />
      <Path d="M280 64H288V72H280z" fill="#ddd" />
      <Path d="M289 64H297V72H289z" fill="#ddd" />
      <Path d="M298 64H306V72H298z" fill="#ddd" />
      <Path d="M307 64H315V72H307z" fill="#ddd" />
      <Path d="M316 64H324V72H316z" fill="#ddd" />
      <Path d="M325 64H333V72H325z" fill="#ddd" />
      <Path d="M334 64H342V72H334z" fill="#ddd" />
      <Path d="M343 64H351V72H343z" fill="#ddd" />
      <Path d="M352 64H360V72H352z" fill="#ddd" />
      <Path d="M361 64H369V72H361z" fill="#ddd" />
      <Path d="M1 73H9V81H1z" fill="#ddd" />
      <Path d="M10 73H18V81H10z" fill="#ddd" />
      <Path d="M19 73H27V81H19z" fill="#ddd" />
      <Path d="M28 73H36V81H28z" fill="#fff" />
      <Path d="M37 73H45V81H37z" fill="#ddd" />
      <Path d="M46 73H54V81H46z" fill="#ddd" />
      <Path d="M55 73H63V81H55z" fill="#ddd" />
      <Path d="M64 73H72V81H64z" fill="#ddd" />
      <Path d="M73 73H81V81H73z" fill="#ddd" />
      <Path d="M82 73H90V81H82z" fill="#ddd" />
      <Path d="M91 73H99V81H91z" fill="#ddd" />
      <Path d="M100 73H108V81H100z" fill="#ddd" />
      <Path d="M109 73H117V81H109z" fill="#ddd" />
      <Path d="M118 73H126V81H118z" fill="#fff" />
      <Path d="M127 73H135V81H127z" fill="#fff" />
      <Path d="M136 73H144V81H136z" fill="#ddd" />
      <Path d="M145 73H153V81H145z" fill="#fff" />
      <Path d="M154 73H162V81H154z" fill="#fff" />
      <Path d="M163 73H171V81H163z" fill="#fff" />
      <Path d="M172 73H180V81H172z" fill="#fff" />
      <Path d="M181 73H189V81H181z" fill="#fff" />
      <Path d="M190 73H198V81H190z" fill="#fff" />
      <Path d="M199 73H207V81H199z" fill="#ddd" />
      <Path d="M208 73H216V81H208z" fill="#fff" />
      <Path d="M217 73H225V81H217z" fill="#fff" />
      <Path d="M226 73H234V81H226z" fill="#ddd" />
      <Path d="M235 73H243V81H235z" fill="#ddd" />
      <Path d="M244 73H252V81H244z" fill="#ddd" />
      <Path d="M253 73H261V81H253z" fill="#ddd" />
      <Path d="M262 73H270V81H262z" fill="#ddd" />
      <Path d="M271 73H279V81H271z" fill="#ddd" />
      <Path d="M280 73H288V81H280z" fill="#fff" />
      <Path d="M289 73H297V81H289z" fill="#ddd" />
      <Path d="M298 73H306V81H298z" fill="#ddd" />
      <Path d="M307 73H315V81H307z" fill="#ddd" />
      <Path d="M316 73H324V81H316z" fill="#ddd" />
      <Path d="M325 73H333V81H325z" fill="#ddd" />
      <Path d="M334 73H342V81H334z" fill="#fff" />
      <Path d="M343 73H351V81H343z" fill="#ddd" />
      <Path d="M352 73H360V81H352z" fill="#ddd" />
      <Path d="M361 73H369V81H361z" fill="#ddd" />
      <Path d="M370 73H378V81H370z" fill="#ddd" />
      <Path d="M1 82H9V90H1z" fill="#ddd" />
      <Path d="M10 82H18V90H10z" fill="#ddd" />
      <Path d="M19 82H27V90H19z" fill="#ddd" />
      <Path d="M28 82H36V90H28z" fill="#ddd" />
      <Path d="M37 82H45V90H37z" fill="#ddd" />
      <Path d="M46 82H54V90H46z" fill="#ddd" />
      <Path d="M55 82H63V90H55z" fill="#ddd" />
      <Path d="M64 82H72V90H64z" fill="#ddd" />
      <Path d="M73 82H81V90H73z" fill="#ddd" />
      <Path d="M82 82H90V90H82z" fill="#ddd" />
      <Path d="M91 82H99V90H91z" fill="#ddd" />
      <Path d="M100 82H108V90H100z" fill="#fff" />
      <Path d="M109 82H117V90H109z" fill="#ddd" />
      <Path d="M118 82H126V90H118z" fill="#fff" />
      <Path d="M127 82H135V90H127z" fill="#ddd" />
      <Path d="M136 82H144V90H136z" fill="#fff" />
      <Path d="M145 82H153V90H145z" fill="#fff" />
      <Path d="M154 82H162V90H154z" fill="#fff" />
      <Path d="M163 82H171V90H163z" fill="#fff" />
      <Path d="M172 82H180V90H172z" fill="#fff" />
      <Path d="M181 82H189V90H181z" fill="#ddd" />
      <Path d="M190 82H198V90H190z" fill="#fff" />
      <Path d="M199 82H207V90H199z" fill="#fff" />
      <Path d="M208 82H216V90H208z" fill="#ddd" />
      <Path d="M217 82H225V90H217z" fill="#ddd" />
      <Path d="M226 82H234V90H226z" fill="#fff" />
      <Path d="M235 82H243V90H235z" fill="#ddd" />
      <Path d="M244 82H252V90H244z" fill="#ddd" />
      <Path d="M253 82H261V90H253z" fill="#ddd" />
      <Path d="M262 82H270V90H262z" fill="#ddd" />
      <Path d="M271 82H279V90H271z" fill="#ddd" />
      <Path d="M280 82H288V90H280z" fill="#ddd" />
      <Path d="M289 82H297V90H289z" fill="#ddd" />
      <Path d="M298 82H306V90H298z" fill="#ddd" />
      <Path d="M307 82H315V90H307z" fill="#ddd" />
      <Path d="M316 82H324V90H316z" fill="#ddd" />
      <Path d="M325 82H333V90H325z" fill="#ddd" />
      <Path d="M334 82H342V90H334z" fill="#ddd" />
      <Path d="M343 82H351V90H343z" fill="#ddd" />
      <Path d="M352 82H360V90H352z" fill="#ddd" />
      <Path d="M361 82H369V90H361z" fill="#fff" />
      <Path d="M370 82H378V90H370z" fill="#ddd" />
      <Path d="M1 91H9V99H1z" fill="#ddd" />
      <Path d="M10 91H18V99H10z" fill="#ddd" />
      <Path d="M19 91H27V99H19z" fill="#ddd" />
      <Path d="M28 91H36V99H28z" fill="#ddd" />
      <Path d="M37 91H45V99H37z" fill="#ddd" />
      <Path d="M46 91H54V99H46z" fill="#ddd" />
      <Path d="M55 91H63V99H55z" fill="#ddd" />
      <Path d="M64 91H72V99H64z" fill="#ddd" />
      <Path d="M73 91H81V99H73z" fill="#ddd" />
      <Path d="M82 91H90V99H82z" fill="#fff" />
      <Path d="M91 91H99V99H91z" fill="#ddd" />
      <Path d="M100 91H108V99H100z" fill="#ddd" />
      <Path d="M109 91H117V99H109z" fill="#fff" />
      <Path d="M118 91H126V99H118z" fill="#ddd" />
      <Path d="M127 91H135V99H127z" fill="#fff" />
      <Path d="M136 91H144V99H136z" fill="#fff" />
      <Path d="M145 91H153V99H145z" fill="#fff" />
      <Path d="M154 91H162V99H154z" fill="#ddd" />
      <Path d="M163 91H171V99H163z" fill="#fff" />
      <Path d="M172 91H180V99H172z" fill="#fff" />
      <Path d="M181 91H189V99H181z" fill="#fff" />
      <Path d="M190 91H198V99H190z" fill="#ddd" />
      <Path d="M199 91H207V99H199z" fill="#fff" />
      <Path d="M208 91H216V99H208z" fill="#fff" />
      <Path d="M217 91H225V99H217z" fill="#ddd" />
      <Path d="M226 91H234V99H226z" fill="#ddd" />
      <Path d="M235 91H243V99H235z" fill="#ddd" />
      <Path d="M244 91H252V99H244z" fill="#ddd" />
      <Path d="M253 91H261V99H253z" fill="#ddd" />
      <Path d="M262 91H270V99H262z" fill="#ddd" />
      <Path d="M271 91H279V99H271z" fill="#ddd" />
      <Path d="M280 91H288V99H280z" fill="#ddd" />
      <Path d="M289 91H297V99H289z" fill="#ddd" />
      <Path d="M298 91H306V99H298z" fill="#ddd" />
      <Path d="M307 91H315V99H307z" fill="#fff" />
      <Path d="M316 91H324V99H316z" fill="#ddd" />
      <Path d="M325 91H333V99H325z" fill="#ddd" />
      <Path d="M334 91H342V99H334z" fill="#ddd" />
      <Path d="M343 91H351V99H343z" fill="#ddd" />
      <Path d="M352 91H360V99H352z" fill="#ddd" />
      <Path d="M361 91H369V99H361z" fill="#ddd" />
      <Path d="M370 91H378V99H370z" fill="#ddd" />
      <Path d="M1 100H9V108H1z" fill="#ddd" />
      <Path d="M10 100H18V108H10z" fill="#fff" />
      <Path d="M19 100H27V108H19z" fill="#ddd" />
      <Path d="M28 100H36V108H28z" fill="#ddd" />
      <Path d="M37 100H45V108H37z" fill="#ddd" />
      <Path d="M46 100H54V108H46z" fill="#fff" />
      <Path d="M55 100H63V108H55z" fill="#ddd" />
      <Path d="M64 100H72V108H64z" fill="#ddd" />
      <Path d="M73 100H81V108H73z" fill="#ddd" />
      <Path d="M82 100H90V108H82z" fill="#ddd" />
      <Path d="M91 100H99V108H91z" fill="#ddd" />
      <Path d="M100 100H108V108H100z" fill="#ddd" />
      <Path d="M109 100H117V108H109z" fill="#ddd" />
      <Path d="M118 100H126V108H118z" fill="#fff" />
      <Path d="M127 100H135V108H127z" fill="#ddd" />
      <Path d="M136 100H144V108H136z" fill="#fff" />
      <Path d="M145 100H153V108H145z" fill="#fff" />
      <Path d="M154 100H162V108H154z" fill="#fff" />
      <Path d="M163 100H171V108H163z" fill="#fff" />
      <Path d="M172 100H180V108H172z" fill="#fff" />
      <Path d="M181 100H189V108H181z" fill="#fff" />
      <Path d="M190 100H198V108H190z" fill="#fff" />
      <Path d="M199 100H207V108H199z" fill="#fff" />
      <Path d="M208 100H216V108H208z" fill="#ddd" />
      <Path d="M217 100H225V108H217z" fill="#fff" />
      <Path d="M226 100H234V108H226z" fill="#ddd" />
      <Path d="M235 100H243V108H235z" fill="#ddd" />
      <Path d="M244 100H252V108H244z" fill="#ddd" />
      <Path d="M253 100H261V108H253z" fill="#fff" />
      <Path d="M262 100H270V108H262z" fill="#ddd" />
      <Path d="M271 100H279V108H271z" fill="#ddd" />
      <Path d="M280 100H288V108H280z" fill="#ddd" />
      <Path d="M289 100H297V108H289z" fill="#ddd" />
      <Path d="M298 100H306V108H298z" fill="#ddd" />
      <Path d="M307 100H315V108H307z" fill="#ddd" />
      <Path d="M316 100H324V108H316z" fill="#fff" />
      <Path d="M325 100H333V108H325z" fill="#ddd" />
      <Path d="M334 100H342V108H334z" fill="#ddd" />
      <Path d="M343 100H351V108H343z" fill="#ddd" />
      <Path d="M352 100H360V108H352z" fill="#fff" />
      <Path d="M361 100H369V108H361z" fill="#ddd" />
      <Path d="M370 100H378V108H370z" fill="#ddd" />
      <Path d="M1 109H9V117H1z" fill="#fff" />
      <Path d="M10 109H18V117H10z" fill="#ddd" />
      <Path d="M19 109H27V117H19z" fill="#ddd" />
      <Path d="M28 109H36V117H28z" fill="#ddd" />
      <Path d="M37 109H45V117H37z" fill="#ddd" />
      <Path d="M46 109H54V117H46z" fill="#ddd" />
      <Path d="M55 109H63V117H55z" fill="#fff" />
      <Path d="M64 109H72V117H64z" fill="#ddd" />
      <Path d="M73 109H81V117H73z" fill="#ddd" />
      <Path d="M82 109H90V117H82z" fill="#ddd" />
      <Path d="M91 109H99V117H91z" fill="#fff" />
      <Path d="M100 109H108V117H100z" fill="#ddd" />
      <Path d="M109 109H117V117H109z" fill="#fff" />
      <Path d="M118 109H126V117H118z" fill="#ddd" />
      <Path d="M127 109H135V117H127z" fill="#fff" />
      <Path d="M136 109H144V117H136z" fill="#fff" />
      <Path d="M145 109H153V117H145z" fill="#fff" />
      <Path d="M154 109H162V117H154z" fill="#fff" />
      <Path d="M163 109H171V117H163z" fill="#fff" />
      <Path d="M172 109H180V117H172z" fill="#fff" />
      <Path d="M181 109H189V117H181z" fill="#fff" />
      <Path d="M190 109H198V117H190z" fill="#fff" />
      <Path d="M199 109H207V117H199z" fill="#ddd" />
      <Path d="M208 109H216V117H208z" fill="#fff" />
      <Path d="M217 109H225V117H217z" fill="#fff" />
      <Path d="M226 109H234V117H226z" fill="#fff" />
      <Path d="M235 109H243V117H235z" fill="#ddd" />
      <Path d="M244 109H252V117H244z" fill="#fff" />
      <Path d="M253 109H261V117H253z" fill="#ddd" />
      <Path d="M262 109H270V117H262z" fill="#ddd" />
      <Path d="M271 109H279V117H271z" fill="#fff" />
      <Path d="M280 109H288V117H280z" fill="#ddd" />
      <Path d="M289 109H297V117H289z" fill="#ddd" />
      <Path d="M298 109H306V117H298z" fill="#ddd" />
      <Path d="M307 109H315V117H307z" fill="#ddd" />
      <Path d="M316 109H324V117H316z" fill="#ddd" />
      <Path d="M325 109H333V117H325z" fill="#ddd" />
      <Path d="M334 109H342V117H334z" fill="#fff" />
      <Path d="M343 109H351V117H343z" fill="#ddd" />
      <Path d="M352 109H360V117H352z" fill="#ddd" />
      <Path d="M361 109H369V117H361z" fill="#ddd" />
      <Path d="M370 109H378V117H370z" fill="#ddd" />
      <Path d="M1 118H9V126H1z" fill="#ddd" />
      <Path d="M10 118H18V126H10z" fill="#ddd" />
      <Path d="M19 118H27V126H19z" fill="#ddd" />
      <Path d="M28 118H36V126H28z" fill="#ddd" />
      <Path d="M37 118H45V126H37z" fill="#ddd" />
      <Path d="M46 118H54V126H46z" fill="#ddd" />
      <Path d="M55 118H63V126H55z" fill="#ddd" />
      <Path d="M64 118H72V126H64z" fill="#ddd" />
      <Path d="M73 118H81V126H73z" fill="#ddd" />
      <Path d="M82 118H90V126H82z" fill="#ddd" />
      <Path d="M91 118H99V126H91z" fill="#fff" />
      <Path d="M100 118H108V126H100z" fill="#ddd" />
      <Path d="M109 118H117V126H109z" fill="#fff" />
      <Path d="M118 118H126V126H118z" fill="#fff" />
      <Path d="M127 118H135V126H127z" fill="#fff" />
      <Path d="M136 118H144V126H136z" fill="#fff" />
      <Path d="M145 118H153V126H145z" fill="#fff" />
      <Path d="M154 118H162V126H154z" fill="#fff" />
      <Path d="M163 118H171V126H163z" fill="#fff" />
      <Path d="M172 118H180V126H172z" fill="#ddd" />
      <Path d="M181 118H189V126H181z" fill="#fff" />
      <Path d="M190 118H198V126H190z" fill="#fff" />
      <Path d="M199 118H207V126H199z" fill="#fff" />
      <Path d="M208 118H216V126H208z" fill="#fff" />
      <Path d="M217 118H225V126H217z" fill="#fff" />
      <Path d="M226 118H234V126H226z" fill="#fff" />
      <Path d="M235 118H243V126H235z" fill="#fff" />
      <Path d="M244 118H252V126H244z" fill="#ddd" />
      <Path d="M253 118H261V126H253z" fill="#ddd" />
      <Path d="M262 118H270V126H262z" fill="#ddd" />
      <Path d="M271 118H279V126H271z" fill="#ddd" />
      <Path d="M280 118H288V126H280z" fill="#ddd" />
      <Path d="M289 118H297V126H289z" fill="#ddd" />
      <Path d="M298 118H306V126H298z" fill="#fff" />
      <Path d="M307 118H315V126H307z" fill="#ddd" />
      <Path d="M316 118H324V126H316z" fill="#ddd" />
      <Path d="M325 118H333V126H325z" fill="#ddd" />
      <Path d="M334 118H342V126H334z" fill="#ddd" />
      <Path d="M343 118H351V126H343z" fill="#ddd" />
      <Path d="M352 118H360V126H352z" fill="#ddd" />
      <Path d="M361 118H369V126H361z" fill="#ddd" />
      <Path d="M370 118H378V126H370z" fill="#ddd" />
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
