"use client";

import React from "react";
import { NextPage } from "next";
import InputField from "@/components/fields/InputField";

const InputFieldDemo: NextPage = () => {
    return (
        <div className="border-t pt-5 mb-4">
            <InputField
            id="sample-input"
            label="Sample Input"
            placeholder="Enter some text"
            extra="mb-4"
            />
            <InputField
            id="error-input"
            label="Error Input"
            placeholder="This input has an error"
            state="error"
            extra="mb-4"
            />
            <InputField
            id="success-input"
            label="Success Input"
            placeholder="This input is successful"
            state="success"
            extra="mb-4"
            />
            <InputField
            id="disabled-input"
            label="Disabled Input"
            placeholder="This input is disabled"
            disabled
            />
        </div>
    );
};

export default InputFieldDemo;