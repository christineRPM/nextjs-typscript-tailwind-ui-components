"use client";
import React, { useState } from "react";
import { NextPage } from "next";
import { DropdownMenuWithEdit } from "@/components/menus/DropdownMenuWithEdit";

type FruitType = 'apple' | 'banana' | 'cherry' | 'date' | 'elderberry';
type ColorType = 'red' | 'blue' | 'green' | 'yellow' | 'purple';

const DropdownMenuWithEditDemo: NextPage = () => {
  const [selectedFruit, setSelectedFruit] = useState<FruitType>('apple');
  const [selectedColor, setSelectedColor] = useState<ColorType>('red');

  const fruits: FruitType[] = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
  const colors: ColorType[] = ['red', 'blue', 'green', 'yellow', 'purple'];

  const handleFruitEdit = (fruit: FruitType) => {
    alert(`Editing ${fruit}`);
  };

  const getColorClasses = (color: ColorType): string => {
    const colorClasses = {
      red: 'bg-red-200 hover:bg-red-300',
      blue: 'bg-blue-200 hover:bg-blue-300',
      green: 'bg-green-200 hover:bg-green-300',
      yellow: 'bg-yellow-200 hover:bg-yellow-300',
      purple: 'bg-purple-200 hover:bg-purple-300',
    };
    return colorClasses[color];
  };

  return (
    <section className="w-2/3 flex flex-col border rounded-xl p-5 shadow-xl mb-8">
      <h2 className="text-2xl font-semibold mb-4">Dropdown Menu with Edit Component</h2>
      <p className="mb-4">
        The DropdownMenuWithEdit component is a versatile dropdown that supports item selection,
        editing, and custom styling. It can be used for various purposes such as selection menus,
        action menus, and more.
      </p>
      <div className="border-t pt-5 mb-4">
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-6">Dropdown Menu with Edit Demo</h1>
          
          <div className="space-y-8">
            {/* Basic usage */}
            <div>
              <h2 className="text-lg font-semibold mb-2">Basic Usage</h2>
              <DropdownMenuWithEdit<FruitType>
                menuItems={fruits.map(fruit => ({
                  value: fruit,
                  label: fruit.charAt(0).toUpperCase() + fruit.slice(1),
                  onClick: (value) => setSelectedFruit(value),
                  onEdit: handleFruitEdit
                }))}
                selectedValue={selectedFruit}
                title="Select a Fruit"
                buttonClassName="bg-blue-500 text-white"
                activeItemClassName="bg-blue-100"
                selectedItemClassName="font-bold"
                editButtonClassName="text-blue-500 hover:text-blue-700"
              />
              <p className="mt-2">Selected fruit: {selectedFruit}</p>
            </div>

            {/* Custom styling */}
            <div>
              <h2 className="text-lg font-semibold mb-2">Custom Styling</h2>
              <DropdownMenuWithEdit<ColorType>
                menuItems={colors.map(color => ({
                  value: color,
                  label: color.charAt(0).toUpperCase() + color.slice(1),
                  onClick: (value) => setSelectedColor(value),
                  className: getColorClasses(color)
                }))}
                selectedValue={selectedColor}
                title="Select a Color"
                buttonClassName="bg-gray-200 text-gray-800 hover:bg-gray-300"
                menuClassName="bg-gray-100"
                itemClassName="capitalize"
                activeItemClassName="bg-gray-300"
                selectedItemClassName="font-bold"
              />
              <p className="mt-2">Selected color: {selectedColor}</p>
            </div>

            {/* Disabled state */}
            <div>
              <h2 className="text-lg font-semibold mb-2">Disabled State</h2>
              <DropdownMenuWithEdit<string>
                menuItems={[]}
                selectedValue=""
                title="Disabled Dropdown"
                buttonClassName="bg-gray-300 text-gray-600"
                disabled={true}
              />
            </div>
          </div>
        </div>
      </div>
      <p className="text-sm text-gray-600 mt-4">
        Try selecting different options and clicking the edit buttons (where available) to see how the component behaves.
      </p>
    </section>
  );
};

export default DropdownMenuWithEditDemo;