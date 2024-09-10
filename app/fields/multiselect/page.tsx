"use client";

import React, { useState } from "react";
import { NextPage } from "next";
import MultiSelectInput from "@/components/fields/MultiSelectInput";
import { MultiValue } from "react-select";

type OptionType = {
    value: string;
    label: string;
};

const MultiSelectDemo: NextPage = () => {
  const [selectedFruits, setSelectedFruits] = useState<OptionType[]>([]);

  const handleFruitChange = (newValue: MultiValue<OptionType>) => {
      setSelectedFruits(newValue as OptionType[]);
  };
  return (
    <section className="w-2/3 flex flex-col border rounded-xl p-5 shadow shadow-xl mb-8">
      <h2 className="text-2xl font-semibold mb-4">MultiSelectInput Component</h2>
      <p className="mb-4">
        The MultiSelectInput component is a customizable dropdown that allows users to select multiple options from a list.
        It supports creating new options on the fly and uses react-select for a smooth user experience.
      </p>
      <div className="border-t pt-5 mb-4">
      <MultiSelectInput
            title="Multi Select Example"
            optionType="fruit"
            selectedValues={selectedFruits}
            onChange={handleFruitChange}
            extra="mb-4"
        />
      </div>
      <p className="text-sm text-gray-600">
        Try selecting multiple fruits or creating a new fruit option!
      </p>
    </section>
  );
};

export default MultiSelectDemo;