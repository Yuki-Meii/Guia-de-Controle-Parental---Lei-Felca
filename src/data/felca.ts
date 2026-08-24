import {
  ShieldCheck,
  Users,
  EyeOff,
  Smartphone,
  Lock,
  DollarSign,
  Gamepad2,
  type LucideIcon,
} from 'lucide-react';

export interface FelcaTopic {
  icon: LucideIcon;
  /** Termo técnico do princípio, exibido como etiqueta no card. */
  rotulo: string;
  title: string;
  description: string;
  color: string;
}

export const felcaTopics: FelcaTopic[] = [
  {
    icon: ShieldCheck,
    rotulo: 'Verificação de Idade',
    title: 'Verificação de idade',
    description:
      'As plataformas devem adotar mecanismos mais confiáveis para identificar a faixa etária dos usuários. Contas de crianças e adolescentes de até 16 anos devem estar vinculadas a um responsável.',
    color: 'text-sky-500',
  },
  {
    icon: Users,
    rotulo: 'Supervisão Parental',
    title: 'Controle parental',
    description:
      'As plataformas precisam oferecer ferramentas para que pais e responsáveis possam acompanhar e controlar a utilização dos serviços digitais por menores.',
    color: 'text-emerald-500',
  },
  {
    icon: EyeOff,
    rotulo: 'Filtro de Conteúdo',
    title: 'Mais proteção contra conteúdos prejudiciais',
    description:
      'As empresas devem adotar medidas para reduzir a exposição de crianças e adolescentes a conteúdos envolvendo violência, abuso, exploração, assédio, pornografia, desafios perigosos e outras situações de risco.',
    color: 'text-rose-500',
  },
  {
    icon: Smartphone,
    rotulo: 'Anti-Uso Compulsivo',
    title: 'Mudanças no funcionamento das plataformas',
    description:
      'Para menores de 18 anos, a legislação estabelece restrições a mecanismos considerados capazes de estimular o uso excessivo, como rolagem infinita, reprodução automática de vídeos e notificações que incentivem o uso contínuo.',
    color: 'text-amber-500',
  },
  {
    icon: Lock,
    rotulo: 'Privacy by Default',
    title: 'Privacidade e dados pessoais',
    description:
      'A lei aumenta a proteção dos dados de crianças e adolescentes. Informações utilizadas para verificar a idade não podem ser utilizadas para outras finalidades, e há restrições ao rastreamento e ao uso desses dados para publicidade direcionada.',
    color: 'text-indigo-500',
  },
  {
    icon: DollarSign,
    rotulo: 'Proteção Comercial',
    title: 'Publicidade e monetização',
    description:
      'As plataformas precisam impedir práticas comerciais que explorem a vulnerabilidade de crianças e adolescentes, incluindo a monetização ou promoção de conteúdos que apresentem menores de maneira sexualizada.',
    color: 'text-teal-500',
  },
  {
    icon: Gamepad2,
    rotulo: 'Loot Boxes',
    title: 'Jogos digitais',
    description:
      'A legislação também estabelece regras específicas para serviços digitais e jogos acessíveis ao público infantojuvenil, incluindo restrições às chamadas caixas de recompensa (loot boxes).',
    color: 'text-violet-500',
  },
];
