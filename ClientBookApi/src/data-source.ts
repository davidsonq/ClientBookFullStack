import "dotenv/config";
import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";
import path from "path";

const dataSourceConfig = (): DataSourceOptions => {
  const ententiesPath: string = path.join(__dirname, "./entities/**.{ts,js}");
  const migrationsPath: string = path.join(
    __dirname,
    "./migrations/**.{ts,js}"
  );

  const dUrl: string | undefined = process.env.DATABASE_URL;

  const nodeEnv: string | undefined = process.env.NODE_ENV;

  if (!dUrl) {
    throw new Error("Env var DATABSE_URL no exist");
  }

  if (nodeEnv === "test") {
    return {
      type: "sqlite",
      database: ":memory",
      synchronize: true,
      entities: [ententiesPath],
    };
  }

  return {
    type: "postgres",
    url: dUrl,
    synchronize: false,
    logging: true,
    migrations: [migrationsPath],
    entities: [ententiesPath],
  };
};
const AppDataSource = new DataSource(dataSourceConfig());

export default AppDataSource;
