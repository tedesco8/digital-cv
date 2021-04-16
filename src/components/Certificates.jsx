import React from 'react'; 
import H2Styled from '../styled/H2Styled';
import H3Styled from '../styled/H3Styled';
import PStyled from '../styled/PStyled';

const Certificates = props => (
   <div className="Certificates">
   <H2Styled name="Certificaciones" />
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
);

export default Certificates;