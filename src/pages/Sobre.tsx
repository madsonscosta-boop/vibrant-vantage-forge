import { usePageMeta } from "@/hooks/usePageMeta";

export default function Sobre() {
  usePageMeta("Sobre — FIG", "Quem é a FIG e como pensamos sobre atenção.");
  return (
    <section className="mx-auto max-w-4xl px-6 py-24">
      <p className="text-xs uppercase tracking-[0.25em] text-brand-glow">Sobre</p>
      <h1 className="mt-3 font-display text-6xl leading-[0.95] md:text-7xl">
        <span className="italic">Marketing que faz marcas serem compreendidas, lembradas e escolhidas.</span>
      </h1>
      <div className="mt-12 space-y-6 text-lg text-foreground/85">
        <p>A FIG é um estúdio de marketing digital baseado em Rotterdam, que ajuda marcas a crescerem através de estratégia, conteúdo, visibilidade paga e presença digital.</p>
        <p>Trabalhamos como parceiros estratégicos, não apenas executores. Isso significa que pensamos junto com nossos clientes, entendemos o que torna sua marca significativa e criamos marketing que se sente claro, intencional e conectado a objetivos de negócio reais.</p>
        <p>Por trás da FIG estão duas pessoas com formação em comunicação, RP e mídia paga que decidiram unir forças para construir algo próprio. Somos ambiciosos, práticos e genuinamente investidos em ver as marcas com quem trabalhamos crescerem.</p>
        <p>Para nós, marketing não é apenas sobre ser visto. É sobre ser compreendido, lembrado e escolhido.</p>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-3">
        {[
          { k: "2026", v: "" },
          { k: "12+", v: "Marcas atendidas" },
          { k: "4", v: "Pessoas no time" },
        ].map((s) => (
          <div key={s.k} className="rounded-2xl border border-border bg-card p-6">
            <p className="font-display text-4xl text-brand-glow/50">{s.k}</p>
            <p className="mt-1 text-sm text-muted-foreground/60">{s.v}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
