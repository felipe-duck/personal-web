import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Github, Code2, CheckCircle2 } from 'lucide-react';
import { PROJECTS } from '@/data/projects';

const STATUS_STYLES: Record<string, string> = {
  'Concluído': 'bg-green-500/10 border-green-500/25 text-green-400',
  'Em andamento': 'bg-yellow-500/10 border-yellow-500/25 text-yellow-400',
  'Arquivado': 'bg-muted/50 border-border text-muted-foreground',
};

export function ProjectDetailPage() {
  const { id } = useParams();
  const project = PROJECTS.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <p className="text-foreground text-xl font-bold mb-4">Projeto não encontrado</p>
          <Link to="/projetos" className="text-primary text-sm">← Voltar</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen pb-20">
      <div className="max-w-[1200px] mx-auto px-6 pt-24">
        <Link to="/projetos" className="inline-flex items-center gap-2 text-muted-foreground text-sm no-underline hover:text-primary transition-colors mb-8">
          <ArrowLeft size={14} /> Voltar aos Projetos
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
              src={project.detailImage}
              alt={project.title}
              className="w-full h-full object-cover min-h-[300px]"
              width={1200}
              height={600}
            />
          </div>

          {/* Content */}
          <div>
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span className={`text-[11px] font-semibold px-3 py-1 rounded-full border ${STATUS_STYLES[project.status] || ''}`}>
                {project.status}
              </span>
              <span className="text-muted-foreground/50 text-xs">{project.category} · {project.year}</span>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Code2 size={18} className="text-primary" />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">{project.title}</h1>
            </div>

            <p className="text-muted-foreground text-[15px] leading-7 mb-8">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map(tag => (
                <span key={tag} className="text-[11px] px-3 py-1 rounded-full bg-primary/10 border border-primary/25 text-primary font-medium">
                  {tag}
                </span>
              ))}
            </div>

            {project.githubLink && !project.githubLink.startsWith('[') && (
              <a href={project.githubLink} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary no-underline border border-primary/30 rounded-lg px-4 py-2 hover:bg-primary/10 transition-colors">
                <Github size={14} /> Repositório
              </a>
            )}
          </div>
        </motion.div>

        {/* Highlights */}
        {project.highlights.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-12"
          >
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
                <CheckCircle2 size={18} className="text-primary" /> Destaques
              </h3>
              <div className="space-y-4">
                {project.highlights.map((h, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-7 h-7 rounded-full bg-primary/10 border border-primary/25 flex items-center justify-center flex-shrink-0 text-primary text-xs font-bold">
                      {i + 1}
                    </div>
                    <p className="text-muted-foreground text-sm leading-6 pt-0.5">{h}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
