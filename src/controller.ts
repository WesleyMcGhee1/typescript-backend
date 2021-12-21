import { Response, Request } from "express";
import { pool } from "./db";
import { ICtrl } from "./interfaces";

export const ctrl: ICtrl = {
  getHomes: async (req: Request, res: Response): Promise<any> => {
    const home: any = await pool.query("SELECT * FROM home;");
    return res.status(200).send(home.rows);
  },
};
