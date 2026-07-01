import React from 'react';
import styled from 'styled-components';

const PageWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;

  @media (max-width: 768px) {
    padding: 0 24px;
  }
`;

const Main = ({ children, id }) => (
  <main id={id}>
    <PageWrapper>
      {children}
    </PageWrapper>
  </main>
);

export default Main;
