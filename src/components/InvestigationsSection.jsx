import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

const Card = styled.div`
  background: var(--card);
  border: 1px solid var(--border);
  border-left: 5px solid var(--red);
  border-radius: 4px;
  padding: 40px 44px;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: start;
  gap: 40px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 28px 24px;
    gap: 24px;
  }
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const CardEyebrow = styled.span`
  color: var(--red);
  font-weight: 800;
  font-size: 11px;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const CardTitle = styled.h3`
  font-size: clamp(22px, 3vw, 32px);
  font-weight: 900;
  text-transform: uppercase;
  color: var(--white);
  margin: 0;
  line-height: 1.1;
`;

const Quote = styled.p`
  font-size: 17px;
  font-weight: 700;
  font-style: italic;
  color: var(--white);
  margin: 0;
  line-height: 1.5;
`;

const CardText = styled.p`
  font-size: 14px;
  color: var(--muted);
  line-height: 1.75;
  margin: 0;
  max-width: 580px;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`;

const Tag = styled.span`
  padding: 4px 12px;
  border: 1px solid var(--border);
  border-radius: 2px;
  font-size: 11px;
  font-weight: 700;
  color: var(--muted2);
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const CardActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
  padding-top: 4px;

  @media (max-width: 768px) {
    align-items: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const StatusBadge = styled.span`
  display: inline-block;
  padding: 5px 14px;
  background: rgba(225, 6, 0, 0.12);
  border: 1px solid rgba(225, 6, 0, 0.35);
  border-radius: 2px;
  color: var(--red);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const CTABtn = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 24px;
  border: 2px solid var(--red);
  border-radius: 2px;
  color: var(--white);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;
  transition: background 0.2s;

  &:hover {
    background: var(--red);
  }
`;

const InvestigationsSection = () => (
  <Section id="investigaciones">
    <SectionHeader>
      <Eyebrow>Investigación & Análisis</Eyebrow>
      <Title>En lo que estoy trabajando</Title>
      <Divider />
    </SectionHeader>

    <Card>
      <CardContent>
        <CardEyebrow>Libertad de expresión · Uruguay</CardEyebrow>
        <CardTitle>La Agenda de la Censura</CardTitle>
        <Quote>
          "Cómo el Estado uruguayo avanza sobre la libertad de expresión digital — y quién lo está impulsando."
        </Quote>
        <CardText>
          Una investigación en curso sobre los mecanismos legales, institucionales y políticos que se están utilizando para regular, limitar y censurar las redes sociales en Uruguay. Datos, actores, cronología y análisis.
        </CardText>
        <Tags>
          <Tag>YouTube</Tag>
          <Tag>Newsletter</Tag>
          <Tag>Investigación</Tag>
          <Tag>En curso</Tag>
        </Tags>
      </CardContent>

      <CardActions>
        <StatusBadge>En curso</StatusBadge>
        <CTABtn to="/agenda-de-la-censura">
          Ver la investigación completa →
        </CTABtn>
      </CardActions>
    </Card>
  </Section>
);

export default InvestigationsSection;
