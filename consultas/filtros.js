*/Filtro por condición (likes > 20)

{ likes: { $gt: 20 } }


*/Filtro combinado

{ 
  likes: { $gt: 15 },
  comentarios: { $gt: 5 }
}
