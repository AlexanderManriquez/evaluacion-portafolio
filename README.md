# Portafolio — Alexander Manríquez

Este repositorio contiene la versión estática del portafolio de Alexander Manríquez. Está construido inicialmente en HTML/CSS/JS y recientemente migrado para usar Tailwind CSS compilado localmente.

## Resumen

- Sitio: portafolio personal (index.html) con secciones: Hero, About, Skills, Projects, Contact, Footer.
- Estilos: Tailwind CSS (compilado localmente) + estilos personalizados en `assets/css/styles.css`.
- JS: `assets/js/script.js` para navegación, formulario y comportamiento mínimo.

## Requisitos (local)

- Node.js (recomiendo LTS, p.ej. 18+)
- npm (v9+ normalmente incluido con Node)

## Instalación y uso

1. Clona el repositorio:

```bash
git clone https://github.com/AlexanderManriquez/evaluacion-portafolio.git
cd evaluacion-portafolio
```

2. Instala dependencias (solo para Tailwind):

```bash
npm install
```

3. Generar CSS compilado (producción):

```bash
npm run build:css
```

4. Durante desarrollo (auto-rebuild del CSS):

```bash
npm run watch:css
```

5. Abre `index.html` en el navegador (o sirve con un servidor estático si quieres `live reload`).

## Estructura relevante

- `index.html` — página principal.
- `assets/css/input.css` — archivo de entrada para Tailwind.
- `assets/css/styles.css` — CSS compilado (generado por `npm run build:css`).
- `assets/js/script.js` — JS para toggles y comportamiento del formulario.
- `assets/img/` — imágenes del portafolio.
- `tailwind.config.js` — configuración de Tailwind (rutas `content` y paleta extendida).
- `package.json` — scripts `build:css` y `watch:css`.

## Deploy en Vercel

1. Añade/actualiza `vercel.json` (ya incluido):

```json
{
  "buildCommand": "npm run build:css"
}
```

2. Conecta el repo a Vercel. En cada deploy Vercel ejecutará `npm install` y `npm run build:css` automáticamente.

## Buenas prácticas ya aplicadas

- Tailwind compilado localmente (purge de clases en producción) — reduce tamaño final.
- Única fuente cargada (`Space Grotesk`) en vez de múltiples familias.
- Imágenes en `webp` cuando se dispone.

## TODOs / Plan de mejoras (priorizado: corto plazo → medio → largo)

### Prioridad Alta (corto plazo, 1–2 semanas)

- H1: Asegurar que todas las imágenes del sitio estén en formato moderno y optimizadas (`.webp`/`.avif`) y tengan `srcset` y `width/height` para evitar layout shift.
- H2: Añadir lazy-loading en imágenes de proyectos: `loading="lazy"`.
- H3: Mejorar accesibilidad: etiquetas `aria-*`, roles en nav y botones, contraste de color y focus styles visibles.
- H4: Añadir meta tags para SEO (meta description, Open Graph, Twitter Card) en `index.html`.
- H5: Validar y limpiar iconos de Font Awesome (usar subset si es posible) o reemplazar por SVGs inline para los iconos principales.

### Prioridad Media (2–6 semanas)

- M1: Convertir la sección de `Proyectos` para que al hacer click en una tarjeta se abra una página de detalle por proyecto. Opciones:
  - `A` (rápido): generar páginas estáticas por proyecto (`projects/klik-market.html`, `projects/cine-webflash.html`, ...) con plantilla común.
  - `B` (escalable): migrar a SPA con Vue y usar Vue Router para `/#/projects/:slug` o ` /projects/:slug`.
- M2: Añadir JSON o YAML con los datos de los proyectos (`data/projects.json`) para evitar repetir contenido en HTML y facilitar migración a SPA.
- M3: Implementar un formulario de contacto real (usar Formspree, Netlify Forms o un servidor pequeño con SendGrid) y validaciones en frontend.
- M4: Añadir analítica ligera (por ejemplo Plausible o Google Analytics con consentimiento) y seguimiento de eventos (visitas a proyectos, clicks en links).

### Prioridad Baja (6–12 semanas)

- L1: Migración a SPA con Vue 3: estructura de componentes, router, lazy-loading de componentes y code-splitting.
  - Componentes sugeridos: `Navbar`, `Hero`, `About`, `Skills`, `ProjectsList`, `ProjectDetail`, `Contact`, `Footer`.
  - Usar `Vite` como bundler (rápido y recomendado para Vue 3).
- L2: Implementar pruebas básicas (unitarias con Vitest / Jest) para componentes críticos.
- L3: Automatizar CI: pipeline en GitHub Actions para `npm run build:css`, lint y tests.
- L4: Añadir i18n (español / inglés) para ampliar alcance.
