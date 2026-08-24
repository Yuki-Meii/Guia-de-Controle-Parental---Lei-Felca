import { Shield, ArrowRight, Scale, Lock, Eye, Clock } from 'lucide-react';

interface HeroProps {
  onExplore: () => void;
  onFelca: () => void;
}

export function Hero({ onExplore, onFelca }: HeroProps) {
  const features = [
    { icon: Lock, label: 'Privacidade' },
    { icon: Eye, label: 'Supervisão' },
    { icon: Clock, label: 'Tempo de Tela' },
  ];

  return (
    <section
      id="inicio"
      className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 shadow-xl sm:p-12 lg:p-16"
    >
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="relative">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-sky-300 ring-1 ring-white/10 backdrop-blur">
          <Shield size={14} />
          Portal de Orientação para Pais e Responsáveis
        </div>

        <h2 className="mb-5 max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          Privacidade Digital para{' '}
          <span className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
            Crianças e Adolescentes
          </span>
        </h2>

        <p className="mb-8 max-w-2xl text-lg leading-relaxed text-slate-300">
          Bem-vindo ao portal de orientação para pais e responsáveis. Aqui você encontrará
          tutoriais passo a passo para configurar recursos de privacidade, segurança e
          supervisão familiar nas principais plataformas digitais utilizadas por menores de idade.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <button
            onClick={onExplore}
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-emerald-500 px-6 py-3 font-semibold text-white shadow-lg shadow-sky-500/25 transition-all hover:shadow-xl hover:shadow-sky-500/30"
          >
            Ver Plataformas
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
          <button
            onClick={onFelca}
            className="group inline-flex items-center gap-2 rounded-xl bg-white/10 px-6 py-3 font-semibold text-white ring-1 ring-white/20 backdrop-blur transition-all hover:bg-white/15"
          >
            <Scale size={18} className="text-sky-300" />
            Conhecer a Lei Felca
          </button>
          <div className="flex items-center gap-5">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.label}
                  className="flex items-center gap-2 text-sm font-medium text-slate-300"
                >
                  <Icon size={16} className="text-sky-400" />
                  {f.label}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
