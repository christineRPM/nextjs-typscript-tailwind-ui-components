"use client";

import React, { useState } from "react";
import { NextPage } from "next";
import Message from "@/components/error/Message";

type MessageType = 'error' | 'warning' | 'success' | 'info';

const messageStyles: Record<MessageType, { bg: string; text: string }> = {
  error: { bg: 'bg-red-100', text: 'text-red-600' },
  warning: { bg: 'bg-yellow-100', text: 'text-yellow-600' },
  success: { bg: 'bg-green-100', text: 'text-green-600' },
  info: { bg: 'bg-blue-100', text: 'text-blue-600' },
};

const ErrorMessageDemo: NextPage = () => {
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<MessageType>('error');
  const [duration, setDuration] = useState(3000);

  const handleShowMessage = (type: MessageType) => {
    setMessageType(type);
    setMessage(`This is a ${type} message.`);
  };

  return (
    <section className="w-2/3 flex flex-col border rounded-xl p-5 shadow-xl mb-8">
      <h2 className="text-2xl font-semibold mb-4">Error Message Component</h2>
      <p className="mb-4">
        The Message component is a versatile notification system that can display various types of messages,
        including errors, warnings, success notifications, and informational messages.
      </p>
      <div className="border-t pt-5 mb-4">
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold mb-6">Error Message Demo</h1>
          
          <div className="space-y-4 mb-6">
            {(Object.keys(messageStyles) as MessageType[]).map((type) => (
              <button
                key={type}
                onClick={() => handleShowMessage(type)}
                className={`px-4 py-2 rounded ${messageStyles[type].bg} ${messageStyles[type].text} font-semibold`}
              >
                Show {type.charAt(0).toUpperCase() + type.slice(1)} Message
              </button>
            ))}
          </div>

          <div className="mb-4">
            <label htmlFor="duration" className="block text-sm font-medium text-gray-700">
              Message Duration (ms):
            </label>
            <input
              type="number"
              id="duration"
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>

          <Message
            message={message}
            setMessage={setMessage}
            backgroundColor={messageStyles[messageType].bg}
            textColor={messageStyles[messageType].text}
            duration={duration}
          />
        </div>
      </div>
      <p className="text-sm text-gray-600 mt-4">
        Click the buttons to display different types of messages. Adjust the duration to control how long the message is displayed.
      </p>
    </section>
  );
};

export default ErrorMessageDemo;