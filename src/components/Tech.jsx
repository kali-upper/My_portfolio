import React, { useState, useEffect } from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const [visibleTechs, setVisibleTechs] = useState([]);
  
  useEffect(() => {
    // Only render a subset of technologies to avoid WebGL context limits
    // Most browsers limit WebGL contexts to around 16
    const maxVisibleTechs = 8;
    setVisibleTechs(technologies.slice(0, maxVisibleTechs));
    
    // Optional: Implement rotation of displayed technologies
    const rotateInterval = setInterval(() => {
      setVisibleTechs(prev => {
        const firstTech = technologies[0];
        const remainingTechs = technologies.slice(1);
        return [...remainingTechs, firstTech].slice(0, maxVisibleTechs);
      });
    }, 5000); // Rotate every 5 seconds
    
    return () => clearInterval(rotateInterval);
  }, []);

  return (
    <section className='flex flex-row flex-wrap justify-center gap-10'>
      {visibleTechs.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </section>
  );
};

// Change the export to make it work with lazy loading
const WrappedTech = SectionWrapper(Tech, "");
export default WrappedTech;
