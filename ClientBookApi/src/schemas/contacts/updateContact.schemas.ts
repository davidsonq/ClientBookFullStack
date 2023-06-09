import { z } from "zod";

const updateContactsSchemas = z.object({
  name: z.string().max(50).min(3).trim().optional(),
  email: z.string().max(50).email().trim().optional(),
  secondEmail: z.string().max(50).email().trim().nullable().optional(),
  secondPhone: z.string().max(20).optional().nullable(),
  phone: z.string().max(20).optional(),
});

export default updateContactsSchemas;
