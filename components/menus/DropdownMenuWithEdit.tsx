import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { EllipsisVerticalIcon, ChevronDownIcon, PencilSquareIcon } from '@heroicons/react/20/solid';

const classNames = (...classes: string[]) => classes.filter(Boolean).join(' ');

interface MenuItem<T> {
  value: T;
  label: string;
  className?: string;
  onClick?: (value: T) => void;
  onEdit?: (value: T) => void;
}

interface DropdownMenuProps<T> {
  menuItems: MenuItem<T>[];
  selectedValue: T;
  title: string;
  buttonClassName?: string;
  menuClassName?: string;
  itemClassName?: string;
  activeItemClassName?: string;
  selectedItemClassName?: string;
  editButtonClassName?: string;
  disabled?: boolean;
}

export const DropdownMenuWithEdit = <T extends React.Key>({
  menuItems,
  selectedValue,
  title,
  buttonClassName = '',
  menuClassName = '',
  itemClassName = '',
  activeItemClassName = '',
  selectedItemClassName = '',
  editButtonClassName = '',
  disabled = false,
}: DropdownMenuProps<T>) => {
  const baseButtonClasses = 'font-semibold py-2 px-3 rounded-lg flex flex-row items-center justify-center gap-2 text-sm transition-colors duration-200 md:text-sm text-nowrap w-full lg:w-auto';
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';
  const buttonClasses = `${baseButtonClasses} ${buttonClassName} ${disabledClasses}`;

  return (
    <Menu as="div" className="relative text-left w-full sm:w-auto">
      <div>
        <Menu.Button className={buttonClasses} disabled={disabled}>
          <span className="sr-only">Open options</span>
          {title ? (
            <div className="flex flex-row w-full justify-between">
              <span className="text-sm font-medium flex flex-row text-nowrap">{title}</span>
              <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
            </div>
          ) : (
            <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
          )}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className={`absolute left-0 z-10 min-w-48 w-full max-h-[70vh] md:max-h-[70vh] overflow-scroll sm:w-auto origin-top-right rounded-md bg-white shadow-lg ring-1 ring-opacity-5 focus:outline-none ${menuClassName}`}>
          <div className="py-1">
            {menuItems.map((item) => (
              <Menu.Item key={item.value}>
                {({ active }) => (
                  <div className="flex items-center justify-between">
                    <button
                      type="button"
                      className={classNames(
                        active ? activeItemClassName : '',
                        selectedValue === item.value ? selectedItemClassName : '',
                        `block w-full px-4 py-2 text-left text-sm ${itemClassName} ${item.className || ''}`
                      )}
                      onClick={() => item.onClick && item.onClick(item.value)}
                    >
                      <div
                        className="truncate"
                        style={{
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'pre-wrap',
                        }}
                      >
                        {item.label}
                      </div>
                    </button>
                    {item.onEdit && (
                      <button
                        type="button"
                        className={`px-2 py-2 ${editButtonClassName}`}
                        onClick={() => item.onEdit && item.onEdit(item.value)}
                      >
                        <PencilSquareIcon className="h-5 w-5" aria-hidden="true" />
                      </button>
                    )}
                  </div>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default DropdownMenuWithEdit;