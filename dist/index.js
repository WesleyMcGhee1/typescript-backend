"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = require("./controller");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/homes", controller_1.ctrl.getHomes);
app.get("/homes/:id", controller_1.ctrl.getHome);
app.post("/homes", controller_1.ctrl.addHomes);
app.put("/homes/:id", controller_1.ctrl.updateHomes);
app.delete("/home/:id", controller_1.ctrl.deleteHomes);
app.listen(5000, () => console.log("Server is running"));
