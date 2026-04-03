import React from "react";
import Footer from "./components/footer/Footer";
import Index from "../routes/Index";

const AppEntry: React.FC = () => {
  const hideFooter =
    location.pathname.startsWith("/auth/dashboard") ||
    location.pathname.startsWith("/auth/organization/dashboard");

  return (
    <div>
      <Index />
      {!hideFooter && <Footer />}
    </div>
  );
};

export default AppEntry;
