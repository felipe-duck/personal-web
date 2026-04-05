import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import {
  Shield, Award, ArrowRight,
  Phone, Mail, Linkedin, MapPin, ChevronDown,
  Briefcase, GraduationCap, Globe, Wrench,
  Monitor, ChevronRight,
} from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';
import { CERTIFICATIONS } from '@/data/certifications';

/* ── Constantes ── */

const YEAR_STARTED = 2020;
const yearsExp = new Date().getFullYear() - YEAR_STARTED;
const certCount = CERTIFICATIONS.length;

// Stats — sem "+" nos anos de experiência
const STATS = [
  { value: `${certCount}`, label: 'Certificações', icon: Award },
  { value: `${yearsExp}`, label: 'Anos de Experiência', icon: Briefcase },
  { value: 'NOC/SOC', label: 'Monitoramento', icon: Monitor },
];

// Experiências com descrição curta + descrição expandida completa
const EXPERIENCES = [
  {
    role: 'Estagiário de Infraestrutura e Redes (NOC)',
    company: 'Camon Telecom',
    period: 'Ago/2025 – Atualmente',
    /* Resumo curto exibido por padrão */
    summary: 'Monitoramento e suporte à rede FTTH (GPON/SFP) com Zabbix, Grafana e The Dude. Suporte técnico N1/N2 a clientes corporativos.',
    /* Descrição completa exibida ao expandir */
    full: 'Atuação em ambiente de telecom, com foco no monitoramento e suporte à rede FTTH (GPON/SFP), garantindo disponibilidade, segurança e desempenho. Experiência com Zabbix, Grafana e The Dude, realizando análise de eventos, incidentes, performance, verificação de firewalls. Suporte técnico N1/N2 a clientes corporativos, com diagnóstico e resolução de falhas e execução de configurações de rede. Vivência com equipamentos MikroTik, Huawei, TP-Link e Fortinet (FortiGate). Atuação em rotinas de backup, atualização de firmware e estabilidade dos ativos, além de participação em viabilidade técnica, visitas em campo e tratativa de falhas massivas (backbone/rompimentos), com acionamento de equipes. Apoio na administração do monitoramento, incluindo gestão de hosts via SNMPv2 no Zabbix.',
  },
  {
    role: 'Suporte Técnico',
    company: 'Atividade Autônoma',
    period: 'Jul/2023 – Jul/2025',
    summary: 'Manutenção de computadores e notebooks, configuração de redes, ajustes de roteadores e implementação de regras de firewall.',
    full: 'Atuação como suporte técnico autônomo, realizando manutenção de computadores e notebooks, formatação e recuperação de sistemas operacionais, instalação e configuração de softwares e periféricos. Experiência com configuração de redes, ajustes de roteadores, implementação de regras básicas de firewall e segurança. Atuação também com diagnóstico e resolução de falhas, além de manutenção e configuração de servidores de pequeno a médio porte.',
  },
  {
    role: 'Assistente Técnico (Temporário)',
    company: 'ENNET',
    period: 'Jul/2021 – Ago/2021',
    summary: 'Suporte técnico com foco em manutenção de computadores, instalação de sistemas operacionais e suporte a redes.',
    full: 'Atuação como suporte técnico temporário, prestando atendimento a usuários e equipes, com foco em manutenção de computadores, instalação e configuração de sistemas operacionais, suporte a redes e configuração de segurança básica. Responsável pelo diagnóstico e resolução de problemas, configuração de rede e firewall, além de suporte e manutenção em servidores de pequeno a médio porte.',
  },
];

const EDUCATION = [
  {
    title: 'Tecnólogo em Segurança da Informação',
    institution: 'Faculdade Senac DF',
    period: 'Fev/2025 – Dez/2026 (Em andamento)',
  },
  {
    title: 'Técnico em Inglês Avançado',
    institution: 'Centro Interescolar de Línguas (CIL)',
    period: '2018 – 2023',
  },
];

// Idiomas — adicionado Espanhol Intermediário
const LANGUAGES = [
  { name: 'Português', level: 'Nativo', percent: 100 },
  { name: 'Inglês', level: 'Avançado', percent: 85 },
  { name: 'Espanhol', level: 'Intermediário', percent: 55 },
];

