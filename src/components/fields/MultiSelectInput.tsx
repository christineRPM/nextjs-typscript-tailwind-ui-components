import React, { useState } from 'react';
import CreatableSelect from 'react-select/creatable';
import makeAnimated from 'react-select/animated';
import { ActionMeta, MultiValue, StylesConfig } from 'react-select';
import { fruitOptions, colorOptions, animalOptions } from '@/data/selectOptions';

type OptionType = {
    value: string;
    label: string;
};

const animatedComponents = makeAnimated();

const customStyles: StylesConfig<OptionType, true> = {
  control: (base) => ({
    ...base,
    height: "auto",
    minHeight: "3rem",
    minWidth: 0,
    borderRadius: "0.75rem",
    borderColor: "rgb(195 202 209)",
    fontSize: "1rem",
    paddingLeft: "0.25rem",
    lineHeight: "1.25rem",
    boxShadow: "none",
    ':hover': {
        borderColor: "rgb(195 202 209)",
    },
  }),
  valueContainer: (base) => ({
    ...base,
    padding: '6px 6px'
  }),
  input: (base) => ({
    ...base,
    margin: 0,
    padding: 0,
    whiteSpace: 'pre-wrap',
  }),
  option: (base) => ({
    ...base,
    backgroundColor: `white`,
    ':hover': {
        backgroundColor: `#3999b9`,
    },
    ':active': {
        ...base[':active'],
        backgroundColor: `#3999b9`,
    },
    height: '100%',
    whiteSpace: 'pre-wrap',
  }),
  multiValue: (base) => ({
    ...base,
    borderRadius: "5px",
    boxShadow: "0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    backgroundImage: 'linear-gradient(to right, #cee7f0, #8bece2)',

    ':hover': {
        color: '#697b8c',
        backgroundImage: 'linear-gradient(to right, #3999b9, #3edfcf)',
    },
  }),
  multiValueLabel: (base) => ({
    ...base,
    color: 'black',
    textWrap: 'pretty', 
  }),
  multiValueRemove: (base) => ({
    ...base,
    color: 'black',
    ':hover': {
      color: '#697b8c',
    },
  }),
  menu: (base) => ({
    ...base,
    whiteSpace: 'pre-wrap',
  }),
};

type MultiSelectInputProps = {
    title?: string;
    optionType: 'fruit' | 'color' | 'animal';
    selectedValues: OptionType[];
    onChange: (selected: MultiValue<OptionType>) => void;
    extra?: string;
};

const MultiSelectInput: React.FC<MultiSelectInputProps> = ({ title, optionType, selectedValues, onChange, extra }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [editingValue, setEditingValue] = useState('');

    const getOptions = () => {
        switch (optionType) {
            case 'fruit':
                return fruitOptions;
            case 'color':
                return colorOptions;
            case 'animal':
                return animalOptions;
            default:
                return [];
        }
    };

    const handleInputChange = (inputValue: string) => {
        setEditingValue(inputValue);
    };

    const handleChange = (
      newValue: MultiValue<OptionType>,
      actionMeta: ActionMeta<OptionType>
    ) => {
      console.log(actionMeta);
      console.log(newValue);
      setIsMenuOpen(true);
      onChange(newValue);
    };

    const handleMenuOpen = () => {
      setIsMenuOpen(true);
    };

    const handleMenuClose = () => {
      setIsMenuOpen(false);
    };

    return (
      <div className={extra}>
          <h3 className="mb-2">{title}</h3>
          <CreatableSelect<OptionType, true>
            aria-labelledby="aria-label"
            isMulti
            components={animatedComponents}
            options={getOptions()}
            value={selectedValues}
            className="basic-multi-select"
            classNamePrefix="select"
            onChange={handleChange}
            onInputChange={handleInputChange}
            onMenuOpen={handleMenuOpen}
            onMenuClose={handleMenuClose}
            menuIsOpen={isMenuOpen}
            noOptionsMessage={({ inputValue }) => 
                inputValue ? `Create "${inputValue}"` : "Type to search or create..."
            }
            isClearable={false}
            styles={customStyles}
            inputValue={editingValue}
          />
      </div>
    );
};

export default MultiSelectInput;