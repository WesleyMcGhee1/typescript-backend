import { Response, Request } from "express";
import { pool } from "./db";
import { ICtrl, IData, IId } from "./interfaces";

export const ctrl: ICtrl = {
  getHomes: async (req: Request, res: Response): Promise<any> => {
    try {
      const home: any = await pool.query("SELECT * FROM home;");
      return res.status(200).send(home.rows);
    } catch (err: any) {
      console.error(err.message);
      return res.status(500).send("Internal Server Error");
    }
  },
  getHome: async (req: Request, res: Response): Promise<any> => {
    try {
      const { id }: IId = req.params;
      const home: any = await pool.query(
        "SELECT * FROM home WHERE home_id = $1;",
        [id]
      );
      return res.status(200).send(home.rows);
    } catch (err: any) {
      console.error(err.message);
      return res.status(500).send("Internal Server Error");
    }
  },
  addHomes: async (req: Request, res: Response): Promise<any> => {
    try {
      const {
        home_name,
        home_address,
        home_img,
        home_disc,
        home_price,
      }: IData = req.body;
      const home = await pool.query(
        "INSERT INTO home (home_name, home_address, home_img, home_disc, home_price) VALUES ($1, $2, $3, $4, $5);",
        [home_name, home_address, home_img, home_disc, home_price]
      );
      return res.status(200).send(home.rows);
    } catch (err: any) {
      console.error(err.message);
      return res.status(500).send("Internal Server Error");
    }
  },
  updateHomes: async (req: Request, res: Response): Promise<any> => {
    try {
      const { id }: IId = req.params;
      const { value }: IId = req.body;
      const home = await pool.query(
        "UPDATE home SET home_price = $1 WHERE home_id = $2;",
        [id, value]
      );
      return res.status(200).send(home.rows);
    } catch (err: any) {
      console.error(err.message);
      return res.status(500).send("Internal Server Error");
    }
  },
  deleteHomes: async (req: Request, res: Response): Promise<any> => {
    try {
      const { id }: IId = req.params;
      const home = await pool.query("DELETE FROM home WHERE home_id = $1;", [
        id,
      ]);
      return res.status(200).send(home.rows);
    } catch (err: any) {
      console.error(err.message);
      return res.status(500).send("Internal Server Error");
    }
  },
};
