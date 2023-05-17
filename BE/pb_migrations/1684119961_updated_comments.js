migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wf8ol71xwhtv1mi")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vb3vg6yu",
    "name": "movies",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "2vc0p7du52zdqi5",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wf8ol71xwhtv1mi")

  // remove
  collection.schema.removeField("vb3vg6yu")

  return dao.saveCollection(collection)
})
