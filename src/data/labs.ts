import mikrolab01 from "@/assets/MikroLab.jpeg"

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
  // Novo campo: texto bruto / resumo livre do laboratório
  // Use \n\n para separar parágrafos. Deixe como string vazia '' para ocultar a seção.
  notes: string;
  // Novo campo: URL ou caminho do arquivo de topologia para download
  // Ex: '/downloads/lab-01-topologia.png' ou link externo
  // Deixe como string vazia '' ou undefined para ocultar o botão
  topologyDownload?: string;
  // Novo campo: URL ou caminho do arquivo de configuração das máquinas para download
  // Ex: '/downloads/lab-01-configs.zip' ou link externo
  // Deixe como string vazia '' ou undefined para ocultar o botão
  configDownload?: string;
  image: string;
  detailImage: string;
}

export const LABS: Lab[] = [
  {
    id: 'lab-01',
    title: 'MikroLab 01',
    subtitle: 'Subtítulo teste',
    description: '[Descreva aqui o contexto e o objetivo do laboratório. O que foi estudado? Qual problema foi resolvido? Qual cenário foi simulado?]',
    tags: ['[Tecnologia 1]', '[Tecnologia 2]', '[Tecnologia 3]'],
    category: 'MikroTik',
    duration: '[X horas / X dias]',
    difficulty: 'Intermediário',
    howItWorks: [
      '[Passo 1: Descreva a etapa inicial do laboratório]',
      '[Passo 2: Descreva a configuração do ambiente]',
      '[Passo 3: Explique o procedimento principal]',
      '[Passo 4: Descreva os testes realizados]',
      '[Passo 5: Resultados e conclusões obtidos]',
    ],
    tools: ['[Ferramenta A]', '[Ferramenta B]', '[Ferramenta C]'],
    outcome: '[Descreva o resultado obtido ao final do laboratório e o que foi aprendido]',
    repoLink: '',
    // notes: preencha com o resumo livre do laboratório. Deixe '' para ocultar a seção.
    notes: 'Escreva aqui um resumo mais detalhado do laboratório em formato livre. Pode incluir contexto técnico, dificuldades encontradas, aprendizados, observações importantes, etc.',
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
    title: '[Nome do Laboratório 2]',
    subtitle: '[Subtítulo ou objetivo principal]',
    description: '[Descreva aqui o contexto e o objetivo do laboratório.]',
    tags: ['[Tecnologia 1]', '[Tecnologia 2]'],
    category: '[Categoria]',
    duration: '[X horas / X dias]',
    difficulty: 'Avançado',
    howItWorks: [
      '[Passo 1: Descreva a etapa inicial]',
      '[Passo 2: Configuração do ambiente]',
      '[Passo 3: Procedimento principal]',
      '[Passo 4: Testes realizados]',
      '[Passo 5: Resultados]',
    ],
    tools: ['[Ferramenta A]', '[Ferramenta B]'],
    outcome: '[Resultado obtido ao final do laboratório]',
    repoLink: '',
    notes: '',
    topologyDownload: '',
    configDownload: '',
    image: mikrolab01,
    detailImage: 'https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200',
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
