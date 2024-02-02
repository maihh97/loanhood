import { MongoClient } from "mongodb";
import * as products from "./products.json" assert { type: "json" };

console.log(JSON.parse(products))
// Replace the uri string with your MongoDB deployment's connection string.
// const uri = "mongodb+srv://mongodbuser:mongo24@items.0ubczc8.mongodb.net/?retryWrites=true&w=majority"

// const client = new MongoClient(uri);

// async function run() {
//   try {

//     // Get the database and collection on which to run the operation
//     const database = client.db("loanhood");
//     const items = database.collection("items");

//     // Create an array of documents to insert
//     const docs = JSON.parse(products)

//     // Prevent additional documents from being inserted if one fails
//     const options = { ordered: true };

//     // Execute insert operation
//     const result = await items.insertMany(docs, options);
   
//     // Print result
//     console.log(`${result.insertedCount} documents were inserted`);
//   } finally {
//     await client.close();
//   }
// }
// run().catch(console.dir);
