import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";

// pages
import Home from "../ui/pages/home/Home";
import InventoryPage from "../ui/pages/inventry/Inventorypage";
import AboutPage from "../ui/pages/about/Aboutpage";
import ContactPage from "../ui/pages/contact/Contactpage";

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
      </Routes>
    </>
  );
};

export default Index;

// import { Route, Routes } from "react-router-dom";

// // pages
// import Home from "../ui/pages/home/Home";
// import InventoryPage from "../ui/pages/inventry/Inventorypage";
// import AboutPage from "../ui/pages/about/Aboutpage";
// import ContactPage from "../ui/pages/contact/Contactpage";

// const Index = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/inventory" element={<InventoryPage />} />
//       <Route path="/about" element={<AboutPage />} />
//       <Route path="/contact" element={<ContactPage />} />
//     </Routes>
//   );
// };

// export default Index;
