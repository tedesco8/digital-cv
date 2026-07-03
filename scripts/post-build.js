const fs = require('fs');
const path = require('path');
require('dotenv').config();

const SITE_URL = (process.env.SITE_URL || 'https://pablo.tedesco.es').replace(/\/$/, '');

// Resolve the agenda image URL from dist/images (hash in filename is deterministic)
const imagesDir = path.join(__dirname, '../dist/images');
let agendaImgUrl = '';
if (fs.existsSync(imagesDir)) {
  const found = fs.readdirSync(imagesDir).find(f => f.includes('agenda-censura-transparente'));
  if (found) agendaImgUrl = `${SITE_URL}/images/${found}`;
}

// Generate dist/agenda-de-la-censura/index.html
const outDir = path.join(__dirname, '../dist/agenda-de-la-censura');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const html = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>La Agenda de la Censura — Pablo Tedesco</title>
  <meta name="description" content="Cómo el Estado uruguayo avanza sobre la libertad de expresión digital — y quién lo está impulsando." />
  <!-- Open Graph -->
  <meta property="og:type" content="article" />
  <meta property="og:url" content="${SITE_URL}/agenda-de-la-censura/" />
  <meta property="og:site_name" content="Pablo Tedesco" />
  <meta property="og:title" content="La Agenda de la Censura — Pablo Tedesco" />
  <meta property="og:description" content="Cómo el Estado uruguayo avanza sobre la libertad de expresión digital — y quién lo está impulsando." />
  ${agendaImgUrl ? `<meta property="og:image" content="${agendaImgUrl}" />` : ''}
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@TedescoPablo" />
  <meta name="twitter:creator" content="@TedescoPablo" />
  <meta name="twitter:title" content="La Agenda de la Censura — Pablo Tedesco" />
  <meta name="twitter:description" content="Cómo el Estado uruguayo avanza sobre la libertad de expresión digital — y quién lo está impulsando." />
  ${agendaImgUrl ? `<meta name="twitter:image" content="${agendaImgUrl}" />` : ''}
  <!-- Redirect to React app -->
  <meta http-equiv="refresh" content="0;url=/#/agenda-de-la-censura" />
</head>
<body>
  <script>window.location.replace('/#/agenda-de-la-censura');</script>
</body>
</html>`;

fs.writeFileSync(path.join(outDir, 'index.html'), html, 'utf8');
console.log('OG redirect: dist/agenda-de-la-censura/index.html');
if (agendaImgUrl) console.log('OG image:   ', agendaImgUrl);
else console.warn('OG image:    not found in dist/images — build first');
