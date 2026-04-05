import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Code2, ArrowRight } from 'lucide-react';
import { PROJECTS } from '@/data/projects';

const STATUS_STYLES: Record<string, { badge: string; dot: string }> = {
  'Concluído': { badge: 'bg-green-500/10 border-green-500/25 text-green-400', dot: 'bg-green-400 shadow-[0_0_6px_theme(colors.green.400)]' },
  'Em andamento': { badge: 'bg-yellow-500/10 border-yellow-500/25 text-yellow-400', dot: 'bg-yellow-400 shadow-[0_0_6px_theme(colors.yellow.400)]' },
  'Arquivado': { badge: 'bg-muted/50 border-border text-muted-foreground', dot: 'bg-muted-foreground' },
};

export function ProjectsPage() {
  return (
    <div className="bg-background min-h-screen pb-20">
      {/* Header */}
      <div className="border-b border-border pt-16 pb-12 px-6" style={{
        background: 'linear-gradient(180deg, hsl(348 70% 45% / 0.06) 0%, transparent 100%)',
      }}>
        <div className="max-w-[1200px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-primary text-xs tracking-[2.5px] uppercase font-semibold mb-2">
              Construções & Desenvolvimentos
            </p>
            <h1 className="text-[clamp(2rem,4vw,3rem)] font-bold text-foreground tracking-tight mb-3">
              Projetos
            </h1>
            <p className="text-muted-foreground text-[15px] max-w-[540px]">
              Projetos individuais para aprendizado, automação e resolução de problemas
              na área de TI e segurança da informação.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 pt-12">
        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((project, i) => {
            const statusStyle = STATUS_STYLES[project.status] || STATUS_STYLES['Concluído'];
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <Link to={`/projetos/${project.id}`} className="no-underline block h-full">
                  <div className="glass-card rounded-2xl overflow-hidden h-full flex flex-col">
                    {/* Banner */}
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                      <div className="absolute top-3 right-3">
                        <span className={`inline-flex items-center gap-1.5 text-[10px] font-semibold px-2.5 py-1 rounded-full border ${statusStyle.badge}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${statusStyle.dot}`} />
                          {project.status}
                        </span>
                      </div>
                    </div>

                    <div className="p-5 flex-1 flex flex-col">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                          <Code2 size={14} className="text-primary" />
                        </div>
                        <span className="text-muted-foreground/50 text-[11px]">{project.year}</span>
                      </div>

                      <h3 className="text-foreground font-bold text-[15px] mb-1.5">{project.title}</h3>
                      <p className="text-muted-foreground text-[13px] mb-3 line-clamp-2">{project.description}</p>

                      <div className="flex flex-wrap gap-1.5 mt-auto mb-4">
                        {project.tags.slice(0, 3).map(tag => (
                          <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full bg-secondary border border-border text-muted-foreground">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-1.5 text-primary text-xs font-medium">
                        Ver detalhes <ArrowRight size={12} />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
