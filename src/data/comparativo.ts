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
    observacao: 'Abaixo disso, o caminho é o YouTube Kids com conta supervisionada.',
  },
  {
    plataformaId: 'netflix',
    idade: 'Conta do responsável',
    observacao: 'A criança não tem conta própria: usa um perfil infantil dentro da conta da família.',
  },
  {
    plataformaId: 'steam',
    idade: '13 anos',
    observacao: 'A conta é da família; o acesso do menor é controlado pelo Family View.',
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
      youtube: { status: 'parcial', nota: 'Vídeos e playlists podem ser privados' },
      netflix: { status: 'nao', nota: 'Não há publicação de conteúdo' },
      tiktok: { status: 'sim', nota: 'Padrão para contas de 13 a 15 anos' },
      steam: { status: 'sim', nota: 'Perfil e lista de amigos privados' },
    },
  },
  {
    recurso: 'Vinculação com responsável',
    icon: Users,
    explicacao: 'A conta do adulto fica ligada à da criança para acompanhar e definir limites.',
    plataformas: {
      instagram: { status: 'sim', nota: 'Supervisão Familiar' },
      youtube: { status: 'sim', nota: 'Family Link' },
      netflix: { status: 'parcial', nota: 'Perfil infantil, sem conta separada' },
      tiktok: { status: 'sim', nota: 'Sincronização Familiar' },
      steam: { status: 'parcial', nota: 'Family View protegido por PIN' },
    },
  },
  {
    recurso: 'Limite de tempo de tela',
    icon: Clock,
    explicacao: 'Define quantas horas por dia, e em quais horários, o aplicativo pode ser usado.',
    plataformas: {
      instagram: { status: 'sim', nota: 'Lembretes e limite diário' },
      youtube: { status: 'sim', nota: 'Limite e bloqueio noturno via Family Link' },
      netflix: { status: 'nao', nota: 'Depende do limite do próprio celular' },
      tiktok: { status: 'sim', nota: 'Limite diário e horário de descanso' },
      steam: { status: 'nao', nota: 'Depende do limite do próprio computador' },
    },
  },
  {
    recurso: 'Filtro de conteúdo por idade',
    icon: Filter,
    explicacao: 'Esconde automaticamente material inadequado para a faixa etária.',
    plataformas: {
      instagram: { status: 'parcial', nota: 'Filtro de palavras e conteúdo sensível' },
      youtube: { status: 'sim', nota: 'Modo Restrito e faixas do YouTube Kids' },
      netflix: { status: 'sim', nota: 'Classificação indicativa por perfil' },
      tiktok: { status: 'sim', nota: 'Filtros de vídeo por palavra-chave' },
      steam: { status: 'sim', nota: 'Biblioteca limitada pelo Family View' },
    },
  },
  {
    recurso: 'Controle de mensagens',
    icon: MessageSquare,
    explicacao: 'Impede que desconhecidos entrem em contato direto com a criança.',
    plataformas: {
      instagram: { status: 'sim', nota: 'Restringe quem envia mensagem direta' },
      youtube: { status: 'parcial', nota: 'Comentários; não há mensagem privada' },
      netflix: { status: 'nao', nota: 'Não há contato entre usuários' },
      tiktok: { status: 'sim', nota: 'Mensagens limitadas ou desativadas' },
      steam: { status: 'sim', nota: 'Bloqueio de chat e Comunidade' },
    },
  },
  {
    recurso: 'Bloqueio de compras',
    icon: CreditCard,
    explicacao: 'Exige senha ou PIN antes de qualquer cobrança no cartão.',
    plataformas: {
      instagram: { status: 'nao', nota: 'Sem trava específica de compra' },
      youtube: { status: 'sim', nota: 'Aprovação de compras pelo Family Link' },
      netflix: { status: 'parcial', nota: 'PIN protege a troca de plano' },
      tiktok: { status: 'parcial', nota: 'Depende da trava da loja do celular' },
      steam: { status: 'sim', nota: 'PIN obrigatório na loja' },
    },
  },
  {
    recurso: 'Histórico visível ao responsável',
    icon: History,
    explicacao: 'Permite ao adulto ver o que foi assistido ou acessado.',
    plataformas: {
      instagram: { status: 'parcial', nota: 'Contas seguidas e tempo de uso' },
      youtube: { status: 'sim', nota: 'Histórico completo de visualização' },
      netflix: { status: 'sim', nota: 'Histórico por perfil' },
      tiktok: { status: 'parcial', nota: 'Curtidas e atividade da conta' },
      steam: { status: 'sim', nota: 'Tempo de jogo por título' },
    },
  },
];
