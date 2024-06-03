import React from "react";
import { useTranslation } from "react-i18next";

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

import jsPDF from "jspdf";
import html2canvas from "html2canvas";

//retornamos nuestra estructura
const App = () => {
  const { t } = useTranslation();
  const exportPdf = () => {
    html2canvas(document.querySelector("#capture")).then((canvas) => {
      document.body.appendChild(canvas); // if you want see your screenshot in body.
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const width = pdf.internal.pageSize.getWidth();
      const height = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgData, "PNG", 0, 0, width, height);
      pdf.save("download.pdf");
    });
  };
  return (
    <Main id="capture">
      <GlobalStyle />
      <Sidebar>
        <About
          avatar={api.data.avatar}
          name={t("name")}
          profession={t("profession")}
          bio={t("bio")}
          address={api.data.address}
          social={api.data.social}
          referencia={api.data.referencia}
          contactPhone={api.data.referencia}
          contactEmail={api.data.contactEmail}
          onClick={exportPdf}
        />
      </Sidebar>
      <Info>
        <Experience data={api.data.experience} />
        <Education data={api.education} />
        <Certificates data={api.certificate} />
        <Skills data={api.skills} />
      </Info>
    </Main>
  );
};

export default App;

const GlobalStyle = createGlobalStyle`
body {
    font-family: 'Lato', sans-serif;
    margin: 0;
    padding: 0;
    background: #f5f5f5;
}
.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;
}
.tooltip .tiptext {
  top: -5px;
  left: 80%;
  visibility: hidden;
  width: 50px;
  text-align: center;
  border-radius: 3px;
  padding: 10px 0;
  position: absolute;
  z-index: 1;
}
.tooltip .tiptext::after {
  position: absolute;
  border-width: 5px;
  border-style: solid;
  margin-top: -5px;
  top: 50%;
  right: 100%;
}
.tooltip:hover .tiptext {
  visibility: visible;
}
`;
