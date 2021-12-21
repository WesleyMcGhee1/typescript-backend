"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ctrl = void 0;
const db_1 = require("./db");
exports.ctrl = {
    getHomes: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const home = yield db_1.pool.query("SELECT * FROM home;");
            return res.status(200).send(home.rows);
        }
        catch (err) {
            console.error(err.message);
            return res.status(500).send("Internal Server Error");
        }
    }),
    getHome: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const home = yield db_1.pool.query("SELECT * FROM home WHERE home_id = $1;", [id]);
            return res.status(200).send(home.rows);
        }
        catch (err) {
            console.error(err.message);
            return res.status(500).send("Internal Server Error");
        }
    }),
    addHomes: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { home_name, home_address, home_img, home_disc, home_price, } = req.body;
            const home = yield db_1.pool.query("INSERT INTO home (home_name, home_address, home_img, home_disc, home_price) VALUES ($1, $2, $3, $4, $5);", [home_name, home_address, home_img, home_disc, home_price]);
            return res.status(200).send(home.rows);
        }
        catch (err) {
            console.error(err.message);
            return res.status(500).send("Internal Server Error");
        }
    }),
    updateHomes: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const { value } = req.body;
            const home = yield db_1.pool.query("UPDATE home SET home_price = $1 WHERE home_id = $2;", [id, value]);
            return res.status(200).send(home.rows);
        }
        catch (err) {
            console.error(err.message);
            return res.status(500).send("Internal Server Error");
        }
    }),
    deleteHomes: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const home = yield db_1.pool.query("DELETE FROM home WHERE home_id = $1;", [
                id,
            ]);
            return res.status(200).send(home.rows);
        }
        catch (err) {
            console.error(err.message);
            return res.status(500).send("Internal Server Error");
        }
    }),
};
