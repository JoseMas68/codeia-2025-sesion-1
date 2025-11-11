# Modelo de Datos Normalizado

## Entidades principales
- Película
- Género
- Persona (actor/director)

## Ejemplo de normalización
```json
{
  "peliculas": [
    { "id": 1, "titulo": "Matrix", "generos": [1,2], "actores": [10,11] }
  ],
  "generos": [
    { "id": 1, "nombre": "Acción" },
    { "id": 2, "nombre": "Ciencia Ficción" }
  ],
  "personas": [
    { "id": 10, "nombre": "Keanu Reeves" }
  ]
}
```

## Reglas de transformación
- Separar entidades en tablas independientes.
- Usar IDs para relaciones.
- Eliminar duplicados y datos innecesarios.
