import { z } from "zod";

export const formSectionSchema = z.object({
  name: z.string().min(1, { message: "Имя должно быть" }),
  phone: z.string().min(17, { message: "Телефон должен быть" }),
});
export const formPromptSchema = z.object({
  phone: z.string().min(1, { message: "Телефон должен быть" }),
});
