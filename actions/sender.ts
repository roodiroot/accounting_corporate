"use server";

import { sendNotification } from "@/lib/tg";
import {
  formContactsSchema,
  formPromptSchema,
  formSectionSchema,
} from "@/schemas";
import { z } from "zod";

export const sendMessagePopup = async (
  value: z.infer<typeof formSectionSchema>,
  data?: string
) => {
  try {
    await sendNotification(
      `<b>Partner</b> Заявка от ${value?.name} ${value?.phone}. ${data}`
    );
    return { succsess: "Спасибо за заявку" };
  } catch {
    return { error: "Произошла ошибка" };
  }
};

export const sendMessagePropmpt = async (
  value: z.infer<typeof formPromptSchema>,
  data?: string
) => {
  try {
    await sendNotification(
      `<b>Partner</b> Быстрая заявка ${value?.phone}. ${data}`
    );
    return { succsess: "Спасибо за заявку" };
  } catch {
    return { error: "Произошла ошибка" };
  }
};
export const sendMessageFedback = async (
  value: z.infer<typeof formContactsSchema>,
  data?: string
) => {
  try {
    await sendNotification(
      `<b>Partner</b> Обратная связь от ${value?.name} ${value?.phone}. ${value?.email}. <b>Сообщение от пользователя:</b> <i>${value?.message}</i> ${data}`
    );
    return { succsess: "Спасибо за заявку" };
  } catch {
    return { error: "Произошла ошибка" };
  }
};
