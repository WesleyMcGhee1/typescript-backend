import express, { Application, Request, Response } from "express";
import { ctrl } from "./controller";
const app: Application = express();

app.use(express.json());

app.get("/", ctrl.getHomes);

app.listen(5000, () => console.log("Server is running"));
