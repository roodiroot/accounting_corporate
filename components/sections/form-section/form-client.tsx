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
import { formSectionSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import { sendMessagePopup } from "@/actions/sender";
import { ButtonCastom } from "@/components/ui/button";
import InputPhoneMask from "@/components/ui/input-phone-mask";
import useModal from "@/hooks/use-modal";
import { Switch } from "@/components/ui/switch";

interface FormClientProps extends React.HTMLAttributes<HTMLFormElement> {}

const FormClient: React.FC<FormClientProps> = ({ className, ...props }) => {
  const { onClose } = useModal();
  const form = useForm<z.infer<typeof formSectionSchema>>({
    resolver: zodResolver(formSectionSchema),
    defaultValues: {
      name: "",
      phone: "",
      policy: false,
    },
  });

  async function onSubmit(values: z.infer<typeof formSectionSchema>) {
    await sendMessagePopup(values)
      .then((d) => {
        onClose();
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
          name="policy"
          render={({ field }) => (
            <FormItem className="flex items-center">
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div
                className={cn(
                  "ml-4 text-sm",
                  form.formState.errors.policy && "text-red-600 font-bold"
                )}
              >
                Я даю согласие на обработку{" "}
                <a
                  className="text-accent font-bold"
                  target="_blank"
                  href="/docs/pd-consent"
                >
                  персональных данных
                </a>
                .
              </div>
            </FormItem>
          )}
        />
        <div className="">
          <ButtonCastom className="bg-gradient-to-br from-accent to-[#2EC97F] mt-2">
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

export default FormClient;
