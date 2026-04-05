import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { FlaskConical, Clock, ArrowRight } from 'lucide-react';
import { LABS } from '@/data/labs';

const DIFFICULTY_STYLES: Record<string, string> = {
  Iniciante: 'bg-green-500/10 border-green-500/30 text-green-400',
  Intermediário: 'bg-yellow-500/10 border-yellow-500/30 text-yellow-400',
  Avançado: 'bg-primary/10 border-primary/30 text-primary',
};

export function LabsPage() {
  return (
    <div className="bg-background min-h-screen pb-20">
      {/* Header */}
      <div className="border-b border-border pt-16 pb-12 px-6" style={{
        background: 'linear-gradient(180deg, hsl(348 70% 45% / 0.06) 0%, transparent 100%)',
      }}>
        <div className="max-w-[1200px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-primary text-xs tracking-[2.5px] uppercase font-semibold mb-2">
              Prática & Aprendizado
            </p>
            <h1 className="text-[clamp(2rem,4vw,3rem)] font-bold text-foreground tracking-tight mb-3">
              Laboratórios
            </h1>
            <p className="text-muted-foreground text-[15px] max-w-[540px]">
              Ambientes práticos de estudo e experimentação. Cada laboratório é documentado
              com contexto, funcionamento e tecnologias utilizadas.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-[1200px] mx-auto px-6 pt-12">
        {LABS.length === 0 ? (
          <div className="text-center py-20 bg-card border border-dashed border-primary/25 rounded-2xl">
            <FlaskConical size={40} className="text-primary/50 mx-auto mb-4" />
            <p className="text-muted-foreground text-[15px]">Laboratórios serão adicionados em breve.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {LABS.map((lab, i) => (
              <motion.div
                key={lab.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
              >
                <Link to={`/laboratorios/${lab.id}`} className="no-underline block h-full">
                  <div className="glass-card rounded-2xl overflow-hidden h-full flex flex-col">
                    {/* Banner image */}
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={lab.image}
                        alt={lab.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                      <div className="absolute top-3 left-3 flex items-center gap-2">
                        <span className="bg-primary/80 text-primary-foreground text-[10px] font-bold px-2.5 py-1 rounded-md">
                          LAB {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border ${DIFFICULTY_STYLES[lab.difficulty] || ''}`}>
                          {lab.difficulty}
                        </span>
                      </div>
                    </div>

                    <div className="p-5 flex-1 flex flex-col">
                      <div className="flex items-center gap-1.5 text-muted-foreground text-[11px] mb-2">
                        <Clock size={11} /> {lab.duration}
                      </div>
                      <h3 className="text-foreground font-bold text-base mb-1.5">{lab.title}</h3>
                      <p className="text-muted-foreground text-[13px] mb-3 line-clamp-2">{lab.subtitle}</p>

                      <div className="flex flex-wrap gap-1.5 mt-auto mb-4">
                        {lab.tags.slice(0, 3).map(tag => (
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
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
