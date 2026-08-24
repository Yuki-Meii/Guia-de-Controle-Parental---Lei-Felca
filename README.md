# Guia Interativo de Controle Parental

Site de capacitação de pais e responsáveis sobre proteção de crianças e adolescentes
em ambientes digitais, com base na Lei nº 15.211/2025.

Projeto desenvolvido para a unidade curricular **Atividade Extensionista II**.

## O que o site oferece

- **Página da Lei nº 15.211/2025** — os sete eixos da legislação traduzidos para
  linguagem cotidiana, identificados pelos princípios de Privacy by Default,
  Anti-Uso Compulsivo, Filtro de Conteúdo e Supervisão Parental.
- **Cinco tutoriais passo a passo** — Instagram, YouTube, Netflix, Steam e TikTok,
  com seis passos objetivos cada e recomendações específicas por plataforma.
- **Comparativo visual** — sete ferramentas de proteção confrontadas entre as cinco
  plataformas, além da idade mínima de cada uma.
- **Perguntas frequentes** — dez dúvidas comuns de responsáveis e os canais oficiais
  de denúncia.

## Tecnologias

- TypeScript, sobre HTML5 e CSS3
- React 18, em componentes reutilizáveis
- Vite 5, para empacotamento e servidor de desenvolvimento
- Tailwind CSS 3, para estilização e responsividade
- Lucide, para os ícones
- ESLint e verificação estática de tipos

## Arquitetura

Aplicação estática de página única, sem banco de dados. O site não possui cadastro,
login, formulário ou qualquer coleta de dados dos visitantes, e não utiliza cookies de
rastreamento — os vídeos são incorporados em modo de privacidade reforçada.

A decisão é coerente com o tema: um site que orienta famílias sobre proteção de dados
de crianças não deve, ele próprio, coletar dados pessoais.

O conteúdo dos tutoriais fica separado da interface, em arquivos tipados sob
`src/data/`, o que permite atualizar textos sem alterar o código da aplicação.

## Como executar localmente

Requer Node.js instalado.

```bash
npm install
npm run dev
```

O site fica disponível em `http://localhost:5173`.

## Outros comandos

```bash
npm run build      # gera a versão de produção em dist/
npm run preview    # serve localmente a versão de produção
npm run lint       # análise estática do código
npm run typecheck  # verificação de tipos
```

## Estrutura

```
src/
├── main.tsx              ponto de entrada
├── App.tsx               navegação entre as seções
├── index.css             estilos globais
├── components/           interface
│   ├── Sidebar.tsx           menu lateral
│   ├── Hero.tsx              abertura da página inicial
│   ├── PlatformCard.tsx      cards das plataformas
│   ├── PlatformPage.tsx      página de tutorial
│   ├── FelcaSection.tsx      página da legislação
│   ├── ComparativoSection.tsx  quadro comparativo
│   └── FaqSection.tsx        perguntas frequentes
└── data/                 conteúdo
    ├── platforms.ts          tutoriais das cinco plataformas
    ├── felca.ts              eixos da legislação
    ├── comparativo.ts        dados do quadro comparativo
    └── faq.ts                perguntas e respostas
```

## Como adicionar a videoaula de um tutorial

Em `src/data/platforms.ts`, preencha a chave `video` da plataforma desejada:

```ts
video: {
  title: 'Como configurar a privacidade do Instagram',
  src: 'https://www.youtube-nocookie.com/embed/IDENTIFICADOR_DO_VIDEO',
},
```

Plataformas sem essa chave exibem automaticamente o aviso de gravação em produção.
