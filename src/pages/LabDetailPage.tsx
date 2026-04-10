import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Clock, Github, Wrench, CheckCircle2, Download } from 'lucide-react';
import { LABS } from '@/data/labs';

const DIFFICULTY_STYLES: Record<string, string> = {
  Iniciante: 'bg-green-500/10 border-green-500/30 text-green-400',
  Intermediário: 'bg-yellow-500/10 border-yellow-500/30 text-yellow-400',
  Avançado: 'bg-primary/10 border-primary/30 text-primary',
};

export function LabDetailPage() {
  const { id } = useParams();
  const lab = LABS.find(l => l.id === id);

  if (!lab) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <p className="text-foreground text-xl font-bold mb-4">Laboratório não encontrado</p>
          <Link to="/laboratorios" className="text-primary text-sm">← Voltar</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen pb-20">
      <div className="max-w-[1200px] mx-auto px-6 pt-24">
        <Link to="/laboratorios" className="inline-flex items-center gap-2 text-muted-foreground text-sm no-underline hover:text-primary transition-colors mb-8">
          <ArrowLeft size={14} /> Voltar aos Laboratórios
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:items-center"
        >
          {/* Image */}
          <div className="flex items-center justify-center rounded-2xl overflow-hidden border border-border bg-black/5 min-h-[300px] lg:min-h-0">
            <img
              src={lab.detailImage}
              alt={lab.title}
              className="w-full h-auto object-contain"
              width={1200}
              height={600}
            />
          </div>

          {/* Content */}
          <div>
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span className={`text-[11px] font-semibold px-3 py-1 rounded-full border ${DIFFICULTY_STYLES[lab.difficulty] || ''}`}>
                {lab.difficulty}
              </span>
              <span className="flex items-center gap-1.5 text-muted-foreground text-xs">
                <Clock size={12} /> {lab.duration}
              </span>
              <span className="text-muted-foreground/50 text-xs">{lab.category}</span>
            </div>

            <h1 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-2">{lab.title}</h1>
            <p className="text-muted-foreground text-sm mb-6">{lab.subtitle}</p>

            <p className="text-muted-foreground text-[15px] leading-7 mb-8">{lab.description}</p>

            <div className="flex flex-wrap gap-2 mb-8">
              {lab.tags.map(tag => (
                <span key={tag} className="text-[11px] px-3 py-1 rounded-full bg-primary/10 border border-primary/25 text-primary font-medium">
                  {tag}
                </span>
              ))}
            </div>

            {lab.repoLink && !lab.repoLink.startsWith('[') && (
              <a href={lab.repoLink} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary no-underline border border-primary/30 rounded-lg px-4 py-2 hover:bg-primary/10 transition-colors mb-6">
                <Github size={14} /> Repositório
              </a>
            )}
          </div>
        </motion.div>

        {/* How it works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <div className="glass-card rounded-2xl p-8">
            <h3 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
              <CheckCircle2 size={18} className="text-primary" /> Como Funciona
            </h3>
            <div className="space-y-4">
              {lab.howItWorks.map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-7 h-7 rounded-full bg-primary/10 border border-primary/25 flex items-center justify-center flex-shrink-0 text-primary text-xs font-bold">
                    {i + 1}
                  </div>
                  <p className="text-muted-foreground text-sm leading-6 pt-0.5">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                <Wrench size={18} className="text-primary" /> Ferramentas
              </h3>
              <div className="flex flex-wrap gap-2">
                {lab.tools.map(tool => (
                  <span key={tool} className="text-[12px] px-3 py-1.5 rounded-lg bg-secondary border border-border text-secondary-foreground font-medium">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-lg font-bold text-foreground mb-4">Resultado Esperado</h3>
              <p className="text-muted-foreground text-sm leading-7">{lab.outcome}</p>
            </div>
          </div>
        </motion.div>

        {/* Downloads */}
        {/* Esta seção só aparece se ao menos um dos links de download estiver preenchido */}
        {/* Para ativar, preencha lab.topologyDownload e/ou lab.configDownload em labs.ts */}
        {(lab.topologyDownload || lab.configDownload) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-8"
          >
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
                <Download size={18} className="text-primary" /> Downloads
              </h3>
              <div className="flex flex-wrap gap-3">
                {/* Botão para baixar a imagem/diagrama da topologia do laboratório */}
                {/* Preencher lab.topologyDownload com a URL ou caminho do arquivo de topologia */}
                {lab.topologyDownload && (
                  <a
                    href={lab.topologyDownload}
                    download
                    className="inline-flex items-center gap-2 text-sm text-primary no-underline border border-primary/30 rounded-lg px-4 py-2 hover:bg-primary/10 transition-colors"
                  >
                    <Download size={14} /> Topologia do Laboratório
                  </a>
                )}

                {/* Botão para baixar o arquivo de configuração das máquinas do laboratório */}
                {/* Preencher lab.configDownload com a URL ou caminho do arquivo de configuração */}
                {/* Exemplo: arquivo .zip com configs de RouterOS, scripts, etc. */}
                {lab.configDownload && (
                  <a
                    href={lab.configDownload}
                    download
                    className="inline-flex items-center gap-2 text-sm text-primary no-underline border border-primary/30 rounded-lg px-4 py-2 hover:bg-primary/10 transition-colors"
                  >
                    <Download size={14} /> Configuração das Máquinas
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}

        {/* Resumo / Texto Bruto */}
        {/* Exibir somente se lab.notes estiver preenchido e não começar com '[' (placeholder) */}
        {lab.notes && !lab.notes.startsWith('[') && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-8"
          >
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-lg font-bold text-foreground mb-4">Resumo Técnico</h3>
              {/* Renderizar lab.notes preservando quebras de linha com whitespace-pre-wrap */}
              <p className="text-muted-foreground text-sm leading-7 whitespace-pre-wrap">{lab.notes}</p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