// Habilidades (unificado: técnicas + soft skills, sem "Técnicas" no título)
// Removidos: "Comunicação técnica", "Trabalho em equipe", "Pensamento analítico"
const SKILLS = [
  'Troubleshooting de redes e sistemas',
  'Diagnóstico e análise de incidentes',
  'Monitoramento e resposta a eventos',
  'Gestão e priorização de incidentes',
  'Administração de sistemas Linux',
  'Implementação e análise de segurança em redes',
  'Comunicação técnica',
  'Trabalho em equipe',
  'Pensamento analítico',
];

// Competências (antigo "Ferramentas & Tecnologias" renomeado)
const COMPETENCIAS = [
  'Zabbix · Grafana · The Dude',
  'FortiGate · FortiAnalyzer · Check Point',
  'Winbox (MikroTik) · SmartOLT',
  'ServiceNow · Hubsoft',
  'Proxmox · VMware · Docker · Podman',
  'AWS CloudWatch · Azure Monitor',
  'Bash Scripting · SSH · PuTTY',
];

// Ferramentas & Tecnologias — novo bloco separado abaixo
const FERRAMENTAS = [
  'Zabbix · Grafana · The Dude',
  'FortiGate · FortiAnalyzer · Check Point',
  'Winbox (MikroTik) · SmartOLT',
  'ServiceNow · Hubsoft',
  'Proxmox · VMware · Docker · Podman',
  'AWS CloudWatch · Azure Monitor',
  'Bash Scripting · SSH · PuTTY',
];

/* ── Animação ── */

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const },
});

/* ── Componente de card de experiência com botão expandir ── */

