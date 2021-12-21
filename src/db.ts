import { Pool } from "pg";
import * as dotenv from "dotenv";

dotenv.config();

export const pool = new Pool({
  user: "postgres",
  password: process.env.DB_PASS,
  host: "localhost",
  database: "buy_homes",
  port: 5432,
});
