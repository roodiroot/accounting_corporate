import { z } from "zod";

export const formContactsSchema = z.object({
  name: z.string().min(1, { message: "Введите корректное имя" }),
  phone: z
    .string()
    .min(17, { message: "Введите корректный телефон" })
    .optional(),
  email: z.string().email({ message: "Введите корректный email" }).optional(),
  message: z
    .string()
    .min(1, { message: "Введите корректное сообщение" })
    .optional(),
  policy: z.boolean().refine((val) => val === true, {
    message: "Вы должны принять политику конфиденциальности",
  }),
});
export const formSectionSchema = z.object({
  name: z.string().min(1, { message: "Введите корректное имя" }),
  phone: z.string().min(17, { message: "Введите корректный телефон" }),
  policy: z.boolean().refine((val) => val === true, {
    message: "Вы должны принять политику конфиденциальности",
  }),
});
export const formPromptSchema = z.object({
  phone: z.string().min(17, { message: "Введите корректный телефон" }),
  policy: z.boolean().refine((val) => val === true, {
    message: "Вы должны принять политику конфиденциальности",
  }),
});
