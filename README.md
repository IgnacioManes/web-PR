# Pared Roja

Sitio institucional desarrollado con Astro y contenido administrable desde Sanity.

## Configuración

1. Copiar `.env.example` como `.env` y completar los datos reales.
2. Instalar dependencias con `npm install`.
3. Iniciar el sitio con `npm run dev`.
4. Crear un proyecto gratuito en Sanity y copiar su ID en las variables correspondientes.
5. Iniciar el panel editorial con `npm run studio`.
6. Crear un formulario gratuito en Formspree y guardar su endpoint en `PUBLIC_FORMSPREE_ENDPOINT`.

## Iniciar en Windows sin Node.js global

Desde PowerShell, dentro de la carpeta del proyecto:

```powershell
.\dev.cmd
```

El lanzador utiliza el runtime incluido con Codex. Como alternativa permanente, instalá Node.js LTS y usá `npm run dev`.

Si el servidor de desarrollo no puede iniciarse dentro del entorno de Codex, usá la vista estable:

```powershell
.\preview.cmd
```

Después abrí `http://127.0.0.1:4321/`. Esta opción recompila el sitio antes de mostrarlo.

Sin credenciales de Sanity el sitio utiliza contenido inicial local, por lo que siempre puede compilarse y verse completo.
