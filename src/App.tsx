
import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Projects from "./pages/Projects";
import ProductPage from "./pages/ProductPage";
import JoinUs from "./pages/JoinUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import NotFound from "./pages/NotFound";
import { Toaster as ShadcnToaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import CustomCursor from "./components/CustomCursor";
import useIsTouchDevice from "./hooks/useIsTouchDevice";
import { NavbarProvider } from "@/contexts/NavbarContext";

function App() {
  const isTouchDevice = useIsTouchDevice();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Wrap the entire app with NavbarProvider to make context available everywhere */}
      <NavbarProvider>
        {/* Only show custom cursor on non-touch devices */}
        {!isTouchDevice && <CustomCursor />}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProductPage />} />
          <Route path="/join-us" element={<JoinUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ShadcnToaster />
        <SonnerToaster position="top-center" />
      </NavbarProvider>
    </div>
  );
}

export default App;
