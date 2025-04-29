import { ComponentProps, ReactNode } from "react";

interface TextInputProps extends ComponentProps<"input"> {
  placeholder?: string;
  prefix?: string;
  icon?: ReactNode;
}

export function TextInput({
  placeholder,
  icon,
  prefix,
  ...props
}: TextInputProps) {
  return (
    <label className=" transition-all items-center justify-between px-5 flex rounded-sm border border-gray-400 focus-within:border-primary focus-within:bg-slate-50 relative min-w-[280px] h-[48px] w-full">
      <input
        type="text"
        className={`flex-1 bg-transparent focus:outline-none placeholder:text-gray-400 text-primary ${
          props.disabled ? "cursor-not-allowed opacity-30" : ""
        }`}
        placeholder={placeholder}
        {...props}
      />
      {icon}
    </label>
  );
}
