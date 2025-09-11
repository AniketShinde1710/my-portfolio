/*
=================================================================
PORTFOLIO WEBSITE - SETUP INSTRUCTIONS
=================================================================

This is a professional portfolio website built with React (Vite) and Tailwind CSS.

SETUP INSTRUCTIONS:
1. Prerequisites:
   - Node.js (18+ recommended)
   - npm or yarn package manager

2. Installation & Setup:
   ```bash
   # Clone or download this project
   npm install

   # Start development server
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

4. Customization:
   - Edit `/src/data/portfolio.ts` to update personal information
   - Replace avatar image at `/src/assets/professional-avatar.jpg`
   - Add your resume PDF to `/public/resume.pdf`
   - Update project images and links in the portfolio data

5. Deployment:
   - Deploy the `dist` folder to any static hosting service
   - Supports Vercel, Netlify, GitHub Pages, and more

FEATURES:
- Fully responsive design (mobile-first)
- Dark/light mode toggle
- Smooth scrolling navigation
- Contact form with mailto integration
- SEO optimized with semantic HTML
- Accessible (WCAG 2.1 compliant)
- Modern design with animations
- Easy customization through data files

TECH STACK:
- React 18 with TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- Shadcn/ui for components
- Lucide React for icons

=================================================================
*/

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
