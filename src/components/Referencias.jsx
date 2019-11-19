import React from 'react'; 
import H2Styled from '../styled/H2Styled';
import H3Styled from '../styled/H3Styled';
import PStyled from '../styled/PStyled';

const Referencias = props => (
   <div className="Referencias">
   <H2Styled name="Referencias" />
      <div className="Referencias-container">
       {Object.values(props.data).map((cer, index) => (
         <div className="Referencias-item" key={`Cer-${index}`}>
           <H3Styled>{cer.nombre} {cer.cargo}
              <span>{cer.empresa}</span>
           </H3Styled>
           <PStyled name={cer.tel} />
         </div>
       ))}
      </div>
   </div>
);

export default Referencias;