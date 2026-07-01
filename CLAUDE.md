# CLAUDE.md — digital-cv → Marca Personal Pablo Tedesco

## Objetivo del proyecto

Refactorizar este digital CV (actualmente un currículum clásico de dos columnas en azul/gris) en una **página de marca personal** con identidad visual fuerte, coherente con toda la presencia pública de Pablo Tedesco: desarrollador de software, analista político, creador de contenido, periodista digital y Social Media Manager.

El resultado debe verse como una **página de presentación de alto impacto**, no como un CV universitario. El modelo visual de referencia está en `D:\Contexto Claude\SU\Outputs\Interactivos\la-agenda-de-la-censura.html` — ese archivo fue construido en la misma sesión de trabajo y define el sistema de diseño, paleta, tipografía y patrones de componentes a replicar aquí.

---

## Stack actual (conservar)

- **React 16.8.6** — hooks ya disponibles (`useState`, `useEffect`)
- **styled-components 4.2.0** — para todo el estilo; migrar colores al sistema de variables CSS definido abajo
- **i18next + react-i18next** — mantener soporte ES/EN/PT; actualizar los textos de contenido
- **Webpack 4 + Babel** — build funcional, no tocar sin motivo
- **html2canvas + jsPDF** — mantener la funcionalidad de exportar PDF (comentada actualmente; reactivar cuando el diseño esté listo)
- **Font Awesome 4.7** — cargado en `public/index.html` vía CDN; disponible para iconos sociales

Comandos:
```
yarn start   # dev server con hot reload
yarn build   # producción en /dist
```

---

## Sistema de diseño — Paleta y tokens

Toda la UI debe usar estas variables CSS. En styled-components, declararlas en el GlobalStyle de `App.jsx` como variables CSS nativas (`:root { ... }`), no como props de tema, para coherencia con el HTML de referencia.

```css
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
```

**Fondo global:** `var(--black)` — NO gris claro.  
**Texto principal:** `var(--white)`.  
**Acentos:** `var(--red)` para énfasis, separadores, números, íconos activos.  
**Tarjetas:** `background: var(--card); border: 1px solid var(--border)`.

**Tipografía:** Arial / Helvetica sans-serif. Pesos: 400 (body), 700 (subtítulos), 900 (títulos, mayúsculas). Los títulos de sección van en `text-transform: uppercase`. Tamaños con `clamp()` para responsividad.

**Tagline de marca:** `Análisis · Política · Libertad`  
**Logo/firma:** `PABLO TEDESCO`

---

## Arquitectura de la página (secciones target)

Reemplazar el layout sidebar+content de CV por un scroll de sección única (single-page). El nav fijo ya está en el HTML de referencia — replicar ese patrón.

### Secciones en orden:

1. **Hero** — nombre grande, tagline, descripción de una línea, CTA de scroll. Ya existe el patrón en el HTML de referencia.

2. **Sobre mí** — quién es Pablo más allá del software: desarrollador, analista político, periodista digital, creador de contenido. Texto corto (3-4 líneas), no una lista de habilidades.

3. **Proyectos / Trabajo** — no "Experiencia laboral" lineal sino proyectos concretos agrupados por área:
   - **Desarrollo de software** (Scanntech, VU Inc., TedescoDev, Broken Rubik, Middlesoft)
   - **Medios y comunicación** (SU Noticias — fundador/Community Manager; LLA Uruguay — Social Media Manager)
   - **Análisis político / contenido** (La Agenda de la Censura — YouTube, newsletter, investigación)

4. **Habilidades** — rediseñar la sección de skills como grid visual, no una lista plana. Mantener los datos de `api.skills`.

5. **Stack técnico** — subset de skills orientado a tech: frontend, backend, testing, infra.

6. **Educación y certificaciones** — mantener datos, simplificar visualmente.

7. **Contacto / Social** — links a redes, email, CTA final.

---

## Datos a actualizar

### `src/hooks/useGetDara.js`

**profession** (actual): `"Software Developer"`  
**profession** (target): `"Desarrollador · Analista Político · Creador de Contenido"`

**bio** (actual): `"Soy un programador al que le encantan los nuevos desafíos..."`  
**bio** (target — redactar en tono de marca, no de CV):
```
Desarrollador de software con más de 6 años de experiencia. Fundador de SU Noticias (3M de alcance orgánico en Facebook). Analista político y creador de contenido sobre libertad individual, instituciones y poder en Uruguay.
```

**social** — agregar YouTube: `https://www.youtube.com/@PabloTedesco` (verificar handle exacto con Pablo)

**experience[6]** — Community Manager en SU Noticias (2015-2019): actualizar descripción para reflejar escala (3M alcance orgánico) y rol fundador.

### `src/i18n/es.js`

Actualizar `profession`, `bio` y todas las `jobDescription` para que el tono sea de marca personal, no de CV técnico. Ver datos en `useGetDara.js` como fuente de verdad.

---

## Patrones de componentes

