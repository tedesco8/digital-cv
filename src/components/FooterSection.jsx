import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  border-top: 1px solid var(--border);
  margin-top: 40px;
`;

const ContactSection = styled.section`
  padding: 80px 40px 64px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 60px 24px 48px;
  }
`;

const SectionHeader = styled.div`
  margin-bottom: 48px;
`;

const Eyebrow = styled.span`
  color: var(--red);
  font-weight: 800;
  font-size: 13px;
  letter-spacing: 2px;
  text-transform: uppercase;
  display: block;
  margin-bottom: 12px;
`;

const Title = styled.h2`
  font-size: clamp(28px, 4vw, 42px);
  font-weight: 900;
  text-transform: uppercase;
  color: var(--white);
  margin: 0 0 16px;
  line-height: 1;
`;

const Divider = styled.div`
  width: 55px;
  height: 8px;
  background: var(--red);
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const ContactLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ContactText = styled.p`
  font-size: 16px;
  color: var(--muted);
  line-height: 1.75;
  margin: 0;
  max-width: 440px;
`;

const EmailLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 15px;
  font-weight: 700;
  color: var(--white);
  text-decoration: none;
  transition: color 0.2s;

  i {
    color: var(--red);
  }

  &:hover {
    color: var(--red);
  }
`;

const Location = styled.p`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: var(--muted2);
  margin: 0;

  i {
    color: var(--red);
  }
`;

const ContactRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SocialLabel = styled.span`
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--muted2);
`;

const SocialGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 16px;
  border: 1px solid var(--border);
  border-radius: 4px;
  color: var(--muted);
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  transition: border-color 0.2s, color 0.2s, background 0.2s;

  i {
    width: 18px;
    text-align: center;
    color: var(--muted2);
    transition: color 0.2s;
  }

  &:hover {
    border-color: var(--red);
    color: var(--white);
    background: rgba(225, 6, 0, 0.05);

    i {
      color: var(--red);
    }
  }
`;

const BottomBar = styled.div`
  border-top: 1px solid var(--border);
  padding: 20px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 20px 24px;
    flex-direction: column;
    gap: 8px;
    text-align: center;
  }
`;

const Copyright = styled.p`
  font-size: 12px;
  color: var(--muted2);
  margin: 0;
`;

const BackToTop = styled.a`
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: var(--muted2);
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: var(--red);
  }
`;

const SOCIALS = [
  { icon: "fa-youtube-play", label: "YouTube",     url: "https://www.youtube.com/@PabloTedesco" },
  { icon: "fa-instagram",    label: "Instagram",   url: "https://www.instagram.com/tedescorodriguez/" },
  { icon: "fa-music",        label: "TikTok",      url: "https://www.tiktok.com/@pablotedesco0" },
  { icon: "fa-twitter",      label: "Twitter / X", url: "https://twitter.com/TedescoPablo" },
  { icon: "fa-facebook",     label: "Facebook",    url: "https://www.facebook.com/tedescorodriguez/" },
  { icon: "fa-linkedin",     label: "LinkedIn",    url: "https://www.linkedin.com/in/pablo-tedesco/" },
  { icon: "fa-github",       label: "GitHub",      url: "https://github.com/tedesco8" },
];

const FooterSection = () => (
  <Footer id="contacto">
    <ContactSection>
      <SectionHeader>
        <Eyebrow>Contacto</Eyebrow>
        <Title>Hablemos</Title>
        <Divider />
      </SectionHeader>

      <ContactGrid>
        <ContactLeft>
          <ContactText>
            Si tenés un proyecto de software, una idea que desarrollar, o simplemente querés intercambiar sobre política, libertad o tecnología — escribime.
          </ContactText>
          <EmailLink href="mailto:tedesco8@gmail.com">
            <i className="fa fa-envelope" />
            pablo@tedesco.es
          </EmailLink>
          <Location>
            <i className="fa fa-map-marker" />
            Montevideo, Uruguay
          </Location>
        </ContactLeft>

        <ContactRight>
          <SocialLabel>Redes y perfiles</SocialLabel>
          <SocialGrid>
            {SOCIALS.map(({ icon, label, url }) => (
              <SocialLink
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className={`fa ${icon}`} />
                {label}
              </SocialLink>
            ))}
          </SocialGrid>
        </ContactRight>
      </ContactGrid>
    </ContactSection>

    <BottomBar>
      <Copyright>© {new Date().getFullYear()} Pablo Tedesco — Todos los derechos reservados</Copyright>
      <BackToTop href="#hero">Volver arriba ↑</BackToTop>
    </BottomBar>
  </Footer>
);

export default FooterSection;
