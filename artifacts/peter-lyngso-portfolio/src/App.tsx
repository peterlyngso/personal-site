import { type ReactNode, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';

import Home from '@/pages/Home';
import WorkCategory from '@/pages/WorkCategory';
import ProjectSlug from '@/pages/ProjectSlug';
import About from '@/pages/About';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

const queryClient = new QueryClient();

// Scroll to top on route change
function ScrollToTop() {
  const [pathname] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Router() {
  return (
    <RoutedErrorBoundary>
      <div className="flex flex-col min-h-screen bg-[#111110] text-[#EAE6DF] font-sans selection:bg-[#EAE6DF]/20 selection:text-[#EAE6DF]">
        <Navigation />
        <main className="flex-grow">
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/work/:category" component={WorkCategory} />
            <Route path="/project/:slug" component={ProjectSlug} />
            <Route path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </div>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <ScrollToTop />
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
