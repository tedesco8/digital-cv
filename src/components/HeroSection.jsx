import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import profileImg from "../assets/img/pablo-tedesco-transparente.png";

const Section = styled.section`
  position: relative;
  min-height: 92vh;
  display: flex;
  align-items: center;
  background:
    radial-gradient(circle at 88% 12%, rgba(140, 4, 0, 0.72), transparent 52%),
    linear-gradient(180deg, #000 0%, #060606 100%);
  overflow: hidden;
`;

const Inner = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 80px 40px 60px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 60px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 60px 24px 48px;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Eyebrow = styled.span`
  color: var(--muted);
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const Name = styled.h1`
  font-size: clamp(42px, 8vw, 92px);
  font-weight: 900;
  text-transform: uppercase;
  line-height: 0.98;
  color: var(--white);
  margin: 0;

  span {
    color: var(--red);
  }
`;

const RedBar = styled.div`
  width: 55px;
  height: 8px;
  background: var(--red);
  margin: 4px 0;
`;

const CredentialBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 5px 12px;
  border: 1px solid var(--border);
  border-radius: 2px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--muted2);
  width: fit-content;

  i {
    color: var(--red);
    font-size: 10px;
  }
`;

const Profession = styled.p`
  font-size: clamp(14px, 1.8vw, 18px);
  font-weight: 700;
  color: var(--muted);
  margin: 0;
  letter-spacing: 0.5px;
`;

const Bio = styled.p`
  font-size: clamp(14px, 1.4vw, 16px);
  font-weight: 400;
  color: var(--muted);
  line-height: 1.7;
  margin: 0;
  max-width: 480px;
`;

const ScrollCTA = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  margin-top: 8px;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--white);
  text-decoration: none;
  transition: color 0.2s;

  &::before {
    content: "↓";
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border: 2px solid var(--white);
    border-radius: 50%;
    font-size: 14px;
    transition: border-color 0.2s, color 0.2s;
  }

  &:hover {
    color: var(--red);
    &::before {
      border-color: var(--red);
    }
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 768px) {
    order: -1;
  }
`;

const ProfileImg = styled.img`
  width: 100%;
  max-width: 480px;
  height: auto;
  display: block;
  mask-image:
    linear-gradient(to bottom, black 60%, transparent 100%),
    linear-gradient(to left, black 68%, transparent 100%),
    linear-gradient(to right, black 68%, transparent 100%);
  mask-composite: intersect;
  -webkit-mask-image:
    linear-gradient(to bottom, black 60%, transparent 100%),
    linear-gradient(to left, black 68%, transparent 100%),
    linear-gradient(to right, black 68%, transparent 100%);
  -webkit-mask-composite: destination-in;
`;

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <Section id="hero">
      <Inner>
        <Content>
          <Eyebrow>Análisis · Política · Libertad</Eyebrow>
          <Name>
            Pablo<br />
            <span>Tedesco</span>
          </Name>
          <RedBar />
          <CredentialBadge>
            <i className="fa fa-certificate" />
            Analista en Tecnologías de la Información
          </CredentialBadge>
          <Profession>{t("profession")}</Profession>
          <Bio>{t("bio")}</Bio>
          <ScrollCTA href="#proyectos">Ver más</ScrollCTA>
        </Content>
        <ImageWrapper>
          <ProfileImg src={profileImg} alt="Pablo Tedesco" />
        </ImageWrapper>
      </Inner>
    </Section>
  );
};

export default HeroSection;
