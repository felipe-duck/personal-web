import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Route, Routes } from "react-router-dom";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/Layout";
import { HomePage } from "@/pages/HomePage";
import { LabsPage } from "@/pages/LabsPage";
import { LabDetailPage } from "@/pages/LabDetailPage";
import { ProjectsPage } from "@/pages/ProjectsPage";
import { ProjectDetailPage } from "@/pages/ProjectDetailPage";
import { CertificationsPage } from "@/pages/CertificationsPage";
import NotFound from "./pages/NotFound";

// QueryClient para gerenciamento de estado assíncrono
const queryClient = new QueryClient();

/**
 * App principal — usa HashRouter para compatibilidade com GitHub Pages.
 * O HashRouter coloca rotas após o "#" na URL, evitando 404 no refresh.
 */
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      {/* HashRouter é necessário para GitHub Pages (não suporta SPA fallback) */}
      <HashRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/laboratorios" element={<LabsPage />} />
            <Route path="/laboratorios/:id" element={<LabDetailPage />} />
            <Route path="/projetos" element={<ProjectsPage />} />
            <Route path="/projetos/:id" element={<ProjectDetailPage />} />
            <Route path="/certificacoes" element={<CertificationsPage />} />
          </Route>
          {/* Rota catch-all para páginas não encontradas */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
