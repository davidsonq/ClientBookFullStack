import { z } from "zod";
import responseContactsSchemas from "../contacts/responseContacts.schemas";

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
  contacts: z.array(responseContactsSchemas).optional(),
});

export default responseCreateUserSchemas;
