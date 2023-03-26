import { z } from "zod";

const formSchema = z.object({
  name: z.string().max(50, "Nome muito grande!").trim().optional(),
  email: z.string().max(50, "O e-mail está muito grande!").trim().optional(),
  secondEmail: z
    .string()
    .max(50, "O e-mail está muito grande!")
    .trim()
    .optional()
    .transform((value) => (value === "" ? null : value)),
  secondPhone: z
    .string()
    .max(20, "Número de telefone muito grande!")
    .trim()
    .optional()
    .transform((value) => (value === "" ? null : value)),
  phone: z
    .string()
    .max(20, "Número de telefone muito grande!")
    .trim()
    .optional(),
});

export default formSchema;
