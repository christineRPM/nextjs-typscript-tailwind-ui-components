"use client";

import React, { useState } from "react";
import { NextPage } from "next";
import MultiSelectInput from "@/components/fields/MultiSelectInput";

type OptionType = {
    value: string;
    label: string;
};
const MultiSelect: NextPage = () => {
    const [selectedFruits, setSelectedFruits] = useState<OptionType[]>([]);

  return (
        <MultiSelectInput
          title="Select Your Favorite Fruits"
          optionType="fruit"
          selectedValues={selectedFruits}
          onChange={setSelectedFruits}
          extra="mb-4"
        />
  );
};

export default MultiSelect;