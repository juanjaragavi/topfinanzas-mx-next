import type React from "react";
import { forwardRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium transition-colors duration-200 rounded-full whitespace-nowrap",
  {
    variants: {
      variant: {
        primary: "bg-[#3e73c4] hover:bg-[#305ca3] text-white",
        secondary:
          "bg-white hover:bg-gray-100 text-gray-900 border border-gray-300",
        outline:
          "bg-white hover:bg-gray-100 text-gray-900 border border-gray-300",
        ghost: "hover:bg-gray-100/50 text-gray-900",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "px-5 md:px-6 py-2 md:py-2.5 text-sm md:text-base",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      fullWidth: false,
    },
  },
);

export interface ButtonBaseProps extends VariantProps<typeof buttonVariants> {
  showArrow?: boolean;
  fullWidth?: boolean;
  className?: string;
  children?: React.ReactNode;
  /**
   * Accessibility label for screen readers
   * Required for buttons without text content
   */
  "aria-label"?: string;
}

export interface ButtonAsButtonProps
  extends ButtonBaseProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: undefined;
}

export interface ButtonAsLinkProps extends ButtonBaseProps {
  href: string;
}

export type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant,
      size,
      fullWidth = false,
      showArrow = false,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const buttonStyles = cn(
      buttonVariants({ variant, size, fullWidth, className }),
    );

    const content = (
      <>
        <span>{children}</span>
        {showArrow && <ArrowRight className="ml-2 -mr-1 w-5 h-5" />}
      </>
    );

    if ("href" in props && props.href !== undefined) {
      return (
        <Link href={props.href} className={buttonStyles}>
          {content}
        </Link>
      );
    }

    return (
      <button
        className={buttonStyles}
        ref={ref}
        {...(props as ButtonAsButtonProps)}
      >
        {content}
      </button>
    );
  },
);

Button.displayName = "Button";

export { Button };
