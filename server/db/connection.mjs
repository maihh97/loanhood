import { MongoClient } from "mongodb";

const connectionString = process.env.ATLAS_URI || "";
const client = new MongoClient(connectionString);

let conn;

try {
  conn = await client.connect();
  console.log("Successfully connected to the database!")
} catch(e) {
  console.error(e);
}
let db = conn.db("loanhood");

export default db;