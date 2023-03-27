import app from "./app";
import AppDataSource from "./data-source";
import "dotenv/config";

const PORT = process.env.PORT || 3000;

AppDataSource.initialize()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running http://localhost:${PORT}`);
    });
  })
  .catch((err: Error) => {
    console.error("Error during Data Source initialization", err);
  });
