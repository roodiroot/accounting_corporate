import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { Icons } from "../icons";
import Image from "next/image";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:pointer-events-none disabled:opacity-50 dark:focus-visible:ring-slate-300",
  {
    variants: {
      variant: {
        default:
          "bg-slate-900 text-slate-50 shadow hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90",
        destructive:
          "bg-red-500 text-slate-50 shadow-sm hover:bg-red-500/90 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/90",
        outline:
          "border border-slate-200 bg-white shadow-sm hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50",
        secondary:
          "bg-slate-100 text-slate-900 shadow-sm hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80",
        ghost:
          "hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50",
        link: "text-slate-900 underline-offset-4 hover:underline dark:text-slate-50",
        castom:
          "text-lg font-medium bg-[#1F2323] text-white rounded-full py-[6px] pr-[6px] pl-6",
        icon: "bg-[#f6f6f6] hover:bg-[#f6f6f6]/70",
        badge:
          "bg-inherit  rounded-full text-lg border border-primary text-primary",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-12 w-12 min-h-12 min-w-12 rounded-full bg-[#f6f6f6]",
        none: "",
        badge: "px-[10px] h-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

const ButtonCastom = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <Button
        {...props}
        ref={ref}
        variant="castom"
        size="none"
        className={className}
      >
        <div className="flex items-center justify-center gap-3">
          {props.children}
        </div>
      </Button>
    );
  }
);
ButtonCastom.displayName = "ButtonCastom";

const ButtonCTA = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        className={cn(
          "w-full max-w-lg h-28 rounded-5xl border-2 border-primary p-2 flex items-center",
          className
        )}
      >
        <div className="relative aspect-square rounded-4xl h-full overflow-hidden">
          <Image
            alt="bg_button"
            width={200}
            height={200}
            src="/images/cta/bg.png"
            className="absolute top-0 left-0 w-full h-full object-cover object-center"
          />
          <svg
            width="28"
            height="33"
            viewBox="0 0 28 33"
            fill="none"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          >
            <path
              d="M26.5 13.9019C28.5 15.0566 28.5 17.9434 26.5 19.0981L4.75 31.6554C2.75 32.8101 0.25 31.3668 0.25 29.0574L0.25 3.94263C0.25 1.63323 2.75 0.189855 4.75 1.34456L26.5 13.9019Z"
              fill="black"
            />
          </svg>
        </div>
        <div className="flex-1 flex justify-center">
          <span className="text-xl sm:text-2xl lg:text-3xl font-bold">
            {props.children}
          </span>
        </div>
      </button>
    );
  }
);
ButtonCTA.displayName = "ButtonCTA";

export { Button, buttonVariants, ButtonCastom, ButtonCTA };
