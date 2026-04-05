export interface Certification {
  id: number;
  name: string;
  issuer: string;
  category: string;
  status: 'Obtida' | 'Em andamento' | 'Interesse';
  year: string;
  description: string;
  badgeImage: string;
}

export const CERT_FILTERS = ['Todas', 'Segurança', 'ITSM', 'Infraestrutura'];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 1,
    name: 'CC – Certified in Cybersecurity',
    issuer: 'ISC2',
    category: 'Segurança',
    status: 'Obtida',
    year: '[Ano]',
    description: 'Certificação de entrada em segurança da informação pela (ISC)², cobrindo conceitos de segurança, controle de acesso, criptografia e resposta a incidentes.',
    badgeImage: '',
  },
  {
    id: 2,
    name: 'ISO/IEC 27001 Security Associate',
    issuer: 'SkillFront',
    category: 'Segurança',
    status: 'Obtida',
    year: '[Ano]',
    description: 'Fundamentos da norma ISO/IEC 27001 para Sistemas de Gestão de Segurança da Informação (SGSI).',
    badgeImage: '',
  },
  {
    id: 3,
    name: 'FCA – Fortinet Certified Associate',
    issuer: 'Fortinet',
    category: 'Segurança',
    status: 'Obtida',
    year: '[Ano]',
    description: 'Certificação associada da Fortinet em cibersegurança, com foco em segurança de redes e soluções Fortinet.',
    badgeImage: '',
  },
  {
    id: 4,
    name: 'Analista SOC',
    issuer: 'IBSEC',
    category: 'Segurança',
    status: 'Obtida',
    year: '[Ano]',
    description: 'Formação em operações de centro de segurança (SOC), monitoramento, triagem de alertas e resposta a incidentes.',
    badgeImage: '',
  },
  {
    id: 5,
    name: 'ISO/IEC 20000 IT Service Associate',
    issuer: 'SkillFront',
    category: 'ITSM',
    status: 'Obtida',
    year: '[Ano]',
    description: 'Gestão de serviços de TI conforme a norma ISO/IEC 20000, alinhada ao framework ITIL.',
    badgeImage: '',
  },
  {
    id: 6,
    name: 'Segurança em Linux',
    issuer: 'IBSEC',
    category: 'Infraestrutura',
    status: 'Obtida',
    year: '[Ano]',
    description: 'Hardening e práticas de segurança em sistemas operacionais Linux, controle de permissões e auditoria.',
    badgeImage: '',
  },
  {
    id: 7,
    name: 'ITIL 4 Foundation',
    issuer: 'PeopleCert / Axelos',
    category: 'ITSM',
    status: 'Em andamento',
    year: 'Em progresso',
    description: 'Framework global de gestão de serviços de TI, práticas de service management e melhoria contínua.',
    badgeImage: '',
  },
];
