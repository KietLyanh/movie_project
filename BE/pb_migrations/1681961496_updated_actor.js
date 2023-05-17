migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cbj9thwpanvuxa5")

  collection.name = "actors"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cbj9thwpanvuxa5")

  collection.name = "actor"

  return dao.saveCollection(collection)
})
