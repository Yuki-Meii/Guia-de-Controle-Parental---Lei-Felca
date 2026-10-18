import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { ChevronLeft, ChevronRight, Images, Maximize2, X } from 'lucide-react';
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
  const [ampliada, setAmpliada] = useState(false);
  const toqueInicial = useRef<number | null>(null);

  const total = imagens.length;
  const imagem = imagens[atual];
  const retrato = formato === 'retrato';

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

  // Com a imagem ampliada, o teclado navega e o Esc fecha; a página não rola por trás.
  useEffect(() => {
    if (!ampliada) return;

    const aoTeclarNaTela = (evento: KeyboardEvent) => {
      if (evento.key === 'Escape') setAmpliada(false);
      else if (evento.key === 'ArrowLeft') mover(-1);
      else if (evento.key === 'ArrowRight') mover(1);
    };

    document.addEventListener('keydown', aoTeclarNaTela);
    const rolagemAnterior = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', aoTeclarNaTela);
      document.body.style.overflow = rolagemAnterior;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ampliada, total]);

  const setaLateral =
    'absolute top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-slate-900/70 text-white shadow-lg ring-1 ring-white/20 backdrop-blur transition hover:bg-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400';

  return (
    <>
      <section
        aria-roledescription="carrossel"
        aria-label="Imagens do passo a passo"
        tabIndex={0}
        onKeyDown={aoTeclar}
        onTouchStart={aoEncostar}
        onTouchEnd={aoSoltar}
        className={`mx-auto w-full focus:outline-none ${
          retrato ? 'max-w-[250px] sm:max-w-[290px]' : 'max-w-full'
        }`}
      >
        {/* A moldura acompanha a imagem: dentro de cada plataforma elas têm o mesmo tamanho. */}
        <div className="group relative">
          <button
            onClick={() => setAmpliada(true)}
            aria-label="Ampliar a imagem"
            className="block w-full overflow-hidden rounded-2xl ring-1 ring-slate-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
          >
            <img
              key={imagem.src}
              src={imagem.src}
              alt={`Passo ${imagem.passo}: ${imagem.legenda}`}
              width={retrato ? 480 : 960}
              height={retrato ? 1040 : 540}
              loading={atual === 0 ? 'eager' : 'lazy'}
              className="block w-full"
            />
            <span className="pointer-events-none absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900/70 text-white opacity-0 ring-1 ring-white/20 backdrop-blur transition group-hover:opacity-100">
              <Maximize2 size={15} />
            </span>
          </button>

          <button onClick={() => mover(-1)} aria-label="Imagem anterior" className={`${setaLateral} left-2`}>
            <ChevronLeft size={20} />
          </button>
          <button onClick={() => mover(1)} aria-label="Próxima imagem" className={`${setaLateral} right-2`}>
            <ChevronRight size={20} />
          </button>
        </div>

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

      {/* Renderizado no body: o container sticky do vídeo cria um contexto de
          empilhamento que, de outro modo, deixaria o menu lateral por cima. */}
      {ampliada && createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Passo ${imagem.passo}, imagem ${atual + 1} de ${total}`}
          onClick={() => setAmpliada(false)}
          className="fixed inset-0 z-[60] flex flex-col items-center justify-center gap-4 bg-slate-950/90 p-4 backdrop-blur-sm sm:p-8"
        >
          <button
            onClick={() => setAmpliada(false)}
            aria-label="Fechar"
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 transition hover:bg-white/20"
          >
            <X size={20} />
          </button>

          {/* O clique dentro do bloco não fecha: só o fundo fecha. */}
          <div
            onClick={(evento) => evento.stopPropagation()}
            onTouchStart={aoEncostar}
            onTouchEnd={aoSoltar}
            className="flex max-h-full min-h-0 flex-col items-center gap-4"
          >
            <div className="relative flex min-h-0 items-center">
              <img
                src={imagem.src}
                alt={`Passo ${imagem.passo}: ${imagem.legenda}`}
                className="max-h-[78vh] w-auto max-w-[92vw] rounded-xl object-contain shadow-2xl"
              />
              <button onClick={() => mover(-1)} aria-label="Imagem anterior" className={`${setaLateral} left-2`}>
                <ChevronLeft size={20} />
              </button>
              <button onClick={() => mover(1)} aria-label="Próxima imagem" className={`${setaLateral} right-2`}>
                <ChevronRight size={20} />
              </button>
            </div>

            <div aria-live="polite" className="w-full max-w-xl text-center">
              <div className="mb-2 flex items-center justify-center gap-3">
                <span
                  className={`rounded-full bg-gradient-to-r ${gradient} px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-white`}
                >
                  Passo {imagem.passo}
                </span>
                <span className="text-xs font-medium tabular-nums text-slate-400">
                  {atual + 1} / {total}
                </span>
              </div>
              <p className="text-[15px] leading-relaxed text-slate-200">{imagem.legenda}</p>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
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
