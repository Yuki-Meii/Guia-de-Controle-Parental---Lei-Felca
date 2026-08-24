import {
  Instagram,
  Youtube,
  Film,
  Gamepad2,
  Music2,
  type LucideIcon,
} from 'lucide-react';

export interface PlatformStep {
  title: string;
  description: string;
}

export interface PlatformVideo {
  title: string;
  src: string;
}

export interface Platform {
  id: string;
  nome: string;
  icon: LucideIcon;
  color: string;
  gradient: string;
  tagline: string;
  descricao: string;
  steps: PlatformStep[];
  /** Dicas específicas da plataforma, exibidas abaixo do vídeo. */
  recursos: string[];
  /** Quando ausente, a página exibe o aviso de vídeo em produção. */
  video?: PlatformVideo;
}

// Para vincular a videoaula de um tutorial, preencha a chave "video" com o título e
// o endereço de incorporação, substituindo o código após "/embed/" pelo identificador
// do vídeo. Plataformas sem essa chave exibem o aviso de gravação em produção.

export const plataformas: Platform[] = [
  {
    id: 'instagram',
    nome: 'Instagram',
    icon: Instagram,
    color: 'text-pink-600',
    gradient: 'from-pink-500 via-rose-500 to-orange-400',
    tagline: 'Privacidade e supervisão familiar',
    descricao:
      'Configure a conta como privada, gerencie mensagens de desconhecidos e ative a supervisão familiar para proteger menores no Instagram.',
    steps: [
      {
        title: 'Defina a conta como privada',
        description:
          'Vá em Configurações > Privacidade > Privacidade da conta e ative "Conta privada". Assim, apenas seguidores aprovados poderão ver suas publicações.',
      },
      {
        title: 'Controle mensagens de desconhecidos',
        description:
          'Em Configurações > Privacidade > Mensagens, escolha quem pode enviar mensagens diretas e solicitações de mensagem, restringindo contatos não seguidores.',
      },
      {
        title: 'Gerencie comentários e marcações',
        description:
          'Em Privacidade > Comentários, bloqueie ou restrinja comentários de pessoas específicas e filtre palavras ofensivas automaticamente.',
      },
      {
        title: 'Ative a Supervisão Familiar',
        description:
          'Acesse Configurações > Supervisão para vincular a conta de um adolescente, permitindo definir limites de tempo, ver contatos e configurar alertas de segurança.',
      },
      {
        title: 'Configure a opção "Tempo de uso"',
        description:
          'Acompanhe o tempo gasto no app diariamente e defina lembretes diários para pausar a utilização e manter um uso saudável.',
      },
      {
        title: 'Revise tags e stories',
        description:
          'Em Privacidade > Marcações, configure a aprovação manual de tags em fotos e limite quem pode ver e compartilhar seus stories.',
      },
    ],
    recursos: [
      'Ative a verificação em duas etapas na sua conta de responsável: é ela que autoriza qualquer mudança na supervisão.',
      'Revise a lista de seguidores junto com o adolescente e remova contas desconhecidas.',
      'Combine que solicitações de mensagem de estranhos não devem ser respondidas, nem por curiosidade.',
      'Confira as configurações depois de cada atualização grande do aplicativo.',
    ],
    video: {
      title: 'Como configurar a privacidade do Instagram',
      src: 'https://www.youtube-nocookie.com/embed/8mReUcz2lwE',
    },
  },
  {
    id: 'youtube',
    nome: 'YouTube',
    icon: Youtube,
    color: 'text-red-600',
    gradient: 'from-red-500 via-red-500 to-rose-600',
    tagline: 'Controle parental e YouTube Kids',
    descricao:
      'Use o YouTube Kids, configure a supervisão familiar, defina restrições de conteúdo e monitore o histórico de visualização dos menores.',
    steps: [
      {
        title: 'Utilize o YouTube Kids',
        description:
          'Baixe o app YouTube Kids, projetado para crianças, com conteúdo curado e interfaces mais simples e seguras para menores.',
      },
      {
        title: 'Configure a supervisão familiar',
        description:
          'Crie uma Conta do Google para a criança e vincule-a à sua conta pelo Family Link para gerenciar acessos e aprovações de conteúdo.',
      },
      {
        title: 'Defina restrições de conteúdo',
        description:
          'No YouTube Kids, escolha a faixa etária (Pré-escola, Escolar, Mais antigos) ou ative o modo "Apenas conteúdo aprovado" para máxima segurança.',
      },
      {
        title: 'Monitore o histórico de visualização',
        description:
          'Acompanhe os vídeos assistidos através do histórico da conta vinculada, identificando padrões e conteúdos inadequados.',
      },
      {
        title: 'Controle o tempo de uso',
        description:
          'Defina limites diários de tempo de tela pelo Family Link e bloqueie o acesso ao YouTube em horários específicos, como hora de dormir.',
      },
      {
        title: 'Ative o Modo Restrito',
        description:
          'No YouTube padrão, ative o Modo Restrito em Configurações > Geral para ocultar vídeos com conteúdo potencialmente inadequado.',
      },
    ],
    recursos: [
      'Para menores de 10 anos, prefira o YouTube Kids no modo "Apenas conteúdo aprovado", que é o mais restritivo.',
      'O Modo Restrito precisa ser ativado em cada navegador e aparelho separadamente — ativar no celular não cobre o computador.',
      'Desative a reprodução automática: é ela que faz um vídeo seguro emendar em outro inadequado.',
      'Revise o histórico junto com a criança, tratando como conversa e não como fiscalização.',
    ],
    video: {
      title: 'Como configurar o YouTube Kids',
      src: 'https://www.youtube-nocookie.com/embed/KpF0S4Wglyc',
    },
  },
  {
    id: 'netflix',
    nome: 'Netflix',
    icon: Film,
    color: 'text-red-700',
    gradient: 'from-red-700 via-red-800 to-slate-900',
    tagline: 'Perfis infantis e classificação etária',
    descricao:
      'Crie perfis infantis com classificação etária adequada, bloqueie conteúdos inadequados e acompanhe o que os menores assistem na Netflix.',
    steps: [
      {
        title: 'Crie um perfil infantil',
        description:
          'Em "Gerenciar perfis", adicione um novo perfil e marque a opção "Criança", selecionando a faixa etária adequada para limitar o catálogo.',
      },
      {
        title: 'Defina a classificação etária do perfil',
        description:
          'Acesse Configurações da conta > Perfis e travas de conteúdo e ajuste o limite de maturidade para cada perfil infantil individualmente.',
      },
      {
        title: 'Ative o bloqueio por PIN',
        description:
          'Configure um PIN de bloqueio em Configurações > Travas de conteúdo, impedindo que crianças acessem perfis de adultos ou títulos restritos.',
      },
      {
        title: 'Bloqueie títulos específicos',
        description:
          'Na seção de travas de conteúdo, selecione títulos individualmente para bloqueá-los, independentemente da classificação etária do perfil.',
      },
      {
        title: 'Revise o histórico de visualização',
        description:
          'Acompanhe o histórico de reprodução do perfil infantil para entender os hábitos de consumo e identificar conteúdos inadequados.',
      },
      {
        title: 'Desative a reprodução automática',
        description:
          'Em Configurações de reprodução, desative a reprodução automática do próximo episódio para evitar o consumo prolongado e sem supervisão.',
      },
    ],
    recursos: [
      'Use um PIN diferente da senha da conta e evite digitá-lo na frente das crianças.',
      'Crie um perfil para cada criança: idades diferentes pedem classificações diferentes.',
      'Mantenha os downloads dentro do perfil infantil — títulos baixados em outro perfil ignoram a trava.',
      'A classificação indicativa é um guia, não uma garantia: vale assistir junto ao que for novidade.',
    ],
  },
  {
    id: 'steam',
    nome: 'Steam',
    icon: Gamepad2,
    color: 'text-blue-500',
    gradient: 'from-blue-500 via-cyan-500 to-teal-400',
    tagline: 'Family View e proteção de conteúdo',
    descricao:
      'Ative o Family View, configure o PIN de segurança, restrinja jogos por classificação etária e proteja a conta contra compras não autorizadas.',
    steps: [
      {
        title: 'Ative o Family View',
        description:
          'Vá em Configurações > Family View e ative o recurso para ocultar jogos e conteúdos inadequados, exibindo apenas os títulos permitidos.',
      },
      {
        title: 'Configure o PIN de segurança',
        description:
          'Defina um PIN em Family View para bloquear o acesso a jogos restritos, loja, comunidade e biblioteca, exigindo o código para desbloquear.',
      },
      {
        title: 'Restrinja jogos por classificação etária',
        description:
          'No Family View, escolha quais jogos ficam visíveis com base na classificação indicativa, ocultando títulos com conteúdo inadequado para menores.',
      },
      {
        title: 'Proteja contra compras não autorizadas',
        description:
          'Ative a exigência de PIN para compras em Configurações > Loja, impedindo que menores comprem jogos ou façam microtransações sem permissão.',
      },
      {
        title: 'Controle o acesso à Comunidade Steam',
        description:
          'No Family View, restrinja o acesso à Comunidade, incluindo fóruns, guias e conteúdo gerado por usuários, que pode conter material inadequado.',
      },
      {
        title: 'Gerencie o Steam Family',
        description:
          'Use o recurso Steam Family para compartilhar jogos com responsáveis, definir permissões e monitorar a atividade dos menores na plataforma.',
      },
    ],
    recursos: [
      'O PIN do Family View não pode ser igual à senha da conta Steam, nem uma data de aniversário.',
      'Confira a classificação indicativa antes de liberar um jogo, principalmente os que têm chat online.',
      'O chat de voz dentro dos jogos não passa pelo Family View: avalie título por título.',
      'Desvincule o cartão de crédito e use saldo da carteira Steam para limitar gastos por engano.',
    ],
    video: {
      title: 'Como configurar o Family View da Steam',
      src: 'https://www.youtube-nocookie.com/embed/umbjpRKycw0',
    },
  },
  {
    id: 'tiktok',
    nome: 'TikTok',
    icon: Music2,
    color: 'text-slate-900',
    gradient: 'from-slate-800 via-slate-900 to-black',
    tagline: 'Sincronização Familiar e controles',
    descricao:
      'Ative a Sincronização Familiar, restrinja mensagens e comentários, controle o tempo de tela e proteja o conteúdo visualizado por menores no TikTok.',
    steps: [
      {
        title: 'Ative a Sincronização Familiar',
        description:
          'Em Configurações > Sincronização Familiar, vincule a conta do adolescente à do responsável para definir limites e monitorar a atividade.',
      },
      {
        title: 'Defina a conta como privada',
        description:
          'Em Configurações > Privacidade, ative "Conta privada" para que apenas seguidores aprovados possam ver os vídeos publicados.',
      },
      {
        title: 'Restrinja mensagens e comentários',
        description:
          'Em Privacidade, limite quem pode enviar mensagens diretas e comentar nos vídeos, escolhendo "Amigos" ou desativando completamente para menores.',
      },
      {
        title: 'Controle o tempo de tela',
        description:
          'Use a Sincronização Familiar para definir limites diários de uso e horários de bloqueio, como durante o horário escolar ou à noite.',
      },
      {
        title: 'Ative o Filtro de conteúdo',
        description:
          'Em Configurações > Privacidade > Filtros de vídeos, adicione palavras-chave e hashtags para ocultar conteúdos inadequados do feed "Para você".',
      },
      {
        title: 'Revise a atividade da conta',
        description:
          'Acompanhe os vídeos curtidos, comentados e compartilhados pela conta vinculada para identificar padrões e conteúdos potencialmente inadequados.',
      },
    ],
    recursos: [
      'Inicie a Sincronização Familiar pelo seu celular: ela exige confirmação nos dois aparelhos.',
      'O horário de descanso é a configuração mais eficaz contra o uso na madrugada.',
      'Vá acrescentando palavras-chave ao filtro conforme perceber o que aparece no feed da criança.',
      'Converse sobre desafios virais: o filtro não bloqueia o que ainda não tem nome.',
    ],
  },
];
