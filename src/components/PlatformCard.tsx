import { ArrowRight } from 'lucide-react';
import { plataformas, type Platform } from '@/data/platforms';

interface PlatformCardProps {
  platform: Platform;
  onClick: () => void;
}

export function PlatformCard({ platform, onClick }: PlatformCardProps) {
  const Icon = platform.icon;

  return (
    <button
      onClick={onClick}
      className="group relative overflow-hidden rounded-3xl bg-white p-6 text-left shadow-lg ring-1 ring-slate-200/60 transition-all hover:-translate-y-1 hover:shadow-2xl hover:ring-slate-300"
    >
      <div
        className={`absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br ${platform.gradient} opacity-10 transition-transform duration-500 group-hover:scale-150 group-hover:opacity-20`}
      />

      <div
        className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${platform.gradient} shadow-lg`}
      >
        <Icon className="h-7 w-7 text-white" strokeWidth={2} />
      </div>

      <h3 className="mb-1 text-xl font-bold text-slate-900">{platform.nome}</h3>
      <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
        {platform.tagline}
      </p>
      <p className="mb-4 text-sm leading-relaxed text-slate-600">{platform.descricao}</p>

      <div className="flex items-center gap-2 text-sm font-semibold text-slate-900">
        Ver guia completo
        <ArrowRight
          size={16}
          className="text-slate-400 transition-all group-hover:translate-x-1 group-hover:text-slate-900"
        />
      </div>
    </button>
  );
}

interface PlatformGridProps {
  onNavigate: (id: string) => void;
}

export function PlatformGrid({ onNavigate }: PlatformGridProps) {
  return (
    <section className="mb-10">
      <h2 className="mb-2 text-3xl font-bold text-slate-900">Plataformas Disponíveis</h2>
      <p className="mb-6 text-slate-500">
        Selecione uma plataforma para acessar o guia completo de configuração.
      </p>
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {plataformas.map((item) => (
          <PlatformCard key={item.id} platform={item} onClick={() => onNavigate(item.id)} />
        ))}
      </div>
    </section>
  );
}
