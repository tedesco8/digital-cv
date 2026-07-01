import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 80px 0;
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const VideoCard = styled.div`
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 4px;
  overflow: hidden;
  transition: border-color 0.25s, transform 0.25s;

  &:hover {
    border-color: var(--red);
    transform: translateY(-4px);
  }
`;

const EmbedWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

const CTA = styled.div`
  margin-top: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
  text-align: center;
`;

const CTAText = styled.p`
  color: var(--muted);
  font-size: 15px;
  margin: 0;
`;

const CTABtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 32px;
  background: var(--red);
  color: var(--white);
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 2px;
  transition: background 0.2s;

  &:hover {
    background: var(--red-dk);
  }
`;

const ChannelIntro = styled.div`
  border-left: 5px solid var(--red);
  padding: 24px 30px;
  background: var(--card);
  margin-bottom: 40px;
  border-radius: 0 4px 4px 0;
`;

const ChannelQuote = styled.p`
  font-size: 18px;
  font-weight: 700;
  font-style: italic;
  color: var(--white);
  line-height: 1.55;
  margin: 0 0 12px;
`;

const ChannelSub = styled.p`
  font-size: 14px;
  color: var(--muted);
  line-height: 1.7;
  margin: 0;
`;

const VIDEOS = [
  { id: "0oWjNOVCz0w" },
  { id: "7bL9uI_IL84" },
  { id: "4Q03vE4Ugfg" },
];

const YouTubeSection = () => (
  <Section id="contenido">
    <SectionHeader>
      <Eyebrow>Canal de YouTube</Eyebrow>
      <Title>Contenido</Title>
      <Divider />
    </SectionHeader>

    <ChannelIntro>
      <ChannelQuote>
        "Acá reacciono a lo que pasa en el mundo: política, economía, libertad individual, el avance del Estado sobre tu vida."
      </ChannelQuote>
      <ChannelSub>
        Vengo del mundo del código, donde los sistemas tienen consecuencias y las decisiones importan — y aplico esa misma lógica al análisis político. Mi brújula es el liberalismo clásico en la línea de Nozick: el individuo primero, el Estado mínimo, los derechos negativos como límites inviolables.
      </ChannelSub>
    </ChannelIntro>

    <Grid>
      {VIDEOS.map(({ id }) => (
        <VideoCard key={id}>
          <EmbedWrapper>
            <iframe
              src={`https://www.youtube.com/embed/${id}`}
              title={`Video ${id}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </EmbedWrapper>
        </VideoCard>
      ))}
    </Grid>

    <CTA>
      <CTAText>Análisis político, libertad individual y poder en Uruguay.</CTAText>
      <CTABtn
        href="https://www.youtube.com/@PabloTedesco"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-youtube-play" /> Suscribirse al canal
      </CTABtn>
    </CTA>
  </Section>
);

export default YouTubeSection;
