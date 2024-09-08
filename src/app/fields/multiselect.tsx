"use client";

import React, { useState } from "react";
import { NextPage } from "next";
import MultiSelectInput from "@/components/fields/MultiSelectInput";
import { MultiValue } from "react-select";

type OptionType = {
    value: string;
    label: string;
};

const MultiSelect: NextPage = () => {
    const [selectedFruits, setSelectedFruits] = useState<OptionType[]>([]);

    const handleFruitChange = (newValue: MultiValue<OptionType>) => {
        setSelectedFruits(newValue as OptionType[]);
    };

    return (
        <MultiSelectInput
            title="Select Your Favorite Fruits"
            optionType="fruit"
            selectedValues={selectedFruits}
            onChange={handleFruitChange}
            extra="mb-4"
        />
    );
};

export default MultiSelect;