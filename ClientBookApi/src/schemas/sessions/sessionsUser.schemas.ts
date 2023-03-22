import { z } from "zod";

const createSessionsUserSchemas = z.object({
  email: z.string().max(50).email().trim(),
  password: z.string().min(6).trim(),
});

export default createSessionsUserSchemas;
