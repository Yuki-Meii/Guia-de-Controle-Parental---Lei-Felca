import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Images } from 'lucide-react';
import type { PlatformImage } from '@/data/platforms';

interface CarrosselPassosProps {
  imagens: PlatformImage[];
  /** Gradiente da plataforma, usado na etiqueta do passo. */
  gradient: string;
}

export function CarrosselPassos({ imagens, gradient }: CarrosselPassosProps) {
  const [atual, setAtual] = useState(0);
  const toqueInicial = useRef<number | null>(null);

  const total = imagens.length;
  const imagem = imagens[atual];

  // Forma funcional: garante o passo certo mesmo em cliques rápidos seguidos.
  const mover = (passos: number) => {
    setAtual((anterior) => (anterior + passos + total) % total);
  };

  const aoTeclar = (evento: React.KeyboardEvent) => {
    if (evento.key === 'ArrowLeft') {
      evento.preventDefault();
      mover(-1);
    } else if (evento.key === 'ArrowRight') {
      evento.preventDefault();
      mover(1);
    }
  };

  const aoEncostar = (evento: React.TouchEvent) => {
    toqueInicial.current = evento.touches[0].clientX;
  };

  const aoSoltar = (evento: React.TouchEvent) => {
    if (toqueInicial.current === null) return;
    const distancia = evento.changedTouches[0].clientX - toqueInicial.current;
    if (Math.abs(distancia) > 40) mover(distancia < 0 ? 1 : -1);
    toqueInicial.current = null;
  };

  return (
    <section
      aria-roledescription="carrossel"
      aria-label="Imagens do passo a passo"
      tabIndex={0}
      onKeyDown={aoTeclar}
      className="rounded-2xl bg-slate-900 p-3 ring-1 ring-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
    >
      <div
        className="relative flex h-[400px] items-center justify-center sm:h-[460px]"
        onTouchStart={aoEncostar}
        onTouchEnd={aoSoltar}
      >
        <a
          href={imagem.src}
          target="_blank"
          rel="noreferrer"
          title="Abrir a imagem em tamanho maior"
          className="h-full rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
        >
          <img
            key={imagem.src}
            src={imagem.src}
            alt={`Passo ${imagem.passo}: ${imagem.legenda}`}
            loading={atual === 0 ? 'eager' : 'lazy'}
            className="h-full w-auto rounded-xl object-contain"
          />
        </a>

        <button
          onClick={() => mover(-1)}
          aria-label="Imagem anterior"
          className="absolute left-0 flex h-10 w-10 items-center justify-center rounded-full bg-slate-800/80 text-white backdrop-blur transition hover:bg-slate-700"
        >
          <ChevronLeft size={20} />
        </button>

        <button
          onClick={() => mover(1)}
          aria-label="Próxima imagem"
          className="absolute right-0 flex h-10 w-10 items-center justify-center rounded-full bg-slate-800/80 text-white backdrop-blur transition hover:bg-slate-700"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div aria-live="polite" className="mt-3 px-1">
        <div className="mb-1.5 flex items-center justify-between gap-3">
          <span
            className={`rounded-full bg-gradient-to-r ${gradient} px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-white`}
          >
            Passo {imagem.passo}
          </span>
          <span className="text-xs font-medium tabular-nums text-slate-400">
            {atual + 1} / {total}
          </span>
        </div>
        <p className="text-sm leading-relaxed text-slate-300">{imagem.legenda}</p>
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5 px-1">
        {imagens.map((img, i) => (
          <button
            key={img.src}
            onClick={() => setAtual(i)}
            aria-label={`Ir para a imagem ${i + 1}, do passo ${img.passo}`}
            aria-current={i === atual}
            className={`h-1.5 flex-1 rounded-full transition-colors ${
              i === atual ? 'bg-sky-400' : 'bg-slate-700 hover:bg-slate-600'
            }`}
          />
        ))}
      </div>
    </section>
  );
}

/** Cabeçalho da seção, reaproveitando o estilo dos demais títulos da página. */
export function TituloCarrossel({ total }: { total: number }) {
  return (
    <h3 className="mb-5 flex items-center gap-2 text-lg font-bold text-slate-900">
      <Images size={19} className="text-slate-400" />
      Passo a passo em imagens
      <span className="text-sm font-normal text-slate-400">({total})</span>
    </h3>
  );
}
