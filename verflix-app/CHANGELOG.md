# Changelog

Todos los cambios notables en este proyecto serán documentados en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.0.0/),
y este proyecto adhiere a [Semantic Versioning](https://semver.org/lang/es/).

## [0.2.0] - 2025-11-11

### Añadido
- Hero slider a pantalla completa con autoplay en la página principal
- Componente MovieSlider con navegación horizontal y autoplay
- Página de detalle de películas y series con información completa
- Sistema de navegación con React Router
- Integración completa con API de TMDB
- Secciones de contenido: Tendencias del Día, Tendencias de la Semana, Películas Populares, Series Populares
- Tarjetas de películas clickeables con efecto hover
- Información detallada: reparto, trailer, contenido similar, géneros, calificación
- Diseño responsive para todos los tamaños de pantalla
- Configuración de Tailwind CSS v3 con colores personalizados (azul y blanco)
- Slider con librería Swiper para mejor experiencia de usuario

### Componentes Creados
- `Hero.js` - Slider hero con películas destacadas
- `MovieSlider.js` - Slider horizontal de películas con autoplay
- `MovieCard.js` - Tarjeta individual de película/serie
- `MovieGrid.js` - Grid de películas
- `HomePage.js` - Página principal con hero y sliders
- `MovieDetailPage.js` - Página de detalle de contenido

### Servicios
- `tmdbApi.js` - Servicio completo de integración con TMDB API
  - getPopularMovies()
  - getPopularTVShows()
  - getTrending()
  - getMovieDetails()
  - getTVShowDetails()
  - searchMulti()
  - getImageUrl()

### Configuración
- Configuración de variables de entorno para TMDB API
- Tailwind CSS v3 con tema personalizado
- React Router para navegación entre páginas

## [0.1.0] - 2025-11-11

### Añadido
- Configuración inicial del proyecto con Create React App
- Estructura básica de la aplicación
- Configuración de Tailwind CSS
