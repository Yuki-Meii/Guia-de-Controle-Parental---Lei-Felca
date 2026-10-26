import {
  Baby,
  Ban,
  KeyRound,
  Unlock,
  Eye,
  AlertTriangle,
  Smartphone,
  Megaphone,
  ShieldCheck,
  Scale,
  type LucideIcon,
} from 'lucide-react';

export interface FaqItem {
  pergunta: string;
  resposta: string;
  icon: LucideIcon;
}

export const faqItems: FaqItem[] = [
  {
    icon: Baby,
    pergunta: 'Com que idade meu filho pode ter uma rede social?',
    resposta:
      'A maioria das plataformas (Instagram, TikTok, YouTube e Steam) exige 13 anos nos próprios termos de uso. Com a Lei nº 15.211/2025, além dessa idade mínima, contas de crianças e adolescentes de até 16 anos precisam estar vinculadas à conta de um pai, mãe ou responsável. Ou seja: não basta ter idade — até os 16 anos, é preciso que um adulto esteja formalmente ligado àquela conta.',
  },
  {
    icon: Ban,
    pergunta: 'A Lei Felca proíbe crianças de usarem a internet?',
    resposta:
      'Não. A lei não proíbe o acesso. O que ela faz é transferir responsabilidade para as empresas: são as plataformas que passam a ter obrigação de verificar idade, oferecer ferramentas de controle parental, reduzir a exposição a conteúdo prejudicial e limitar recursos que estimulam o uso excessivo. O objetivo é tornar o ambiente mais seguro, não impedir o uso.',
  },
  {
    icon: Scale,
    pergunta: 'O que muda na prática no dia a dia da minha família?',
    resposta:
      'Três mudanças são as mais visíveis. Primeiro, as plataformas passam a pedir comprovação de idade e vinculação a um responsável. Segundo, para menores de 18 anos há restrição a mecanismos como rolagem infinita, reprodução automática de vídeos e notificações que incentivam o uso contínuo. Terceiro, os dados usados para verificar a idade não podem ser reaproveitados para publicidade direcionada.',
  },
  {
    icon: KeyRound,
    pergunta: 'Preciso saber a senha do meu filho para ativar o controle parental?',
    resposta:
      'Na maioria dos casos, não. Instagram, TikTok e Steam usam um sistema de convite: você envia um pedido pela sua própria conta e a criança aceita no aparelho dela. Netflix e YouTube Kids funcionam de outro jeito, porque tudo parte da sua conta — na Netflix você cria o perfil infantil e protege com um PIN, e no YouTube Kids o perfil da criança nasce dentro da sua conta do Google.',
  },
  {
    icon: Unlock,
    pergunta: 'Meu filho consegue desativar o controle parental sozinho?',
    resposta:
      'Quando a supervisão é ativada corretamente, não. O desligamento exige a aprovação da conta do responsável ou o PIN que você definiu. Por isso dois cuidados são essenciais: escolha um PIN que a criança não consiga adivinhar (evite datas de aniversário) e não deixe sua conta de responsável logada no aparelho dela. Vale conferir as configurações a cada dois ou três meses.',
  },
  {
    icon: Eye,
    pergunta: 'Controle parental é a mesma coisa que espionar meu filho?',
    resposta:
      'São coisas diferentes. Controle parental define limites de ambiente — que tipo de conteúdo aparece, quem pode falar com a criança, quanto tempo ela fica no aplicativo. Isso é proteção, do mesmo modo que colocar tela na janela ou trava no portão. Ler mensagens privadas é outra coisa. A recomendação prática é sempre explicar à criança o que foi configurado e por quê: adolescentes que entendem o motivo tendem a cooperar, enquanto os que descobrem sozinhos costumam procurar formas de burlar.',
  },
  {
    icon: Smartphone,
    pergunta: 'Se eu trocar de celular ou reinstalar o aplicativo, perco as configurações?',
    resposta:
      'As configurações ficam salvas na conta, não no aparelho — então elas acompanham o login em um celular novo. A exceção são os ajustes do próprio sistema do telefone, como limites de tempo do Android ou do iPhone, que precisam ser refeitos. Depois de trocar de aparelho, vale abrir cada aplicativo e conferir se a supervisão continua ativa.',
  },
  {
    icon: AlertTriangle,
    pergunta: 'O que faço se meu filho já foi exposto a conteúdo impróprio?',
    resposta:
      'Primeiro, não trate a criança como culpada — a chance de ela esconder o próximo episódio aumenta muito quando a reação é punitiva. Depois, denuncie o conteúdo dentro do próprio aplicativo, bloqueie o perfil responsável e guarde prints, que servem como prova. Por fim, revise as configurações de privacidade da conta. Se houve tentativa de aliciamento, contato de adulto desconhecido ou pedido de fotos, registre boletim de ocorrência.',
  },
  {
    icon: Megaphone,
    pergunta: 'Onde denuncio conteúdo que sexualiza ou explora crianças?',
    resposta:
      'Existem três canais gratuitos e anônimos. O Disque 100 (Disque Direitos Humanos) funciona 24 horas, todos os dias, por ligação. A SaferNet, em denuncie.org.br, recebe denúncias online de crimes cibernéticos. E a Polícia Civil do seu estado registra o boletim de ocorrência, inclusive pela delegacia eletrônica. Denunciar dentro do aplicativo é importante, mas não substitui esses canais.',
  },
  {
    icon: ShieldCheck,
    pergunta: 'Este site guarda algum dado meu?',
    resposta:
      'Nenhum. Este site não tem cadastro, login, formulário nem banco de dados. Não coletamos nome, e-mail, telefone ou qualquer informação de quem acessa, e não usamos cookies de rastreamento — os vídeos são incorporados em modo de privacidade reforçada. A decisão foi proposital: um site que orienta famílias sobre proteção de dados de crianças não deveria, ele próprio, coletar dados pessoais.',
  },
];