function ExperienceCard({ exp, index }: { exp: typeof EXPERIENCES[number]; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="flex gap-5"
    >
      {/* Timeline dot */}
      <div className="hidden md:flex flex-col items-center pt-1.5">
        <div className="w-[15px] h-[15px] rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center z-10">
          <div className="w-[5px] h-[5px] rounded-full bg-primary" />
        </div>
      </div>

      <div className="glass-card rounded-2xl p-6 flex-1">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
          <h3 className="text-foreground font-bold text-[15px]">{exp.role}</h3>
          <span className="text-muted-foreground/50 text-[11px] font-medium">{exp.period}</span>
        </div>
        <p className="text-primary/70 text-xs font-semibold mb-3">{exp.company}</p>

        {/* Descrição com animação de expansão */}
        <AnimatePresence initial={false}>
          {expanded ? (
            <motion.p
              key="full"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="text-muted-foreground text-[13px] leading-6 overflow-hidden"
            >
              {exp.full}
            </motion.p>
          ) : (
            <motion.p
              key="summary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-muted-foreground text-[13px] leading-6"
            >
              {exp.summary}
            </motion.p>
          )}
        </AnimatePresence>

        {/* Botão para expandir/recolher a descrição */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-3 flex items-center gap-1 text-primary text-xs font-medium bg-transparent border-none cursor-pointer hover:underline transition-colors"
        >
          {expanded ? 'Ver menos' : 'Ver mais'}
          <ChevronRight
            size={12}
            className="transition-transform"
            style={{ transform: expanded ? 'rotate(90deg)' : 'rotate(0deg)' }}
          />
        </button>
      </div>
    </motion.div>
  );
}

/* ── Página principal ── */

export function HomePage() {
  return (
    <div>
      {/* ── HERO ── */}
      <section className="min-h-screen relative flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroBg})`,
            filter: 'brightness(0.2) saturate(0.5)',
          }}
        />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(135deg, hsl(240 20% 4% / 0.92) 0%, hsl(348 80% 20% / 0.2) 60%, hsl(240 20% 4% / 0.95) 100%)',
        }} />
        <div className="absolute inset-0 grid-pattern" />

        <div className="relative max-w-[1200px] mx-auto px-6 pt-24 pb-16 w-full">
          <div className="max-w-[700px]">
            <motion.div {...fadeUp(0.1)}>
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-3.5 py-1.5 mb-6">
                <span className="w-[7px] h-[7px] rounded-full bg-primary glow-primary inline-block" />
                <span className="text-xs text-primary font-medium tracking-wide">
                  Disponível para oportunidades
                </span>
              </div>
            </motion.div>

            <motion.p {...fadeUp(0.18)} className="text-muted-foreground text-[15px] mb-2">
              Olá, eu sou
            </motion.p>

            <motion.h1 {...fadeUp(0.24)} className="text-[clamp(2.8rem,6vw,4.8rem)] font-bold leading-[1.08] mb-2 text-foreground tracking-tight">
              Felipe{' '}
              <span className="text-gradient-primary">Pontes</span>
              {' '}Lima
            </motion.h1>

            <motion.h2 {...fadeUp(0.3)} className="text-[clamp(1rem,2.5vw,1.25rem)] font-normal text-muted-foreground mb-6 tracking-tight">
              Profissional de{' '}
              <span className="text-primary font-medium">Segurança da Informação</span>
              {' '}&{' '}
              <span className="text-primary font-medium">Infraestrutura de Redes</span>
            </motion.h2>

            <motion.p {...fadeUp(0.36)} className="text-muted-foreground text-[15px] leading-7 max-w-[560px] mb-10">
              Estudante de Tecnologia em Segurança da Informação (Senac DF) com experiência
              prática em NOC, monitoramento de redes FTTH, suporte técnico N1/N2 e administração
              de infraestrutura. Apaixonado por segurança, automação e resolução de problemas complexos.
            </motion.p>

            <motion.div {...fadeUp(0.42)} className="flex gap-3 flex-wrap">
              <Link to="/laboratorios" className="no-underline">
                <button className="px-6 py-3 rounded-[10px] border-none cursor-pointer bg-hero-gradient text-primary-foreground font-semibold text-sm flex items-center gap-2 glow-primary transition-transform hover:translate-y-[-2px]">
                  Ver Laboratórios <ArrowRight size={15} />
                </button>
              </Link>
              <Link to="/projetos" className="no-underline">
                <button className="px-6 py-3 rounded-[10px] cursor-pointer bg-transparent border border-primary/40 text-primary font-medium text-sm flex items-center gap-2 transition-all hover:bg-primary/10 hover:border-primary/70 hover:translate-y-[-2px]">
                  Ver Projetos <ArrowRight size={15} />
                </button>
              </Link>
            </motion.div>

            <motion.div {...fadeUp(0.5)} className="flex gap-6 mt-10 flex-wrap">
              {[
                { icon: Phone, label: '(61) 9843-7570', href: 'tel:+5561984370' },
                { icon: Mail, label: 'felipepontes909@gmail.com', href: 'mailto:felipepontes909@gmail.com' },
                { icon: Linkedin, label: 'linkedin/pontes-090', href: 'https://www.linkedin.com/in/pontes-090' },
                { icon: MapPin, label: 'Brasília – DF', href: undefined },
              ].map(({ icon: Icon, label, href }) => {
                const content = (
                  <span className="flex items-center gap-1.5 text-muted-foreground/70 text-xs">
                    <Icon size={12} /> {label}
                  </span>
                );
                return href ? (
                  <a key={label} href={href} target="_blank" rel="noreferrer" className="no-underline hover:text-muted-foreground transition-colors">
                    {content}
                  </a>
                ) : (
                  <span key={label}>{content}</span>
                );
              })}
            </motion.div>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground/40 flex flex-col items-center gap-1"
        >
          <span className="text-[10px] tracking-[2px] uppercase">scroll</span>
          <ChevronDown size={14} />
        </motion.div>
      </section>

      {/* ── STATS ── */}
      <section className="py-20 px-6 border-t border-border">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {STATS.map(({ value, label, icon: Icon }) => (
              <div key={label} className="glass-card rounded-xl p-6 text-center">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-3">
                  <Icon size={18} className="text-primary" />
                </div>
                <p className="text-2xl font-bold text-foreground mb-1">{value}</p>
                <p className="text-muted-foreground text-xs">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── EXPERIÊNCIA PROFISSIONAL ── */}
      <section className="py-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Briefcase size={16} className="text-primary" />
              <p className="text-primary text-xs tracking-[2.5px] uppercase font-semibold">Trajetória</p>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-10">
              Experiência Profissional
            </h2>
          </motion.div>

          <div className="relative">
            {/* Linha da timeline */}
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-primary/20 hidden md:block" />

            <div className="space-y-8">
              {EXPERIENCES.map((exp, i) => (
                <ExperienceCard key={i} exp={exp} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FORMAÇÃO ACADÊMICA ── */}
      <section className="py-20 px-6 border-t border-border">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap size={16} className="text-primary" />
              <p className="text-primary text-xs tracking-[2.5px] uppercase font-semibold">Formação</p>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-10">
              Formação Acadêmica
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {EDUCATION.map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="glass-card rounded-2xl p-6 h-full">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                    <GraduationCap size={18} className="text-primary" />
                  </div>
                  <h3 className="text-foreground font-bold text-[15px] mb-1">{edu.title}</h3>
                  <p className="text-primary/70 text-xs font-semibold mb-1">{edu.institution}</p>
                  <p className="text-muted-foreground/50 text-[11px]">{edu.period}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── IDIOMAS ── */}
      <section className="py-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Globe size={16} className="text-primary" />
              <p className="text-primary text-xs tracking-[2.5px] uppercase font-semibold">Comunicação</p>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-10">
              Idiomas
            </h2>
          </motion.div>

          {/* Grid com 3 idiomas agora */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-[900px]">
            {LANGUAGES.map((lang, i) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="glass-card rounded-2xl p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-foreground font-bold text-[15px]">{lang.name}</h3>
                    <span className="text-primary text-xs font-semibold">{lang.level}</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-hero-gradient"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HABILIDADES (unificado) ── */}
      <section className="py-20 px-6 border-t border-border">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Shield size={16} className="text-primary" />
              <p className="text-primary text-xs tracking-[2.5px] uppercase font-semibold">Competências</p>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-10">
              Habilidades
            </h2>
          </motion.div>

          {/* Card único de Habilidades */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-foreground font-bold text-[15px] mb-4 flex items-center gap-2">
                <Shield size={14} className="text-primary" />
                Habilidades
              </h3>
              <div className="space-y-2.5">
                {SKILLS.map(item => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                    <span className="text-muted-foreground text-[13px]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card de Competências (antigo "Ferramentas & Tecnologias") */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mb-8"
          >
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-foreground font-bold text-[15px] mb-4 flex items-center gap-2">
                <Wrench size={14} className="text-primary" />
                Competências
              </h3>
              <div className="space-y-2.5">
                {COMPETENCIAS.map(item => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                    <span className="text-muted-foreground text-[13px]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card de Ferramentas & Tecnologias (novo bloco separado) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-foreground font-bold text-[15px] mb-4 flex items-center gap-2">
                <Monitor size={14} className="text-primary" />
                Ferramentas & Tecnologias
              </h3>
              <div className="space-y-2.5">
                {FERRAMENTAS.map(item => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                    <span className="text-muted-foreground text-[13px]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 px-6 border-t border-border">
        <div className="max-w-[800px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-4">
              Explore meus trabalhos
            </h2>
            <p className="text-muted-foreground text-[15px] mb-8 max-w-[500px] mx-auto">
              Confira meus laboratórios práticos, projetos e certificações na área de segurança e infraestrutura.
            </p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Link to="/laboratorios">
                <button className="px-6 py-3 rounded-[10px] bg-hero-gradient text-primary-foreground font-semibold text-sm glow-primary transition-transform hover:translate-y-[-2px] border-none cursor-pointer">
                  Laboratórios
                </button>
              </Link>
              <Link to="/projetos">
                <button className="px-6 py-3 rounded-[10px] bg-card border border-border text-foreground font-medium text-sm transition-all hover:border-primary/40 cursor-pointer">
                  Projetos
                </button>
              </Link>
              <Link to="/certificacoes">
                <button className="px-6 py-3 rounded-[10px] bg-card border border-border text-foreground font-medium text-sm transition-all hover:border-primary/40 cursor-pointer">
                  Certificações
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
