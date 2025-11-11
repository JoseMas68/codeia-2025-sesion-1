# Endpoints de TMDB

## Planificación técnica y reglas de consumo TMDB

| Endpoint                | Descripción                | Límite de uso | Ejemplo JSON |
- Instala: node, react, dotenv, tailwindcss, shadcn/ui.
- Crea `.env` con `TMDB_API_KEY`.

|------------------------|----------------------------|---------------|--------------|
- Autenticación: `/authentication`
- Búsqueda: `/search/movie`, `/search/tv`
- Detalles: `/movie/{movie_id}`, `/tv/{tv_id}`
- Populares/tendencias: `/movie/popular`, `/tv/popular`, `/trending/{media_type}/{time_window}`
- Imágenes/trailers: `/movie/{movie_id}/images`, `/movie/{movie_id}/videos`
- Géneros: `/genre/movie/list`, `/genre/tv/list`
- Recomendaciones/similares: `/movie/{movie_id}/recommendations`, `/tv/{tv_id}/recommendations`, `/movie/{movie_id}/similar`, `/tv/{tv_id}/similar`
- Actores: `/person/{person_id}`

| /movie/popular         | Películas populares        | 40/min        | `{ "results": [...] }` |
1. Consumo de API TMDB vía Node.js usando dotenv para la API Key.
2. Funciones para obtener listados, detalles, géneros, búsqueda, recomendaciones, imágenes y trailers.
3. React 18 legacy: componentes de clase o función, contexto global para datos TMDB y usuario.
4. UI con Tailwind y Shadcn:
	- Navbar
	- Card de película/serie
	- Grid/Listado con filtros comunes (género, año, popularidad)
	- Modal para detalles/trailers
	- Buscador
	- Dropdown moderno para filtros
	- Paginación
	- Perfil de usuario
	- Loader/skeleton de carga
	- Soporte tema claro/oscuro
5. Flujo: carga inicial de populares y géneros, búsqueda, filtrado, detalles en modal, paginación, recomendaciones.
6. Buenas prácticas: API Key fuera del frontend, manejo de errores/loading, documentación de endpoints y componentes.

| /movie/{id}            | Detalle de película        | 40/min        | `{ "id": 123, "title": "..." }` |
- Usar la API Key desde dotenv en backend/proxy.
- Implementar filtros comunes en listados (género, año, popularidad).
- Paginación en todos los listados.
- Skeleton de carga para mejorar UX.
- Dropdowns modernos para selección de filtros.
- Soporte de colores claro/oscuro en toda la UI.
| /search/movie          | Buscar películas           | 40/min        | `{ "results": [...] }` |
| /genre/movie/list      | Listado de géneros         | 40/min        | `{ "genres": [...] }` |
| /person/{id}           | Detalle de persona         | 40/min        | `{ "id": 456, "name": "..." }` |

**Nota:** Los límites pueden variar según el plan TMDB. Consultar la [documentación oficial](https://developer.themoviedb.org/docs/getting-started).
