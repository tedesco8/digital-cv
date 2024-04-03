import React from 'react';
import { useTranslation } from 'react-i18next';

import H2Styled from '../styled/H2Styled';
import H3Styled from '../styled/H3Styled';
import PStyled from '../styled/PStyled';

const Certificates = props => {
   const { t } = useTranslation();
   return (
      <div className="Certificates">
         <H2Styled name={t("certification")} />
         <div className="Certificates-container">
            {Object.values(props.data).map((cer, index) => (
               <div className="Certificates-item" key={`Cer-${index}`}>
                  <H3Styled><b>{cer.name}</b> {cer.institution}
                     <span>{cer.date}</span>
                  </H3Styled>
                  <PStyled name={cer.description} />
               </div>
            ))}
         </div>
      </div>
   )
};

export default Certificates;