import { z } from "zod";
import responseCreateUserSchemas from "../users/responseUser.schemas";

const responseContactsSchemas = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  secondEmail: z.string().nullable(),
  phone: z.string(),
  secondPhone: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export default responseContactsSchemas;
