"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { formContactsSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import { ButtonCastom } from "@/components/ui/button";
import InputPhoneMask from "@/components/ui/input-phone-mask";
import { Textarea } from "@/components/ui/textarea";
import { sendMessageFedback } from "@/actions/sender";

interface ContactsFormProps extends React.HTMLAttributes<HTMLFormElement> {}

const ContactsForm: React.FC<ContactsFormProps> = ({ className, ...props }) => {
  const form = useForm<z.infer<typeof formContactsSchema>>({
    resolver: zodResolver(formContactsSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formContactsSchema>) {
    await sendMessageFedback(values)
      .then((e) => {
        console.log(e);
      })
      .finally(() => {
        form.reset();
      });
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        {...props}
        className={cn("flex flex-col gap-y-9", className)}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Имя*</FormLabel>
              <FormControl>
                <Input className="" placeholder="Введите Ваше имя" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Controller
          name="phone"
          control={form.control}
          render={({ field: { value, onChange } }) => (
            <FormItem>
              <FormLabel
                className={cn(
                  form.formState.errors?.phone &&
                    "text-red-500 dark:text-red-900"
                )}
              >
                Телефон*
              </FormLabel>
              <FormControl>
                <InputPhoneMask
                  className="flex h-12 w-full text-lg rounded-full bg-[#F0F0F0] px-7 py-1 transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#B0B0B0] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300"
                  value={value}
                  setValue={onChange}
                />
              </FormControl>
              {form.formState.errors?.phone && (
                <div className="text-[0.8rem] font-medium text-red-500 dark:text-red-900">
                  {form.formState.errors?.phone.message}
                </div>
              )}
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email*</FormLabel>
              <FormControl>
                <Input
                  className=""
                  placeholder="Введите Ваш email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Сообщение*</FormLabel>
              <FormControl>
                <Textarea rows={4} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="">
          <ButtonCastom className="bg-accent mt-2">
            Отправить
            <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center">
              <Icons.link className="stroke-primary" />
            </div>
          </ButtonCastom>
        </div>
      </form>
    </Form>
  );
};
export default ContactsForm;
