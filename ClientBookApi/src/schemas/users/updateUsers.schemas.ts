import { z } from "zod";

const updateUserSchemas = z.object({
  name: z.string().max(50).min(3).trim().optional(),
  email: z.string().max(50).email().trim().optional(),
  password: z.string().min(6).trim().optional(),
  secondEmail: z.string().max(50).email().trim().optional(),
  secondPhone: z.string().max(20).optional(),
  phone: z.string().max(20).optional(),
});

export default updateUserSchemas;
