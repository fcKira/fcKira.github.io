# Portfolio de Franco Correia

Sitio hecho con Jekyll y publicado con GitHub Pages. GitHub compila el sitio solo cada vez que subes un cambio, así que no necesitas instalar nada.

## Estructura

```
_config.yml          Datos generales: nombre, email, links, dirección del sitio
_projects/           Un archivo .md por proyecto (lo que más vas a tocar)
_layouts/            Plantillas de página (el "prefab" de cada página)
_includes/           Piezas reutilizables: header, footer, tarjeta de proyecto
assets/css/style.css Diseño y colores (la paleta está arriba de todo)
assets/img/          Tu foto, el ícono y la imagen para compartir
assets/img/projects/ Capturas y portadas de los proyectos
assets/files/        El PDF del CV
index.html           Home
projects.html        Página "Projects"
about.html           Página "About"
```

## Agregar un proyecto nuevo

1. Copia cualquier archivo de `_projects/` y renómbralo, por ejemplo `mi-juego.md`. El nombre del archivo es la dirección de la página: `/projects/mi-juego/`.
2. Edita los datos de arriba, entre las líneas `---`:

```yaml
---
title: Mi Juego
summary: Una frase que explique el juego.
featured: true          # true = aparece en el Home; false = va a "Earlier projects"
order: 6                # orden dentro de su grupo (1 va primero)
role: Solo developer
team: 3 people          # opcional
platform: PC
engine: Unity · C#
year: 2026
youtube: dQw4w9WgXcQ    # opcional: solo el ID del video, lo que va después de "v=" en el link
cover: /assets/img/projects/mi-juego.png   # opcional: portada de la tarjeta y de la página
image: /assets/img/projects/mi-juego.png   # opcional: imagen al compartir el link (pon la misma)
gallery:                # opcional: capturas al final de la página
  - /assets/img/projects/mi-juego-1.png
  - /assets/img/projects/mi-juego-2.png
links:                  # opcional: botones (el primero sale resaltado)
  - label: Google Play
    url: https://play.google.com/...
nda: true               # opcional: muestra el aviso de NDA
---
```

3. Debajo de la segunda línea `---` escribe el texto de la página en Markdown, con la sección `## What I built`.
4. Súbelo. En un minuto aparece la página, la tarjeta en el Home (si `featured: true`) y la entrada en "Projects".

Cualquier campo que no uses, bórralo o déjalo con `#` adelante (así queda comentado).

## Agregar imágenes

- Sube las imágenes a `assets/img/projects/`.
- Usa imágenes apaisadas (16:9), por ejemplo de 1280 × 720, para que las tarjetas queden parejas.
- Mejor en `.jpg` o `.webp` y de menos de 500 KB cada una, así el sitio carga rápido.
- Mientras un proyecto no tenga `cover`, la tarjeta muestra un diseño de reemplazo con el nombre.

## Cambiar otras cosas

- **Email, LinkedIn, GitHub o la dirección del sitio:** en `_config.yml`.
- **Colores:** las variables al principio de `assets/css/style.css`.
- **CV:** reemplaza `assets/files/Franco_Correia_CV.pdf` por el nuevo con el mismo nombre.
- **Foto:** reemplaza `assets/img/franco.jpg` (cuadrada).

## Si algo falla

Si subiste un cambio y la página no se actualiza, entra al repositorio, abre la pestaña **Actions** y mira el último intento: si está en rojo, ahí dice qué archivo tiene el error. Casi siempre es un dato mal escrito entre las líneas `---` (por ejemplo, falta un espacio después de los dos puntos o una comilla sin cerrar).
