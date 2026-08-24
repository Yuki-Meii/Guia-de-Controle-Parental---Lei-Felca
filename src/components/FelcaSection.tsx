import { Scale, ArrowRight } from 'lucide-react';
import { felcaTopics } from '@/data/felca';

interface FelcaSectionProps {
  onExplore: () => void;
}

export function FelcaSection({ onExplore }: FelcaSectionProps) {
  return (
    <section className="mt-12">
      <div className="relative mb-8 overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 shadow-xl sm:p-12">
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="relative">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-sky-300 ring-1 ring-white/10 backdrop-blur">
            <Scale size={14} />
            Lei nº 15.211/2025
          </div>

          <h2 className="mb-4 max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl">
            Lei Felca — ECA Digital
          </h2>

          <p className="mb-3 max-w-2xl text-lg leading-relaxed text-slate-300">
            A chamada Lei Felca, oficialmente Estatuto Digital da Criança e do Adolescente
            (Lei nº 15.211/2025), estabelece novas regras para aumentar a segurança de crianças
            e adolescentes na internet.
          </p>

          <p className="max-w-2xl text-base leading-relaxed text-slate-400">
            A legislação busca fazer com que redes sociais, plataformas de vídeo, jogos e outros
            serviços digitais assumam maior responsabilidade na proteção desse público.
          </p>
        </div>
      </div>

      <div className="mb-8 text-center">
        <h3 className="text-2xl font-bold text-slate-900">Principais mudanças</h3>
        <p className="mt-1 text-slate-500">
          Sete pontos centrais da nova legislação que impactam plataformas e usuários.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {felcaTopics.map((topic) => {
          const Icon = topic.icon;
          return (
            <div
              key={topic.title}
              className="group rounded-3xl bg-white p-6 shadow-lg ring-1 ring-slate-200/60 transition-all hover:-translate-y-1 hover:shadow-2xl hover:ring-slate-300"
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <div className="inline-flex rounded-2xl bg-slate-50 p-3 ring-1 ring-slate-200/60">
                  <Icon className={`h-7 w-7 ${topic.color}`} strokeWidth={2} />
                </div>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                  {topic.rotulo}
                </span>
              </div>
              <h4 className="mb-2 text-lg font-bold text-slate-900">{topic.title}</h4>
              <p className="text-sm leading-relaxed text-slate-600">{topic.description}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-10 flex flex-col items-center gap-4 rounded-3xl bg-gradient-to-r from-sky-50 to-emerald-50 p-8 text-center ring-1 ring-sky-100">
        <p className="max-w-xl text-lg font-medium text-slate-700">
          Quer aprender a configurar as plataformas de acordo com a lei?
        </p>
        <button
          onClick={onExplore}
          className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-emerald-500 px-6 py-3 font-semibold text-white shadow-lg shadow-sky-500/25 transition-all hover:shadow-xl hover:shadow-sky-500/30"
        >
          Ver guias das plataformas
          <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  );
}
