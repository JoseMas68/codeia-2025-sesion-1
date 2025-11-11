# VerFlix

Plataforma moderna de streaming de películas y series construida con React y la API de TMDB.

## Características

- 🎬 Hero slider a pantalla completa con contenido destacado
- 📱 Diseño responsive y moderno
- 🎨 Interfaz inspirada en plataformas de streaming profesionales
- 🔄 Sliders horizontales con autoplay
- 🎯 Páginas de detalle completas con información de películas y series
- ⭐ Integración completa con TMDB API
- 🎭 Información de reparto y contenido similar
- 🎥 Enlaces a trailers de YouTube

## Stack Tecnológico

- React 19.2.0
- React Router DOM 7.9.5
- Tailwind CSS 3.4.18
- Swiper 12.0.3
- TMDB API v3

## Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/verflix-app.git
cd verflix-app
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura las variables de entorno:
```bash
cp .env.example .env
```

4. Agrega tu API Key de TMDB en el archivo `.env`:
```
REACT_APP_TMDB_API_KEY=tu_api_key_aqui
```

Puedes obtener una API Key gratuita en [TMDB](https://www.themoviedb.org/settings/api).

## Scripts Disponibles

### `npm start`

Inicia la aplicación en modo desarrollo.
Abre [http://localhost:3000](http://localhost:3000) para verla en tu navegador.

### `npm test`

Lanza el test runner en modo interactivo.

### `npm run build`

Construye la aplicación para producción en la carpeta `build`.

## Estructura del Proyecto

```
src/
├── components/     # Componentes reutilizables
├── pages/         # Páginas de la aplicación
├── services/      # Servicios y APIs
└── App.js         # Componente principal
```

## Documentación

- [Arquitectura](docs/arquitectura.md) - Documentación detallada de la arquitectura
- [CHANGELOG](CHANGELOG.md) - Historial de cambios

## Versión

Versión actual: 0.2.0

## Licencia

Este proyecto es privado.
