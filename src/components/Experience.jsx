import React from "react";
import { useTranslation } from "react-i18next";

import H2Styled from "../styled/H2Styled";
import H3Styled from "../styled/H3Styled";
import PStyled from "../styled/PStyled";


const Experience = (props) => {
  const { t } = useTranslation();
  return (
    <div className="Experience">
      <H2Styled name={t('experience')} />
      <div className="Experience-container">
        {Object.values(props.data).map((exp, index) => (
          <div className="Experience-item" key={`Exp-${index}`}>
            <H3Styled>
              <b>{exp.jobTitle}</b> {exp.company}
              <span>
                {exp.startDate} - {exp.endDate}
              </span>
            </H3Styled>
            <PStyled name={t(`jobDescription${index}`)} />
          </div>
        ))}
      </div>
    </div>
  )
};

export default Experience;
