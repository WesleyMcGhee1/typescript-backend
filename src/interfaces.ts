import { Request, Response } from "express";

export interface ICtrl {
  getHomes(req: Request, res: Response): Promise<any>;
  getHome(req: Request, res: Response): Promise<any>;
  addHomes(req: Request, res: Response): Promise<any>;
  updateHomes(req: Request, res: Response): Promise<any>;
  deleteHomes(req: Request, res: Response): Promise<any>;
}

export interface IData {
  home_name: string;
  home_address: string;
  home_price: number;
  home_disc: string;
  home_img: string;
  home_id?: number;
}

export interface IId {
  id?: number;
  value?: number;
}
