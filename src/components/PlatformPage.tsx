import { ArrowLeft, CheckCircle2, Clapperboard } from 'lucide-react';
import type { Platform } from '@/data/platforms';

interface PlatformPageProps {
  platform: Platform;
  onBack: () => void;
}

export function PlatformPage({ platform, onBack }: PlatformPageProps) {
  const Icon = platform.icon;

  return (
    <section className="overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-slate-200/60">
      <div className={`bg-gradient-to-r ${platform.gradient} px-8 py-6 sm:px-10`}>
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur">
            <Icon className="h-7 w-7 text-white" strokeWidth={2} />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-white">{platform.nome}</h2>
            <p className="text-sm font-medium text-white/80">{platform.tagline}</p>
          </div>
        </div>
      </div>

      <div className="p-8 sm:p-10">
        <button
          onClick={onBack}
          className="mb-6 inline-flex items-center gap-2 rounded-xl bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-200"
        >
          <ArrowLeft size={16} />
          Voltar
        </button>

        <p className="mb-8 max-w-3xl text-lg leading-relaxed text-slate-600">
          {platform.descricao}
        </p>

        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="mb-5 text-lg font-bold text-slate-900">Passo a passo</h3>
            <ol className="space-y-4">
              {platform.steps.map((step, index) => (
                <li
                  key={index}
                  className="group flex gap-4 rounded-2xl p-3 transition-colors hover:bg-slate-50"
                >
                  <div
                    className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${platform.gradient} text-sm font-bold text-white shadow-md`}
                  >
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold text-slate-900">{step.title}</h4>
                    <p className="text-sm leading-relaxed text-slate-600">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="flex flex-col gap-8 lg:sticky lg:top-8 lg:self-start">
            <div>
              <h3 className="mb-5 text-lg font-bold text-slate-900">
                {platform.video ? platform.video.title : 'Vídeo do tutorial'}
              </h3>

              {platform.video ? (
                <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-slate-200">
                  <div className="relative aspect-video">
                    <iframe
                      className="absolute inset-0 h-full w-full"
                      src={platform.video.src}
                      title={platform.video.title}
                      loading="lazy"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              ) : (
                <div className="flex aspect-video flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 p-6 text-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-slate-400 shadow-sm">
                    <Clapperboard size={24} />
                  </span>
                  <p className="font-semibold text-slate-700">Gravação em produção</p>
                  <p className="max-w-xs text-sm leading-relaxed text-slate-500">
                    O vídeo deste tutorial está sendo produzido pela equipe. Enquanto isso, o
                    passo a passo ao lado cobre a configuração completa.
                  </p>
                </div>
              )}
            </div>

            <div>
              <h3 className="mb-5 text-lg font-bold text-slate-900">Recursos recomendados</h3>
              <div className="flex flex-col gap-3">
                {platform.recursos.map((dica, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200/60"
                  >
                    <CheckCircle2
                      className={`mt-0.5 flex-shrink-0 ${platform.color}`}
                      size={20}
                    />
                    <p className="text-sm leading-relaxed text-slate-700">{dica}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
