import { z } from "zod";

const responseCreateUserSchemas = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  secondEmail: z.string().nullable(),
  phone: z.string(),
  secondPhone: z.string().nullable(),
  isAdm: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export default responseCreateUserSchemas;
