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
  gap: 24px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 28px 28px 32px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: transform 0.25s, border-color 0.25s;

  &:hover {
    transform: translateY(-5px);
    border-color: var(--red);
  }
`;

const CardEyebrow = styled.span`
  color: var(--red);
  font-weight: 800;
  font-size: 11px;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 900;
  color: var(--white);
  margin: 0;
  line-height: 1.2;
  text-transform: uppercase;
`;

const CardText = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: var(--muted);
  line-height: 1.75;
  margin: 0;
`;

const Stat = styled.div`
  margin-top: auto;
  padding-top: 20px;
  border-top: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const StatNumber = styled.span`
  font-size: 26px;
  font-weight: 900;
  color: var(--red);
  line-height: 1;
`;

const StatLabel = styled.span`
  font-size: 12px;
  color: var(--muted2);
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const LinkedInBlock = styled.div`
  margin-top: 64px;
  background: var(--card2);
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 36px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 28px 24px;
  }
`;

const LinkedInText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const LinkedInTitle = styled.p`
  font-size: 17px;
  font-weight: 700;
  color: var(--white);
  margin: 0;
`;

const LinkedInSub = styled.p`
  font-size: 14px;
  color: var(--muted);
  margin: 0;
`;

const LinkedInBtn = styled.a`
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 28px;
  border: 2px solid var(--red);
  border-radius: 2px;
  color: var(--white);
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
  transition: background 0.2s, color 0.2s;

  &:hover {
    background: var(--red);
    color: var(--white);
  }
`;

const ROLES = [
  {
    eyebrow: "Desarrollo de Software",
    title: "Software Developer",
    text: "Ocho años construyendo productos digitales para empresas de distintas verticales. Me muevo igual de cómodo en el backend que en el frontend, del análisis al deploy. Creo en el código limpio, en los procesos que escalan y en que prevenir es siempre mejor que apagar incendios.",
    stat: "8+",
    statLabel: "Años de experiencia",
  },
  {
    eyebrow: "Medios & Comunicación Digital",
    title: "Director Fundador — SU Noticias",
    text: "Construí SU Noticias desde cero y lo convertí en uno de los medios nativos de redes más grandes de Uruguay — sin pauta, sin inversión, solo estrategia. Diez años de crecimiento sostenido, una comunidad de 160.000 seguidores y más de 3 millones de personas alcanzadas cada mes. El secreto: entender los algoritmos mejor que nadie y producir contenido que la gente quiere compartir.",
    stat: "3M+",
    statLabel: "Alcance mensual orgánico",
  },
  {
    eyebrow: "Comunicación Política",
    title: "Fundador — La Libertad Avanza Uruguay",
    text: "Fundé La Libertad Avanza Uruguay y dentro del partido creé Vanguardia Liberal, mi propia agrupación. Construí la identidad digital, la voz pública y la estrategia de comunicación del partido desde cero. Creo que las ideas liberales necesitan espacios modernos, bien comunicados y con presencia real en el debate uruguayo.",
    stat: "1.5M+",
    statLabel: "Alcance en redes de LLA en menos de un año",
  },
];

const ProjectsSection = () => (
  <Section id="proyectos">
    <SectionHeader>
      <Eyebrow>Lo que hago</Eyebrow>
      <Title>Roles profesionales</Title>
      <Divider />
    </SectionHeader>

    <Grid>
      {ROLES.map((role) => (
        <Card key={role.title}>
          <CardEyebrow>{role.eyebrow}</CardEyebrow>
          <CardTitle>{role.title}</CardTitle>
          <CardText>{role.text}</CardText>
          <Stat>
            <StatNumber>{role.stat}</StatNumber>
            <StatLabel>{role.statLabel}</StatLabel>
          </Stat>
        </Card>
      ))}
    </Grid>

    <LinkedInBlock>
      <LinkedInText>
        <LinkedInTitle>Experiencia laboral, educación y certificaciones</LinkedInTitle>
        <LinkedInSub>
          Para el detalle completo de mi trayectoria profesional, visitá mi perfil de LinkedIn.
        </LinkedInSub>
      </LinkedInText>
      <LinkedInBtn
        href="https://www.linkedin.com/in/pablo-tedesco/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-linkedin" /> Ver LinkedIn
      </LinkedInBtn>
    </LinkedInBlock>
  </Section>
);

export default ProjectsSection;
