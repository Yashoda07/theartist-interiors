import { lazy, Suspense, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";

// Lazy-load secondary pages for snappier first paint AND quicker
// navigation back to the main page.
const PortfolioPage = lazy(() => import("./pages/PortfolioPage.tsx"));
const ContactPage = lazy(() => import("./pages/ContactPage.tsx"));
const ChatPage = lazy(() => import("./pages/ChatPage.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

const queryClient = new QueryClient();

const PageFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-10 h-10 border-2 border-accent border-t-transparent rounded-full animate-spin" />
  </div>
);

const Prefetcher = () => {
  // Warm up secondary route bundles on idle so back-navigation is instant.
  useEffect(() => {
    const idle = (cb: () => void) =>
      "requestIdleCallback" in window
        ? (window as any).requestIdleCallback(cb, { timeout: 2000 })
        : setTimeout(cb, 1500);
    idle(() => {
      import("./pages/PortfolioPage.tsx");
      import("./pages/ContactPage.tsx");
      import("./pages/ChatPage.tsx");
    });
  }, []);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Prefetcher />
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/chat" element={<ChatPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
