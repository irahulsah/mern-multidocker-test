db.createUser(
  {
    MONGO_INITDB_ROOT_USERNAME:"irahulsah",
    MONGO_INITDB_ROOT_PASSWORD:"86242hul",
    roles: [
      {
        role: "readWrite",
        db: "multicontainer-database"
      }
    ]
  }
)