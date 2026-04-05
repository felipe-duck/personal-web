import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Clock, Github, Wrench, CheckCircle2 } from 'lucide-react';
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
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Image */}
          <div className="rounded-2xl overflow-hidden border border-border">
            <img
              src={lab.detailImage}
              alt={lab.title}
              className="w-full h-full object-cover min-h-[300px]"
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
              <h3 className="text-lg font-bold text-foreground mb-4">Resultado</h3>
              <p className="text-muted-foreground text-sm leading-7">{lab.outcome}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
