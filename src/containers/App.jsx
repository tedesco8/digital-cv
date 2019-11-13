import React from 'react';
import {createGlobalStyle} from 'styled-components';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import Info from '../components/Info';
import About from '../components/About';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Certificates from '../components/Certificates';
import Skills from '../components/Skills';
import api from '../hooks/useGetDara';

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
                avatar={api.avatar}
                name={api.name}
                profession={api.profession}
                bio={api.bio}
                address={api.address}
                social={api.social}
                />
            </Sidebar>
            <Info>
                <Education 
                data={api.education}
                />
                <Experience 
                data={api.experience}
                />
                <Certificates 
                data={api.certificate}
                />
                <Skills 
                data={api.skills}
                />
            </Info>
        </Main>
    );
};

export default App;
