import React from "react";
import { useTranslation } from "react-i18next";

import { SkillsContainer, SkillsH5, SkillsItem } from "./styles/skill.styled";
import H2Styled from "../styled/H2Styled";

const Skills = (props) => {
  const { t } = useTranslation();
  return (
    <div className="Skills">
      <H2Styled name={t("skill")} />
      <SkillsContainer>
        {props.data.map((skill, index) => (
          <SkillsItem key={`Skills-${index}`}>
            <SkillsH5>{skill}</SkillsH5>
          </SkillsItem>
        ))}
      </SkillsContainer>
    </div>
  );
};

export default Skills;
