
#Consultasbásicas

#Selección
db.publicaciones.find()

#Actualización
db.publicaciones.updateOne(
 {usuario_id: 1},
 {$set: {likes: 20}}
)

#Eliminación
db.publicaciones.deleteOne({usuario_id: 2})
