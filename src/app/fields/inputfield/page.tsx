"use client";

import React from "react";
import { NextPage } from "next";
import InputField from "@/components/fields/InputField";

const InputFieldDemo: NextPage = () => {

    return (
      <section className="w-2/3 flex flex-col border rounded-xl p-5 shadow shadow-xl mb-8">
          <h2 className="text-2xl font-semibold mb-4">InputField Component</h2>
          <p className="mb-4">
            The InputField component is a versatile input element with support for various states and styling options.
            It includes label, placeholder, and different visual states.
          </p>
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
          <p className="text-sm text-gray-600">
            Try typing in the input fields to see it in action!
          </p>
        </section>
    );
};

export default InputFieldDemo;