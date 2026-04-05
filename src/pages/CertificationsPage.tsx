import { useState } from 'react';
import { motion } from 'motion/react';
import { Award, CheckCircle2, Clock, Star, Filter } from 'lucide-react';
import { CERTIFICATIONS, CERT_FILTERS } from '@/data/certifications';

export function CertificationsPage() {
  const [filter, setFilter] = useState('Todas');

  const filtered = filter === 'Todas'
    ? CERTIFICATIONS
    : CERTIFICATIONS.filter(c => c.category === filter);

  const obtained = CERTIFICATIONS.filter(c => c.status === 'Obtida').length;
  const inProgress = CERTIFICATIONS.filter(c => c.status === 'Em andamento').length;
  const interest = CERTIFICATIONS.filter(c => c.status === 'Interesse').length;

  return (
    <div className="bg-background min-h-screen pb-20">
      {/* Header */}
      <div className="border-b border-border pt-16 pb-12 px-6" style={{
        background: 'linear-gradient(180deg, hsl(348 70% 45% / 0.06) 0%, transparent 100%)',
      }}>
        <div className="max-w-[1200px] mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-primary text-xs tracking-[2.5px] uppercase font-semibold mb-2">
              Conquistas & Validações
            </p>

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div>
                <h1 className="text-[clamp(2rem,4vw,3rem)] font-bold text-foreground tracking-tight mb-3">
                  Certificações
                </h1>
                <p className="text-muted-foreground text-[15px] max-w-[540px]">
                  Certificações obtidas em segurança da informação, infraestrutura e gestão de serviços de TI.
                </p>
              </div>

              {/* Stats pills */}
              <div className="flex gap-3 flex-wrap lg:flex-nowrap">
                <div className="flex items-center gap-2 bg-green-500/10 border border-green-500/25 rounded-lg px-3.5 py-2">
                  <CheckCircle2 size={14} className="text-green-400" />
                  <span className="text-green-400 text-[13px] font-semibold">{obtained} obtidas</span>
                </div>
                {inProgress > 0 && (
                  <div className="flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/25 rounded-lg px-3.5 py-2">
                    <Clock size={14} className="text-yellow-400" />
                    <span className="text-yellow-400 text-[13px] font-semibold">{inProgress} em andamento</span>
                  </div>
                )}
                {interest > 0 && (
                  <div className="flex items-center gap-2 bg-blue-500/10 border border-blue-500/25 rounded-lg px-3.5 py-2">
                    <Star size={14} className="text-blue-400" />
                    <span className="text-blue-400 text-[13px] font-semibold">{interest} em interesse</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 pt-12">
        {/* Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-10 items-center"
        >
          <Filter size={13} className="text-muted-foreground" />
          {CERT_FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer border-none ${
                filter === f
                  ? 'bg-hero-gradient text-primary-foreground glow-primary'
                  : 'bg-secondary/50 text-muted-foreground border border-border hover:border-primary/30'
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filtered.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              layout
            >
              <div className={`glass-card rounded-2xl p-5 h-full ${
                cert.status === 'Em andamento' ? 'border-yellow-500/20' : cert.status === 'Interesse' ? 'border-blue-500/20' : ''
              }`}>
                {/* Top: Badge + Info side by side */}
                <div className="flex items-start gap-4 mb-4">
                  {/* Badge image */}
                  <div className="w-16 h-16 rounded-xl bg-primary/5 border border-primary/15 flex items-center justify-center flex-shrink-0 overflow-hidden">
                    {cert.badgeImage ? (
                      <img src={cert.badgeImage} alt={cert.name} className="w-full h-full object-contain p-1" />
                    ) : (
                      <Award size={24} className="text-primary/40" />
                    )}
                  </div>

                  {/* Name + Issuer + Year */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-foreground font-bold text-[15px] leading-tight mb-1">{cert.name}</h3>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-muted-foreground/60 text-xs">{cert.issuer}</span>
                      <span className="text-muted-foreground/30 text-xs">·</span>
                      <span className="text-muted-foreground/50 text-[11px]">{cert.year}</span>
                    </div>
                    {/* Status badge */}
                    <div className="mt-2">
                      {cert.status === 'Obtida' ? (
                        <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold px-2.5 py-1 rounded-full bg-green-500/10 border border-green-500/25 text-green-400">
                          <CheckCircle2 size={10} /> Obtida
                        </span>
                      ) : cert.status === 'Em andamento' ? (
                        <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold px-2.5 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/25 text-yellow-400">
                          <Clock size={10} /> Em andamento
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400">
                          <Star size={10} /> Interesse
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-[13px] leading-6">
                  {cert.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
