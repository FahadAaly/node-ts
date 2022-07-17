import express, { Express } from "express";
import cors from "cors";
import routes from "./routes/routes";
import bodyParser from "body-parser";
const mongoose = require("mongoose");
const { MONGOURI } = require("../keys");

const app: Express = express();

// use cors
app.use(cors());

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Testing Database connection

try {
  mongoose
    .connect(MONGOURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .then(() => {
      console.log("connected to mongo database");
    })
    .catch((err: Error) => console.log(err));
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

// use Routes
app.use("/api/v1/", routes);

app.listen(5000, () => {
  console.log(
    `⚡️[server]: Server is running at https://localhost:${5000}`
  );
});
