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
  /** Orientação das capturas: celular (padrão) ou computador. */
  formatoImagens?: 'retrato' | 'paisagem';
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
    tagline: 'Conta privada e Supervisão',
    descricao:
      'Deixe a conta privada, restrinja mensagens, comentários e marcações, ative a Supervisão e defina o tempo de uso da conta do adolescente.',
    steps: [
      {
        title: 'Deixe a conta privada',
        description:
          'Na conta do menor, toque na foto do perfil, no canto inferior direito, e em seguida nos três riscos. Você será levado a tela de "Configuração e atividade". Desça até "Privacidade da conta" e ative "Conta privada". Assim, só quem for aprovado como seguidor poderá ver as publicações, os seguidores e quem o perfil segue.',
      },
      {
        title: 'Controle quem pode mandar mensagem',
        description:
          'Ainda em "Configurações e atividade", procure "Mensagens e respostas a stories". Ali você decide quem pode enviar mensagem, adicionar a grupos e responder a stories, além de ativar a proteção contra nudez. O indicado é deixar tudo como "Pessoas que você segue" ou "Ninguém". Em "Pedidos de contato" dá para filtrar quem pode enviar pedidos de contato, adicionar o perfil a grupos e ocultar os pedidos de contato indesejados; em "Respostas a stories", escolhe quem pode respondê-lo; em "Mostrar status da atividade", pode esconder quando o perfil está online.',
      },
      {
        title: 'Filtre comentários e palavras',
        description:
          'Em "Configurações e atividade", abra "Comentários". Ali você bloqueia comentários de usuários específicos, decide quem pode comentar em stories, posts e reels, e ocultar mais comentários que o Instagram considerar ofensivos. Desative também os comentários com GIFs e com foto. Em "Palavras ocultas", escreva a lista de palavras a bloquear: elas passam a ser censuradas nos comentários, e mensagens com essas palavras vão para a pasta de spam.',
      },
      {
        title: 'Filtre marcações e menções',
        description:
          'Ainda em "Configurações e atividade", abra "Marcações e menções". Escolha quem pode marcar o perfil, ative a aprovação manual e defina quem poderá mencioná-lo. Desta forma, as atrelações ao perfil ficam mais limitadas.',
      },
      {
        title: 'Ative a Supervisão',
        description:
          'Este é um passo importante, pois liga a sua conta à do adolescente. Para funcionar, as duas contas precisam se seguir. Na sua conta, abra "Configurações e atividade" e toque em "Supervisão para Contas de Adolescente". Clique em "Continuar", selecione o perfil do menor e em "Enviar convite". Na conta dele, abra "Configurações e atividade" e "Supervisão", o pedido aparece como pendente: basta abrir e clicar em "Aceitar". Também é possível começar pela conta do menor de idade, acessando "Supervisão" e enviando um convite para o adulto responsável.',
      },
      {
        title: 'Defina o limite de tempo',
        description:
          'Na sua conta, com a supervisão ligada, abra o painel de supervisão em "Configurações e atividade", selecione o perfil do menor e acesse "Tempo de uso" e "Gerenciamento de tempo". Ali você define um limite diário de uso e os horários de pausa, em que o aplicativo fica bloqueado, como durante a noite.',
      },
      {
        title: 'Revise o compartilhamento dos stories',
        description:
          'Na conta do menor, volte em "Configurações e atividade" e abra "Compartilhamento e reutilização". Ali você limita se as pessoas podem compartilhar os stories do perfil em mensagens ou nos próprios stories, e se podem compartilhar ou repostar as publicações.',
      },
      {
        title: 'Use o painel de supervisão',
        description:
          'Pelo painel de supervisão, em "Configurações e atividade", dá para ajustar o que não foi feito pelo perfil do menor: com quem ele conversa, quem são seus seguidores e quem ele segue, com quem compartilha a localização, quais contas estão bloqueadas, o tempo de uso, a privacidade do perfil, que tipo de conteúdo ele vê — como a faixa etária e a proteção contra nudez — e quem pode interagir com ele. Além disso, pode decidir se ele pode fazer alterações sem a sua aprovação, assim desativando a supervisão da conta.',
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
      src: 'https://www.youtube-nocookie.com/embed/ZZKudLqJmHg',
    },
    imagens: [
      { passo: 1, src: '/passos/instagram/p1-01.webp', legenda: 'Na conta do menor, toque na foto do perfil no canto inferior direito, e depois nos três riscos no canto superior direito, onde você será redirecionado para "Configurações e atividade".' },
      { passo: 1, src: '/passos/instagram/p1-02.webp', legenda: 'Em "Configurações e atividade", desça até "Privacidade da conta".' },
      { passo: 1, src: '/passos/instagram/p1-03.webp', legenda: 'Ative a opção "Conta privada".' },
      { passo: 1, src: '/passos/instagram/p1-04.webp', legenda: 'Confirme a troca para conta privada.' },
      { passo: 2, src: '/passos/instagram/p2-01.webp', legenda: 'Em "Configurações e atividade", abra "Mensagens e respostas a stories".' },
      { passo: 2, src: '/passos/instagram/p2-02.webp', legenda: 'Aqui ficam as definições sobre quem pode enviar mensagem, adicionar a grupos, responder a stories, ver que está online e ativar a proteção contra nudez.' },
      { passo: 2, src: '/passos/instagram/p2-03.webp', legenda: 'Abra "Pedidos de contato" e, na seção "Quem pode enviar pedidos de contato a você", escolha "Ninguém".' },
      { passo: 2, src: '/passos/instagram/p2-04.webp', legenda: 'Na seção "Quem pode adicionar você a conversas em grupo", selecione "Pessoas que você segue ou para quem já enviou mensagens".' },
      { passo: 2, src: '/passos/instagram/p2-05.webp', legenda: 'Na seção "Tipos de pedidos de contato", selecione "Ocultar pedidos de contato indesejados".' },
      { passo: 2, src: '/passos/instagram/p2-06.webp', legenda: 'Retorne a página anterior e selecione "Respostas ao story".' },
      { passo: 2, src: '/passos/instagram/p2-07.webp', legenda: 'Selecione a opção "Não permitir respostas ao story".' },
      { passo: 2, src: '/passos/instagram/p2-08.webp', legenda: 'Retorne a página anterior e selecione "Mostrar status da atividade".' },
      { passo: 2, src: '/passos/instagram/p2-09.webp', legenda: 'Desligue "Mostrar status da atividade" para esconder quando o perfil está online.' },
      { passo: 3, src: '/passos/instagram/p3-01.webp', legenda: 'Em "Configurações e atividade", abra "Comentários".' },
      { passo: 3, src: '/passos/instagram/p3-02.webp', legenda: 'Em "Bloquear comentários de", você pode selecionar usuários que não devem comentar.' },
      { passo: 3, src: '/passos/instagram/p3-03.webp', legenda: 'Na seção "Quem pode comentar", defina quem pode comentar em posts, reels e stories.' },
      { passo: 3, src: '/passos/instagram/p3-04.webp', legenda: 'Para ocultar mais comentários que o Instagram considera como ofensivo, abra "Ocultar comentários indesejados".' },
      { passo: 3, src: '/passos/instagram/p3-05.webp', legenda: 'Escolha "Mais" para que sejam ocultados mais comentários.' },
      { passo: 3, src: '/passos/instagram/p3-06.webp', legenda: 'Retornando a página anterior, desative os comentários com GIFs e foto.' },
      { passo: 3, src: '/passos/instagram/p3-07.webp', legenda: 'Retornando mais uma página, desça e abra "Palavras ocultas" para escrever uma lista de palavras a serem bloqueadas automaticamente.' },
      { passo: 3, src: '/passos/instagram/p3-08.webp', legenda: 'Digite as palavras a bloquear: elas passam a ser censuradas nos comentários, e mensagens que contenham elas são transferidas para a pasta de spam.' },
      { passo: 4, src: '/passos/instagram/p4-01.webp', legenda: 'Ainda em "Configurações e atividade", abra "Marcações e menções".' },
      { passo: 4, src: '/passos/instagram/p4-02.webp', legenda: 'Na seção "Quem pode marcar você", selecione "Não permitir marcações".' },
      { passo: 4, src: '/passos/instagram/p4-03.webp', legenda: 'Na seção "Como gerenciar marcações", ative a opção "Aprovar marcações manualmente" e selecione "Ativar".' },
      { passo: 4, src: '/passos/instagram/p4-04.webp', legenda: 'Na seção "Quem pode @mencionar você", selecione "Não permitir menções".' },
      { passo: 5, src: '/passos/instagram/p5-01.webp', legenda: 'Para ativar a supervisão, ambas as contas devem se seguir. Na sua conta, acesse "Configurações e atividade" e abra "Supervisão para Contas de Adolescente".' },
      { passo: 5, src: '/passos/instagram/p5-02.webp', legenda: 'Leia a apresentação e clique em "Continuar".' },
      { passo: 5, src: '/passos/instagram/p5-03.webp', legenda: 'Selecione o perfil do menor e envie o convite.' },
      { passo: 5, src: '/passos/instagram/p5-04.webp', legenda: 'Para aceitar o convite, entre na conta do menor e, em "Configurações e atividade", abra "Supervisão", onde será exibido o pedido pendente.' },
      { passo: 5, src: '/passos/instagram/p5-05.webp', legenda: 'Abra o convite e clique em "Aceitar".' },
      { passo: 6, src: '/passos/instagram/p6-01.webp', legenda: 'No seu perfil, com a supervisão ligada, abra o painel de supervisão em "Configuração e atividade".' },
      { passo: 6, src: '/passos/instagram/p6-02.webp', legenda: 'No painel de supervisão, clique em "Ver" no perfil do menor.' },
      { passo: 6, src: '/passos/instagram/p6-03.webp', legenda: 'Na seção "Tempo de uso", selecione "Gerenciamento de tempo".' },
      { passo: 6, src: '/passos/instagram/p6-04.webp', legenda: 'Aqui, na seção "Modo de descanso", você pode definir os horários de pausa em que o aplicativo fica bloqueado, como a noite, e na seção "Limite diário", definir um limite diário de uso.' },
      { passo: 7, src: '/passos/instagram/p7-01.webp', legenda: 'Na conta do menor, acesse "Configurações e atividade" e "Compartilhamento e reutilização".' },
      { passo: 7, src: '/passos/instagram/p7-02.webp', legenda: 'Na seção "Permita que as pessoas compartilhem seus stories", desative a opção "Compartilhamentos do story".' },
      { passo: 7, src: '/passos/instagram/p7-03.webp', legenda: 'Na seção "Stories para stories", selecione a opção "Desativado".' },
      { passo: 7, src: '/passos/instagram/p7-04.webp', legenda: 'Na seção "Permita que as pessoas compartilhem seus posts e reels", desative "Posts e reels no Stories" e "Reposts em posts e reels".' },
      { passo: 8, src: '/passos/instagram/p8-01.webp', legenda: 'É possível ajustar configurações através do painel de supervisão. No seu perfil, acesse "Configurações e atividade" e selecione "Supervisão".' },
      { passo: 8, src: '/passos/instagram/p8-02.webp', legenda: 'Em "Com quem o adolescente conversa", você pode verificar com quem o menor se relacionou, seja por mensagens, reposts ou reações.' },
      { passo: 8, src: '/passos/instagram/p8-03.webp', legenda: 'Em "Seguidores e Seguindo", você pode verificar quem são os seguidores da conta do menor e quem ele segue.' },
      { passo: 8, src: '/passos/instagram/p8-04.webp', legenda: 'Em "Compartilhamento de localização", você pode verificar com quem ele compartilha a localização e desativar ao desmarcar a opção.' },
      { passo: 8, src: '/passos/instagram/p8-05.webp', legenda: 'Em "Perfis bloqueados", você pode verificar quais contas estão bloqueadas.' },
      { passo: 8, src: '/passos/instagram/p8-06.webp', legenda: 'Em "Tempo de uso", você pode observar um gráfico do tempo que o menor passou no aplicativo nos últimos 7 dias, além de ajustar o quanto ele pode usar.' },
      { passo: 8, src: '/passos/instagram/p8-07.webp', legenda: 'Em "Privacidade do perfil", você pode definir se o perfil será público ou privado.' },
      { passo: 8, src: '/passos/instagram/p8-08.webp', legenda: 'Em "Qual conteúdo o adolescente vê", você define qual o tipo de conteúdo ele terá acesso, como a faixa etária e ativar a proteção contra nudez.' },
      { passo: 8, src: '/passos/instagram/p8-09.webp', legenda: 'Em "Quem pode interagir com o adolescente", você pode definir quem pode enviar pedidos de contato, quem pode adicioná-lo a grupos e quem pode o marcar.' },
      { passo: 8, src: '/passos/instagram/p8-10.webp', legenda: 'A opção "Remover supervisão" permite ao menor fazer alterações sem você, desativando a supervisão da conta dele.' },
    ],
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
          'Em "Minha Netflix", selecione o seu perfil, clique em "Gerenciar perfis" e escolha o perfil da criança. Abra "Classificação etária" e depois "Configurações da conta" — a Netflix leva você ao navegador. Selecione a classificação máxima permitida e salve.',
      },
      {
        title: 'Ative o bloqueio de perfil por PIN',
        description:
          'Em "Minha Netflix", selecione o seu perfil, clique em "Conta" e depois em "Configurações de privacidade e dados". Escolha "Bloqueio de perfil", clique em "Criar bloqueio de perfil" e confirme a senha da conta. Digite o PIN desejado e clique em salvar. Coloque o PIN nos perfis de adulto: é ele que impede a criança de sair do perfil infantil.',
      },
      {
        title: 'Bloqueie títulos específicos',
        description:
          'Em "Minha Netflix", selecione o seu perfil, clique em "Gerenciar perfis", selecione o perfil da criança e abra "Restrições de visualização". Clique em "Bloquear títulos" e digite o nome do filme ou da série. Ele deixa de aparecer até na busca.',
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
      { passo: 1, src: '/passos/netflix/p1-01.webp', legenda: 'Clique em "Minha Netflix" e, em seguida, selecione o seu perfil na parte superior.' },
      { passo: 1, src: '/passos/netflix/p1-02.webp', legenda: 'Clique em "Adicionar".' },
      { passo: 1, src: '/passos/netflix/p1-03.webp', legenda: 'Dê um nome ao novo perfil, marque a opção "Perfil para crianças" e clique em "Salvar".' },
      { passo: 1, src: '/passos/netflix/p1-04.webp', legenda: 'O perfil infantil passa a aparecer na lista de perfis.' },
      { passo: 2, src: '/passos/netflix/p2-01.webp', legenda: 'Clique em "Minha Netflix" e, em seguida, selecione o seu perfil na parte superior.' },
      { passo: 2, src: '/passos/netflix/p2-02.webp', legenda: 'Clique em "Gerenciar perfis" e selecione o perfil da criança.' },
      { passo: 2, src: '/passos/netflix/p2-03.webp', legenda: 'Clique em "Classificação etária" e depois em "Configurações da conta", sendo redirecionado para o navegador.' },
      { passo: 2, src: '/passos/netflix/p2-04.webp', legenda: 'Selecione na lista qual será a classificação máxima que a criança poderá ver e clique em "Salvar", na parte inferior da página.' },
      { passo: 3, src: '/passos/netflix/p3-01.webp', legenda: 'Na página "Minha Netflix", com a conta de adulto selecionada, clique no seu perfil.' },
      { passo: 3, src: '/passos/netflix/p3-02.webp', legenda: 'Selecione "Conta".' },
      { passo: 3, src: '/passos/netflix/p3-03.webp', legenda: 'Vá até o final da página e selecione "Configurações de privacidade e dados".' },
      { passo: 3, src: '/passos/netflix/p3-04.webp', legenda: 'Selecione a opção "Bloqueio de perfil".' },
      { passo: 3, src: '/passos/netflix/p3-05.webp', legenda: 'Selecione "Criar bloqueio de perfil". Será necessário confirmar que a conta lhe pertence.' },
      { passo: 3, src: '/passos/netflix/p3-06.webp', legenda: 'Insira o PIN desejado e selecione "Salvar PIN".' },
      { passo: 4, src: '/passos/netflix/p4-01.webp', legenda: 'Na página "Minha Netflix", com a conta de adulto selecionada, clique no seu perfil.' },
      { passo: 4, src: '/passos/netflix/p4-02.webp', legenda: 'Clique em "Gerenciar perfis" e selecione o perfil da criança.' },
      { passo: 4, src: '/passos/netflix/p4-03.webp', legenda: 'Selecione "Restrições de visualização".' },
      { passo: 4, src: '/passos/netflix/p4-04.webp', legenda: 'Clique em "Bloquear títulos".' },
      { passo: 4, src: '/passos/netflix/p4-05.webp', legenda: 'Digite o nome do filme ou da série que deseja bloquear. O título deixa de aparecer para o perfil infantil.' },
      { passo: 5, src: '/passos/netflix/p5-01.webp', legenda: 'Dentro do perfil da criança, clique no ícone de lápis.' },
      { passo: 5, src: '/passos/netflix/p5-02.webp', legenda: 'Vá até o final da página e desmarque "Reprodução automática do próximo episódio".' },
      { passo: 6, src: '/passos/netflix/p6-01.webp', legenda: 'Ainda na mesma página, desmarque "Reprodução automática das prévias".' },
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
          'Na conta do responsável, na página inicial, clique em "Steam", no canto superior esquerdo, e depois em "Configurações". Acesse a seção "Família e compartilhamento" e clique em "Criar ou entrar em uma Família Steam". Escolha "Criar uma família", defina um nome e clique em criar. Use então "Convidar membro", selecione a conta do menor e convide como criança. As duas contas precisam ser amigas para o convite chegar.',
      },
      {
        title: 'Aceite o convite na conta do menor de idade',
        description:
          'Entre na conta do menor. Um sininho verde aparece no canto superior direito: clique nele para abrir o convite. A Steam explica o que a família poderá gerenciar, como restringir jogos e redefinir senhas. Clique em aceitar e depois em confirmar. Um código chega no e-mail do menor — digite no campo e confirme.',
      },
      {
        title: 'Abra o gerenciamento da família',
        description:
          'De volta na conta do responsável, na página inicial, clique em "Steam", depois em "Configurações", acesse "Família e compartilhamento" e escolha "Gerenciar a Família Steam". A página reúne cinco áreas: Gerenciar, que permite gerenciar os perfis de cada membro da família, como quais jogos cada perfil terá acesso, quais funções pode utilizar e definir limite de tempo de jogo; Biblioteca, com os jogos incluídos na Família Steam; Pedidos, com as solicitações de compra e de acesso feitas pela criança; Tempo de jogo, com as horas de jogo de cada membro nos últimos dias; e Histórico, com tudo que foi alterado.',
      },
      {
        title: 'Escolha quais jogos o menor pode acessar',
        description:
          'Na mesma página de gerenciamento da Família Steam, acesse a aba "Gerenciar", clique no perfil do menor de idade e abra "Controles parentais". Serão listados todos os jogos disponíveis na biblioteca na aba "Jogos permitidos": deixe marcada a opção "Somente jogos que eu escolher". Em seguida, marque na lista abaixo os títulos liberados — todo o resto fica fora do alcance.',
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
      src: 'https://www.youtube-nocookie.com/embed/RcEKSyImQoA',
    },
    formatoImagens: 'paisagem',
    imagens: [
      { passo: 1, src: '/passos/steam/p1-01.webp', legenda: 'Utilizando a conta do responsável, na página inicial da Steam, clique em "Steam", no canto superior esquerdo, e depois em "Configurações".' },
      { passo: 1, src: '/passos/steam/p1-02.webp', legenda: 'Na nova tela, acesse a seção "Família e compartilhamento".' },
      { passo: 1, src: '/passos/steam/p1-03.webp', legenda: 'Clique em "Criar ou entrar em uma Família Steam".' },
      { passo: 1, src: '/passos/steam/p1-04.webp', legenda: 'Selecione "Criar uma família" e defina um nome para ela.' },
      { passo: 1, src: '/passos/steam/p1-05.webp', legenda: 'Finalize o cadastro clicando no botão "Criar".' },
      { passo: 1, src: '/passos/steam/p1-06.webp', legenda: 'Com a família criada, clique no botão "Convidar membro".' },
      { passo: 1, src: '/passos/steam/p1-07.webp', legenda: 'Selecione a conta do menor de idade.' },
      { passo: 1, src: '/passos/steam/p1-08.webp', legenda: 'Selecione "Convidar como criança". Note que ambas as contas precisam ser amigas para que o convite chegue.' },
      { passo: 2, src: '/passos/steam/p2-01.webp', legenda: 'Na conta do menor, um sininho verde aparece no canto superior direito.' },
      { passo: 2, src: '/passos/steam/p2-02.webp', legenda: 'Clique nele para abrir o convite enviado e selecione o mesmo.' },
      { passo: 2, src: '/passos/steam/p2-04.webp', legenda: 'Na nova página, a Steam explica o que a família poderá gerenciar na conta. Clique em "Aceitar" e depois em "Confirmar".' },
      { passo: 2, src: '/passos/steam/p2-05.webp', legenda: 'Digite o código de confirmação enviado para o e-mail do menor.' },
      { passo: 3, src: '/passos/steam/p3-01.webp', legenda: 'De volta na conta do responsável, na página inicial, clique em "Steam" e depois em "Configurações".' },
      { passo: 3, src: '/passos/steam/p3-02.webp', legenda: 'Em "Família e compartilhamento", escolha "Gerenciar a Família Steam".' },
      { passo: 3, src: '/passos/steam/p3-03.webp', legenda: 'Aba "Gerenciar": permite gerenciar os perfis de cada membro da família, como quais jogos cada perfil terá acesso, quais funções pode utilizar e definir limite de tempo de jogo.' },
      { passo: 3, src: '/passos/steam/p3-04.webp', legenda: 'Aba "Biblioteca": os jogos incluídos na Família Steam.' },
      { passo: 3, src: '/passos/steam/p3-05.webp', legenda: 'Aba "Pedidos": as solicitações de compra e de acesso feitas pela criança.' },
      { passo: 3, src: '/passos/steam/p3-06.webp', legenda: 'Aba "Tempo de jogo": as horas de cada membro nos últimos dias.' },
      { passo: 3, src: '/passos/steam/p3-07.webp', legenda: 'Aba "Histórico": tudo o que foi alterado na família.' },
      { passo: 4, src: '/passos/steam/p4-01.webp', legenda: 'Ainda na página de gerenciamento da família Steam, acesse a aba "Gerenciar" e selecione o perfil do menor de idade.' },
      { passo: 4, src: '/passos/steam/p4-02.webp', legenda: 'Abra "Controles parentais".' },
      { passo: 4, src: '/passos/steam/p4-03.webp', legenda: 'Na aba "Jogos permitidos", aparece a lista de títulos da biblioteca.' },
      { passo: 4, src: '/passos/steam/p4-04.webp', legenda: 'Deixe marcada a opção "Somente jogos que eu escolher".' },
      { passo: 4, src: '/passos/steam/p4-05.webp', legenda: 'Marque na lista os jogos que o menor poderá acessar.' },
      { passo: 5, src: '/passos/steam/p4-06.webp', legenda: 'Na aba "Configurações", defina o que ele pode usar na plataforma, como ter acesso à loja, conteúdos criados por outros usuários, perfis, capturas de tela, conquistas, amigos, entre outros.' },
      { passo: 5, src: '/passos/steam/p4-07.webp', legenda: 'Ali também ficam os filtros para conteúdo adulto e violência.' },
      { passo: 6, src: '/passos/steam/p4-08.webp', legenda: 'Na aba "Limites de tempo", ajuste o uso por dia da semana.' },
      { passo: 6, src: '/passos/steam/p4-09.webp', legenda: 'Defina quanto tempo de jogo o menor terá em cada dia.' },
    ],
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
