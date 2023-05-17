migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cbj9thwpanvuxa5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "te3nxarg",
    "name": "avatar",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cbj9thwpanvuxa5")

  // remove
  collection.schema.removeField("te3nxarg")

  return dao.saveCollection(collection)
})
