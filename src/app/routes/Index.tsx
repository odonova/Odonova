import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";

// pages
import Home from "../ui/pages/home/Home";
import InventoryPage from "../ui/pages/inventry/Inventorypage";
import AboutPage from "../ui/pages/about/Aboutpage";
import ContactPage from "../ui/pages/contact/Contactpage";
import SoftwareDevelopment from "../ui/pages/softwaredevelopment/SoftwareDevelopment";
import DataAnnotation from "../ui/pages/dataannotation/DataAnnotation";
import SocialMaediaManagement from "../ui/pages/socialmedia/SocialMaediaManagement";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

// ─── Routes

const Index = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventory" element={<InventoryPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route
          path="/social-media-management"
          element={<SocialMaediaManagement />}
        />
        <Route path="/data-annotation" element={<DataAnnotation />} />
        <Route path="/software-development" element={<SoftwareDevelopment />} />
      </Routes>
    </>
  );
};

export default Index;
