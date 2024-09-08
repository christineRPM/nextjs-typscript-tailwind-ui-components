"use client";

import React, { useState } from "react";
import { NextPage } from "next";
import Toggle from "@/components/toggle/Toogle";

// Define our color types
type MyColors = 'blue' | 'green' | 'red' | 'yellow' | 'purple' | 'gray';

// Define our color classes
const myColorClasses: Record<MyColors, string> = {
  blue: 'bg-blue-500',
  green: 'bg-green-500',
  red: 'bg-red-500',
  yellow: 'bg-yellow-500',
  purple: 'bg-purple-500',
  gray: 'bg-gray-500'
};

const ToggleDemo: NextPage = () => {
  const [toggleStates, setToggleStates] = useState({
    blue: false,
    green: false,
    red: false,
    yellow: false,
    purple: false,
    gray: false
  });

  const handleToggleChange = (color: MyColors) => (checked: boolean) => {
    setToggleStates(prev => ({ ...prev, [color]: checked }));
  };

  return (
    <section className="w-2/3 flex flex-col border rounded-xl p-5 shadow shadow-xl mb-8">
          <h2 className="text-2xl font-semibold mb-4">Toggle Component</h2>
          <p className="mb-4">
            The Toggle component is a customizable switch that allows users to toggle between two states.
            It supports different colors and can be easily integrated into forms or settings panels.
          </p>
          <div className="border-t pt-5 mb-4">
            <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-6">Toggle Component Demo</h1>
            
            <div className="space-y-6">
              {(Object.keys(myColorClasses) as MyColors[]).map((color) => (
                <div key={color} className="flex items-center justify-between">
                  <label htmlFor={`toggle-${color}`} className="text-sm font-medium text-gray-700 capitalize">
                    {color} Toggle
                  </label>
                  <Toggle<MyColors>
                    color={color}
                    onChange={handleToggleChange(color)}
                    isEnabled={toggleStates[color]}
                    colorClasses={myColorClasses}
                  />
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-gray-100 rounded">
              <h2 className="text-lg font-semibold mb-2">Toggle States:</h2>
              <pre className="text-sm">
                {JSON.stringify(toggleStates, null, 2)}
              </pre>
            </div>
          </div>
          </div>
          <p className="text-sm text-gray-600">
            Try toggling the switches to see the different colors and states!
          </p>
        </section>
  );
};

export default ToggleDemo;