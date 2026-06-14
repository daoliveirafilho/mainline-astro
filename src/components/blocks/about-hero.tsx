import { DashedLine } from "@/components/dashed-line";

const stats = [
  {
    value: "$150",
    label: "Raised",
  },
  {
    value: "20",
    label: "Projects",
  },
  {
    value: "1.3B",
    label: "Monthly transactions",
  },
  {
    value: "3",
    label: "Coffes per minute",
  },
];

export function AboutHero() {
  return (
    <section className="">
      <div className="container flex max-w-5xl flex-col justify-between gap-8 md:gap-20 lg:flex-row lg:items-center lg:gap-24 xl:gap-24">
<div className="flex-[1.5]">
<h1 className="text-3xl tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
About us
</h1>

<p className="text-muted-foreground mt-5 text-2xl md:text-3xl lg:text-4xl">
Our Mission
</p>
<p className="text-muted-foreground mt-8 hidden max-w-lg space-y-6 text-lg text-balance md:block lg:mt-12">
To build resilient computing solutions from the cloud to the edge, driving digital inclusion through innovative and adaptable technology.
</p>
<p className="text-muted-foreground mt-5 text-2xl md:text-3xl lg:text-4xl">
Our Vision
</p>
<p className="text-muted-foreground mt-8 hidden max-w-lg space-y-6 text-lg text-balance md:block lg:mt-12">
To solidify our leadership in the computing solutions market by continuously evolving alongside our clients' needs.
</p>
<p className="text-muted-foreground mt-5 text-2xl md:text-3xl lg:text-4xl">
Our Values
</p>
<p className="text-muted-foreground mt-8 hidden max-w-lg space-y-6 text-lg text-balance md:block lg:mt-12">
Reliability: Delivering exceptional service quality and dependable infrastructure.
</p>
<p className="text-muted-foreground mt-8 hidden max-w-lg space-y-6 text-lg text-balance md:block lg:mt-12">
Integrity: Acting with absolute truth, transparency, and ethical standards in every digital interaction.
</p>
</div>

        <div
          className={`relative flex flex-1 flex-col justify-center gap-3 pt-10 lg:pt-0 lg:pl-10`}
        >
          <DashedLine
            orientation="vertical"
            className="absolute top-0 left-0 max-lg:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute top-0 lg:hidden"
          />
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <div className="font-display text-4xl tracking-wide md:text-5xl">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
