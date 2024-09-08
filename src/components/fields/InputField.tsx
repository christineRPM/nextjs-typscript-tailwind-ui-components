import React from 'react';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  extra?: string;
  extraInput?: string;
  placeholder: string;
  variant?: 'default' | 'auth';
  state?: 'default' | 'error' | 'success';
  disabled?: boolean;
}

const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>((props, ref) => {
  const {
    label,
    id,
    extra,
    extraInput,
    type = 'text',
    placeholder,
    variant = 'default',
    state = 'default',
    disabled = false,
    ...rest
  } = props;

  return (
    <div className={`${extra}`}>
      <label
        htmlFor={id}
        className={`text-base text-black ${
          variant === "auth" ? "ml-1.5 font-medium" : "ml-3 font-bold"
        }`}
      >
        {label}
      </label>
      <input
        ref={ref}
        disabled={disabled}
        type={type}
        id={id}
        placeholder={placeholder}
        className={`mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none ${
          disabled
            ? "!border-none !bg-gray-100"
            : state === "error"
            ? "border-red-500 text-red-500 placeholder:text-red-500"
            : state === "success"
            ? "border-green-500 text-green-500 placeholder:text-green-500"
            : "border-gray-200"
        } ${extraInput}`}
        {...rest}
      />
    </div>
  );
});

InputField.displayName = 'InputField';

export default InputField;