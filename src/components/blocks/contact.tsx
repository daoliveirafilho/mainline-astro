import { DashedLine } from "../dashed-line";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  {
    title: "Corporate office",
    content: (
<p className="text-muted-foreground mt-3">
355 Eduardo Gir&atilde;o
<br />
60410-442 Fortaleza, CE Brasil
</p>
    ),
  },
  {
    title: "Email us",
    content: (
<div className="mt-3">
<div>
<p className="">Contato</p>
<a
href="mailto:contato@rekall.log.br"
className="text-muted-foreground hover:text-foreground"
>
contato@rekall.log.br
</a>
</div>
<div className="mt-1">
<p className="">Suporte</p>
<a
href="mailto:suporte@rekall.log.br"
className="text-muted-foreground hover:text-foreground"
>
suporte@rekall.log.br
</a>
</div>
</div>
    ),
  },
  {
    title: "Follow us",
    content: (
<div className="mt-3 flex gap-6 lg:gap-10">
<a className="text-muted-foreground hover:text-foreground" href="https://t.me/rekalllog">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telegram" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09"/></svg>
</a>
<a className="text-muted-foreground hover:text-foreground" href="https://github.com/daoliveirafilho">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/></svg>
</a>
<a className="text-muted-foreground hover:text-foreground" href="https://medium.com/@da.oliveira.filho">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-medium" viewBox="0 0 16 16"><path d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8m4.95 0c0 2.34-1.01 4.236-2.256 4.236S9.463 10.339 9.463 8c0-2.34 1.01-4.236 2.256-4.236S13.975 5.661 13.975 8M16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795"/></svg>
</a>
</div>
    ),
  },
];

export const Contact = () => {
  return (
<section className="py-28 lg:py-32 lg:pt-44">
<div className="container max-w-2xl">
<h1 className="text-center text-2xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
Contact us
</h1>
<p className="text-muted-foreground mt-4 text-center leading-snug font-medium lg:mx-auto">
Hopefully this form gets through our spam filters.
</p>

<div className="mt-10 flex justify-between gap-8 max-sm:flex-col md:mt-14 lg:mt-20 lg:gap-12">
{contactInfo.map((info, index) => (
<div key={index}>
<h2 className="font-medium">{info.title}</h2>
{info.content}
</div>
))}
</div>

<DashedLine className="my-12" />

{/* Inquiry Form */}
<div className="mx-auto">
<h2 className="text-lg font-semibold">Inquiries</h2>
<p className="text-muted-foreground mt-4 text-center leading-snug font-medium lg:mx-auto">
If you want to submit your own inquiry, the format is quite rigid. Mail to contato at rekall.log.br, with a Subject: line containing the word "inquiry".
</p>
</div>
</div>
</section>
);
};
