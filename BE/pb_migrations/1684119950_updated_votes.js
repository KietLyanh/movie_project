migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("0p30co4zvfmty7o")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nii25qg8",
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
  const collection = dao.findCollectionByNameOrId("0p30co4zvfmty7o")

  // remove
  collection.schema.removeField("nii25qg8")

  return dao.saveCollection(collection)
})
