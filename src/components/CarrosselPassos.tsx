import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Images } from 'lucide-react';
import type { PlatformImage } from '@/data/platforms';

interface CarrosselPassosProps {
  imagens: PlatformImage[];
  /** Gradiente da plataforma, usado na etiqueta do passo. */
  gradient: string;
  /** Capturas de celular ficam estreitas; as de computador ocupam a largura toda. */
  formato?: 'retrato' | 'paisagem';
}

export function CarrosselPassos({
  imagens,
  gradient,
  formato = 'retrato',
}: CarrosselPassosProps) {
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
      onTouchStart={aoEncostar}
      onTouchEnd={aoSoltar}
      className={`mx-auto w-full focus:outline-none ${
        formato === 'retrato' ? 'max-w-[250px] sm:max-w-[290px]' : 'max-w-full'
      }`}
    >
      {/* A moldura acompanha a imagem: dentro de cada plataforma elas têm o mesmo tamanho. */}
      <a
        href={imagem.src}
        target="_blank"
        rel="noreferrer"
        title="Abrir a imagem em tamanho maior"
        className="block overflow-hidden rounded-2xl ring-1 ring-slate-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
      >
        <img
          key={imagem.src}
          src={imagem.src}
          alt={`Passo ${imagem.passo}: ${imagem.legenda}`}
          width={formato === 'retrato' ? 480 : 960}
          height={formato === 'retrato' ? 1040 : 540}
          loading={atual === 0 ? 'eager' : 'lazy'}
          className="block w-full"
        />
      </a>

      <div aria-live="polite" className="mt-3">
        <div className="mb-1.5 flex items-center justify-between gap-2">
          <span
            className={`rounded-full bg-gradient-to-r ${gradient} px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-white`}
          >
            Passo {imagem.passo}
          </span>
          <span className="text-xs font-medium tabular-nums text-slate-400">
            {atual + 1} / {total}
          </span>
        </div>
        <p className="text-sm leading-relaxed text-slate-600">{imagem.legenda}</p>
      </div>

      <div className="mt-3 flex items-center gap-2">
        <button
          onClick={() => mover(-1)}
          aria-label="Imagem anterior"
          className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600 transition hover:bg-slate-200 hover:text-slate-900"
        >
          <ChevronLeft size={18} />
        </button>

        <div className="flex flex-1 gap-1">
          {imagens.map((img, i) => (
            <button
              key={img.src + i}
              onClick={() => setAtual(i)}
              aria-label={`Ir para a imagem ${i + 1}, do passo ${img.passo}`}
              aria-current={i === atual}
              className={`h-1.5 flex-1 rounded-full transition-colors ${
                i === atual ? 'bg-sky-500' : 'bg-slate-200 hover:bg-slate-300'
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => mover(1)}
          aria-label="Próxima imagem"
          className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-600 transition hover:bg-slate-200 hover:text-slate-900"
        >
          <ChevronRight size={18} />
        </button>
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
