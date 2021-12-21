import { Request, Response } from "express";

export interface IData {
  name: string;
  password: string;
  database: string;
  host: string;
  port: number;
}

export interface ICtrl {
  getHomes(req: Request, res: Response): Promise<any>;
}
