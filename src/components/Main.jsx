import React from 'react';
import styled from 'styled-components';

const MainStyled = styled.div`
display: grid;
grid-template-columnns: minmax(auto, 1024px);
justify-content: center;
padding: 1em;
`;
const MainContainer = styled.div`
display: grid;
grid-template-columns: 1fr 3fr;
grid-gap: 2rem;
grid-row-gap: 0.5em;

@media only screen and (max-width : 767px) {
  grid-template-columns: 1fr;
}
`;
const Main = ({ children, id }) => (
    <MainStyled id={id}>
        <MainContainer>
          {children}
        </MainContainer>
    </MainStyled>
);

export default Main;
