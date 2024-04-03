import React from "react";
import { useTranslation } from "react-i18next";

import H2Styled from "../styled/H2Styled";
import H3Styled from "../styled/H3Styled";
import PStyled from "../styled/PStyled";

const Education = props => {
  const { t } = useTranslation();
  return (
    <div className="Education">
      <H2Styled name={t("education")} />
      <div className="Education-container">
        {Object.values(props.data).map((edu, index) => (
          <div className="Education-item" key={`Edu-${index}`}>
            <H3Styled>
              <b>{edu.degree}</b> {edu.institution}
              <span>
                {edu.startDate} - {edu.endDate}
              </span>
            </H3Styled>
            <PStyled name={edu.description} />
          </div>
        ))}
      </div>
    </div>
  )
};

export default Education;