### Nav fijo
```
position: fixed; top: 0; z-index: 100;
background: rgba(0,0,0,0.92); backdrop-filter: blur(6px);
border-bottom: 1px solid var(--border);
```
Links: color `var(--muted)` → hover `var(--white)` → active `var(--red)` con `border-bottom: 2px solid var(--red)`.

### Hero
```
min-height: 92vh;
background: radial-gradient(circle at 85% 15%, rgba(225,6,0,0.18), transparent 45%),
            linear-gradient(180deg, #000 0%, #060606 100%);
```
H1: `font-size: clamp(42px, 8vw, 92px); font-weight: 900; text-transform: uppercase; line-height: 0.98`.  
Barra roja de acento: `width: 55px; height: 8px; background: var(--red)`.

### Tarjetas de proyecto / experiencia
```
background: var(--card);
border: 1px solid var(--border);
border-radius: 4px;
padding: 26px 28px;
transition: transform .25s, border-color .25s;
```
Hover: `transform: translateY(-5px); border-color: var(--red)`.

### Quote / cita destacada
```
border-left: 5px solid var(--red);
padding: 24px 30px;
background: var(--card);
font-size: 21px; font-weight: 700; font-style: italic;
```

### Eyebrow tags (etiquetas de sección)
```
color: var(--red); font-weight: 800; font-size: 13px;
letter-spacing: 2px; text-transform: uppercase;
```

### Fade-in al scroll
Usar IntersectionObserver con clase `.in` para animar entradas. Patrón exacto en el HTML de referencia (sección `<script>`).

---

## Estructura de archivos actual

```
src/
├── assets/img/Pablo Tedesco.jpg   ← foto de perfil (usar en hero)
├── components/
│   ├── About.jsx       ← refactorizar → HeroSection.jsx
│   ├── Experience.jsx  ← refactorizar → ProjectsSection.jsx
│   ├── Education.jsx   ← mantener, restyling
│   ├── Certificates.jsx← mantener, restyling
│   ├── Skills.jsx      ← mantener, rediseñar grid
│   ├── Social.jsx      ← mantener
│   ├── Referencias.jsx ← evaluar si se incluye en la marca personal
│   ├── Sidebar.jsx     ← eliminar (layout nuevo no tiene sidebar)
│   ├── Info.jsx        ← evaluar si se mantiene o elimina
│   └── Main.jsx        ← refactorizar layout a full-width
├── containers/App.jsx  ← orquestar nuevas secciones
├── hooks/useGetDara.js ← fuente de datos (actualizar contenido)
├── i18n/               ← actualizar textos
└── styled/             ← componentes de estilo reutilizables
```

**Renombres sugeridos al refactorizar:**
- `About.jsx` → `HeroSection.jsx`
- `Info.jsx` → puede eliminarse (era wrapper del contenido principal)
- `Sidebar.jsx` → eliminar
- `Main.jsx` → refactorizar a `PageWrapper.jsx` (full-width, no grid de 2 col)

---

## Prioridad de implementación

1. **GlobalStyle** — aplicar paleta de variables CSS, font, background negro, quitar Lato/font-face azul.
2. **Nav fijo** — nuevo componente `Nav.jsx` con el patrón definido.
3. **Hero** — refactorizar `About.jsx` → nuevo `HeroSection.jsx`.
4. **Layout** — `Main.jsx` deja de ser 2 columnas y pasa a full-width con secciones apiladas.
5. **Sección Proyectos** — refactorizar `Experience.jsx` con agrupación por área.
6. **Skills** — rediseñar como grid visual.
7. **Educación + Certs** — restyling manteniendo datos.
8. **Footer / Contacto** — sección final con links sociales.
9. **PDF export** — reactivar con diseño nuevo.
10. **i18n** — actualizar textos en los 3 idiomas.

---

## Lo que NO cambiar

- Las dependencias del `package.json` — funciona, no romper.
- La lógica de `i18next` — el sistema de traducción está bien implementado.
- Los datos de educación, certificaciones y skills en `useGetDara.js` — solo actualizar profession, bio y el item de SU Noticias.
- El favicon en `/public`.

---

## Referencia visual

El HTML de referencia visual completo (sistema de diseño, componentes, animaciones) está en:
```
D:\Contexto Claude\SU\Outputs\Interactivos\la-agenda-de-la-censura.html
```

No es necesario copiarlo literalmente, pero todas las decisiones de diseño de este proyecto deben ser coherentes con ese archivo. Si hay duda sobre un color, spacing, animación o patrón de componente, el HTML de referencia es la fuente de verdad.

---

## Contexto adicional (Pablo Tedesco)

- **GitHub:** https://github.com/tedesco8
- **LinkedIn:** https://www.linkedin.com/in/pablo-tedesco/
- **Facebook:** https://www.facebook.com/tedescorodriguez/
- **Twitter/X:** https://twitter.com/TedescoPablo
- **Foto:** `src/assets/img/Pablo Tedesco.jpg` (también disponible en Cloudinary: `https://res.cloudinary.com/ddzlqebet/image/upload/v1707776594/pablo-tedesco-profile.jpg`)
- **Ubicación:** Montevideo, Uruguay
- **Idiomas activos del sitio:** español (principal), inglés, portugués
