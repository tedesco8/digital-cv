import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import agendaImg from "../assets/img/agenda-censura-transparente.png";

/* ─── FADE-IN HOOK ─────────────────────────────────────────────────── */
const useFadeIn = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return [ref, visible];
};

/* ─── NAV ───────────────────────────────────────────────────────────── */
const NavBar = styled.nav`
  position: fixed; top: 0; left: 0; right: 0; z-index: 100;
  background: rgba(0,0,0,0.92); backdrop-filter: blur(6px);
  border-bottom: 1px solid var(--border);
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 5vw; height: 56px;
  @media(max-width:768px){ padding: 0 20px; }
`;
const Brand = styled(Link)`
  font-weight: 900; font-size: 14px; letter-spacing: 1px;
  color: var(--white); text-decoration: none; flex-shrink: 0;
  span { color: var(--red); }
`;
const NavLinks = styled.ul`
  display: flex; gap: 22px; list-style: none; margin: 0; padding: 0;
  @media(max-width:820px){ display: none; }
`;
const NavLink = styled.a`
  color: var(--muted); text-decoration: none; font-size: 12px;
  font-weight: 700; letter-spacing: 1px; text-transform: uppercase;
  transition: color .2s; border-bottom: 2px solid transparent; padding-bottom: 4px;
  &:hover { color: var(--white); }
  &.active { color: var(--red); border-bottom-color: var(--red); }
`;
const BackBtn = styled(Link)`
  display: inline-flex; align-items: center; gap: 6px;
  font-size: 11px; font-weight: 800; letter-spacing: 1px; text-transform: uppercase;
  color: var(--muted2); text-decoration: none; transition: color .2s;
  &:hover { color: var(--red); }
  @media(max-width:820px){ display: none; }
`;

const NAV_LINKS = [
  { label: "Inicio",      href: "#inicio" },
  { label: "Tesis",       href: "#tesis" },
  { label: "Cronología",  href: "#cronologia" },
  { label: "Actores",     href: "#actores" },
  { label: "Medios",      href: "#medios" },
  { label: "Modelos",     href: "#modelos" },
];

