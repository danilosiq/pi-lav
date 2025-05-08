import { ComponentProps, ReactNode } from "react";

interface ButtonProps extends ComponentProps<"button"> {
  colorSchema: keyof typeof ColorSchema;
  label: string;
  disabled?: boolean;
  icon?: ReactNode;
}

export function Button({
  colorSchema = "primary",
  disabled,
  label,
  icon,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={`w-full border transition-all relative px-3 py-2 h-full rounded-md ${
        ColorSchema[colorSchema]
      } ${disabled ? " bg-gray-400! cursor-not-allowed" : "cursor-pointer"}`}
      disabled={disabled}
    >
      {label}
      {icon && <span className="absolute right-4">{icon}</span>}
    </button>
  );
}

export const ColorSchema = {
  primary:
    "bg-primary text-white border-transparent hover:bg-primary-light",
  ghost:
    "bg-white text-gray-500 hover:text-primary border-gray-400 hover:border-primary",
  secondary:
    "bg-secondary text-white border-transparent hover:bg-secondary-light",
  danger:
    "bg-danger text-white border-transparent hover:bg-danger-light hover:border-danger",
  success:
    "bg-success text-white border-transparent hover:bg-success-light hover:border-success",
};
