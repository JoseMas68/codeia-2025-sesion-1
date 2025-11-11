# Arquitectura de VerFlix

## Descripción General

VerFlix es una aplicación web de streaming de películas y series construida con React, utilizando la API de TMDB (The Movie Database) para obtener información de contenido multimedia.

## Stack Tecnológico

- **Frontend Framework**: React 19.2.0
- **Routing**: React Router DOM 7.9.5
- **Estilos**: Tailwind CSS 3.4.18
- **Slider/Carousel**: Swiper 12.0.3
- **API**: TMDB API v3
- **Build Tool**: React Scripts 5.0.1

## Estructura del Proyecto

```
verflix-app/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/          # Componentes reutilizables
│   │   ├── Hero.js         # Slider hero principal
│   │   ├── MovieSlider.js  # Slider horizontal de películas
│   │   ├── MovieCard.js    # Tarjeta de película individual
│   │   └── MovieGrid.js    # Grid de películas
│   ├── pages/              # Páginas de la aplicación
│   │   ├── HomePage.js     # Página principal
│   │   └── MovieDetailPage.js  # Página de detalle
│   ├── services/           # Servicios y APIs
│   │   └── tmdbApi.js      # Cliente de TMDB API
│   ├── App.js              # Componente principal con rutas
│   ├── App.css
│   ├── index.js            # Punto de entrada
│   └── index.css           # Estilos globales con Tailwind
├── docs/                   # Documentación
├── .env                    # Variables de entorno
├── .env.example           # Ejemplo de variables de entorno
├── package.json
├── tailwind.config.js     # Configuración de Tailwind
└── postcss.config.js      # Configuración de PostCSS
```

## Arquitectura de Componentes

### Componentes de Presentación

1. **Hero** (`components/Hero.js`)
   - Slider a pantalla completa con autoplay
   - Muestra 5 películas destacadas
   - Incluye backdrop, título, calificación, año y sinopsis
   - Botones de acción: "Ver Ahora" y "Más Info"

2. **MovieSlider** (`components/MovieSlider.js`)
   - Slider horizontal responsive
   - Autoplay con pausa en hover
   - Navegación con flechas
   - 2-6 películas visibles según viewport

3. **MovieCard** (`components/MovieCard.js`)
   - Tarjeta individual de película/serie
   - Póster, título, año y calificación
   - Clickeable para navegar a detalle
   - Efecto hover con escala

4. **MovieGrid** (`components/MovieGrid.js`)
   - Grid responsive de películas
   - Layout adaptativo según tamaño de pantalla

### Páginas

1. **HomePage** (`pages/HomePage.js`)
   - Hero slider con trending del día
   - Sección "Tendencias de la Semana"
   - Sección "Películas Populares"
   - Sección "Series Populares"
   - Carga de datos en paralelo

2. **MovieDetailPage** (`pages/MovieDetailPage.js`)
   - Hero con backdrop
   - Información completa del contenido
   - Reparto (primeros 6 actores)
   - Trailer de YouTube
   - Contenido similar
   - Navegación de regreso

## Flujo de Datos

1. **Carga Inicial**
   ```
   HomePage → tmdbApi → TMDB API
   ↓
   setState (popularMovies, trendingContent, etc.)
   ↓
   Renderizado de Hero y MovieSliders
   ```

2. **Navegación a Detalle**
   ```
   Click en MovieCard → navigate(`/${type}/${id}`)
   ↓
   MovieDetailPage → tmdbApi.getMovieDetails/getTVShowDetails
   ↓
   Renderizado con información completa
   ```

## Servicios y APIs

### TMDB API Service (`services/tmdbApi.js`)

Funciones disponibles:
- `getPopularMovies(page)` - Películas populares
- `getPopularTVShows(page)` - Series populares
- `getTrending(mediaType, timeWindow)` - Contenido en tendencia
- `getMovieDetails(movieId)` - Detalles de película
- `getTVShowDetails(tvId)` - Detalles de serie
- `searchMulti(query, page)` - Búsqueda general
- `getImageUrl(path, size)` - Construcción de URLs de imágenes

### Configuración de API

Variables de entorno requeridas:
```
REACT_APP_TMDB_API_KEY=tu_api_key
REACT_APP_TMDB_API_URL=https://api.themoviedb.org/3
REACT_APP_TMDB_IMAGE_BASE_URL=https://image.tmdb.org/t/p
```

## Sistema de Rutas

```javascript
/ → HomePage
/:type/:id → MovieDetailPage
  - type: 'movie' | 'tv'
  - id: ID del contenido en TMDB
```

## Tema y Estilos

### Colores Personalizados
```javascript
primary: {
  DEFAULT: '#1E40AF',  // Azul
  light: '#3B82F6',
  dark: '#1E3A8A',
}
```

### Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## Optimizaciones

1. **Carga de Datos**: Peticiones en paralelo con `Promise.all()`
2. **Imágenes**: Uso de diferentes tamaños según contexto (w300, w500, original)
3. **Navigation**: React Router para SPA sin recargas
4. **UX**: Autoplay con pausas en interacción del usuario
5. **Performance**: Lazy loading de imágenes nativo del navegador

## Próximas Mejoras

- Funcionalidad de búsqueda
- Sistema de favoritos
- Filtros por género
- Modo oscuro/claro
- Internacionalización (i18n)
- Testing unitario e integración
