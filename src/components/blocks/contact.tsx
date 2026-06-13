import { Facebook, Linkedin, Twitter } from "lucide-react";

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
<a href="#" className="text-muted-foreground hover:text-foreground">
<Facebook className="size-5" />
</a>
<a href="#" className="text-muted-foreground hover:text-foreground">
<Twitter className="size-5" />
</a>
<a href="#" className="text-muted-foreground hover:text-foreground">
<Linkedin className="size-5" />
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
If you want to submit your own entry, the format is quite rigid. Mail to contato at rekall.log.br, with a Subject: line containing the word "support".
</p>
</div>
</div>
</section>
);
};
