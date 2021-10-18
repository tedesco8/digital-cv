import React from "react";
import H2Styled from "../styled/H2Styled";
import H3Styled from "../styled/H3Styled";
import PStyled from "../styled/PStyled";

const Experience = (props) => (
  <div className="Experience">
    <H2Styled name="Experiencia" />
    <div className="Experience-container">
      {Object.values(props.data).map((exp, index) => (
        <div className="Experience-item" key={`Exp-${index}`}>
          <H3Styled>
            <b>{exp.jobTitle}</b> {exp.company}
            <span>
              {exp.startDate} - {exp.endDate}
            </span>
          </H3Styled>
          <PStyled name={exp.jobDescription} />
        </div>
      ))}
    </div>
  </div>
);

export default Experience;
