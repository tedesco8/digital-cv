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
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

const CategoryCard = styled.div`
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 24px 24px 28px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: border-color 0.25s;

  &:hover {
    border-color: var(--red);
  }
`;

const CategoryLabel = styled.span`
  color: var(--red);
  font-weight: 800;
  font-size: 11px;
  letter-spacing: 2px;
  text-transform: uppercase;
`;

const TagGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.span`
  display: inline-block;
  padding: 5px 12px;
  background: var(--card2);
  border: 1px solid var(--border);
  border-radius: 2px;
  font-size: 13px;
  font-weight: 700;
  color: var(--muted);
  letter-spacing: 0.3px;
  transition: color 0.2s, border-color 0.2s;

  ${CategoryCard}:hover & {
    border-color: #3a1a1a;
  }
`;

const CATEGORIES = [
  {
    label: "Frontend",
    skills: ["HTML5", "CSS", "JavaScript", "TypeScript", "React", "Next", "Vue", "Nuxt", "Angular", "Svelte", "SvelteKit"],
  },
  {
    label: "Backend",
    skills: ["Node", "Express", "Nest", "Java", "SpringBoot", "Kafka"],
  },
  {
    label: "Mobile & Desktop",
    skills: ["Ionic", "Capacitor", "Electron"],
  },
  {
    label: "Testing",
    skills: ["Jest", "Testing Library", "Vitest", "Playwright", "Puppeter"],
  },
  {
    label: "Build & Tooling",
    skills: ["Webpack", "Vite", "Babel", "Rollup"],
  },
  {
    label: "Infra & DevOps",
    skills: ["Docker", "Git", "Azure DevOps"],
  },
];

const Skills = ({ data }) => {
  const allSkills = new Set(data);

  return (
    <Section id="skills">
      <SectionHeader>
        <Eyebrow>Stack técnico</Eyebrow>
        <Title>Tecnologías</Title>
        <Divider />
      </SectionHeader>

      <Grid>
        {CATEGORIES.map((cat) => {
          const skills = cat.skills.filter((s) => allSkills.has(s));
          if (!skills.length) return null;
          return (
            <CategoryCard key={cat.label}>
              <CategoryLabel>{cat.label}</CategoryLabel>
              <TagGrid>
                {skills.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </TagGrid>
            </CategoryCard>
          );
        })}
      </Grid>
    </Section>
  );
};

export default Skills;
