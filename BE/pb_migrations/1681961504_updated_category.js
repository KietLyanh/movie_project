migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("r1lfc0evgpus02l")

  collection.name = "categories"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("r1lfc0evgpus02l")

  collection.name = "category"

  return dao.saveCollection(collection)
})
