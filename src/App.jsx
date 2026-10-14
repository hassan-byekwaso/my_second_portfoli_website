import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import SiteLayout from "./components/SiteLayout.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import PortfolioPage from "./pages/PortfolioPage.jsx";
import ResumePage from "./pages/ResumePage.jsx";
import ServicesPage from "./pages/ServicesPage.jsx";

const pageTitles = {
  "/": "Home",
  "/about": "About",
  "/resume": "Resume",
  "/services": "Services",
  "/portfolio": "Portfolio",
  "/contact": "Contact",
};

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = `${pageTitles[pathname] ?? "Home"} | Hassan Byekwaso Onyango`;
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return (
    <SiteLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </SiteLayout>
  );
}
