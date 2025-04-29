'use client';

import { forwardRef } from 'react';
import { IMaskInput } from 'react-imask';

interface CPFTextInputProps {
  onChange: (...event: any[]) => void;
  onBlur: () => void;
  value: string;
  name: string;
}


export const CPFTextInput = forwardRef<HTMLInputElement, CPFTextInputProps>(
  ({ onChange, onBlur, value, name }, ref) => {
    return (
      <IMaskInput
        mask="000.000.000-00"
        placeholder="CPF"
        className="flex-1 bg-transparent focus:outline-none placeholder:text-gray-400 text-primary transition-all items-center justify-between px-5 flex rounded-sm border border-gray-400 focus-within:border-primary focus-within:bg-slate-50 relative min-w-[280px] h-[48px] w-full"
        onAccept={(value) => onChange(value)}
        onBlur={onBlur}
        value={value}
        name={name}
        inputRef={ref} 
      />
    );
  }
);

CPFTextInput.displayName = 'CPFTextInput';