import React from "react";
import Timeline from "./Custom/Timeline";
import { Education as EducationTitle } from "../data/title";

import { workAndEducation } from "../data/Education";

function Education() {
  return (
    <div className="md:w-10/12 w-11/12 mx-auto text-white py-10" id="education">
      <div className="font-bold text-xl text-[#37BCF8] pb-6">{EducationTitle}</div>
      <div className="w-full py-6">
        {workAndEducation.map((element, index) => {
          const leftSide = index % 2 === 0;
          const first = index === 0;
          const last = index === workAndEducation.length - 1;

          return (
            <Timeline
              key={element.year}
              year={element.year}
              organization={element.organization}
              position={element.position}
              
              first={first}
              last={last}
              leftSide={leftSide}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Education;
