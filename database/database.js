const { MongoClient } = require("mongodb");
const dotenv = require("dotenv").config();

class MongoDB {
  //connection url
  url = process.env.DB_URL;
  //current MongoDB client
  client;
  database = process.env.DB_NAME;

  // Array of collections 
  collections = ["users", "weaves"];

  // connect to DB
  async connect() {
    try {
      console.log("Attempting to connect to database.");
      this.client = await MongoClient.connect(this.url);
      console.log("Successfully connected to the database.");
    } catch (err) {
      console.log("database connection error: ", err);
    }

    this.setupCollections();
  }

  // disconnect from DB
  async disconnect() {
    console.log("closing DB connection");
    await this.client.close();
  }

 //Sets up collections
  setupCollections() {
    for (const collection of this.collections) {
      this[collection] = this.client.db(this.database).collection(collection);
    }
  }
}

exports.db = new MongoDB();
