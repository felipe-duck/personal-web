import { useState, useEffect } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const NAV_LINKS = [
  { to: '/', label: 'Início' },
  { to: '/laboratorios', label: 'Laboratórios' },
  { to: '/projetos', label: 'Projetos' },
  { to: '/certificacoes', label: 'Certificações' },
];

export function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0 });
  }, [location.pathname]);

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <div className="bg-background min-h-screen text-foreground font-sans">
      {/* Navbar */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? 'hsl(240 20% 4% / 0.96)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid hsl(348 70% 45% / 0.25)' : '1px solid transparent',
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex justify-center items-center h-[66px]">
            {/* Desktop Nav - centered */}
            <nav className="hidden md:flex gap-8 items-center">
              {NAV_LINKS.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm transition-colors duration-200 no-underline"
                  style={{
                    fontWeight: isActive(link.to) ? 600 : 400,
                    color: isActive(link.to) ? 'hsl(348 60% 55%)' : 'hsl(240 10% 55%)',
                    paddingBottom: '2px',
                    borderBottom: isActive(link.to) ? '1.5px solid hsl(348 70% 45%)' : '1.5px solid transparent',
                  }}
                  onMouseEnter={e => { if (!isActive(link.to)) e.currentTarget.style.color = 'hsl(240 10% 78%)'; }}
                  onMouseLeave={e => { if (!isActive(link.to)) e.currentTarget.style.color = 'hsl(240 10% 55%)'; }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile hamburger - absolute right */}
            <button
              onClick={() => setMenuOpen(o => !o)}
              className="flex md:hidden absolute right-6 bg-transparent border-none cursor-pointer text-foreground p-1"
              aria-label="Menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22, ease: 'easeInOut' }}
              className="bg-background/98 overflow-hidden"
              style={{ borderTop: '1px solid hsl(348 70% 45% / 0.2)' }}
            >
              <div className="p-5 flex flex-col gap-4">
                {NAV_LINKS.map(link => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="no-underline text-[15px]"
                    style={{
                      color: isActive(link.to) ? 'hsl(348 60% 55%)' : 'hsl(240 10% 60%)',
                      fontWeight: isActive(link.to) ? 600 : 400,
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="border-t border-border pt-4 flex gap-4">
                  <a href="https://www.linkedin.com/in/pontes-090" target="_blank" rel="noreferrer"
                    className="text-muted-foreground flex items-center gap-1.5 text-[13px] no-underline">
                    <Linkedin size={14} /> LinkedIn
                  </a>
                  <a href="mailto:felipepontes909@gmail.com"
                    className="text-muted-foreground flex items-center gap-1.5 text-[13px] no-underline">
                    <Mail size={14} /> E-mail
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Page content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-primary/10 py-10 px-6 bg-background">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-4">
          <div className="flex gap-6 flex-wrap justify-center">
            {[
              { icon: Phone, text: '(61) 9843-7570' },
              { icon: Mail, text: 'felipepontes909@gmail.com' },
              { icon: MapPin, text: 'Brasília – DF' },
            ].map(({ icon: Icon, text }) => (
              <span key={text} className="flex items-center gap-1.5 text-muted-foreground text-[13px]">
                <Icon size={13} /> {text}
              </span>
            ))}
          </div>
          <p className="text-muted-foreground/50 text-xs">
            © 2026 Felipe Pontes Lima · Todos os direitos reservados
          </p>
        </div>
      </footer>
    </div>
  );
}
