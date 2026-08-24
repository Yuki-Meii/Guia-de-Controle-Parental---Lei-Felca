import { BarChart3, Check, Minus, X, CalendarClock, Info } from 'lucide-react';
import { plataformas } from '@/data/platforms';
import {
  idadesMinimas,
  linhasComparativo,
  type StatusRecurso,
} from '@/data/comparativo';

const statusVisual: Record<
  StatusRecurso,
  { icon: typeof Check; rotulo: string; classe: string }
> = {
  sim: {
    icon: Check,
    rotulo: 'Oferece',
    classe: 'bg-emerald-50 text-emerald-600 ring-emerald-200',
  },
  parcial: {
    icon: Minus,
    rotulo: 'Oferece em parte',
    classe: 'bg-amber-50 text-amber-600 ring-amber-200',
  },
  nao: {
    icon: X,
    rotulo: 'Não oferece',
    classe: 'bg-slate-100 text-slate-400 ring-slate-200',
  },
};

function Selo({ status }: { status: StatusRecurso }) {
  const { icon: Icon, rotulo, classe } = statusVisual[status];

  return (
    <span
      className={`inline-flex h-8 w-8 items-center justify-center rounded-full ring-1 ${classe}`}
      role="img"
      aria-label={rotulo}
      title={rotulo}
    >
      <Icon size={17} strokeWidth={3} />
    </span>
  );
}

export function ComparativoSection() {
  return (
    <section className="mt-12">
      <div className="relative mb-8 overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 shadow-xl sm:p-12">
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="relative">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-sky-300 ring-1 ring-white/10 backdrop-blur">
            <BarChart3 size={14} />
            Comparativo visual
          </div>

          <h2 className="mb-4 max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl">
            O que cada plataforma protege
          </h2>

          <p className="max-w-2xl text-lg leading-relaxed text-slate-300">
            Nem toda plataforma oferece as mesmas ferramentas. Este quadro mostra, lado a lado,
            quais proteções existem em cada uma — e onde será preciso recorrer aos ajustes do
            próprio celular ou computador.
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="mb-1 flex items-center gap-2 text-xl font-bold text-slate-900">
          <CalendarClock size={20} className="text-sky-500" />
          Idade mínima para uso
        </h3>
        <p className="mb-5 text-sm text-slate-500">
          Conforme os termos de uso de cada plataforma.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {idadesMinimas.map((item) => {
            const plataforma = plataformas.find((p) => p.id === item.plataformaId);
            if (!plataforma) return null;
            const Icon = plataforma.icon;

            return (
              <div
                key={item.plataformaId}
                className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200/60"
              >
                <div
                  className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${plataforma.gradient} shadow-md`}
                >
                  <Icon className="h-5 w-5 text-white" strokeWidth={2} />
                </div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                  {plataforma.nome}
                </p>
                <p className="mb-2 text-lg font-bold text-slate-900">{item.idade}</p>
                <p className="text-xs leading-relaxed text-slate-500">{item.observacao}</p>
              </div>
            );
          })}
        </div>
      </div>

      <h3 className="mb-1 text-xl font-bold text-slate-900">Ferramentas de proteção</h3>
      <p className="mb-5 text-sm text-slate-500">
        Compare recurso por recurso antes de decidir onde apertar o controle.
      </p>

      <div className="mb-5 flex flex-wrap items-center gap-x-6 gap-y-3">
        {(Object.keys(statusVisual) as StatusRecurso[]).map((status) => (
          <div key={status} className="flex items-center gap-2">
            <Selo status={status} />
            <span className="text-sm font-medium text-slate-600">
              {statusVisual[status].rotulo}
            </span>
          </div>
        ))}
      </div>

      {/* Desktop: tabela lado a lado */}
      <div className="hidden overflow-x-auto rounded-3xl bg-white shadow-lg ring-1 ring-slate-200/60 lg:block">
        <table className="w-full border-collapse text-left">
          <caption className="sr-only">
            Comparativo de ferramentas de controle parental entre Instagram, YouTube, Netflix,
            Steam e TikTok
          </caption>
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50">
              <th scope="col" className="px-6 py-4 text-sm font-bold text-slate-900">
                Recurso
              </th>
              {plataformas.map((plataforma) => {
                const Icon = plataforma.icon;
                return (
                  <th
                    key={plataforma.id}
                    scope="col"
                    className="px-4 py-4 text-center text-sm font-bold text-slate-900"
                  >
                    <div className="flex flex-col items-center gap-2">
                      <span
                        className={`flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br ${plataforma.gradient} shadow-md`}
                      >
                        <Icon className="h-4 w-4 text-white" strokeWidth={2} />
                      </span>
                      {plataforma.nome}
                    </div>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {linhasComparativo.map((linha) => {
              const IconeRecurso = linha.icon;
              return (
                <tr
                  key={linha.recurso}
                  className="border-b border-slate-100 transition-colors last:border-0 hover:bg-slate-50/70"
                >
                  <th scope="row" className="max-w-xs px-6 py-5 align-top font-medium">
                    <div className="flex gap-3">
                      <IconeRecurso
                        size={19}
                        className="mt-0.5 flex-shrink-0 text-slate-400"
                      />
                      <div>
                        <p className="font-semibold text-slate-900">{linha.recurso}</p>
                        <p className="mt-1 text-xs font-normal leading-relaxed text-slate-500">
                          {linha.explicacao}
                        </p>
                      </div>
                    </div>
                  </th>

                  {plataformas.map((plataforma) => {
                    const celula = linha.plataformas[plataforma.id];
                    return (
                      <td key={plataforma.id} className="px-4 py-5 align-top text-center">
                        <div className="flex flex-col items-center gap-1.5">
                          <Selo status={celula.status} />
                          <span className="text-xs leading-snug text-slate-500">
                            {celula.nota}
                          </span>
                        </div>
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Celular e tablet: um card por plataforma */}
      <div className="space-y-5 lg:hidden">
        {plataformas.map((plataforma) => {
          const Icon = plataforma.icon;
          return (
            <div
              key={plataforma.id}
              className="overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-slate-200/60"
            >
              <div className={`flex items-center gap-3 bg-gradient-to-r ${plataforma.gradient} px-5 py-4`}>
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 backdrop-blur">
                  <Icon className="h-5 w-5 text-white" strokeWidth={2} />
                </span>
                <h4 className="text-lg font-bold text-white">{plataforma.nome}</h4>
              </div>

              <ul className="divide-y divide-slate-100">
                {linhasComparativo.map((linha) => {
                  const celula = linha.plataformas[plataforma.id];
                  return (
                    <li key={linha.recurso} className="flex items-start gap-3 px-5 py-3.5">
                      <Selo status={celula.status} />
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-slate-900">{linha.recurso}</p>
                        <p className="text-sm leading-relaxed text-slate-500">{celula.nota}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="mt-6 flex items-start gap-3 rounded-2xl bg-slate-100 p-4 ring-1 ring-slate-200">
        <Info size={18} className="mt-0.5 flex-shrink-0 text-slate-500" />
        <p className="text-sm leading-relaxed text-slate-600">
          Onde a plataforma não oferece controle de tempo de tela, o limite pode ser definido
          pelo próprio aparelho: <strong className="font-semibold">Bem-estar digital</strong> no
          Android e <strong className="font-semibold">Tempo de uso</strong> no iPhone.
        </p>
      </div>
    </section>
  );
}
