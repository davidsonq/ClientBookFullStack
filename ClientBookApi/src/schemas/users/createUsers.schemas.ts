import { z } from "zod";

const createUserSchemas = z.object({
  name: z.string().max(50).min(3).trim(),
  email: z.string().max(50).email().trim(),
  password: z.string().min(6).trim(),
  secondEmail: z.string().optional(),
  secondPhone: z.string().optional(),
  phone: z.string().max(20),
  isAdm: z.boolean().optional().default(false),
});

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

export { createUserSchemas, responseCreateUserSchemas };
