import React from 'react';

interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}

export function Switch({ checked, onChange, disabled = false }: SwitchProps) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-[20px] w-[36px] shrink-0 items-center rounded-[12px] p-[2px] transition-colors focus:outline-none focus:ring-1 focus:ring-blue-500 ${
        checked ? 'bg-[#2F54D8]' : 'bg-[#E9EAEB]'
      } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
    >
      <span
        className={`inline-block h-[16px] w-[16px] transform rounded-full bg-white transition-transform duration-200 shadow-[0_1px_3px_rgba(10,13,18,0.1),0_1px_2px_rgba(10,13,18,0.06)] ${
          checked ? 'translate-x-[16px]' : 'translate-x-[0px]'
        }`}
      />
    </button>
  );
}
