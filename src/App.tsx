import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useLenis } from "./hooks/useLenis";
import { ScrollProgress } from "./components/motion/ScrollProgress";
import { ScrollToTop } from "./components/motion/ScrollToTop";
import { CustomCursor } from "./components/motion/CustomCursor";
import { Navbar } from "./components/navigation/Navbar";
import { Footer } from "./components/sections/Footer";
import { ScrollToTopOnRoute } from "./components/navigation/ScrollToTopOnRoute";

// Dedicated Pages
import { HomePage } from "./pages/HomePage";
import { SiliconToSystemPage } from "./pages/SiliconToSystemPage";
import { JourneyPage } from "./pages/JourneyPage";
import { ExpertisePage } from "./pages/ExpertisePage";
import { PackagingPage } from "./pages/PackagingPage";
import { EcosystemPage } from "./pages/EcosystemPage";
import { InsightsPage } from "./pages/InsightsPage";
import { SpeakingPage } from "./pages/SpeakingPage";
import { ContactPage } from "./pages/ContactPage";

function AppContent() {
  const location = useLocation();

  // Initialize Lenis smooth scroll synchronized with GSAP ScrollTrigger
  useLenis(true);

  return (
    <div className="relative min-h-screen bg-[#07090D] text-[#FAFAF8] overflow-x-hidden selection:bg-[#6FA8FF]/30 selection:text-white flex flex-col justify-between">
      {/* Automatically reset window scroll position when changing routes */}
      <ScrollToTopOnRoute />

      {/* Global Scroll Progress Bar */}
      <ScrollProgress />

      {/* Top autoscroll button placed at bottom-right side on every page (only symbol) */}
      <ScrollToTop />

      {/* Interactive Custom Cursor (Desktop Only) */}
      <CustomCursor />

      {/* Persistent 3-Zone Navbar */}
      <Navbar />

      {/* Routed Page Content with subtle fade-in transition */}
      <main id="main-content" className="flex-1 flex flex-col">
        <div key={location.pathname} className="animate-page-fade-in flex-1 flex flex-col">
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/silicon-to-system" element={<SiliconToSystemPage />} />
            <Route path="/journey" element={<JourneyPage />} />
            <Route path="/expertise" element={<ExpertisePage />} />
            <Route path="/packaging" element={<PackagingPage />} />
            <Route path="/ecosystem" element={<EcosystemPage />} />
            <Route path="/insights" element={<InsightsPage />} />
            <Route path="/speaking" element={<SpeakingPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </main>

      {/* Cinematic Footer on Every Page */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
