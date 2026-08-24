import { useState } from 'react';
import { ChevronDown, HelpCircle, Phone } from 'lucide-react';
import { faqItems } from '@/data/faq';

export function FaqSection() {
  const [aberta, setAberta] = useState<number | null>(0);

  return (
    <section className="mt-12">
      <div className="relative mb-8 overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 shadow-xl sm:p-12">
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />

        <div className="relative">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-sky-300 ring-1 ring-white/10 backdrop-blur">
            <HelpCircle size={14} />
            Perguntas Frequentes
          </div>

          <h2 className="mb-4 max-w-3xl text-3xl font-bold leading-tight text-white sm:text-4xl">
            Dúvidas mais comuns de pais e responsáveis
          </h2>

          <p className="max-w-2xl text-lg leading-relaxed text-slate-300">
            Respostas diretas às perguntas que mais aparecem quando o assunto é controle
            parental e a nova legislação. Toque em uma pergunta para ver a resposta.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl space-y-3">
        {faqItems.map((item, index) => {
          const Icon = item.icon;
          const estaAberta = aberta === index;

          return (
            <div
              key={item.pergunta}
              className={`overflow-hidden rounded-2xl bg-white shadow-sm ring-1 transition-all ${
                estaAberta ? 'shadow-lg ring-sky-200' : 'ring-slate-200/60 hover:ring-slate-300'
              }`}
            >
              <h3>
                <button
                  onClick={() => setAberta(estaAberta ? null : index)}
                  aria-expanded={estaAberta}
                  aria-controls={`faq-resposta-${index}`}
                  className="flex w-full items-center gap-4 px-5 py-4 text-left"
                >
                  <span
                    className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl transition-colors ${
                      estaAberta ? 'bg-sky-50 text-sky-600' : 'bg-slate-50 text-slate-400'
                    }`}
                  >
                    <Icon size={20} strokeWidth={2} />
                  </span>

                  <span className="flex-1 font-semibold text-slate-900">{item.pergunta}</span>

                  <ChevronDown
                    size={20}
                    className={`flex-shrink-0 text-slate-400 transition-transform duration-300 ${
                      estaAberta ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              </h3>

              <div
                id={`faq-resposta-${index}`}
                hidden={!estaAberta}
                className="border-t border-slate-100 px-5 py-4 pl-[4.5rem]"
              >
                <p className="text-[15px] leading-relaxed text-slate-600">{item.resposta}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mx-auto mt-8 max-w-3xl rounded-3xl bg-gradient-to-r from-rose-50 to-amber-50 p-6 ring-1 ring-rose-100 sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
          <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-white text-rose-500 shadow-sm">
            <Phone size={22} />
          </span>
          <div>
            <h3 className="mb-2 text-lg font-bold text-slate-900">
              Canais de denúncia — gratuitos e anônimos
            </h3>
            <ul className="space-y-1.5 text-sm leading-relaxed text-slate-700">
              <li>
                <strong className="font-semibold text-slate-900">Disque 100</strong> — Disque
                Direitos Humanos, 24 horas por dia, todos os dias.
              </li>
              <li>
                <strong className="font-semibold text-slate-900">SaferNet</strong> — denúncias
                de crimes cibernéticos pelo site denuncie.org.br.
              </li>
              <li>
                <strong className="font-semibold text-slate-900">Polícia Civil</strong> —
                boletim de ocorrência, inclusive pela delegacia eletrônica do seu estado.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
