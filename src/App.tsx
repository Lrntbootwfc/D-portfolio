import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import AtmosphericBackground from '@/components/ui/AtmosphericBackground';
import { ThemeProvider } from '@/context/ThemeContext';
import Home from '@/pages/Home';
import ProjectDetail from '@/pages/ProjectDetail';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <AtmosphericBackground />
        <div className="relative flex min-h-screen flex-col bg-transparent text-ink-900 font-sans selection:bg-accent-400 selection:text-white pb-16 md:pb-0">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/work/:slug" element={<ProjectDetail />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

