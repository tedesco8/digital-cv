import React, { useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import Nav from "../components/Nav";
import HeroSection from "../components/HeroSection";
import Main from "../components/Main";
import ProjectsSection from "../components/ProjectsSection";
import YouTubeSection from "../components/YouTubeSection";
import InvestigationsSection from "../components/InvestigationsSection";
import FooterSection from "../components/FooterSection";
import AgendaCensuraPage from "../pages/AgendaCensuraPage";

const GA_ID = process.env.GA_MEASUREMENT_ID;

const useGoogleAnalytics = () => {
  useEffect(() => {
    if (!GA_ID) return;
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function() { window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("config", GA_ID);
  }, []);
};

const RouteTracker = () => {
  const location = useLocation();
  useGoogleAnalytics();
  useEffect(() => {
    if (typeof window.gtag === "function" && GA_ID) {
      window.gtag("config", GA_ID, { page_path: location.pathname });
    }
  }, [location]);
  return null;
};

const HomePage = () => (
  <div>
    <Nav />
    <HeroSection />
    <Main>
      <ProjectsSection />
      <YouTubeSection />
      <InvestigationsSection />
    </Main>
    <FooterSection />
  </div>
);

const App = () => (
  <>
    <GlobalStyle />
    <RouteTracker />
    <Switch>
      <Route path="/agenda-de-la-censura" component={AgendaCensuraPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  </>
);

export default App;

const GlobalStyle = createGlobalStyle`
  :root {
    --black:   #000000;
    --red:     #e10600;
    --red-dk:  #8c0400;
    --white:   #ffffff;
    --card:    #141414;
    --card2:   #1c1c1c;
    --muted:   #a6a6a6;
    --muted2:  #787878;
    --border:  #2a2a2a;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
    background: var(--black);
    color: var(--white);
  }
`;
