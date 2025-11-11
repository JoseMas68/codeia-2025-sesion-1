# Reglas para consumo de datos TMDB y UI

## Consumo de datos
- Usar Node.js y dotenv para gestionar la API Key de TMDB.
- Realizar peticiones HTTP a los endpoints principales de TMDB.
- Mantener la API Key fuera del frontend (usar backend/proxy).
- Implementar funciones para obtener listados, detalles, géneros, búsqueda, recomendaciones, imágenes y trailers.

## UI y componentes
- Utilizar React 18 legacy (componentes de clase o función, sin server components).
- Configurar Tailwind CSS y Shadcn UI.
- Componentes necesarios:
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

## Reglas de UX
- Filtros comunes en listados: género, año, popularidad.
- Paginación en todos los listados.
- Skeleton de carga para mejorar experiencia de usuario.
- Dropdowns modernos para selección de filtros.
- Soporte de colores claro/oscuro en toda la UI.

## Buenas prácticas
- Manejo de errores y loading states.
- Documentar endpoints y componentes usados.
- Mantener la arquitectura modular y escalable.
