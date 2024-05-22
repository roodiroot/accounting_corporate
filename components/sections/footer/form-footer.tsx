"use client";

import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { formPromptSchema } from "@/schemas";
import { Form, FormControl } from "@/components/ui/form";
import InputPhoneMask from "@/components/ui/input-phone-mask";

interface FormFooterProps extends React.HTMLAttributes<HTMLFormElement> {}

const FormFooter: React.FC<FormFooterProps> = ({ className, ...props }) => {
  const form = useForm<z.infer<typeof formPromptSchema>>({
    resolver: zodResolver(formPromptSchema),
    defaultValues: {
      phone: "",
    },
  });

  function onSubmit(values: z.infer<typeof formPromptSchema>) {
    console.log(values);
    form.reset();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        {...props}
        className={cn("w-full", className)}
      >
        <div className=" h-12 rounded-full bg-[#3D3C3A] overflow-hidden flex items-center pr-2 py-3">
          <Controller
            name="phone"
            control={form.control}
            render={({ field: { value, onChange } }) => (
              <FormControl>
                <InputPhoneMask
                  setValue={onChange}
                  value={value}
                  className={cn(
                    "pl-7 border-none outline-none h-full bg-inherit flex-1 text-white placeholder:text-[#636363]",
                    form.formState.errors?.phone &&
                      "placeholder:text-red-500/40 text-red-500"
                  )}
                />
              </FormControl>
            )}
          />
          <button className="w-9 h-9 shrink-1 rounded-full bg-white flex items-center justify-center">
            <Icons.link className=" stroke-primary" />
          </button>
        </div>
        {form.formState.errors?.phone && (
          <div className="text-[0.8rem] font-medium text-red-500 dark:text-red-900">
            {form.formState.errors?.phone.message}
          </div>
        )}
      </form>
    </Form>
  );
};

export default FormFooter;
