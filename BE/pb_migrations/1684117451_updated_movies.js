migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2vc0p7du52zdqi5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ifxcx3pf",
    "name": "category",
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
  const collection = dao.findCollectionByNameOrId("2vc0p7du52zdqi5")

  // remove
  collection.schema.removeField("ifxcx3pf")

  return dao.saveCollection(collection)
})
