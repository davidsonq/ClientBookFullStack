import "dotenv/config";
import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";
import { Contact } from "./entities/contacts.entity";
import { User } from "./entities/users.entity";
import { Initial1679424018227 } from "./migrations/1679424018227-Initial";
import { Second1679494071841 } from "./migrations/1679494071841-Second";

const dataSourceConfig = (): DataSourceOptions => {
  const dbUrl: string | undefined = process.env.DATABASE_URL;

  if (!dbUrl) throw new Error("Missing env var: 'DATABASE_URL' ");

  const nodeEnv: string | undefined = process.env.NODE_ENV;

  if (nodeEnv === "test") {
    return {
      type: "sqlite",
      database: ":memory:",
      synchronize: true,
      entities: [User, Contact],
    };
  }

  return {
    type: "postgres",
    url: dbUrl,
    synchronize: false,
    logging: true,
    entities: [User, Contact],
    migrations: [Initial1679424018227, Second1679494071841],
  };
};

const AppDataSource = new DataSource(dataSourceConfig());

export default AppDataSource;
