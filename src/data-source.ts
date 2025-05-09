import "reflect-metadata";
import { DataSource } from "typeorm";
import dotenv from "dotenv";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [__dirname + '/models/*.ts'],
  synchronize: true,
  logging: true,
})

/*
AppDataSource.initialize()
  .then(() => console.log("DB Connected!"))
  .catch((error) => console.log("DB Connection Error:", error));
*/