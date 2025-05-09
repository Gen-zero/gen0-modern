
import React, { lazy, Suspense } from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import { Toaster as ShadcnToaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import CustomCursor from "./components/CustomCursor";
import useIsTouchDevice from "./hooks/useIsTouchDevice";
import { NavbarProvider } from "@/contexts/NavbarContext";
import LoadingSpinner from "./components/LoadingSpinner";

// Lazy load pages to reduce initial bundle size
const Index = lazy(() => import("./pages/Index"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Projects = lazy(() => import("./pages/Projects"));
const ProductPage = lazy(() => import("./pages/ProductPage"));
const JoinUs = lazy(() => import("./pages/JoinUs"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));

function App() {
  const isTouchDevice = useIsTouchDevice();

  return (
    <div className="min-h-screen flex flex-col">
      <NavbarProvider>
        {!isTouchDevice && <CustomCursor />}
        <Suspense fallback={
          <LoadingSpinner 
            lines={7} 
            noscriptContent={
              <p className="text-center py-8">Loading the application...</p>
            }
          />
        }>
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
        </Suspense>
        <ShadcnToaster />
        <SonnerToaster position="top-center" />
      </NavbarProvider>
    </div>
  );
}

export default App;
