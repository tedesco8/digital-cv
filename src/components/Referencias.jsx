import React from 'react'; 
import H2Styled from '../styled/H2Styled';
import H3Styled from '../styled/H3Styled';
import PStyled from '../styled/PStyled';

const Referencias = props => (
   <div className="Referencias">
   <H2Styled name="Referencias" />
      <div className="Referencias-container">
       {Object.values(props.data).map((item, index) => (
         <div className="Referencias-item" key={`item-${index}`}>
           <H3Styled>{item.nombre} {item.cargo}
              <span>{item.empresa}</span>
           </H3Styled>
           <PStyled name={item.tel} />
         </div>
       ))}
      </div>
   </div>
);

export default Referencias;