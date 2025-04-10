import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <section className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
          <p className="text-center text-secondary mt-2">{technology.name}</p>
        </div>
      ))}
    </section>
  );
};

// Change the export to make it work with lazy loading
const WrappedTech = SectionWrapper(Tech, "");
export default WrappedTech;
