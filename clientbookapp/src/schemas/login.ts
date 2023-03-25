import { z } from "zod";

const formSchema = z.object({
  email: z
    .string()
    .nonempty("E-mail obrigatório!")
    .email("O e-mail valido é obrigatório")
    .trim(),
  password: z.string().nonempty("Senha obrigatória!").trim(),
});

export default formSchema;
