import { DashedLine } from "@/components/dashed-line";

const stats = [
  {
    value: "$150M",
    label: "Raised",
  },
  {
    value: "20K",
    label: "Companies",
  },
  {
    value: "1.3B",
    label: "Monthly transactions",
  },
  {
    value: "1.5K",
    label: "Connections per minute",
  },
];

export function AboutHero() {
  return (
    <section className="">
      <div className="container flex max-w-5xl flex-col justify-between gap-8 md:gap-20 lg:flex-row lg:items-center lg:gap-24 xl:gap-24">
<div className="flex-[1.5]">
<h1 className="text-3xl tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
Rekall
</h1>

<p className="text-muted-foreground mt-5 text-2xl md:text-3xl lg:text-4xl">
Log all data.
</p>

<p className="text-muted-foreground mt-8 hidden max-w-lg space-y-6 text-lg text-balance md:block lg:mt-12">
Construir solu&ccedil;&otilde;es por meio de computa&ccedil;&atilde;o confi&aacute;vel, da nuvem &agrave; borda. Consolidar-se no mercado de solu&ccedil;&otilde;es computacionais, em comprometimento com inova&ccedil;&atilde;o e adequa&ccedil;&atilde;o. Qualidade e confiabilidade de servi&ccedil;o. Transpar&ecirc;ncia e verdade na atua&ccedil;&atilde;o e inclus&atilde;o digital.
<br />
<br />
Eliminando a complexidade dos gateways tradicionais e entregando seus dados diretamente em uma infraestrutura distribu&iacute;da, assegurando performance e escalabilidade.
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
