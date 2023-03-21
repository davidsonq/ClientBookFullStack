import "reflect-metadata";
import "express-async-errors";
import express, { json } from "express";
import handleError from "./errors/errors";
import userRoutes from "./routes/users/users.routes";
import contactRoutes from "./routes/contacts/contacts.routes";

const app = express();

app.use(json());

app.use("/users", userRoutes);
app.use("/contacts", contactRoutes);

app.use(handleError);

export default app;
