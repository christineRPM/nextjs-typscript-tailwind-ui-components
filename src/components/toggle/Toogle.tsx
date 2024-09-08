import React, { useState, useEffect } from 'react';

// Define a generic type for colors
type ColorType = string;

// Define props interface with a generic type parameter
interface ToggleProps<T extends ColorType> {
  color?: T;
  onChange?: (checked: boolean) => void;
  isEnabled?: boolean;
  colorClasses: Record<T, string>;
}

function classNames(...classes: (string | boolean)[]): string {
  return classes.filter(Boolean).join(' ');
}

// Generic Toggle component
function Toggle<T extends ColorType>({
  color,
  onChange,
  isEnabled = false,
  colorClasses
}: ToggleProps<T>) {
  const [enabled, setEnabled] = useState(isEnabled);

  useEffect(() => {
    setEnabled(isEnabled);
  }, [isEnabled]);

  const handleChange = (checked: boolean) => {
    setEnabled(checked);
    onChange?.(checked);
  };

  const defaultColor = Object.keys(colorClasses)[0] as T;
  const bgColorClass = color ? colorClasses[color] : colorClasses[defaultColor];
  const lightColorClass = `${bgColorClass.replace('bg-', 'bg-')}/25`;

  return (
    <button
      type="button"
      role="switch"
      aria-checked={enabled}
      onClick={() => handleChange(!enabled)}
      className={classNames(
        "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2",
        enabled ? bgColorClass : 'bg-gray-200'
      )}
    >
      <span className="sr-only">Use setting</span>
      <span
        className={classNames(
          "pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
          enabled ? 'translate-x-5' : 'translate-x-0'
        )}
      />
    </button>
  );
}

export default Toggle;