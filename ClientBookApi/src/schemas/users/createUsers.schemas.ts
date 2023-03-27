import { z } from "zod";

const createUserSchemas = z.object({
  name: z.string().max(50).min(3).trim(),
  email: z.string().max(50).email().trim(),
  password: z.string().min(6).trim(),
  secondEmail: z.string().max(50).email().trim().nullable().optional(),
  secondPhone: z.string().max(20).nullable().optional(),
  phone: z.string().max(20),
});

export default createUserSchemas;
