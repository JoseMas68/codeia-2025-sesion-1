# Arquitectura (Legacy)

## Diagrama

```mermaid
graph TD;
    Frontend -->|API REST| Backend
    Backend -->|API TMDB| TMDB
    Backend --> DB[(Base de datos)]
```

## Responsabilidades
- **Frontend:** Interfaz de usuario, consumo de API propia.
- **Backend:** Orquestación, normalización de datos, persistencia.
- **DB:** Almacenamiento normalizado.
- **TMDB:** Fuente externa de datos.
