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

/** Imagem do passo a passo, exibida no carrossel abaixo do vídeo. */
export interface PlatformImage {
  src: string;
  /** Número do passo que a imagem ilustra, conforme a lista de configurações. */
  passo: number;
  /** Legenda curta, exibida abaixo da imagem. */
  legenda: string;
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
  /** Quando ausente, o carrossel de imagens não é exibido. */
  imagens?: PlatformImage[];
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
          'Na página inicial, clique em "Minha Netflix", selecione o seu perfil e clique em "Adicionar". Dê um nome, marque a opção de perfil para crianças e clique em salvar. O catálogo desse perfil já nasce filtrado.',
      },
      {
        title: 'Defina a classificação etária',
        description:
          'Em "Minha Netflix", clique em "Gerenciar perfis" e escolha o perfil da criança. Abra "Classificação etária" e depois "Configurações da conta" — a Netflix leva você ao navegador. Selecione a classificação máxima permitida e salve.',
      },
      {
        title: 'Ative o bloqueio de perfil por PIN',
        description:
          'Em "Minha Netflix", clique em "Conta" e depois em "Configurações de privacidade e dados". Escolha "Bloqueio de perfil", clique em "Criar bloqueio de perfil" e confirme a senha da conta. Digite o PIN desejado e clique em salvar. Coloque o PIN nos perfis de adulto: é ele que impede a criança de sair do perfil infantil.',
      },
      {
        title: 'Bloqueie títulos específicos',
        description:
          'Em "Minha Netflix", clique em "Gerenciar perfis", selecione o perfil da criança e abra "Restrições de visualização". Clique em "Bloquear títulos" e digite o nome do filme ou da série. Ele deixa de aparecer até na busca.',
      },
      {
        title: 'Desative a reprodução automática de episódios',
        description:
          'Já dentro do perfil da criança, clique no ícone de lápis e vá até o final da tela que se abre. Desmarque a reprodução automática do próximo episódio, que faz a criança emendar um capítulo no outro sem perceber.',
      },
      {
        title: 'Desative as prévias automáticas',
        description:
          'Na mesma tela, desmarque também a reprodução automática das prévias, que fica passando trailers de títulos quando o perfil é aberto.',
      },
    ],
    recursos: [
      'Revise o histórico de reprodução do perfil de tempos em tempos: ele mostra os hábitos de consumo e revela o que passou pela trava.',
      'Use um PIN diferente da senha da conta e evite digitá-lo na frente das crianças.',
      'Crie um perfil para cada criança: idades diferentes pedem classificações diferentes.',
      'A classificação indicativa é um guia, não uma garantia: vale assistir junto ao que for novidade.',
    ],
    video: {
      title: 'Como configurar o controle parental da Netflix',
      src: 'https://www.youtube-nocookie.com/embed/2b7xvST175A',
    },
    imagens: [
      { passo: 1, src: '/passos/netflix/passo1-01-tela-de-perfis.webp', legenda: 'A tela de escolha de perfil, ao abrir o aplicativo.' },
      { passo: 1, src: '/passos/netflix/passo1-02-tocar-em-adicionar.webp', legenda: 'Em "Minha Netflix", toque em "Adicionar".' },
      { passo: 1, src: '/passos/netflix/passo1-03-nome-e-perfil-para-criancas.webp', legenda: 'Dê um nome e ative "Perfil para crianças".' },
      { passo: 1, src: '/passos/netflix/passo1-04-perfil-criado.webp', legenda: 'O perfil infantil passa a aparecer na lista.' },
      { passo: 1, src: '/passos/netflix/passo1-05-avatar-infantil.webp', legenda: 'O avatar ganha o selo "Infantil".' },
      { passo: 2, src: '/passos/netflix/passo2-01-gerenciar-perfis.webp', legenda: 'Em "Minha Netflix", toque em "Gerenciar perfis".' },
      { passo: 2, src: '/passos/netflix/passo2-02-editar-perfil.webp', legenda: 'Na edição do perfil, abra "Classificação etária".' },
      { passo: 2, src: '/passos/netflix/passo2-03-abrir-no-navegador.webp', legenda: 'A Netflix pede para abrir o navegador. É normal.' },
      { passo: 2, src: '/passos/netflix/passo2-04-lista-de-classificacoes.webp', legenda: 'No navegador, selecione a classificação máxima.' },
      { passo: 2, src: '/passos/netflix/passo2-05-titulos-restritos.webp', legenda: 'Abaixo da lista ficam os títulos restritos.' },
      { passo: 3, src: '/passos/netflix/passo3-01-criar-bloqueio-de-perfil.webp', legenda: 'Em "Criar bloqueio de perfil", confirme a senha da conta.' },
      { passo: 3, src: '/passos/netflix/passo3-02-bloqueio-ativado.webp', legenda: 'Com o PIN salvo, o bloqueio aparece como ativado.' },
      { passo: 4, src: '/passos/netflix/passo4-01-restricoes-de-visualizacao.webp', legenda: 'Em "Restrições de visualização", abra "Bloquear títulos".' },
      { passo: 4, src: '/passos/netflix/passo4-02-bloquear-titulos.webp', legenda: 'O campo de busca de títulos, ainda vazio.' },
      { passo: 4, src: '/passos/netflix/passo4-03-digitar-o-titulo.webp', legenda: 'Digite o nome do filme ou da série.' },
      { passo: 4, src: '/passos/netflix/passo4-04-titulo-bloqueado.webp', legenda: 'O título entra na lista de bloqueados.' },
      { passo: 4, src: '/passos/netflix/passo4-05-sumiu-da-busca.webp', legenda: 'Na busca do perfil, o título já não aparece.' },
      { passo: 5, src: '/passos/netflix/passo5-01-opcoes-ligadas.webp', legenda: 'No fim de "Editar perfil", as duas opções vêm ligadas.' },
      { passo: 5, src: '/passos/netflix/passo5-02-proximo-episodio-desligado.webp', legenda: 'Desligue a reprodução automática do próximo episódio.' },
      { passo: 6, src: '/passos/netflix/passo6-01-previas-desligadas.webp', legenda: 'Desligue também a reprodução automática das prévias.' },
    ],
  },
  {
    id: 'steam',
    nome: 'Steam',
    icon: Gamepad2,
    color: 'text-blue-500',
    gradient: 'from-blue-500 via-cyan-500 to-teal-400',
    tagline: 'Família Steam e controles parentais',
    descricao:
      'Crie uma Família Steam, convide a conta do menor de idade e defina quais jogos ele acessa, o que pode usar na plataforma e quanto tempo pode jogar por dia.',
    steps: [
      {
        title: 'Crie a Família Steam e convide o menor de idade',
        description:
          'Na conta do responsável, clique em "Steam", no canto superior esquerdo, e depois em "Configurações". Acesse a seção "Família e compartilhamento" e clique em "Criar ou entrar em uma Família Steam". Escolha "Criar uma família", defina um nome e clique em criar. Use então "Convidar membro", selecione a conta do menor e convide como criança. As duas contas precisam ser amigas para o convite chegar.',
      },
      {
        title: 'Aceite o convite na conta do menor de idade',
        description:
          'Entre na conta do menor. Um sininho verde aparece no canto superior direito: clique nele para abrir o convite. A Steam explica o que a família poderá gerenciar, como restringir jogos e redefinir senhas. Clique em aceitar e depois em confirmar. Um código chega no e-mail do menor — digite no campo e confirme.',
      },
      {
        title: 'Abra o gerenciamento da família',
        description:
          'De volta na conta do responsável, clique em "Steam", depois em "Configurações", acesse "Família e compartilhamento" e escolha "Gerenciar a Família Steam". A página reúne cinco áreas: Gerenciar, onde ficam os controles de cada perfil; Biblioteca, com os jogos incluídos na Família Steam; Pedidos, com as solicitações de compra e de acesso feitas pela criança; Tempo de jogo, com as horas de cada membro nos últimos dias; e Histórico, com tudo que foi alterado.',
      },
      {
        title: 'Escolha quais jogos o menor pode acessar',
        description:
          'Na aba "Gerenciar", clique no perfil do menor de idade e abra "Controles parentais". Na aba "Jogos permitidos", deixe marcada a opção de somente os jogos que você escolher. Em seguida, marque na lista abaixo os títulos liberados — todo o resto fica fora do alcance dele.',
      },
      {
        title: 'Ajuste o que ele pode usar na plataforma',
        description:
          'Ainda em "Controles parentais", abra a aba "Configurações". Ali você decide se o menor terá acesso à loja, conteúdos criados por outros usuários, perfis, capturas de tela, conquistas, lista de amigos, conversas e grupos. Há também filtros específicos para conteúdo adulto e violência.',
      },
      {
        title: 'Defina os limites de tempo de jogo',
        description:
          'Na aba "Limites de tempo", defina quando e por quanto tempo o menor pode jogar. Os horários são ajustados dia a dia, o que permite liberar mais no fim de semana e restringir em dias de aula.',
      },
    ],
    recursos: [
      'Para convidar o menor, as duas contas precisam estar na lista de amigos uma da outra.',
      'Acompanhe a aba "Pedidos": é por ali que chegam as solicitações de compra, e aprovar sem olhar anula o controle.',
      'Confira a classificação indicativa antes de liberar um jogo, principalmente os que têm chat online.',
      'O chat de voz dentro de alguns jogos não passa pelo gerenciamento da família: avalie título por título antes de liberar.',
    ],
    video: {
      title: 'Como configurar os controles parentais da Steam',
      src: 'https://www.youtube-nocookie.com/embed/JwzmLPSvgh0',
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
