import express from "express";
import db from "../db/connection.mjs";
import { ObjectId } from 'mongodb';

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const router = express.Router();
 
// This will help us connect to the database

 router.get("/", async(req, res) => {
   let collection = await db.collection("items")
   let results = await collection.find({}).limit(50).toArray();
   res.send(results).status(200)
 })

router.get("/:id", async (req, res) => {
   let collection = await db.collection("items");
   let query = {_id: new ObjectId(req.params.id)};
   let result = await collection.findOne(query);
   if (!result) res.send("Not found").status(404);
   else res.send(result).status(200);
});

router.post("/favourites", async(req,res) => {
   let collection = await db.collection("items")
   let idArray = req.body;
   let objectIdArray = idArray.map(i => { return new ObjectId(i)})
   console.log(objectIdArray)
   let query = {_id: {$in : objectIdArray}}
   let result = await collection.find(query).toArray()
   if (!result) res.send("Not found").status(404);
   else res.send(result).status(200);
})
 
export default router;