const scrollToId = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const AgendaNav = () => {
  const [active, setActive] = useState("inicio");
  useEffect(() => {
    const ids = NAV_LINKS.map(l => l.href.slice(1));
    const handler = () => {
      let cur = ids[0];
      ids.forEach(id => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) cur = id;
      });
      setActive(cur);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return (
    <NavBar>
      <Brand to="/"><span>Pablo Tedesco</span> · Agenda de la Censura</Brand>
      <NavLinks>
        {NAV_LINKS.map(({ label, href }) => (
          <li key={href}>
            <NavLink
              href={href}
              className={active === href.slice(1) ? "active" : ""}
              onClick={e => { e.preventDefault(); scrollToId(href.slice(1)); }}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </NavLinks>
      <BackBtn to="/">← Volver al inicio</BackBtn>
    </NavBar>
  );
};

/* ─── HERO ───────────────────────────────────────────────────────────── */
const bounce = keyframes`0%,100%{transform:translateY(0);}50%{transform:translateY(6px);}`;
const HeroSection = styled.header`
  min-height: 92vh; display: flex; align-items: center;
  position: relative; overflow: hidden;
  background:
    radial-gradient(circle at 88% 12%, rgba(140, 4, 0, 0.72), transparent 52%),
    linear-gradient(180deg, #000 0%, #060606 100%);
`;
const HeroInner = styled.div`
  position: relative; z-index: 2;
  max-width: 1200px; width: 100%; margin: 0 auto;
  padding: 100px 40px 60px;
`;
const HeroContent = styled.div`
  max-width: 560px;
  display: flex; flex-direction: column; gap: 20px;
`;
const HeroImageWrapper = styled.div`
  position: absolute; right: 0; top: 0; bottom: 0;
  width: 52%; pointer-events: none;
  display: flex; align-items: flex-end; justify-content: flex-end;
  @media(max-width:900px){ width: 45%; opacity: 0.5; }
  @media(max-width:600px){ display: none; }
`;
const HeroImg = styled.img`
  height: 100%; width: 100%;
  object-fit: cover; object-position: center top; display: block;
  mask-image:
    linear-gradient(to bottom, black 55%, transparent 100%),
    linear-gradient(to left, black 65%, transparent 100%),
    linear-gradient(to right, black 90%, transparent 100%);
  mask-composite: intersect;
  -webkit-mask-image:
    linear-gradient(to bottom, black 55%, transparent 100%),
    linear-gradient(to left, black 65%, transparent 100%),
    linear-gradient(to right, black 90%, transparent 100%);
  -webkit-mask-composite: destination-in;
`;
const Eyebrow = styled.div`
  color: var(--muted); font-size: 13px; letter-spacing: 2px; font-weight: 700;
  text-transform: uppercase;
`;
const HeroH1 = styled.h1`
  font-weight: 900; font-size: clamp(42px,8vw,92px); line-height: 0.98;
  margin: 0; text-transform: uppercase;
  span { color: var(--red); }
`;
const RedBar = styled.div`width: 55px; height: 8px; background: var(--red);`;
const Lead = styled.p`max-width: 540px; color: var(--muted); font-size: 17px; line-height: 1.55; margin: 0;`;
const ScrollCTA = styled.a`
  display: inline-flex; align-items: center; gap: 10px; color: var(--white);
  font-weight: 700; font-size: 13px; letter-spacing: 1px; text-transform: uppercase;
  cursor: pointer; text-decoration: none; margin-top: 8px;
`;
const Arrow = styled.span`
  width: 30px; height: 30px; border-radius: 50%; border: 2px solid var(--red);
  display: flex; align-items: center; justify-content: center;
  animation: ${bounce} 1.8s infinite;
`;

/* ─── SHARED SECTION STYLES ─────────────────────────────────────────── */
const Section = styled.section`padding: 90px 6vw; position: relative;`;
const EyebrowTag = styled.div`
  color: var(--red); font-weight: 800; font-size: 13px; letter-spacing: 2px;
  text-transform: uppercase; margin-bottom: 10px;
`;
const SectionTitle = styled.h2`
  font-size: clamp(28px,4vw,42px); font-weight: 900; text-transform: uppercase;
  margin: 0 0 16px; line-height: 1.05;
`;
const SectionSub = styled.p`
  color: var(--muted); font-size: 16px; max-width: 760px; line-height: 1.6; margin: 0 0 50px;
`;

/* ─── TESIS ──────────────────────────────────────────────────────────── */
const ThesisRows = styled.div`display: flex; flex-direction: column; gap: 28px; max-width: 980px;`;
const ThesisRow = styled.div`
  display: flex; gap: 22px; align-items: flex-start;
  opacity: ${p => p.visible ? 1 : 0}; transform: translateY(${p => p.visible ? 0 : "18px"});
  transition: opacity .6s, transform .6s;
`;
const ThesisNum = styled.div`
  flex: none; width: 54px; height: 54px; border-radius: 50%; background: var(--red);
  display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 20px;
`;
const ThesisH3 = styled.h3`margin: 6px 0; font-size: 19px; font-weight: 900; text-transform: uppercase;`;
const ThesisP = styled.p`margin: 0; color: var(--muted); font-size: 15px; line-height: 1.55; max-width: 760px;`;

const TESIS = [
  { title: "El Estado redacta las reglas", text: "Comisiones parlamentarias y organismos internacionales diseñan, sin el ciudadano en la mesa, qué se puede publicar y qué se modera." },
  { title: 'La "protección" es la puerta de entrada', text: "Niños, elecciones y desinformación son el argumento. El control del discurso es el resultado. La infancia es el caballo de Troya." },
  { title: "Quien define la mentira, controla la verdad", text: "La pregunta que nadie contesta en los proyectos de ley: ¿quién pone el límite, y con qué autoridad? Ningún texto da una respuesta precisa. A propósito." },
  { title: "El manual viene de afuera", text: "UNESCO, UNICEF, PNUD y la UE escribieron las reglas. Los políticos locales las adaptan, las firman y se llevan el crédito. El ciudadano no votó por ninguno de los organismos que diseñó esto." },
];

const ThesisItem = ({ num, title, text }) => {
  const [ref, visible] = useFadeIn();
  return (
    <ThesisRow ref={ref} visible={visible}>
      <ThesisNum>{num}</ThesisNum>
      <div><ThesisH3>{title}</ThesisH3><ThesisP>{text}</ThesisP></div>
    </ThesisRow>
  );
};

/* ─── TIMELINE ────────────────────────────────────────────────────────── */
const TlNav = styled.div`
  display: flex; justify-content: space-between; max-width: 980px;
  margin: 0 auto 60px; position: relative; padding: 0 10px;
  &::before { content:''; position:absolute; top:9px; left:0; right:0; height:2px; background:var(--border); z-index:0; }
`;
const TlNodeBtn = styled.button`
  position: relative; z-index: 1; display: flex; flex-direction: column;
  align-items: center; gap: 10px; background: none; border: none; cursor: pointer;
  color: ${p => p.active ? "var(--white)" : "var(--muted2)"}; font-family: inherit;
`;
const TlDotNav = styled.span`
  width: 20px; height: 20px; border-radius: 50%;
  background: ${p => p.active ? "var(--red)" : "var(--black)"};
  border: 2px solid ${p => p.active ? "var(--red)" : "var(--border)"};
  box-shadow: ${p => p.active ? "0 0 0 6px rgba(225,6,0,0.18)" : "none"};
  transition: all .25s; display: block;
`;
const TlYr = styled.span`font-size: 13px; font-weight: 800; letter-spacing: 1px;`;
const TlLine = styled.div`
  position: relative; max-width: 980px; margin: 0 auto;
  &::before { content:''; position:absolute; left:24px; top:0; bottom:0; width:2px; background:var(--border); }
`;
const TlItem = styled.div`
  position: relative; padding-left: 70px; padding-bottom: 60px;
  opacity: ${p => p.visible ? 1 : 0}; transform: translateX(${p => p.visible ? 0 : "-20px"});
  transition: opacity .6s, transform .6s;
  &:last-child { padding-bottom: 0; }
`;
const TlDot = styled.div`
  position: absolute; left: 14px; top: 4px; width: 22px; height: 22px; border-radius: 50%;
  background: ${p => p.active ? "var(--red)" : "var(--black)"};
  border: 2px solid ${p => p.active ? "var(--red)" : "var(--border)"};
  box-shadow: ${p => p.active ? "0 0 0 7px rgba(225,6,0,0.16)" : "none"};
  transition: all .3s;
`;
const TlYear = styled.div`color: var(--red); font-weight: 900; font-size: 14px; letter-spacing: 2px; margin-bottom: 6px;`;
const TlCard = styled.div`background: var(--card); border: 1px solid var(--border); border-radius: 4px; padding: 26px 28px;`;
const TlCardH3 = styled.h3`margin: 0 0 14px; font-size: 23px; font-weight: 900; text-transform: uppercase;`;
const TlList = styled.ul`margin: 0 0 16px; padding: 0 0 0 20px; color: var(--white);`;
const TlLi = styled.li`margin-bottom: 10px; font-size: 15px; line-height: 1.5; padding-left: 4px; &::marker { color: var(--red); }`;
const TlSource = styled.div`color: var(--muted2); font-size: 12px; font-style: italic;`;

const TIMELINE = [
  { id: "tl-1", year: "2023", title: "UNESCO escribe el manual", items: ["Conferencia global en París (21–23 de febrero) sobre regulación de plataformas digitales.", "En noviembre, UNESCO publica las <<Directrices para la gobernanza de las plataformas digitales<<.", "El documento define roles para Estados, empresas y organismos internacionales sobre qué se modera y cómo.", "Este texto se convierte en la hoja de ruta que Uruguay empieza a seguir."], source: "Fuente: UNESCO – unesco.org" },
  { id: "tl-2", year: "2024", title: "Goñi entra en escena", items: ["Presenta el proyecto que penaliza <<deepfakes<< en campaña electoral: hasta 6 años de prisión.", "Con los diputados Sebastián Cal y Felipe Schipani, presenta otro proyecto que criminaliza la difusión de <<noticias falsas<< sobre candidatos.", "Ambos buscan aprobarse antes de las elecciones de octubre de 2024.", "Ninguno define con precisión qué es un <<deepfake<< perjudicial ni quién determina qué es una <<noticia falsa<<."], source: "Fuente: El Observador / La Diaria, febrero de 2024" },
  { id: "tl-3", year: "2025", title: "Las ONG entran al tablero", items: ["Datysoc y OBSERVACOM lanzan un <<diálogo multiactor<< para la regulación de las grandes plataformas en Uruguay.", "Con respaldo explícito de UNESCO (PIDC), Agesic y la Comisión de Ciencia, Innovación y Tecnología del Senado.", "Objetivo declarado: un documento de síntesis para <<presentar al Parlamento como insumo clave<<.", "El proceso es por invitación — no participan ciudadanos comunes, sino actores seleccionados."], source: "Fuente: UNESCO / Datysoc, febrero de 2025" },
  { id: "tl-4", year: "MARZO 2026", title: "Goñi llega a la presidencia", items: ["El 1° de marzo, Rodrigo Goñi asume como presidente de la Cámara de Representantes con 93 de 96 votos.", "En su discurso de asunción, ubica <<el reto tecnológico<< en el centro de la agenda legislativa.", "Se reúne con delegaciones de Reino Unido y Australia para estudiar sus modelos de restricción de redes sociales.", "Desde el cargo más alto de la Cámara, tiene control total de la agenda legislativa."], source: "Fuente: Subrayado / Parlamento.gub.uy, marzo de 2026" },
  { id: "tl-5", year: "ABRIL–MAYO 2026", title: "La infancia, la puerta de entrada", items: ["29 de abril: jornada sobre protección de niñas, niños y adolescentes en entornos digitales, con la vicepresidenta Carolina Cosse.", "Frente Amplio y Partido Nacional, juntos. La agenda no tiene partido: tiene casta.", "Goñi promueve una consulta pública para <<acompañar<< el proceso legislativo.", "Meta declarada: tener un anteproyecto de ley antes de fin de año."], source: "Fuente: DPL News / Colegio de Abogados del Uruguay, abril de 2026" },
  { id: "tl-6", year: "JUNIO 2026", title: "La consulta se vuelve oficial", items: ["23 de junio: lanzamiento formal en el Palacio Legislativo de la <<Consulta Pública y Participación Multiactores<< sobre NNA, entornos digitales e IA.", "Se suman como impulsores: Agesic, UNICEF, PNUD, Ceibal y el Consejo Nacional Consultivo de Niñez y Adolescencia.", "El documento oficial (objetivo 4) ya contempla explícitamente <<distinguir qué dimensiones requieren regulación<<.", "Cronograma: consulta abierta hasta el 10 de setiembre; informe final el 30 de noviembre."], source: "Fuente: Parlamento.gub.uy, 23 de junio de 2026" },
];

const TimelineItem = ({ item, activeId }) => {
  const [ref, visible] = useFadeIn();
  return (
    <TlItem ref={ref} visible={visible} id={item.id}>
      <TlDot active={activeId === item.id} />
      <TlYear>{item.year}</TlYear>
      <TlCard>
        <TlCardH3>{item.title}</TlCardH3>
        <TlList>{item.items.map((t, i) => <TlLi key={i}>{t}</TlLi>)}</TlList>
        <TlSource>{item.source}</TlSource>
      </TlCard>
    </TlItem>
  );
};

/* ─── GOÑI SPOTLIGHT ─────────────────────────────────────────────────── */
const GoniSection = styled(Section)`background: #080808;`;
const GoniWrap = styled.div`max-width: 980px;`;
const GoniName = styled.h2`font-size: 38px; font-weight: 900; margin: 0 0 6px;`;
const GoniRole = styled.div`color: var(--muted); font-size: 15px; margin-bottom: 24px;`;
const QuoteCard = styled.div`
  background: var(--card); border-left: 5px solid var(--red);
  padding: 24px 30px; margin-bottom: 34px;
  p { margin: 0; font-size: 21px; font-weight: 700; font-style: italic; }
`;
const GoniList = styled.ul`list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 14px;`;
const GoniLi = styled.li`
  display: flex; gap: 14px; align-items: flex-start; font-size: 15px; color: var(--white); line-height: 1.5;
  &::before { content: '▸'; color: var(--red); font-size: 10px; margin-top: 6px; flex-shrink: 0; }
`;

/* ─── ACTORES ─────────────────────────────────────────────────────────── */
const FilterRow = styled.div`display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 36px;`;
const FilterBtn = styled.button`
  background: ${p => p.active ? "var(--red)" : "none"};
  border: 1px solid ${p => p.active ? "var(--red)" : "var(--border)"};
  color: ${p => p.active ? "var(--white)" : "var(--muted)"};
  font-family: inherit; font-size: 11px; font-weight: 800; letter-spacing: 1.5px;
  text-transform: uppercase; padding: 8px 16px; border-radius: 2px; cursor: pointer; transition: all .2s;
  &:hover { border-color: var(--muted); color: var(--white); }
`;
const ActorGrid = styled.div`
  display: grid; grid-template-columns: repeat(3,1fr); gap: 22px; max-width: 1200px;
  @media(max-width:960px){ grid-template-columns: repeat(2,1fr); }
  @media(max-width:600px){ grid-template-columns: 1fr; }
`;
const ActorCard = styled.div`
  background: var(--card); border: 1px solid var(--border); border-radius: 4px; padding: 24px;
  cursor: pointer; transition: transform .25s, border-color .25s, background .25s;
  &:hover { transform: translateY(-5px); border-color: var(--red); background: var(--card2); }
`;
const ActorNum = styled.div`
  width: 36px; height: 36px; border-radius: 50%; background: var(--red); color: var(--white);
  display: flex; align-items: center; justify-content: center; font-weight: 900; margin-bottom: 14px; font-size: 14px;
`;
const ActorH4 = styled.h4`margin: 0 0 4px; font-size: 16px; font-weight: 900; text-transform: uppercase;`;
const ActorRole = styled.span`color: var(--red); font-size: 10px; font-weight: 800; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 4px; display: block;`;
const ActorCat = styled.span`color: var(--muted2); font-size: 10px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 12px; display: block;`;
const ActorDesc = styled.div`color: var(--muted); font-size: 13px; line-height: 1.55; max-height: ${p => p.open ? "300px" : "0"}; overflow: hidden; transition: max-height .35s ease; margin-top: ${p => p.open ? "8px" : "0"};`;
const ActorHint = styled.div`color: var(--muted2); font-size: 11px; margin-top: 12px;`;

const ACTORES = [
  { num:1, cat:"internacional", title:"UNESCO", role:"Organismo de la ONU", desc:"Publicó en noviembre de 2023 las <<Directrices para la gobernanza de las plataformas digitales<<, el documento fundacional de toda la agenda regional. Establece que los Estados deben <<regular de manera proporcional<< las plataformas para combatir la <<desinformación<<. Co-financia el <<diálogo multiactor<< de Datysoc/OBSERVACOM mediante su Programa Internacional para el Desarrollo de la Comunicación (PIDC)." },
  { num:2, cat:"internacional", title:"UNICEF Uruguay", role:"Fondo de la ONU para la infancia", desc:"Co-impulsor del lanzamiento de la consulta pública del 23 de junio de 2026. Aporta el marco de <<derechos de la niñez<< como justificación para el avance regulatorio. Su presencia le da cobertura moral a un proceso cuyo objetivo 4 ya contempla regulación explícita." },
  { num:3, cat:"internacional", title:"PNUD Uruguay", role:"Programa de la ONU para el Desarrollo", desc:"Co-impulsor de la consulta pública del 23 de junio. El PNUD aporta capacidad técnica, legitimidad institucional y financiamiento para los procesos de <<participación ciudadana<< que alimentan la agenda regulatoria. Ninguno de sus representantes en Uruguay es electo por la ciudadanía." },
  { num:4, cat:"estatal", title:"Agesic", role:"Agencia de Gobierno Electrónico", desc:"Agencia estatal que pone la infraestructura técnica y política del Estado al servicio del proceso regulatorio. Co-organizadora de la consulta pública. Su directora, Cristina Zubillaga, pidió <<fortalecer la respuesta del Estado<< con estándares internacionales de DD.HH. para la infancia." },
  { num:5, cat:"estatal", title:"Ceibal", role:"Organismo estatal de educación digital", desc:"Co-impulsor de la consulta pública. Ceibal aporta el componente <<educativo<< que da cobertura a un proceso cuyo resultado final puede ser regulatorio. Se presenta como educación, pero el objetivo 4 habla de regulación." },
  { num:6, cat:"estatal", title:"Consejo Consultivo de Niñez y Adolescencia", role:"Organismo honorario del Estado", desc:"Co-impulsor de la consulta. Presidido por Federico Graña (Subsecretario del Mides), quien encuadra el proceso como <<insumo formal para política pública<<. Su participación implica que el Poder Ejecutivo también está alineado con la agenda." },
  { num:7, cat:"ong", title:"Datysoc", role:"ONG local (tecnología y sociedad)", desc:"Co-organizó el <<diálogo multiactor<< de 2025 sobre regulación de plataformas en Uruguay, con respaldo de UNESCO (PIDC) y aval del Senado. Su posición en el <<diálogo<< le permitió influir en qué actores participaron y qué marcos conceptuales se usaron." },
  { num:8, cat:"ong", title:"OBSERVACOM", role:"ONG regional (comunicación y derechos)", desc:"Promotor histórico de la regulación de plataformas y medios en toda América Latina. Co-organizó el diálogo multiactor 2025. OBSERVACOM defiende que la regulación de plataformas es una exigencia de derechos humanos, y su marco conceptual permea los documentos oficiales uruguayos." },
  { num:9, cat:"politico", title:"Carolina Cosse", role:"Frente Amplio · Presidenta de la Asamblea General", desc:"Participó junto a Goñi en el lanzamiento de la consulta pública del 23 de junio de 2026. Su frase: <<una oportunidad para la política para probar nuevos caminos de manera responsable.<< La presencia de Cosse demuestra que esta agenda no tiene color político." },
  { num:10, cat:"politico", title:"Daniel Borbonet", role:"Senador, Frente Amplio", desc:"Participó en el lanzamiento de la consulta. Su frase resume la estrategia: <<No se trata de prohibir o no prohibir, sino de qué queremos y tratar de que no se vulneren derechos.<< Una definición tan vaga que puede usarse para justificar cualquier regulación." },
  { num:11, cat:"politico", title:"Maximiliano Campo", role:"Diputado, Frente Amplio", desc:"Autor del proyecto de ley sobre celulares en centros educativos. Acusó a las plataformas de <<querer monetizar nuestra atención<<. Su proyecto sobre celulares en escuelas es la cuña más pequeña de una puerta que tiene como destino final la regulación de contenidos." },
  { num:12, cat:"politico", title:"Partido Nacional / Lacalle Pou", role:"Partido de origen de Goñi", desc:"El PN es el partido que encabeza esta agenda desde el sector legislativo. Goñi es su representante más activo. Luis Lacalle Pou dijo en 2024 ante Javier Milei que la libertad necesita <<un Estado fuerte<<. No ha hecho declaraciones públicas sobre la consulta de regulación digital." },
];

const FILTERS = [
  { key: "all", label: "Todos" },
  { key: "internacional", label: "Organismos int'l" },
  { key: "estatal", label: "Agencias estatales" },
  { key: "ong", label: "ONGs" },
  { key: "politico", label: "Políticos" },
];

/* ─── MEDIOS ──────────────────────────────────────────────────────────── */
const MediaSection = styled(Section)`background: linear-gradient(180deg,#060606 0%,#0a0000 100%);`;
const MediaIntro = styled.div`
  background: var(--card); border-left: 5px solid var(--muted2);
  padding: 24px 30px; margin-bottom: 40px; max-width: 860px;
  p { margin: 0; color: var(--muted); font-size: 16px; line-height: 1.65; }
  strong { color: var(--white); }
`;
const MediaGrid = styled.div`
  display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; max-width: 1100px;
  @media(max-width:780px){ grid-template-columns: 1fr; }
`;
const MediaCard = styled.div`
  background: var(--card); border: 1px solid var(--border); border-radius: 4px;
  padding: 22px 24px; border-top: 4px solid var(--muted2);
`;
const MediaH4 = styled.h4`font-size: 15px; font-weight: 900; text-transform: uppercase; margin: 0 0 6px;`;
const MediaType = styled.span`color: var(--muted2); font-size: 10px; font-weight: 800; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 12px; display: block;`;
const MediaNote = styled.div`
  margin-top: 36px; max-width: 860px; padding: 20px 26px;
  border: 1px solid var(--border); border-radius: 4px;
  color: var(--muted2); font-size: 13px; line-height: 1.6; font-style: italic;
  strong { color: var(--muted); font-style: normal; }
`;

const MEDIOS = [
  { name: "El País", type: "Diario impreso y digital", text: "El diario de mayor circulación del Uruguay no registró el lanzamiento del 23 de junio. Compite directamente con medios digitales y nativos de redes sociales por audiencia y pauta publicitaria." },
  { name: "El Observador", type: "Diario digital / impreso", text: "Medio que sí cubrió los proyectos de Goñi en 2024 (deepfakes, noticias falsas), pero omitió el lanzamiento de la consulta de 2026. La selectividad en la cobertura merece atención." },
  { name: "Búsqueda", type: "Semanario de referencia", text: "Publicación de élite política y económica, sin cobertura verificada del proceso. Es el medio donde más se discute política pública en Uruguay, y este tema no aparece en su agenda." },
  { name: "Montevideo Portal", type: "Portal de noticias digital", text: "Sin cobertura del lanzamiento del 23 de junio. Como medio nativo digital, tendría razones propias para cubrir y cuestionar una ley que podría afectar las plataformas donde distribuye su contenido." },
  { name: "Subrayado / Canal 10", type: "Televisión abierta y digital", text: "Cubrió la asunción de Goñi como presidente de Diputados en marzo, pero no el lanzamiento de la consulta. El reto tecnológico de Goñi sí fue noticia; sus consecuencias, no." },
  { name: "¿Quién sí cubrió?", type: "Medios independientes y chicos", text: "La Mañana y Mayoristas & Mercado fueron los únicos medios que registraron el evento. No es casualidad que sean medios sin el peso institucional ni los intereses publicitarios de los grandes operadores." },
];

/* ─── MODELOS ─────────────────────────────────────────────────────────── */
const ModelsGrid = styled.div`
  display: grid; grid-template-columns: repeat(auto-fill,minmax(300px,1fr)); gap: 24px; max-width: 1200px;
`;
const ModelCard = styled.div`background: var(--card); border-top: 5px solid var(--red); padding: 30px 26px;`;
const ModelFlag = styled.div`font-size: 13px; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; color: var(--muted2); margin-bottom: 6px;`;
const ModelH4 = styled.h4`font-size: 20px; font-weight: 900; margin: 0 0 6px;`;
const ModelLaw = styled.span`font-size: 11px; color: var(--red); font-weight: 800; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 14px; display: block;`;
const ModelP = styled.p`color: var(--muted); font-size: 14px; line-height: 1.65; margin: 0 0 14px;`;
const ModelKey = styled.div`
  background: #0e0e0e; border-left: 3px solid var(--red);
  padding: 10px 14px; font-size: 13px; color: var(--white); line-height: 1.5;
  strong { color: var(--red); }
`;
const ModelWarn = styled.div`
  margin-top: 36px; max-width: 860px; padding: 18px 24px;
  background: #0a0000; border: 1px solid #3a0000; border-radius: 4px;
  font-size: 14px; line-height: 1.6; color: var(--muted);
  strong { color: var(--white); }
`;

const MODELOS = [
  { flag: "🇦🇺 Australia", title: "Ley de Edad Mínima", law: "Online Safety Amendment (Social Media Minimum Age) Act 2024", text: "Prohíbe el acceso a redes sociales a menores de 16 años. Las plataformas son responsables de verificar la edad de todos sus usuarios. Multas de hasta AUD $50 millones. La delegación australiana visitó a Goñi en persona en la Cámara de Representantes.", key: "La trampa: para verificar quién tiene 16 años, hay que verificar la identidad de todos. El resultado es un sistema de identificación obligatoria para usar internet." },
  { flag: "🇬🇧 Reino Unido", title: "Ley de Seguridad Online", law: "Online Safety Act 2023", text: "Obliga a las plataformas a eliminar contenido <<dañino<< bajo pena de hasta el 10% de sus ingresos globales. Define categorías de daño que incluyen contenido legalmente permitido pero <<potencialmente dañino<<. El Regulador (Ofcom) decide qué entra en esa última categoría.", key: "La trampa: <<potencialmente dañino<< es una categoría sin bordes. Quien la define, controla el discurso." },
  { flag: "🇧🇷 Brasil", title: "Estatuto Digital de la Niñez", law: "Ley 15.211/2025 — en vigor desde el 17 de marzo de 2026", text: "Prohíbe el uso de redes sociales para menores de 14 años. Entre 14 y 17 años, requiere consentimiento parental. Multas de hasta el 10% de la facturación anual en Brasil. Entró en vigor dos meses antes del lanzamiento de la consulta uruguaya.", key: "La trampa: para que las plataformas sepan la edad de los usuarios, necesitan datos de todos. Los datos de menores protegidos terminan siendo datos de adultos vigilados." },
  { flag: "🇪🇺 Unión Europea", title: "Ley de Servicios Digitales", law: "Digital Services Act — Reglamento 2022/2065, en vigor 2024", text: "Para plataformas con más de 45 millones de usuarios en la UE: auditorías independientes anuales, moderación de contenido con supervisión regulatoria, informes de <<riesgo sistémico<< sobre el impacto de sus algoritmos. Las plataformas <<muy grandes<< (VLOP) son reguladas directamente por la Comisión Europea.", key: "La trampa: los <<riesgos sistémicos<< incluyen contenido que <<afecte el discurso cívico<<. El regulador decide qué discurso es sistémicamente riesgoso." },
  { flag: "🇨🇳 China", title: "Sistema de Control de Tiempo de Pantalla", law: "Reglamento de gestión de adicción a internet para menores (2023)", text: "Menores de 8 años: máximo 40 minutos por día. De 8 a 16 años: máximo 1 hora. De 16 a 18 años: máximo 2 horas. Implementado por ley, con verificación biométrica de identidad. No es citado en el documento oficial uruguayo, pero es el punto de llegada lógico de la escalera que los demás modelos están construyendo.", key: "El espejo: lo que hoy se presenta como protección de menores en Australia o Brasil, ya llegó a su destino final en China. La diferencia es de grado, no de naturaleza." },
];

/* ─── CIERRE ──────────────────────────────────────────────────────────── */
const ClosingSection = styled(Section)`
  min-height: 70vh; display: flex; flex-direction: column; justify-content: center;
  background: linear-gradient(180deg,#060606 0%,#000 100%);
`;
const ClosingH2 = styled.h2`
  font-size: clamp(34px,6vw,60px); font-weight: 900; text-transform: uppercase;
  line-height: 1.05; margin: 0 0 26px; max-width: 900px;
  span { color: var(--red); }
`;
const ClosingLead = styled.p`color: var(--muted); font-size: 18px; max-width: 640px; line-height: 1.6; margin: 0 0 40px;`;
const CTABox = styled.div`display: flex; align-items: center; gap: 18px; flex-wrap: wrap;`;
const CTABtn = styled(Link)`
  background: var(--red); color: var(--white); font-weight: 900; font-size: 14px;
  letter-spacing: 1px; text-transform: uppercase; padding: 16px 32px;
  border-radius: 2px; text-decoration: none; transition: background .2s;
  &:hover { background: var(--red-dk); }
`;
const CTAName = styled.div`font-size: 22px; font-weight: 900;`;

const PageFooter = styled.footer`
  border-top: 1px solid var(--border); padding: 30px 6vw;
  display: flex; justify-content: space-between; align-items: center;
  flex-wrap: wrap; gap: 14px; color: var(--muted2); font-size: 12px;
`;
const Tagline = styled.div`letter-spacing: 3px; color: var(--red); font-weight: 800; font-size: 12px; text-transform: uppercase;`;

/* ─── PAGE ───────────────────────────────────────────────────────────── */
const AgendaCensuraPage = () => {
  const [activeId, setActiveId] = useState("tl-1");
  const [filter, setFilter] = useState("all");
  const [expanded, setExpanded] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handler = () => {
      TIMELINE.forEach(item => {
        const el = document.getElementById(item.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 260 && rect.bottom >= 200) setActiveId(item.id);
        }
      });
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const visibleActors = filter === "all" ? ACTORES : ACTORES.filter(a => a.cat === filter);

  return (
    <>
      <AgendaNav />

      {/* HERO */}
      <HeroSection id="inicio" style={{ paddingTop: "56px" }}>
        <HeroInner>
          <HeroContent>
            <Eyebrow>SU Noticias · Pablo Tedesco</Eyebrow>
            <HeroH1>La Agenda<br />De La <span>Censura</span></HeroH1>
            <RedBar />
            <Lead>Cómo el Estado uruguayo avanza sobre la libertad de expresión digital — y quién lo está impulsando.</Lead>
            <ScrollCTA href="#tesis" onClick={e => { e.preventDefault(); scrollToId("tesis"); }}>
              <Arrow>↓</Arrow>
              Empezar el recorrido
            </ScrollCTA>
          </HeroContent>
        </HeroInner>
        <HeroImageWrapper>
          <HeroImg src={agendaImg} alt="La Agenda de la Censura" />
        </HeroImageWrapper>
      </HeroSection>

      {/* TESIS */}
      <Section id="tesis">
        <EyebrowTag>El marco</EyebrowTag>
        <SectionTitle>El pretexto es siempre el mismo</SectionTitle>
        <SectionSub>Cada vez que el poder quiere decidir qué se puede decir, usa la misma palabra: "desinformación". En Uruguay ese proceso ya está en marcha, con nombre, apellido y respaldo internacional.</SectionSub>
        <ThesisRows>
          {TESIS.map((t, i) => <ThesisItem key={i} num={i + 1} title={t.title} text={t.text} />)}
        </ThesisRows>
      </Section>

      {/* CRONOLOGÍA */}
      <Section id="cronologia" style={{ background: "#050505" }}>
        <EyebrowTag>Parte I</EyebrowTag>
        <SectionTitle>Cronología de la censura</SectionTitle>
        <SectionSub>2023 — 2026: del documento técnico a la ley.</SectionSub>
        <TlNav>
          {TIMELINE.map(item => (
            <TlNodeBtn key={item.id} active={activeId === item.id} onClick={() => scrollTo(item.id)}>
              <TlDotNav active={activeId === item.id} />
              <TlYr>{item.year}</TlYr>
            </TlNodeBtn>
          ))}
        </TlNav>
        <TlLine>
          {TIMELINE.map(item => <TimelineItem key={item.id} item={item} activeId={activeId} />)}
        </TlLine>
      </Section>

      {/* GOÑI */}
      <GoniSection id="goni">
        <EyebrowTag>El ejecutor</EyebrowTag>
        <SectionTitle>Rodrigo Goñi</SectionTitle>
        <SectionSub>El político que tomó la agenda global y la bajó a tierra uruguaya.</SectionSub>
        <GoniWrap>
          <GoniName>RODRIGO GOÑI REYES</GoniName>
          <GoniRole>Diputado, Partido Nacional · Presidente de la Cámara de Representantes desde marzo de 2026</GoniRole>
          <QuoteCard><p>"Hoy Uruguay da un paso que pocas democracias del mundo han dado."</p></QuoteCard>
          <GoniList>
            <GoniLi>Presentó el proyecto que penaliza "deepfakes" en campaña electoral con hasta 6 años de prisión (2024).</GoniLi>
            <GoniLi>Co-firmó el proyecto que criminaliza "noticias falsas" sobre candidatos (2024).</GoniLi>
            <GoniLi>Elegido presidente de Diputados con 93 de 96 votos — la práctica unanimidad de la casta política (marzo 2026).</GoniLi>
            <GoniLi>Se reunió con delegaciones de Reino Unido y Australia para importar sus modelos de restricción de redes.</GoniLi>
            <GoniLi>Impulsa la consulta pública sobre plataformas y menores cuyo objetivo 4 ya prevé regulación explícita.</GoniLi>
            <GoniLi>Co-lanzó la consulta junto a Carolina Cosse (FA), borrando la diferencia entre oficialismo y oposición en este tema.</GoniLi>
          </GoniList>
        </GoniWrap>
      </GoniSection>

      {/* ACTORES */}
      <Section id="actores">
        <EyebrowTag>Parte II — El mapa</EyebrowTag>
        <SectionTitle>Los actores que sostienen la agenda</SectionTitle>
        <SectionSub>Una red de organismos internacionales, agencias estatales, ONGs y políticos que, cada uno desde su lugar, empuja en la misma dirección.</SectionSub>
        <FilterRow>
          {FILTERS.map(f => (
            <FilterBtn key={f.key} active={filter === f.key} onClick={() => setFilter(f.key)}>{f.label}</FilterBtn>
          ))}
        </FilterRow>
        <ActorGrid>
          {visibleActors.map(actor => (
            <ActorCard key={actor.num} onClick={() => setExpanded(expanded === actor.num ? null : actor.num)}>
              <ActorNum>{actor.num}</ActorNum>
              <ActorH4>{actor.title}</ActorH4>
              <ActorRole>{actor.role}</ActorRole>
              <ActorCat>{actor.cat === "internacional" ? "Organismos internacionales" : actor.cat === "estatal" ? "Agencias estatales" : actor.cat === "ong" ? "ONGs" : "Políticos"}</ActorCat>
              <ActorDesc open={expanded === actor.num}>{actor.desc}</ActorDesc>
              {expanded !== actor.num && <ActorHint>Ver detalle ▸</ActorHint>}
            </ActorCard>
          ))}
        </ActorGrid>
      </Section>

      {/* MEDIOS */}
      <MediaSection id="medios">
        <EyebrowTag>Parte III — El silencio que vale</EyebrowTag>
        <SectionTitle>La prensa que no cubrió la censura</SectionTitle>
        <SectionSub>Cuando el Estado regula los medios digitales, los medios analógicos ganan. El 23 de junio de 2026, el Parlamento lanzó el proceso que puede terminar en una ley sobre plataformas y contenidos.</SectionSub>
        <MediaIntro>
          <p><strong>Hecho verificado:</strong> la cobertura del lanzamiento de la consulta pública del 23 de junio de 2026 estuvo ausente en los principales medios uruguayos. Solo cubrieron el evento medios chicos como La Mañana y Mayoristas &amp; Mercado.<br /><br /><strong>Ángulo editorial:</strong> un proceso que puede terminar en la primera ley de regulación de plataformas digitales de Uruguay no existe para la prensa hegemónica.</p>
        </MediaIntro>
        <MediaGrid>
          {MEDIOS.map(m => (
            <MediaCard key={m.name}>
              <MediaH4>{m.name}</MediaH4>
              <MediaType>{m.type}</MediaType>
              <p style={{ color: "var(--muted)", fontSize: "13px", lineHeight: "1.55", margin: 0 }}>{m.text}</p>
            </MediaCard>
          ))}
        </MediaGrid>
        <MediaNote><strong>Nota metodológica:</strong> la ausencia de cobertura es un hecho verificado por búsqueda directa en los sitios de cada medio al momento del análisis. La interpretación sobre los motivos es postura editorial de SU Noticias, no un hecho afirmado como probado.</MediaNote>
      </MediaSection>

      {/* MODELOS */}
      <Section id="modelos">
        <EyebrowTag>Parte IV — Las referencias</EyebrowTag>
        <SectionTitle>Los modelos que Goñi quiere importar</SectionTitle>
        <SectionSub>Ningún proyecto local nace en el vacío. El Anexo bibliográfico oficial de la consulta cita estos cuatro casos como antecedentes comparados.</SectionSub>
        <ModelsGrid>
          {MODELOS.map(m => (
            <ModelCard key={m.flag}>
              <ModelFlag>{m.flag}</ModelFlag>
              <ModelH4>{m.title}</ModelH4>
              <ModelLaw>{m.law}</ModelLaw>
              <ModelP>{m.text}</ModelP>
              <ModelKey><strong>▸ </strong>{m.key}</ModelKey>
            </ModelCard>
          ))}
        </ModelsGrid>
        <ModelWarn><strong>Patrón común a todos los modelos:</strong> ninguno funcionó solo como protección de menores. Todos terminaron ampliando la capacidad del Estado de identificar usuarios, monitorear contenidos y establecer qué plataformas pueden operar y bajo qué condiciones.</ModelWarn>
      </Section>

      {/* CIERRE */}
      <ClosingSection>
        <ClosingH2>¿Quién decide<br />qué es <span>mentira</span>?</ClosingH2>
        <RedBar />
        <ClosingLead>Cuando el Estado define la verdad, la libertad de expresión deja de ser un derecho y pasa a ser un permiso. El proceso ya empezó. El informe llega al Parlamento en noviembre de 2026.</ClosingLead>
        <CTABox>
          <CTABtn to="/">← Volver al inicio</CTABtn>
          <CTAName>Pablo Tedesco</CTAName>
        </CTABox>
      </ClosingSection>

      <PageFooter>
        <Tagline>Análisis · Política · Libertad</Tagline>
        <div>Pablo Tedesco — Junio 2026</div>
      </PageFooter>
    </>
  );
};

export default AgendaCensuraPage;


