import knex from "knex";
import dotenv from "dotenv";

dotenv.config();

export default class BaseDataBase {
    protected static connection = knex({
        client: "mysql2",
        connection: {
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT || "3306"),
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_SCHEMA
        }
    });
}