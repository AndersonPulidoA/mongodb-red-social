*/Contar documentos:
  
[
 {
  $count: "total_publicaciones"
 }
]

*/Resultado esperado:

{ "total_publicaciones": 100 }


*/Promedio de likes:
  
[
 {
  $group: {
    _id: null,
    promedio_likes: { $avg: "$likes" }
  }
 }
]

*/Suma de comentarios:
  
[
 {
  $group: {
    _id: null,
    total_comentarios: { $sum: "$comentarios" }
  }
 }
]


*/Likes por usuario (análisis más completo):

  
[
 {
  $group: {
    _id: "$usuario_id",
    total_likes: { $sum: "$likes" }
  }
 }
]
