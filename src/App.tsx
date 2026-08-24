import { useState, useEffect } from 'react';
import { ArrowRight, ArrowUp, BarChart3, Heart, HelpCircle, ShieldCheck } from 'lucide-react';
import { Hero } from '@/components/Hero';
import { PlatformGrid } from '@/components/PlatformCard';
import { PlatformPage } from '@/components/PlatformPage';
import { FelcaSection } from '@/components/FelcaSection';
import { ComparativoSection } from '@/components/ComparativoSection';
import { FaqSection } from '@/components/FaqSection';
import { Sidebar } from '@/components/Sidebar';
import { plataformas, type Platform } from '@/data/platforms';

type View = 'inicio' | 'lei-felca' | 'comparativo' | 'faq' | string;

function App() {
  const [activeView, setActiveView] = useState<View>('inicio');
  const [showBackToTop, setShowBackToTop] = useState(false);

  const navigateTo = (id: string) => {
    setActiveView(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activePlatform: Platform | undefined = plataformas.find((p) => p.id === activeView);

  return (
    <div className="min-h-screen bg-slate-100">
      <Sidebar activeSection={activeView} onNavigate={navigateTo} />

      <main className="min-h-screen lg:ml-72">
        <div className="mx-auto max-w-7xl px-4 pb-12 pt-20 sm:px-6 lg:px-10 lg:pt-10">
          {activeView === 'inicio' && (
            <>
              <Hero
                onExplore={() => {
                  document.getElementById('plataformas')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                onFelca={() => navigateTo('lei-felca')}
              />

              <div id="plataformas" className="scroll-mt-8 pt-12">
                <PlatformGrid onNavigate={navigateTo} />
              </div>

              <section className="grid gap-6 sm:grid-cols-2">
                <button
                  onClick={() => navigateTo('comparativo')}
                  className="group flex items-start gap-4 rounded-3xl bg-white p-6 text-left shadow-lg ring-1 ring-slate-200/60 transition-all hover:-translate-y-1 hover:shadow-2xl hover:ring-slate-300"
                >
                  <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-emerald-500 shadow-lg">
                    <BarChart3 className="h-6 w-6 text-white" strokeWidth={2} />
                  </span>
                  <span>
                    <span className="mb-1 flex items-center gap-2 text-lg font-bold text-slate-900">
                      Comparativo das plataformas
                      <ArrowRight
                        size={16}
                        className="text-slate-400 transition-transform group-hover:translate-x-1"
                      />
                    </span>
                    <span className="block text-sm leading-relaxed text-slate-600">
                      Veja lado a lado quais proteções cada plataforma oferece e onde é preciso
                      recorrer ao próprio aparelho.
                    </span>
                  </span>
                </button>

                <button
                  onClick={() => navigateTo('faq')}
                  className="group flex items-start gap-4 rounded-3xl bg-white p-6 text-left shadow-lg ring-1 ring-slate-200/60 transition-all hover:-translate-y-1 hover:shadow-2xl hover:ring-slate-300"
                >
                  <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-sky-500 shadow-lg">
                    <HelpCircle className="h-6 w-6 text-white" strokeWidth={2} />
                  </span>
                  <span>
                    <span className="mb-1 flex items-center gap-2 text-lg font-bold text-slate-900">
                      Perguntas frequentes
                      <ArrowRight
                        size={16}
                        className="text-slate-400 transition-transform group-hover:translate-x-1"
                      />
                    </span>
                    <span className="block text-sm leading-relaxed text-slate-600">
                      Respostas diretas às dúvidas mais comuns, e os canais para denunciar
                      conteúdo que explora crianças.
                    </span>
                  </span>
                </button>
              </section>
            </>
          )}

          {activeView === 'comparativo' && <ComparativoSection />}

          {activeView === 'faq' && <FaqSection />}

          {activeView === 'lei-felca' && (
            <FelcaSection
              onExplore={() => {
                navigateTo('inicio');
                setTimeout(() => {
                  document.getElementById('plataformas')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
              }}
            />
          )}

          {activePlatform && (
            <PlatformPage platform={activePlatform} onBack={() => navigateTo('inicio')} />
          )}

          <footer className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 px-2 pt-6 text-center text-sm text-slate-500 sm:flex-row sm:text-left">
            <div className="flex items-center gap-2">
              <ShieldCheck size={18} className="text-emerald-500" />
              <span>Informação para uma internet mais segura.</span>
            </div>
            <div className="flex items-center gap-1.5">
              Feito com <Heart size={15} className="fill-rose-500 text-rose-500" /> para famílias
            </div>
          </footer>
        </div>
      </main>

      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-30 flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 text-white shadow-xl transition hover:-translate-y-1 hover:bg-slate-800"
          aria-label="Voltar ao topo"
        >
          <ArrowUp size={19} />
        </button>
      )}
    </div>
  );
}

export default App;
