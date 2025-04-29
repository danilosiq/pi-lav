'use client';

import { forwardRef } from 'react';
import { IMaskInput } from 'react-imask';

interface BirthdayTextinputProps {
  name: string;
  value: string;
  onChange: (event: any) => void;
  onBlur: () => void;
}

export const BirthdayTextinput = forwardRef<HTMLInputElement, BirthdayTextinputProps>(
  ({ name, value, onChange, onBlur }, ref) => {
    return (
      <IMaskInput
        mask="00/00/0000"
        placeholder="DD/MM/AAAA"
        className="flex-1 bg-transparent focus:outline-none placeholder:text-gray-400 text-primary transition-all items-center justify-between px-5 flex rounded-sm border border-gray-400 focus-within:border-primary focus-within:bg-slate-50 relative min-w-[280px] h-[48px] w-full"
        name={name}
        value={value}
        inputRef={ref}
        onBlur={onBlur}
        onAccept={(value) => {
          onChange({ target: { name, value } });
        }}
      />
    );
  }
);

BirthdayTextinput.displayName = 'BirthdayTextinput';