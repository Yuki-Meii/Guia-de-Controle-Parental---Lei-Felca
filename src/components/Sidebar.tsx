import { Fragment, useEffect, useState } from 'react';
import { Shield, Home, Menu, X, Scale, BarChart3, HelpCircle } from 'lucide-react';
import { plataformas } from '@/data/platforms';

interface SidebarProps {
  activeSection: string;
  onNavigate: (id: string) => void;
}

export function Sidebar({ activeSection, onNavigate }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigate = (id: string) => {
    onNavigate(id);
    setIsOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const secoes = [
    {
      titulo: null,
      itens: [
        { id: 'inicio', label: 'Início', icon: Home },
        { id: 'lei-felca', label: 'Lei Felca', icon: Scale },
      ],
    },
    {
      titulo: 'Plataformas',
      itens: plataformas.map((p) => ({ id: p.id, label: p.nome, icon: p.icon })),
    },
    {
      titulo: 'Saiba mais',
      itens: [
        { id: 'comparativo', label: 'Comparativo', icon: BarChart3 },
        { id: 'faq', label: 'Perguntas frequentes', icon: HelpCircle },
      ],
    },
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed left-4 top-4 z-50 rounded-xl bg-slate-900 p-2.5 text-white shadow-lg transition hover:bg-slate-800 lg:hidden"
        aria-label="Abrir menu"
      >
        <Menu size={22} />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`fixed left-0 top-0 z-50 h-screen w-72 bg-slate-900 text-white shadow-2xl transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col p-6">
          <div className="mb-8 flex items-start justify-between">
            <div>
              <div className="mb-2 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-emerald-400 shadow-lg shadow-sky-500/20">
                  <Shield className="h-6 w-6 text-slate-900" strokeWidth={2.5} />
                </div>
                <div>
                  <h1 className="text-lg font-bold leading-tight">Controle Parental</h1>
                  <p className="text-xs text-slate-400">Segurança Digital para Menores</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white lg:hidden"
              aria-label="Fechar menu"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto">
            {secoes.map((secao) => (
              <Fragment key={secao.titulo ?? 'principal'}>
                {secao.titulo && (
                  <h2 className="mb-2 mt-6 px-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                    {secao.titulo}
                  </h2>
                )}
                <ul className="space-y-1.5">
                  {secao.itens.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.id;

                    return (
                      <li key={item.id}>
                        <button
                          onClick={() => handleNavigate(item.id)}
                          aria-current={isActive ? 'page' : undefined}
                          className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all ${
                            isActive
                              ? 'bg-gradient-to-r from-sky-500/20 to-emerald-500/10 text-white ring-1 ring-sky-500/30'
                              : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                          }`}
                        >
                          <Icon
                            size={18}
                            className={isActive ? 'text-sky-400' : 'text-slate-400'}
                          />
                          {item.label}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </Fragment>
            ))}
          </nav>

          <div className="mt-6 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-800/50 p-4 ring-1 ring-slate-700">
            <p className="text-xs leading-relaxed text-slate-400">
              As configurações podem variar conforme a versão do aplicativo e do sistema operacional.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
