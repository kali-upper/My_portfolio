import React, { Suspense, lazy } from "react";
import { BrowserRouter } from "react-router-dom";

// Only import essential components directly
import { Navbar, Hero } from "./components";
import "./index.css"; // Ensure styles are loaded

// Lazy load other components
const About = lazy(() => import("./components/About"));
const Experience = lazy(() => import("./components/Experience"));
const Tech = lazy(() => import("./components/Tech"));
const Works = lazy(() => import("./components/Works"));
const Feedbacks = lazy(() => import("./components/Feedbacks"));
const Contact = lazy(() => import("./components/Contact"));
const StarsCanvas = lazy(() => import("./components/canvas/Stars"));

// Simple loading component
const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-[50vh]">
    <div className="spinner w-12 h-12 border-4 border-t-[#2AD083] rounded-full animate-spin"></div>
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-gradient-radial'>
        <div className='bg-gradient-primary'>
          <Navbar />
          <Hero />
        </div>
        
        <Suspense fallback={<LoadingSpinner />}>
          <About />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <Experience />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <Tech />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <Works />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <Feedbacks />
        </Suspense>
        
        <div className='relative z-0'>
          <Suspense fallback={<LoadingSpinner />}>
            <Contact />
          </Suspense>
          
          <Suspense fallback={<div className="h-[400px]"></div>}>
            <StarsCanvas />
          </Suspense>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
