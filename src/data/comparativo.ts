import {
  Lock,
  Users,
  Clock,
  Filter,
  MessageSquare,
  CreditCard,
  History,
  type LucideIcon,
} from 'lucide-react';

/** Idade mínima declarada nos termos de uso de cada plataforma. */
export interface IdadeMinima {
  plataformaId: string;
  idade: string;
  observacao: string;
}

export const idadesMinimas: IdadeMinima[] = [
  {
    plataformaId: 'instagram',
    idade: '13 anos',
    observacao: 'Até os 16, a conta precisa estar vinculada a um responsável.',
  },
  {
    plataformaId: 'youtube',
    idade: '13 anos',
    observacao: 'Abaixo disso, o caminho é o YouTube Kids, com perfil criado pelo responsável.',
  },
  {
    plataformaId: 'netflix',
    idade: 'Conta do responsável',
    observacao: 'A criança não tem conta própria: usa um perfil infantil dentro da conta da família.',
  },
  {
    plataformaId: 'steam',
    idade: '13 anos',
    observacao: 'A criança tem conta própria, vinculada à Família Steam do responsável.',
  },
  {
    plataformaId: 'tiktok',
    idade: '13 anos',
    observacao: 'Contas de 13 a 15 anos já nascem privadas por padrão.',
  },
];

export type StatusRecurso = 'sim' | 'parcial' | 'nao';

export interface CelulaComparativo {
  status: StatusRecurso;
  nota: string;
}

export interface LinhaComparativo {
  recurso: string;
  icon: LucideIcon;
  explicacao: string;
  plataformas: Record<string, CelulaComparativo>;
}

export const linhasComparativo: LinhaComparativo[] = [
  {
    recurso: 'Perfil privado',
    icon: Lock,
    explicacao: 'Só quem você aprova consegue ver o que a criança publica.',
    plataformas: {
      instagram: { status: 'sim', nota: 'Conta privada nas configurações' },
      youtube: { status: 'nao', nota: 'Não há publicação no YouTube Kids' },
      netflix: { status: 'nao', nota: 'Não há publicação de conteúdo' },
      tiktok: { status: 'sim', nota: 'Padrão para contas de 13 a 15 anos' },
      steam: { status: 'parcial', nota: 'Nas configurações da conta, fora deste guia' },
    },
  },
  {
    recurso: 'Vinculação com responsável',
    icon: Users,
    explicacao: 'A conta do adulto fica ligada à da criança para acompanhar e definir limites.',
    plataformas: {
      instagram: { status: 'sim', nota: 'Supervisão de Contas de Adolescente' },
      youtube: { status: 'sim', nota: 'Perfil criado dentro da conta do responsável' },
      netflix: { status: 'parcial', nota: 'Perfil infantil, sem conta separada' },
      tiktok: { status: 'sim', nota: 'Sincronização Familiar' },
      steam: { status: 'sim', nota: 'Família Steam, com conta própria' },
    },
  },
  {
    recurso: 'Limite de tempo de tela',
    icon: Clock,
    explicacao: 'Define quantas horas por dia, e em quais horários, o aplicativo pode ser usado.',
    plataformas: {
      instagram: { status: 'sim', nota: 'Limite diário e horários de pausa' },
      youtube: { status: 'sim', nota: 'Timer dentro do aplicativo' },
      netflix: { status: 'nao', nota: 'Depende do limite do próprio celular' },
      tiktok: { status: 'sim', nota: 'Tempo de tela diário e pausa programada' },
      steam: { status: 'sim', nota: 'Limites por dia da semana' },
    },
  },
  {
    recurso: 'Filtro de conteúdo por idade',
    icon: Filter,
    explicacao: 'Esconde automaticamente material inadequado para a faixa etária.',
    plataformas: {
      instagram: { status: 'sim', nota: 'Faixa etária, palavras ocultas e nudez' },
      youtube: { status: 'sim', nota: 'Faixa etária ou aprovação manual dos vídeos' },
      netflix: { status: 'sim', nota: 'Classificação indicativa por perfil' },
      tiktok: { status: 'sim', nota: 'Palavras-chave, tópicos e Modo Restrito' },
      steam: { status: 'sim', nota: 'Jogos permitidos e filtros de conteúdo' },
    },
  },
  {
    recurso: 'Controle de mensagens',
    icon: MessageSquare,
    explicacao: 'Impede que desconhecidos entrem em contato direto com a criança.',
    plataformas: {
      instagram: { status: 'sim', nota: 'Restringe quem envia mensagem direta' },
      youtube: { status: 'nao', nota: 'Não há comentários nem mensagens' },
      netflix: { status: 'nao', nota: 'Não há contato entre usuários' },
      tiktok: { status: 'sim', nota: 'Mensagens diretas pela Sincronização Familiar' },
      steam: { status: 'sim', nota: 'Bloqueio de chat, amigos e grupos' },
    },
  },
  {
    recurso: 'Bloqueio de compras',
    icon: CreditCard,
    explicacao: 'Exige senha ou PIN antes de qualquer cobrança no cartão.',
    plataformas: {
      instagram: { status: 'nao', nota: 'Sem trava específica de compra' },
      youtube: { status: 'nao', nota: 'O YouTube Kids não tem loja' },
      netflix: { status: 'parcial', nota: 'PIN impede sair do perfil infantil' },
      tiktok: { status: 'parcial', nota: 'Depende da trava da loja do celular' },
      steam: { status: 'sim', nota: 'Pedidos aprovados pelo responsável' },
    },
  },
  {
    recurso: 'Histórico visível ao responsável',
    icon: History,
    explicacao: 'Permite ao adulto ver o que foi assistido ou acessado.',
    plataformas: {
      instagram: { status: 'parcial', nota: 'Conversas, seguidores e tempo de uso' },
      youtube: { status: 'sim', nota: 'Lista de vídeos assistidos' },
      netflix: { status: 'sim', nota: 'Histórico por perfil' },
      tiktok: { status: 'parcial', nota: 'Conexões e tempo de uso' },
      steam: { status: 'sim', nota: 'Tempo de jogo e histórico da família' },
    },
  },
];
