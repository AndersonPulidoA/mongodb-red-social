# Proyecto MongoDB – Red Social

## Descripción

Este proyecto implementa una base de datos NoSQL utilizando MongoDB para simular un sistema de publicaciones de una red social. Se aplican consultas básicas, filtros, operaciones de agregación y relaciones entre colecciones.

---

## Objetivo

Aplicar técnicas de manipulación y análisis de datos en MongoDB, incluyendo consultas, filtros, joins y estadísticas.

---

## Estructura de la Base de Datos

### Base de datos:

`red_social`

### Colecciones:

* usuarios
* publicaciones

---

## Inserción de datos

### Usuarios

```js
db.usuarios.insertMany([
 { "_id":1,"nombre":"Ana","edad":22,"pais":"Colombia"},
 { "_id":2,"nombre":"Luis","edad":30,"pais":"México"}
])
```

---

### Publicaciones

```js
db.publicaciones.insertMany([
 { "usuario_id":1,"contenido":"Post 1","likes":5,"comentarios":2},
 { "usuario_id":2,"contenido":"Post 2","likes":15,"comentarios":5}
])
```

---

## Consultas Básicas

### Selección

```js
db.usuarios.find()
```

### Actualización

```js
db.usuarios.updateOne(
 { _id: 1 },
 { $set: { edad: 23 } }
)
```

### Eliminación

```js
db.usuarios.deleteOne({ _id: 2 })
```

---

## Filtros

```js
db.publicaciones.find({ likes: { $gt: 20 } })
```

---

## 🔗 Join (Lookup)

```js
db.publicaciones.aggregate([
 {
  $lookup: {
   from: "usuarios",
   localField: "usuario_id",
   foreignField: "_id",
   as: "usuario_info"
  }
 }
])
```

---

## Agregaciones

### Conteo

```js
db.publicaciones.countDocuments()
```

### Promedio de likes

```js
db.publicaciones.aggregate([
 {
  $group: {
   _id: null,
   promedio_likes: { $avg: "$likes" }
  }
 }
])
```

### Suma de comentarios

```js
db.publicaciones.aggregate([
 {
  $group: {
   _id: null,
   total_comentarios: { $sum: "$comentarios" }
  }
 }
])
```

---

## Resultados

Se logró:

* Insertar más de 100 documentos
* Realizar consultas con filtros
* Aplicar relaciones entre colecciones
* Obtener métricas estadísticas

---

## Tecnologías usadas

* MongoDB
* MongoDB Compass
* GitHub
* JavaScritp

---

## Autor

Anderson Pulido A.
