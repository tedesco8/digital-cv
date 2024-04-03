import React from 'react';
import { useTranslation } from "react-i18next";

import H2Styled from '../styled/H2Styled';
import H3Styled from '../styled/H3Styled';
import PStyled from '../styled/PStyled';

const Referencias = props => {
  const { t } = useTranslation();
  return (
    <div className="Referencias">
      <H2Styled name={t('references')} />
      <div className="Referencias-container">
        {Object.values(props.data).map((item, index) => (
          <div className="Referencias-item" key={`item-${index}`}>
            <H3Styled>{item.nombre}
            </H3Styled>
            <PStyled name={item.empresa} />
            <PStyled name={item.cargo} />
            <PStyled name={item.tel} />
          </div>
        ))}
      </div>
    </div>
  )
};

export default Referencias;