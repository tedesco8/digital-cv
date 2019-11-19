import React from "react";
import { createGlobalStyle } from "styled-components";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import Info from "../components/Info";
import About from "../components/About";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Certificates from "../components/Certificates";
import Skills from "../components/Skills";
import api from "../hooks/useGetDara";

const GlobalStyle = createGlobalStyle`
body {
    font-family: 'Lato', sans-serif;
    margin: 0;
    padding: 0;
    background: #f5f5f5;
}
`;
//retornamos nuestra estructura
const App = () => {
  return (
    <Main>
      <GlobalStyle />
      <Sidebar>
        <About
          avatar={api.data.avatar}
          name={api.data.name}
          profession={api.data.profession}
          bio={api.data.bio}
          address={api.data.address}
          social={api.data.social}
          referencia={api.data.referencia}
        />
      </Sidebar>
      <Info>
        <Education data={api.education} />
        <Experience data={api.data.experience} />
        <Certificates data={api.certificate} />
        <Skills data={api.skills} />
      </Info>
    </Main>
  );
};

export default App;
