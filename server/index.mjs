import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
// import "express-async-errors";
import items from "./routes/items.mjs"
import users from "./routes/users.mjs"

const PORT = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(express.json());

// Load the /fav routes
app.use("/items", items);
app.use("/users", users);

// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("Uh oh! An unexpected error occured.")
})

app.get('/', (req, res) => {
    res.send('Hello from our server!')
})

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});