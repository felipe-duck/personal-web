import mikrolab01 from "@/assets/labs/MikroLab.jpeg"
import forti_software from "@/assets/labs/forti_software.png"

export interface Lab {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  category: string;
  duration: string;
  difficulty: 'Iniciante' | 'Intermediário' | 'Avançado';
  howItWorks: string[];
  tools: string[];
  outcome: string;
  repoLink: string;
  notes: string;
  // Ex: '/downloads/lab-01-topologia.png' ou link externo
  topologyDownload?: string;
  // Ex: '/downloads/lab-01-configs.zip' ou link externo
  configDownload?: string;
  image: string;
  detailImage: string;
}

export const LABS: Lab[] = [
  {
    id: 'lab-01',
    title: 'MikroLab',
    subtitle: 'Laboratório de redes com alta disponibilidade, segmentação por VLAN e testes de segurança utilizando MikroTik',
    description: 'Laboratório prático desenvolvido com foco em redes corporativas utilizando equipamentos MikroTik. O ambiente simula um cenário real com múltiplos links de internet, redundância de firewall, segmentação de rede e testes de segurança, permitindo validar conceitos como alta disponibilidade, VPNs e controle de tráfego.',
    tags: ['Alta Disponibilidade (HA)', 'VLAN (802.1Q)', 'WireGuard', 'Segmentação de Rede','NAT e Firewall (Filter / Mangle)', 'VRRP (Virtual Router Redundancy Protocol)'],
    category: 'MikroTik em Alta Disponibilidade (HA)',
    duration: '[5 horas / 23 dias]',
    difficulty: 'Intermediário',
    howItWorks: [
      'Entrada de Internet',
      'Camada de Transporte (S1 e S2)',
      'Firewalls (Master e Backup)',
      'Controle de Tráfego',
      'DMZ',
      'Core L3',
      'Segmentação por Departamento',
      'Conectividade Externa e Testes',
    ],
    tools: ['MikroTik RouterOS', 'Winbox', 'Terminal CLI (RouterOS)', 'PnetLab (Ambiente Virtual)', 'Scripts RouterOS'],
    outcome: 'O laboratório teve como resultado esperado a criação de um ambiente de rede estável, seguro e altamente disponível, com redundância de links e firewalls garantindo continuidade dos serviços, segmentação eficiente por VLANs para organização e isolamento do tráfego, além da validação prática de VPNs e políticas de segurança através de testes reais de conectividade e acesso externo.',
    repoLink: '',
    notes: 'Este laboratório foi desenvolvido com foco no entendimento prático do funcionamento de redes corporativas utilizando MikroTik, com ênfase em redundância, segmentação e segurança. A topologia consiste em dois links de internet distintos: um link dedicado com IP público e um link PPPoE, permitindo simular cenários reais de múltiplos provedores. A redundância é garantida através de switches operando em bridge com separação por VLAN, evitando falhas únicas na camada de transporte. \n\nO núcleo da rede é composto por dois firewalls configurados com VRRP, inicialmente em modo Active/Passive. No entanto, foram implementados scripts personalizados que permitem, em determinados cenários, a operação em Active/Active, aumentando a eficiência e utilização dos recursos. \nA rede é segmentada por um Core Layer 3 utilizando VLANs (10, 20, 30, 40, 50), garantindo isolamento entre departamentos e melhor organização do tráfego. Regras específicas de firewall foram aplicadas principalmente para redes críticas, como TI e Financeiro. \n\nUma DMZ foi implementada para isolamento de serviços, reforçando a segurança da rede interna. \n\nAlém disso, o ambiente inclui uma filial simulada para testes de VPN, inicialmente utilizando L2TP e posteriormente migrando para WireGuard, devido à sua superioridade em desempenho e segurança. Por fim, um cliente externo foi utilizado para testes de intrusão, permitindo validar regras de firewall, exposição de portas e possíveis inconsistências na configuração. \n\nO projeto foi desenvolvido ao longo de aproximadamente três semanas e representa uma base sólida de conhecimentos em redes, com possibilidade de otimizações futuras utilizando novas abordagens e tecnologias.',
    // Use \n\n para separar parágrafos. Deixe como string vazia '' para ocultar a seção.
    // topologyDownload: URL ou caminho local do arquivo de topologia (imagem, .drawio, .pdf, etc.)
    // Exemplo: topologyDownload: '/downloads/lab-01-topologia.png',
    topologyDownload: '',
    // configDownload: URL ou caminho local do arquivo de configuração das máquinas (.zip, .rsc, .cfg, etc.)
    // Exemplo: configDownload: '/downloads/lab-01-configs.zip',
    configDownload: '',
    image: mikrolab01,
    detailImage: mikrolab01,
  },
  {
    id: 'lab-02',
   title: 'Forti_Software',
    subtitle: 'Laboratório de Redes com Alta Disponibilidade utilizando FortiGate, OSPF e Mikrotik',
    description: 'Ambiente de laboratório voltado para simulação de uma infraestrutura corporativa distribuída, com foco em roteamento dinâmico, segmentação de rede, segurança e alta disponibilidade. O projeto simula uma matriz com múltiplas filiais, cada uma com funções específicas dentro da organização.',
    tags: ['OSPF (Open Shortest Path First)', 'VPN (Site-to-Site)', 'Monitoramento de rede', 'Alta Disponibilidade (HA)', 'Roteamento dinâmico', 'Segmentação de rede'],
    category: 'Fortinet & Enterprise',
    duration: '[12 horas / 28 dias]',
    difficulty: 'Avançado',
    howItWorks: [
      'Estruturação da topologia base (matriz + filiais)',
      'Configuração do backbone redundante',
      'Implementação do roteamento OSPF',
      'Segmentação de rede com VLANs',
      'Configuração de firewall (FortiGate)',
      'Integração com MikroTik nas filiais',
      'Implementação de VPN entre unidades',
      'Monitoramento com Zabbix e validação de disponibilidade',
    ],
    tools: ['FortiGate', 'Zabbix', 'MikroTik', 'Switches L2/L3 (simulados)', 'PnetLab'],
    outcome: 'O laboratório permitiu validar cenários reais de redes corporativas, incluindo failover, roteamento dinâmico e segmentação eficiente. Foi possível simular a comunicação entre matriz e filiais com estabilidade, além de testar políticas de segurança e monitoramento contínuo. O ambiente demonstrou resiliência a falhas e capacidade de expansão, servindo como base prática para estudos em infraestrutura de redes, segurança e operações (NOC).',
    repoLink: '',
    notes: 'Este laboratório foi projetado com foco em simular uma arquitetura corporativa distribuída, contendo uma matriz central interligada a múltiplas filiais através de um backbone redundante. \n\nA matriz foi estruturada para suportar serviços críticos, incluindo servidores internos e disponibilidade de acesso externo através de IPs fixos. O backbone foi desenvolvido com múltiplos caminhos utilizando OSPF como protocolo de roteamento dinâmico, garantindo convergência rápida e redundância. \nAs filiais foram segmentadas conforme suas funções: \n\n- Filial A: Desenvolvimento de software \n- Filial B: Financeiro e equipe de TI \n- Filial C: Comercial e vendas \n\nCada filial possui integração com a matriz via VPN e comunicação interna segmentada por VLANs. Equipamentos FortiGate foram utilizados como firewall principal, aplicando políticas de segurança, controle de tráfego e testes de alta disponibilidade (Active/Passive). \nDispositivos MikroTik foram utilizados em cenários específicos para testes de interoperabilidade e roteamento complementar. O ambiente também contou com implementação de monitoramento utilizando Zabbix, permitindo análise de disponibilidade, tráfego e integridade dos dispositivos da rede. \nO laboratório teve como objetivo principal validar: \n\n- Resiliência da rede (failover) \n- Eficiência do roteamento OSPF \n- Segmentação segura com VLANs \n- Comunicação entre múltiplos sites \n- Monitoramento centralizado',
    // Use \n\n para separar parágrafos. Deixe como string vazia '' para ocultar a seção.
    // topologyDownload: URL ou caminho local do arquivo de topologia (imagem, .drawio, .pdf, etc.)
    // Exemplo: topologyDownload: '/downloads/lab-01-topologia.png',
    topologyDownload: '',
    // configDownload: URL ou caminho local do arquivo de configuração das máquinas (.zip, .rsc, .cfg, etc.)
    // Exemplo: configDownload: '/downloads/lab-01-configs.zip',
    configDownload: '',
    image: forti_software,
    detailImage: forti_software,
  },
//  {
//    id: 'lab-03',
//    title: '[Nome do Laboratório 3]',
//    subtitle: '[Subtítulo ou objetivo principal]',
//    description: '[Descreva aqui o contexto e o objetivo do laboratório.]',
//    tags: ['[Tecnologia 1]', '[Tecnologia 2]', '[Tecnologia 3]', '[Tecnologia 4]'],
//    category: '[Categoria]',
//    duration: '[X horas / X dias]',
//    difficulty: 'Iniciante',
//    howItWorks: [
//      '[Passo 1: Descreva a etapa inicial]',
//      '[Passo 2: Configuração do ambiente]',
//      '[Passo 3: Procedimento principal]',
//      '[Passo 4: Testes realizados]',
//    ],
//    tools: ['[Ferramenta A]', '[Ferramenta B]', '[Ferramenta C]', '[Ferramenta D]'],
//    outcome: '[Resultado obtido ao final do laboratório]',
//    repoLink: '',
//    notes: '',
//    topologyDownload: '',  // ou: topologyDownload: '/downloads/lab-03-topologia.png',
//    configDownload: '',    // ou: configDownload: '/downloads/lab-03-configs.zip',
//    image: 'https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600',
//    detailImage: 'https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200',
//  },
];
