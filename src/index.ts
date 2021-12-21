import express, { Application } from "express";
import { ctrl } from "./controller";
const app: Application = express();

app.use(express.json());

app.get("/homes", ctrl.getHomes);
app.get("/homes/:id", ctrl.getHome);
app.post("/homes", ctrl.addHomes);
app.put("/homes/:id", ctrl.updateHomes);
app.delete("/home/:id", ctrl.deleteHomes);
app.listen(5000, () => console.log("Server is running"));
