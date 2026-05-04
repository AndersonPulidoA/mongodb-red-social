[
 {
  $lookup: {
    from: "usuarios",
    localField: "usuario_id",
    foreignField: "_id",
    as: "usuario_info"
  }
 }
]
