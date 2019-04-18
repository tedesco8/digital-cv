import React from 'react'; 
import Social from './Social';
import styled from 'styled-components';

const AboutStyle = styled.div`
text-align: center;
`;
const AboutAvatar = styled.div`
padding: 2em 0 0 0;
`; 
const AboutImg = styled.img`
border-radius: 100%;
width: 160px;
height: 160px;
border: 2px solid #E91E63;
margin: 0 auto;
display: block;
box-shadow: 0 0 10px rgba(0,0,0,0.6);
`;  
const About = ({avatar, name, profession, bio, address, social}) => (
    <AboutStyle>
       <div className="About-container">
          <AboutAvatar>
             <figure>
                <AboutImg src={avatar} alt="{name}" />
             </figure>
          </AboutAvatar>
          <div className="About-name">
             <h2>{name}</h2>
          </div>
          <div className="About-profession">
             <p>{profession}</p>
          </div>
          <div className="About-desc">
             <p>{bio}</p>
          </div>
          <div className="About-location">
             <p>{address}</p>
          </div>
          <div className="About-social">
             <Social social={social} />
          </div>
       </div>
    </AboutStyle>
);

export default About;