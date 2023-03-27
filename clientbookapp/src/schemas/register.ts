import { z } from "zod";

const formSchema = z
  .object({
    name: z
      .string()
      .max(50, "Nome muito grande!")
      .nonempty("Nome obrigatório!")
      .min(3, "Nome com pelo menos 3 caracteres!")
      .trim(),
    email: z
      .string()
      .max(50, "O e-mail está muito grande!")
      .nonempty("E-mail obrigatório!")
      .email("O e-mail valido é obrigatório")
      .trim(),
    password: z
      .string()
      .nonempty("Senha obrigatória!")
      .min(8, "Senha precisa ter pelomenos 8 caracteres!")
      .trim(),
    confirm: z
      .string()
      .nonempty("Confirmar Senha obrigatória!")
      .min(8, "Senha precisa ter pelomenos 8 caracteres!")
      .trim(),
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
      .nonempty("Número de telefone obrigatório!")
      .max(20, "Número de telefone muito grande!")
      .trim(),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Confirmação de senha deve ser igual senha",
    path: ["confirm"],
  });

export default formSchema;
